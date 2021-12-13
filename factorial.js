function factorial(n, product = 1) {
  if (n === 0) {
    return product;
  }

  const newProduct = product * n;
  const newNum = n - 1;
  return factorial(newNum, newProduct);
}
