// https://gist.github.com/RobertWHurst/7690fd9a1801704936e9431c82197cbe

function getMinimumUniqueSum(arr) {
    arr.sort()
  
    let j = 0
    let length = arr.length - 1

    for (let i = 0; i < length; i += 1) {
      let currentNumber = arr[i]
      let nextNumber    = arr[i + 1]
  
      if (currentNumber !== nextNumber) { continue }
  
      arr.splice(i, 1)
  //
      for (j = Math.max(j, i); j < arr.length; j += 1) {
        const firstNumber = arr[j]
  
        if (j + 1 === arr.length) {
          arr.push(firstNumber + 1)
          length -= 1
          break;
        }
  
        const secondNumber = arr[j + 1]
        if (firstNumber + 1 < secondNumber) {
          arr.splice(j + 1, 0, firstNumber + 1)
          break
        }

      }
      //

    }
  
    return arr.reduce((sum, number) => sum + number, 0)
  }

  const arr = [3, 7, 7, 2, 1, 2, 7]

  getMinimumUniqueSum(arr)