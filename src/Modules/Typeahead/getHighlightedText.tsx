const getHighlightedText = (text: string, word: string) => {
  let parts: any[] = [];
  const getHighlighted = (text: string, word: string) => {
    for (let i = 0; i < text.length; i++) {
      if (!word) {
        parts.push(<span>{text}</span>);
        break;
      }
      if (text[i].toLowerCase() === word[0].toLowerCase()) {
        const next = text.substring(i + 1, text.length);
        text = text.substring(0, i + 1);
        parts.push(<span>{text.substring(0, text.length - 1)}</span>);
        parts.push(
          <span style={{ fontWeight: "bold" }}>
            {text.substring(text.length - 1, text.length)}
          </span>
        );
        if (word.length > 0 && next) {
          getHighlighted(next, word.substring(1, word.length));
        } else if (word.length === 0 && next) {
          parts.push(<span>{next}</span>);
        }
      }
    }
  };
  getHighlighted(text, word);
  return parts;
};
export default getHighlightedText;
