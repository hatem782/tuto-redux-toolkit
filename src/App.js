import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import {
  GetPostes,
  decrement,
  increment,
  incrementByAmount,
} from "./redux/count.reducer";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetPostes());
  }, []);

  return (
    <div className="App">
      <A />
      <B />
      <C />
      <Postes />
    </div>
  );
}

const A = () => {
  const data = useSelector((state) => state.counter.value);
  return <div>hello A , counter value : {data}</div>;
};

const B = () => {
  const dispatch = useDispatch();

  const realIncrement = () => {
    dispatch(increment());
  };

  const realDecrement = () => {
    dispatch(decrement());
  };

  return (
    <div>
      hello B <br /> <button onClick={realIncrement}>increment</button>
      <br /> <button onClick={realDecrement}>decrement</button>
    </div>
  );
};

const C = () => {
  const dispatch = useDispatch();

  const realIncrementbYAmount = () => {
    dispatch(incrementByAmount(10));
  };

  return (
    <div>
      hello C <button onClick={realIncrementbYAmount}>inc by 10</button>{" "}
    </div>
  );
};

const Postes = () => {
  const { postes, loading } = useSelector((state) => state.counter);
  if (loading) {
    return <h1>Loading...</h1>;
  }
  return (
    <div>
      <h1>Postes</h1>
      {postes.map((post) => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
};

export default App;
