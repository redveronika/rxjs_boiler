import Rx from 'rxjs/Rx';

export default function scratchObservables () {

    const source$ = new Rx.Observable(observer => {
        console.log('Creating observable')

        observer.next('Hello World');
        observer.next('Another value');

        observer.error(new Error('Error: error'));

        setTimeout(() => {
            observer.next('Yet another value');
            observer.complete();
        }, 3000)
    });

    source$
        .catch(error => Rx.Observable.of(error))
        .subscribe(
        value => {
            console.log(value)
        },
        error => {
            console.error(error)
        },
        complete => {
            console.log('Completed')
        }
    )
}