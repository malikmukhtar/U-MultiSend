import * as React from "react";

function SvgComponent(props) {
  return (
    <svg width="50" height="50" viewBox="0 0 50 50">
      <rect
        width={8}
        height={20}
        rx={4}
        transform="translate(10 10)"
        fill="#f2b300"
      />
      <rect
        width={8}
        height={20}
        rx={4}
        transform="translate(30 10)"
        fill="#7620ff"
      />
      <rect
        width={20}
        height={8}
        rx={4}
        transform="translate(14 30)"
        fill="#4cd5c5"
      />
    </svg>
  );
}

export default SvgComponent;
