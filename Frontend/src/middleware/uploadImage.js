import axios from "axios";

export const UploadImage = (req) => {
  console.log(req.image);

  const formData = new FormData();

  formData.append("title", req.title);
  formData.append("description", req.description);

  for (const image of req.image) {
    formData.append("image", image);
  }

  for (let key of formData.keys()) {
    console.log(key);
  }
  for (let value of formData.values()) {
    console.log(value);
  }

  axios.post("/api/games/", formData).then((res) => console.log(res));
};
