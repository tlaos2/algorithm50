const source = '11[TBL-12]나라라마라ㅏ[TBL-13]나라라마라ㅏ';

function findTBL(str) {
  const reg = new RegExp('/[[TBL-[0-9]]/g');
  const result = reg.test(str);

  console.log(result);
}

findTBL(source);
