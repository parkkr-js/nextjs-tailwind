import { atom } from "recoil";
import { DashboardCardData } from "@/types";

export const dashboardCardState = atom<DashboardCardData[]>({
  key: "dashboardCardState",
  default: [
    { id: 1, title: "Card 1", content: "This is card one" },
    { id: 2, title: "Card 2", content: "This is card two" },
    { id: 3, title: "Card 3", content: "This is card three" },
  ],
});
