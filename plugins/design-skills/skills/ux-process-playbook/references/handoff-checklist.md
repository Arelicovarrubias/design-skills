# Handoff Checklist

Use this for engineering handoff, design QA, implementation readiness, and launch-quality review.

## Handoff Inputs

- User goal and product requirement.
- Final flow or prototype.
- Component and design-system references.
- Content rules.
- Data dependencies.
- Platform and responsive requirements.
- Accessibility requirements.
- Known open questions.

## Engineering-Ready Checklist

Flow and scope:

- Happy path, alternate paths, exits, and recovery paths are clear.
- Out-of-scope items are named.
- Dependencies and sequencing are visible.

States:

- Loading, empty, error, success, disabled, active, hover, focus, selected, and permission states are specified where relevant.
- Validation and error copy are included.
- Long content, missing content, and edge cases are considered.

Components:

- Existing components are reused where possible.
- New components include variants, behavior, responsive rules, and token guidance.
- Icons, color use, and interaction patterns match the design system.

Content:

- Labels, helper text, warnings, confirmation copy, and empty states are final or clearly marked as draft.
- Localization, truncation, and variable data are considered when relevant.

Accessibility:

- Keyboard order and focus behavior are defined for interactive flows.
- Error handling does not rely only on color.
- Contrast, target sizes, form labels, headings, and screen-reader names are considered.

Acceptance criteria:

- Criteria are testable and written from user-visible behavior.
- Analytics, permissions, performance, and compliance requirements are included when relevant.

QA:

- Designer review points are scheduled.
- Known risks and unresolved decisions have owners.

## Handoff Artifact Shape

- Scope:
- Links:
- User goal:
- Flow summary:
- Component notes:
- State requirements:
- Content rules:
- Accessibility notes:
- Acceptance criteria:
- Open questions:
- QA plan:
