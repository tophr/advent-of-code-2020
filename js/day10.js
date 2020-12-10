const adaptersEx = `16
10
15
5
1
11
7
19
6
12
4`;

const adaptersEx2 = `28
33
18
42
31
14
46
20
48
47
24
23
49
45
19
38
39
11
1
32
25
35
8
17
7
9
4
2
34
10
3`;

const adapters = `151
94
14
118
25
143
33
23
80
95
87
44
150
39
148
51
138
121
70
69
90
155
144
40
77
8
97
45
152
58
65
63
128
101
31
112
140
86
30
55
104
135
115
16
26
60
96
85
84
48
4
131
54
52
139
76
91
46
15
17
37
156
134
98
83
111
72
34
7
108
149
116
32
110
47
157
75
13
10
145
1
127
41
53
2
3
117
71
109
105
64
27
38
59
24
20
124
9
66`;

const adaptersArray = adapters.split("\n").map(Number);
adaptersArray.sort((a, b) => a - b);
// console.log(adaptersArray);

var diffs = adaptersArray.reduce(function(result, value, index, collection) {
  if (index === 0) return result;
  result[index] = value - collection[index - 1];
  return result;
}, []).slice(1);

// console.log(diffs);

function getOccurrence(array, value) {
  return array.filter((v) => (v === value)).length;
}

let differentials = [...new Set(diffs)];
let diffCounts = [];

differentials.forEach((diff, i) => {
  let occurence = getOccurrence(diffs, diff);
  // console.log( diff + ' occurs ' + occurence );
  diffCounts.push(occurence);
});

function answerCalc( differentials ) {
  return (differentials[0] + 1) * (differentials[1] + 1);
}

console.log('answer 1 is ' + answerCalc(diffCounts));
