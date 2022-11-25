import React from "react";
import ResearchComponent from "../components/research_component";
import PageFooter from "../components/page_footer";
import SidebarComponent from "../components/sidebar_component";
import NavbarComponent from "../components/navbar_component";
import ResearchData from "../data/researchdata.json";

export default function Dashboard() {
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
            <NavbarComponent />
            {/* <!-- / Navbar --> */}
            {/* <!-- Content wrapper --> */}
            <div class="content-wrapper">
              {/* <!-- Content --> */}
              <div class="container-xxl flex-grow-1 container-p-y">
                <div class="row">
                  <div class="col-lg-12 mb-4 order-0">
                    <div class="card">
                      <div class="d-flex align-items-end row">
                        <div class="col-sm-7">
                          <div class="card-body">
                            <h1 class="card-title text-primary">
                              A DRONE-BASED APPROACH FOR DEFORESTATION
                              MONITORING
                            </h1>
                            <p class="mb-2">
                              At the moment, forests cover around 31% of the
                              Earth's land surface.
                            </p>
                            <p class="mb-2">
                              Approximately 420 million hectares of forest have
                              been lost since 1990
                            </p>
                            <p class="mb-2">
                              Tropical rainforests have the highest
                              concentration of deforestation..
                            </p>
                            <p class="mb-2">
                              Proper monitoring of deforestation helps to take
                              actions against deforestation.{" "}
                            </p>
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
                </div>
                <div className="row">
                  {ResearchData.data.map((singleComponenet) => {
                    return (
                      <div className="col-lg-4 col-md-4">
                        <ResearchComponent
                          title={singleComponenet.title}
                          point1={
                            singleComponenet.point1
                          }
                          point2={
                            singleComponenet.point2
                          }
                          point3={singleComponenet.point3}
                        />
                      </div>
                    );
                  })}
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
  );
}
