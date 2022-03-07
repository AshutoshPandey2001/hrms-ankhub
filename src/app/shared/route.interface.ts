declare interface RouteInfo {
  path: string;
  title: string;
  icon?: string;
  class?: string;
}

export const MAIN_ROUTES: RouteInfo[] = [
  { path: "demo", title: "Demo", icon: "laptop_mac", class: "" },
  { path: "employee", title: "Employee", icon: "work", class: "" },
  { path: "dashboard", title: "Dashboard", icon: "dashboard", class: "" },
  { path: "table-list", title: "Table List", icon: "content_paste", class: "" },
  { path: "typography", title: "Typography", icon: "library_books", class: "" },
];

export const DEMO_ROUTES: RouteInfo[] = [
  { path: "shubham-demo", title: "Shubham" },
  { path: "Utkarsha-demo", title: "Utkarsha" },
  { path: "ankitJ-demo", title: "AnkitJ" },
  { path: "abhay-demo", title: "Abhay" },
  { path: "mrunmayee-demo", title: "Mrunmayee" },
  { path: "shraddha-demo", title: "Shraddha" },
  { path: "abhinav-demo", title: "Abhinav" },
  { path: "pooja-demo", title: "Pooja" },
  { path: "ashu-demo", title: "Ashutosh" },
  { path: "abhijeet-demo", title: "Abhijeet" },
  { path: "shivani", title: "Shivani" },
  { path: "kajalD-demo", title: "KajalD" },
  { path: "ashu-demo", title: "Ashutosh" },
];
