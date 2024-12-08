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