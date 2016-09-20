/**
 * Created by Mariah on 9/19/2016.
 */

function zipList(list1, list2) {
  this.comboList =  [];
  this.even = 0;
  this.odd = 0;
  for (this.i=0; i<list1.length*2; i++) {
    if (i%2==0) {
      comboList.push(list1[even]);
      even++;
    } else {
      comboList.push(list2[odd]);
      odd++;
    }
  }
  return comboList;
}

function zipListTheSimpleWay(list1, list2) {
  return _.flatten(_.zip(list1, list2));
}

console.log(zipList(['a', 'b', 'c'], [1, 2, 3]));
console.log(zipListTheSimpleWay(['a', 'b', 'c'], [1, 2, 3]));
