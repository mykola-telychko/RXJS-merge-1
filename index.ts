import { mapTo } from 'rxjs/operators';
import { interval, merge } from 'rxjs';

// src: https://www.learnrxjs.io/learn-rxjs/operators/combination/merge

//emit every 2.5 seconds
const delemiter = interval(6000);
const first = interval(4500);
const second = interval(4000);
const third = interval(3500);
const fourth = interval(3000);

//emit outputs from one observable
// merge all observ.pipe
const example = merge(
  delemiter.pipe(mapTo('<--000000000000000000-->')),
  first.pipe(mapTo('1-FIRST!')),
  second.pipe(mapTo('2--SECOND!')),
  third.pipe(mapTo('3---THIRD')),
  fourth.pipe(mapTo('4----FOURTH'))
);

const subscribe = example.subscribe((val) => console.log(val));
