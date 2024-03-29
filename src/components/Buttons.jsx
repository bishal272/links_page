export default function Buttons() {
  return (
    <div className="px-14 flex gap-2 justify-between mb-4 mt-1 ">
      <a href="https://www.linkedin.com/in/bishal272/" target="_blank" rel="noreferrer">
        <img
          src="./linkedin-white.svg"
          alt=""
          className="w-6 rounded-md transition ease-in hover:scale-150 shadow-xl shadow-blue-500"
        />
      </a>
      <a href="https://twitter.com/merkasin" target="_blank" rel="noreferrer">
        <img
          src="./twitter-white.svg"
          alt=""
          className="w-6 rounded-md transition ease-in hover:scale-150 shadow-xl shadow-blue-500"
        />
      </a>
      <a href="https://github.com/bishal272" target="_blank" rel="noreferrer">
        <img
          src="./github-white.svg"
          alt=""
          className="w-6 rounded-md transition ease-in hover:scale-150 shadow-xl shadow-blue-500"
        />
      </a>
      <a href="https://bit.ly/rxme" target="_blank" rel="noreferrer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 text-white transition ease-in hover:scale-150 shadow-xl shadow-blue-500">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
          />
        </svg>
      </a>
    </div>
  );
}
