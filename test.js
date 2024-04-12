const a = 1

const func = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('qwerqwer')
      resolve('qwerqwr')
      if (a != 1) reject()
    }, 0)
  })
}

func()

console.log('qwerwqerqwer')
