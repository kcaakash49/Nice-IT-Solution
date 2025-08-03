// import { InfoCard } from "../components/animatedText/InfoCard";
import FTTHProductsSection from "../components/FTTHProductSection";
import ServiceInfoCarousel from "../components/ServiceInfoCarousel";
import ServicesSection from "../components/ServicesSection";
import WhoWeAreSection from "../components/WhoWeAreSecion";

const HomePage = () => {
    return (
        <div className="flex flex-col flex-grow min-h-0">
            {/* Hero: fixed floor, can expand if needed */}
            <div className="min-h-[40vh] flex">
                {/* <InfoCard
                    smallHeader="FTTH and IT Service Provider"
                    bigHeader="Best Service Provider"
                    description="We provide high-speed fiber connectivity, managed IT solutions, and 24/7 support to keep your business online."
                    backgroundImageUrl="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80"
                    className="w-full flex-grow"
                /> */}
                <ServiceInfoCarousel />
            </div>

            {/* This fills remaining space when there's nothing else, but will grow naturally with its own content */}

            <WhoWeAreSection />


            <FTTHProductsSection />
            <ServicesSection/>
        </div>
    );
};

export default HomePage;
