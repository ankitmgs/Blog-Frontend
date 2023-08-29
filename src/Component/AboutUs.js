import React from "react";

const AboutUs = () => {
  return (
    <>
      <div className="container mx-auto card mt-5 mb-5">
        <h1 className="text-3xl font-bold mb-4 text-center">About MyBlog</h1>
        <p className="text-lg mb-4">
          MyBlog is a simple blog application where users can create and share
          their thoughts.
        </p>
        <p className="text-lg mb-4">Technologies Used:</p>
        <ul className="list-disc ml-6 mb-6">
          <li>React - version 18.0.0</li>
          <li>Moment - version 2.29.3</li>
          <li>Redux - version 4.1.2</li>
          <li>TypeScript - version 4.6.3</li>
          <li>Axios - version 0.26.1</li>
          <li>SCSS - version 0.2.4</li>
          <li>Nest - version 8.0.0</li>
          <li>JWT - version 8.5.1</li>
          <li>PostgreSQL(pg) - version 8.7.3</li>
          <li>class-validator - version 0.13.2</li>
          <li>TypeORM - version 0.2.45</li>
        </ul>
        <p className="text-lg mb-4">Features:</p>
        <ul className="list-disc ml-6 mb-6">
          <li>Viewing posts</li>
          <li>Viewing single post</li>
          <li>Creating posts</li>
          <li>Ordering posts by time, likes, or comments</li>
          <li>Writing comments</li>
          <li>Authorization & authentication system</li>
          <li>Editing user info</li>
          <li>Viewing own posts</li>
        </ul>
      </div>
    </>
  );
};

export default AboutUs;
