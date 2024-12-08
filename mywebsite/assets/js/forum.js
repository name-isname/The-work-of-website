document.addEventListener('DOMContentLoaded', function () {
    const postForm = document.getElementById('post-form');
    const postsList = document.getElementById('posts-list');

    // 模拟数据加载函数（在实际项目中，您应该从服务器获取数据）
    function loadPosts() {
        // 这里可以是 AJAX 请求或 Fetch API 调用
        return [
            { title: '帖子标题1', content: '帖子内容...', author: '作者名', date: '2024-12-01' },
            { title: '帖子标题2', content: '帖子内容...', author: '作者名', date: '2024-12-02' }
            // 更多的帖子...
        ];
    }

    // 渲染帖子列表
    function renderPosts(posts) {
        postsList.innerHTML = ''; // 清空现有帖子
        posts.forEach(post => {
            const postElement = document.createElement('article');
            postElement.classList.add('post-item');
            postElement.innerHTML = `
                <header>
                    <h4>${post.title}</h4>
                    <p>by ${post.author} on ${post.date}</p>
                </header>
                <p>${post.content}</p>
                <footer>
                    <button class="btn">回复</button>
                </footer>
            `;
            postsList.appendChild(postElement);
        });
    }

    // 初始化时加载帖子
    renderPosts(loadPosts());

    // 处理发帖表单提交
    postForm.addEventListener('submit', function (event) {
        event.preventDefault(); // 阻止默认提交行为

        // 获取用户输入
        const title = document.getElementById('post-title').value;
        const content = document.getElementById('post-content').value;

        if (!title || !content) {
            alert('请填写完整的帖子信息');
            return;
        }

        // 模拟发帖请求（此处应有实际的AJAX或Fetch API调用）
        console.log(`尝试发帖：标题=${title}, 内容=${content}`);

        // 模拟更新帖子列表
        const newPost = { title, content, author: '当前用户', date: new Date().toISOString().split('T')[0] };
        renderPosts([newPost, ...loadPosts()]);
    });

    // 简单的回复按钮点击处理
    postsList.addEventListener('click', function (event) {
        if (event.target.tagName.toLowerCase() === 'button') {
            alert('点击了回复按钮');
            // 在这里可以添加更多逻辑，比如显示评论框等
        }
    });
});