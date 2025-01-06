import { Link, useLocation } from "react-router-dom"

const Breadcrumbs = () => {
    const location = useLocation()

    let currentLink = ''
    const crumbs = location.pathname
        .split('/')
        .filter(crumb => crumb !== '')
        .map(crumb => {
            console.log(crumb)
            currentLink += `/${crumb}`
            return (
                <div className="text-md relative after:content-['>']  last:after:content-none after:ms-1 me-1" key={crumb}>
                    <Link className="hover:text-blue-300 underline hover:no-underline" to={currentLink}>{crumb.toUpperCase()}</Link>
                </div>
            )
        })
    return (
        <div className="flex flex-row m-2">{crumbs}</div>
    )
}

export default Breadcrumbs