// Генератор slug

function slugify(title) {
  const lowerCaseTitle = title.toLowerCase();
  const trimmedTitle = lowerCaseTitle.trim();
  const slug = trimmedTitle.replace(/\s+/g, "-");

  return slug;
}
