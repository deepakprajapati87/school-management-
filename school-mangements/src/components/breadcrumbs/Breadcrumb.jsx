import { Link } from "react-router-dom"

export const Breadcrumbs = ({
    headingthree,
    breadcrumbOne,
    breadcrumbSecond
}) => {
  
    return (
        <>
            <div className="breadcrumbs-area ">
                <h3>{headingthree}</h3>
                <nav >
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><Link href="#">{breadcrumbOne}</Link></li>
                        <li className="breadcrumb-item active" aria-current="page">{breadcrumbSecond}</li>
                    </ol>
                </nav>
               
            </div>
        </>
    )
}