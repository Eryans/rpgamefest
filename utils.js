export const handleTextCut = (text) => {
  const maxChars = 255;
  if (text.length > maxChars) return text.slice(maxChars) + "...";
  return text;
};
