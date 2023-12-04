const crypto = require("crypto");

const key = "37725295ea78b626"; // Buffer.from('37725295ea78b626', 'utf8');
const iv = "efcf77768be478cb"; // Buffer.from('efcf77768be478cb', 'utf8');

// 加密函数 - 箭头函数形式
export const encrypt = (text) => {
  const cipher = crypto.createCipheriv("aes-128-cbc", key, iv);
  let encrypted = cipher.update(text, "utf8", "hex");
  encrypted += cipher.final("hex");
  return encrypted;
};

// 解密函数 - 箭头函数形式
export const decrypt = (text) => {
  const decipher = crypto.createDecipheriv("aes-128-cbc", key, iv);
  let decrypted = decipher.update(text, "hex", "utf8");
  decrypted += decipher.final("utf8");
  return decrypted;
};
