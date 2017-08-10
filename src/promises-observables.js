import Rx from 'rxjs/Rx';

export default function promisesObservables () {

    function getUser(username) {
        return fetch('https://api.github.com/users/' + username);
    }

    const usernameSource$ = Rx.Observable.fromEvent(
        document.querySelector('#username-input'),
        'keyup'
    );

    usernameSource$.subscribe(
        e => {
            Rx.Observable.fromPromise(getUser(e.target.value))
                .subscribe(
                    value => {
                        value.json().then(res => {
                            document.querySelector('.name').innerText = res.name;
                            document.querySelector('.location').innerText = ' (' + res.location + ')';
                        });
                    }
                )
        }
    )


}
