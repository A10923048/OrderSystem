"use client";
import { useState, useEffect } from "react"
import Link from "next/link"
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { getDocs, collection } from "firebase/firestore"
import db from "@/services/db"

export default function UserPage({ params }) {

    const [carousel, setCarousel] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const querySnapshot = await getDocs(collection(db, "carousel"));
            const newCarousel = [];
            querySnapshot.forEach((doc) => {
                newCarousel.push(doc.data());
            });
            setCarousel(newCarousel)
        }
        fetchData()
    }, []);
    const carouselItems = carousel.map((item, idx) => {
        return (<div key={idx}>
            <img src={item.img} alt="Album" style={{ maxWidth: '100%', height: 'auto' }} />
        </div>)
    })


    const responsive = {

        mobile: {
            breakpoint: { max: 4000, min: 0 },
            items: 1
        }
    };



    return (<>

        {/* My Post: {params.lineID} */}

        <main className="container mx-auto h-screen py-16 px-8 relative flex">

            {/* 舊 */}
            <div className="  lg:w-1/2 bg-white text-gray-800 flex flex-col px-3 py-4">

                {/*幻燈片*/}


                <div className="min-h-[250px] flex ">
                    <div className="w-1/6 px-3 py-4">
                        <Link
                            className="bg-green-500 hover:bg-red-500 active:bg-green-700  block text-center py-4 mt-3 rounded-md text-white "
                            href={`/user/${params.lineID}/order?order_mode=now`}>上一頁
                        </Link>
                    </div>

                    <div className="w-4/6 px-3 py-4 text-center ">
                        <p>放置活動宣傳照片（CSS Carouse）</p>

                        <Carousel responsive={responsive}>
                            {carouselItems}

                        </Carousel>

                    </div>

                    <div className="w-1/6 px-3 py-4">
                        <Link
                            className="bg-green-500 hover:bg-red-500 active:bg-green-700  block text-center py-4 mt-3 rounded-md text-white "
                            href={`/user/${params.lineID}/order?order_mode=reserve`}>上一頁
                        </Link>
                    </div>
                </div>


                <div className="flex justify-center">
                    <div className="w-1/2 px-3 py-4 ">
                        <h2 className="text-lg text-center border-none">今日點餐倒數計時
                        </h2>
                        <div className="flex">
                            <div className="w-1/6 px-3 py-4"></div>
                            <div className="w-1/6 px-3 py-4"></div>
                            <div className="w-1/6 px-3 py-4"></div>
                            <div className="w-1/6 px-3 py-4"></div>
                            <div className="w-1/6 px-3 py-4"></div>
                            <div className="w-1/6 px-3 py-4"></div>
                        </div>
                        <Link
                            className="bg-green-500 hover:bg-red-500 active:bg-green-700  block text-center py-4 mt-3 rounded-md text-white "
                            href={`/user/${params.lineID}/order?order_mode=now`}>立即點餐
                        </Link>
                    </div>
                    <div className="w-1/2 px-3 py-4 ">
                        <h2 className="text-lg text-center  border-none">預約點餐</h2>
                        <input type="date" />
                        <Link
                            className="bg-green-500 hover:bg-red-500 active:bg-green-700  block text-center py-4 mt-3 rounded-md text-white "
                            href={`/user/${params.lineID}/order?order_mode=reserve`}>預約點餐
                        </Link>
                    </div>
                </div>
            </div>
            <div className="lg:w-1/2 bg-white text-gray-800 flex flex-col w-1/2 px-3 py-4">
                <h1 className="text-2xl text-center p-3 rounded-md">注意事項</h1>
                <ul className="">
                    <li>1. 今日訂餐者請統一於上午10：30前完成下單流程</li>
                    <li>2. 結帳方式：無現金付款，統一使用LINE Pay 支付 </li>
                    <li>3. 無法使用LINE Pay付款者請勿線上下單</li>

                </ul>

                {/* <ol className="list-decimal">
                    <li>今日訂餐者請統一於上午10：30前完成下單流程</li>
                    <li>結帳方式：無現金付款，統一使用LINE Pay 支付 </li>
                    <li>無法使用LINE Pay付款者請勿線上下單</li>

                </ol> */}


            </div>
        </main>




    </>)
}