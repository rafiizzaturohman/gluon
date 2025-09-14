const BookIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 300 300"
      shapeRendering="geometricPrecision"
      textRendering="geometricPrecision"
      className={`${className} fill-current`}
    >
      <path
        d="M6,22.098332C6,22.098332,67.703927,-8.604955,129.407855,0c3.313708,0,6,2.686292,6,6v174.675341c0,3.313708-2.686292,6-6,6-61.703928-5.999994-90.591702-6.000005-129.407856,12.158492-3.313708,0,.000001,3.313712.000001.000004L0,30.434589c0-5.728325,6-8.336257,6-8.336257Z"
        transform="matrix(1 0 0 1.329197 150.000012 17.824398)"
        fill="none"
        stroke="currentColor"
        strokeWidth="20"
      />
      <path
        d="M6,22.098332C6,22.098332,67.703927,-8.604955,129.407855,0c3.313708,0,6,2.686292,6,6v174.675341c0,3.313708-2.686292,6-6,6C67.703927,180.675347,38.816154,180.675344,0,198.833841c-3.313708,0,0,3.313704,0-.000004L0,30.434589c0-5.728325,6-8.336257,6-8.336257Z"
        transform="matrix(-1 0 0 1.329197 150.000011 17.824398)"
        fill="none"
        stroke="currentColor"
        strokeWidth="20"
      />
    </svg>
  );
};

export default BookIcon;
