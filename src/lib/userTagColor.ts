export const userTagColor = (type: string) => {

  switch (type) {
    case "Celebrity":
      return "#123CA6";
    case "eco-friendly store":
      return "#00B047";
    case "Charitable Organization":
      return "#4B105F";
    case "Charity Shop":
      return "#B59900";
    case "Professional Seller":
      return "#b91a4f";
    case "Ambassador":
      return "#81b91a";
    case "Individual Seller":
      return "#b96f1a";
    case "Assisted Seller":
      return "#123CA6";
    case "Eco-Friendly Shop":
      return "#00B047";
    default:
      return "#000";
  }
};
