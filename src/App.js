import "./styles.css";
import { Category } from "./components/Category";

function App() {
  const navbar = [
    {
      image:
        "https://rukminim1.flixcart.com/flap/128/128/image/f15c02bfeb02d15d.png?q=100",
      title: "Top offers"
    },
    {
      image:
        "https://rukminim1.flixcart.com/flap/128/128/image/82b3ca5fb2301045.png?q=100",
      title: "Fashion"
    }
  ];
  return (
    <div className="nav">
      {navbar.map((el) => (
        <Category image={el.image} label={el.title} />
      ))}
    </div>
  );
}
export default App;
