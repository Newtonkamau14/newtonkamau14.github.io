import fs from "fs";
import path from "path";

export const getContact = () => {
  const filePath = path.join(process.cwd(), "data", "contact.json");
  const jsonData = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(jsonData);
};
