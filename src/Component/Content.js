import React from "react";
import { Card } from "react-bootstrap";

const Content = (props) => {
  // console.log(props);

  return (
    <React.Fragment>
      <div  className="border p-5 rounded-lg">
        <div >
          <span className="text-xs text-gray-600">Demo category</span>{" "}
          <span className="text-xs text-gray-600">•</span>{" "}
          <span className="text-xs text-gray-600">13july</span>
        </div>
        <div className="text-4xl font-semibold mt-2 ">
          <h1>{props?.blogData?.title} </h1>
        </div>
        <div>
          <img
             className="w-full mt-10"
            src={props.blogData.file}
          />
        </div>
        <div className="content" style={{ padding: "1rem" }}>
          <div className="para">
            <p>
              <div
                dangerouslySetInnerHTML={{
                  __html: props?.blogData?.content,
                }}
              ></div>
            </p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Content;
