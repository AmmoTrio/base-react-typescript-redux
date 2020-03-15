import { IArticle } from "./models/IArticle";
import IAction from "../../models/IAction";
import * as ActionUtility from '../../utilities/ActionUtility';
import { ADD_ARTICLE, DELETE_ARTICLE } from "./actionTypes";

export function addArticle(article: IArticle): IAction<IArticle> {
  return ActionUtility.createAction(ADD_ARTICLE, article);
}

export function removeArticle(id: string): IAction<string> {
  return ActionUtility.createAction(DELETE_ARTICLE, id);
}