import MeetupList from "../components/meetups/MeetupList";
import { MongoClient } from "mongodb";

const DUMMY_MEATUPS = [
  {
    id: "m1",
    title: "first meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg",
    address: "some address 5",
    desciption: "this is my first meetup",
  },
  {
    id: "m2",
    title: "second meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg",
    address: "some address 10",
    desciption: "this is my second meetup",
  },
];

const HomePage = (props) => {
  return <MeetupList meetups={props.meetups} />;
};

export async function getStaticProps() {
  const client = await MongoClient.connect(
    "mongodb+srv://mohamed_7428:Noz6Z0BKeV1FFeOh@cluster0.zcvsze4.mongodb.net/meetups?retryWrites=true&w=majority"
  );

  const db = client.db();

  const collectionMeetups = db.collection("meetups");

  const meetups = await collectionMeetups.find().toArray();

  client.close();

  return {
    props: {
      meetups: meetups.map((meetup) => {
        return {
          title: meetup.title,
          image: meetup.image,
          description: meetup.description,
          address: meetup.address,
          id: meetup._id.toString(),
        };
      }),
    },
  };
}

export default HomePage;
