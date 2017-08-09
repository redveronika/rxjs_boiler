import Rx from 'rxjs/Rx';

export default function arraysObservables () {
    const numbers = [33, 46, 78, 999, 32];
    const numbers$ = Rx.Observable.from(numbers);

    numbers$.subscribe(
        v => {
            console.log(v);
        },
        error => {
            console.error(error);
        },
        complete => {
            console.log('Completed');
        }
    )

    const posts = [
        {title: "Post one", body: "This is the body"},
        {title: "Post two", body: "This is the body"},
        {title: "Post three", body: "This is the body"}
    ];

    const posts$ = Rx.Observable.from(posts);

    posts$.subscribe(
        post => {
            console.log(post);
            document.querySelector('#posts').insertAdjacentHTML(
                'afterend',
                '<li><b>' + post.title + '</b><p>' + post.body+ '</p></li>'
            );
        },
        error => {
            console.error(error);
        },
        complete => {
            console.log('Completed');
        }
    )
}
