var text = [1438,781,1917,1371,1336,1802,1566,1878,737,1998,1488,1372,1715,1585,1676,1810,1692,1329,1916,1854,1307,1347,1445,1475,1435,1270,1949,1957,1602,1931,1505,1636,1539,1803,1011,1821,1021,1461,1755,1332,1576,1923,1899,1574,1641,1357,1509,1877,1875,1228,1725,1808,1678,1789,1719,1691,1434,1538,2002,1569,1403,1146,1623,1328,1876,520,1930,1633,1990,1330,1402,1880,1984,1938,1898,1908,1661,1335,1424,1833,1731,1568,1659,1554,1323,1344,1999,1716,1851,1313,1531,190,1834,1592,1890,1649,1430,1599,869,1460,1009,1771,1818,1853,1544,1279,1997,1896,1272,1772,1375,1373,1689,1249,1840,1528,1749,1364,1670,1361,1408,1828,1864,1826,1499,1507,336,1532,1349,1519,1437,1720,1817,1920,1388,1288,1290,1823,1690,1331,1564,1660,1598,1479,1673,1553,1991,66,1571,1453,1398,1814,1679,1652,1687,1951,1334,1319,1605,1757,1517,1724,2008,1601,1909,1286,1780,1901,1961,1798,1628,1831,1277,1297,1744,1946,1407,1856,1922,1476,1836,1240,1591,1572,2000,1813,1695,1723,1238,1588,1881,1850,1298,1411,1496,744,1477,1459,1333,1902];
// var textByLine = text.split("\n");


function twoSum(nums, target_num) {
  var map = [];
  var indexnum = [];

  for (var x = 0; x < nums.length; x++) {
    if (map[nums[x]] != null) {
      var index = map[nums[x]];
      indexnum[0] = index;
      indexnum[1] = x;
      break;
    }
    else {
      map[target_num - nums[x]] = x;
    }
  }
  return indexnum;
}

var nums = twoSum(text,2020);

console.log( nums );

var results = [];
nums.forEach( (num) => {
  results.push(text[num]);
});

// hacky much
var finalResult = results[0] * results[1];

console.log(finalResult);

// PART DEUX
function threeSum(nums, target_num) {
  nums.sort((a, b) => a - b);
  const result = [];
  for (let indexA = 0; indexA < nums.length - 2; indexA++) {
    const a = nums[indexA];

    if (a > target_num) return result;
    if (a === nums[indexA - 1]) continue;

    let indexB = indexA + 1;
    let indexC = nums.length - 1;

    while(indexB < indexC) {
      const b = nums[indexB];
      const c = nums[indexC];

      if ((a + b + c) === target_num) {
        result.push([a, b, c]);
      }

      if ((a + b + c) >= target_num) {
        while (nums[indexC - 1] === c) { indexC--; }
        indexC--;
      }

      if((a + b + c) <= target_num) {
        while(nums[indexB + 1] === b) { indexB++; }
        indexB++;
      }
    }
  }
  return result;
}

console.log('part 2');
var part2 = threeSum(text, 2020);
console.log( part2[0] );

// hacky much x3
var finalResult2 = part2[0][0] * part2[0][1] * part2[0][2];
console.log(finalResult2);
