import { MongoClient } from "mongodb";

const handler = async (req, res) => {
  if (req.method === "POST") {
    const data = req.body;

    const client = await MongoClient.connect(
      "mongodb+srv://mohamed_7428:Noz6Z0BKeV1FFeOh@cluster0.zcvsze4.mongodb.net/meetups?retryWrites=true&w=majority"
    );

    const db = client.db();

    const collectionMeetups = db.collection("meetups");

    const result = await collectionMeetups.insertOne(data);

    console.log(result);

    client.close();

    res.status(201).json({ message: "Inserte completed" });
  }
};

export default handler;
