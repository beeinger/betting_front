import { Container } from "unstated";

class SidebarContainer extends Container {
  state = {
    expanded: false,
    selected: ""
  };
}

export const sidebarContainer = new SidebarContainer();
