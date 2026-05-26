import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const failures = [];

function fail(message) {
  failures.push(message);
}

function readText(filePath) {
  return fs.readFileSync(filePath, "utf8");
}

function exists(relativePath) {
  return fs.existsSync(path.join(root, relativePath));
}

function parseJson(relativePath) {
  try {
    return JSON.parse(readText(path.join(root, relativePath)));
  } catch (error) {
    fail(`${relativePath}: invalid JSON (${error.message})`);
    return null;
  }
}

function listDirectories(relativePath) {
  const absolutePath = path.join(root, relativePath);
  if (!fs.existsSync(absolutePath)) {
    fail(`${relativePath}: directory does not exist`);
    return [];
  }

  return fs
    .readdirSync(absolutePath, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name)
    .sort();
}

function parseSkillFrontmatter(skillPath) {
  const text = readText(skillPath);
  const match = text.match(/^---\n([\s\S]*?)\n---\n/);
  if (!match) {
    fail(`${skillPath}: missing YAML frontmatter`);
    return null;
  }

  const lines = match[1].split("\n").filter(Boolean);
  const keys = lines.map((line) => line.split(":")[0]);
  if (keys.join(",") !== "name,description") {
    fail(`${skillPath}: frontmatter must contain only name and description, in that order`);
  }

  const nameLine = lines.find((line) => line.startsWith("name:"));
  const descriptionLine = lines.find((line) => line.startsWith("description:"));
  const name = nameLine?.replace(/^name:\s*/, "").trim();
  const description = descriptionLine?.replace(/^description:\s*/, "").trim();

  if (!name) {
    fail(`${skillPath}: missing frontmatter name`);
  }

  if (!description || description.length < 80) {
    fail(`${skillPath}: description should clearly explain what the skill does and when to use it`);
  }

  return { name, description, text };
}

function validateSkill(skillName) {
  const skillDir = `plugins/design-skills/skills/${skillName}`;
  const skillPath = `${skillDir}/SKILL.md`;
  const openAiPath = `${skillDir}/agents/openai.yaml`;

  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(skillName)) {
    fail(`${skillDir}: skill folder must be lowercase hyphen-case`);
  }

  if (!exists(skillPath)) {
    fail(`${skillDir}: missing SKILL.md`);
    return;
  }

  if (!exists(openAiPath)) {
    fail(`${skillDir}: missing agents/openai.yaml`);
  }

  const frontmatter = parseSkillFrontmatter(path.join(root, skillPath));
  if (frontmatter?.name !== skillName) {
    fail(`${skillPath}: frontmatter name must match folder name`);
  }

  const skillText = frontmatter?.text ?? readText(path.join(root, skillPath));
  const scaffoldMarkers = ["[TO" + "DO", "TO" + "DO:", "FIX" + "ME"];
  if (scaffoldMarkers.some((marker) => skillText.includes(marker))) {
    fail(`${skillPath}: contains scaffold placeholder text`);
  }

  if (!skillText.includes("## Overview")) {
    fail(`${skillPath}: missing ## Overview section`);
  }

  if (exists(openAiPath)) {
    const openAiText = readText(path.join(root, openAiPath));
    for (const required of ["interface:", "display_name:", "short_description:", "default_prompt:"]) {
      if (!openAiText.includes(required)) {
        fail(`${openAiPath}: missing ${required}`);
      }
    }

    if (!openAiText.includes(`$${skillName}`)) {
      fail(`${openAiPath}: default_prompt must mention $${skillName}`);
    }
  }

  for (const extraDoc of ["README.md", "INSTALLATION_GUIDE.md", "QUICK_REFERENCE.md", "CHANGELOG.md"]) {
    if (exists(`${skillDir}/${extraDoc}`)) {
      fail(`${skillDir}: do not add ${extraDoc} inside skill folders`);
    }
  }
}

const marketplace = parseJson(".agents/plugins/marketplace.json");
if (marketplace) {
  if (marketplace.name !== "design-skills-marketplace") {
    fail(".agents/plugins/marketplace.json: name must be design-skills-marketplace");
  }
  if (!Array.isArray(marketplace.plugins) || marketplace.plugins.length !== 1) {
    fail(".agents/plugins/marketplace.json: expected exactly one plugin entry");
  }
  const pluginEntry = marketplace.plugins?.[0];
  if (pluginEntry?.name !== "design-skills") {
    fail(".agents/plugins/marketplace.json: plugin entry must be named design-skills");
  }
  if (pluginEntry?.source?.path !== "./plugins/design-skills") {
    fail(".agents/plugins/marketplace.json: plugin source path must be ./plugins/design-skills");
  }
  if (pluginEntry?.policy?.installation !== "AVAILABLE") {
    fail(".agents/plugins/marketplace.json: installation policy must be AVAILABLE");
  }
  if (pluginEntry?.policy?.authentication !== "ON_INSTALL") {
    fail(".agents/plugins/marketplace.json: authentication policy must be ON_INSTALL");
  }
}

const plugin = parseJson("plugins/design-skills/.codex-plugin/plugin.json");
if (plugin) {
  if (plugin.name !== "design-skills") {
    fail("plugin.json: name must be design-skills");
  }
  if (!/^\d+\.\d+\.\d+$/.test(plugin.version ?? "")) {
    fail("plugin.json: version must be semantic, like 0.3.0");
  }
  if (plugin.skills !== "./skills/") {
    fail("plugin.json: skills must be ./skills/");
  }
  if (!exists("plugins/design-skills/skills")) {
    fail("plugin.json: skills path does not exist");
  }
}

for (const skillName of listDirectories("plugins/design-skills/skills")) {
  validateSkill(skillName);
}

if (failures.length > 0) {
  console.error("Design Skills validation failed:\n");
  for (const failure of failures) {
    console.error(`- ${failure}`);
  }
  process.exit(1);
}

console.log("Design Skills validation passed.");
