import React, { Component } from 'react'
import ExpenseOverviewComponent from '../components/expense_overview_component'
import OrderStatComponent from '../components/order_stat_component'
import PageFooter from '../components/page_footer'
import SidebarComponent from '../components/sidebar_component'
import TransactionComponent from '../components/transaction_component'

export class DashboardScreen extends Component {
    render() {
        return (
            <div>
                <div class="layout-wrapper layout-content-navbar">
                    <div class="layout-container">
                        {/* <!-- Menu --> */}
                        <SidebarComponent/>
                        {/* <!-- / Menu --> */}
                        {/* <!-- Layout container --> */}
                        <div class="layout-page">
                            {/* <!-- Navbar --> */}
                            <nav
                                class="layout-navbar container-xxl navbar navbar-expand-xl navbar-detached align-items-center bg-navbar-theme"
                                id="layout-navbar">
                                <div class="layout-menu-toggle navbar-nav align-items-xl-center me-3 me-xl-0 d-xl-none">
                                    <a class="nav-item nav-link px-0 me-xl-4" href="javascript:void(0)">
                                        <i class="bx bx-menu bx-sm"></i>
                                    </a>
                                </div>
                                <div class="navbar-nav-right d-flex align-items-center" id="navbar-collapse">
                                    {/* <!-- Search --> */}
                                    <div class="navbar-nav align-items-center">
                                        <div class="nav-item d-flex align-items-center">
                                            <i class="bx bx-search fs-4 lh-0"></i>
                                            <input type="text" class="form-control border-0 shadow-none" placeholder="Search..." aria-label="Search..." />
                                        </div>
                                    </div>
                                    {/* <!-- /Search --> */}
                                    <ul class="navbar-nav flex-row align-items-center ms-auto">
                                        {/* <!-- Place this tag where you want the button to render. --> */}
                                        <li class="nav-item lh-1 me-3">
                                            <a
                                                class="github-button"
                                                href="https://github.com/themeselection/sneat-html-admin-template-free"
                                                data-icon="octicon-star"
                                                data-size="large"
                                                data-show-count="true"
                                                aria-label="Star themeselection/sneat-html-admin-template-free on GitHub"
                                            >Star</a>
                                        </li>
                                        {/* <!-- User --> */}
                                        <li class="nav-item navbar-dropdown dropdown-user dropdown">
                                            <a class="nav-link dropdown-toggle hide-arrow" href="" data-bs-toggle="dropdown">
                                                <div class="avatar avatar-online">
                                                    <img src="../assets/img/avatars/1.png" alt class="w-px-40 h-auto rounded-circle" />
                                                </div>
                                            </a>
                                            <ul class="dropdown-menu dropdown-menu-end">
                                                <li>
                                                    <a class="dropdown-item" href="#">
                                                        <div class="d-flex">
                                                            <div class="flex-shrink-0 me-3">
                                                                <div class="avatar avatar-online">
                                                                    <img src="../assets/img/avatars/1.png" alt class="w-px-40 h-auto rounded-circle" />
                                                                </div>
                                                            </div>
                                                            <div class="flex-grow-1">
                                                                <span class="fw-semibold d-block">John Doe</span>
                                                                <small class="text-muted">Admin</small>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li>
                                                    <div class="dropdown-divider"></div>
                                                </li>
                                                <li>
                                                    <a class="dropdown-item" href="#">
                                                        <i class="bx bx-user me-2"></i>
                                                        <span class="align-middle">My Profile</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a class="dropdown-item" href="#">
                                                        <i class="bx bx-cog me-2"></i>
                                                        <span class="align-middle">Settings</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a class="dropdown-item" href="#">
                                                        <span class="d-flex align-items-center align-middle">
                                                            <i class="flex-shrink-0 bx bx-credit-card me-2"></i>
                                                            <span class="flex-grow-1 align-middle">Billing</span>
                                                            <span class="flex-shrink-0 badge badge-center rounded-pill bg-danger w-px-20 h-px-20">4</span>
                                                        </span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <div class="dropdown-divider"></div>
                                                </li>
                                                <li>
                                                    <a class="dropdown-item" href="auth-login-basic.html">
                                                        <i class="bx bx-power-off me-2"></i>
                                                        <span class="align-middle">Log Out</span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                        {/* <!--/ User --> */}
                                    </ul>
                                </div>
                            </nav>
                            {/* <!-- / Navbar --> */}
                            {/* <!-- Content wrapper --> */}
                            <div class="content-wrapper">
                                {/* <!-- Content --> */}
                                <div class="container-xxl flex-grow-1 container-p-y">
                                    <div class="row">
                                        <div class="col-lg-8 mb-4 order-0">
                                            <div class="card">
                                                <div class="d-flex align-items-end row">
                                                    <div class="col-sm-7">
                                                        <div class="card-body">
                                                            <h5 class="card-title text-primary">Congratulations John! 🎉</h5>
                                                            <p class="mb-4">
                                                                You have done <span class="fw-bold">72%</span> more sales today. Check your new badge in
                                                                your profile.
                                                            </p>
                                                            <a href="javascript:;" class="btn btn-sm btn-outline-primary">View Badges</a>
                                                        </div>
                                                    </div>
                                                    <div class="col-sm-5 text-center text-sm-left">
                                                        <div class="card-body pb-0 px-0 px-md-4">
                                                            <img
                                                                src="../assets/img/illustrations/man-with-laptop-light.png"
                                                                height="140"
                                                                alt="View Badge User"
                                                                data-app-dark-img="illustrations/man-with-laptop-dark.png"
                                                                data-app-light-img="illustrations/man-with-laptop-light.png"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-4 col-md-4 order-1">
                                            <div class="row">
                                                <div class="col-lg-6 col-md-12 col-6 mb-4">
                                                    <div class="card">
                                                        <div class="card-body">
                                                            <div class="card-title d-flex align-items-start justify-content-between">
                                                                <div class="avatar flex-shrink-0">
                                                                    <img
                                                                        src="../assets/img/icons/unicons/chart-success.png"
                                                                        alt="chart success"
                                                                        class="rounded"
                                                                    />
                                                                </div>
                                                                <div class="dropdown">
                                                                    <button
                                                                        class="btn p-0"
                                                                        type="button"
                                                                        id="cardOpt3"
                                                                        data-bs-toggle="dropdown"
                                                                        aria-haspopup="true"
                                                                        aria-expanded="false"
                                                                    >
                                                                        <i class="bx bx-dots-vertical-rounded"></i>
                                                                    </button>
                                                                    <div class="dropdown-menu dropdown-menu-end" aria-labelledby="cardOpt3">
                                                                        <a class="dropdown-item" href="">View More</a>
                                                                        <a class="dropdown-item" href="">Delete</a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <span class="fw-semibold d-block mb-1">Profit</span>
                                                            <h3 class="card-title mb-2">$12,628</h3>
                                                            <small class="text-success fw-semibold"><i class="bx bx-up-arrow-alt"></i> +72.80%</small>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-lg-6 col-md-12 col-6 mb-4">
                                                    <div class="card">
                                                        <div class="card-body">
                                                            <div class="card-title d-flex align-items-start justify-content-between">
                                                                <div class="avatar flex-shrink-0">
                                                                    <img
                                                                        src="../assets/img/icons/unicons/wallet-info.png"
                                                                        alt="Credit Card"
                                                                        class="rounded"
                                                                    />
                                                                </div>
                                                                <div class="dropdown">
                                                                    <button
                                                                        class="btn p-0"
                                                                        type="button"
                                                                        id="cardOpt6"
                                                                        data-bs-toggle="dropdown"
                                                                        aria-haspopup="true"
                                                                        aria-expanded="false"
                                                                    >
                                                                        <i class="bx bx-dots-vertical-rounded"></i>
                                                                    </button>
                                                                    <div class="dropdown-menu dropdown-menu-end" aria-labelledby="cardOpt6">
                                                                        <a class="dropdown-item" href="">View More</a>
                                                                        <a class="dropdown-item" href="">Delete</a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <span>Sales</span>
                                                            <h3 class="card-title text-nowrap mb-1">$4,679</h3>
                                                            <small class="text-success fw-semibold"><i class="bx bx-up-arrow-alt"></i> +28.42%</small>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!-- Total Revenue --> */}
                                        {/* <!--/ Total Revenue --> */}
                                        <div class="col-12 col-md-8 col-lg-4 order-3 order-md-2">
                                            <div class="row">
                                                <div class="col-6 mb-4">
                                                    <div class="card">
                                                        <div class="card-body">
                                                            <div class="card-title d-flex align-items-start justify-content-between">
                                                                <div class="avatar flex-shrink-0">
                                                                    <img src="../assets/img/icons/unicons/paypal.png" alt="Credit Card" class="rounded" />
                                                                </div>
                                                                <div class="dropdown">
                                                                    <button
                                                                        class="btn p-0"
                                                                        type="button"
                                                                        id="cardOpt4"
                                                                        data-bs-toggle="dropdown"
                                                                        aria-haspopup="true"
                                                                        aria-expanded="false"
                                                                    >
                                                                        <i class="bx bx-dots-vertical-rounded"></i>
                                                                    </button>
                                                                    <div class="dropdown-menu dropdown-menu-end" aria-labelledby="cardOpt4">
                                                                        <a class="dropdown-item" href="">View More</a>
                                                                        <a class="dropdown-item" href="">Delete</a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <span class="d-block mb-1">Payments</span>
                                                            <h3 class="card-title text-nowrap mb-2">$2,456</h3>
                                                            <small class="text-danger fw-semibold"><i class="bx bx-down-arrow-alt"></i> -14.82%</small>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-6 mb-4">
                                                    <div class="card">
                                                        <div class="card-body">
                                                            <div class="card-title d-flex align-items-start justify-content-between">
                                                                <div class="avatar flex-shrink-0">
                                                                    <img src="../assets/img/icons/unicons/cc-primary.png" alt="Credit Card" class="rounded" />
                                                                </div>
                                                                <div class="dropdown">
                                                                    <button
                                                                        class="btn p-0"
                                                                        type="button"
                                                                        id="cardOpt1"
                                                                        data-bs-toggle="dropdown"
                                                                        aria-haspopup="true"
                                                                        aria-expanded="false"
                                                                    >
                                                                        <i class="bx bx-dots-vertical-rounded"></i>
                                                                    </button>
                                                                    <div class="dropdown-menu" aria-labelledby="cardOpt1">
                                                                        <a class="dropdown-item" href="">View More</a>
                                                                        <a class="dropdown-item" href="">Delete</a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <span class="fw-semibold d-block mb-1">Transactions</span>
                                                            <h3 class="card-title mb-2">$14,857</h3>
                                                            <small class="text-success fw-semibold"><i class="bx bx-up-arrow-alt"></i> +28.14%</small>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-12 mb-4">
                                                    <div class="card">
                                                        <div class="card-body">
                                                            <div class="d-flex justify-content-between flex-sm-row flex-column gap-3">
                                                                <div class="d-flex flex-sm-column flex-row align-items-start justify-content-between">
                                                                    <div class="card-title">
                                                                        <h5 class="text-nowrap mb-2">Profile Report</h5>
                                                                        <span class="badge bg-label-warning rounded-pill">Year 2021</span>
                                                                    </div>
                                                                    <div class="mt-sm-auto">
                                                                        <small class="text-success text-nowrap fw-semibold"
                                                                        ><i class="bx bx-chevron-up"></i> 68.2%</small>
                                                                        <h3 class="mb-0">$84,686k</h3>
                                                                    </div>
                                                                </div>
                                                                <div id="profileReportChart"></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>
                                {/* <!-- / Content --> */}
                                {/* <!-- Footer --> */}
                                <PageFooter />
                                {/* <!-- / Footer --> */}
                                <div class="content-backdrop fade"></div>
                            </div>
                            {/* <!-- Content wrapper --> */}
                        </div>
                        {/* <!-- / Layout page --> */}
                    </div>
                    {/* <!-- Overlay --> */}
                    <div class="layout-overlay layout-menu-toggle"></div>
                </div>
            </div>
        )
    }
}

export default DashboardScreen