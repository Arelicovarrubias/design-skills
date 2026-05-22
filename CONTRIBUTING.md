# Contributing

This repository stores Codex skills for designers inside a private workspace-shared plugin. Keep contributions small, explicit, and easy for non-technical designers to benefit from.

## Add A Skill

1. Create a folder under `plugins/design-skills/skills/<skill-name>/`.
2. Use lowercase hyphen-case for `<skill-name>`.
3. Add a required `SKILL.md`.
4. Add `agents/openai.yaml` for Codex app display metadata.
5. Add `scripts/`, `references/`, or `assets/` only when the skill genuinely needs them.

## SKILL.md Requirements

The frontmatter must contain only:

```yaml
---
name: skill-name
description: Clear trigger description that says what the skill does and when Codex should use it.
---
```

Write the body as concise instructions for Codex. Prefer short workflows, decision rules, expected output shape, and realistic example prompts. Do not add separate installation guides inside skill folders.

## Validation Checklist

Before sharing an update:

- `plugin.json` is valid JSON.
- `.agents/plugins/marketplace.json` is valid JSON.
- Every marketplace `source.path` points to an existing plugin folder.
- Every plugin `skills` path points to an existing skills folder.
- Every skill has `SKILL.md`.
- `SKILL.md` frontmatter contains only `name` and `description`.
- No generated `[TODO: ...]` placeholders remain.
- The plugin version has been bumped when behavior changes.

## Release Rule

Every merged change that alters skill behavior, adds a skill, removes a skill, or changes user-facing plugin metadata must update `plugins/design-skills/.codex-plugin/plugin.json`.
