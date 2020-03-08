const slider = document.querySelectorAll(".slide");//获取所有的图片
const prev = document.querySelector("#prev");
const next = document.querySelector("#next");
const auto = true; //自动翻页
let slideInterval; //定时器
let intervalTime = 5000; //定时器时间
const nextSlide = () => {
  const current = document.querySelector(".current");
  // 如果有下一个兄弟元素,直接给下一个兄弟元素添加样式
  if (current.nextElementSibling) {
    current.nextElementSibling.classList.add('current');
  } else {
    // 否则是最后一个元素 直接给第一个元素添加样式
    slider[0].classList.add('current');
  }
  // 给下一个兄弟元素添加样式后 清除自己的样式
  setTimeout(() => current.classList.remove('current'));
}

const prevSlide = () => {
  const current = document.querySelector('.current');
  if (current.previousElementSibling) {
    current.previousElementSibling.classList.add('current');
  } else {
    slider[slider.length - 1].classList.add('current');
  }
  setTimeout(() => current.classList.remove('current'));
}
// 绑定事件
next.addEventListener('click', () => {
  nextSlide();
  /* 防止在手动轮播的时候 自动切换 */
  if (auto) {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, intervalTime);
  }
})

prev.addEventListener('click', () => {
  prevSlide();
  clearInterval(slideInterval);
  slideInterval = setInterval(nextSlide, intervalTime);
})

// 自动轮播
if (auto) {
  clearInterval(slideInterval);
  slideInterval = setInterval(nextSlide, intervalTime);
}