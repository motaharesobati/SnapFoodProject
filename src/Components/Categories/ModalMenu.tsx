import classes from './ModalMenu.module.css';
import { type Category } from "../data/categories";
import { useNavigate } from 'react-router-dom';

interface ModalMenuProps {
    closeModal: () => void;
    category: Category[];
}

export default function ModalMenu({closeModal, category}: ModalMenuProps) {
    const navigate = useNavigate();
    return (
        <>
            <div className={classes.container} onClick={closeModal}>
                <div className={classes.modalMenu}
                     onClick={(e) => e.stopPropagation()}>
                    <div className={classes.modalHeader}>
                        <button className={classes.closeBtnMenu} onClick={closeModal}>x</button>
                        <p className={classes.categoriesTitle}>دسته بندی ها</p>
                    </div>
                    <div className={classes.allCategory}>
                        {category.map((item, index) => (
                            <div key={index} className={classes.box}
                            onClick={() => {
                                closeModal();
                                navigate(`/restaurant/${encodeURIComponent(item.title)}`)
                            }}>
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
