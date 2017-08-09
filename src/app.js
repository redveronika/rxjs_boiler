import Rx from 'rxjs/Rx';

console.log('RxJS Boiler Running...');

const btn = document.querySelector('#btn');
const input = document.querySelector('#input');

const btnStream$ = Rx.Observable.fromEvent(btn, 'click');

btnStream$.subscribe(
    (e) => {
        console.log('Clicked', e)
    },
    (err) => {
        console.log(err)
    },
    () => {
        console.log('Completed')
    }
);

const inputStream$ = Rx.Observable.fromEvent(input, 'keyup');

inputStream$.subscribe(
    (e) => {
        console.log('Clicked', e)
    },
    (err) => {
        console.log(err)
    },
    () => {
        console.log('Completed')
    }
);