// import React from "react";
import CommentBox from "./CommentBox";

const Comment = (props) => {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const formattedDate = date.toLocaleDateString("en-US", {
      day: "numeric",
      month: "long",
    });
    return formattedDate;
  };

  console.log("success", props);
  return (
    <>
      <div>
        <div className="p-4 border border-blue-600 mb-9 mt-6">
          <h2 className="text-xl font-semibold mb-4">Comments</h2>
          {props?.blogData?.comments?.map((comment, index) => (
            <div className="flex bg-white rounded-lg p-4 shadow mb-9 border ">
              <div className="mr-4">
                <img
                  src="https://cdn.pixabay.com/photo/2016/04/26/07/57/woman-1353825_640.png"
                  alt="Profile"
                  className="w-12 h-12 rounded-full"
                />
              </div>
              <div>
                <div key={index} className="flex items-center mb-2">
                  <h4 className="text-lg font-semibold">
                    {comment?.author?.name ? comment?.author?.name : "User"}
                  </h4>
                  <p className="text-gray-800">{comment?.text}</p>
                  <span className="text-gray-600 text-sm ml-2">
                    {comment?.createdAt
                      ? formatDate(comment?.createdAt)
                      : "date"}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <CommentBox />
    </>
  );
};

export default Comment;
