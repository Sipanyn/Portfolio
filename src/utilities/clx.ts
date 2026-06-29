export const clx = (...classes: (string | false | undefined | null)[]) => {
  return classes.filter(Boolean).join(" ");
};
