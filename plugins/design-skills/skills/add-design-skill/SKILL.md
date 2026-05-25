---
name: add-design-skill
description: Create, edit, or review new skills for the private Design Skills Codex plugin and route the change through a GitHub pull request. Use when a designer or maintainer asks to add a skill, draft a skill, standardize skill instructions, review a proposed skill, convert a repeatable design workflow into a skill, update skill metadata, or prepare a skill contribution in this repository.
---

# Add Design Skill

## Overview

Create Design Skills plugin skills that are easy for designers to request, easy for Codex to trigger, and simple for maintainers to review. Use `design-critique` as the reference example for tone, structure, and level of detail.

## Workflow

1. Clarify the skill intent with the fewest useful questions:
   - What repeatable design task should Codex perform?
   - What should trigger the skill?
   - What output should a designer receive?
   - Does the skill need references, scripts, or assets, or can it stay instruction-only?
2. Run the contributor readiness check below before editing.
3. Create or switch to a feature branch before editing. Use a branch name like `codex/add-<skill-name>` or `codex/update-<skill-name>`.
4. Name the skill in lowercase hyphen-case. Prefer short action names, such as `design-critique`, `write-design-brief`, or `figma-handoff-review`.
5. Create the skill under `plugins/design-skills/skills/<skill-name>/`.
6. Add `SKILL.md` with only `name` and `description` in frontmatter.
7. Add `agents/openai.yaml` with designer-friendly display metadata.
8. Add `references/`, `assets/`, or `scripts/` only when they are necessary for repeatability or quality.
9. Bump the plugin version in `plugins/design-skills/.codex-plugin/plugin.json` when behavior changes.
10. Validate the skill and summarize what changed.
11. Commit the branch, push it, and open a GitHub pull request for review.

## Contributor Readiness Check

Before creating files, verify the user is working in a local clone of the Design Skills repository and can push to GitHub:

- `git --version` works.
- `gh --version` works.
- `gh auth status` shows the user is logged in.
- `gh repo view Arelicovarrubias/design-skills` succeeds.
- The current folder contains `.agents/plugins/marketplace.json` and `plugins/design-skills/.codex-plugin/plugin.json`.
- `git remote -v` shows `origin` pointing to `https://github.com/Arelicovarrubias/design-skills.git` or an equivalent GitHub SSH URL.

If Git, GitHub CLI, GitHub auth, repository access, or the local clone is missing, stop and tell the user to run `$setup-design-skills-contributor` first. Do not create a local-only commit.

If the current folder is clearly the Design Skills repository but `origin` is missing, add:

```bash
git remote add origin https://github.com/Arelicovarrubias/design-skills.git
```

Then fetch `origin/main` and continue. If `origin` points somewhere else, stop and ask before changing it.

If push or PR creation fails after committing because of missing GitHub authentication or repository access, tell the user to run `$setup-design-skills-contributor`, then retry the push and PR. Do not describe the work as complete until a pull request URL exists.

## Pull Request Requirement

Skill additions and skill behavior changes must go through a pull request. Do not commit directly to `main` or push directly to `main` when using this skill, even if repository branch protection is not available.

If GitHub branch protection is unavailable, treat this skill as the process guardrail:

- Work on a feature branch.
- Commit only the requested skill and documentation changes.
- Push the feature branch.
- Open a pull request against `main`.
- Leave merging to a maintainer after review.

## Skill Standard

Every skill must follow this shape:

```text
plugins/design-skills/skills/<skill-name>/
|-- SKILL.md
`-- agents/
    `-- openai.yaml
```

Optional folders are allowed only when useful:

- `references/`: detailed guidance Codex should read only when needed.
- `assets/`: templates, examples, images, or files Codex should reuse in outputs.
- `scripts/`: repeatable commands or utilities that improve reliability.

Do not add `README.md`, installation guides, changelogs, or duplicate documentation inside individual skill folders.

## SKILL.md Rules

Use this frontmatter shape exactly:

```yaml
---
name: skill-name
description: Front-load the main use case and trigger words. Explain when Codex should use the skill and what it helps produce.
---
```

Write the body for Codex, not for human onboarding. Keep it concise and procedural.

Include:

- `# Skill Name`
- `## Overview`
- A workflow, decision rules, standards, or response shape.
- Example prompts if they help clarify triggering.

Avoid:

- Generic advice Codex already knows.
- Long background explanations.
- Human setup instructions.
- Placeholder text.
- Broad descriptions that cause the skill to trigger for unrelated work.

## Description Checklist

The `description` controls implicit invocation, so make it compact and searchable.

- Start with the main job: `Create...`, `Review...`, `Draft...`, `Audit...`.
- Include artifacts: screenshots, Figma handoffs, briefs, flows, design-system components, research notes, or prototypes.
- Include trigger words designers naturally use.
- Include boundaries if the skill should not cover adjacent work.
- Keep the most important words near the beginning in case descriptions are shortened.

## openai.yaml Rules

Use `agents/openai.yaml` for Codex app display metadata:

```yaml
interface:
  display_name: "Human Friendly Name"
  short_description: "Short designer-readable summary"
  default_prompt: "Use $skill-name to ..."
```

The default prompt must mention the skill as `$skill-name`.

## Review Checklist

Before finishing, confirm:

- The skill follows the `design-critique` level of clarity and compactness.
- The skill is useful for a repeatable design workflow, not a one-off prompt.
- The frontmatter has only `name` and `description`.
- `agents/openai.yaml` exists and uses the same skill name in `default_prompt`.
- No scaffold placeholders remain.
- Optional resources are referenced from `SKILL.md` and are not duplicated there.
- The plugin version is bumped for behavior changes.
- The contributor readiness check passed, or `$setup-design-skills-contributor` was recommended before editing.
- The changes are on a feature branch, not committed directly to `main`.
- A pull request has been opened, or the final answer clearly says why a PR could not be opened.
- The final answer names changed files and any validation that could not run.
