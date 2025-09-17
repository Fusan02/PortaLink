export const toClassNames = (classNames: (string | undefined)[]) => {
  const names = classNames.filter((val) => {
    return val !== '' && val !== undefined;
  });

  return names.join(' ');
};
