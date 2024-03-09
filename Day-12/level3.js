const threeMostFrequentWords = function (paragraph) {
  const words = paragraph.match(/\b\w+\b/g);

  if (!words) {
    console.log("No words found in the paragraph");
    return [];
  }

  const wordCount = {};
  words.forEach((word) => {
    wordCount[word] = (wordCount[word] || 0) + 1;
  });

  const sortedWords = Object.keys(wordCount).toSorted(
    (a, b) => wordCount[b] - wordCount[a]
  );
  const topThreeWords = [];
  sortedWords.slice(0, 3).forEach((word) => {
    topThreeWords.push({ word: word, count: wordCount[word] });
  });

  return topThreeWords;
};

const printTopThreeWords = function (wordsArr) {
  let str1 = "[" + "\n";

  for (const objects of Object.values(wordsArr)) {
    str1 += `word: ${objects.word}, count: ${objects.count}` + "\n";
  }
  str1 += "]";
  console.log(str1);
};

sentenceL3 = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; \
&as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting \
tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`;

const cleanText = function (text) {
  const textCleared = text.replace(/[%@&#$;_]+/g, "");
  return textCleared;
};

const sentenceL3Cleared = cleanText(sentenceL3);
/* I am a teacher, and I love teaching. There is nothing as more rewarding as educating and empowering people. 
I found teaching more interesting than any other jobs. Does this motivate you to be a teacher!? */

const topThreeArr = threeMostFrequentWords(sentenceL3Cleared);
printTopThreeWords(topThreeArr);
/* 
[
word: I, count: 3
word: a, count: 2
word: teacher, count: 2
]
*/
