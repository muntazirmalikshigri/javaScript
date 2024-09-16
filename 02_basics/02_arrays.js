const marvel_heros = ["thor","ironman","spiderman"];
const dc = ["superman","flash","batman"];
marvel_heros.push(dc[0],dc[1],dc[2]);
console.log(marvel_heros);

// same another method
const dc_heros = marvel_heros.concat(dc);
console.log(dc_heros);

//another same methosd
 const all_new_arrays = [...marvel_heros,...dc_heros];
 console.log(all_new_arrays);
const all_new_arrays2 = [1,2,3,...marvel_heros];
 console.log(all_new_arrays2)

 const another_array = [1,3,4,[23,44,44],[50,60,70]];
 console.log(another_array);
 const real_another_array = another_array.flat(Infinity);
 console.log(real_another_array);

 console.log(Array.isArray("malik"));
 console.log(Array.from("malik"));
 console.log(Array.from({name:"malik"}));// intresting
 let score1=10;
 let score2=20;
 let score3=30;
 console.log(Array.of(score1,score2,score3));

