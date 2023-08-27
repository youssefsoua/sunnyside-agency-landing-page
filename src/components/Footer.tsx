import {
  FaInstagram,
  FaPinterest,
  FaSquareFacebook,
  FaTwitter,
} from "react-icons/fa6";

export const Footer = () => {
  return (
    <footer className="flex h-[352px] flex-col items-center bg-footer-cyan p-8 ">
      <img
        src="./logo-footer.svg"
        alt="SunnySide"
        className="mb-4 mt-8 h-8 w-40"
      />
      <div className="flex w-[300px] justify-between py-6 text-dark-moderate-cyan">
        <a href="#About">About</a>
        <a href="#Services">Services</a>
        <a href="#Projects">Projects</a>
      </div>
      <div className="flex w-[165px] justify-between py-16 text-dark-desaturated-cyan">
        <a href="#facebook">
          <FaSquareFacebook />
        </a>
        <a href="#instagram">
          <FaInstagram />
        </a>
        <a href="#twitter">
          <FaTwitter />
        </a>
        <a href="#pinterest">
          <FaPinterest />
        </a>
      </div>
    </footer>
  );
};
