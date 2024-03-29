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
            <label>Imagem do Casal</label>
            <code className="--color-dark">
              Formatos Suportados: jpg, jpeg, png
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
              <p>Nenhuma imagem definida para este casal.</p>
              )}
          </Card>
          <label>Nome Casal:</label>
          <input
            type="text"
            placeholder="casal name"
            name="name"
            value={casal?.name}
            onChange={handleInputChange}
          />
           <label>Aniversario:</label>
          <input
            type="text"
            placeholder="Aniversario"
            name="date"
            value={casal?.date}
            onChange={handleInputChange}
          />

          <label>Cargo:</label>
          <input
            type="text"
            placeholder="cargo"
            name="category"
            value={casal?.category}
            onChange={handleInputChange}
          />

          <label>Oferta:</label>
          <input
            type="text"
            placeholder="Oferta"
            name="price"
            value={casal?.price}
            onChange={handleInputChange}
          />

          <label>QTD:</label>
          <input
            type="text"
            placeholder="Qtd"
            name="quantity"
            value={casal?.quantity}
            onChange={handleInputChange}
          />

          <label>Descrição do Casal:</label>
          <ReactQuill
            theme="snow"
            value={description}
            onChange={setDescription}
            modules={CasalForm.modules}
            formats={CasalForm.formats}
          />

          <div className="--my">
            <button type="submit" className="--btn --btn-primary">
              Salvar Casal
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
