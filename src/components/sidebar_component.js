import React, { Component } from "react";
import { Link } from "react-router-dom";

export class SidebarComponent extends Component {
  render() {
    return (
      <div>
        <aside
          id="layout-menu"
          class="layout-menu menu-vertical menu bg-menu-theme p-3"
        >
          <div class="app-brand demo">
            <Link to="/">
              <span class="app-brand-logo demo"></span>
              <span class="app-brand-text demo menu-text fw-bolder ms-2">
                SafeTrees
              </span>
            </Link>
          </div>
          <div class="menu-inner-shadow"></div>
          <ul class="menu-inner py-1">
            <li class="menu-header small text-uppercase">
              <span class="menu-header-text">User</span>
            </li>
            <li class="menu-item">
              <Link to="/dashboard">
                <i class="menu-icon tf-icons bx bx-dock-top"></i>
                <div data-i18n="Account Settings">Dashboard</div>
              </Link>
            </li>
            <li class="menu-item">
              <Link to="/forestpatch">
                <i class="menu-icon tf-icons bx bx-dock-top"></i>
                <div data-i18n="Account Settings">Forest patch analysis</div>
              </Link>
            </li>
            <li class="menu-item">
              <Link to="/waterbody">
                <i class="menu-icon tf-icons bx bx-dock-top"></i>
                <div data-i18n="Account Settings">Waterbody detection</div>
              </Link>
            </li>
            <li class="menu-item">
              <Link to="/wildfire">
                <i class="menu-icon tf-icons bx bx-dock-top"></i>
                <div data-i18n="Account Settings">Wildfires</div>
              </Link>
            </li>
            <li class="menu-item">
              <button
                className="btn btn-primary btn-lg"
                // onClick={() => {
                //   localStorage.removeItem("token");
                //   alert("Logout Successful");
                //   window.location.href = "/signin";
                // }}
              >
                <i class="menu-icon tf-icons bx bx-dock-top"></i>
                <div data-i18n="Account Settings">Logout</div>
              </button>
            </li>
          </ul>
        </aside>
      </div>
    );
  }
}

export default SidebarComponent;
