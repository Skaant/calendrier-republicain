import React from "react";
import {
  DAYS_NAME,
  SPECIAL_DAYS,
  SPECIAL_DAYS_SOURCE_NAME,
} from "../data/days.data";
import { REPUBLICAN_DAYS } from "../data/republican-days.data";

export default function Day({
  month,
  day,
  weekday,
}: {
  month: number;
  day: number;
  weekday: number;
}) {
  const specialDays = SPECIAL_DAYS[month + 1]?.[day + 1]?.filter(({ source }) =>
    ["holiday", "natural", "republican-month"].includes(source)
  );
  return (
    <div
      className={`day d-flex align-center${
        weekday === 0 || weekday === 6 ? " week-end" : ""
      }`}
    >
      <div className="d-flex align-center">
        <div className="day-weekday">{DAYS_NAME[weekday].slice(0, 3)}</div>
        <div className="day-number">{day + 1}</div>
        <div className="day-republican">
          {REPUBLICAN_DAYS[month + 1]?.[day + 1]}
        </div>
      </div>
      <div className="d-flex">
        {specialDays?.length === 1 && (
          <div className="day-special">
            <div className="text-end">
              {SPECIAL_DAYS_SOURCE_NAME[specialDays[0].source]}
            </div>
            <h3>{specialDays[0].title}</h3>
          </div>
        )}
        {specialDays?.length > 1 && (
          <div className="day-specials">
            {specialDays.map((day, i) => (
              <div key={i} className="d-flex align-center">
                <div className="text-end">
                  {SPECIAL_DAYS_SOURCE_NAME[day.source]}
                </div>
                <h3>{day.title}</h3>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
