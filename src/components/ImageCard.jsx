const ImageCard = ({ id, img, title, price, author, icon1, icon2 }) => {
  return (
    <div className="rounded-lg bg-white shadow-lg p-2 h-fit">
      {/* Container for image */}
      <div className="rounded-lg overflow-hidden shadow-md">
        <img
          src={img}
          alt={title}
          className="w-full h-48 object-cover hover:scale-105 transition-transform ease-linear duration-300 cursor-pointer rounded-md"
        />
        {/* Additional content */}
      </div>

      {/* Author and title details */}
      <p className="font-semibold text-white bg-black w-fit px-5 py-1 rounded-full text-sm mt-3">
        {"@" + author.charAt(0).toUpperCase() + author.slice(1)}
      </p>

      <div className="flex justify-between items-center mt-2">
        <div>
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="text-gray-800">Price : ${price}</p>
        </div>
        <div className="flex gap-5 justify-center items-center">
          {icon1}
          {icon2}
        </div>
      </div>
    </div>
  );
};

export default ImageCard;
