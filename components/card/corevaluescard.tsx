import React from "react";
import { Card, CardBody } from "@nextui-org/react";
const coreValues = [
  {
    title: "Innovation",
    description:
      "Innovation is essential for real estate agents to stay ahead of current market trends and remain competitive.",
  },
  {
    title: "Customer Focus",
    description:
      "Customer focus ensures that agents are attentive to clients’ needs and provide them with the best service possible.",
  },
  {
    title: "Collaboration",
    description:
      "Collaboration between agents and other real estate professionals is necessary for the success of any real estate company.",
  },
  {
    title: "Respect",
    description:
      "Highly valued by all clients: it is important to treat everyone with respect regardless of their background or status.",
  },
];

const CoreValuesCard = () => {
  return (
    <>
      {coreValues.map((value, index) => (
        <Card key={index}>
          <CardBody className="px-6 py-8">
            <h1 className="font-bold text-xl text-violet-700 mb-2">
              {value.title}
            </h1>
            <p className="text-default-500">{value.description}</p>
          </CardBody>
        </Card>
      ))}
    </>
  );
};

export default CoreValuesCard;
