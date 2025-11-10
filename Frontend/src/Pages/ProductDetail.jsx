import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IoStar } from "react-icons/io5";
import { ShopDataContext } from "../context/ShopContext";
import { IoStarHalfOutline } from "react-icons/io5";
import RelatedProducts from "../Components/RelatedProducts";

const ProductDetail = () => {
  let { productId } = useParams();
  let { products, currency, addToCart } = useContext(ShopDataContext);
  let [productData, setProductData] = useState(false);
  // console.log("productData", productData);
  const [image, setimage] = useState("");
  const [image1, setimage1] = useState("");
  const [image2, setimage2] = useState("");
  const [image3, setimage3] = useState("");
  const [image4, setimage4] = useState("");
  const [size, setSize] = useState("");

  const fetchProductData = async () => {
    products.map((item) => {
      if (item._id === productId) {
        setProductData(item);
        // console.log(productData);
        setimage1(item.image1);
        setimage2(item.image2);
        setimage3(item.image3);
        setimage4(item.image4);
        setimage(item.image1);
        return null;
      }
    });
  };
  useEffect(() => {
    fetchProductData();
  }, [productId, products]);
  return productData ? (
    <div>
      <div className="w-[99vw] h-[130vh] md:h-[100vh] bg-gradient-to-l from-[#141414] to-[#0c2025] flex items-center flex-col  justify-start lg:flex-row gap-[20px]">
        <div className="lg:w-[50vw] md:w-[90vw] lg:h-[90vh] h-[50vh] mt-[70px] flex items-center justify-center md:gap-[10px] gap-[30px] flex-col-reverse lg:flex-row">
          <div className="lg:w-[20%] md:w-[80%] h-[20%] lg:h-[80%] items-center justify-center gap-[50px] lg:gap-[20px] flex lg:flex-col flex-wrap">
            <div className="md:w-[100px] w-[50px] h-[50px] md:h-[110px] bg-slate-300 border-[1px] border-[#80808049] rounded-md ">
              <img
                src={image1}
                alt=""
                className="w-[100%] h-[100%] cursor-pointer rounded-md"
                onClick={() => setimage(image1)}
              />
            </div>
            <div className="md:w-[100px] w-[50px] h-[50px] md:h-[110px] bg-slate-300 border-[1px] border-[#80808049] rounded-md">
              <img
                src={image2}
                alt=""
                className="w-[100%] h-[100%] cursor-pointer rounded-md"
                onClick={() => setimage(image2)}
              />
            </div>
            <div className="md:w-[100px] w-[50px] h-[50px] md:h-[110px] bg-slate-300 border-[1px] border-[#80808049] rounded-md">
              <img
                src={image3}
                alt=""
                className="w-[100%] h-[100%] cursor-pointer rounded-md"
                onClick={() => setimage(image3)}
              />
            </div>
            <div className="md:w-[100px] w-[50px] h-[50px] md:h-[110px] bg-slate-300 border-[1px] border-[#80808049] rounded-md">
              <img
                src={image4}
                alt=""
                className="w-[100%] h-[100%] cursor-pointer rounded-md"
                onClick={() => setimage(image4)}
              />
            </div>
          </div>
          <div className="lg:w-[60%] w-[80%] lg:h-[78%] h-[70%] border-1px border-[#80808049] rounded-md overflow-hidden">
            <img
              src={image}
              alt=""
              className="w-[100%] lg:h-[100%] h-[100%] text-[30px] text-white text-center rounded-md object-fill"
            />
          </div>
        </div>
        <div className="lg:w-[50vw] w-[100vw] lg:h-[75vh] h-[40vh] lg:mt-[80px] flex items-start justify-start flex-col py-[20px] px-[30px] md:pb-[20px] md:pl-[20px] md:lg-[0px] lg:px-[0px] lg:py-[0px] gap-[10px] ">
          <h1 className="text-[40px] font-semibold text-[aliceblue]">
            {productData.name.toUpperCase()}
          </h1>
          <div className="flex items-center gap-1">
            <IoStar className="text-[20px] fill-[#ffd700]" />
            <IoStar className="text-[20px] fill-[#ffd700]" />
            <IoStar className="text-[20px] fill-[#ffd700]" />
            <IoStar className="text-[20px] fill-[#ffd700]" />
            <IoStarHalfOutline className="text-[20px] text-[#ffd700] fill-[#ffd700]" />
            <p className="text-[18px] font-semibold pl-[5px] text-white">
              (655)
            </p>
          </div>
          <p className="text-[30px] font-semibold pl-[5px] text-white">
            {currency} {productData.price}
          </p>
          <p className="w-[80%] md:w-[60%] text-[20px] font-semibold pl-[5px] text-[white] ">
            {productData.description} Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Libero reiciendis quae at,
          </p>
          <div className=" flex flex-col gap-[10px] my-[10px]">
            <p className="text-[25px] font-semibold pl-[5px] text-white">
              Select Size
            </p>
            <div className="flex gap-2">
              {productData.size.map((item, index) => (
                <button
                  key={index}
                  className={`border py-2 px-4 bg-slate-300 rounded-md ${
                    item === size ? "bg-black text-[#93fcfc] text-[20px]" : ""
                  }`}
                  onClick={() => setSize(item)}
                >
                  {item}
                </button>
              ))}
            </div>
            <button
              className="text-[16px] active:bg-slate-500 cursor-pointer bg-[#495b61c9] py-[10px] px-[20px] rounded-2xl  mt-[10px] border-[1px] border-[#80808049] text-white shadow-md shadow-black"
              onClick={() => addToCart(productData._id, size)}
            >
              "Add to Cart"
            </button>
          </div>
          <div className="w-[90%] h-[1px] bg-slate-700"></div>
          <div className="w-[80%] text-[16px] text-white">
            <p> 100% original product </p>
            <p> Cash on Delivery available on this product </p>
            <p> Easy return and exchange policy within 7 days </p>
          </div>
        </div>
      </div>
      <div className="w-[100%] min-h-[70vh] bg-gradient-to-l from-[#141414] to-[#0c2025] flex items-start justify-start flex-col overflow-x-hidden">
        <div className="flex px-[20px] mt-[200px] lg:ml-[80px] ml-[0px] lg:mt-[0px]">
          <p className="border px-5 py-3 text-sm text-white">Description</p>
          <p className="border px-5 py-3 text-sm text-white">Review (124)</p>
        </div>
        <div className="w-[80%] md:h-[150px] h-[220px] bg-[#3336397c] border text-white text-[13px] md:text-[15px] lg:text-[20px] px-[10px] md:px-[30px] lg:ml-[100px] ml-[20px]">
          <p className="w-[95%] h-[90%] flex items-center justify-center ">
            Upgrade your wardrobe with this slim fit Cotton Shirt available on
            now OneCart. Crafted from high-quality cotton fabric, this shirt
            offers superior comfort and breathability, making it perfect for
            all-day wear. The slim fit design ensures a modern and stylish look,
            while the versatile color options allow for easy pairing with
            various outfits. Whether you're dressing up for a formal event or
            going for a casual look,
          </p>
        </div>
        <RelatedProducts
          category={productData.category}
          subCategory={productData.subcategory}
          currentProductId={productData._id}
        />
      </div>
    </div>
  ) : (
    <div className="opacity-0"></div>
  );
};

export default ProductDetail;
