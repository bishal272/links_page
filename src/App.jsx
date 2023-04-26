import Buttons from "./components/Buttons";
import Link from "./components/Link";

function App() {
  return (
    <div className="flex justify-center items-center flex-col">
      <div className="flex flex-col -mt-12">
        <h1 className="text-white text-center text-4xl font-bold">Projects</h1>
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
