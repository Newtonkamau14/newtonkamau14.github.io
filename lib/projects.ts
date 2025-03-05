import fs from "fs";
import path from "path";

export const getProjects = () => {
  const filePath = path.join(process.cwd(), "data", "projects.json");
  const jsonData = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(jsonData);
};
