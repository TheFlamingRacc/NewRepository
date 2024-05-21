let dates = [
  { id: 1, date: "2023-05-11" },
  { id: 2, date: "2008-07-02" },
  { id: 3, date: "2024-05-12" },
];

let formattedDates = dates.map((obj) => {
  let parts = obj.date.split("-");
  return {
    id: obj.id,
    formattedDate: `${parts[2]}/${parts[1]}/${parts[0]}`,
  };
});

console.log("Масив об'єктів з датами у новому форматі:", formattedDates);
