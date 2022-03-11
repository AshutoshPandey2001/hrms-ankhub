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

export const DEMO_ROUTES: RouteInfo[] = [
  { path: "shubham-demo", title: "Shubham", icon: "admin_panel_settings", class: "" },
  { path: "Utkarsha-demo", title: "Utkarsha", icon: "military_tech", class: "" },
  { path: "ankitJ-demo", title: "AnkitJ", icon: "laptop_mac", class: "" },
  { path: "abhay-demo", title: "Abhay", icon: "laptop_mac", class: "" },
  { path: "mrunmayee-demo", title: "Mrunmayee", icon: "laptop_mac", class: "" },
  { path: "shraddha-demo", title: "Shraddha", icon: "laptop_mac", class: "" },
  { path: "abhinav-demo", title: "Abhinav", icon: "laptop_mac", class: "" },
  { path: "pooja-demo", title: "Pooja", icon: "laptop_mac", class: "" },
  { path: "ashu-demo", title: "Ashutosh", icon: "laptop_mac", class: "" },
  { path: "abhijeet-demo", title: "Abhijeet", icon: "laptop_mac", class: "" },
  { path: "shivani", title: "Shivani", icon: "laptop_mac", class: "" },
  { path: "kajalD-demo", title: "KajalD", icon: "laptop_mac", class: "" },
  { path: "karishma-demo", title: "Karishma", icon: "important_devices", class: "" }
];
