import irani from '../../img/foodcategories/new-irani.png';
import fastfood from '../../img/foodcategories/new-fastfood.png';
import diet from '../../img/foodcategories/new-diet.png';
import kebab from '../../img/foodcategories/new-kebab.png';
import pizza from '../../img/foodcategories/new-pizza.png';
import burger from '../../img/foodcategories/new-burger.png';
import sandwich from '../../img/foodcategories/new-sandwich.png';
import sokhari from '../../img/foodcategories/new-sokhari.png';
import pasta from '../../img/foodcategories/new-pasta.png';
import salad from '../../img/foodcategories/new-salad.png';
import vegetarian from '../../img/foodcategories/new-vegetarian.png';
import sea from '../../img/foodcategories/new-sea.png';
import international from '../../img/foodcategories/new-international.png';
import guilani from '../../img/foodcategories/new-guilani.png';

export interface foodCategories {
    title: string;
    image: string;
}

const foodCategories: foodCategories[] = [
    {
        title: "ایرانی",
        image: irani,
    },
    {
        title: "فست فود",
        image: fastfood,
    },
    {
        title: "غذای رژیمی",
        image: diet,
    },
    {
        title: "کباب",
        image: kebab,
    },
    {
        title: "پیتزا",
        image: pizza,
    },
    {
        title: "برگر",
        image: burger,
    },
    {
        title: "ساندویچ",
        image: sandwich,
    },
    {
        title: "سوخاری",
        image: sokhari,
    },
    {
        title: "پاستا",
        image: pasta,
    },
    {
        title: "سالاد",
        image: salad,
    },
    {
        title: "غذای گیاهی",
        image: vegetarian,
    },
    {
        title: "دریایی",
        image: sea,
    },
    {
        title: "بین الملل",
        image: international,
    },
    {
        title: "گیلانی",
        image: guilani,
    },
]

export default foodCategories;
