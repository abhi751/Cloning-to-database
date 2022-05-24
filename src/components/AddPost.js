import React, { useState } from "react";
import Header from "./Header";
import moment from "moment";
const AddPost = () => {
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isUploading, setIsUploading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setIsUploading(true);
      const PostImage = e.target.PostImage.value;
      const name = e.target.name.value;
      const location = e.target.location.value;
      const description = e.target.elements.description.value;
      const date = String(moment(new Date()).format("DD MMM YYYY"));
      const imgArr = PostImage.split(".");
      const imgExt = imgArr[imgArr.length - 1];

      const allowedExtensions = ["jpg", "jpeg", "png", "gif"];
      if (allowedExtensions.includes(imgExt.toLowerCase())) {
        const formData = new FormData();
        formData.append("name", name);
        formData.append("location", location);
        formData.append("description", description);
        const file = e.target.elements.PostImage.files[0];
        formData.append("PostImage", file);
        formData.append("date", date);

        const response = await fetch(process.env.REACT_APP_API + "/post/add", {
          method: "POST",
          headers: {},
          body: formData,
        });

        setIsUploading(false);

        const resp = await response.json();

        setIsSuccess(true);
        setTimeout(() => {
          setIsSuccess(false);
        }, 3000);

        e.target.reset();

        console.log(resp);
      } else {
        setIsUploading(false);
        setIsError(true);
        setTimeout(() => {
          setIsError(false);
        }, 3000);
        alert("Only jpg, jpeg, png, gif files are allowed");
      }
    } catch (err) {
      console.log(err);
      setIsUploading(false);
      setIsError(true);
      setTimeout(() => {
        setIsError(false);
      }, 3000);
    }
  };

  return (
    <>
      <Header />

      <div className="add-post">
        <div className="add-post-header">
          <h1 className="header-form ">UPLOAD POST</h1>

          <form
            action="https://instaclone--backend.herokuapp.com/api/post/add"
            method="POST"
            className="post-form"
            onSubmit={handleSubmit}
          >
            {isSuccess ? (
              <div
                style={{
                  position: "absolute",
                  color: "green",
                  fontSize: "20px",
                  top: "10%",
                }}
              >
                Post added successfully
              </div>
            ) : null}

            {isError ? (
              <div
                style={{
                  position: "absolute",
                  color: "red",
                  fontSize: "20px",
                  top: "10%",
                }}
              >
                Error adding post
              </div>
            ) : null}

            {isUploading ? (
              <div
                style={{
                  position: "absolute",
                  color: "blue",
                  fontSize: "20px",
                  top: "10%",
                }}
              >
                Uploading image...
              </div>
            ) : null}

            <div className="upload">
              <input type="file" name="upload" id="PostImage" required />
            </div>

            <div className="author-loation">
              <input type="text" id="name" placeholder="Author" required />
              <input
                type="text"
                id="location"
                placeholder="location"
                required
              />
            </div>

            <div className="description">
              <input
                type="text"
                id="description"
                placeholder="description"
                className="description"
                required
              />
            </div>

            <div>
              <button type="submit" className="post-submit">
                Post
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddPost;
