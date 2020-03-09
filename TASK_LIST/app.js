//获取结点
const form = document.querySelector("#task-form");
const taskInput = document.querySelector("#task");
const filter = document.querySelector("#filter");
const taskList = document.querySelector(".collection");
const clearBtn = document.querySelector(".clear-tasks");

// 加载所有事件监听
loadEventListeners();

function loadEventListeners() {
  // 添加任务
  form.addEventListener('submit', addTask);
  // 删除任务(单个)
  taskList.addEventListener('click', removeTask);
  // 清除所有任务
  clearBtn.addEventListener('click', clearTasks);
  // 过滤
  filter.addEventListener('keyup', filterTasks);
}

function addTask(e) {
  if (taskInput.value === "") {
    alert("Add a task");
  } else {
    // 创建li结点
    const li = document.createElement("li");
    // 添加li的类名
    li.className = "collection-item";
    //创建文本结点,插入li中
    li.appendChild(document.createTextNode(taskInput.value));
    // 创建a标签
    const link = document.createElement("a");
    link.className = "delete-item secondary-content";
    // 添加字体图标
    link.innerHTML = '<i class="fa fa-times"></i>';
    // 把a添加到li中
    li.appendChild(link);
    // 把li添加到ul中
    taskList.appendChild(li);
    // 清除输入框中的内容
    taskInput.value = "";
  }
  e.preventDefault(); //阻止a链接默认事件
}

function removeTask(e) {
  // 查找ul下li e.target查找事件元素里的最底部的元素也就是i标签    
  // contains()配对样式名称内容
  let a = e.target.parentElement.classList.contains("delete-item");
  if (a) {
    if (confirm("Are you Sure?")) {
      // 删除li
      e.target.parentElement.parentElement.remove();
    }
  }
}

function clearTasks() {
  // 方法1
  // taskList.innerHTML = "";
  // 方法2
  // 如果存在第一个子元素 就把第一个子元素删除
  while (taskList.firstChild) {
    taskList.removeChild(taskList.firstChild);
  }
}

function filterTasks(e) {
  let text = e.target.value.toLowerCase();
  document.querySelectorAll(".collection-item").forEach((task) => {
    const item = task.firstChild.textContent;
    if (item.toLowerCase().indexOf(text) != -1) {
      task.style.display = "block";
    } else {
      task.style.display = "none";
    }
  });
  // console.log(text);
}