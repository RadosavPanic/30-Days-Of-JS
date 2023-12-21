const now = new Date();
console.log(now); // Thu Dec 21 2023 11:07:04 GMT+0100 (Central European Standard Time)

console.log(now.getFullYear(), now.getMonth(), now.getDate()); // 2023 (yyyy format year), 11 (0-11 format month), 21 (1-31 format day)
console.log(now.getHours(), now.getMinutes()); // 11 (0-23 format hour), 10 (0-59 format minutes)
console.log(now.getMilliseconds()); // 265 (0-999 miliseconds format)
console.log(now.getDay()); // 4 (0-6 format weekday)
console.log(now.getTime()); // 1703153563760 (get time, miliseconds since January 1, 1970)

const months = {
  1: "Jan",
  2: "Feb",
  3: "Mar",
  4: "Apr",
  5: "May",
  6: "Jun",
  7: "Jul",
  8: "Aug",
  9: "Sep",
  10: "Oct",
  11: "Nov",
  12: "Dec",
};

const formatDate = (date) => {
  const day = `${date.getDate()}`.padStart(2, "0");
  const month = months[date.getMonth() + 1];
  const year = String(date.getFullYear()).slice(2);
  return `${day}-${month}-${year}`;
};

const currentDate = formatDate(now);
console.log(currentDate);
