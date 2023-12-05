const crypto = require("crypto");

// 定义一个密码短语和盐值
const passphrase = 'summariesbooks.com';
const salt = 'summariesbooks'; // 盐值应该是固定的，可以是任何字符串

// 加密函数 - 箭头函数形式
export const encrypt = (text) => {
  const key = deriveKey(passphrase, salt, 32);
  const iv = deriveKey(passphrase, salt, 16);
  const cipher = crypto.createCipheriv('aes-256-cbc', key, iv);
  let encrypted = cipher.update(text, 'utf8', 'hex');
  encrypted += cipher.final('hex');
  return encrypted;
};

// 解密函数 - 箭头函数形式
export const decrypt = (encrypted) => {
  const key = deriveKey(passphrase, salt, 32);
  const iv = deriveKey(passphrase, salt, 16);
  const decipher = crypto.createDecipheriv('aes-256-cbc', key, iv);
  let decrypted = decipher.update(encrypted, 'hex', 'utf8');
  decrypted += decipher.final('utf8');
  return decrypted;
};

const deriveKey = (passphrase, salt, keyLength) => {
  return crypto.pbkdf2Sync(passphrase, salt, 100000, keyLength, 'sha256');
}
