import { BsGithub, BsTwitter } from "react-icons/bs";
import Statement from "../Statement";
import Link from "next/link";

export default () => {
  return (
    <footer className="footer footer-center p-10 text-base-content rounded mx-auto">
      <nav className="grid grid-flow-col gap-4">
        <Link className="link link-hover" href="#">
          About us
        </Link>
        <Link className="link link-hover" href="mailto:fangxi.inori@gmail.com">
          Contact
        </Link>
        <Link className="link link-hover" href="#">
          Jobs
        </Link>
        <Link className="link link-hover" href="#">
          Press kit
        </Link>
      </nav>
      <nav>
        <div className="grid grid-flow-col gap-4">
          <Link
            href="https://github.com/story-has-you"
            target="_blank"
            className="hover:text-[#2752f4]"
          >
            <BsGithub className="text-xl" />
          </Link>
          <Link
            href="https://x.com/story_has_you"
            target="_blank"
            className="hover:text-[#2752f4]"
          >
            <BsTwitter className="text-xl" />
          </Link>
        </div>
      </nav>

      <Statement></Statement>

      <aside>
        <p>© Copyright 2023. All rights reserved.</p>
      </aside>
    </footer>
  );
};
