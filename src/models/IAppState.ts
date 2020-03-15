import { IArticlesState } from "../redux/articles/models/IArticlesState";

export interface IAppState {
  readonly articles: IArticlesState;
}