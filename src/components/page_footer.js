import React, { Component } from 'react'

export class PageFooter extends Component {
    render() {
        return (
            <div>
                <footer class="content-footer footer bg-footer-theme">
                    <div class="container-xxl d-flex flex-wrap justify-content-between py-2 flex-md-row flex-column">
                        <div class="mb-2 mb-md-0">
                            © by
                            <a href="" target="_blank" class="footer-link fw-bolder">ThemeSelection</a>
                        </div>
                        <div>
                            <a href="" class="footer-link me-4" target="_blank">License</a>
                            <a href="" target="_blank" class="footer-link me-4">More Themes</a>
                            <a href="" target="_blank" class="footer-link me-4">Documentation</a>
                            <a href="" target="_blank" class="footer-link me-4">Support</a>
                        </div>
                    </div>
                </footer>
            </div>
        )
    }
}

export default PageFooter