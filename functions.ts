function add(n1: number, n2: number): number {
  return n1 + n2
}

function printResult(num: number): void {
  console.log('Result: ' + num)
}

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2
  cb(result)
}

addAndHandle(10, 20, (result) => {
  console.log(result)
})

let comblineValues: (a: number, b: number) => number;

comblineValues = add;
// comblineValues = printResult;

console.log(comblineValues(8, 8))

printResult(add(5, 12))