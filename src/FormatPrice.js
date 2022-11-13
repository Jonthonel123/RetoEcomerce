const FormatPrice = ({ price }) => {
  return Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "PEN",
    maximumFractionDigits: 2,
  }).format(price / 10000);
};

export default FormatPrice;
