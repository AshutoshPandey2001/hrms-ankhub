declare interface RouteInfo {
  path: string;
  title: string;
  icon?: string;
  class?: string;
  display?: boolean;
  children?:Array<any>;
  showChildren?:boolean;
  apiStatus?: number; 
  /**
   * 0=Not-Ready
   * 1=Ready
   * 2=Implemented
   * 3=In Progress
   * 4=Not Required
   */
}

export const ADMIN_ROUTES: RouteInfo[] = [
  { path: "courses", title: "Courses", icon: "dvr", class: "", apiStatus:1 },
  { path: "employee", title: "Employee", icon: "group", class: "", apiStatus:1 },
  { path: "grade-level", title: "Grade Level", icon: "equalizer", class: "", apiStatus:2},
  { path: "position", title: "Position", icon: "star_border", class: "", apiStatus:2 },
  { path: "technology", title: "Technology", icon: "biotech", class: "", apiStatus:2 },
  { path: "qualification", title: "Qualification", icon: "school", class: "", apiStatus:2 }
];

export const TELECALLER_ROUTES: RouteInfo[] = [
  { path: "candidate-list", title: "Candidate List", icon: "contact_phone", class: "", apiStatus:1 },
  { path: "scheduled", title: "Scheduled", icon: "add_ic_call", class: "", apiStatus:1 },
  { path: "intrested", title: "Intrested", icon: "thumb_up", class: "", apiStatus:1 },
  { path: "not-intrested", title: "Not Intrested", icon: "thumb_down", class: "", apiStatus:1 },
  { path: "on-hold", title: "On Hold", icon: "phone_paused", class: "", apiStatus:1 },
  { path: "not-recived", title: "Not Recived", icon: "phone_missed", class: "", apiStatus:1 },
];

export const HR_ROUTES: RouteInfo[] = [
  { path: "payslip", title: "Payslip", icon: "receipt", class: "", apiStatus:3 },
  { path: "leave-request", title: "Leave Request", icon: "touch_app", class: "", apiStatus:3 },
  { path: "event-organization", title: "Event Organization", icon: "celebration", class: "", apiStatus:3 }
];

export const FINANCE_ROUTES: RouteInfo[] = [
  { path: "shares", title: "Accounts", icon: "account_balance_wallet", class: "", apiStatus:0 },
  { path: "accountingreport", title: "Accounting Report", icon: "analytics", class: "", apiStatus:0 }
];

export const SDK_ROUTES: RouteInfo[] = [
  { path: "layout-structure", title: "Layout Structure", icon: "integration_instructions", class: "", apiStatus:0 },
  { path: "sdk-comp", title: "COMPONENTS", icon: "widgets", class: "", apiStatus:0 },
  { path: "sdk-icons", title: "ICONS", icon: "insert_emoticon", class: "", apiStatus:0 },
  { path: "sdk-plugins", title: "PLUGINS", icon: "extension", class: "", apiStatus:0 },
];

export const DRIVE_ROUTES: RouteInfo[] = [
  { path: "credentials", title: "Credentials", icon: "vpn_key", class: "", apiStatus:0 },
  { path: "policy-doc", title: "Policy Documents", icon: "file_present", class: "", apiStatus:0 },
  { path: "expenses", title: "Expenses", icon: "savings", class: "", apiStatus:0 },
  { path: "finance-management", title: "Finance Management", icon: "account_balance", class: "", apiStatus:0 },
];

export const MAIN_ROUTES: RouteInfo[] = [
  // { path: "dashboard", title: "Dashboard", icon: "dashboard", class: "", display:true, children:[], showChildren:false  },
  { path: "admin", title: "Admin", icon: "admin_panel_settings", class: "", display:true, children:ADMIN_ROUTES, showChildren:false},
  { path: "telecaller", title: "Telecaller", icon: "support_agent", class: "", display:true, children:TELECALLER_ROUTES, showChildren:false  },
  { path: "human-resource", title: "HR", icon: "groups", class: "", display:true, children:HR_ROUTES, showChildren:false },
  { path: "finance", title: "Finance", icon: "savings", class: "", display:true, children:FINANCE_ROUTES, showChildren:false  },
  { path: "user-profile", title: "User Profile", icon: "person", class: "", display:true, children:[], showChildren:false },
  { path: "sdk", title: "SDK", icon: "code", class: "", display:true, children:SDK_ROUTES, showChildren:false },
  { path: "drive", title: "Drive", icon: "folder_open", class: "", display:true, children:DRIVE_ROUTES, showChildren:false },
];