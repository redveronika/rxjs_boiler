import Rx from 'rxjs/Rx';

export default function uiObservables () {
    const btn = document.querySelector('#btn');
    const input = document.querySelector('#input');
    const output = document.querySelector('#output');

    const btnStream$ = Rx.Observable.fromEvent(btn, 'click');

    btnStream$.subscribe(
        (e) => {
            console.log('Clicked', e)
        },
        (error) => {
            console.error(error)
        },
        () => {
            console.log('Completed')
        }
    );

    const inputStream$ = Rx.Observable.fromEvent(input, 'keyup');

    inputStream$.subscribe(
        (e) => {
            console.log('Clicked', e)
            output.innerText = e.target.value;
        },
        (error) => {
            console.error(error);
        },
        () => {
            console.log('Completed')
        }
    );
}