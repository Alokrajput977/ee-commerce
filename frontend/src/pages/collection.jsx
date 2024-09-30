
import React, { useEffect, useState } from "react";
import { assets } from "../assets/frontend_assets/assets";
import { useContext } from "react";
import { ShopContext } from "../context/shopContext";
import Title from "../components/title";
import Productitems from "../components/productitems";

const Collection = () => {
  const { products, search, showsearch, } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(true);
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subcategory, setSubcategory] = useState([]);
  const [sortType, setshowType] = useState('relavent')
  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setCategory((prev) => [...prev, e.target.value]);
    }
  };

  const toggleSubcategory = (e) => {
    if (subcategory.includes(e.target.value)) {
      setSubcategory(prev => prev.filter(item => item !== e.target.value));
    } else {
      setSubcategory(prev => [...prev, e.target.value]);
    }
    console.log("Selected Subcategories:", subcategory); // Debugging line
  };

  const applyFilter = () => {
    let productsCopy = products.slice();

    if (showsearch && search) {
      productsCopy = productsCopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))

    }

    // Filter by Category
    if (category.length > 0) {
      productsCopy = productsCopy.filter(item =>
        category.includes(item.category)
      );
    }

    // Filter by Subcategory
    if (subcategory.length > 0) {
      productsCopy = productsCopy.filter(item =>
        subcategory.includes(item.subcategory)
      );

      console.log(products);

    }

    console.log("Filtered Products:", productsCopy); // Debugging line
    setFilterProducts(productsCopy);
  };


  const shotproduct = () => {
    let fdcopy = filterProducts.slice();

    switch (sortType) {
      case 'low-high':
        setFilterProducts(fdcopy.sort((a, b) => (a.price - b.price)));
        break;

      case 'high-low':
        setFilterProducts(fdcopy.sort((a, b) => (b.price - a.price)));
        break;

      default:
        applyFilter();
        break
    }
  }

  useEffect(() => {
    applyFilter();
  }, [category, subcategory, products, search, showsearch]);

  // Set the filterProducts initially
  useEffect(() => {
    setFilterProducts(products);
  }, [products]);


  useEffect(() => {
    shotproduct();
  }, [sortType])



  return (
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t">
      {/* filter option */}
      <div className="min-w-60 ">
        <p
          onClick={() => setShowFilter(!showFilter)}
          className="my-2 text-xl flex items-center cursor-pointer gap-2"
        >
          FILTERS
          <img
            src={assets.dropdown_icon}
            className={`h-3 sm:hidden ${showFilter ? " rotate-90" : ""}`}
            alt=""
          />
        </p>

        {/* Category filter */}
        <div
          className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? "" : "hidden"
            } sm:block`}
        >
          <p className="mb-3 text-sm font-medium">CATEGORIES</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input
                className="w-3 "
                type="checkbox"
                value={"Men"}
                onChange={toggleCategory}
              />
              Men
            </p>

            <p className="flex gap-2">
              <input
                className="w-3 "
                type="checkbox"
                value={"Women"}
                onChange={toggleCategory}
              />
              Women
            </p>

            <p className="flex gap-2">
              <input
                className="w-3 "
                type="checkbox"
                value={"Kids"}
                onChange={toggleCategory}
              />
              Kids
            </p>
          </div>
        </div>

        {/* Subcategory Filter */}
        <div
          className={`border border-gray-300 pl-5 py-5 mt-6 ${showFilter ? "" : "hidden"
            } sm:block`}
        >
          <p className="mb-3 text-sm font-medium">TYPE</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input
                className="w-3 "
                type="checkbox"
                value={"Topwear"}
                onChange={toggleSubcategory}
              />
              Topwear
            </p>

            <p className="flex gap-2">
              <input
                className="w-3 "
                type="checkbox"
                value={"Bottomwear"}
                onChange={toggleSubcategory}
              />
              Bottomwear
            </p>

            <p className="flex gap-2">
              <input
                className="w-3 "
                type="checkbox"
                value={"Winterwear"}
                onChange={toggleSubcategory}
              />
              Winterwear
            </p>
          </div>
        </div>
      </div>

      {/* Right side */}
      <div className="flex-1">
        <div className="flex justify-between text-base sm:text-2xl mb-4">
          <Title text1={"ALL"} text2={"COLLECTIONS"} />
          {/* Product sort */}
          <select onChange={(e) => setshowType(e.target.value)} className="border-2 border-gray-300 text-sm px-2">
            <option value="relavent">Sort by: relavent</option>
            <option value="low-high">Sort by: low to high </option>
            <option value="high-low">Sort by: high to low</option>
          </select>
        </div>

        {/* Map filtered products */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6 ">
          {filterProducts.length > 0 ? (
            filterProducts.map((item, index) => (
              <Productitems
                key={index}
                name={item.name}
                id={item._id}
                price={item.price}
                image={item.image}
              />
            ))
          ) : (
            <p>No products found for the selected filters.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Collection;
