import "./styles.css";
import Card from "./card.js";
export default function App() {
  let item = [
    {
      Name: "Constantin.Morar76",
      user: "@Constantin",
      date: "sep 02,2022",
      Renew: "Apr 17, 2023",
      price: "$7.00",
    },
    {
      Name: "Jerrold84",
      user: "@Jerrold84",
      date: "oct 01,2022",
      Renew: "None",
      price: "$4.00",
    },
  ];

  return (
    <div className="contact">
      {item.map((p, i) => {
        return (
          <div className="users">
            <Card
              Name={p.Name}
              user={p.user}
              date={p.date}
              Renew={p.Renew}
              price={p.price}
            />
          </div>
        );
      })}
    </div>
  );
}
