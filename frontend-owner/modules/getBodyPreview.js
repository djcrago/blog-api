export default function getBodyPreview(postBody) {
  const words = postBody.split(' ');

  const wordsInPreview = [];

  for (let i = 0; i < 28; i += 1) {
    wordsInPreview.push(words[i]);
  }

  const preview = wordsInPreview.join(' ');

  if (words.length <= 28) {
    return preview;
  } else {
    return `${preview}...`;
  }
}
