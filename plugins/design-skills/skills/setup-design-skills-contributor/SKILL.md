---
name: setup-design-skills-contributor
description: Set up a non-technical designer's computer to contribute to the private Design Skills repository. Use when a designer needs first-time setup for GitHub account access, Homebrew, Git, GitHub CLI, Git name/email, gh authentication, cloning the design-skills repo, fixing missing origin remotes, or preparing their machine before using $add-design-skill.
---

# Setup Design Skills Contributor

## Overview

Prepare a designer's computer so Codex can create a branch, commit, push, and open pull requests for the Design Skills repository. Assume the user is non-technical: explain what is happening in plain language, run commands for them when possible, and never ask them to paste passwords or tokens into chat.

## Safety Rules

- Ask before installing software or changing global Git settings.
- Do not ask for a GitHub password, personal access token, or one-time code in chat.
- Prefer browser-based GitHub login through `gh auth login --web`.
- If a command needs approval, explain the reason in one sentence.
- Stop and ask a maintainer for help if repository access is denied after login.

## Setup Workflow

1. Ask whether the user already has a GitHub account.
   - If yes, continue.
   - If no, help them open `https://github.com/signup`, ask them to create and verify the account, then continue after they confirm it is ready.
2. Ask for the name and email address they want attached to Git commits. The email should be the one used for GitHub unless their organization uses a different Git email.
3. Check whether Homebrew is installed with `brew --version`.
   - If missing, explain that Homebrew installs developer tools safely on macOS.
   - Ask for approval, then install from the official Homebrew script.
   - After install, ensure `brew` is available in the current shell.
4. Check whether Git is installed with `git --version`.
   - If missing, install it with Homebrew.
   - If present, continue.
5. Configure Git identity:
   - `git config --global user.name "<name>"`
   - `git config --global user.email "<email>"`
   - Confirm with `git config --global --get user.name` and `git config --global --get user.email`.
6. Check whether GitHub CLI is installed with `gh --version`.
   - If missing, install it with Homebrew.
7. Log in to GitHub CLI:
   - Tell the user GitHub may open in a browser and they should log in with their GitHub credentials.
   - Run `gh auth login --web --git-protocol https`.
   - Confirm with `gh auth status`.
8. Confirm the user has access to `Arelicovarrubias/design-skills`:
   - Run `gh repo view Arelicovarrubias/design-skills`.
   - If access is denied, ask a maintainer to invite the user to the private repository before continuing.
9. Clone or open the repository:
   - Preferred local folder: `~/Documents/design-skills`.
   - If the folder does not exist, clone with `gh repo clone Arelicovarrubias/design-skills ~/Documents/design-skills`.
   - If a folder already exists, verify it contains `.agents/plugins/marketplace.json` and `plugins/design-skills/.codex-plugin/plugin.json`.
10. Verify or fix the Git remote inside the repository:
    - If `origin` points to `https://github.com/Arelicovarrubias/design-skills.git` or an equivalent GitHub SSH URL, continue.
    - If `origin` is missing and the folder is clearly the Design Skills repository, add `origin` with `https://github.com/Arelicovarrubias/design-skills.git`.
    - If `origin` points somewhere else, stop and ask before changing it.
11. Run a final readiness check:
    - `git remote -v`
    - `git status --short --branch`
    - `gh auth status`
    - `gh repo view Arelicovarrubias/design-skills`

## Homebrew Install Command

Use the official Homebrew install command only after explaining it and receiving approval:

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

After Homebrew installs, use the path it prints. If needed, test common macOS paths:

```bash
test -x /opt/homebrew/bin/brew && eval "$(/opt/homebrew/bin/brew shellenv)"
test -x /usr/local/bin/brew && eval "$(/usr/local/bin/brew shellenv)"
```

## Final Answer

End with a short status:

- GitHub account ready or still needed.
- Homebrew, Git, and GitHub CLI installed or already present.
- Git name and email configured.
- GitHub CLI authenticated or blocked.
- Repository cloned/opened.
- `origin` remote configured.
- Whether the user can now run `$add-design-skill`.
