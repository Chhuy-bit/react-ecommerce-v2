import { Link } from "react-router-dom";

function Card(props) {
    const { data } = props
  return (
    < Link to={`/product/${data.id}`} className="border card-animate border-gray-300 group">
      <figure className="h-40 lg:h-65 p-6 overflow-hidden">
        <img
          className="w-full h-58 group-hover:scale-110 transition-all duration-300"
          src={data.image}
          alt={data.title}
        />
      </figure>
      <div className=" text-start px-2 py-2 mt-2">
        <h3 className="line-clamp-1">{data.title}</h3>
        <p>{data.price.toFixed(2)}$</p>
      </div>
    </Link>
  );
}

export default Card;
