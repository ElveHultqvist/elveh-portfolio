import { Button } from "@/components/ui/button"
import { FiDownload } from "react-icons/fi"


// components
import Social from "@/components/Social"
import Photo from "@/components/Photo"
import Stats from "@/components/Stats"
import TechStack from "@/components/TechStack"

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <h1 className="h1 mb-6">
              Elve <br /> <span className="text-accent">Hultqvist</span>
            </h1>
            <span className="text-xl tex">DevOps, Fullstack & Project</span>
            <p className="max-w-[500px] mb-9 text-white/80">
              I&apos;m a consultant at <a href="https://www.kodify.se" className="text-accent hover:text-accent-hover">B3Kodify</a> from Stockholm with more than 10 years experience in IT, 
              with a passion for building modern services with a touch of AI in React, Next, Sveltekit, Express, Node & Python. 
            </p>
            {/* btn & socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2"
              >
                <span>Download CV</span>
                <FiDownload className="text-xl"/>
              </Button>
              <div className="mb-8 xl:mb-0">
                <Social containerStyles="flex gap-6" iconStyles="w-9 h-9 border border-accent rounded-full 
                flex justify-center items-center text-accent text-base hover:bg-accent 
                hover:bg-accent hover:tex-primary hover:transition-all duration-500"/>
              </div>
            </div>
          </div>
          {/* photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
      <TechStack />
    </section>
  );
};

export default Home

