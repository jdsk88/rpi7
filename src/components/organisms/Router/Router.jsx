import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { routes } from "../../../routes";
import { Admin } from "../../../views/Admin";
import { Products } from "../../../views/Products";
import { ProductCreator } from "../../../views/ProductCreator";
import { DashBoard } from "../../../views/Dashboard";
import { Profile } from "../../../views/Profile";
import { About } from "../account/views/About";
import { MyDeals } from "../account/views/MyDeals";

export const CRouter = () => {
  return (
    <>
      <Switch >
        <Route path={routes.admin}>
          <Admin />
        </Route>
        <Route path={routes.about}>
          <About />
        </Route>
        <Route path={routes.mydeals}>
          <MyDeals />
        </Route>
        <Route path={routes.dashboard}>
          <DashBoard />
        </Route>
        <Route path={routes.orders}></Route>
        <Route path={routes.merchants}> </Route>
        <Route path={routes.products}>
          <Products />
        </Route>
        <Route path={routes.productCreator}>
          <ProductCreator />
        </Route>
        <Route path={routes.employers}>
          <h1>31gtedgdsahgdsa</h1>
        </Route>
        <Route path={routes.messages}></Route>
        <Route path={routes.map}>
          <h1>31gtedgdsahgdsa</h1>
        </Route>
        <Route path={routes.profile}>
          <Profile />
        </Route>
        <Route path={routes.nowhere}>
          <Redirect to={routes.dashboard} />
        </Route>
      </Switch>
    </ >
  );
};
