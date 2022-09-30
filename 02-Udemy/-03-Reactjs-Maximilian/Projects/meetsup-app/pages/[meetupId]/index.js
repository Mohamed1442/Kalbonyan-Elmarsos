import MeetupDatail from "../../components/meetups/MeetupDetail";
import { MongoClient, ObjectId } from "mongodb";

const MeetupDatails = (props) => {
  return (
    <MeetupDatail
      src={props.meetupData.image}
      address={props.meetupData.title}
      description={props.meetupData.description}
      title={props.meetupData.title}
    />
  );
};

export async function getStaticPaths() {
  const client = await MongoClient.connect(
    "mongodb+srv://mohamed_7428:Noz6Z0BKeV1FFeOh@cluster0.zcvsze4.mongodb.net/meetups?retryWrites=true&w=majority"
  );

  const db = client.db();

  const collectionMeetups = db.collection("meetups");

  const meetups = await collectionMeetups.find({}, { _id: 1 }).toArray();

  client.close();

  return {
    fallback: false,
    paths: meetups.map((meetup) => ({
      params: { meetupId: meetup._id.toString() },
    })),
  };
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;

  const client = await MongoClient.connect(
    "mongodb+srv://mohamed_7428:Noz6Z0BKeV1FFeOh@cluster0.zcvsze4.mongodb.net/meetups?retryWrites=true&w=majority"
  );

  const db = client.db();

  const collectionMeetups = db.collection("meetups");

  const selected = await collectionMeetups.findOne({ _id: ObjectId(meetupId) });

  client.close();

  return {
    props: {
      meetupData: {
        id: selected._id.toString(),
        title: selected.title,
        image: selected.image,
        description: selected.description,
      },
    },
  };
}

export default MeetupDatails;
