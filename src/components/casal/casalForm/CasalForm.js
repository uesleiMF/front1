import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Card from "../../card/Card";

import "./CasalForm.scss";

const CasalForm = ({
  casal,
  casalImage,
  imagePreview,
  description,
  setDescription,
  handleInputChange,
  handleImageChange,
  saveCasal,
}) => {
  return (
    <div className="add-casal">
      <Card cardClass={"card"}>
        <form onSubmit={saveCasal}>
          <Card cardClass={"group"}>
            <label>casal Image</label>
            <code className="--color-dark">
              Supported Formats: jpg, jpeg, png
            </code>
            <input
              type="file"
              name="image"
              onChange={(e) => handleImageChange(e)}
            />

            {imagePreview != null ? (
              <div className="image-preview">
                <img src={imagePreview} alt="casal" />
              </div>
            ) : (
              <p>No image set for this poduct.</p>
            )}
          </Card>
          <label>casal Name:</label>
          <input
            type="text"
            placeholder="casal name"
            name="name"
            value={casal?.name}
            onChange={handleInputChange}
          />

          <label>casal Category:</label>
          <input
            type="text"
            placeholder="casal Category"
            name="category"
            value={casal?.category}
            onChange={handleInputChange}
          />

          <label>casal Price:</label>
          <input
            type="text"
            placeholder="casal Price"
            name="price"
            value={casal?.price}
            onChange={handleInputChange}
          />

          <label>casal Quantity:</label>
          <input
            type="text"
            placeholder="casal Quantity"
            name="quantity"
            value={casal?.quantity}
            onChange={handleInputChange}
          />

          <label>casal Description:</label>
          <ReactQuill
            theme="snow"
            value={description}
            onChange={setDescription}
            modules={CasalForm.modules}
            formats={CasalForm.formats}
          />

          <div className="--my">
            <button type="submit" className="--btn --btn-primary">
              Save casal
            </button>
          </div>
        </form>
      </Card>
    </div>
  );
};

CasalForm.modules = {
  toolbar: [
    [{ header: "1" }, { header: "2" }, { font: [] }],
    [{ size: [] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [{ align: [] }],
    [{ color: [] }, { background: [] }],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["clean"],
  ],
};
CasalForm.formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "color",
  "background",
  "list",
  "bullet",
  "indent",
  "link",
  "video",
  "image",
  "code-block",
  "align",
];

export default CasalForm;
