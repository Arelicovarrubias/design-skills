---
name: design-critique
description: Review product designs, screenshots, Figma handoffs, UI flows, landing pages, prototypes, design specs, or design-system components and return prioritized, actionable critique. Use when designers ask Codex to critique, audit, improve, review, refine, polish, or find usability, accessibility, hierarchy, interaction, content, or visual issues in design work.
---

# Design Critique

## Overview

Review design work like a senior product design partner. Focus on what will improve user comprehension, usability, accessibility, consistency, and implementation quality.

## Critique Workflow

1. Identify the artifact, audience, user goal, and product context from the prompt, attached images, linked design context, or repo files.
2. If context is incomplete but a critique is still possible, state the assumptions briefly and proceed. Ask a clarifying question only when the critique would be misleading without the answer.
3. Review through these lenses:
   - User goal and task flow: whether the design makes the next action obvious and supports the main job.
   - Information hierarchy: whether layout, grouping, emphasis, and labels make the screen easy to scan.
   - Interaction and states: whether controls, navigation, feedback, loading, empty, error, and disabled states are clear.
   - Accessibility: contrast risk, touch target risk, keyboard/screen-reader implications, motion sensitivity, and text clarity.
   - Visual system fit: spacing, alignment, typography, icon use, color logic, component consistency, and responsive behavior.
   - Implementation readiness: missing specs, ambiguous behavior, edge cases, or handoff details that could slow engineering.

## Response Shape

Return concise, practical feedback in this order:

- **Snapshot**: one short paragraph naming the overall design read.
- **What works**: 2-4 specific strengths worth preserving.
- **Priority issues**: ordered findings with severity labels:
  - `P0`: blocks comprehension, task completion, accessibility, or launch readiness.
  - `P1`: likely hurts usability, trust, conversion, or implementation clarity.
  - `P2`: polish or consistency issue that should be improved if time allows.
- **Recommended next pass**: 3-6 concrete changes the designer can make.
- **Open questions**: only questions that would materially change the critique.

## Critique Standards

- Be specific. Refer to visible elements, labels, layout areas, or interaction moments.
- Prefer actionable recommendations over subjective taste.
- Preserve the design intent when possible; improve the current direction before proposing a full redesign.
- Separate evidence from inference. If guessing from limited context, say so.
- Avoid generic compliments, vague advice, and unsupported claims about brand rules.
- When reviewing a design for engineering handoff, call out missing states, responsive behavior, component variants, tokens, and acceptance criteria.

## Example Prompts

- "Use $design-critique to review this settings screen before I hand it to engineering."
- "Critique this onboarding flow and tell me the top issues to fix first."
- "Audit this landing page for hierarchy, accessibility, and conversion clarity."
