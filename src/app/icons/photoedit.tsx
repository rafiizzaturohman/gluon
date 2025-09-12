const PhotoEdit = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 280 176"
      shapeRendering="geometricPrecision"
      textRendering="geometricPrecision"
      className={`${className} fill-current`}
    >
      {/* Frame */}
      <rect
        width="271.044993"
        height="168.359942"
        rx="12"
        ry="12"
        transform="matrix(.918714 0 0 0.918714 15.493586 10.662682)"
        fill="none"
        stroke="currentColor"
        strokeWidth="10"
      />

      {/* Isi gambar */}
      <g>
        <g transform="translate(8.000001 0.000001)">
          <rect
            width="175.567567"
            height="27.243243"
            rx="5"
            ry="5"
            transform="matrix(1.163801 0 0 0.7963 27.49481 121.953102)"
          />
          <rect
            width="175.567567"
            height="27.243243"
            rx="5"
            ry="5"
            transform="matrix(.926937 0 0 0.7963 69.080447 111.106205)"
          />
        </g>
        <g transform="translate(9.487251 0)">
          <polygon
            points="12.041008,-51.372646 29.238928,-4.812692 29.238928,16.881103 0,16.881103 -29.238928,16.881103 -17.503949,-4.812692 12.041008,-51.372646"
            transform="translate(63.706732 126.765794)"
          />
          <polygon
            points="18.896593,-76.460993 45.18361,-4.812692 29.238928,16.881103 0,16.881103 -29.238928,16.881103 -18.653445,-4.812692 18.896593,-76.460993"
            transform="translate(122.184588 126.765794)"
          />
          <polygon
            points="23.487178,-93.896018 45.18361,-4.812692 29.238928,16.881103 0,16.881103 -29.238928,16.881103 -18.653445,-4.812692 23.487178,-93.896018"
            transform="translate(176.689412 126.765794)"
          />
        </g>
        <ellipse
          rx="14.306942"
          ry="14.306942"
          transform="translate(77.080448 50.304801)"
        />
      </g>

      {/* Icon Pensil */}
      <g transform="matrix(1.184015 0.887865-.887865 1.184015 343.131046 68.834292)">
        <path
          d="M0,55.616314L0,5C0,2.238576,2.238576,0,5,0h21.265256c2.761424,0,5,2.238576,5,5v50.616314"
          transform="matrix(1.050756 0 0 1.001686-56.786199 39.571131)"
          fill="currentColor"
          stroke="#1c1a18"
          strokeWidth="6"
        />
        <path
          d="M0,0h31.265256L15.632628,55.981958v0L0,0Z"
          transform="matrix(1 0 0 0.452621-55.992749 96.614494)"
          fill="currentColor"
          stroke="#1c1a18"
          strokeWidth="6"
        />
      </g>
    </svg>
  );
};

export default PhotoEdit;
