import Header from '../components/Header';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';

function DefaultLayout({ children }) {
    return (
        <div>
            <Header />
            <Navigation />
            <div>{children}</div>
            <Footer />
        </div>
    );
}

export default DefaultLayout;
