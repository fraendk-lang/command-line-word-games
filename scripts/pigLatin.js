// scripts/pigLatin.js — yours to write.
//
// The markers below name requirements from README.md, so the brief, your
// Issues, the agent and this file all use the same words. Nothing reads them.

// FR006 — English to Pig Latin translator.
// Read a phrase from process.argv and translate it word by word:
//   - starts with a consonant then a vowel: move the first letter to the end, add "ay"
//   - starts with two consonants: move both to the end, add "ay"
//   - starts with a vowel: add "way" to the end
// Print the translated phrase.
//
// node scripts/pigLatin.js "Pig Latin is hard to speak"
// # Igpay Atinlay isway ardhay otay eakspay

// FR009 — Reject a missing phrase.
// If no phrase is given, print a usage message instead of letting the program
// crash.

// FR012 — Pass non-letter characters through unchanged.
// Punctuation and numbers in the input should appear in the output exactly as
// given, not translated or dropped.
const phrase = process.argv[2];
if (phrase === undefined) {
    console.log("Bitte gib einen Text in Anführungszeichen ein.");
} else {
    const words = phrase.match(/[a-z]+|[^a-z]+/gi) || [];
    const translatedWords = [];
    for (const word of words) {
    if (!/[a-z]/i.test(word)) {
    translatedWords.push(word);
} else if ("aeiou".includes(word[0])) {
        translatedWords.push(word + "way");
       } else if ("aeiou".includes(word[1])) {
        translatedWords.push(word.slice(1) + word[0] + "ay");
            } else {
        translatedWords.push(word.slice(2) + word.slice(0, 2) + "ay");
    }
}
console.log(translatedWords.join(""));
}