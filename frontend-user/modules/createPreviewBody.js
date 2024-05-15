export default function createPreviewBody(text) {
  const words = text.split(' ');

  const numberOfWordsInPreviewBody = 28;

  if (words.length <= numberOfWordsInPreviewBody) {
    return text;
  } else {
    const wordsInPreviewBody = [];

    for (let i = 0; i < numberOfWordsInPreviewBody; i += 1) {
      wordsInPreviewBody.push(words[i]);
    }

    const previewBody = wordsInPreviewBody.join(' ');

    return `${previewBody}...`;
  }
}
