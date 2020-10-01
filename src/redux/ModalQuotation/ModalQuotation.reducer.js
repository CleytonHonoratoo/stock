import * as actions from './ModalQuotation.action';

const initialState = () => ({
    showModal: false,
  });

export default function (state = initialState(), action) {
  switch(action.type) {
    case actions.MODAL_QUOTATION_OPEN_MODAL:
      return {
        ...state,
        showModal: action.payload,
      };
    case actions.MODA_QUOTATION_CLOSE_MODAL:
      return {
        ...state,
        showModal: action.payload,
      }
    default:
      return state;
  }
}
