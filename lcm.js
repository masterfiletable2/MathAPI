
function lcm(a, b) {
    const an = Number(a);
    const bn = Number(b);
   return (!an || !bn) ? 0 : Math.abs((an * bn) / gcd(an, bn))
}



function gcd(an, bn) {
    an = Math.abs(an);
    bn = Math.abs(bn);
    while(bn) {
      var t = bn;
      bn = an % bn;
      an = t;
    }
    return an;
  }

module.exports.lcm = lcm;

