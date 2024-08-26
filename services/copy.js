// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { useEffect } from "react";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBNJM_uCwbWb5UA91qpa8Jcy6sXu1cSYsg",
    authDomain: "ordersystem-baefe.firebaseapp.com",
    projectId: "ordersystem-baefe",
    storageBucket: "ordersystem-baefe.appspot.com",
    messagingSenderId: "485153349149",
    appId: "1:485153349149:web:4f1934db9e6d8ed3d0f0f4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//宣告db，用來接收 getFirestore() 函数返回的 Firestore 值。
const db = getFirestore();


// useEffect(() =>{},[]);

// useEffect(() => {
//    function fetchData(){
//    // 貼上程式碼

//    }
// }, []);

useEffect(() => {
    //增加async同步的
    function fetchData() {
        // 貼上(取得子集合中的所有文件)程式碼
        const { collection, getDocs } = require("firebase/firestore");
        // Query a reference to a subcollection
        const querySnapshot = await getDocs(collection(db, "cities", "SF", "landmarks"));
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
        });
    }
}, []);



useEffect(() => {
    // 定义一个异步函数 fetchData，用于获取数据
    async function fetchData() {
        // 从 Firebase Firestore 数据库中的 "productList" 集合获取文档快照
        const querySnapshot = await getDocs(collection(db, "productList"));

        // 创建一个新的空数组，用于存放获取到的产品数据
        const newProductList = [];

        // 遍历文档快照中的每一个文档
        querySnapshot.forEach((doc) => {
            // 将每个文档的数据（即产品数据）添加到新数组中
            newProductList.push(doc.data());
        });

        // 打印新数组到控制台，方便调试
        console.log(newProductList);

        // 将新数组设置到组件的状态中
        setProductList(newProductList);
    }

    // 调用异步函数 fetchData
    fetchData();
}, []); // 依赖数组为空，表示这个 useEffect 只在组件挂载时运行一次
