import { IArticlesState } from "./models/IArticlesState";
import { ADD_ARTICLE, DELETE_ARTICLE} from "./actionTypes";
import { IArticle } from "./models/IArticle";
import IAction from '../../models/IAction';

const initialState: IArticlesState = {
  items: [{
    id: '0',
    title: 'Title 1',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit nulla quasi placeat ut eveniet ea odio asperiores, labore id vel quia sapiente rem. Ipsum inventore nihil illum cum in laborum.'
  },
  {
    id: '1',
    title: 'Title 2',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit nulla quasi placeat ut eveniet ea odio asperiores, labore id vel quia sapiente rem. Ipsum inventore nihil illum cum in laborum.'
  }]
}

export function articlesReducer(state = initialState, action: IAction<any>): IArticlesState {
  const { type, error, payload } = action;

  switch (type) {
    case ADD_ARTICLE:
      const newArticle = payload as IArticle;
      const newId = parseInt(state.items[state.items.length - 1].id);
      newArticle.id = (newId + 1).toString();
      return {
        items: [...state.items, newArticle]
      }
    case DELETE_ARTICLE:
      const id: string = payload as string;
      return {
        ...state,
        items: state.items.filter((article: IArticle) => article.id !== id),
      };
    default:
      return state
  }
}