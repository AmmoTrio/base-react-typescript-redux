import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { IAppState } from '../../../models/IAppState';
import { IArticle } from '../../../redux/articles/models/IArticle';
import AddArticle from './AddArticle';
import Article from './Article';


const mapState = (state: IAppState) => ({
  articles: state.articles.items
});

const mapDispatch = {};

type IProps = ConnectedProps<typeof connector>;

const Articles: React.FC<IProps> = props => {
  const { articles } = props;
  // const articles = useSelector((state: IAppState) => state.articles.items, null);
  return (
    <div className="container">
      <h3 className="row">Articles</h3>
      <div className="row d-flex flex-row align-items-start">
        <div className="col-12 col-md-4 card p-3 mb-md-0 mb-3">
          <AddArticle/>
        </div>
        
        <div className="col-12 col-md-8 px-0 px-md-3">
          <ul>
            {
              articles.map((article: IArticle) => (
                <li key={article.id}>
                  <Article article={article} />
                </li>
              ))
            }
          </ul>
        </div>
      </div>      
    </div>    
  );
}

const connector = connect(mapState, mapDispatch);
export default connector(Articles);
