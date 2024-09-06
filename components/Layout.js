import Header from "./new-home/Header/Header"
import Footer from "./footer/Footer"

export default function Layout({ children }) {
    return(
        <div>
            <Header />
            <section className="pt-[82px]">
            {children}
            </section>
            <Footer />
        </div>
    )
}