import { BsGithub, BsTwitter } from "react-icons/bs";
import Statement from "../Statement";

export default () => {
  return (
    <footer className="footer footer-center p-10 text-base-content rounded mx-auto">
      <nav className="grid grid-flow-col gap-4">
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
      </nav>
      <nav>
        <div className="grid grid-flow-col gap-4">
          <a
            href="https://github.com/story-has-you"
            target="_blank"
            className="hover:text-[#2752f4]"
          >
            <BsGithub className="text-xl" />
          </a>
          <a
            href="https://x.com/story_has_you"
            target="_blank"
            className="hover:text-[#2752f4]"
          >
            <BsTwitter className="text-xl" />
          </a>
        </div>
      </nav>

      <Statement></Statement>

      <aside>
        <p>© Copyright 2023. All rights reserved.</p>
      </aside>
    </footer>
  );
};
