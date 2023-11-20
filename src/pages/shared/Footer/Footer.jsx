const Footer = () => {
  return (
    <div className="bg-neutral absolute inset-x-0">
      {/* Mobile-friendly footer */}
      <footer className="footer p-4 md:p-10 m-auto mt-10 md:mt-20 md:w-[1440px] text-white">
        {/* Service Section */}
        <div className="mb-4 md:mb-0">
          <span className="footer-title">Services</span>
          <a className="block link link-hover">Branding</a>
          <a className="block link link-hover">Design</a>
          <a className="block link link-hover">Marketing</a>
          <a className="block link link-hover">Advertisement</a>
        </div>

        {/* Company Section */}
        <div className="mb-4 md:mb-0">
          <span className="footer-title">Company</span>
          <a className="block link link-hover">About us</a>
          <a className="block link link-hover">Contact</a>
          <a className="block link link-hover">Jobs</a>
          <a className="block link link-hover">Press kit</a>
        </div>

        {/* Legal Section */}
        <div>
          <span className="footer-title">Legal</span>
          <a className="block link link-hover">Terms of use</a>
          <a className="block link link-hover">Privacy policy</a>
          <a className="block link link-hover">Cookie policy</a>
        </div>
      </footer>

      {/* Social Media and Brand Section */}
      <footer className="footer p-4 border-t bg-neutral text-white w-full m-auto border-base-300">
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-between">
          {/* Brand Section */}
          <div className="mb-4 md:mb-0 md:mr-8">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              fillRule="evenodd"
              clipRule="evenodd"
              className="fill-current"
            >
              {/* Your SVG path here */}
            </svg>
            <p className="text-sm mt-2">
              GAME OF THRONES <br />
              Providing reliable entertainment since 2011
            </p>
          </div>

          {/* Social Media Links */}
          <div className="flex gap-4">
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                {/* Your SVG path here */}
              </svg>
            </a>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                {/* Your SVG path here */}
              </svg>
            </a>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                {/* Your SVG path here */}
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
