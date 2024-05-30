// 获取导航栏中的所有链接
const navLinks = document.querySelectorAll('nav a');

// 遍历所有链接，并为其添加点击事件
for (let i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener('click', function(e) {
    // 阻止默认事件
    e.preventDefault();

    // 获取链接的href属性值
    const href = this.getAttribute('href');

    // 使用window.location.href跳转到指定页面
    window.location.href = href;
  });
}
