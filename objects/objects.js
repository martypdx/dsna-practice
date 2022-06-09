
export function makePet(name, type, age, food, toys) {
    return { name, type, age, food, toys };
}

export function formatWork({ book, author }) {
    return {
        work: book.title,
        writer: author.first + ' ' + author.last,
    };
}

export function formatRevenge({ writer, work }) {
    // const { writer, work } = data;
    // const writer = data.writer;
    // const work = data.work;

    const [first, last] = writer.split(' ');

    return {
        author: { first, last },
        book: {
            title: work
        }
    };
}
