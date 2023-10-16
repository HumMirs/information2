const name_input = document.getElementById("name_input");
const grade_input = document.getElementById("grade_input");
const class_input = document.getElementById("class_input");
const main_container = document.getElementById("main_container");
const ul_list = document.getElementById("ul_list");
const list_container = document.getElementById("list_container");

function addStudentData() {
  event.preventDefault();
  let student = {
    name: name_input.value,
    grade: grade_input.value,
    s_class: class_input.value,
  };

  let li1 = document.createElement("li");
  li1.innerText = student.name;

  let li2 = document.createElement("li");
  li2.innerText = student.grade;

  let li3 = document.createElement("li");
  li3.innerText = student.s_class;

  main_container.appendChild(list_container);
  list_container.appendChild(ul_list);
  ul_list.appendChild(li1);
  ul_list.appendChild(li2);
  ul_list.appendChild(li3);
}
