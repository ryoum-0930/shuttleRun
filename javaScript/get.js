import Repository from './repository'

// IDを付加したurl
axios.get(baseURL)

//thenで成功した場合
.then(function (response) {
    console.log(response);
})
//chachでエラーの挙動を定義
    .catch(function (error) {
        console.log(error);
    });