# Contributing

This repo keeps the Design Skills plugin up to date for everyone in our organization. Designers do not need to know Git, GitHub CLI, branches, staging, or pull requests to suggest a new skill. You can ask Codex to do the technical steps.

## The Easiest Way

1. Open Codex.
2. Start a new thread.
3. If this is your first time contributing, ask Codex to use `$setup-design-skills-contributor`.
4. After setup is complete, paste your skill idea in plain language.
5. Ask Codex to use `$add-design-skill`.

Example:

```text
Use $add-design-skill to add a skill that helps designers write better UX research interview guides.

The skill should help with:
- choosing interview goals
- writing neutral questions
- avoiding leading language
- creating a final interview script
```

Codex should create the files, check the format, and prepare the GitHub changes for review.

Important: skill additions and skill behavior changes should happen through a pull request. Codex should create a branch, push it, and open a pull request instead of pushing directly to `main`.

If Codex says Git, GitHub, GitHub CLI, GitHub authentication, or a Git remote is missing, ask it to run `$setup-design-skills-contributor` first. That setup skill is meant to install the tools, log in safely, clone the repo, and fix the `origin` remote for you.

## What To Include In Your Request

Keep it simple. A good skill request answers:

- What design task should this skill help with?
- When should Codex use it?
- What should the final answer look like?
- Do you have a good example, template, checklist, or reference?

You do not need perfect wording. A rough idea is enough.

## What Happens Next

After you ask Codex to add the skill:

1. Codex creates a draft in this repo.
2. Codex opens a pull request on GitHub.
3. A maintainer reviews it.
4. After approval, the skill becomes part of the shared `Design Skills` plugin.
5. Designers may need to refresh or reinstall the plugin in Codex if the update is not visible.

## If You Want To Use GitHub Directly

Use the GitHub website, not the command line.

1. Open the repository in your browser.
2. Click `Issues`.
3. Click `New issue`.
4. Choose `Skill request`.
5. Write the skill idea and include any examples.
6. Submit the issue.

A maintainer or Codex can turn the issue into a pull request.

## If You Already Know Pull Requests

You can also open a pull request from a branch. Please keep one skill per pull request when possible, and use `$add-design-skill` to check that the skill follows the repo standard.

If you do not know what a branch or pull request is, skip this section. Use Codex or open an issue instead.

## Pull Request Protection

The goal is for `main` to accept changes only through pull requests. If GitHub branch protection or repository rulesets are available for this repository, maintainers should enable:

- Require a pull request before merging.
- Block direct pushes to `main`.
- Require the branch to be up to date before merging when practical.
- Include administrators if the organization wants the rule to apply to everyone.

## Skill Quality Checklist

Every new skill should:

- Solve a repeatable design workflow.
- Have a short lowercase hyphen-case name, like `design-critique`.
- Include a clear `SKILL.md` with only `name` and `description` in the frontmatter.
- Include `agents/openai.yaml` so the skill looks clear in Codex.
- Stay concise and practical.
- Use references, assets, or scripts only when they genuinely help.
- Bump the plugin version when behavior changes.
- Run `$setup-design-skills-contributor` first if GitHub, GitHub CLI, or the repo remote is not ready.

## Maintainer Notes

Maintainers can use `$add-design-skill` when creating or reviewing skill changes. Keep new work on a branch and merge through a pull request so the `main` branch remains stable.
