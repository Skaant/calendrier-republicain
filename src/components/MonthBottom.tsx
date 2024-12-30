import React from "react";
import Day from "./Day";

export default function MonthBottom({
  year,
  month,
}: {
  year: number;
  month: number;
}) {
  const days = new Date(year, month, 0).getDate();
  return (
    <div>
      {[...Array(days - 14)].map((_, i) => {
        const date = new Date(year, month - 1, i + 15);
        return (
          <>
            <Day key={i} day={date.getDate() - 1} weekday={date.getDay()} />
          </>
        );
      })}
    </div>
  );
}
