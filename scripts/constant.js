const levelMap = { easy: "简单", medium: "中等", hard: "困难" };

export const promptList = [
  {
    name: "id",
    message: "请输入题目序号:",
    validate: () => true,
  },
  {
    name: "cname",
    message: "请输入题目名称:",
    validate: () => true,
  },
  {
    name: "url",
    message: "请输入题目URL:",
    validate: () => true,
  },
  {
    type: "list",
    name: "level",
    message: "请选择题目难度:",
    choices: Object.keys(levelMap).map((key) => ({
      name: levelMap[key],
      value: key,
    })),
  },
];
