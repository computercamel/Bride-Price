const e=`# Merchants

## How it plays
Caravans cross the land between the camps: a master leading a short line, with two guards. He can cut one camel from the back and run, with one guard after him, or beat the master down and the whole line stands loose. The road keeps out of other waters' grass, so a caravan is a chase across open sand, not a line handed to him at his own water.

## The rules
- **Their road**: in from one edge, a call at one clan's home and at Malik's camp, out at the far edge.
- **The caravan**: a mounted master leading a few camels (\`camels\`, two more on a busy road), two mounted guards (\`guards\`), one at his flank and one behind the line's tail, along the line from the camel ahead of it (a third, on a busy road, at his other flank) [placed by the way the tail faced, at a rest the tail turned to and fro and the guard walked on the spot, chasing his place from side to side of it].
- **Two ways at a caravan**: cut a camel from the back of the line and that one camel is his; the rest stay roped to the master and one guard comes after him, the other staying with the line (\`answer.ts\`). Beat the master down and his whole line stands loose.
- **Attacked**, the master drives his line on (at a run while a foe is in sight) and lets his guards fight; he fights only with no guard left standing or no line left (2026-10-22: a raid is a chase along a moving line).
- **A scattered line** (by wolves or by him) is gathered again by the master and guards before they go on (\`regather\`).
- **The road keeps to the open sand** (\`caravans.ts\` roundWaters; my partner 2026-10-25, of a play: "i dont like how those merchants drove their camels throught the middle of my oasis, it made it too easy to attack and convert their camels"): where the way on to the next call crosses another water's grass, the master leads his line round it first, a little out from its edge.
- **No news** about caravans.

## Testing
Test scene caravanRound.

## Where it lives
Code: \`sim/caravans.ts\`; who answers a theft, \`sim/answer.ts\`. Numbers: \`tuning.json\`, \`caravan\`.
`;export{e as default};
