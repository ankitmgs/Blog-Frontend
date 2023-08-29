import axios from "axios";
import React, { useState } from "react";
import app_config from "../config";
import { useParams } from "react-router-dom";

const CommentBox = () => {
  const [userid, setUserid] = useState(
    JSON.parse(localStorage.getItem("user"))
  );

  const { id } = useParams();
  const BlogId = id;

  console.log("blogid", BlogId);

  console.log("useris", userid._id);
  const Base_url = app_config.app_url;

  const commentData = {
    text: "",
    author: userid._id,
  };

  const commentSubmit = (values) => {
    axios.post(Base_url + `/post/comment/${BlogId}`);
  };
  return (
    <div className="bg-gray-100 p-4 rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Leave a Comment</h2>
      <form className="bg-white p-4 rounded-lg shadow mt-4">
        <div className="mb-4">
          <label htmlFor="message" className="block text-lg  mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            className="border py-2 px-4 w-full h-32"
            placeholder="Enter your message"
          ></textarea>
        </div>
        <div className="flex items-center justify-center ">
          <button
            type="submit"
            className="bg-blue-950 hover:bg-blue-800 text-white py-2 px-12 rounded-lg"
          >
            Submit
          </button>
        </div>
      </form>

      {/* Add comment form here */}
    </div>
  );
};

export default CommentBox;
