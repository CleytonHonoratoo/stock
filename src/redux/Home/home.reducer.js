import * as actions from "./home.action";

const defaultData = [
  { name: 'sidney', materialUsed: 'Roteador,', exit: 1, used: 1, devolution: 0 },
  { name: 'jefferson', materialUsed: 'cabo', exit: 1, used: 1, devolution: 0 },
  { name: 'flavio', materialUsed: 'alguma', exit: 1, used: 1, devolution: 0 },
  { name: 'lorran', materialUsed: 'alguma', exit: 1, used: 1, devolution: 0 },
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
    default:
      return state;
  }
}
