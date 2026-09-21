import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import classes from './Restaurant.module.css';
import FilterModal from "./FilterModal.tsx";

const categoryFiles: Record<string, string> = {
    'رستوران': 'restaurant.json',
    "سوپرمارکت": 'supermarkets.json',
    'کافه': 'coffee.json',
    'شیرینی': 'sweets.json',
    'نانوایی': 'bakeries.json',
    'میوه': 'fruit_shops.json',
    'پروتئین': 'protein_shops.json',
    'آبمیوه بستنی': 'juice_icecream_shops.json',
    'لبنیات': 'dairy_shops.json',
};

const categoryListKeys = {
    'restaurant.json': 'restaurants',
    'supermarkets.json': 'supermarkets',
    'coffee.json': 'cafes',
    'sweets.json': 'sweetShops',
    'bakeries.json': 'bakeries',
    'fruit_shops.json': 'fruitShops',
    'protein_shops.json': 'proteinShops',
    'juice_icecream_shops.json': 'juiceIceCreamShops',
    'dairy_shops.json': 'dairyShops',
} as const;

type Shop = {
    id: string;
    title: string;
    image: string;
    rating?: { score: number; votes: number };
    delivery?: { time: string; price: string };
};

type RestaurantData = {
    page: {
        title: string;
    };
} & Partial<Record<typeof categoryListKeys[keyof typeof categoryListKeys], Shop[]>>;

export default function Restaurant() {
    const { name } = useParams();
    const file = name ? categoryFiles[name] : undefined;

    if (!file) {
        return <div style={{padding: '25px'}}>فایل اطلاعات این دسته‌بندی موجود نیست.</div>;
    }

    return <CategoryPage key={file} file={file} />;
}

function CategoryPage({ file }: { file: string }) {
    const [showFilterModal, setShowFilterModal] = useState<boolean>(false);
    const [restaurant, setRestaurant] = useState<RestaurantData | null>(null);
    const [error, setError] = useState<string | null>(null);
    useEffect(() => {
        const controller = new AbortController();
        fetch(`/json/${file}`, { signal: controller.signal })
            .then((res) => {
                if (!res.ok) {
                    throw new Error("دریافت اطلاعات دسته‌بندی ناموفق بود.");
                }
                return res.json();
            })
            .then((data) => {
                setRestaurant(data);
            })
            .catch(() => {
                if (!controller.signal.aborted) {
                    setError("دریافت اطلاعات دسته‌بندی ناموفق بود.");
                }
            });
        return () => controller.abort();
    }, [file]);

    if (error) {
        return <div role="alert">{error}</div>;
    }

    if (!restaurant) {
        return <div>Loading...</div>;
    }

    const listKey = categoryListKeys[file as keyof typeof categoryListKeys];
    const shops = restaurant[listKey] ?? [];

    return (
        <>
            <button className={classes.filterBtn} onClick={() => setShowFilterModal(true)}>فیلترها</button>
            <div className={classes.title}>{restaurant.page.title}</div>
            <div className={classes.shopList}>
                {shops.length === 0 && <p>فروشگاهی در این دسته‌بندی موجود نیست.</p>}
                {shops.map((shop) => (
                    <article key={shop.id} className={classes.shopCard}>
                        <img className={classes.imageShop} src={shop.image} alt={shop.title} />
                        <div className={classes.shopInfo}>
                            <h2 className={classes.shopTitle}>{shop.title}</h2>
                            {shop.rating && (
                                <p>{shop.rating.score} ({shop.rating.votes})</p>
                            )}
                            {shop.delivery && (
                                <p>{shop.delivery.price} {shop.delivery.time}</p>
                            )}
                        </div>
                    </article>
                ))}
            </div>
            {showFilterModal && (
                <FilterModal closeModal={() => setShowFilterModal(false)}/>
            )}
        </>
    )
}
