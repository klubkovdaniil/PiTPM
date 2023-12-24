fs.unlink('delete.txt', (err) => {
    if (err) console.log(err);
    // если возникла ошибка
    else console.log('hello.txt was deleted');
});