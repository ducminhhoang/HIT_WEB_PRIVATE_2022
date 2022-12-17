//cho object 

const obj = {
    name: "Hưng",
    age: 20,
    email: "dth27902@gamil.com"
}

//viết hàm run xử lý sao cho ra kết quả là một mảng như output dưới đây
//gợi ý: khởi tạo 1 array

const run = (o)=>{
    var arr = [
        "name: " + o.name, 
        "age: " + o.age,
        "email: " + o.email
    ];
    return arr;
}

console.log(run(obj));
console.log(2);
// Output:
// [
//      "name: Hưng",
//      "age: 20",
//      "emai: dth27902@gmail.com"
// ]
