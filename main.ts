import fs from 'fs'
import path from 'path'

const INPUT_FILE_NAME = 'input.csv'
const OUTPUT_FILE_NAME = 'output.csv'

function main(): void {
  let stringContent = fs.readFileSync(path.join(__dirname, INPUT_FILE_NAME)).toString()
  let tokenizedStringContent = stringContent.split('\r\n')

  for (let i = 0; i < tokenizedStringContent.length; ++i) {
    tokenizedStringContent[i] = `"${tokenizedStringContent[i]}"`
  }

  stringContent = tokenizedStringContent.join(',')
  stringContent = `[${tokenizedStringContent}]`
  fs.writeFileSync(path.join(__dirname, OUTPUT_FILE_NAME), stringContent)
}

main()