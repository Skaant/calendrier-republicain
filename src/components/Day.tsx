import React from "react";
import { DAYS_NAME } from "../data/days.data";

export default function Day({
  day,
  weekday,
}: {
  day: number;
  weekday: number;
}) {
  return (
    <div className="day d-flex">
      <span>{DAYS_NAME[weekday].slice(0, 3)}</span>
      <span>{day + 1}</span>
    </div>
  );
}
