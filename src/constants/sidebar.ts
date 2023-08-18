import CloseMenuButton from "@/images/close-menu.svg";
import OpenMenuButton from "@/images/open-menu.svg";
import Home from "@/images/home-icon.svg";
import Pokebola from "@/images/pokebola-icon.svg";
import Settings from "@/images/settings-icon.svg";

import { ROUTER_PATHS } from '@/constants/router';

type SideBarButton = {
  src: any;
  alt: string;
  className: string;
  text?: string;
  path?: string;
};

export const SIDEBAR_BUTTONS: SideBarButton[] = [
  { src: CloseMenuButton, alt: "Close Menu", className: "close-menu" },
  { src: OpenMenuButton, alt: "Open Menu", className: "open-menu" },
  { text: "Início", src: Home, alt: "Home", className: "home", path: ROUTER_PATHS.HOME },
  { text: "Pokedéx", src: Pokebola, alt: "Pokebola", className: "pokebola", path: ROUTER_PATHS.POKEDEX },
  { text: "Configurações", src: Settings, alt: "Settings", className: "settings", path: ROUTER_PATHS.CONFIGURATION },
];
