import * as icon from "@material-ui/icons";

const mainListData = {
  dashboard: [<icon.Dashboard />, () => {}, "dashboard"],
  orders: [<icon.LocalActivity />, () => {}, "orders"],
  merchants: [<icon.StorefrontSharp />, () => {}, "merchants"],
  products: [<icon.Shop />, () => {}, "products"],
  employers: [<icon.People />, () => {}, "employers"],
  reports: [<icon.BarChart />, () => {}, "reports"],
  messages: [<icon.MessageSharp />, () => {}, "messages"],
  map: [<icon.Map />, () => {}, "map"],
};

const adminListData = {
  productCreator: [<icon.Dashboard />, () => {}, "productCreator"],
};

const profileList = {
  profile: [<icon.People />, () => {}, "profile"],
};
export const listData = {
  admin: adminListData,
  user: mainListData,
  profile: profileList,
};
