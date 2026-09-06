import classes from './ModalMenu.module.css';
import category from "../data/categories";
export default function ModalMenu({closeModal, category}) {
    return (
        <>
            <div className={classes.container} onClick={closeModal}>
                <div className={classes.modalMenu}
                     onClick={(e) => e.stopPropagation()}>
                    <div style={{display: 'flex', alignItems: 'center'}}>
                        <button className={classes.closeBtnMenu} onClick={closeModal}>x</button>
                        <p className={classes.categoriesTitle}>دسته بندی ها</p>
                    </div>
                    <div className={classes.allCategory}>
                        {category.map((item, index) => (
                            <div key={index} className={classes.box}>
                                <img className={classes.imgTitle} src={item.image} alt="img-title"/>
                                <div className={classes.titleOfBox}>{item.title}</div>
                            </div>
                        ))}
                    </div>

                </div>

            </div>

        </>
    )
}