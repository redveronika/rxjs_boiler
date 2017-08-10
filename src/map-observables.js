import Rx from 'rxjs/Rx';

export default function mapObservables () {

    // MergeMap
    Rx.Observable.of('Hello')
        .mergeMap(v => {
            return Rx.Observable.of(v + ' Everyone');
        })
        .subscribe(res => console.log(res));

    // SwitchMap
    function getUser(username) {
        return fetch('https://api.github.com/users/' + username);
    }

    const usernameSource$ = Rx.Observable.fromEvent(document.querySelector('#username-input'),'keyup')
        .map(e => e.target.value)
        .switchMap(value => {
            return Rx.Observable.fromPromise(getUser(value))
        });

    usernameSource$.subscribe(
        value => {
            value.json().then(res => {
                document.querySelector('.name').innerText = res.name;
                document.querySelector('.location').innerText = ' (' + res.location + ')';
            });
        }
    )
}