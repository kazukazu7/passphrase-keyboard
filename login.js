
var users = [
    { 'name': 'user', 'password_hash': '1234' },
    { 'name': 'user2', 'password_hash': '5678' }
];

var length = users.length;

$("p#welcome").html("ようこそ、ゲストさん");

$("p#logout").click(function (event) {
    $("p#welcome").html("ようこそ、ゲストさん");
});

$("input[type=submit]").click(function (event) {

    event.preventDefault();

    var user = $("input[type='text']").val();
    var password = $("input[type='password']").val();
    var is_error = true;

    $("input[type='password']").val("");

    for (var i = 0; i < length; ++i) {

        if (user === users[i].name && password === users[i].password_hash) {
            $("p#welcome").html("ようこそ、" + user + "さん");
            $("input[type='text']").val("");
            $("p#error_message").html("");
            is_error = false;
            break;
        }

    }

    if (is_error) {
        $("p#error_message").html("ユーザー名もしくはパスワードが正しくありません。");
    }
});
