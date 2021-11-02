import * as icon from "@material-ui/icons";

const profileList = () => {
  return {
    about: [<icon.SupervisorAccountOutlined />, "About", ""],
    deals: [<icon.Business />, "My deals", ""],
    invoices: [<icon.Receipt />, "Invoices", ""],
    messages: [<icon.MessageSharp />, "Messages", ""],
    planner: [<icon.Map />, "Planner", ""],
    payslip: [<icon.AttachMoney />, "Payslip", ""],
    reports: [<icon.BarChart />, "Reports", ""],
    tasks: [<icon.List />, "Tasks", ""],
  };
};

export const profileData = {
  profile: profileList(),
};
