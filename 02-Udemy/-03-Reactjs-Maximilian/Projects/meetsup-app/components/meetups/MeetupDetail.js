import classes from "./MeetupDetail.module.css";

const MeetupDatail = (props) => {
  return (
    <section className={classes.detail}>
      <img src={props.src} />
      <h1>{props.title}</h1>
      <address>{props.address}</address>
      <p>{props.description}</p>
    </section>
  );
};

export default MeetupDatail;
