# Food Atlas duplicate-image audit

**Updated:** 2026-10-29. This pass adds real, source-credited dish/process photographs while retaining the earlier explicit dish-and-stage mappings and removing generated review graphics.

The repeated-image root cause was category-based image selection. Timelines now use the explicit dish-and-stage manifest; unresolved stages have no generic image fallback. Some historical stages have a relevant modern preparation photo, explicitly disclosed as a present-day illustration, while their `manual_review` or `stage_mismatch` status remains intact.

## Current result

- 66 dishes × 6 stages = 396 explicit records.
- 60 stage records have actual local photographs (44 verified contemporary dish photos and 16 modern contextual illustrations).
- 336 stages have no photograph and show a plain-text review notice (275 manual-review; 61 stage-mismatch records).
- Modern-photo caveats do not erase historical review flags; the manifest stores image type separately from stage review status.
- Generated review SVGs, circular image overlays and generic image fallbacks are absent; scroll-driven stage behavior is preserved.
- The updated report lists every stage path, source, creator, licence and unresolved history/image note. The production build and three-route browser smoke tests passed; all 60 images are locally present, credited and unique by path/hash/perceptual check.

The source of truth is `src/data/timelineStageImageManifest.json`.
