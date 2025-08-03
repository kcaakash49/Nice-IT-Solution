import { InfoCard } from "../components/animatedText/InfoCard";
import FTTHProductsSection from "../components/FTTHProductSection";
import ServicesSection from "../components/ServicesSection";




export default function Services() {
    return (
        <div className="flex flex-col flex-grow min-h-0 ">
            <div className="min-h-[30vh] flex">
                <InfoCard
                    smallHeader="FTTH and IT Service Provider"
                    bigHeader="Best Service Provider"
                    description="We provide high-speed fiber connectivity, managed IT solutions, and 24/7 support to keep your business online."
                    backgroundImageUrl="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80"
                    className="w-full flex-grow"
                />

            </div>
            {/* <div className="flex-grow overflow-auto min-h-0 flex flex-col"> */}
                <div className="flex-grow flex flex-col"><ServicesSection/></div>
                
            {/* </div> */}

            {/* <FTTHProductsSection/> */}
        </div>
    )
}


