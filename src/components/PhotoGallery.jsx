import { FaShoppingCart } from "react-icons/fa";
import { IoIosHeart } from "react-icons/io";
import ImageCard from "./ImageCard";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { setAllPosts } from "../../store/slices/postSlice";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const PhotoGallery = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const posts = useSelector((state) => state.posts.allPosts);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const [loading, setLoading] = useState(false);

  const getAllImages = async () => {
    if (posts.length > 0) return;
    setLoading(true);
    try {
      const res = await axios.get(import.meta.env.VITE_API_URL + "/post/getAll");
      const { data } = await res.data;
      console.log(data);
      dispatch(setAllPosts(data));
    } catch (error) {
      toast.error("Failed to load images. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllImages();
  }, []);

  return (
    <div className="my-20 bg-white flex flex-col justify-center items-center">
      <h3 className="text-3xl font-semibold my-10">Photos</h3>
      {!isAuthenticated && !loading && (
        <div className="text-center text-lg font-medium text-gray-700 mb-6">
          To access the full features, including buying and selling photos, please log in or sign up.
        </div>
      )}
      {loading ? (
        <div className="text-center text-lg font-medium text-gray-600">
          Loading photos, please wait...
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 bg-20">
          {posts?.map(({ _id, title, image, price, author }) => (
            <ImageCard
              key={_id}
              id={_id}
              title={title}
              author={author}
              img={image}
              price={price}
              icon1={
                <FaShoppingCart
                  title="Cart"
                  onClick={() => purchaseImage(price, _id, image, author, title)}
                  className="text-3xl mr-3 text-black cursor-pointer hover:scale-110 transition-all ease-linear duration-300"
                />
              }
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default PhotoGallery;
