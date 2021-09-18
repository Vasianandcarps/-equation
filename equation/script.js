let m = prompt("Введите m (m *x^2  + n * x + l = 0)");
let n = prompt("Введите n (m * x^2  + n * x + l = 0)");
let l = prompt("Введите l (m * x^2 + n * x + l = 0)");
let D = Math.cbrt(n) - 4 * m * l;
if (m != 0) {
  if (l != 0) {
    if (D != 0) {
      let o = -n + Math.sqrt(D);
      let o1 = -n - Math.sqrt(D);
      let m1 = 2 * m;
      let x1 = o / m1;
      let x2 = o1 / m1;
      console.log(x1);
      console.log(x2);
      document.write(x1 + "," + x2);
    } else {
      alert("D не может равняться нулю");
    }
  } else {
    x1 = 0;
    x2 = -n / m;
    console.log(x1);
    console.log(x2);
    document.write(x1 + "," + x2);
  }
} else {
  let n = prompt("Введите n (m * x^2  + n * x + l = 0)");
  let l = prompt("Введите l (m * x^2 + n * x + l = 0)");
  x = -l / n;
  console.log(x);
  document.write(x);
}
