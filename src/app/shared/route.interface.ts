declare interface RouteInfo {
  path: string;
  title: string;
  icon?: string;
  class?: string;
  display?: boolean;
}

export const MAIN_ROUTES: RouteInfo[] = [
  { path: "demo", title: "Demo", icon: "laptop_mac", class: "", display:true },
  { path: "employee", title: "Employee", icon: "work", class: "", display:true },
  { path: "dashboard", title: "Dashboard", icon: "dashboard", class: "", display:true },
  { path: "icons", title: "Icons", icon: "library_books", class: "", display:false },
  { path: "notifications", title: "Notifications", icon: "library_books", class: "", display:false },
  { path: "user-profile", title: "User Profile", icon: "library_books", class: "", display:false }
];

export const SDK_ROUTES: RouteInfo[] = [
  { path: "component", title: "COMPONENTS", icon: "admin_panel_settings", class: "" }
];
