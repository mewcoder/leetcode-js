import fs from "fs";
import path from "path";
import chalk from "chalk"; // 控制台颜色
import prettier from "prettier";
import ejs from "ejs";
import { fileURLToPath } from "url";
import { camelCase, padStart } from "lodash-es";
// import solutionsData from "../data/solutions.json" assert { type: "json" };

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const solutionsDir = "../solutions/";
const templateDir = "./template/";

/**
 * @desc 从url获取题目名字
 * @param {*} url
 * @returns
 */
const getPath = (url) => {
  const words = url.split("/");
  const index = words.findIndex((w) => w === "problems");
  if (index > -1 && words[index + 1]) {
    return words[index + 1];
  }
};
/**
 * @desc 创建目录
 * @param {*} str
 * @returns
 */
const createDir = (str) => {
  const dir = path.resolve(__dirname, solutionsDir + str);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
    return dir;
  } else {
    console.log(chalk.red("目录已存在"));
  }
};

const parserMap = {
  js: "babel",
  json: "json",
  md: "markdown",
};

/**
 * @desc 创建文件
 * @param {*} file 文件名
 * @param {*} dir 目录
 * @param {*} config 配置
 * @param {*} type 扩展名
 */
const createFile = (file, type, config) => {
  const templateCode = fs.readFileSync(
    path.resolve(__dirname, templateDir + file + ".ejs")
  );
  const code = ejs.render(templateCode.toString(), config);
  const resultCode = prettier.format(code, { parser: parserMap[type] });
  fs.writeFileSync(`${config.dir}/${file}.${type}`, resultCode);
};

const updateData = (config) => {
  const solutionsData = JSON.parse(
    fs.readFileSync(path.resolve(__dirname, "../data/solutions.json"))
  );
  const list = solutionsData;
  list.push(config);
  fs.writeFileSync(
    path.resolve(__dirname, "../data/solutions.json"),
    JSON.stringify(list, null, 2)
  );
  updateReadme(list);
};

export const updateReadme = (list) => {
  const text = list.reduce(
    (md, item) => `${md}\n - [${item.id}. ${item.cname}](./${item.title}/)`,
    "# solutions"
  );
  fs.writeFileSync(path.resolve(__dirname, "../solutions/README.md"), text);
};

const create = (config) => {
  const { id, url } = config;
  const path = getPath(url);
  if (!path) {
    console.log(chalk.red("请输入正确的URL"));
    return false;
  }
  config.id = padStart(id, 3, "0");
  config.path = path;
  config.title = `${config.id}-${path}`;
  config.name = camelCase(path);
  const dir = createDir(`${config.title}`); // 创建目录，eg.001-two-sum
  const params = { ...config, dir };
  if (dir) {
    createFile("index", "js", params);
    createFile("index.spec", "js", params);
    createFile("README", "md", params);
    updateData(config);
    return true;
  }
};

export { create };
