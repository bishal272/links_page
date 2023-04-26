import Buttons from "./components/Buttons";
import Link from "./components/Link";

function App() {
  return (
    <div className="flex justify-center items-center flex-col">
      <div className="flex flex-col">
        <div className="flex pl-4">
          <img
            src="https://avatars.githubusercontent.com/u/83636171?v=4"
            alt=""
            className="rounded-full w-20 h-20 transition ease-in hover:scale-110 "
          />
          <div className="px-5 ml-4">
            <h1 className="text-white text-center mb-3">Bishal Sarkar</h1>
            <h1 className="text-white text-center text-4xl font-bold">Projects</h1>
          </div>
        </div>
        <br />
        <Buttons />
        <Link url={"https://fullstack-booking-app.vercel.app/"} title={"Booking App"} />
        <Link url={"https://todo-app-merkasin.vercel.app/"} title={"Todo App"} />
        <Link url={"https://tic-tac-toe-merkasin.vercel.app/"} title={"Tic Tac Toe game"} />
        <Link url={"https://bishal272.github.io/Google-keep-clone/"} title={"Keeper"} />
      </div>
      <div className="text-white text-center w-screen absolute bottom-0">&copy;merkasin</div>
    </div>
  );
}

export default App;
