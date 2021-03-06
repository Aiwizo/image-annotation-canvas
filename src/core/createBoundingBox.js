const createBoundingBox = (coordinates) => {
  const xs = coordinates.map(({ x }) => x);
  const ys = coordinates.map(({ y }) => y);
  const xmin = Math.min(...xs);
  const ymin = Math.min(...ys);
  const xmax = Math.max(...xs);
  const ymax = Math.max(...ys);

  return {
    x: xmin,
    y: ymin,
    width: xmax - xmin,
    height: ymax - ymin,
  };
};

export default createBoundingBox;
