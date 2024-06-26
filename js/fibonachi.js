export function nthFibo(index) {
  let arrFibNumber = [0, 1]

  while(arrFibNumber.at(-1) < 1597) {
    let res = arrFibNumber.at(-1) + arrFibNumber.at(-2)
    arrFibNumber.push(res)
  }
  return arrFibNumber[index - 1]
}



