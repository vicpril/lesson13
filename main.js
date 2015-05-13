//Задание 1:
var $name = 'Виктор', $age = 26;
var result;
document.write('Меня зовут ' + $name + '. Мне ' + $age + ' лет');

result = delete($name);
document.write("<br>del $name: "+result);
result = delete($name);
document.write("<br>del $age: "+result);

if (typeof $name != 'undefined'){
    document.write("<br>$name существует");
} else {
    document.write("<br>$name НЕ существует");
}

//конец Задания 1


//Задание 2

const CITY = 'Novosibirsk';
console.info(CITY);
if (CITY !== undefined){
    document.write("<br>" + CITY);
}
try{
const CITY = 'Barnaul';
        }
finally{
document.write("<br>New constant - " + CITY);
        }

//конец Задания 2

//Задание 3
var $book = new Array();
        $book ['title'] = 'Forrest Gump';
        $book ['author'] = 'Winston Groom';
        $book ['pages'] = 336;
        document.write("<br>Недавно я прочитал книгу " + $book['title'] +
                ", написанную автором " + $book['author'] + ", я осилил все " + $book['pages'] +
                " страниц, мне она очень понравилась.");
//конец Задания 3

//Задание 4
        var $book1 = new Array();
        var $book2 = new Array();
        $book1 ['title'] = 'Forrest Gump';
        $book1 ['author'] = 'Winston Groom';
        $book1 ['pages'] = 336;
        $book2 ['title'] = 'Изучаем C#';
        $book2 ['author'] = 'Эндрю Стиллмен';
        $book2 ['pages'] = 689;
        var $books = [$book1, $book2];
        document.write("<br>Недавно я прочитал книги '" + $books[0]['title'] + "' и '" + $books[1]['title']
                + ", написанные соответственно авторами " + $books[0]['author'] + " и " + $books[1]['author']
                + ", я осилил в сумме " + ($books[0]['pages'] + $books[1]['pages']) + " страниц, не ожидал от себя подобного.");
//конец Задания 4
