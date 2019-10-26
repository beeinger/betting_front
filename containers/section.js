import { Container } from "unstated";
import { createRef } from "react";

class SectionsContainer extends Container {
  state = {
    About: null,
    Pricing: null,
    Home: null,
    zoom: false,
    contextRef: createRef(),
    size: "medium"
  };
}

export const sectionsContainer = new SectionsContainer();
