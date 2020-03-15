import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { removeArticle } from "../../../redux/articles/actions";
import { IArticle } from '../../../redux/articles/models/IArticle';

const mapDispatch = {
  removeArticle: (id: string) => removeArticle(id)
}

type IProps = ConnectedProps<typeof connector>& {
  article: IArticle;
};


const Article: React.FC<IProps> = props => {
  const { article, removeArticle } = props;

  return (
    <div>
      <div className="card mb-3 p-3">        
        <div className="d-flex flex-row justify-content-between align-items-center mb-2">          
          <strong>{article.title}</strong>&nbsp;
          <button 
            type="button"
            className="btn btn-danger"
            onClick={() => removeArticle(article.id)}>
              X - <span>{article.id}</span>
            </button>
        </div>        
        <div>
          {article.content}
        </div>
      </div>      
      
    </div>
  );
}

const connector = connect(null, mapDispatch);
export default connector(Article);