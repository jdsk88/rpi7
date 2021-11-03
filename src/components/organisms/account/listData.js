import * as icon from "@material-ui/icons";

const profileList = () => {
  return {
    about: [<icon.SupervisorAccountOutlined />, "About", ""],
    invoices: [<icon.Receipt />, "Invoices", ""],
    messages: [<icon.MessageSharp />, "Messages", ""],
    mydeals: [<icon.Business />, "My deals", ""],
    payslips: [<icon.AttachMoney />, "Payslips", ""],
    planner: [<icon.Map />, "Planner", ""],
    reports: [<icon.BarChart />, "Reports", ""],
    tasks: [<icon.List />, "Tasks", ""],
  };
};

export const profileData = {
  profile: profileList(),
};
