# Food Atlas duplicate-image audit

**Updated:** 2026-10-29. This audit supersedes the earlier 38-photo/final-stage-only snapshot.

The root cause was category-based generic image selection across journeys. The timeline now resolves all 396 stage images through an explicit dish-and-stage manifest; the generic/shared photo fallback has been removed. Scroll-driven animation, navigation, and layouts are preserved.

## Current result

- 66 dishes × 6 stages = 396 unique local image paths.
- 44 verified contemporary stage-6 photos (38 previously verified assets kept; 6 new photo assets added).
- 7 modern ingredient/tool/process photos used as context illustrations with a visible “not evidence of the era” disclaimer.
- 345 stages remain on explicit review cards: 282 manual-review and 63 stage-mismatch records.
- Every displayed photo records creator, source, licence, attribution and modifications; the UI exposes source and licence links.
- Build and browser smoke tests passed. No deployment or remote update was made.

See the [complete 66-dish, six-stage validation report](timeline-image-validation-report.md) for every image path, source/licence citation, candidate rejection, and unresolved stage note. The source of truth is `src/data/timelineStageImageManifest.json`.
