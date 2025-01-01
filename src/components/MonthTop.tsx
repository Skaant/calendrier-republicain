import React from "react";
import Day from "./Day";

const MONTHS_NAME = [
  "Janvier",
  "Février",
  "Mars",
  "Avril",
  "Mai",
  "Juin",
  "Juillet",
  "Août",
  "Septembre",
  "Octobre",
  "Novembre",
  "Décembre",
];

export default function MonthTop({
  year,
  month,
}: {
  year: number;
  month: number;
}) {
  return (
    <div>
      <h2 className="month-title text-center">{MONTHS_NAME[month]}</h2>
      {[...Array(14)].map((_, i) => (
        <Day
          key={i}
          month={month}
          day={i}
          weekday={new Date(year, month, i + 1).getDay()}
        />
      ))}
    </div>
  );
}
