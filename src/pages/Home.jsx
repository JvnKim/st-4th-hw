import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <ul>
        <li>
          <Link to="/detail/1">Detail 1</Link>
        </li>
        <li>
          <Link to="/detail/2">Detail 2</Link>
        </li>
        <li>
          <Link to="/detail/3">Detail 3</Link>
        </li>
        <li>
          <Link to="/detail/4">Detail 4</Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
