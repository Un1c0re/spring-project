import '@/styles/globals.css'
import StartLayout from "@/components/StartLayout";

const App = ({ Component, pageProps }) => (
    <StartLayout>
        <Component {...pageProps} />
    </StartLayout>
);

export default App;


import Layout from '../components/StartLayout';

function MyApp({ Component, pageProps }) {
    const getLayout = Component.getLayout || ((page) => <Layout children={page} />);

    return getLayout(<Component {...pageProps} />);
}

export default MyApp;