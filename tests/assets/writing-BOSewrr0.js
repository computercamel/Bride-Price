const e=`# The writing and Salma

## How it plays
The game is a qasida. Its words are plain and short, and carry two meanings the player may choose between, never explained. Salma never speaks to him: she is a stranger who knows him by his colour, and her feeling is in her poems, at the colour screen and at the end.

## The rules
- **She does not speak to him** (my partner 2026-10-30: "she should not speak to the character. we need her dialogue box to be something mysterious and ambiguous toward the player... right now salma is weak. this will make her formidable and good. and take her dialogue out of new game plus too"; "i feel like it shores up salma and explains why she didnt know his face in the poems"): talked to, in the game and in New Game+, the box tells how she looks at him (text.json brideLines, their words: "Salma appraises your tattered robes. Is she peering beneath your dark hood? Her eyes hold you, then turn back to the fire.") (its last sentence theirs too, after talk the same day: "then its like the player is caressed, or assessed by the look, and it isnt obvious which or both"; "Her eyes hold the sparkling mysteries of fate." first, then "Her eyes give nothing back." offered, "too harshly"). **Done** (my partner 2026-10-30: "mark her dialogue done, that works for new game plus too") [four lines of her own till then, "I do not know you. I know Harith's brothers." among them].
- **Her earlier versions**, when she loved him, are kept in \`poemNotes.json\` (lover) for the test page.
- **What my partner's edits teach** (gathered 2026-10-23 from every session's messages):
  - American spelling ("color", 2026-10-21).
  - Commas and periods, never semicolons, in every word on screen (2026-10-22).
  - A verse never ends by asking the player for something: he reads a request or a question as a thing to do ("Tell me your name" was cut); the dye screen's question is the one he answers, with his colour.
  - Wordplay a player cannot follow goes (the theft poem's "two camels").
  - Not tied too closely to game events or the hour (he may die by day).
  - Plain and simple over showy, not wordy, not straining to tie in a clan's dye, four lines like the others. Bitter irony in the deaths.
  - When revising, keep my partner's own lines (the wolves' "begged no pardon", "You are in the smoke", "drunk on me").
  - From the thirst verse, finished by my partner 2026-10-27 ("the dunes closed softly over you" to "closed over you"; "ahead a sky with no water in it" to "before you a sky with no water"; "they pour water over his hands, and I hold the jug" to "I bring Harith the jug, and he washes his hands of you"): no adverb doing the feeling; two halves of a line that answer each other (behind you, before you); cut what adds nothing ("in it"); an idiom that is also literal carries the two meanings (the wedding's washing, and Harith done with him), never explained, as the exemplars do.
- **The words in play are kept short** so the player is drawn to look for himself; News lines short, for a phone's screen (hud.md). Words in play must not repeat what Malik says (the price, Harith).

## Where it lives
text.json (every word on screen), \`poemNotes.json\` (earlier versions, for the test page). The exemplars, Salma not knowing him, and commas and periods only: CLAUDE.md. The verses and the endings: endings.md. The kin's lines: camp.md. All the words, to edit line by line: the Words page (\`src/dev/wordsPage.ts\`: Dialogue, Barks, News) (later.md, the list, 11a).
`;export{e as default};
