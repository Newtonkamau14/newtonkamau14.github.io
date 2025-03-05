import fs from "fs";
import path from "path";

export const getContent = () => {
  const filePath = path.join(process.cwd(), "data", "content.json");
  const jsonData = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(jsonData);
};
