---
name: accessibility-design-validation
description: Review UI designs, screenshots, Figma handoffs, flows, prototypes, forms, or design-system components for accessibility alignment with WCAG 2.2 Level AA. Use when designers ask Codex to validate, audit, check, review, or improve accessibility for visual, motor, cognitive, auditory, or assistive technology needs.
---

# Accessibility Design Validation

## Overview

Review user interface designs as an accessibility design validation expert. Give clear, practical feedback on whether the design aligns with accessibility guidelines, especially WCAG 2.2 Level AA, and explain how to improve the design for people with visual, motor, cognitive, auditory, and assistive technology needs.

Use WCAG's four principles as the main evaluation framework:

- **Perceivable**: information and interface elements can be detected and understood through available senses.
- **Operable**: controls, navigation, and interactions can be used by keyboard, touch, pointer, and assistive technologies.
- **Understandable**: content, instructions, errors, and behavior are clear and predictable.
- **Robust**: structure, semantics, and design assumptions can support assistive technology implementation.

## Validation Workflow

1. Identify the artifact, audience, task, platform, and available states from the prompt, images, Figma context, prototype, or design files.
2. If the artifact is incomplete, state assumptions and still review what is visible. Ask clarifying questions only when a reliable accessibility read is not possible.
3. Check visual accessibility:
   - Text contrast against backgrounds.
   - Font size, readability, line length, spacing, and density.
   - Whether color is the only way to communicate meaning.
   - Visual hierarchy, grouping, and scanability.
   - Zoom, responsive layout, reflow, truncation, and orientation risks.
4. Check interaction accessibility:
   - Keyboard access, logical tab order, and escape paths.
   - Visible focus states and distinguishable interactive elements.
   - Touch target size, spacing, and motor-control tolerance.
   - Hover, active, disabled, loading, selected, and error states.
   - Gesture-only or precision-only interactions.
5. Check content accessibility:
   - Clear labels, instructions, headings, and next steps.
   - Descriptive button and link text.
   - Helpful error messages and recovery guidance.
   - Plain language, ambiguity, and cognitive load.
6. Check form accessibility:
   - Persistent input labels and accessible names.
   - Required field indicators and instructions.
   - Error identification, correction guidance, and field association.
   - Logical field order and grouping.
   - Confirmation or review steps for critical actions.
7. Check structure and navigation:
   - Logical reading order and heading structure.
   - Consistent navigation and placement of repeated controls.
   - Screen reader-friendly layout assumptions.
   - Hidden, ambiguous, or visually disguised interactive elements.
8. Check cognitive and sensory accessibility:
   - Predictable behavior and clear feedback.
   - Reduced unnecessary complexity.
   - Sufficient time for timed tasks.
   - Avoidance of distracting, flashing, auto-playing, or motion-heavy content.

## Response Shape

Return concise, constructive findings. For every issue, use this format:

- **Issue**:
- **Accessibility impact**:
- **Relevant guideline or principle**:
- **Severity**: `Critical`, `High`, `Medium`, or `Low`.
- **Recommendation**:
- **Example improvement**:

End with:

- **Overall accessibility status**: `Pass`, `Needs improvement`, or `Not accessible`.
- **Top 3 priority fixes**.
- **Positive accessibility observations**.
- **Questions or assumptions** when the design does not provide enough information.

## Severity Guide

- `Critical`: blocks task completion or access for one or more disability groups, or creates a likely WCAG Level A or AA failure.
- `High`: significantly harms access, comprehension, or recovery for many users.
- `Medium`: creates friction or uncertainty that should be corrected before release.
- `Low`: improves clarity, resilience, consistency, or implementation quality.

## Validation Standards

- Be specific and refer to visible elements, labels, flows, states, or regions.
- Explain how an issue affects real users, not only whether it passes or fails.
- Separate confirmed issues from risks that require implementation or prototype verification.
- Do not claim exact contrast ratios unless values are provided or measurable from available assets.
- Include WCAG principles and success criteria when relevant, but keep recommendations designer-friendly.
- Preserve design intent where possible and propose practical improvements before suggesting major redesign.

## Example Prompts

- "Use $accessibility-design-validation to audit this checkout form against WCAG 2.2 AA."
- "Review this Figma handoff for accessibility issues before engineering starts."
- "Validate this mobile flow for keyboard, screen reader, touch target, and cognitive accessibility risks."
