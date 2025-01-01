import React from "react";
import Day from "./Day";

export default function MonthBottom({
  year,
  month,
}: {
  year: number;
  month: number;
}) {
  const days = new Date(year, month + 1, 0).getDate();
  return (
    <div>
      {[...Array(days - 14)].map((_, i) => {
        const date = new Date(year, month, i + 15);
        return (
          <>
            <Day
              key={i}
              month={month}
              day={date.getDate() - 1}
              weekday={date.getDay()}
            />
          </>
        );
      })}
    </div>
  );
}
