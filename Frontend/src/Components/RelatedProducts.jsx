import React, { useContext, useEffect, useState } from "react";
import { ShopDataContext } from "../context/ShopContext";
import Title from "./Title";
import Card from "./Card";

const RelatedProducts = ({
  category,
  subcategory: subCategory,
  currentProductId,
}) => {
  console.log(
    "Related Products props:",
    category,
    subCategory,
    currentProductId
  );
  let { products } = useContext(ShopDataContext);
  let [related, setRelated] = useState([]);
  useEffect(() => {
    if (products.length > 0) {
      let copyProduct = products.slice();
      copyProduct = copyProduct.filter((item) => category === item.category);
      copyProduct = copyProduct.filter(
        (item) => subCategory === item.subCategory
      );
      copyProduct = copyProduct.filter((item) => item._id !== currentProductId);
      setRelated(copyProduct.slice(0, 4));
    }
  }, [products, category, subCategory, currentProductId]);
  return (
    <div className="my-[130px] md:my-[40px] md:px-[60px]">
      <div className="ml-[20px] lg:ml-[80px]">
        <Title text1={"RELATED"} text2={"PRODUCTS"} />
      </div>
      <div className="w-[100%] mt-[30px] flex items-center justify-center flex-wrap gap-[50px]">
        {related.map((item, i) => {
          return (
            <Card
              key={i}
              id={item._id}
              name={item.name}
              price={item.price}
              image={item.image1}
            />
          );
        })}
      </div>
    </div>
  );
};

export default RelatedProducts;
