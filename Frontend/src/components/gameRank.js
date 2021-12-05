import React from "react";

const Image = ({ images, loading }) => {
  if (loading) {
    return <h2>...loading</h2>;
  }
  return images.map((content, index) => (
    <tr>
      <td>{index + 1}</td>
      <td>
        <img
          //   className="img-box"
          style={{ width: "100px" }}
          alt={index}
          src={`httP://localhost:5000/${content.path}`}
        />
      </td>
      <td>{content.name}</td>
      <td>{content.champion}</td>
      <td>{content.win}</td>
    </tr>
  ));
};

export default Image;