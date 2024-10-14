const courseData = {
  react: {
    title: "React Course",
    price: "$7",
    description:
      " Dive into the world of modern web development with our comprehensive React course. React is a powerful JavaScript library for building user interfaces, particularly single-page applications where responsiveness and performance are key.",
    topics: [
      "Introduction to React",
      "Components and Props",
      "State Management",
      "React Hooks",
      "Routing with React Router",
      "Building Single Page Applications",
    ],
    importantInfo:
      "This course is suitable for both beginners and experienced developers.",
    image: "./assets/react.png",
  },
  node: {
    title: "Node.js Course",
    price: "$7",
    description: "Learn server-side programming with Node.js.",
    topics: [
      "Setting Up a Node Environment",
      "Building RESTful APIs",
      "Working with Express.js",
      "Database Integration (MongoDB)",
    ],
    importantInfo: "Prior knowledge of JavaScript is recommended.",
    image: "./assets/node.png",
  },
  mongodb: {
    title: "MongoDB Course",
    price: "$5",
    description: "Understand NoSQL databases with MongoDB.",
    topics: [
      "MongoDB Basics",
      "CRUD Operations",
      "Data Modeling",
      "Aggregation Framework",
    ],
    importantInfo:
      "This course is beginner-friendly and requires no prior experience.",
    image: "./assets/mongodb.png",
  },
  express: {
    title: "Express Course",
    price: "$5",
    description: "Build web applications using Express.js.",
    topics: [
      "Setting Up an Express Server",
      "Middleware and Routing",
      "Error Handling",
      "Connecting to Databases",
    ],
    importantInfo: "Familiarity with JavaScript and Node.js is beneficial.",
    image: "./assets/express.png",
  },

  angular: {
    title: "Angular Course",
    price: "$7",
    description: "Build web applications using Express.js.",
    topics: [
      "Setting Up an Express Server",
      "Middleware and Routing",
      "Error Handling",
      "Connecting to Databases",
    ],
    importantInfo: "Familiarity with JavaScript and Node.js is beneficial.",
    image: "./assets/anuglar.png",
  },
};

function pulldown_menu()
{

var url = document.pulldown.selectname.options[document.pulldown.selectname.selectedIndex].value

window.location.href = url        
}


function getQueryParam(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}

function loadCourseContent() {
  const tech = getQueryParam("tech");
  const course = courseData[tech] || {};

  const content = `
    <style> 
    .coursedet{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    .course-card-holder {
    width: 280px;
    height: 440px;
    background-color: white;
    border-radius: 10px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
    margin: 10px;
    display: inline-block;
    text-align: center;
  }

  .course-card-holder img {
    width: 280px;
    height: 230px;
    object-fit: cover;
    border-radius: 10px;
  }
  
  .detail-card{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 5px 20px;
  }

  .span-detial{
    display: flex;
    flex-direction: column;
    text-align: left;
    font-size: 15px;
  }

  .card-btn-cust{
    background-color: white;
    color: #333f2e;
    border: 1px solid #333f2e;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    width: 90%;
  }

  .card-btn-cust:hover{
    background-color: #333f2e;
    color: white;
    transition: 0.3s ease-in;
  }

  @media (max-width: 768px){
   .coursedet{
        flex-direction: column;
    }
}

    </style>

    <div class="coursedet">
    <div class=crs-head>    
    <h2>${course.title || "Course not found"}</h2>
        <h3>Course Description</h3>
        <p>In this course, you will learn:</p>
        <ul>
            ${
              course.topics
                ? course.topics.map((topic) => `<li>${topic}</li>`).join("")
                : ""
            }
        </ul>
        <h3>Important Information</h3>
        <p>${course.importantInfo || ""}</p>
        <form name="pulldown">
            <select name="selectname" SIZE="1" onChange="pulldown_menu()">
                <option value="">See Prequsites</option>
                <option value="https://www.w3schools.com/html/">HTML</option>            
                <option value="https://www.w3schools.com/css/">CSS</option>            
                <option value="https://www.w3schools.com/js/">JavaScript</option>                
            </select>
        </form>
    </div>
    <div class="course-card-holder">
              <img src="${course.image}" alt="Image 3" />
              <h3 class="desc">${course.title}</h3>
              <div class="detail-card">
                <div class="span-detial">
                  <span class="detail-bar"
                    ><i class="fa-solid fa-user"></i>&nbsp &nbspBy Tapan
                    Kumar</span
                  >
                  <span class="detail-bar">
                    <i class="fa-solid fa-clock"></i> &nbsp Duration:
                    75Hrs</span
                  >
                  <span class="detail-bar"
                    ><i class="fa-solid fa-people-arrows"></i>&nbsp 1:1 Doubt
                    Session</span
                  >
                </div>
                <h3
                  style="
                    text-align: center;
                    padding: 10px 10px;
                    background-color: rgb(233, 233, 193);
                    border-radius: 5px;
                  "
                >
                  ${course.price}
                </h3>
              </div>
              <button class="card-btn-cust" type="button">ENROLL</button>
            </div>
            </div>
    `;

  document.getElementById("courseContent").innerHTML = content;
}

window.onload = loadCourseContent;
