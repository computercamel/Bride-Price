const e=`# What makes a land, and what comes to him

The overview: what every land has, what the land brings him unasked, what answers what he does, and the events proposed. No numbers here, so nothing goes stale: they are in \`src/data/tuning.json\`, the full rules in \`docs/rules/\` (the index, docs/rules.md, says which file holds what is named in brackets).

## Every land
- **Fixed in every land** (The land): Malik's camp near the middle; Harith's water, the Well of Thorns (the wild herd and its thorn djinn) and the bandits' well further out, in any direction; four clan homes round Malik, paired by nearness, each pair sharing a meeting water; the empty waters, each with its djinn, the far ones open and the near ones held as the game starts; the hall in the cliffs on a side drawn from the land's seed.
- **No world conditions** (out of play 2026-10-24, pinned to bring back: \`docs/later.md\`): every land plays by the same rules.
- **Two clans at feud** on every land (two homes that share no meeting water): their men fight on sight on each other's grass or by a line, and by night they raid each other's homes. The kin say who.
- **Day and night** (\`sim/day.ts\`): by night the clans see little and half their men sit by the fire, wolves come out, and the meetings change.

## What comes to him unasked
- **Meetings in the open** (The open desert and wolves; \`encounters.ts\`, \`sightings.ts\`): away from water, one at a time and after a rest from the last fight, most surely soon after he rides out from a water and when he drives a long line far: a wolf pack; a bandit, two, or now and then three; wild camels astray (only far out); two of a clan's riders on their way to a water of theirs, their road crossing his; a bandit driving off a clan's camels with its men after him (cut him down and let them take their camels home, or take them yourself); a feud skirmish over two camels; wolves on a herdsman leading camels home; a bandit riding home with a camel or two; wolves on a wild camel or two. Starting out (few camels kept), more often what has camels to win. Out on the land with nothing come at him a while, something is sent that comes at him. Driving a line, the meetings are wolves or bandits after the camels. On foot, only meetings that bring camels he can take. By night, no wild camels or passing riders. Rarer round his own waters. Those met wander off and are gone once out of his sight.
- **The night's wolves** (The open desert and wolves): packs from dusk, more as the nights pass, one at a time and only when things are calm round him; the first goes for his line.
- **Harith** (Harith): single camels walked to Malik by a lone rider, guarded from his third, a parade from eight, about ten minutes to win unhindered.
- **Caravans** (Merchants): in from one edge, a call at a clan's home and at Malik's, out at the far edge; a moving prize.

## Answers to what he does
- He claims a clan's water: its riders ride to take it back. He takes one from the bandits: their riders come for it now and then.
- He kills a clan's man, or takes its water: blood feud; its riders hunt him, one party at a time, coming in waves from round him.
- He takes a clan's camels, men or water: its men answer, as many as the wrong deserves; the first theft brings a beating, a second death.
- He claims a water nobody held: nothing, its djinn, or its ghouls rising out of the sand (rules/ghouls.md "The ghouls").
- He comes at a clan's water: its big man (one at every clan water) mounts and comes with two of his riders; while the big man lives the water cannot be claimed.

## The land going about its life (simulated off-screen: whether to keep each is open, \`docs/plan.md\`)
Clans spread to outposts as their homes fill; the bandits sell their spare camels past the land's edge; herds breed at good grass; the clans at feud raid each other by night; clans retake waters taken from them.

## Clan battles
The **feud skirmish** is the one clan battle met in the open; otherwise clans fight each other only through the feud. Still to weigh: **a feud raid he can join** (the night raid made visible: he rides with them or warns the other clan); **a clan war** (the feud rising from night raids to a day battle between the two homes: a bigger build, worth it only if feuds become central).

## Proposed scripted events (pinned for talk, Claude's ideas)
Each small, each a choice, each a moment of the rahil, the journey. Claude's picks first.
1. **A calf crying alone**: a calf astray, its mother in a clan's herd far off. Lead it home for nothing, or take it to his water and wait for it to grow. (Pick: small, and a choice about cruelty that the verses could answer.)
2. **Harith's men on his trail**: once he leads three or more, two of Harith's riders are sent to scatter his line. (Pick: it makes Harith a person in the land, not a clock.)
3. **A wounded man in the sand**: a clansman left by wolves, his camel standing by. Help him home (his clan remembers it), take his camel (they find out), or leave him.
4. **A feast at Harith's water**: one night, his men sit round the fire and the herd stands unwatched. A chance, and a trap if he is seen.
5. **A mirage water** by night: a pool that is not on the map, its djinn the lure. Water for a man whose skin is dry, at a price.
6. **A bandit who sells back**: one of theirs offers a stolen camel for one of his own. The bandits' market given a face.
7. **The big men** (my partner's idea, 2026-10-24): each clan's big man, out with his riders; capture him and turn him, and his clan's camels come with him. (Built: at every clan water in every game since 2026-10-29, rules/bigmen.md "Big men hold the clans' waters"; first in New Game+.)

## Kept but out of play
Rocky outcrops and sandstorms, since 2026-10-23, in their test scenes on the test page.
`;export{e as default};
