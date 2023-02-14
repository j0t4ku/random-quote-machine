import { quoteService } from "../services/quoteServices/quoteService";
import { getRandomColor } from "../utils/getRandomColors";
import { ACTIONS } from "../config/actions";

export const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.UPDATE_BACKGROUND:
      return {
        ...state,
        isLoading: true,
        color: getRandomColor(),
      };
    case ACTIONS.UPDATE_QUOTE:
      return {
        ...state,
        isLoading: true,
        quote: quoteService.getRandomQuote(),
      };
    case ACTIONS.UPDATE_LOADING_COMPLETE:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
};