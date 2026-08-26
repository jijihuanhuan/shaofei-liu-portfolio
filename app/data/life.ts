// 新增内容的方法：往对应数组里加一项即可。
// 字段说明：
//   title       标题（必填）
//   date        日期，如 "2025-08"（可选）
//   description 一段文字说明（可选）
//   image       图片路径，放到 public/ 目录后写 "/文件名.jpg"（可选）
//   link        可选外链或站内链接（可选）

export type LifeItem = {
  title: string;
  date?: string;
  description?: string;
  image?: string;
  link?: string;
};

export const motorcycleItems: LifeItem[] = [];

export const photographyItems: LifeItem[] = [];

export const cookingItems: LifeItem[] = [];

export const friendsItems: LifeItem[] = [];
