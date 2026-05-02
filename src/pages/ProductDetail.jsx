import { Link } from "react-router-dom";
import GetOneProduct from "../hooks/GetOneProduct";
import { useParams } from "react-router-dom";

function ProductDetail() {
  const route = useParams();
  const { data, isLoading } = GetOneProduct(route.id);

 
  return (
    <>
      {isLoading == true && (
        <div className="flex items-center justify-center">
          <svg
            className="animate-spin h-8 w-8 text-primary"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
        </div>
      )}
      {isLoading == false && (
        <div className=" overflow-hidden">
          <div className="bg-gray-100 w-full py-1 font-jost">
            <div className=" max-w-[90%] lg:max-w-5xl sm:ml-10 md:ml-30 lg:ml-50 mx-auto flex items-center gap-1 text-sm">
              <Link to="/">Home</Link>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m8.25 4.5 7.5 7.5-7.5 7.5"
                  />
                </svg>
              </span>
              <Link to="/products">Product</Link>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m8.25 4.5 7.5 7.5-7.5 7.5"
                  />
                </svg>
              </span>
              <span className="font-semibold">Man cloth</span>
            </div>
          </div>
          <div className="max-w-[90%] lg:max-w-5xl sm:ml-10 md:ml-30 lg:ml-50 mx-auto font-jost">
            <div className=" py-10 grid grid-cols-1 lg:grid-cols-2 ">
              <div className=" py-1 border lg:h-120 lg:w-110 md:h-105 md:w-95 h-90 w-80 border-gray-300">
                <img
                  className="w-[80%] h-[80%] ml-10 mt-7 "
                  src={data.image}
                  alt={data.title}
                />
              </div>
              <div className="sm:mt-4 md:mt-4">
                <h3 className="text-lg uppercase">{data.category}</h3>
                <h1 className="text-3xl font-bold">{data.title}</h1>
                <h1 className="text-2xl font-bold text-red-500">
                  {data.price}$
                </h1>
                <div className="my-8 flex flex-col items-start gap-4 md:flex-row md:items-center">
                  <div className="border border-gray-300 w-32 py-2 flex items-center justify-evenly">
                    <button>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-4 cursor-pointer"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 12h14"
                        />
                      </svg>
                    </button>
                    <button>1</button>
                    <button>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-4 cursor-pointer"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 4.5v15m7.5-7.5h-15"
                        />
                      </svg>
                    </button>
                  </div>
                  <button className="bg-black cursor-pointer px-8 py-2 text-white hover:bg-gray-800 ">
                    Get to cart
                  </button>
                  <button className="bg-yellow-500 cursor-pointer hover:bg-yellow-400 px-8 py-2 text-white ">
                    Pay now
                  </button>
                </div>
                <div>
                  <hr />
                  <p>{data.description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ProductDetail;
