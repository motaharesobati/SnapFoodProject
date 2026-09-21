import classes from './FilterModal.module.css';
import { useState } from "react";

export default function FilterModal({closeModal}: {closeModal: () => void}) {
    const [isSortOpen, setIsSortOpen] = useState<boolean>(false);
    const [deliveryMethod, setDeliveryMethod] = useState<boolean>(false);
    const [sendPrice, setSendPrice] = useState<boolean>(false);
    return (
        <>
            <div className={classes.generally}>
                <div style={{ display: "flex",alignItems: "center"}}>
                    <button onClick={closeModal} className={classes.closeModal}>x</button>
                    <p className={classes.filterTitle}>فیلترها</p>
                </div>
                <div dir="rtl">
                    <button type="button" onClick={() => setIsSortOpen((prev) => !prev)} className={classes.sortBtn}>
                        <div className={classes.sorting}>مرتب سازی براساس</div>
                        <span style={{marginLeft: '18px'}}>{isSortOpen ? "⌃" : "⌄"}</span>
                    </button>
                    {isSortOpen && (
                        <div
                            style={{
                                display: "flex",
                                gap: "8px",
                                flexWrap: "wrap",
                                padding: "16px 16px",
                            }}
                        >
                            <button type="button" className={classes.button}>بالاترین امتیاز</button>
                            <button type="button" className={classes.button}>نزدیک‌ترین</button>
                            <button type="button" className={classes.button}>جدیدترین</button>
                            <button type="button" className={classes.button}>ارزان‌ترین</button>
                            <button type="button" className={classes.button}>عملکرد کلی</button>
                            <button type="button" className={classes.button}>گران‌ترین</button>
                            <button type="button" className={classes.button}>پیشنهاد هفته</button>
                        </div>
                    )}
                </div>
                <hr style={{width:'95%',opacity: '0.25'}}/>
                <button  type="button" onClick={() => setDeliveryMethod((prev) => !prev)} className={classes.sortingBtn}>
                    <div className={classes.sorting}>روش تحویل</div>
                    <span style={{marginLeft: '18px'}}>{deliveryMethod ? "⌃" : "⌄"}</span>
                </button>
                {deliveryMethod && (
                    <div style={{ display: "flex",alignItems: "center",justifyContent: "center",marginTop: "15px",textAlign: "center"}}>
                        <div className={classes.send}>ارسال با پیک</div>
                        <div className={classes.verbal}>مراجعه حضوری</div>
                    </div>
                )}
                <hr style={{width:'95%',opacity: '0.25'}}/>
                    <button type="button" className={classes.sendPrice} onClick={() => setSendPrice((prev) => !prev)}>
                        <div className={classes.sending}>هزینه ارسال</div>
                        <span style={{marginLeft: '18px'}}>{sendPrice ? "⌃" : "⌄"}</span>
                    </button>
                    {sendPrice && (
                        <div  style={{
                            display: "flex",
                            gap: "8px",
                            flexWrap: "wrap",
                            padding: "16px 16px",
                        }}>
                            <button type="button" className={classes.button}>رایگان</button>
                            <button type="button" className={classes.button}>تا 5 تومان</button>
                            <button type="button" className={classes.button}>تا 10 تومان</button>
                            <button type="button" className={classes.button}>تا 20 تومان</button>

                        </div>
                    )}
                <hr style={{width:'95%',opacity: '0.25'}}/>
                <label className={classes.filterRow}>
                    <div>تحویل فوری</div>
                    <span className={classes.switch}>
                        <input type="checkbox" />
                        <span className={classes.slider}></span>
                    </span>
                </label>
                <hr style={{width:'95%',opacity: '0.25'}}/>
                <label className={classes.filterRow}>
                    <div>پیک اسنپ فود</div>
                    <span className={classes.switch}>
                        <input type="checkbox" />
                        <span className={classes.slider}></span>
                    </span>
                </label>
                <hr style={{width:'95%',opacity: '0.25'}}/>
                <label className={classes.filterRow}>
                    <div>جایزه خرید</div>
                    <span className={classes.switch}>
                        <input type="checkbox" />
                        <span className={classes.slider}></span>
                    </span>
                </label>
                <hr style={{width:'95%',opacity: '0.25'}}/>
                <label className={classes.filterRow}>
                    <div>دارای کوپن</div>
                    <span className={classes.switch}>
                        <input type="checkbox" />
                        <span className={classes.slider}></span>
                    </span>
                </label>
                <hr style={{width:'95%',opacity: '0.25'}}/>
                <label className={classes.filterRow}>
                    <div>دارای تخفیف</div>
                    <span className={classes.switch}>
                        <input type="checkbox" />
                        <span className={classes.slider}></span>
                    </span>
                </label>
            </div>
        </>
    )
}
