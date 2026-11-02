// This function is serialized by VitePress for use in the browser as well.
// Keep its implementation self-contained: no references to module scope.
export function tokenizeJapanese(text) {
  const normalized = String(text).normalize('NFKC').toLocaleLowerCase('ja-JP')
  return Array.from(
    new Intl.Segmenter('ja', { granularity: 'word' }).segment(normalized),
    part => part.isWordLike ? part.segment : ''
  ).filter(Boolean)
}
