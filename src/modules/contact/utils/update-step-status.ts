export function updateStepStatus(
  steps: {
    id: number;
    name: string;
    href: string;
    status: string;
  }[],
  id: number,
) {
  return steps.map((item) => {
    if (item.id === id) {
      return { ...item, status: 'complete' };
    }

    if (item.id === id + 1) {
      return { ...item, status: 'current' };
    }

    return item;
  });
}
