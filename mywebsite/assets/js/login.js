document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('login-form');

    // 处理登录表单提交
    loginForm.addEventListener('submit', function (event) {
        event.preventDefault(); // 阻止默认提交行为

        // 获取用户输入
        const email = document.getElementById('email-login').value;
        const password = document.getElementById('password-login').value;

        // 模拟登录请求（此处应有实际的AJAX或Fetch API调用）
        console.log(`尝试登录：邮箱=${email}, 密码=${password}`);

        // 假设登录成功后重定向到主页
        // window.location.href = '../index.html';
    });
});