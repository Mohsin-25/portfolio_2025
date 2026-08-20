export const getExperience = (date) => {
  const start = new Date(date);
  const now = new Date();

  const totalMonths =
    (now.getFullYear() - start.getFullYear()) * 12 +
    (now.getMonth() - start.getMonth());

  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;

  if (months === 0) return `${years}`;
  if (months <= 2) return `${years}+`;
  if (months <= 5) return `~${years + 0.5}`;
  if (months === 6) return `${years + 0.5}`;
  if (months <= 8) return `${years + 0.5}+`;

  return `~${years + 1}`;
};
