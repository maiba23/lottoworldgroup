export const balanceCheck = (balance, bonus, price, ticketType) => {
  if (ticketType === "group") return bonus + balance > price;
  else return balance > price;
};
