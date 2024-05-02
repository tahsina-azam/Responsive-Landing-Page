import React from "react";

function FooterBottom() {
  return (
    <div>
      <footer className="footer px-10 py-4 border-t bg-base-200  border-base-300 text-sm">
        <aside className="items-center flex flex-row text-sm">
          <p className="text-gray-600 text-sm mr-8">
            Copyright © 2024 Apple Inc. All rights reserved
          </p>
          <p className="text-gray-800 text-sm">
            {" "}
            Privacy Policy | Terms of Use | Sales and Refunds | Legal | Sitemap
          </p>
        </aside>
        <nav className="md:place-self-center md:justify-self-end">
          <div className="grid grid-flow-col gap-4">
            <a className="link link-hover text-gray-800 text-sm">
              United States
            </a>
          </div>
        </nav>
      </footer>
    </div>
  );
}

export default FooterBottom;
