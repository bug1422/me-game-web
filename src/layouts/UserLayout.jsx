import Header from "@/components/Header"
import DefaultLayout from "./DefaultLayout"
import Footer from "@/components/Footer"

const UserLayout = ({ children }) => {
    return (
        <DefaultLayout>
            <div className="min-h-screen bg-sky-100 flex flex-col">
                <header className="mb-8 py-2 shadow-md w-full">
                    <div className="px-12">
                        <Header />
                    </div>
                </header>
                <div className="body flex-grow h-auto px-12">
                    {children}
                </div>
                <footer className="min-h-14 mt-4 p-2 bg-white px-12">
                    <Footer/>
                </footer>
            </div>
        </DefaultLayout>
    )
}

export default UserLayout