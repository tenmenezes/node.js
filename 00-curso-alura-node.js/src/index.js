function clearWords(word) {
  return word.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
}

function extractParagraphs(text) {
  return text.toLowerCase().split("\n");
}

function verifyDuplicateWords(text) {
  const listWords = text.split(" ");
  const result = {};

  listWords.forEach((word) => {
    const cleanWord = clearWords(word);

    if (cleanWord.length >= 3) {
      result[cleanWord] = (result[cleanWord] || 0) + 1;
    }
  });

  return result;
}

export function countWords(text) {
  const extractedParagraphs = extractParagraphs(text);

  const count = extractedParagraphs.flatMap((paragraph) => {
    if (!paragraph) {
      return [];
    }

    return verifyDuplicateWords(paragraph);
  });

  return count;
}
