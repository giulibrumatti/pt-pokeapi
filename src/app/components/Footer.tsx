import Link from "next/link";

const Footer = () => {
  return (
    <footer className="opacity-80 mt-4 w-full mx-auto container font-bold lg:max-w-4xl md:max-w-2xl flex justify-center">
      <div className="rounded-lg w-full max-w-screen-xl mx-auto md:flex md:items-center md:justify-between py-4">
        <span className="text-xl sm:text-center text-zinc-200/90">
          © 2024{" "}
          <Link
            href="https://cv-gbrumatti-web.vercel.app/"
            target="_blank"
            className="hover:underline"
          >
            GBrumatti
          </Link>
          .
        </span>
      </div>
    </footer>
  );
};

export default Footer;
