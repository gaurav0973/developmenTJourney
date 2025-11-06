import { MongoClient } from 'mongodb'

// Connection URL
const url = 'conncetion string'
const client = new MongoClient(url);

// Database Name
const dbName = 'coderArmy';

async function main() {
  // Use connect method to connect to the server
  await client.connect();
  console.log('Connected successfully to server');
  const db = client.db(dbName);
  const collection = db.collection('user');

  // the following code examples can be pasted here...
//   const insertResult = await collection.insertMany([{ a: 1 }, { a: 2 }, { a: 3 }]);
//   console.log('Inserted documents =>', insertResult);

    // const findResult = await collection.find({}).toArray();
    // const findResult = await collection.find({}) //-> Introcuction to FindCursor ??
    // const findResult = collection.find({}) // actual me ye db call kar hi nahi raha hai
    // console.log(findResult)

    const findResult = collection.find({})
    for await (const obj of findResult)
        console.log(obj)

  return 'done.';
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());