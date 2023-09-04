export function updateStepStatus(
  steps: {
    id: number;
    name: string;
    href: string;
    status: string;
  }[],
  id: number,
  type: string,
) {
  switch (type) {
    case 'add':
      return steps.map((item) => {
        if (item.id === id) {
          return { ...item, status: 'complete' };
        }

        if (item.id === id + 1) {
          return { ...item, status: 'current' };
        }

        return item;
      });
    case 'sub':
      return steps.map((item) => {
        if (item.id === id) {
          return { ...item, status: 'current' };
        }

        if (item.id === id + 1) {
          return { ...item, status: 'upcoming' };
        }

        return item;
      });
    default:
      return steps;
  }
}
