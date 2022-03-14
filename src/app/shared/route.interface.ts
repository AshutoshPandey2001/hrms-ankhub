declare interface RouteInfo {
  path: string;
  title: string;
  icon?: string;
  class?: string;
  display?: boolean;
}

export const MAIN_ROUTES: RouteInfo[] = [
  { path: "admin", title: "Admin", icon: "dashboard", class: "", display:true },
  { path: "human-resource", title: "HR", icon: "dashboard", class: "", display:true },
  { path: "teleccaller", title: "Teleccaller", icon: "dashboard", class: "", display:true },
  { path: "finance", title: "Finance", icon: "dashboard", class: "", display:true },
  { path: "user-profile", title: "User Profile", icon: "library_books", class: "", display:false },
  { path: "employee", title: "Employee", icon: "work", class: "", display:true },
  { path: "dashboard", title: "Dashboard", icon: "dashboard", class: "", display:true },
  { path: "sdk", title: "SDK", icon: "code", class: "", display:true },
];

export const SDK_ROUTES: RouteInfo[] = [
  { path: "sdk-comp", title: "COMPONENTS", icon: "widgets", class: "" },
  { path: "sdk-plugins", title: "PLUGINS", icon: "extension", class: "" },
  { path: "sdk-icons", title: "ICONS", icon: "insert_emoticon", class: "" }
];
