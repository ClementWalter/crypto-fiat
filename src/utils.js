const parseNumber = (textContent) => {
  const parts = textContent.replace(/[\s,]/g, ".").split(".");
  if (parts.length === 1) {
    return parseFloat(parts[0]);
  }
  let decimals = parts.pop();
  if (decimals.length === 3) {
    parts.push(decimals);
    decimals = "0";
  }
  return parseFloat(`${parts.join("")}.${decimals}`);
};

export { parseNumber };
