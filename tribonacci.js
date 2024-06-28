function tribonacci(sig, n){
  while(sig.length !== n){
    sig.push(sig.slice(-3).reduce((a,b) => a + b));
  }
  return sig;
}
