export const statusValues = ["planowane", "w trakcie", "zakończone"] as const;

export const statusOptions = statusValues.map((el) => ({
  value: el,
  label: el,
}));
