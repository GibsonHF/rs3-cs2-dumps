# RS3 CS2 Dumps

Ongoing dumps of RuneScape 3 clientscript (CS2) files and game data, extracted directly from the live NXT cache.

This repo is auto-updated whenever a new extraction is run, so cloning (or pulling) always gives you the latest decompiled scripts, varbits, varps, and game data JSONs without having to run the extractor yourself.

## What's in here

```
.
├── cs2/                    # decompiled clientscripts (~20k+ files, TypeScript-like output)
├── items.json              # item definitions
├── npcs.json               # npc definitions
├── locations.json          # location/object definitions
├── enums.json              # enum definitions
├── structs.json            # struct definitions
├── dbrows.json             # database rows
├── achievements.json       # achievement definitions
├── quests.json             # quest definitions
├── latest_varbits.json     # all varbits from the latest cache
├── latest_varps.json       # all varps from the latest cache
├── cs2_diff.json           # diff of cs2 scripts vs. the previous dump
└── zips/                   # historical archives, one zip per extraction
    ├── 2-23-26.cs2.zip
    ├── 3-2-26.cs2.zip
    └── ...
```

## How it's generated

Everything here is produced by an automated extraction pipeline that:

1. Reads the local RS3 NXT cache and decompiles every clientscript
2. Extracts varbits and varps from the cache
3. Pulls the latest game data JSONs from the Chisel API
4. Diffs the new CS2 scripts against the previous dump to show what changed
5. Packages the run into a dated zip in `zips/`
6. Commits and pushes the update here

## Using the data

### Just want the latest?

```bash
git clone https://github.com/GibsonHF/rs3-cs2-dumps.git
```

Pull any time to get the newest extraction.

### Want a specific date?

Every run has its own zip in `zips/` named `M-D-YY.cs2.zip`. The filename matches the extraction date.

### Want to see what changed between runs?

- `cs2_diff.json` always reflects the most recent extraction vs. the one before it
- `git log` on `cs2/` shows the full history of script changes
- `git diff <old-commit> <new-commit> -- cs2/` gives you a proper diff between any two dumps

## Data sources

- **CS2, varbits, varps**: local RS3 NXT cache (`.jcache` SQLite files)
- **Game data JSONs**: [Chisel](https://chisel.weirdgloop.org/gazproj/cache)

## Notes

- CS2 files are decompiled output, not raw bytecode. Names for unknown opcodes and variables are best-effort.
- A tiny number of scripts (~1 in 20k) may have decompiler warnings on edge-case bytecode patterns, but the files still extract fully.
- This repo only holds the output of the extraction pipeline.
