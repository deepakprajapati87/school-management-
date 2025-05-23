import { HeadingThree } from "../headingThree/headingThree"

export const Websitetraffic = () => {
    return (
        <>
            <div className="websiteTraffic">
                <div className="card p-3">
                    <HeadingThree title='Website Traffic' />
                    <h6 className="traffic-title">Unique Visitors</h6>
                    <div className="traffic-number">25,90</div>
                    <div className="multi-progress mb-3">
                        <div className="segment bg-teal" style={{ width: '60%' }}></div>
                        <div className="segment bg-blue" style={{ width: '20%' }}></div>
                        <div className="segment bg-yellow" style={{ width: '10%' }}></div>
                        <div className="segment bg-red" style={{ width: '10%' }}></div>
                    </div>
                    <div className="traffic-table table-responsive">
                        <table class="table">

                            <tbody>
                                <tr>
                                    <td className="t-title pseudo-bg-Aquamarine">Mark</td>
                                    <td>12,890</td>
                                    <td>50%</td>
                                </tr>
                                <tr>
                                    <td className="t-title pseudo-bg-blue">Search</td>
                                    <td>7,245</td>
                                    <td>27%</td>
                                </tr>
                                <tr>
                                    <td className="t-title pseudo-bg-yellow">Referrals</td>
                                    <td>4,256</td>
                                    <td>8%</td>
                                </tr>
                                <tr>
                                    <td className="t-title pseudo-bg-red">Social</td>
                                    <td>500</td>
                                    <td>7%</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}