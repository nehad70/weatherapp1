n=5;
 str= "";
for (i=0;i<n;i++) {
  for (j=0;j<i;j++) {
    str+= " ";
  }
  for (k=0;k<(n-i)*2-1;k++) {
    str += "*";
  }
  str += "\n";
}
for (i=2;i<=n;i++) {
  for (j=n;j>i;j--) {
    str+=" ";
  }
  for (k=0;k<i*2-1;k++) {
    str+= "*";
  }
  str += "\n";
}
console.log(str);