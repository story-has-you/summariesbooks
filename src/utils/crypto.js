const crypto = require('crypto');

// 密钥和 IV（初始化向量）应该是随机和独特的
// 在实际应用中，它们应该被安全地存储和管理
const key = crypto.randomBytes(32); // AES-256 需要 32 字节的密钥
const iv = crypto.randomBytes(16); // AES 的 IV 通常是 16 字节

// 加密函数 - 箭头函数形式
export const encrypt = (text) => {
  let cipher = crypto.createCipheriv('aes-256-cbc', Buffer.from(key), iv);
  let encrypted = cipher.update(text);
  encrypted = Buffer.concat([encrypted, cipher.final()]);
  return { iv: iv.toString('hex'), encryptedData: encrypted.toString('hex') };
};

// 解密函数 - 箭头函数形式
export const decrypt = (text) => {
  let iv = Buffer.from(text.iv, 'hex');
  let encryptedText = Buffer.from(text.encryptedData, 'hex');
  let decipher = crypto.createDecipheriv('aes-256-cbc', Buffer.from(key), iv);
  let decrypted = decipher.update(encryptedText);
  decrypted = Buffer.concat([decrypted, decipher.final()]);
  return decrypted.toString();
};
