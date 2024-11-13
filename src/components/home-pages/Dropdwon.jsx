import React from "react";

const Dropdwon = () => {
  return (
    <div>
      {" "}
      <div class="menu">
        <div class="item border-2 rounded-xl">
          <p className="pl-9">divison</p>
          <a href="#" class="link">
            <span className="text-black"> Our Services </span>
            <svg viewBox="0 0 360 360" xml:space="preserve">
              <g id="SVGRepo_iconCarrier">
                <path
                  id="XMLID_225_"
                  d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393 c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393 s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z"
                ></path>
              </g>
            </svg>
          </a>
          <div class="submenu border-2 rounded-xl rounded-tr-xl overflow-hidden mt-4 px-2 bg-white">
            <input type="text" className="border-2 mt-3 " />
            <div class="submenu-item">
              <a href="#" class="submenu-link">
                Development
              </a>
            </div>
            <div class="submenu-item">
              <a href="#" class="submenu-link">
                Design
              </a>
            </div>
            <div class="submenu-item">
              <a href="#" class="submenu-link">
                Marketing
              </a>
            </div>
            <div class="submenu-item">
              <a href="#" class="submenu-link">
                SEO
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdwon;
