document.addEventListener('DOMContentLoaded', function () {
    const registerForm = document.getElementById('register-form');
    const errorMessages = {
        account: '账号不能为空',
        username: '用户名不能为空',
        email: '邮箱格式不正确',
        password: '密码长度必须大于等于8个字符',
        confirmPassword: '两次输入的密码不一致',
        name: '姓名不能为空',
        gender: '请选择性别',
        dob: '请选择出生日期',
        phone: '电话号码格式不正确'
    };

    // 验证函数
    function validateField(fieldId, validationFunc) {
        const field = document.getElementById(`${fieldId}-register`);
        const errorMessage = document.getElementById(`${fieldId}-error`);
        const value = field.value.trim();

        if (validationFunc(value)) {
            errorMessage.style.display = 'none';
            return true;
        } else {
            errorMessage.textContent = errorMessages[fieldId];
            errorMessage.style.display = 'block';
            return false;
        }
    }

    // 实时验证
    ['account', 'username', 'email', 'password', 'confirm-password', 'name', 'gender', 'dob', 'phone'].forEach(id => {
        document.getElementById(`${id}-register`).addEventListener('blur', function () {
            let isValid = true;
            switch (id) {
                case 'account':
                    isValid = validateField(id, value => value.length > 0);
                    break;
                case 'username':
                    isValid = validateField(id, value => value.length > 0);
                    break;
                case 'email':
                    isValid = validateField(id, value => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value));
                    break;
                case 'password':
                    isValid = validateField(id, value => value.length >= 8);
                    break;
                case 'confirm-password':
                    isValid = validateField(id, value => value === document.getElementById('password-register').value);
                    break;
                case 'name':
                    isValid = validateField(id, value => value.length > 0);
                    break;
                case 'gender':
                    isValid = validateField(id, value => value !== '');
                    break;
                case 'dob':
                    isValid = validateField(id, value => value !== '');
                    break;
                case 'phone':
                    isValid = validateField(id, value => /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/.test(value));
                    break;
            }
        });
    });

    // 处理表单提交
    registerForm.addEventListener('submit', function (event) {
        event.preventDefault(); // 阻止默认提交行为

        let allValid = true;

        // 检查所有字段是否有效
        allValid &= validateField('account', value => value.length > 0);
        allValid &= validateField('username', value => value.length > 0);
        allValid &= validateField('email', value => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value));
        allValid &= validateField('password', value => value.length >= 8);
        allValid &= validateField('confirm-password', value => value === document.getElementById('password-register').value);
        allValid &= validateField('name', value => value.length > 0);
        allValid &= validateField('gender', value => value !== '');
        allValid &= validateField('dob', value => value !== '');
        allValid &= validateField('phone', value => /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/.test(value));

        if (!allValid) return;

        // 如果所有验证都通过，则继续处理注册逻辑
        console.log('注册信息已验证通过，可以提交...');
        // window.location.href = 'login.html'; // 注册成功后重定向到登录页
    });
});