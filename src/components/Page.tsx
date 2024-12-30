import React from "react";
import MonthTop from "./MonthTop";
import MonthBottom from "./MonthBottom";

export default function Page({
  year,
  month,
  slot,
}: {
  year: number;
  month: number;
  slot: "top" | "bottom";
}) {
  return (
    <div className="page d-flex">
      {slot === "top" ? (
        <>
          <MonthTop year={year} month={month} />
          <MonthTop year={year} month={month + 1} />
        </>
      ) : (
        <>
          <MonthBottom year={year} month={month} />
          <MonthBottom year={year} month={month + 1} />
        </>
      )}
    </div>
  );
}
