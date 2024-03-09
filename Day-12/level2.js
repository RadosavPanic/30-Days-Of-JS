const sentenceL2 =
  "I love teaching. If you do not love teaching what else can you love. I love Python \
if you do not love something which can give you all the capabilities to develop an application what else can you love.";

const tenMostFrequentWords = function (paragraph) {
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
  const topTenWords = [];
  sortedWords.slice(0, 10).forEach((word) => {
    topTenWords.push({ word: word, count: wordCount[word] });
  });

  return topTenWords;
};

const topTenArr = tenMostFrequentWords(sentenceL2);

const printTopTenWords = function (wordsArr) {
  let str1 = "[" + "\n";

  for (const objects of Object.values(wordsArr)) {
    str1 += `word: ${objects.word}, count: ${objects.count}` + "\n";
  }
  str1 += "]";
  console.log(str1);
};

printTopTenWords(topTenArr);
/* 
[
word: love, count: 6
word: you, count: 5
word: can, count: 3
word: I, count: 2
word: teaching, count: 2
word: do, count: 2
word: not, count: 2
word: what, count: 2
word: else, count: 2
word: If, count: 1
] 
*/
