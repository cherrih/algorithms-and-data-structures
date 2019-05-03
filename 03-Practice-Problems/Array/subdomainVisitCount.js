// https://leetcode.com/problems/subdomain-visit-count/

var subdomainVisits = function(cpdomains) {
  const map = {};
  const output = [];
  cpdomains.forEach(cpdomain => {
      const split = cpdomain.split(' ');
      const count = parseInt(split[0]);
      const subdomains = split[1].split('.');
      let subdomain = subdomains[subdomains.length - 1];
      for (let i = subdomains.length - 2; i >= -1; i --) {
          map[subdomain] = map[subdomain] + count || count;
          subdomain = `${subdomains[i]}.${subdomain}`;
      }
  });
  for (let key in map) {
      output.push(`${map[key]} ${key}`);
  }
  return output;
};

// time complexity: linear
// space complexity: linear