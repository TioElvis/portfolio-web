import { Fragment } from "react/jsx-runtime";

import { Hero } from "@/components/landing/hero";
import { About } from "@/components/landing/about";
import { Header } from "@/components/landing/header";
import { Contact } from "@/components/landing/contact";
import { Projects } from "@/components/landing/projects";
import { StructuredData } from "@/components/structured-data";

export default function Page() {
  return (
    <Fragment>
      <StructuredData />
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
      </main>
      <Contact />
    </Fragment>
  );
}
