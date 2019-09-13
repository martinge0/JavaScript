function truncateString(str, num) {
  let end = "...";
  if (str.length > num){
    str = str.substring(0, num) + end;
  }
  return str;
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);