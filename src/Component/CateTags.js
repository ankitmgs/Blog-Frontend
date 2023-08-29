import React from "react";
import { BiChevronRight } from "react-icons/bi";
import { Link } from "react-router-dom";

const CateTags = () => {
  return (
    <div>
      <div className="">
        <h3 className="text-black font-semibold underline">Categories</h3>

        <ul className="mt-4 ">
          <li className="flex items-center mb-3">
            <BiChevronRight className="mr-1" />
            <Link to="" className="inline-block text-sm">
              Programming
            </Link>
          </li>
          <hr />
          <li className="flex items-center mb-3">
            <BiChevronRight className="mr-1" />
            <Link to="" className="inline-block text-sm">
              Web Development
            </Link>
          </li>
          <hr />
          <li className="flex items-center mb-3">
            <BiChevronRight className="mr-1" />
            <Link to="" className="inline-block text-sm">
              Mobile Development
            </Link>
          </li>
          <hr />
          <li className="flex items-center mb-3">
            <BiChevronRight className="mr-1" />
            <Link to="" className="inline-block text-sm">
              UI/UX Design
            </Link>
          </li>
          <hr />
          <li className="flex items-center mb-3">
            <BiChevronRight className="mr-1" />
            <Link to="" className="inline-block text-sm">
              Cloud Computing
            </Link>
          </li>
          <hr />
          <li className="flex items-center mb-3">
            <BiChevronRight className="mr-1" />
            <Link to="" className="inline-block text-sm">
              Frontend Development
            </Link>
          </li>
          <hr />
          <li className="flex items-center mb-3">
            <BiChevronRight className="mr-1" />
            <Link to="" className="inline-block text-sm">
              Backend Development
            </Link>
          </li>
          <hr />
          <li className="flex items-center mb-3">
            <BiChevronRight className="mr-1" />
            <Link to="" className="inline-block text-sm">
            Full Stack Development
            </Link>
          </li>
          <hr />
        </ul>
      </div>

      <hr />

      <div className="mt-5">
        <h3 className="text-black font-semibold underline">Tags</h3>
        <ul className=" flex flex-wrap gap-2 mt-4">
          <li>
            <a href="category.html" className="btn border">
              Programming
            </a>
          </li>
          <li>
            <a href="category.html" className="btn   border ">
            Web Development
            </a>
          </li>
          <li>
            <a href="category.html" className="btn  border">
            Frontend Development
            </a>
          </li>
          <li>
            <a href="category.html" className="btn  border">
            Backend Development
            </a>
          </li>
          <li>
            <a href="category.html" className="btn border">
            Full Stack Development
            </a>
          </li>
          <li>
            <a href="category.html" className="btn border">
              Javascript
            </a>
          </li>
          <li>
            <a href="category.html" className="btn border">
            Python
            </a>
          </li>
          <li>
            <a href="category.html" className="btn  border">
             
            Database Development
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CateTags;
