import React, { useState } from 'react';
import PageFooter from '../components/page_footer'
import SidebarComponent from '../components/sidebar_component'
import forest_patch from '../services/forest_patch';

export default function ForestPatchScreen() {
    const [imgData, setImgData] = useState(null)
    const [imgUrl, setImgUrl] = useState(null)
    const [responseData, setResponseData] = useState(null);

    const handleImageSelection = (params) => {
        try {
            setImgData(params.target.files[0])
            let reader = new FileReader()
            let url = reader.readAsDataURL(params.target.files[0])
            reader.onloadend = function (e) {
                setImgUrl(reader.result)
            }

        } catch (err) {
            console.log(err)
        }
    }

    const submit = async () => {
        let form = new FormData()
        form.append("file", imgData)
        let res = await forest_patch.predictForestPatches(form)
        console.log(res)
        setResponseData(res)
    }

    return (
        <div>
            <div class="layout-wrapper layout-content-navbar">
                <div class="layout-container">
                    {/* <!-- Menu --> */}
                    <SidebarComponent />
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
                        <div class="p-4">
                            <h3>
                                Forest patch detection
                            </h3>
                        </div>
                        <div class="content-wrapper">
                            {/* <!-- Content --> */}
                            <div class="container-xxl flex-grow-1 container-p-y">
                                <div class="row">
                                    <div class="col">
                                        <div class="card">
                                            <div class="card-body">
                                                <div class="mb-3">
                                                    <label for="formFile" class="form-label">Upload image for analysis</label>
                                                    <input class="form-control" type="file" id="formFile" accept="image/jpg, image/png"
                                                        onChange={handleImageSelection} />
                                                </div>
                                            </div>
                                        </div>

                                        <div class="col py-2">
                                            {imgData ?
                                                <div class="row">
                                                    <div class="card p-2">
                                                        <div class="card-body">
                                                            <h2>Image</h2>
                                                            <img src={imgUrl} class="w-100" />
                                                            <button class="btn btn-primary d-grid w-100 mt-4" type="submit" onClick={submit}>Submit</button>
                                                        </div>
                                                    </div>

                                                </div>
                                                : <div></div>}

                                            {responseData ?
                                                <div class="row">
                                                    <div class="card p-2">
                                                        <div class="card-body">
                                                            <h2>Prediction</h2>
                                                            <img src={responseData.predictedImage} class="w-100" />
                                                        </div>
                                                        {responseData["predectedDetails"].map(item => {
                                                            return (
                                                                <div class="card-body">
                                                                    <div class="row">
                                                                        <div class="col" style={{fontWeight: '600'}}>Class</div>
                                                                        <div class="col">{item.name}</div>
                                                                    </div>
                                                                    <div class="row">
                                                                        <div class="col">Coordinates</div>
                                                                        <div class="col">
                                                                            <div class="row">X-Min  - {item.xmin}</div>
                                                                            <div class="row">Y-Min  - {item.ymin}</div>
                                                                            <div class="row">X-Max  - {item.xmax}</div>
                                                                            <div class="row">Y-Max  - {item.ymax}</div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="row">
                                                                        <div class="col" style={{fontWeight: '600'}}>Class</div>
                                                                        <div class="col">{item.confidence}</div>
                                                                    </div>
                                                                </div>
                                                            )
                                                        })}
                                                    </div>
                                                </div>
                                                : <div></div>}
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
        </div>
    )
}
