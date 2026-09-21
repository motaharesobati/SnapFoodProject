import { useRef, useState } from 'react';
import foodCategories from "../data/foodCategories.ts";
import classes from './FoodCategories.module.css';

export default function FoodCategories() {
    const listRef = useRef<HTMLDivElement>(null);
    const [nextClicks, setNextClicks] = useState(0);
    function scrollNext() {
        setNextClicks((count) => count + 1);
        listRef.current?.scrollBy({
            left: -300,
            behavior: 'smooth',
        });
    }
    function scrollBack(){
        listRef.current?.scrollBy({
            left: 300,
            behavior: 'smooth',
        })
    }
    return (
        <div className={classes.wrapper}>
            {nextClicks >= 2 && <button
            type="button"
            onClick={scrollBack}
            className={classes.arrowRight}
            >❯</button>}
            <div ref={listRef} className={classes.list} dir="rtl"
                 onScroll={(event) => {
                     if (Math.abs(event.currentTarget.scrollLeft) < 1) {
                         setNextClicks(0);
                     }
                 }}>
                {foodCategories.map((item) => (
                    <button
                    key={item.title}
                    type="button"
                    className={classes.card}>
                        <img src={item.image} alt=""/>
                        <span>{item.title}</span>
                    </button>
                ))}
            </div>
            <button
            type="button"
            onClick={scrollNext}
            className={classes.arrowleft}
            >
                ❮
            </button>
        </div>
    )
}
