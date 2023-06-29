function formatMilliseconds(milliseconds) {
  const totalSeconds = Math.floor(milliseconds / 1000);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
}

function formatNumber(number) {
  const formatter = new Intl.NumberFormat("fr-FR");

  return formatter.format(number);
}

function transformDate(date) {
  // Convert the date string to a Date object
  const dateObj = new Date(date);

  // Define the French month names
  const months = [
    "Janvier",
    "Février",
    "Mars",
    "Avril",
    "Mai",
    "Juin",
    "Juillet",
    "Août",
    "Septembre",
    "Octobre",
    "Novembre",
    "Décembre",
  ];

  // Extract the day, month, and year from the Date object
  const day = dateObj.getDate();
  const month = months[dateObj.getMonth()];
  const year = dateObj.getFullYear();

  // Format the day with the "er" suffix if applicable
  let formattedDay = day.toString();
  if (day === 1) {
    formattedDay += "er";
  }

  // Construct the transformed date string
  const transformedDate = `${formattedDay} ${month} ${year}`;

  return transformedDate;
}

export { transformDate, formatNumber, formatMilliseconds };
