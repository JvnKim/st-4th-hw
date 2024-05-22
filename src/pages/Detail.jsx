import { useParams } from "react-router-dom";

const Detail = () => {
  const { id } = useParams();

  console.log(`Detail Page ID : ${id}`);

  return (
    <div>
      <h1>Detail Page</h1>
      <p>ID: {id}</p>
    </div>
  );
};

export default Detail;
