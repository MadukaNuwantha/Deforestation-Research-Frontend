import React, { useState } from "react";
import PageFooter from "../components/page_footer";
import SidebarComponent from "../components/sidebar_component";
import wildfire from "../services/wildfire";
import NavbarComponent from "../components/navbar_component";

export default function WildfireScreen() {
  const [imgData, setImgData] = useState(null);
  const [imgUrl, setImgUrl] = useState(null);
  const [responseData, setResponseData] = useState(null);

  const handleImageSelection = (params) => {
    try {
      setImgData(params.target.files[0]);
      let reader = new FileReader();
      let url = reader.readAsDataURL(params.target.files[0]);
      reader.onloadend = function (e) {
        setImgUrl(reader.result);
      };
    } catch (err) {
      console.log(err);
    }
  };

  const submit = async () => {
    let form = new FormData();
    form.append("file", imgData);
    let res = await wildfire.predictWildfire(form);
    console.log(res);
    setResponseData(res);
  };

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
            <div class="p-4">
              <h3>Wildfire detection</h3>
            </div>
            <div class="content-wrapper">
              {/* <!-- Content --> */}
              <div class="container-xxl flex-grow-1 container-p-y">
                <div class="row">
                  <div class="col">
                    <div class="card">
                      <div class="card-body">
                        <div class="mb-3">
                          <label for="formFile" class="form-label">
                            Upload image for analysis
                          </label>
                          <input
                            class="form-control"
                            type="file"
                            id="formFile"
                            accept="image/jpg, image/png"
                            onChange={handleImageSelection}
                          />
                        </div>
                      </div>
                    </div>

                    <div class="col py-2">
                      {imgData ? (
                        <div class="row">
                          <div class="card p-2">
                            <div class="card-body">
                              <h2>Image</h2>
                              <img src={imgUrl} class="w-100" />
                              <button
                                class="btn btn-primary d-grid w-100 mt-4"
                                type="submit"
                                onClick={submit}
                              >
                                Submit
                              </button>
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div></div>
                      )}

                      {responseData ? (
                        <div class="row">
                          <div class="card p-2">
                            <div class="card-body">
                              <h2>Prediction</h2>
                              <img
                                src={responseData.predictedImage}
                                class="w-100"
                              />
                            </div>
                            {responseData["predectedDetails"].map((item) => {
                              return (
                                <div class="card-body">
                                  <div class="row">
                                    <div
                                      class="col"
                                      style={{ fontWeight: "600" }}
                                    >
                                      Class
                                    </div>
                                    <div class="col">{item.name}</div>
                                  </div>
                                  <div class="row">
                                    <div class="col">Coordinates</div>
                                    <div class="col">
                                      <div class="row">X-Min - {item.xmin}</div>
                                      <div class="row">Y-Min - {item.ymin}</div>
                                      <div class="row">X-Max - {item.xmax}</div>
                                      <div class="row">Y-Max - {item.ymax}</div>
                                    </div>
                                  </div>
                                  <div class="row">
                                    <div
                                      class="col"
                                      style={{ fontWeight: "600" }}
                                    >
                                      Class
                                    </div>
                                    <div class="col">{item.confidence}</div>
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      ) : (
                        <div></div>
                      )}
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
  );
}
