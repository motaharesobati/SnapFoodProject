import classes from '../Categories/MenuBoxs.module.css';
import { useState } from 'react';
import ModalMenu from "./ModalMenu";
import category from '../data/categories';

export default function MenuBoxs() {
    const [showModalMenu, setShowModalMenu] = useState(false);
    const showCategories = category.slice(0, 9);
    return (
        <>
            <div className={classes.category}>
            {showCategories.map((item, index) => (
                    <div key={index} className={classes.box}>
                        <img className={classes.imgTitle} src={item.image} alt="img-title"/>
                        <div className={classes.titleOfBox}>{item.title}</div>
                    </div>
            ))}
                <button className={classes.buttonBox} onClick={() => setShowModalMenu(true)}>...</button>
            </div>
            {showModalMenu && (
                <ModalMenu
                    category={category}
                    closeModal={() => setShowModalMenu(false)}
                />
            )}

        </>
    )
}