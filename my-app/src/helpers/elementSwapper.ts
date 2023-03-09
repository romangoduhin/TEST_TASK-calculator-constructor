/* eslint-disable no-param-reassign,no-return-assign */
function elementSwapper(arr: any[], firstInd: number, secondInd: number): any[] {
  return [arr[firstInd], arr[secondInd]] = [arr[secondInd], arr[firstInd]];
}

export default elementSwapper;
