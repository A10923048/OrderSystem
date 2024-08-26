export default function AdminDashboardPage() {
    return (
        <>
            <h1>訂單總表</h1>


            {/* <section className="  py-20">
                <div>
                    <h2>flex</h2>
                </div>
                <div class="grid grid-cols-7 gap-4 place-items-center  h-56">
                    <div>01</div>
                    <div>02</div>
                    <div>03</div>
                    <div>04</div>
                    <div>05</div>
                    <div>06</div>
                    <div>07</div>
                    <div>01</div>
                    <div>02</div>
                    <div>03</div>
                    <div>04</div>
                    <div>05</div>
                    <div>06</div>
                    <div>07</div>
                    <div>01</div>
                    <div>02</div>
                    <div>03</div>
                    <div>04</div>
                    <div>05</div>
                    <div>06</div>
                    <div>07</div>
                    <div>01</div>
                    <div>02</div>
                    <div>03</div>
                    <div>04</div>
                    <div>05</div>
                    <div>06</div>
                    <div>07</div>
                </div>
            </section> */}


            <main className="min-h-screen flex">

                {/* R */}
                <div className=" px-3 py-4">
                    <h1 className="text-xl">8月</h1>

                    <div className="grid sm:grid-cols-1 md:grid-cols-7  mt-5 ">


                        <div>日</div>
                        <div>ㄧ</div>
                        <div>二</div>
                        <div>三</div>
                        <div>四</div>
                        <div>五</div>
                        <div>六</div>



                        {/* 非當月日期 的元件格式*/}
                        <div className="px-5 py-2 bg-slate-300 ">
                        </div>
                        <div className="px-5 py-2 bg-slate-300 ">
                        </div>
                        <div className="px-5 py-2 bg-slate-300 ">
                        </div>

                        {/* 一張卡片 的元件格式*/}
                        <div className="px-5 py-2  ">
                            <div className="flex my-3 border-none">
                                <h2 className="bg-red-500 block text-center rounded-full p-4 text-white border-none ">1</h2>
                            </div>

                            <ul class="list-disc ">
                                <li >訂單1(便當x10)
                                </li>
                                <li>訂單2
                                </li>
                            </ul>
                        </div>
                        {/* 一張卡片 的元件格式*/}
                        <div className="px-5 py-2  ">
                            <div className="flex my-3 border-none">
                                <h2 className="bg-red-500 block text-center rounded-full p-4 text-white border-none ">1</h2>
                            </div>

                            <ul class="list-disc ">
                                <li>訂單1
                                </li>
                                <li>訂單2
                                </li>
                                <li>訂單3
                                </li>
                            </ul>
                        </div>
                        {/* 一張卡片 的元件格式*/}
                        <div className="px-5 py-2  ">
                            <div className="flex my-3 border-none">
                                <h2 className="bg-red-500 block text-center rounded-full p-4 text-white border-none ">1</h2>
                            </div>

                            <ul class="list-disc ">
                                <li>訂單1
                                </li>
                                <li>訂單2
                                </li>
                                <li>訂單3
                                </li>
                            </ul>
                        </div>
                        {/* 一張卡片 的元件格式*/}
                        <div className="px-5 py-2  ">
                            <div className="flex my-3 border-none">
                                <h2 className="bg-red-500 block text-center rounded-full p-4 text-white border-none ">1</h2>
                            </div>

                            <ul class="list-disc ">
                                <li>訂單1
                                </li>
                                <li>訂單2
                                </li>
                                <li>訂單3
                                </li>
                            </ul>
                        </div>
                        {/* 一張卡片 的元件格式*/}
                        <div className="px-5 py-2  ">
                            <div className="flex my-3 border-none">
                                <h2 className="bg-red-500 block text-center rounded-full p-4 text-white border-none ">1</h2>
                            </div>

                            <ul class="list-disc ">
                                <li>訂單1
                                </li>
                                <li>訂單2
                                </li>
                                <li>訂單3
                                </li>
                            </ul>
                        </div>
                        {/* 一張卡片 的元件格式*/}
                        <div className="px-5 py-2  ">
                            <div className="flex my-3 border-none">
                                <h2 className="bg-red-500 block text-center rounded-full p-4 text-white border-none ">1</h2>
                            </div>

                            <ul class="list-disc ">
                                <li>訂單1
                                </li>
                                <li>訂單2
                                </li>
                                <li>訂單3
                                </li>
                            </ul>
                        </div>

                        {/* 一張卡片 的元件格式*/}
                        <div className="px-5 py-2  ">
                            <div className="flex my-3 border-none">
                                <h2 className="bg-red-500 block text-center rounded-full p-4 text-white border-none ">1</h2>
                            </div>

                            <ul class="list-disc ">
                                <li>訂單1
                                </li>
                                <li>訂單2
                                </li>
                                <li>訂單3
                                </li>
                            </ul>
                        </div>
                        {/* 一張卡片 的元件格式*/}
                        <div className="px-5 py-2  ">
                            <div className="flex my-3 border-none">
                                <h2 className="bg-red-500 block text-center rounded-full p-4 text-white border-none ">1</h2>
                            </div>

                            <ul class="list-disc ">
                                <li >訂單1(便當x10)
                                </li>
                                <li>訂單2
                                </li>
                            </ul>
                        </div>
                        {/* 一張卡片 的元件格式*/}
                        <div className="px-5 py-2  ">
                            <div className="flex my-3 border-none">
                                <h2 className="bg-red-500 block text-center rounded-full p-4 text-white border-none ">1</h2>
                            </div>

                            <ul class="list-disc ">
                                <li>訂單1
                                </li>
                                <li>訂單2
                                </li>
                                <li>訂單3
                                </li>
                            </ul>
                        </div>
                        {/* 一張卡片 的元件格式*/}
                        <div className="px-5 py-2  ">
                            <div className="flex my-3 border-none">
                                <h2 className="bg-red-500 block text-center rounded-full p-4 text-white border-none ">1</h2>
                            </div>

                            <ul class="list-disc ">
                                <li>訂單1
                                </li>
                                <li>訂單2
                                </li>
                                <li>訂單3
                                </li>
                            </ul>
                        </div>
                        {/* 一張卡片 的元件格式*/}
                        <div className="px-5 py-2  ">
                            <div className="flex my-3 border-none">
                                <h2 className="bg-red-500 block text-center rounded-full p-4 text-white border-none ">1</h2>
                            </div>

                            <ul class="list-disc ">
                                <li>訂單1
                                </li>
                                <li>訂單2
                                </li>
                                <li>訂單3
                                </li>
                            </ul>
                        </div>
                        {/* 一張卡片 的元件格式*/}
                        <div className="px-5 py-2  ">
                            <div className="flex my-3 border-none">
                                <h2 className="bg-red-500 block text-center rounded-full p-4 text-white border-none ">1</h2>
                            </div>

                            <ul class="list-disc ">
                                <li>訂單1
                                </li>
                                <li>訂單2
                                </li>
                                <li>訂單3
                                </li>
                            </ul>
                        </div>
                        {/* 一張卡片 的元件格式*/}
                        <div className="px-5 py-2  ">
                            <div className="flex my-3 border-none">
                                <h2 className="bg-red-500 block text-center rounded-full p-4 text-white border-none ">1</h2>
                            </div>

                            <ul class="list-disc ">
                                <li>訂單1
                                </li>
                                <li>訂單2
                                </li>
                                <li>訂單3
                                </li>
                            </ul>
                        </div>
                        {/* 一張卡片 的元件格式*/}
                        <div className="px-5 py-2  ">
                            <div className="flex my-3 border-none">
                                <h2 className="bg-red-500 block text-center rounded-full p-4 text-white border-none ">1</h2>
                            </div>

                            <ul class="list-disc ">
                                <li >訂單1(便當x10)
                                </li>
                                <li>訂單2
                                </li>
                            </ul>
                        </div>
                        {/* 一張卡片 的元件格式*/}
                        <div className="px-5 py-2  ">
                            <div className="flex my-3 border-none">
                                <h2 className="bg-red-500 block text-center rounded-full p-4 text-white border-none ">1</h2>
                            </div>

                            <ul class="list-disc ">
                                <li>訂單1
                                </li>
                                <li>訂單2
                                </li>
                                <li>訂單3
                                </li>
                            </ul>
                        </div>
                        {/* 一張卡片 的元件格式*/}
                        <div className="px-5 py-2  ">
                            <div className="flex my-3 border-none">
                                <h2 className="bg-red-500 block text-center rounded-full p-4 text-white border-none ">1</h2>
                            </div>

                            <ul class="list-disc ">
                                <li>訂單1
                                </li>
                                <li>訂單2
                                </li>
                                <li>訂單3
                                </li>
                            </ul>
                        </div>
                        {/* 一張卡片 的元件格式*/}
                        <div className="px-5 py-2  ">
                            <div className="flex my-3 border-none">
                                <h2 className="bg-red-500 block text-center rounded-full p-4 text-white border-none ">1</h2>
                            </div>

                            <ul class="list-disc ">
                                <li>訂單1
                                </li>
                                <li>訂單2
                                </li>
                                <li>訂單3
                                </li>
                            </ul>
                        </div>
                        {/* 一張卡片 的元件格式*/}
                        <div className="px-5 py-2  ">
                            <div className="flex my-3 border-none">
                                <h2 className="bg-red-500 block text-center rounded-full p-4 text-white border-none ">1</h2>
                            </div>

                            <ul class="list-disc ">
                                <li>訂單1
                                </li>
                                <li>訂單2
                                </li>
                                <li>訂單3
                                </li>
                            </ul>
                        </div>
                        {/* 一張卡片 的元件格式*/}
                        <div className="px-5 py-2  ">
                            <div className="flex my-3 border-none">
                                <h2 className="bg-red-500 block text-center rounded-full p-4 text-white border-none ">1</h2>
                            </div>

                            <ul class="list-disc ">
                                <li>訂單1
                                </li>
                                <li>訂單2
                                </li>
                                <li>訂單3
                                </li>
                            </ul>
                        </div>
                        {/* 一張卡片 的元件格式*/}
                        <div className="px-5 py-2  ">
                            <div className="flex my-3 border-none">
                                <h2 className="bg-red-500 block text-center rounded-full p-4 text-white border-none ">1</h2>
                            </div>

                            <ul class="list-disc ">
                                <li>訂單1
                                </li>
                                <li>訂單2
                                </li>
                                <li>訂單3
                                </li>
                            </ul>
                        </div>
                        {/* 一張卡片 的元件格式*/}
                        <div className="px-5 py-2  ">
                            <div className="flex my-3 border-none">
                                <h2 className="bg-red-500 block text-center rounded-full p-4 text-white border-none ">1</h2>
                            </div>

                            <ul class="list-disc ">
                                <li >訂單1(便當x10)
                                </li>
                                <li>訂單2
                                </li>
                            </ul>
                        </div>
                        {/* 一張卡片 的元件格式*/}
                        <div className="px-5 py-2  ">
                            <div className="flex my-3 border-none">
                                <h2 className="bg-red-500 block text-center rounded-full p-4 text-white border-none ">1</h2>
                            </div>

                            <ul class="list-disc ">
                                <li>訂單1
                                </li>
                                <li>訂單2
                                </li>
                                <li>訂單3
                                </li>
                            </ul>
                        </div>
                        {/* 一張卡片 的元件格式*/}
                        <div className="px-5 py-2  ">
                            <div className="flex my-3 border-none">
                                <h2 className="bg-red-500 block text-center rounded-full p-4 text-white border-none ">1</h2>
                            </div>

                            <ul class="list-disc ">
                                <li>訂單1
                                </li>
                                <li>訂單2
                                </li>
                                <li>訂單3
                                </li>
                            </ul>
                        </div>


                        {/* 非當月日期 的元件格式*/}
                        <div className="px-5 py-2 bg-slate-300 ">
                        </div>
                        <div className="px-5 py-2 bg-slate-300 ">
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