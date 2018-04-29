const { Client } = require('pg')
const client = new Client()
async function testing(){
  await client.connect()

  const res = await client.query('SELECT $1::text as message', ['Hello world!'])
  console.log(res) // Hello world!
  await client.end()
}
testing()

console.log(process.env)

// const { Client } = require('pg')
// const client = new Client()
//
// client.connect()
//
// client.query('SELECT $1::text as message', ['Hello world!'], (err, res) => {
//   console.log('Hello World') // Hello World!
//   client.end()
// })
