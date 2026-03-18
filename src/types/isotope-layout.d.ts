declare module "isotope-layout" {
  interface IsotopeOptions {
    itemSelector?: string;
    layoutMode?: string;
    filter?: string;
  }

  class Isotope {
    constructor(element: Element, options?: IsotopeOptions);
    arrange(options: { filter: string }): void;
    layout(): void;
    destroy(): void;
  }

  export default Isotope;
}
