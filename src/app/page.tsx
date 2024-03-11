import HeroSection from "@/components/HeroSection";
import Wrapper from "@/components/Wrapper";
import { fetchUrl } from "@/utils/constVars";
const Home = async () => {
    return (
        <Wrapper>
            <HeroSection />
        </Wrapper>
    );
};

export default Home;
