import * as actions from "./home.action";

const defaultData = [
  {
    id: 1,
    name: 'Lorran',
    materialUsed: '',
    exit: 0,
    used: 0,
    devolution: 0,
  },
];

const initialState = () => ({
  data: defaultData,
  loading: true,
});

export default function (state = initialState(), action) {
  switch (action.type) {
    case actions.LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case actions.HOME_CHANGE_STOCK:
      return {
        ...state,
        data: action.payload,
      }
    default:
      return state;
  }
}
