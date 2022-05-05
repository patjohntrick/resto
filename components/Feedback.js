import { reviews } from "./data";

const Feedback = () => {
  return (
    <section className=" py-12 bg-black/5 ">
      <div className="feedback-container text-center mb-6">
        <p className=" text-green-900 uppercase font-semibold">reviews</p>
        <p className=" text-slate-900 font-bold capitalize text-xl ">
          what they say
        </p>
      </div>
      <div className="feedback-container space-y-6">
        {reviews.map((review) => {
          return (
            <div
              className="box bg-white w-[90%] m-auto p-4 space-y-2 relative rounded shadow-md"
              key={review.id}
            >
              <img
                src="/qoute.png"
                className="qoute h-auto absolute right-[3%] top-[5%]  w-[80px]"
              />
              <header className=" flex gap-2 items-center ">
                <div className="img-container">
                  <img
                    src={review.image}
                    alt=""
                    className=" rounded-full w-[60px] "
                  />
                </div>
                <div className="name-container text-slate-900">
                  <p className=" font-medium capitalize  ">{review.name}</p>
                  <p className=" text-xs uppercase font-bold text-green-900 ">
                    {review.title}
                  </p>
                </div>
              </header>
              <div className="message-container">
                <p className=" text-black/70 ">{review.message}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Feedback;
