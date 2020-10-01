// import * as service from '../../service/login.service';

export const MODAL_QUOTATION_OPEN_MODAL = 'MODAL_QUOTATION_OPEN_MODAL';
export const MODA_QUOTATION_CLOSE_MODAL = 'MODA_QUOTATION_CLOSE_MODAL';

export function openModal() {
  return {
    type: MODAL_QUOTATION_OPEN_MODAL,
    payload: true,
  }
}

export function closeModal() {
  return {
    type: MODA_QUOTATION_CLOSE_MODAL,
    payload: false,
  }
}