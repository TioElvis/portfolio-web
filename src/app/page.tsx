import { Fragment } from "react/jsx-runtime";

import { Hero } from "@/components/landing/hero";
import { About } from "@/components/landing/about";
import { Header } from "@/components/landing/header";
import { Contact } from "@/components/landing/contact";
import { Projects } from "@/components/landing/projects";

export const dynamic = "force-dynamic";

export default function Page() {
  return (
    <Fragment>
      <Header />
      <Hero />
      <About />
      <Projects />
      <Contact />
    </Fragment>
  );
}
