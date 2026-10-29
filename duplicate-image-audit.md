# Food Atlas duplicate-image audit

**Updated:** 2026-10-29. This follow-up removes generated review graphics and preserves the earlier per-dish/per-stage mapping work.

The repeated-image root cause was category-based image selection. Timelines now use the explicit dish-and-stage manifest; an unresolved stage has no image reference rather than a shared generic photo or SVG. The pinned scroll animation and food-selection architecture remain intact.

## Current result

- 66 dishes × 6 stages = 396 explicit records.
- 51 stage records have actual local photographs (44 verified contemporary dish photos and 7 clearly disclosed modern contextual illustrations).
- 345 stages have no photograph and show a plain-text review notice (282 manual-review; 63 stage-mismatch records).
- Floating circular image orbs, pop-out photo circles, and all 345 generated review SVGs were removed; no photo is replaced with text artwork.
- No image files were added or replaced in this follow-up. Direct Wikimedia image downloads were rate-limited; those candidates were not imported. See the [full 66-dish validation report](timeline-image-validation-report.md) for exact assigned sources and unresolved stages.
- Production build passed; all 51 assigned photos decode and retain creator/source/licence metadata, with no repeated paths, exact hashes or dHash near-duplicates at distance ≤3.
- Smoke-tested Vada Pav (stage 1→2 forward, 2→1 reverse, plus its stage-6 photo/credits), Idli-Sambar (modern illustration disclosure and stage-6 photo/credits), and Hyderabadi Haleem (modern ingredient/process disclosures and text-only missing-stage flags).

The source of truth is `src/data/timelineStageImageManifest.json`.
