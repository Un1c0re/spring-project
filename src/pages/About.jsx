import StartNavBar from "@/components/StartNavBar";
import Footer from "@/components/Footer";
import BootstrapCarousel from "@/components/Carousel";
import withStartLayout from "@/utils/hocs/withStartLayout";
const About = () => {
    return (
        <BootstrapCarousel />
    );
};

export default withStartLayout(About);