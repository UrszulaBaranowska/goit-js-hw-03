function slugify(title) {
  const titleLow = title.map((words) => words.toLowerCase());
  return titleLow.join("-");
}
