export default function HeroWaves() {
    return (
      <div className="absolute left-0 bottom-0 inset-x-0 pointer-events-none z-10">
        <svg
          viewBox="0 0 1440 320"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="block w-screen h-[100px] md:h-[200px]"
          style={{ minWidth: "100vw" }}
          preserveAspectRatio="none"
        >
          {/* Wave 1 - front and most intense */}
          <path
            d="M0,160 C360,320 1080,0 1440,160 L1440,320 L0,320 Z"
            fill="#030013"
            opacity="1"
          />
          {/* Wave 2 */}
          <path
            d="M0,180 C400,300 1040,40 1440,180 L1440,320 L0,320 Z"
            fill="#030013"
            opacity="0.7"
          />
          {/* Wave 3 */}
          <path
            d="M0,200 C480,280 960,80 1440,200 L1440,320 L0,320 Z"
            fill="#030013"
            opacity="0.5"
          />
        </svg>
      </div>
    );
  }
  