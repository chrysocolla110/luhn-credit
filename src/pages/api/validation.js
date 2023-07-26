import { NextApiRequest, NextApiResponse } from "next";

const cardCheckLuhn = ({credit_card_number}) => {
  const cardDigits = (credit_card_number.replace(/\D/g, '')).split('');

  let sum = 0;
  for(let i = 0 ; i < cardDigits.length-1; i++){
    const digit = parseInt(cardDigits[i]);
    sum += (digit * (i%2+1));
    sum %= 10;
  }
  return sum === parseInt(cardDigits[cardDigits.length-1]);
}


export default async function (req, res) {
  const { method, body } = req;

  switch (method) {
    case "POST":
      try {
        const { credit_card_number } = body;
        const checkStatus = cardCheckLuhn({credit_card_number});
        return res.json({checkStatus});
      } catch (error) {
        return res.status(400).json({ message: error.message });
      }
    default:
      return res.status(400).json({ message: "Method are not supported" });
  }
}
