const e=`# The relic

## How it plays
When the goddess falls, a plinth rises out of the chamber's floor and the relic shimmers into being on it: a gold crescent under a shaft of light. He takes it, holds it over his head a moment, and from then on his staff throws its light: every blow flings a crescent that flies ahead and strikes the first foe it touches, the whirl spreads a band of gold round him, and the charged blow throws a faster, wider, red crescent. It makes the djinn easier but not trivial. It stays his into New Game+.

## Where it came from
My partner: "a treasure room... we need an object. if the player picks up this object with interact button his swing attack now has a cool looking but in our artstyle whooshing attack that goes pretty far before disapearing but not too far... shouldnt be too op, and should make djinn fight easier but not trivial"; 2026-10-24: "bring back the motes when the item appears, and have it be on a podium that rises from the gound, and maybe the relic appears with a shimmer".

## The rules
- **The plinth** lies flush with the floor till the old god falls, a slab of paler stone, its joint round it, the relic's crescent cut in it, walked over (hall.md). Risen, its top lit along its front edge, its face coursed, its right in shade, all of it a darker stone than the floor (palette plinth, plinthDeep; my partner 2026-10-29: "i cant see the relic, and the light effect is bad now. make the plinth that the relic rises on be darker, and the hall floor a bit darker too, and look and make sure the relic stands out and is readable").
- **The relic**: a crescent horns up in gold, lit on its left, on a bronze stem and foot, no ink round it.
- **Its rising**: the plinth rises out of the floor (\`relic.rise\`), grinding, dust at its edges, the floor trembling, and on it the relic shimmers into being (a scatter of pale sparks gathering into the crescent) under a shaft of light in bands, a bright thread at its middle, fading upward in steps, its gold glow on the plinth's top. Lying there it flashes pale now and then and a star winks on its left horn after (\`relic.flash\`; "we can make it have some kind of flash animation maybe"; the bands and flash Claude's), motes of light drifting up through the shaft and motes of darkness sinking round it while it lies there (\`view/relicArt.ts\`). It cannot be taken till then.
- **Taking it**: with the action button (Take: "A crescent of old bronze, still warm."), from any side of the plinth, his feet near its foot (\`sim/hall.ts\` byPlinth) (my partner 2026-10-26: "the player is unable to grab it when he is on the back side of the podium"). He holds it up over his head between his hands a moment, still (\`relic.lift\`; his 'lift' pose, arms up either side of his head, facing us), the relic flashing pale as he lifts it, its gold glow about it and rays of its light turning (\`view/relicArt.ts\` held; my partner 2026-10-29: "when the player picks up the relic they need to hold it above their head briefly like in legend of zelda"; the pose, rays and glow Claude's), then goes on with it.
- **The risen plinth stops his feet where it is drawn** and is drawn among the figures, so from behind he stands behind it and from in front close to it ("he is able to walk inside the white part of the podium right now so it doesnt look realistic").
- **It answers his staff's moves** (\`relic.ts\` relicMove, bandStep; my partner 2026-10-28: "we need new relic attacks that correspond to the new set of player attacks... first strike shoots relic attack as it is now, but tuned to the swing, not a timer. second swish does no relic attack, third whirl combo does normal animation plus a golden animation widens and trails the original whirl attack arc. charge attack makes the relic attack arc fly faster and be slightly wider, and have a reddish color") [any swing, at most one a second]:
  - **his blow** throws a crescent a moment in, as the staff sweeps through (\`relic.launch\`, a share of the blow), every blow;
  - **the strike back** nothing;
  - **the whirl** a band of gold trailing the staff round him, spreading out past the whirl's reach and fading (\`relic.whirl\`), striking for a point (never unseating) each foe beyond the whirl's reach it reaches while spreading and the staff missed;
  - **the charged blow** a red crescent (kermes, madder, safflower), faster and wider, its hit too (\`relic.charged\`), a point as the others.
- **How a crescent flies**: the way it swings, carrying his own pace the way it flies (\`relic.carry\`; my partner 2026-10-26: "when i am riding at full speed, i am as fast as the relic attack, so i cant even attack in front of me"), for about two thirds of a phone's short side at play, striking the first standing foe its crescent touches as drawn (\`relic.arc\`; each figure by its drawn body, \`relic.body\`, a rider by his camel; my partner 2026-10-25, of a play: "often the outer edge of the flying arc misses when the sprite for it definitely touched an enemy").
- **What it strikes**: a man of another clan, a wolf, a djinn (about its body: djinn.md), never a camel, never Malik's people, never a man lying beaten, for one point, never throwing a rider from the saddle; the hall's pillars stop it too.
- **It stays his** from game to game (New Game+), the plinth then standing risen and bare.

## Testing
Test scene relicMen.

## Where it lives
Code: \`sim/relic.ts\` (relicMove, bandStep), \`sim/hall.ts\` byPlinth; drawn by \`view/relicArt.ts\`, \`view/whooshArt.ts\`; his lift pose from \`tools/build-hauled.mjs\`. Numbers: \`tuning.json\`, \`relic\`. Where it lies: hall.md.
`;export{e as default};
