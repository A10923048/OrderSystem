export default function AdminDashboardPage() {
    return (
        <>
            <h1>Dashboard detail</h1>

            <main className="min-h-screen flex">

                {/* L */}

                <div className=" w-1/3 px-3 py-4">

                    <div className="grid sm:grid-cols-1 md:grid-cols-7  mt-5 ">


                        <div>{"<"}</div>
                        <div>8/1</div>
                        <div>8/2</div>
                        <div>8/3</div>
                        <div>8/4</div>
                        <div>8/5</div>
                        <div>{">"}</div>

                    </div>

                    <h1 className="text-xl">8月</h1>

                    {/*  訂單清單*/}
                    <div className="px-5 py-2  ">
                        <div className="flex my-3 border-none">
                            <h2 className="bg-red-500 block text-center rounded-full p-4 text-white border-none ">1</h2>
                        </div>

                        <ul class="list-disc ">
                            <button class=" bg-green-500 hover:bg-red-500 active:bg-green-700  block text-center py-1 mt-1 rounded-md text-white ">{">"}</button>

                            <li>訂單1(便當x10)
                                <ul className="m-2">
                                    <li>1號便當x10</li>
                                    <li>3號便當x10</li>
                                    <li>2號便當x10</li>
                                </ul>
                            </li>

                            <li>訂單2
                                <ul className="m-2">

                                    <li>1號便當x10</li>
                                    <li>3號便當x10</li>
                                    <li>2號便當x10</li>
                                </ul>
                            </li>
                        </ul>
                    </div>


                </div>


                {/* R */}
                <div className="w-2/3 px-3 py-4">
                    <h1 className="text-2xl min-h-[50px]">訂單1</h1>
                    {/* new */}

                    <div id="">
                        <table id="cart">
                            <thead>
                                <tr colspan="6">1號餐點</tr>
                                <tr>
                                    <th class="first">序列</th>
                                    <th class="second">飯量</th>
                                    <th class="third">特製</th>
                                    <th class="fourth">套餐升級</th>
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
                                </tr>

                            </tbody>
                        </table>

                        <table id="cart">
                            <thead>
                                <tr colspan="6">2號餐點</tr>
                                <tr>
                                    <th class="first">序列</th>
                                    <th class="second">飯量</th>
                                    <th class="third">特製</th>
                                    <th class="fourth">套餐升級</th>
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
                                </tr>
                                <tr class="productitm">
                                    <td>2</td>
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
                                </tr>
                                <tr class="productitm">
                                    <td>3</td>
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
                                </tr>

                            </tbody>
                            <tfoot >
                                {/* tax + subtotal  */}
                                <tr class="totalprice">
                                    <td class="light" colspan="1">總金額:</td>
                                    <td colspan="2"><span class="thick">$225.45</span></td>
                                    <td class="light" colspan="2"><button id="submitbtn">結帳</button></td>
                                </tr>
                            </tfoot>
                        </table>
                    </div>


                    <div id="">
                        <table id="cart">
                            <thead>
                                <tr colspan="6">訂購人資料</tr>
                                <tr>
                                    <th class="first">姓名</th>
                                    <th class="second">電話</th>
                                    <th class="third">付款狀態</th>
                                    <th class="fourth">下單時間</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/*shopping cart contents  */}

                                <tr class="productitm">
                                    <td>王小明</td>
                                    <td>0912-345-678</td>
                                    <td>已付款</td>
                                    <td>
                                        10:00
                                    </td>
                                </tr>

                            </tbody>
                        </table>

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





            <footer>
                <p>
                    CopyRight &copy; 2024
                </p>
            </footer>



        </>
    )
}