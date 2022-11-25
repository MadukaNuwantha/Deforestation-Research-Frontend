import React, { Component } from 'react'

export class PageFooter extends Component {
    render() {
        return (
            <div>
                <footer class="content-footer footer bg-footer-theme">
                    <div class="container-xxl d-flex flex-wrap justify-content-between py-2 flex-md-row flex-column">
                        <div class="mb-2 mb-md-0">
                            ©
                            <a href="" target="_blank" class="footer-link fw-bolder">Safetrees</a>
                        </div>
                        <div>
                            <a href="/forestpatch" class="footer-link me-4" target="_blank">Forest patch analysis</a>
                            <a href="/waterbody" target="_blank" class="footer-link me-4">Waterbody detection</a>
                            <a href="/wildfire" target="_blank" class="footer-link me-4">Wildfires</a>
                        </div>
                    </div>
                </footer>
            </div>
        )
    }
}

export default PageFooter