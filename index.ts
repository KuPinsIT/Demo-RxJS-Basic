import './style.css';

import {
  Observable,
  Subject,
  BehaviorSubject,
  ReplaySubject,
  AsyncSubject,
  of,
  interval,
  merge,
  zip,
  combineLatest,
  withLatestFrom
} from 'rxjs';
import { switchMap, map, tap, shareReplay } from 'rxjs/operators';

// //Observable: Data Stream, Producer, Subscription, Observer, Operators
// const observable = new Observable((observer) => {
//   observer.next('Hello');
//   observer.next('World');
//   observer.complete();
// });

// observable.subscribe({
//   next: (value) => console.log(value),
//   complete: () => console.log('Completed'),
// });

// //Subject
// const subject = new Subject<number>();

// subject.subscribe((value) => console.log('Subject Subscriber 1:', value));

// subject.next(1);
// subject.next(2);

// subject.subscribe((value) => console.log('Subject Subscriber 2:', value));

// subject.next(3);

// //BehaviorSubject
// const behaviorSubject = new BehaviorSubject<number>(0);

// behaviorSubject.subscribe((value) =>
//   console.log('BehaviorSubject Subscriber 1:', value)
// );

// behaviorSubject.next(1);
// behaviorSubject.next(2);

// behaviorSubject.subscribe((value) =>
//   console.log('BehaviorSubject Subscriber 2:', value)
// );

// behaviorSubject.next(3);

// console.log('BehaviorSubject Subscriber value:', behaviorSubject.value);

// //ReplaySubject
// const replaySubject = new ReplaySubject<number>(2);

// replaySubject.subscribe((value) =>
//   console.log('ReplaySubject Subscriber 1:', value)
// );

// replaySubject.next(1);
// replaySubject.next(2);
// replaySubject.next(3);

// replaySubject.subscribe((value) =>
//   console.log('ReplaySubject Subscriber 2:', value)
// );

// replaySubject.next(4);

// const asyncSubject = new AsyncSubject<number>();

// asyncSubject.subscribe({
//   next: (value) => console.log('asyncSubject Subscriber 1:', value),
//   complete: () => console.log('asyncSubject Subscriber 1 completed'),
// });

// asyncSubject.next(1);
// asyncSubject.next(2);

// asyncSubject.subscribe({
//   next: (value) => console.log('asyncSubject Subscriber 2:', value),
//   complete: () => console.log('asyncSubject Subscriber 2 completed'),
// });

// asyncSubject.next(3);
// asyncSubject.complete();

// //OPERATOR
// const source = of(1, 2, 3);

// const result = source.pipe(
//   //switchMap
//   // switchMap((value) => {
//   //   return interval(1000).pipe(
//   //     map((innerValue) => value * innerValue)
//   //   );
//   // })

//   //map
//    map((value) => value * 2),
//    tap((value) => console.log('Received value:', value))
// );

// result.subscribe((value) => console.log(value));

// //ShareReplay
// const sourceShareReplay = of(1, 2, 3).pipe(
//   tap((value) => console.log('Emitted value:', value)),
//   shareReplay(1)
// );

// sourceShareReplay.subscribe((value) => console.log('Subscriber 1:', value));

// setTimeout(() => {
//   sourceShareReplay.subscribe((value) => console.log('Subscriber 2:', value));
// }, 2000);

//Merge
const source1 = interval(1000);
const source2 = interval(2000);

const merged = merge(source1, source2);

//merged.subscribe((value) => console.log(value));

//Zip
const zipped = zip(source1, source2);

//zipped.subscribe((value) => console.log(value));

//CombineLatest
const combined = combineLatest(source1, source2);

//combined.subscribe((value) => console.log(value));

//withLatestFrom
const sourceLatest$ = interval(1000);
const other$ = interval(2000);

sourceLatest$.pipe(
  withLatestFrom(other$),
).subscribe(([sourceValue, otherValue]) => {
  //console.log('Source:', sourceValue);
  //console.log('Other:', otherValue);
});