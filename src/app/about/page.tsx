import React, { ReactNode } from "react";
import AboutSection from "@/components/AboutSectionElements/AboutSection";
import Wrapper from "@/components/Wrapper";
import { Metadata } from "next";
const About = (): ReactNode => {
  return (
    <Wrapper>
      <AboutSection />
    </Wrapper>
  );
};

export default About;

export const metadata: Metadata = {
  title: "Lendy | About",
  description: "Skills and experience",
};
