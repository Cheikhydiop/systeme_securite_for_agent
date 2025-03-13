export interface MenuItem {
  icon: string;
  label: string;
  active?: boolean;
  hasSubmenu?: boolean;
  submenu?: string[];
  expanded?: boolean; // Ajout de cette ligne
}
