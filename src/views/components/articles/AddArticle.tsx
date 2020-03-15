import React, { useState } from "react";
import { connect, ConnectedProps } from 'react-redux';
import { IArticle } from "src/redux/articles/models/IArticle";
import { addArticle } from "../../../redux/articles/actions";


const mapDispatch = {
  addArticle: (article: IArticle) => addArticle(article)
}

const connector = connect(null, mapDispatch);
type IProps = ConnectedProps<typeof connector>;


const AddArticle: React.FC<IProps> = props => {

  // Add local component state
  const [article, setArticle] = useState({
    id: "",
    title: "",
    content: ""
  });

  // Extract addArticle Action
  const { addArticle } = props;

  const handleChange = (type: 'title' | 'content', value : string) => {
    type === 'title' ?
      setArticle({ id: article.id, title: value, content: article.content }) : 
      setArticle({ id: article.id, title: article.title, content: value });
  }

  const submitArticle = () => {
    addArticle({
      id: "",
      title: article.title,
      content: article.content
    });
    setArticle({ id: "", title: "", content: "" });
  };

  return (
    <div>
      Title:
      <input
        type="text"
        name="title"
        className="form-control"
        value={article.title}
        onChange={e => handleChange("title", e.target.value)} />
      
      <br/>
      Content: 
      <textarea
        name="content"
        className="form-control"
        value={article.content}
        onChange={e => handleChange("content", e.target.value)}></textarea>

      <br />
      <button type="button" className="btn btn-primary" onClick={submitArticle}>Add</button>
    </div>
  );
}

export default connector(AddArticle);