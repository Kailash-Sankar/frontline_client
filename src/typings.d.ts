declare module "*.less" {
  interface ClassNamesT {
    [className: string]: string;
  }
  const classNames: ClassNamesT;
  export = classNames;
}
