import { useState } from "react";
import { Link } from "react-router-dom";
import classnames from "classnames";

import { CATEGORIES } from "../components/constants/categories";
import newsIcon from "../assets/news-icon.svg";

const Navbar = () => {
  const [selected, setSelected] = useState("");

  return (
    <nav className="bg-indigo-500 p-4 text-white">
      <div className="flex items-center">
        <img className="w-8 h-8 mr-2" src={newsIcon} alt="navbar icon" />
        <h1 className="text-2xl font-bold">NEWS</h1>
      </div>

      <div className="mt-4">
        {CATEGORIES.map((category, index) => (
          <Link
            key={index}
            onClick={() => setSelected(category.name)}
            to={`/${category.slug}`}
            className={classnames(
              "px-2 py-1 text-xs lg:text-base rounded hover:bg-blue-700",
              {
                "bg-blue-700": selected === category.name,
              }
            )}
          >
            {category.name}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
