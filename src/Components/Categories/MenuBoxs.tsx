import classes from './MenuBoxs.module.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ModalMenu from "./ModalMenu";
import category, { type Category } from '../data/categories';
import FoodCategories from "./FoodCategories.tsx";


export default function MenuBoxs() {
    const navigate = useNavigate();
    const [showModalMenu, setShowModalMenu] = useState<boolean>(false);
    const showCategories = category.slice(0, 9);
    return (
        <>
            <div className={classes.category}>
                {showCategories.map((item: Category) => (
                    <div key={item.title} className={classes.box}  onClick={() => navigate(`/restaurant/${encodeURIComponent(item.title)}`)}>
                        <img className={classes.imgTitle} src={item.image} alt="img-title"/>
                        <div className={classes.titleOfBox}>{item.title}</div>
                    </div>
                ))}
                <button className={classes.buttonBox} onClick={() => setShowModalMenu(true)}>...</button>
            </div>
            <FoodCategories/>
            {showModalMenu && (
                <ModalMenu
                    category={category}
                    closeModal={() => setShowModalMenu(false)}
                />
            )}
        </>
    )
}
