const chunkArray = (arr: Product[], size: number): Product[][] => {
  const chunks: Product[][] = [];
  for (let i = 0; i < arr.length; i += size) {
    chunks.push(arr.slice(i, i + size));
  }
  return chunks;
};