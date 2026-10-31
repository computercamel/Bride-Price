const e=`# Bride Price: the rules

Every rule of play, one file per system in \`docs/rules/\`, listed here in the order a player meets things. Read only the file for the piece you are working on.

**How each file is kept**: it opens with how the system plays, then where it came from, then the rules, then its test scenes, and last where it lives (its code, its numbers, the files beside it). Each rule is written as the game plays it now, with who asked for it and their own words; in square brackets what went wrong before, when that explains the rule. Numbers are not written out: each is named by its key in \`src/data/tuning.json\` (or \`world.json\`), so the docs never go stale when a number is tuned. A changed rule is rewritten in place, never added after the old one. Old values, measurements and test runs go in the commit message; Git keeps every earlier version (\`git log -p docs/rules/<file>\`, and before 2026-10-30 \`git log -p docs/rules.md\`). Land rules live in \`world.json\`, all text in \`text.json\`.

## Before play
- [screens.md](rules/screens.md): the opening, the title, the colour screen, How to play, the phone (turning, upright, an iPhone's bars).
- [controls.md](rules/controls.md): the touch stick, the buttons, the keys, the pause menu, the tester's tools.

## At Malik's fire
- [camp.md](rules/camp.md): the opening scene, Malik's two kinsmen and their lines, the camp about its day, Malik's peace.
- [writing.md](rules/writing.md): Salma's silence, what my partner's edits teach.

## Out on the land
- [land.md](rules/land.md): the fan, Malik's alcove, the rings of waters, camps and tents, waters held at the start, the cliffs, palms and his rope on them.
- [ground.md](rules/ground.md): how the sand, the cliffs, the grass and the water look, and how they are painted.
- [hud.md](rules/hud.md): the news, the minimap and its fog, the water's name, barks.
- [riding.md](rules/riding.md): galloping, going straight, flat out, running on foot, camels' gaits and their drawings north and south.

## Camels and men
- [camels.md](rules/camels.md): claiming waters, banners, wild camels, breeding, stealing, lines, loose camels.
- [clans.md](rules/clans.md): the dyes, herdsmen, who answers a theft, chases, the faction table, blood feud, parties in waves, outposts, the feud between two clans.
- [bigmen.md](rules/bigmen.md): big men holding the clans' waters, on foot till a fight, their sword from the saddle, their faces.
- [men.md](rules/men.md): the rope on men, prisoners, men begetting men, his riders, the spoils, his men dragged away.
- [harith.md](rules/harith.md): the rival's plan, singles and parades, Malik counting and refusing.
- [bandits.md](rules/bandits.md): the Raiders' Well, no more than three, their market.
- [merchants.md](rules/merchants.md): caravans.

## Danger
- [desert.md](rules/desert.md): meetings in the open, coming home, his water skin.
- [wolves.md](rules/wolves.md): packs at dusk, their pace, the kill, eating him.
- [fighting.md](rules/fighting.md): blows, his staff's moves, strength, how bands fight him, beaten and killed as he lies, striking camels.
- [dead.md](rules/dead.md): the beaten and the dead, vultures, rot, floating.
- [djinn.md](rules/djinn.md): the water djinn and the thorn djinn.
- [ghouls.md](rules/ghouls.md): the ghouls.

## The far land
- [hall.md](rules/hall.md): the hall's fronts and guardians, going in, the chamber, its pillars and his rope on them.
- [oldgod.md](rules/oldgod.md): the old god's waking and her first stage.
- [goddess.md](rules/goddess.md): her second stage, the goddess and her eye.
- [relic.md](rules/relic.md): the relic and what it does with his staff.
- [cave.md](rules/cave.md): the cave of the forty thieves, its wheel, "Open sesame!", its room, the black camel.

## The end
- [endings.md](rules/endings.md): the verses, the sandstorm, killed by, the weddings.
- [plus.md](rules/plus.md): New Game+.

## Under it all
- [speed.md](rules/speed.md): work only where he can see.

## Where the old sections went
For notes that still name a section of the old single file: The land (land.md, ground.md; the minimap and the water's name to hud.md; dyes and the feud to clans.md; loose camels to camels.md). The screens (screens.md, controls.md, hud.md). Camels and his waters (camels.md; big men to bigmen.md; roping a man, prisoners, men beget men to men.md; gaits to riding.md). Clans, anger and blood price (clans.md; barks to hud.md). Harith (harith.md; killed only by a blow as he lies to fighting.md). The hall, the old god and the relic (hall.md, oldgod.md, goddess.md, relic.md). The open desert and wolves (desert.md, wolves.md). Malik's camp, his men, the writing, the endings (camp.md, men.md, writing.md, endings.md). The rest kept their names.
`;export{e as default};
