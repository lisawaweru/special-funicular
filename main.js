function* getStudents() {
    yield 'Abbi';
    yield 'Dshane';
    yield 'Kati';
    yield 'Lisa';
    yield 'Parish';
}


function main() {
    const students = getStudents();
    for (const value of students) {
        console.log(value);
    }
}


main();