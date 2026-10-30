import { Fragment } from "react/jsx-runtime";

import { Hero } from "@/components/landing/hero";
import { About } from "@/components/landing/about";
import { Header } from "@/components/landing/header";
import { Contact } from "@/components/landing/contact";
import { Projects } from "@/components/landing/projects";

// Repositories are fetched again at most once an hour
export const revalidate = 3600;

export default function Page() {
  return (
    <Fragment>
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
