declare interface RouteInfo {
  path: string;
  title: string;
  icon?: string;
  class?: string;
  display?: boolean;
  children?:Array<any>;
  showChildren?:boolean;
}

export const ADMIN_ROUTES: RouteInfo[] = [
  { path: "courses", title: "Courses", icon: "dvr", class: "" },
  { path: "employee", title: "Employee", icon: "group", class: "" },
  { path: "grade-level", title: "Grade Level", icon: "equalizer", class: "" },
  { path: "position", title: "Position", icon: "star_border", class: "" },
  { path: "technology", title: "Technology", icon: "biotech", class: "" },
  { path: "qualification", title: "Qualification", icon: "school", class: "" }
];

export const SDK_ROUTES: RouteInfo[] = [
  { path: "layout-structure", title: "Layout Structure", icon: "integration_instructions", class: "" },
  { path: "sdk-comp", title: "COMPONENTS", icon: "widgets", class: "" },
  { path: "sdk-icons", title: "ICONS", icon: "insert_emoticon", class: "" },
  { path: "sdk-plugins", title: "PLUGINS", icon: "extension", class: "" },
];


export const HR_ROUTES: RouteInfo[] = [
  { path: "payslip", title: "Payslip", icon: "receipt", class: "" },
  { path: "leave-request", title: "Leave Request", icon: "touch_app", class: "" },
  { path: "event-organization", title: "Event Organization", icon: "celebration", class: "" }
];

export const TELECALLER_ROUTES: RouteInfo[] = [
  { path: "candidate-list", title: "Candidate List", icon: "contact_phone", class: "" },
  { path: "scheduled", title: "Scheduled", icon: "add_ic_call", class: "" },
  { path: "intrested", title: "Intrested", icon: "thumb_up", class: "" },
  { path: "not-intrested", title: "Not Intrested", icon: "thumb_down", class: "" },
  { path: "on-hold", title: "On Hold", icon: "phone_paused", class: "" },
  { path: "not-recived", title: "Not Recived", icon: "phone_missed", class: "" },
];

export const FINANCE_ROUTES: RouteInfo[] = [
  { path: "shares", title: "Accounts", icon: "account_balance_wallet", class: "" },
  { path: "accountingreport", title: "Accounting Report", icon: "analytics", class: "" }
];

export const MAIN_ROUTES: RouteInfo[] = [
  { path: "admin", title: "Admin", icon: "admin_panel_settings", class: "", display:true, children:ADMIN_ROUTES, showChildren:false},
  { path: "human-resource", title: "HR", icon: "groups", class: "", display:true, children:HR_ROUTES, showChildren:false },
  { path: "telecaller", title: "Telecaller", icon: "support_agent", class: "", display:true, children:TELECALLER_ROUTES, showChildren:false  },
  { path: "finance", title: "Finance", icon: "savings", class: "", display:true, children:FINANCE_ROUTES, showChildren:false  },
  { path: "dashboard", title: "Dashboard", icon: "dashboard", class: "", display:true, children:[], showChildren:false  },
  { path: "sdk", title: "SDK", icon: "code", class: "", display:true, children:SDK_ROUTES, showChildren:false },
  { path: "user-profile", title: "User Profile", icon: "person", class: "", display:true, children:[], showChildren:false },
];