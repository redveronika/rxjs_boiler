import Rx from 'rxjs/Rx';

export default function mergeObservables () {
    // Rx.Observable.interval(2000)
    //     .merge(Rx.Observable.interval(500))
    //     .take(25)
    //     .subscribe(
    //         value => {
    //             console.log(value)
    //         }
    //     )

    const merge1$ = Rx.Observable.interval(2000).map(v => 'Merge 1: ' + v);
    const merge2$ = Rx.Observable.interval(500).map(v => 'Merge 2: ' + v);

    Rx.Observable.merge(merge1$, merge2$)
        .take(25)
        .subscribe(value => console.log(value))
}