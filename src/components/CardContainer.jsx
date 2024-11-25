import CardListItems from "./CardListItems";
import travelData from "../travelData";

const CardContainer = () => {
  return (
    <div>
      {travelData.map((data, index) => (
        <div key={index}>
          <CardListItems
            image={data.image}
            title={data.title}
            country={data.country}
            description={data.description}
            date={data.date_created}
          />
        </div>
      ))}
    </div>
  );
};

export default CardContainer;
