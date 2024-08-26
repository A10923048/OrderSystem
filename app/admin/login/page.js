export default function AdminLoginPage() {
    return (
        <>
            <h1>Login</h1>

            <header className="bg-stone-300 text-center py-20 border-b-[1px] border-stone-400 shadow-2xl">
                <h1 className="text-stone-600">食見生活</h1>
                <p>育德店</p>
            </header>

            <section className="  py-20">

                <div className="grid place-items-center sm:grid-cols-1 md:grid-cols-1 gap-4 mb-5 ">
                    <div className=" content-center">
                        <div className="px-3 py-2">登入頁面</div>
                        <div className="px-3 py-2">
                            <form action="#" method="post">
                                <div className="form-group">
                                    <label for="username">帳號:</label>
                                    <input type="text" id="username" name="username" class="form-control" placeholder="請輸入帳號" required />
                                </div>
                                <div className="form-group">
                                    <label for="password">密碼:</label>
                                    <input type="password" id="password" name="password" class="form-control" placeholder="請輸入密碼" required />
                                </div>
                                <div className="text-center mt-4"> {/* 讓按鈕在這裡置中 */}
                                    <button type="submit" className="btn">
                                        登入
                                    </button>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>

            </section>


            <footer>
                <p>
                    CopyRight &copy; 2024
                </p>
            </footer>

        </>
    )
}