export const trimDecription = (description: string): string =>
  description.length > 100
    ? `${description.trim().slice(0, 50)}...`
    : description;

