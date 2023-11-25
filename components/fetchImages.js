
import MongoClient from 'mongodb'

export default async function fetchImages() {

    const uri = "mongodb+srv://lucasliao0403:2hbVJPVVskFdeLNa@search-n-rescue.g5yelu9.mongodb.net/?retryWrites=true&w=majority";
    const client = new MongoClient(uri);
    const dbName = "myDatabase";
    const collectionName = "images";
    


    const images = await collection.find("images")
    console.log(images)


  return (
    images
  )
}

