import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import app_config from "../config";
import { useState } from "react";
import CateTags from "../Component/CateTags";
const AllBlogPost = () => {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const formattedDate = date.toLocaleDateString("en-US", {
      day: "numeric",
      month: "long",
    });
    return formattedDate;
  };
  const url = app_config.app_url;

  const [data, setData] = useState([]);

  const { category } = useParams();
  console.log("category", category);

  const getData = () => {
    axios
      .get(url + `/post/category/${category}`)
      .then((response) => {
        console.log("res", response);
        setData(response?.data?.posts);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  console.log("data", data[0]?.file);

  function truncateContent(content, wordLimit) {
    const words = content.split(" "); // Split the content into an array of words
    const truncatedWords = words.slice(0, wordLimit); // Select the first 'wordLimit' words
    const truncatedContent = truncatedWords.join(" "); // Join the words back into a string
    return truncatedContent;
  }

  return (
    <React.Fragment>
      {/* Start main */}
      <main id="main">
        <section>
          <div className="container mt-10">
            <div className="row">
              <div className="col-md-9 ">
                <h3 className="text-gray-600 font-bold text-sm mb-6">
                  Category: {category}
                </h3>
                {data.length > 0
                  ? data.map((item, index) => {
                      return (
                        // left side--blog card
                        <div className="row mt-4 border border-gray-800 p-2 rounded-lg ">
                          <div key={index} className="col-md-6 ">
                            <Link to={`/singlePost/${item._id}`} className="">
                              <img
                                src={item?.file}
                                alt=""
                                className="img-fluid"
                              />
                            </Link>
                          </div>
                          <div className="col-md-6">
                            <div>
                              <span className="text-xs text-gray-600">
                                {category}
                              </span>{" "}
                              <span className="text-xs text-gray-600">•</span>{" "}
                              <span className="text-xs text-gray-600">
                                {formatDate(item?.createdAt)}
                              </span>
                            </div>
                            <h3 className="text-lg text-black font-medium">
                              <Link to={`/singlePost/${item._id}`}>
                                {item?.title}
                              </Link>
                            </h3>
                            <p className="flex w-full">
                              {/* <div
                                  dangerouslySetInnerHTML={{
                                    __html: item.content,
                                  }}
                                ></div> */}
                              <div
                                dangerouslySetInnerHTML={{
                                  __html: truncateContent(item.content, 100),
                                }}
                              ></div>
                            </p>
                            <div className="">
                              <div className="photo">
                                <img
                                  src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"
                                  alt=""
                                  className="img-fluid h-9 rounded-full"
                                />
                              </div>
                              <div className="text-black text-sm">
                                <h3 className="m-0 p-0">
                                  {item?.author?.name}
                                </h3>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })
                  : `No Blog found for ${category}`}
              </div>

              {/* Categories and tags part */}
              <div className="col-md-3">
                <CateTags />
                {/* End Tags */}
              </div>
              {/* End of categories */}
            </div>
          </div>
        </section>
      </main>
      {/* End #main */}
    </React.Fragment>
  );
};

export default AllBlogPost;
