/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

function buttonToUp() {
  return (
    <div>
      <a
        href="#"
        data-tooltip-target="tooltip-top"
        data-tooltip-placement="top"
        className={`bottom-0 right-0 py-3 px-5 sticky rounded-none bg-black text-white transform  duration-300 block`}
      >
        <FontAwesomeIcon icon={faArrowUp} />
      </a>
      <div
        id="tooltip-top"
        role="tooltip"
        class="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
      >
        Go up <FontAwesomeIcon icon={faArrowUp} className="ml-2" />
        <div class="tooltip-arrow" data-popper-arrow></div>
      </div>
    </div>
  );
}

export default buttonToUp;
