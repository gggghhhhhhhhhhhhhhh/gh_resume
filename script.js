/**
 * 龚欢 个人简历 - 交互脚本
 */
document.addEventListener('DOMContentLoaded', function () {

    // ========== 导航高亮 ==========
    var sections = document.querySelectorAll('section[id], header[id]');
    var navLinks = document.querySelectorAll('.nav-links a');

    function updateActiveLink() {
        var current = '';
        sections.forEach(function (section) {
            if (window.scrollY >= section.offsetTop - 100) {
                current = section.getAttribute('id');
            }
        });
        navLinks.forEach(function (link) {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) {
                link.classList.add('active');
            }
        });
    }
    window.addEventListener('scroll', updateActiveLink);
    updateActiveLink();

    // ========== 平滑滚动 ==========
    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
        anchor.addEventListener('click', function (e) {
            var target = document.getElementById(this.getAttribute('href').substring(1));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // ========== 图片点击放大 ==========
    var overlay = document.createElement('div');
    overlay.className = 'lightbox-overlay';
    overlay.innerHTML = '<img src="" alt="放大预览">';
    document.body.appendChild(overlay);

    overlay.addEventListener('click', function () {
        overlay.classList.remove('active');
    });
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') overlay.classList.remove('active');
    });

    document.querySelectorAll('.project-images img, .pub-images img').forEach(function (img) {
        img.addEventListener('click', function (e) {
            e.stopPropagation();
            overlay.querySelector('img').src = this.src;
            overlay.classList.add('active');
        });
    });

});