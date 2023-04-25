import Buttons from "./components/Buttons";
import Link from "./components/Link";

function App() {
  return (
    <main>
      <div className="max-w-sm mx-auto my-36">
        <div className="flex flex-col">
          <h1 className="text-white text-center text-4xl font-bold">Projects</h1>
          <br />
          <Buttons />
          <Link url={"https://fullstack-booking-app.vercel.app/"} title={"Booking App"} />
          <Link url={"https://todo-app-merkasin.vercel.app/"} title={"Todo App"} />
          <Link url={"https://tic-tac-toe-merkasin.vercel.app/"} title={"Tic Tac Toe game"} />
          <Link url={"https://bishal272.github.io/Google-keep-clone/"} title={"Keeper"} />
        </div>
      </div>
      <div className="text-white text-center bottom-0">&copy;merkasin</div>
    </main>
  );
}

export default App;
