import { Suspense } from "react"

const loading = () => <div />
const DefaultLayout = ({ children }) => {
    return <Suspense fallback={loading()}>{children}</Suspense>
}
export default DefaultLayout