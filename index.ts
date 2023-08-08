import { mapTo } from 'rxjs/operators';
import { interval, merge } from 'rxjs';

//emit every 2.5 seconds
const first = interval(3500);
//emit every 2 seconds
const second = interval(3000);
//emit every 1.5 seconds
const third = interval(2500);
//emit every 1 second
const fourth = interval(2000);

//emit outputs from one observable
const example = merge(
  first.pipe(mapTo('1-FIRST!')),
  second.pipe(mapTo('2-SECOND!')),
  third.pipe(mapTo('3-THIRD')),
  fourth.pipe(mapTo('4-FOURTH'))
);
//output: "FOURTH", "THIRD", "SECOND!", "FOURTH", "FIRST!", "THIRD", "FOURTH"
const subscribe = example.subscribe((val) => console.log(val));
