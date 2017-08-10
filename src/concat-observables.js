import Rx from 'rxjs/Rx';

export default function concatObservables () {
    const concat1$ = Rx.Observable.range(0, 5).map(v => 'Concat 1: ' + v);
    const concat2$ = Rx.Observable.range(6, 5).map(v => 'Concat 2: ' + v);

    Rx.Observable.concat(concat1$, concat2$)
        .subscribe(value => console.log(value))
}