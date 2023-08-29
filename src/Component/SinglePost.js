import React, { useEffect, useState } from "react";
import Comment from "./Comment";
import Content from "./Content";
import { useParams } from "react-router-dom";
import app_config from "../config";
import axios from "axios";
import CateTags from "./CateTags";

const SinglePost = () => {
  const url = app_config.app_url;

  const { id } = useParams();
  console.log("nbhbgvc", id);

  const [blog, setBlog] = useState([]);
  const getData = () => {
    axios
      .get(url + `/post/posts/${id}`)
      .then((response) => {
        console.log(response);
        setBlog(response?.data?.post);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <React.Fragment>
      <main id="main">
        <section className="single-post-content">
          <div className="container">
            <div className="row mt-12">
              <div className="col-md-8 ">
                {/* ======= Single Post Content ======= */}
                <Content blogData={blog} />
              </div>
              {/* End Single Post Content */}
              <div className="col-md-4">
                <CateTags />
              </div>
            </div>
            <div className="row">
              <div className="col-md-8">
                <Comment  blogData={blog}/>
              </div>
            </div>
          </div>
        </section>
      </main>
    </React.Fragment>
  );
};

export default SinglePost;
