const pwNumberReg = /[0-9]+/;  // 正则, 是否带数字
const pwLetterReg = /[a-zA-Z]+/; // 正则, 是否带英文字符
const pwENSpecialReg = /[`~!@#$%^&*()_+<>?:"{},.\/;'[\]]+/; // 正则,是否带英文特殊字符
const pwCNSpecialReg = /[！。，￥……——·【】；：‘’？》《、？（）]+/;  // 正则,是否带中文特殊字符
const pwWhiteSpaceReg = /(^\s+)|(\s+$)|\s+/;  // 正则, 带有一个或多个空格
const pwNumberStr = '0123456789';
const pwNumberStr2 = '9876543210';
const pwLetterStr = 'abcdefghijklmnopqrstuvwxyz';
const pwPureNumberReg = /[0-9]{6,}/g;  // 正则, 包含六个及以上数字
const pwPureLetterReg = /[a-zA-Z]{6,}/i; // 正则, 包含六个及以上字母(无视大小写)
const isMobile = /^[1][0-9]{10}$/;  // 正则, 验证手机号格式
const ltrim = /(^\s*)/g;
const rtrim = /(\s*$)/g;

// 去除首位空格
export const TrimWhiteSpace = (params: string) => {
  return params.replace(ltrim, "").replace(rtrim, "");
};

// 去除字符之间连续的多余空格
export const betweenWhiteSpace = (str: string) => {
  return str.replace(/\s+/g, ' '); 
};

// 检测密码规则
export const MatchPassword = (pw: string) => {
  let msg = '合格';
  if (pwWhiteSpaceReg.test(pw)) {  // 判断空格
    msg = '密码不允许有空格';
    return msg;
  }

  if (pw.length < 6 || pw.length > 20) { // 判断长度
    msg = '密码长度需要为6-20个字符';
    return msg;
  }

  // 字母、数字、特殊字符至少包含一种
  if (pwNumberReg.test(pw) || pwLetterReg.test(pw) || pwENSpecialReg.test(pw) || pwCNSpecialReg.test(pw)) {
    //
  } else {
    msg = '字母、数字、特殊字符至少包含一种';
    return msg;
  }

  // let numberMatches = pw.match(pwPureNumberReg); // 匹配所有包含六位数字
  // if (numberMatches != null && numberMatches.length > 0) {
  //   for (let item in numberMatches) { // 判断是否包含连续的数字
  //     if (pwNumberStr.indexOf(numberMatches[item]) >= 0) {
  //       // 包含连续数字
  //       msg = '密码不能包含连续数字';
  //       return msg;
  //     }
  //   }
  // }
  if (pwNumberStr.indexOf(pw) >= 0) {
    // 包含连续数字
    msg = '密码不能包含连续数字';
    return msg;
  }

  if (pwNumberStr2.indexOf(pw) >= 0) {
    // 包含反序连续数字
    msg = '密码不能包含连续数字';
    return msg;
  }

  let splitArray = pw.split('');
  let ExistDiff = false;
  let len = splitArray.length;
  for (let i = 0; i < len - 1; i++) {
    if (splitArray[i].toLowerCase() !== splitArray[i + 1].toLowerCase()) { // 若存在不相同则合格
      ExistDiff = true;
      break;
    }
  }
  if (!ExistDiff) {
    msg = '密码不允许连续重复密码';
    return msg;
  }

  // let letterMatches = pw.match(pwPureLetterReg); // 匹配所有包含六位字母
  // if (letterMatches != null && letterMatches.length > 0) {
  //   for (let item in letterMatches) { // 判断是否包含连续的字母
  //     if (pwLetterStr.indexOf(letterMatches[item].toLowerCase()) >= 0) {
  //       // 包含连续字符
  //       msg = '密码不能包含连续字母';
  //       return msg;
  //     }
  //   }
  // }
  if (pwLetterStr.indexOf(pw.toLowerCase()) >= 0) {
    // 包含连续字符
    msg = '密码不能包含连续字母';
    return msg;
  }
  return msg;
};

export const Reg = {
  ENSpecialReg: pwENSpecialReg,       // 验证特殊字符
  CNSpecialReg:pwCNSpecialReg,        // 验证特殊字符
  LetterReg: pwLetterReg,             // 验证英文
  WhiteSpaceReg:pwWhiteSpaceReg,      // 验证空白
  isMobile: isMobile,                 // 验证手机
  TrimWhiteSpace: TrimWhiteSpace,
  betweenWhiteSpace: betweenWhiteSpace,
};
