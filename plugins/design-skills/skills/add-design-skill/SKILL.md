---
name: add-design-skill
description: Create, edit, or review new skills for the private Design Skills Codex plugin. Use when a designer or maintainer asks to add a skill, draft a skill, standardize skill instructions, review a proposed skill, convert a repeatable design workflow into a skill, or update skill metadata in this repository.
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
2. Name the skill in lowercase hyphen-case. Prefer short action names, such as `design-critique`, `write-design-brief`, or `figma-handoff-review`.
3. Create the skill under `plugins/design-skills/skills/<skill-name>/`.
4. Add `SKILL.md` with only `name` and `description` in frontmatter.
5. Add `agents/openai.yaml` with designer-friendly display metadata.
6. Add `references/`, `assets/`, or `scripts/` only when they are necessary for repeatability or quality.
7. Bump the plugin version in `plugins/design-skills/.codex-plugin/plugin.json` when behavior changes.
8. Validate the skill and summarize what changed for review.

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
- The final answer names changed files and any validation that could not run.
