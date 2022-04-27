declare interface RouteInfo {
  path: string;
  title: string;
  icon?: string;
  class?: string;
  display?: boolean;
  children?:Array<any>;
  showChildren?:boolean;
  apiStatus?: string;
}

export const ADMIN_ROUTES: RouteInfo[] = [
  { path: "courses", title: "Courses", icon: "dvr", class: "", apiStatus:"done" },
  { path: "employee", title: "Employee", icon: "group", class: "", apiStatus:"done" },
  { path: "grade-level", title: "Grade Level", icon: "equalizer", class: "", apiStatus:"done" },
  { path: "position", title: "Position", icon: "star_border", class: "", apiStatus:"done" },
  { path: "technology", title: "Technology", icon: "biotech", class: "", apiStatus:"done" },
  { path: "qualification", title: "Qualification", icon: "school", class: "", apiStatus:"done" }
];

export const SDK_ROUTES: RouteInfo[] = [
  { path: "layout-structure", title: "Layout Structure", icon: "integration_instructions", class: "", apiStatus:"todo" },
  { path: "sdk-comp", title: "COMPONENTS", icon: "widgets", class: "", apiStatus:"todo" },
  { path: "sdk-icons", title: "ICONS", icon: "insert_emoticon", class: "", apiStatus:"todo" },
  { path: "sdk-plugins", title: "PLUGINS", icon: "extension", class: "", apiStatus:"todo" },
];


export const HR_ROUTES: RouteInfo[] = [
  { path: "payslip", title: "Payslip", icon: "receipt", class: "", apiStatus:"todo" },
  { path: "leave-request", title: "Leave Request", icon: "touch_app", class: "", apiStatus:"todo" },
  { path: "event-organization", title: "Event Organization", icon: "celebration", class: "", apiStatus:"todo" }
];

export const TELECALLER_ROUTES: RouteInfo[] = [
  { path: "candidate-list", title: "Candidate List", icon: "contact_phone", class: "", apiStatus:"inprogress" },
  { path: "scheduled", title: "Scheduled", icon: "add_ic_call", class: "", apiStatus:"inprogress" },
  { path: "intrested", title: "Intrested", icon: "thumb_up", class: "", apiStatus:"inprogress" },
  { path: "not-intrested", title: "Not Intrested", icon: "thumb_down", class: "", apiStatus:"inprogress" },
  { path: "on-hold", title: "On Hold", icon: "phone_paused", class: "", apiStatus:"inprogress" },
  { path: "not-recived", title: "Not Recived", icon: "phone_missed", class: "", apiStatus:"inprogress" },
];

export const FINANCE_ROUTES: RouteInfo[] = [
  { path: "shares", title: "Accounts", icon: "account_balance_wallet", class: "", apiStatus:"todo" },
  { path: "accountingreport", title: "Accounting Report", icon: "analytics", class: "", apiStatus:"todo" }
];

export const DRIVE_ROUTES: RouteInfo[] = [
  { path: "credentials", title: "Credentials", icon: "vpn_key", class: "", apiStatus:"todo" },
  { path: "policy-doc", title: "Policy Documents", icon: "file_present", class: "", apiStatus:"todo" },
  { path: "expenses", title: "Expenses", icon: "savings", class: "", apiStatus:"todo" },
  { path: "finance-management", title: "Finance Management", icon: "account_balance", class: "", apiStatus:"todo" },
];

export const MAIN_ROUTES: RouteInfo[] = [
  { path: "admin", title: "Admin", icon: "admin_panel_settings", class: "", display:true, children:ADMIN_ROUTES, showChildren:false},
  { path: "human-resource", title: "HR", icon: "groups", class: "", display:true, children:HR_ROUTES, showChildren:false },
  { path: "telecaller", title: "Telecaller", icon: "support_agent", class: "", display:true, children:TELECALLER_ROUTES, showChildren:false  },
  { path: "finance", title: "Finance", icon: "savings", class: "", display:true, children:FINANCE_ROUTES, showChildren:false  },
  { path: "dashboard", title: "Dashboard", icon: "dashboard", class: "", display:true, children:[], showChildren:false  },
  { path: "sdk", title: "SDK", icon: "code", class: "", display:true, children:SDK_ROUTES, showChildren:false },
  { path: "user-profile", title: "User Profile", icon: "person", class: "", display:true, children:[], showChildren:false },
  { path: "drive", title: "Drive", icon: "folder_open", class: "", display:true, children:DRIVE_ROUTES, showChildren:false },
];