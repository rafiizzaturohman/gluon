const PaperPlane = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 300 300"
      shapeRendering="geometricPrecision"
      textRendering="geometricPrecision"
      className={`${className} fill-current`} // bisa dikontrol dengan tailwind
    >
      <path
        d="M22.454678,171.770881C71.991242,119.308365,155.775361,65.345712,220.15186,31.737393c0,71.003491-9.467132,164.728099-19.241741,236.598236-22.721117-16.487414-58.190211-46.588551-68.911533-70.336449c18.768385-30.294823,46.405551-73.953346,55.565207-104.801592-22.413641,21.854471-49.210605,73.165562-63.122509,98.017739-33.774199,0-74.224446-7.057107-101.986606-19.444446Z"
        transform="matrix(1.334642 0.121078-.101706 1.121101 3.363139-32.893285)"
        fill="currentColor"
        stroke="none"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="76"
      />
    </svg>
  );
};

export default PaperPlane;
