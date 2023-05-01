import * as dotenv from 'dotenv'
dotenv.config()
console.info(`I am ${process.env.MY_NAME}, wilder in ${process.env.MY_CITY}, and I love ${process.env.MY_LANGUAGE}`)