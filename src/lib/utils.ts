import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// import Parser from "rss-parser";

// export const rssParser = async (url: any) => {
//   const parser = new Parser();
//   const feed = await parser.parseURL(url);
//   return feed;
// };

// import dayjs from "dayjs";

// export const formatDate = (date: Date, type?: string) => {
//   return dayjs(date).format(type || "DD MMMM YYYY");
// };
