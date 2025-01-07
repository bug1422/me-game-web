import Header from "@/components/Header"
import DefaultLayout from "./DefaultLayout"
import Footer from "@/components/Footer"

const UserLayout = ({ children }) => {
    return (
        <DefaultLayout>
            <div className="min-h-screen bg-sky-100 flex flex-col">
                <header className="mb-8 py-2 shadow-md w-full">
                    <div className="px-4 md:px-12">
                        <Header />
                    </div>
                </header>
                <div className="body px-4 md:px-12">
                    {children}
                </div>
                <footer className="mt-auto p-2 bg-white px-4 md:px-12">
                    <Footer/>
                </footer>
            </div>
        </DefaultLayout>
    )
}

export default UserLayout