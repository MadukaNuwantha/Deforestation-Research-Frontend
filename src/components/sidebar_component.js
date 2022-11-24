import React, { Component } from 'react'

export class SidebarComponent extends Component {
    render() {
        return (
            <div>
                <aside id="layout-menu" class="layout-menu menu-vertical menu bg-menu-theme">
                    <div class="app-brand demo">
                        <a href="index.html" class="app-brand-link">
                            <span class="app-brand-logo demo">
                            </span>
                            <span class="app-brand-text demo menu-text fw-bolder ms-2">SafeTrees</span>
                        </a>
                    </div>
                    <div class="menu-inner-shadow"></div>
                    <ul class="menu-inner py-1">
                        <li class="menu-header small text-uppercase">
                            <span class="menu-header-text">User</span>
                        </li>
                        <li class="menu-item">
                            <a href="" class="menu-link menu-toggle">
                                <i class="menu-icon tf-icons bx bx-dock-top"></i>
                                <div data-i18n="Account Settings">Dashboard</div>
                            </a>
                        </li>
                    </ul>
                </aside>
            </div>
        )
    }
}

export default SidebarComponent