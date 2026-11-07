import React from "react";
import { Button } from "./ui/button";
import { BiRightArrowAlt } from "react-icons/bi";
import Link from "next/link";

const About = () => {
  return (
    <div className="leading-snug rounded-3xl border border-zinc-900 p-6">
      <div className="mb-12">
        <h1 className="text-2xl font-bold mb-4 text-primary">
          About Me
        </h1>
        <p className="text-zinc-400 text-lg mb-8">
          I'm Moses, a multidisciplinary designer & developer with a focus on motion and user experience. My projects include UI/UX design, animation, 3D modeling & illustration, and development.

        </p>
        <Link href="https://github.com/leeofmoses" target="_blank">
          <Button variant="outline" className="text-primary flex gap-2">
            Browse my work
            <BiRightArrowAlt />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default About;
