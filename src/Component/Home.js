import axios from "axios";
import React, { useState } from "react";

import app_config from "../config";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const url = app_config.app_url;

const Home = () => {
  const [category, setCategory] = useState([]);

  const getCategoryData = () => {
    axios
      .get(url + "/post/category/News")
      .then((response) => {
        console.log("Response jbhjb:", response?.data?.posts);
        // Update the category state with the received data if necessary
        setCategory(response.data);
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  };

  useEffect(() => {
    getCategoryData();
  }, []); // Empty dependency array ensures the effect runs only once

  console.log("first", category?.posts);
  return (
    <>
      <main>
        {/*====== Hero section======= */}
        <div className="flex flex-col justify-center items-center h-screen bg-gray-100">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-4">Welcome to our Website</h1>
            <p className="text-xl text-blue-950 mb-8">
              Discover amazing things with us.
            </p>
            <Link to="/Signup">
              <button className="px-10 py-2 rounded-lg bg-blue-950 text-white hover:bg-blue-800">
                Get Started
              </button>
            </Link>
          </div>
        </div>
        {/* <div className="h-[600px] mt-0 bg-gray-400  flex items-center justify-center ">
          <h5>A personal BLog</h5>
          <p>I am a Blogger & Photographer Based in Philippines</p>
        </div> */}

        {/* ======= Culture Category Section ======= */}
        <section className="category-section mt-5 mt-3">
          <div className="container">
            <div className="flex justify-between">
              <h2 className="text-black-500 text-5xl">News</h2>
              <div className="underline">
                <Link to="/allblogpost/News">See All News</Link>
              </div>
            </div>
            <hr className="bg-black py-[1px] mb-5" />
            <div className="row">
              {/* left part */}
              <div className="col-md-9">
                {/* left innner content */}
                <div className="row">
                  <div className="col-md-6">
                    <img
                      src="assets/img/post-landscape-6.jpg"
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                  <div className="col-md-6">
                    <div className="">
                      <span className=" text-sm text-gray-600">Culture</span>
                      <span>•</span>{" "}
                      <span className="text-sm text-gray-600">Jul 5th '22</span>
                      <h3 className="text-xl font-bold mt-4">
                        <Link href="/singlepost">
                          What is the son of Football Coach John Gruden, Deuce
                          Gruden doing Now?
                        </Link>
                      </h3>
                      <p className="mt-3">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Distinctio placeat exercitationem magni voluptates
                        dolore. Tenetur fugiat voluptates quas, nobis error
                        deserunt aliquam temporibus sapiente, laudantium dolorum
                        itaque libero eos deleniti?
                      </p>
                    </div>
                    <div className="mt-2 flex justify-start ">
                      <div className="photo">
                        <img
                          src="assets/img/person-2.jpg"
                          alt=""
                          className="img-fluid h-9 rounded-full"
                        />
                      </div>
                      <div className="mt-2 ml-3">
                        <h3 className="m-0 p-0">Wade Warren</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* right content */}
              <div className="col-md-3">
                <div className="post-entry-1 border-bottom">
                  <div className="post-meta">
                    <span className="date">Culture</span>
                    <span className="mx-1">•</span> <span>Jul 5th '22</span>
                  </div>
                  <h2 className="mb-2 text-black text-lg font-medium">
                    <Link href="/singlepost">
                      How to Avoid Distraction and Stay Focused During Video
                      Calls?
                    </Link>
                  </h2>
                  <span className="author mb-3 d-block">Jenny Wilson</span>
                </div>
                <hr className="bg-black  mb-5" />
                <div className="post-entry-1 border-bottom">
                  <div className="post-meta">
                    <span className="date">Culture</span>
                    <span className="mx-1">•</span> <span>Jul 5th '22</span>
                  </div>
                  <h2 className="mb-2 text-black text-lg font-medium">
                    <Link href="/singlepost">
                      How to Avoid Distraction and Stay Focused During Video
                      Calls?
                    </Link>
                  </h2>
                  <span className="author mb-3 d-block">Jenny Wilson</span>
                </div>
                <hr className="bg-black  mb-5" />
              </div>
            </div>
          </div>
        </section>
        {/* End Culture Category Section */}

        {/* ======= Culture Category Section ======= */}
        <section className="category-section mt-5">
          <div className="container">
            <div className="flex justify-between">
              <h2 className="text-black-500 text-5xl">Programming</h2>
              <div>
                <Link to="/allblogpost/Programming">See All Programming</Link>
              </div>
            </div>
            <hr className="bg-black py-[1px] mb-5" />
            <div className="row">
              {/* left part */}
              <div className="col-md-9">
                {/* left innner content */}
                <div className="row">
                  <div className="col-md-6">
                    <img
                      src="assets/img/post-landscape-6.jpg"
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                  <div className="col-md-6">
                    <div className="">
                      <span className=" text-sm text-gray-600">Culture</span>
                      <span>•</span>{" "}
                      <span className="text-sm text-gray-600">Jul 5th '22</span>
                      <h3 className="text-xl font-bold mt-4">
                        <Link href="/singlepost">
                          What is the son of Football Coach John Gruden, Deuce
                          Gruden doing Now?
                        </Link>
                      </h3>
                      <p className="mt-3">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Distinctio placeat exercitationem magni voluptates
                        dolore. Tenetur fugiat voluptates quas, nobis error
                        deserunt aliquam temporibus sapiente, laudantium dolorum
                        itaque libero eos deleniti?
                      </p>
                    </div>
                    <div className="mt-2 flex justify-start ">
                      <div className="photo">
                        <img
                          src="assets/img/person-2.jpg"
                          alt=""
                          className="img-fluid h-9 rounded-full"
                        />
                      </div>
                      <div className="mt-2 ml-3">
                        <h3 className="m-0 p-0">Wade Warren</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* right content */}
              <div className="col-md-3">
                <div className="post-entry-1 border-bottom">
                  <div className="post-meta">
                    <span className="date">Culture</span>
                    <span className="mx-1">•</span> <span>Jul 5th '22</span>
                  </div>
                  <h2 className="mb-2 text-black text-lg font-medium">
                    <Link href="/singlepost">
                      How to Avoid Distraction and Stay Focused During Video
                      Calls?
                    </Link>
                  </h2>
                  <span className="author mb-3 d-block">Jenny Wilson</span>
                </div>
                <hr className="bg-black  mb-5" />
              </div>
            </div>
          </div>
        </section>
        <section className="category-section mt-5">
          <div className="container">
            <div className="flex justify-between">
              <h2 className="text-black-500 text-5xl">Technical</h2>
              <div>
                <Link to="/allblogpost/Technical">See All Technical</Link>
              </div>
            </div>
            <hr className="bg-black py-[1px] mb-5" />
            <div className="row">
              {/* left part */}
              <div className="col-md-9">
                {/* left innner content */}
                <div className="row">
                  <div className="col-md-6">
                    <img
                      src="assets/img/post-landscape-6.jpg"
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                  <div className="col-md-6">
                    <div className="">
                      <span className=" text-sm text-gray-600">Culture</span>
                      <span>•</span>{" "}
                      <span className="text-sm text-gray-600">Jul 5th '22</span>
                      <h3 className="text-xl font-bold mt-4">
                        <Link href="/singlepost">
                          What is the son of Football Coach John Gruden, Deuce
                          Gruden doing Now?
                        </Link>
                      </h3>
                      <p className="mt-3">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Distinctio placeat exercitationem magni voluptates
                        dolore. Tenetur fugiat voluptates quas, nobis error
                        deserunt aliquam temporibus sapiente, laudantium dolorum
                        itaque libero eos deleniti?
                      </p>
                    </div>
                    <div className="mt-2 flex justify-start ">
                      <div className="photo">
                        <img
                          src="assets/img/person-2.jpg"
                          alt=""
                          className="img-fluid h-9 rounded-full"
                        />
                      </div>
                      <div className="mt-2 ml-3">
                        <h3 className="m-0 p-0">Wade Warren</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* right content */}
              <div className="col-md-3">
                <div className="post-entry-1 border-bottom">
                  <div className="post-meta">
                    <span className="date">Culture</span>
                    <span className="mx-1">•</span> <span>Jul 5th '22</span>
                  </div>
                  <h2 className="mb-2 text-black text-lg font-medium">
                    <Link href="/singlepost">
                      How to Avoid Distraction and Stay Focused During Video
                      Calls?
                    </Link>
                  </h2>
                  <span className="author mb-3 d-block">Jenny Wilson</span>
                </div>
                <hr className="bg-black  mb-5" />
              </div>
            </div>
          </div>
        </section>
        <section className="category-section mt-5">
          <div className="container">
            <div className="flex justify-between">
              <h2 className="text-black-500 text-5xl">Javascript</h2>
              <div>
                <Link to="/allblogpost/Javascript">See All Javascript</Link>
              </div>
            </div>
            <hr className="bg-black py-[1px] mb-5" />
            <div className="row">
              {/* left part */}
              <div className="col-md-9">
                {/* left innner content */}
                <div className="row">
                  <div className="col-md-6">
                    <img
                      src="assets/img/post-landscape-6.jpg"
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                  <div className="col-md-6">
                    <div className="">
                      <span className=" text-sm text-gray-600">Culture</span>
                      <span>•</span>{" "}
                      <span className="text-sm text-gray-600">Jul 5th '22</span>
                      <h3 className="text-xl font-bold mt-4">
                        <Link href="/singlepost">
                          What is the son of Football Coach John Gruden, Deuce
                          Gruden doing Now?
                        </Link>
                      </h3>
                      <p className="mt-3">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Distinctio placeat exercitationem magni voluptates
                        dolore. Tenetur fugiat voluptates quas, nobis error
                        deserunt aliquam temporibus sapiente, laudantium dolorum
                        itaque libero eos deleniti?
                      </p>
                    </div>
                    <div className="mt-2 flex justify-start ">
                      <div className="photo">
                        <img
                          src="assets/img/person-2.jpg"
                          alt=""
                          className="img-fluid h-9 rounded-full"
                        />
                      </div>
                      <div className="mt-2 ml-3">
                        <h3 className="m-0 p-0">Wade Warren</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* right content */}
              <div className="col-md-3">
                <div className="post-entry-1 border-bottom">
                  <div className="post-meta">
                    <span className="date">Culture</span>
                    <span className="mx-1">•</span> <span>Jul 5th '22</span>
                  </div>
                  <h2 className="mb-2 text-black text-lg font-medium">
                    <Link href="/singlepost">
                      How to Avoid Distraction and Stay Focused During Video
                      Calls?
                    </Link>
                  </h2>
                  <span className="author mb-3 d-block">Jenny Wilson</span>
                </div>
                <hr className="bg-black  mb-5" />
              </div>
            </div>
          </div>
        </section>
        <section className="category-section mt-5">
          <div className="container">
            <div className="flex justify-between">
              <h2 className="text-black-500 text-5xl">React JS</h2>
              <div>
                <Link to="/allblogpost/ReactJS">See All ReactJS</Link>
              </div>
            </div>
            <hr className="bg-black py-[1px] mb-5" />
            <div className="row">
              {/* left part */}
              <div className="col-md-9">
                {/* left innner content */}
                <div className="row">
                  <div className="col-md-6">
                    <img
                      src="assets/img/post-landscape-6.jpg"
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                  <div className="col-md-6">
                    <div className="">
                      <span className=" text-sm text-gray-600">Culture</span>
                      <span>•</span>{" "}
                      <span className="text-sm text-gray-600">Jul 5th '22</span>
                      <h3 className="text-xl font-bold mt-4">
                        <Link href="/singlepost">
                          What is the son of Football Coach John Gruden, Deuce
                          Gruden doing Now?
                        </Link>
                      </h3>
                      <p className="mt-3">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Distinctio placeat exercitationem magni voluptates
                        dolore. Tenetur fugiat voluptates quas, nobis error
                        deserunt aliquam temporibus sapiente, laudantium dolorum
                        itaque libero eos deleniti?
                      </p>
                    </div>
                    <div className="mt-2 flex justify-start ">
                      <div className="photo">
                        <img
                          src="assets/img/person-2.jpg"
                          alt=""
                          className="img-fluid h-9 rounded-full"
                        />
                      </div>
                      <div className="mt-2 ml-3">
                        <h3 className="m-0 p-0">Wade Warren</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* right content */}
              <div className="col-md-3">
                <div className="post-entry-1 border-bottom">
                  <div className="post-meta">
                    <span className="date">Culture</span>
                    <span className="mx-1">•</span> <span>Jul 5th '22</span>
                  </div>
                  <h2 className="mb-2 text-black text-lg font-medium">
                    <Link href="/singlepost">
                      How to Avoid Distraction and Stay Focused During Video
                      Calls?
                    </Link>
                  </h2>
                  <span className="author mb-3 d-block">Jenny Wilson</span>
                </div>
                <hr className="bg-black  mb-5" />
              </div>
            </div>
          </div>
        </section>
        {/* End Culture Category Section */}
      </main>
    </>
  );
};

export default Home;
