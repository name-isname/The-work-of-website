HTML部分：

包含了一个用户注册表单，表单中有多个字段，如

表单还包含一个验证码输入框，用户需要输入页面上显示的验证码。

JavaScript部分：
包含了多个函数，用于验证用户输入的数据是否符合要求。
checkAll()函数用于在表单提交时调用所有验证函数，并根据验证结果决定是否允许提交。
checkAccount()、checkPassword()、checkPassword_again()等函数分别用于验证账号、密码、确认密码等字段。
createCode()函数用于生成验证码，并显示在页面上。
validateCode()函数用于验证用户输入的验证码是否正确。
selectFile()函数用于处理文件上传，并在页面上显示预览图。
还有一些函数用于处理籍贯选择、日期选择等。

下面是我的注册页代码和引入的js文件，css文件，现在我想进行一定的修改，
我希望用户注册的表单中包含下面的多个字段
账号、密码、姓名、性别、出生日期、邮箱、电话号码
表单中的每个字段都有相应的提示和验证信息，用于指导用户输入和显示验证结果。
{
    <!DOCTYPE html>
<html lang="zh-CN">

<head>
    <meta charset="UTF-8">
    <title>心智探奇 - 用户注册</title>
    <link rel="stylesheet" href="../assets/css/style.css">
    <link rel="stylesheet" href="../assets/css/login_register.css"> <!-- 使用同一份样式表 -->
</head>

<body>
    <header>
        <nav>
            <ul class="left-side">
                <li><a href="../index.html">首页</a></li>
                <li><a href="selected_articles.html">精选文章</a></li>
                <li><a href="forum.html">论坛交流</a></li>
            </ul>
            <ul class="right-side">
                <li><a href="login.html">登录</a></li>
            </ul>
        </nav>
    </header>
    <main>
        <section id="register-section">
            <h2>用户注册</h2>
            <form id="register-form">
                <label for="username-register">用户名:</label>
                <input type="text" id="username-register" name="username" required>

                <label for="email-register">邮箱:</label>
                <input type="email" id="email-register" name="email" required>

                <label for="password-register">密码:</label>
                <input type="password" id="password-register" name="password" required>

                <label for="confirm-password-register">确认密码:</label>
                <input type="password" id="confirm-password-register" name="confirm_password" required>

                <button type="submit" class="btn">注册</button>
                <p>已有账号？<a href="login.html">立即登录</a></p>
            </form>
        </section>
    </main>
    <script src="../assets/js/register.js"></script> <!-- 新增的脚本文件 -->
</body>

</html>
}
js部分
{
 document.addEventListener('DOMContentLoaded', function () {
    const registerForm = document.getElementById('register-form');

    // 处理注册表单提交
    registerForm.addEventListener('submit', function (event) {
        event.preventDefault(); // 阻止默认提交行为

        // 获取用户输入
        const username = document.getElementById('username-register').value;
        const email = document.getElementById('email-register').value;
        const password = document.getElementById('password-register').value;
        const confirmPassword = document.getElementById('confirm-password-register').value;

        // 简单的前端验证（实际项目中应该更严格）
        if (password !== confirmPassword) {
            alert('密码和确认密码不匹配');
            return;
        }

        // 模拟注册请求（此处应有实际的AJAX或Fetch API调用）
        console.log(`尝试注册：用户名=${username}, 邮箱=${email}, 密码=${password}`);

        // 假设注册成功后重定向到登录页
        // window.location.href = 'login.html';
    });
});
}
css部分
{
    /* 登录和注册部分 */
#login-section,
#register-section {
    max-width: 400px;
    margin: auto;
    padding: 2rem;
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

#login-section h2,
#register-section h2 {
    text-align: center;
    margin-bottom: 1rem;
}

#login-section form,
#register-section form {
    display: flex;
    flex-direction: column;
}

#login-section label,
#register-section label {
    margin-bottom: 0.5rem;
}

#login-section input,
#register-section input {
    margin-bottom: 1rem;
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 3px;
}

#login-section .btn,
#register-section .btn {
    align-self: center;
}

#login-section p,
#register-section p {
    text-align: center;
}
}
