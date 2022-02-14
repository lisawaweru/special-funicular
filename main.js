function* getStudents() {
    yield 'Abbi';
    yield 'Dshane';
    yield 'Kati';
    yield 'Lisa';
    yield 'Parish';
}


function main() {
    const students = getStudents();
    let value = students.next();
    while (!value.done) {
        console.log(value.value);
        value = students.next();
    }
}

main();