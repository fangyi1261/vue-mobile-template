export function name () {
  return {};
}


export function longStr(arr) {
  if (arr.length) {
    let res = '';

    for (let i = 0; i < arr[0].length; i++) {
      const temp = arr[0][i];
      const flag = arr.every(el => {
        return el.charAt(i) === temp;
      });

      if (flag) {
        res += temp;
      } else {
        break;
      }
    }
    return res;
  }
  return '';
}
