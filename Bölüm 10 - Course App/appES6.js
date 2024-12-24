class Course {
  constructor(title, instructor, image) {
    this.courseID = Math.floor(Math.random() * 10000);
    this.title = title;
    this.instructor = instructor;
    this.image = image;
  }
}

class UI {
  addCourseToList(course) {
    const list = document.getElementById("course-list");

    var html = `
            <tr>
                <td><img src="img/${course.image}"/></td>
                <td>${course.title}</td>
                <td>${course.instructor}</td>
                <td><a href="#" data-id="${course.courseID}" class="btn btn-danger btn-sm delete">Delete</td>
            </tr>
        `;

    list.innerHTML += html;
  }

  clearControls() {
    const title = (document.getElementById("title").value = "");
    const instructor = (document.getElementById("instructor").value = "");
    const image = (document.getElementById("image").value = "");
  }

  deleteCourse(element) {
    if (element.classList.contains("delete")) {
      element.parentElement.parentElement.remove();
    }
  }

  showAlert(message, messageType) {
    var alert = `
        <div class="alert alert-${messageType}">
            ${message}    
        </div>
    `;

    const row = document.querySelector(".row");

    // beforebegin, afterbegin, beforeend, afterend
    row.insertAdjacentHTML("beforebegin", alert);

    setTimeout(() => {
      document.querySelector(".alert").remove();
    }, 2000);
  }
}

class Storage {
  static getCourses() {
    let courses;

    if (localStorage.getItem("courses") === null) {
      courses = [];
    } else {
      courses = JSON.parse(localStorage.getItem("courses"));
    }

    return courses;
  }

  static displayCourses() {
    const courses = Storage.getCourses();

    courses.forEach((course) => {
      const ui = new UI();
      ui.addCourseToList(course);
    });
  }

  static addCourse(course) {
    const courses = Storage.getCourses();
    courses.push(course);
    localStorage.setItem("courses", JSON.stringify(courses));
  }

  static deleteCourse(element) {
    if (element.classList.contains("delete")) {
      const id = element.getAttribute("data-id");
      const courses = Storage.getCourses();

      courses.forEach((course, index) => {
        if (course.courseID == id) {
          courses.splice(index, 1);
        }
      });

      localStorage.setItem("courses", JSON.stringify(courses));
    }
  }
}

document.addEventListener("DOMContentLoaded", Storage.displayCourses);

const ui = new UI();
document.getElementById("new-course").addEventListener("submit", function (e) {
  const title = document.getElementById("title").value;
  const instructor = document.getElementById("instructor").value;
  const image = document.getElementById("image").value;

  // Create course object
  const course = new Course(title, instructor, image);

  if (title === "" || instructor === "" || image === "") {
    ui.showAlert("Please complete form!", "warning");
  } else {
    // Add to course list
    ui.addCourseToList(course);

    // Save to LocalStorage
    Storage.addCourse(course);

    // Clear controls
    ui.clearControls();

    ui.showAlert("Course has been added!", "success");
  }

  e.preventDefault();
});

document.getElementById("course-list").addEventListener("click", function (e) {
  ui.deleteCourse(e.target);
  Storage.deleteCourse(e.target);
  ui.showAlert("You deleted one course", "danger");
});
