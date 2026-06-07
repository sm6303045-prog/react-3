function Card(props) {
  console.log(props);
  return (
    <div>
      <div className="item">
        <img
          className="photo"
          src="https://static.vecteezy.com/system/resources/thumbnails/060/313/472/small/detailed-illustration-of-a-cotton-plant-with-pink-petals-and-long-stems-vector.jpg"
          alt="photo"
        />
        <div className="bar1">
          <h3> {props.Name} </h3>
          <h4>{props.user}</h4>
        </div>
        <div className="bar2">
          <h3>{props.date}</h3> <h4>Subcribe Date </h4>
        </div>
        <div className="bar3">
          <h3>{props.Renew}</h3> <h4>Renew Data</h4>
        </div>
        <div className="bar4">
          <h3> {props.price}</h3> <h4>Monthly cc </h4>
        </div>
      </div>
    </div>
  );
}
export default Card;
