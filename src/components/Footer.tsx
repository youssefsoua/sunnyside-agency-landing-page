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
        <a href="#">About</a>
        <a href="#">Services</a>
        <a href="#">Projects</a>
      </div>
      <div className="flex w-[165px] justify-between py-16 text-dark-desaturated-cyan">
        <a href="#">
          <FaSquareFacebook />
        </a>
        <a href="#">
          <FaInstagram />
        </a>
        <a href="#">
          <FaTwitter />
        </a>
        <a href="#">
          <FaPinterest />
        </a>
      </div>
    </footer>
  );
};
