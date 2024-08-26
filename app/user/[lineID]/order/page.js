"use client";
//React components
//1. A javascript functon 
//2. Must return JSX <> </>

//-> 在 React 中使用 useEffect 钩子
import { useEffect, useState } from "react"
import { getDocs, collection } from "firebase/firestore"
import db from "@/services/db"
export default function OrderPage({ params, searchParams }) {

    const [productList, setProductList] = useState([]);

    useEffect(() => {
        async function fetchData() {
            //貼上程式碼後修改

            const querySnapshot = await getDocs(collection(db, "productList"));
            const newProductList = [];
            querySnapshot.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
                // console.log(doc.id, " => ", doc.data());
                newProductList.push(doc.data());
            });
            console.log(newProductList);
            setProductList(newProductList)
        }
        fetchData()
    }, []);

    const [n, setN] = useState(0);
    console.log("n=", n);

    const cardList = productList.map(product => {

        return (

            <div className="shadow-xl px-3 py-2" key={product.id}>

                <div className="flex my-3 border-none">
                    <h2 className="bg-red-500 block text-center rounded-full p-4 text-white border-none ">{product.id}</h2>
                    <h3 className="border-none ">{product.name}</h3>
                    <p className="border-none ">＄ {product.price} NTD</p>
                </div>
                <img src={product.img} alt="image1" />
                <div className="flex">

                    <div className="w-1/6 px-3 py-2">
                        <button className="bg-green-500 hover:bg-red-500 active:bg-green-700  block text-center  rounded-md text-white" onClick={() => {
                            setN(n + 1);
                        }}>+</button>
                    </div>

                    <div className="w-4/6 px-3 py-2 text-center">
                        <p> {n}</p>
                    </div>

                    <div className="w-1/6 px-3 py-2">
                        <button className="bg-green-500 hover:bg-red-500 active:bg-green-700  block text-center rounded-md text-white   
                                    onClick={() => {
                                        setN(n - 1);
                                    }
                                    }">-</button>
                    </div>

                </div>
                <div className="flex">
                    <button className=" bg-green-500 hover:bg-red-500 active:bg-green-700  block text-center py-1 mt-1 rounded-md text-white ">加入購物車</button>
                </div>

            </div>

            // <div className="shadow-xl" key={product.id}>
            //     <div className="px-3 py-2 ">
            //         <div className="flex my-3 border-none">
            //             <h2 className="bg-red-500 block text-center rounded-full p-4 text-white border-none ">{product.id}</h2>
            //             <h3 className="border-none ">{product.name}</h3>
            //             <p className="border-none ">＄ {product.price} NTD</p>
            //         </div>
            //         <img src={product.img} alt="image1" />
            //         <div className="flex">
            //             <button className=" bg-green-500 hover:bg-red-500 active:bg-green-700  block text-center py-1 mt-1 rounded-md text-white ">加入購物車</button>
            //         </div>
            //     </div>
            // </div>



        )
    })

    return (
        <>
            <main className="grid grid-cols-1 md:grid-cols-2 gap-4">

                {/* L */}
                <div >
                    <h1 className="text-xl">
                        {searchParams.order_mode === "reserve" ? "預約點餐" : "立即點餐"}
                    </h1>

                    <div className="grid grid-cols sm:grid-cols-2 md:grid-cols-2  mt-5 ">

                        {cardList}

                        {/* 舊 ：一張卡片 的元件格式*/}
                        {/* <div className="shadow-xl px-3 py-2">

                            <div className="flex my-3 border-none">
                                <h2 className="bg-red-500 block text-center rounded-full p-4 text-white border-none ">1</h2>
                                <h3 className="border-none ">經典嫩雞胸</h3>
                                <p className="border-none ">＄ 40 NTD</p>
                            </div>
                            <img src="/img/1.jpg" alt="image1" />
                            <div className="flex">

                                <div className="w-1/6 px-3 py-2">
                                    <button className="bg-green-500 hover:bg-red-500 active:bg-green-700  block text-center  rounded-md text-white" onClick={() => {
                                        setN(n + 1);
                                    }}>+</button>
                                </div>

                                <div className="w-4/6 px-3 py-2 text-center">
                                    <p> {n}</p>
                                </div>

                                <div className="w-1/6 px-3 py-2">
                                    <button className="bg-green-500 hover:bg-red-500 active:bg-green-700  block text-center rounded-md text-white   
                                    onClick={() => {
                                        setN(n - 1);
                                    }
                                    }">-</button>
                                </div>

                            </div>
                            <div className="flex">
                                <button className=" bg-green-500 hover:bg-red-500 active:bg-green-700  block text-center py-1 mt-1 rounded-md text-white ">加入購物車</button>
                            </div>

                        </div> */}

                        {/* 新 ：一張卡片 的元件格式*/}
                        {/* <div class="grid grid-cols-3 gap-4 m-5 shadow-xl px-3 py-2">

                             <div class="grid grid-cols-subgrid gap-4 col-span-3">
                                <div className=" col-start-1 sm:m-3 md:m-5 border-none rounded-full bg-red-600  text-white text-sm sm:text-md md:text-1xl font-semibold flex justify-center items-center">1</div>
                                <div className=" col-span-2  border-none ">
                                    <div className=" col border-none text-sm sm:text-sm md:text-md font-semibold flex justify-center items-center text-stone-500">
                                        經典嫩雞胸
                                    </div>
                                    <div className=" col border-none  text-stone-500 flex  text-1xl sm:text-sm md:text-1xl font-semibold justify-center items-center">
                                        ＄50NTD
                                    </div>
                                </div>
                            </div>

                            <div className=" border-none rounded-full bg-red-600  text-white text-1xl font-semibold flex justify-center items-center">1</div>
                            <div className=" border-none">經典嫩雞胸</div>
                            <div className=" border-none">＄ 30 NTD</div>

                            <div className="col-span-3 border-none" >
                                <img src="/img/2.jpg" alt="image1" />
                            </div>

                            <div class="grid grid-cols-subgrid gap-4 col-span-3 border-none">

                                <button
                                    className=" h-10 border-2 border-stone-400 rounded-l-lg block bg-stone-100 hover:bg-stone-200 active:bg-stone-300 text-stone-500 text-2xl font-semibold"
                                    onClick={() => {
                                        setN(n - 1);
                                    }}
                                >
                                    -
                                </button>

                                <div className="min-w-20 h-10 border-2 border-x text-2xl font-semibold flex justify-center items-center text-stone-500">
                                    {n}
                                </div>
                                <button
                                    onClick={() => {
                                        setN(n + 1);
                                    }}
                                    className="h-10 border-2 border-stone-400 rounded-r-lg block bg-stone-100 hover:bg-stone-200 active:bg-stone-300 text-stone-500 text-2xl font-semibold"
                                >
                                    +
                                </button>

                            </div>

                            <div class="grid grid-cols-subgrid gap-4 col-span-3 border-none">
                                <button class="col-span-3 m-3 border-none  rounded-md  bg-green-300 hover:bg-green-400 active:bg-red-600 text-white text-2xl font-semibold flex justify-center items-center">加入購物車</button>
                            </div>

                        </div> */}



                    </div>



                    {/* <div className="flex  px-3 py-4">
                        <div className="w-1/2 px-3 py-4">1號餐
                            <div className="min-h-[50px] flex ">
                                <div className="w-1/6 px-3 py-4">
                                    <button className="bg-green-500 hover:bg-red-500 active:bg-green-700  block text-center py-1 mt-1 rounded-md text-white ">+</button>
                                </div>

                                <div className="w-4/6 px-3 py-4 text-center">
                                    <p>數量</p>
                                </div>

                                <div className="w-1/6 px-3 py-4">

                                </div>
                            </div>
                            <button className="bg-green-500 hover:bg-red-500 active:bg-green-700  block text-center py-1 mt-1 rounded-md text-white ">-</button>

                        </div>

                        <div className="w-1/2 px-3 py-4">2號餐
                            <div className="min-h-[50px] flex ">
                                <div className="w-1/6 px-3 py-4">
                                    <button className="bg-green-500 hover:bg-red-500 active:bg-green-700  block text-center py-1 mt-1 rounded-md text-white ">+</button>
                                </div>

                                <div className="w-4/6 px-3 py-4 text-center">
                                    <p>數量</p>
                                </div>

                                <div className="w-1/6 px-3 py-4">
                                    <button className="bg-green-500 hover:bg-red-500 active:bg-green-700  block text-center py-1 mt-1 rounded-md text-white ">-</button>

                                </div>
                            </div>
                        </div>
                    </div> */}


                </div>

                {/* R */}
                <div className="border-2">
                    <h1 className="text-2xl">已加入的餐點</h1>
                    {/* new */}

                    <div id="w">
                        <header id="title">
                            <h1></h1>
                        </header>
                        <div>
                            <table id="cart">
                                <thead>
                                    <tr colspan="6">1號餐點</tr>
                                    <tr>
                                        <th class="first">序列</th>
                                        <th class="second">飯量</th>
                                        <th class="third">特製</th>
                                        <th class="fourth">套餐升級</th>
                                        <th class="fourth">價錢</th>
                                        <th class="fifth">刪除</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/*shopping cart contents  */}

                                    <tr class="productitm">
                                        <td>1</td>
                                        <td>
                                            <select name="" id="">
                                                <option value="0">正常</option>
                                                <option value="1">飯少</option>
                                            </select>
                                        </td>
                                        <td><input type="radio" class="qtyinput" />不要泡菜</td>
                                        <td>
                                            <input type="radio" class="qtyinput" />+19元升級
                                            <input type="radio" class="qtyinput" />+49元升級
                                        </td>
                                        <td>$100</td>
                                        <td>刪除</td>
                                    </tr>

                                </tbody>
                                <tfoot >
                                    {/* tax + subtotal  */}
                                    <tr class="totalprice">
                                        <td class="light" colspan="2">總金額:</td>
                                        <td colspan="2"><span class="thick">$225.45</span></td>
                                        <td class="light" colspan="2"><button id="submitbtn">結帳</button></td>
                                    </tr>
                                </tfoot>
                            </table>

                            <table id="cart">
                                <thead>
                                    <tr colspan="6">2號餐點</tr>
                                    <tr>
                                        <th class="first">序列</th>
                                        <th class="second">飯量</th>
                                        <th class="third">特製</th>
                                        <th class="fourth">套餐升級</th>
                                        <th class="fourth">價錢</th>
                                        <th class="fifth">刪除</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/*shopping cart contents  */}

                                    <tr class="productitm">
                                        <td>1</td>
                                        <td>
                                            <select name="" id="">
                                                <option value="0">正常</option>
                                                <option value="1">飯少</option>
                                            </select>
                                        </td>
                                        <td><input type="radio" class="qtyinput" />不要泡菜</td>
                                        <td>
                                            <input type="radio" class="qtyinput" />+19元升級
                                            <input type="radio" class="qtyinput" />+49元升級
                                        </td>
                                        <td>$100</td>
                                        <td>刪除</td>
                                    </tr>
                                    <tr class="productitm">
                                        <td>1</td>
                                        <td>
                                            <select name="" id="">
                                                <option value="0">正常</option>
                                                <option value="1">飯少</option>
                                            </select>
                                        </td>
                                        <td><input type="radio" class="qtyinput" />不要泡菜</td>
                                        <td>
                                            <input type="radio" class="qtyinput" />+19元升級
                                            <input type="radio" class="qtyinput" />+49元升級
                                        </td>
                                        <td>$100</td>
                                        <td>刪除</td>
                                    </tr>
                                    <tr class="productitm">
                                        <td>1</td>
                                        <td>
                                            <select name="" id="">
                                                <option value="0">正常</option>
                                                <option value="1">飯少</option>
                                            </select>
                                        </td>
                                        <td><input type="radio" class="qtyinput" />不要泡菜</td>
                                        <td>
                                            <input type="radio" class="qtyinput" />+19元升級
                                            <input type="radio" class="qtyinput" />+49元升級
                                        </td>
                                        <td>$100</td>
                                        <td>刪除</td>
                                    </tr>

                                </tbody>
                                <tfoot >
                                    {/* tax + subtotal  */}
                                    <tr class="totalprice">
                                        <td class="light" colspan="2">總金額:</td>
                                        <td colspan="2"><span class="thick">$225.45</span></td>
                                        <td class="light" colspan="2"><button id="submitbtn">結帳</button></td>
                                    </tr>
                                </tfoot>
                            </table>
                        </div>
                    </div>


                    <div className="  px-3 py-4 border-none">
                        <div className="flex px-3 py-4 border-none">
                            <div className="w-1/2 min-h-[50px] flex text-center ">
                                <p >總金額</p>
                                ＄1000
                            </div>
                            <button className="w-1/2" id="submitbtn">LINEPAY結帳</button>

                        </div>

                    </div>

                </div>

            </main >

        </>
    )
}