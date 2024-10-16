const courseData = {
  react: {
    title: "React Course",
    price: "$7",
    description:
      "Dive into the world of modern web development with our comprehensive React course. React is a powerful JavaScript library developed by Facebook for building user interfaces, especially for single-page applications (SPAs). This course will guide you through the fundamentals of React, including its component-based architecture that allows for reusable UI components, state management, and virtual DOM manipulation. You'll learn how to create dynamic, responsive applications that deliver exceptional user experiences. Throughout the course you will learn be the best",
    topics: [
      "Introduction to React",
      "Components and Props",
      "State Management",
      "React Hooks",
      "Routing with React Router",
      "Building Single Page Applications",
      "Performance Optimization",
      "Testing React Applications",
      "Deployment Best Practices",
    ],
    importantInfo: [
      "Setting Up a Node Environment",
      "Building RESTful APIs",
      "Working with Express.js",
      "Database Integration (MongoDB)",
    ],
    targetAudience: "Beginners to intermediate web developers looking to learn React.",
    courseDuration: "8 weeks",
    prerequisites: "Basic understanding of HTML, CSS, and JavaScript. Familiarity with ES6+ features is helpful.",
    outline: {
      week1: "Introduction to React and Setting Up the Environment",
      week2: "Understanding JSX and Rendering Elements",
      week3: "Components and Props Management",
      week4: "State and Lifecycle Methods",
      week5: "Handling Events and Forms",
      week6: "Routing with React Router",
      week7: "State Management with Redux and Context API",
      week8: "Testing and Deploying React Applications",
    },
    image: "./assets/react.png",
    faq: [
      {
        question: "Do I need prior experience with JavaScript to take this course?",
        answer: "Yes, a basic understanding of JavaScript, HTML, and CSS is recommended."
      },
      {
        question: "What tools will I need to complete the course?",
        answer: "You'll need a code editor like VSCode, Node.js, and npm installed on your machine."
      },
      {
        question: "Will I receive a certificate upon completion?",
        answer: "Yes, you will receive a certificate of completion after finishing the course and the final project."
      },
      {
        question: "Are there any live coding sessions?",
        answer: "Yes, each session includes live coding examples and hands-on exercises."
      },
      {
        question: "Can I access course materials after completion?",
        answer: "Absolutely! You will have lifetime access to the course materials."
      },
    ],
  },
  node: {
    title: "Node.js Course",
    price: "$7",
    description: 
      "Learn server-side programming with Node.js, a powerful JavaScript runtime built on Chrome's V8 engine. This course provides a solid foundation in Node.js, covering key concepts such as asynchronous programming, event-driven architecture, and how to build scalable applications. You will learn to create RESTful APIs, work with middleware using Express.js, and integrate databases like MongoDB. Through practical exercises and projects, you'll gain the skills to build and deploy your own server-side applications, understanding how to handle data securely and efficiently.",
    topics: [
      "Setting Up a Node Environment",
      "Building RESTful APIs",
      "Working with Express.js",
      "Database Integration (MongoDB)",
      "Error Handling and Debugging",
      "Authentication and Authorization",
      "Asynchronous Programming in Node.js",
    ],
    importantInfo: [
      "Setting Up a Node Environment",
      "Building RESTful APIs",
      "Working with Express.js",
      "Database Integration (MongoDB)",
    ],
    targetAudience: "Aspiring back-end developers and those interested in server-side programming.",
    courseDuration: "6 weeks",
    prerequisites: "Basic knowledge of JavaScript.",
    outline: {
      week1: "Introduction to Node.js and Environment Setup",
      week2: "Creating Your First Server",
      week3: "Building RESTful APIs with Express.js",
      week4: "Database Integration with MongoDB",
      week5: "Error Handling and Middleware in Express",
      week6: "Authentication and Deploying Node Applications",
    },
    image: "./assets/node.png",
    faq: [
      {
        question: "What is Node.js used for?",
        answer: "Node.js is used for building server-side applications and RESTful APIs using JavaScript."
      },
      {
        question: "Do I need to know JavaScript to take this course?",
        answer: "Yes, a basic understanding of JavaScript is necessary."
      },
      {
        question: "Is this course suitable for complete beginners?",
        answer: "Not for complete beginners; prior JavaScript knowledge is required."
      },
      {
        question: "How is the course delivered?",
        answer: "The course is delivered through video lectures, coding exercises, and projects."
      },
      {
        question: "Will I have access to the instructor for questions?",
        answer: "Yes, you can ask questions during sessions and through course forums."
      },
    ],
  },
  mongodb: {
    title: "MongoDB Course",
    price: "$5",
    description: 
      "Understand NoSQL databases with MongoDB, a flexible, document-oriented database solution. This course covers everything from the basics of MongoDB architecture to advanced data management techniques. You'll learn how to perform CRUD (Create, Read, Update, Delete) operations, design data models that fit your application's needs, and utilize the aggregation framework for complex queries. Hands-on exercises will allow you to practice integrating MongoDB with Node.js applications, giving you the skills to manage data effectively in your projects.",
    topics: [
      "MongoDB Basics",
      "CRUD Operations",
      "Data Modeling",
      "Aggregation Framework",
      "Indexes and Performance",
      "Data Validation and Schema Design",
      "Integrating MongoDB with Node.js",
    ],
    importantInfo: [
      "Setting Up a Node Environment",
      "Building RESTful APIs",
      "Working with Express.js",
      "Database Integration (MongoDB)",
    ],
    targetAudience: "Developers and data enthusiasts looking to learn about NoSQL databases.",
    courseDuration: "4 weeks",
    prerequisites: "None.",
    outline: {
      week1: "Introduction to MongoDB and Installation",
      week2: "Understanding Documents and Collections",
      week3: "CRUD Operations and Data Modeling",
      week4: "Aggregation Framework and Performance Optimization",
    },
    image: "./assets/mongodb.png",
    faq: [
      {
        question: "What is MongoDB?",
        answer: "MongoDB is a NoSQL database that uses a document-oriented data model."
      },
      {
        question: "Do I need programming experience for this course?",
        answer: "No, this course is designed for complete beginners."
      },
      {
        question: "What tools will I need to use MongoDB?",
        answer: "You will need to install MongoDB and a MongoDB client, like Compass."
      },
      {
        question: "Can I use MongoDB with Node.js?",
        answer: "Yes, MongoDB is commonly used with Node.js for backend development."
      },
      {
        question: "Will I get hands-on experience?",
        answer: "Absolutely! The course includes practical exercises to reinforce your learning."
      },
    ],
  },
  express: {
    title: "Express Course",
    price: "$5",
    description: 
      "Build web applications using Express.js, a minimal and flexible Node.js web application framework. This course will teach you how to create robust and scalable server-side applications. You will learn to set up servers, manage middleware, handle routes, and implement error handling strategies. Additionally, the course covers connecting to various databases, ensuring that you can build complete applications from front to back. By the end of this course, you'll be equipped to develop full-stack applications that can handle real-world traffic and data.",
    topics: [
      "Setting Up an Express Server",
      "Middleware and Routing",
      "Error Handling",
      "Connecting to Databases",
      "RESTful API Development",
      "Session Management",
      "Security Best Practices",
    ],
    importantInfo: [
      "Setting Up a Node Environment",
      "Building RESTful APIs",
      "Working with Express.js",
      "Database Integration (MongoDB)",
    ],
    targetAudience: "Web developers who want to enhance their skills in building server-side applications.",
    courseDuration: "5 weeks",
    prerequisites: "Basic knowledge of JavaScript and Node.js.",
    outline: {
      week1: "Introduction to Express and Setting Up the Server",
      week2: "Routing and Middleware in Express",
      week3: "Error Handling and Debugging",
      week4: "Connecting to Databases",
      week5: "Building RESTful APIs with Express",
    },
    image: "./assets/express.png",
    faq: [
      {
        question: "What is Express.js?",
        answer: "Express.js is a web application framework for Node.js, designed for building web applications and APIs."
      },
      {
        question: "Is this course beginner-friendly?",
        answer: "Some familiarity with JavaScript and Node.js is recommended."
      },
      {
        question: "How long will I have access to the course materials?",
        answer: "You will have lifetime access to the course materials."
      },
      {
        question: "Are there projects included in this course?",
        answer: "Yes, you'll complete several hands-on projects to apply your skills."
      },
      {
        question: "What support is available if I have questions?",
        answer: "You can ask questions during live sessions and on the course forum."
      },
    ],
  },
  angular: {
    title: "Angular Course",
    price: "$7",
    description: 
      "Master Angular, a powerful framework for building dynamic web applications. This course provides an in-depth understanding of Angular's architecture, focusing on component-based design, data binding, and services. You will learn how to create responsive applications with rich user experiences using Angular's powerful features. The course covers routing, forms, and state management with NgRx, along with best practices for building maintainable and scalable applications. By the end of the course, you'll be able to confidently develop complex applications from scratch.",
    topics: [
      "Introduction to Angular",
      "Components and Templates",
      "Data Binding and Directives",
      "Services and Dependency Injection",
      "Routing and Navigation",
      "Forms and Validation",
      "State Management with NgRx",
      "Unit Testing in Angular",
    ],
    importantInfo: [
      "Setting Up a Node Environment",
      "Building RESTful APIs",
      "Working with Express.js",
      "Database Integration (MongoDB)",
    ],
    targetAudience: "Front-end developers looking to learn or upgrade their Angular skills.",
    courseDuration: "8 weeks",
    prerequisites: "Basic knowledge of HTML, CSS, and JavaScript. Familiarity with TypeScript is helpful.",
    outline: {
      week1: "Getting Started with Angular",
      week2: "Building Components and Templates",
      week3: "Understanding Data Binding and Directives",
      week4: "Creating Services and Dependency Injection",
      week5: "Routing and Navigation in Angular",
      week6: "Working with Forms and Validations",
      week7: "State Management with NgRx",
      week8: "Unit Testing and Best Practices in Angular",
    },
    image: "./assets/angular.png",
    faq: [
      {
        question: "What is Angular used for?",
        answer: "Angular is used for building dynamic single-page applications and complex web applications."
      },
      {
        question: "Do I need to know TypeScript for this course?",
        answer: "While it's beneficial, the course will cover TypeScript basics needed for Angular."
      },
      {
        question: "How is the course structured?",
        answer: "The course is structured with video lectures, coding exercises, and projects."
      },
      {
        question: "What if I miss a live session?",
        answer: "All sessions are recorded, and you can watch them later at your convenience."
      },
      {
        question: "Is there a final project for this course?",
        answer: "Yes, you'll complete a final project to showcase your skills and knowledge."
      },
    ],
  }
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

  const faqContent = course.faq.map((item, index) => `
    <div class="accordion-item">
      <h4 class="accordion-header" id="heading${index}">
        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${index}" aria-expanded="false" aria-controls="collapse${index}">
          ${item.question}
        </button>
      </h4>
      <div id="collapse${index}" class="accordion-collapse collapse" aria-labelledby="heading${index}" data-bs-parent="#accordionExample">
        <div class="accordion-body">
          ${item.answer}
        </div>
      </div>
    </div>
  `).join("");

  const content = `
    <style> 
      .outer-container {
    width: 90%;
    margin: 0;
    background-color: rgb(237, 255, 229);
    border-radius: 10px;
    box-shadow: 4px 10px 10px 10px rgba(0, 0, 0, 0.1);
    padding: 50px;
    color: #333f2e;
font-family: "Kanit", sans-serif;  }

.container{
    display: flex;
    flex-direction: row;
    justify-content:space-evenly;
    align-items: center;
    gap: 20px;
}

.course-name{
    display: flex;
    flex-direction: column;
    flex: 1.2;
    gap: 20px
}

.course-status{
    display: flex;
    flex-direction: column;
    gap: 2px;
    justify-content: start;
}

.upper-data{
    display: flex;
    flex-direction: row;
    gap: 30px;
}


.title-heading{
    font-size: 65px;
    font-weight: 700;
    margin: 0;
}

.course-prices{
    display: flex;
    flex-direction: row;
    gap: 50px;
    text-align: center;
    align-items: center;
}

.prices{
    font-size: 35px;
    font-weight: 600;
}

.button-custum{
    background-color: #333f2e;
    color: white;
    border: 1px solid #333f2e;
    border-radius: 5px;
    cursor: pointer;
    padding: 17px 25px;
    text-align: center;
    text-decoration: none;
}

.button-custum:hover{
    background-color: white;
    color: #333f2e ;
}

.course-image{
    flex: 1;
    display: flex;
    justify-content: end;
}

.imageee{
    width: 80%;
}

.course_sec_two{
    display: flex;
    flex-direction: row;
    gap: 30px;
    justify-content: space-evenly;
    align-items: center;
    padding: 30px 0px;
}

.course-dec{
    flex: 1;
}

.course-dec-head{
    font-size: 35px;
    font-weight: bold;
}

.course-cards{
    display: flex;
    flex-direction: row;
    gap: 10px;
    flex: 1;
}

.course-card-one{
    background-color: #f5f5f5;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 4px 10px 10px 10px rgba(0, 0, 0, 0.1);
    width: 100%;
    height: 270px;
  }

.course-content{
    padding: 30px 0px;
    text-align: center;
}

.course-content-heading{
    font-size: 40px;
}

.ul-list{
    text-align:justify;
    font-size: 20px;
    list-style-type :none;
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.listing{
    width: 90%;
    background-color: white;
    padding: 20px ;
    border-radius: 10px;
    box-shadow: 4px 10px 10px 10px rgba(0, 0, 0, 0.1);
    margin-bottom: 10px;
}


.course-insturctor{
    display: flex;
    justify-content: space-evenly;
    gap: 50px;
}

.course-insturctor-heading{
    font-size: 35px;
    font-weight: bold;
}

.course-insturctor-name{
    font-size: 25px;
    font-weight: bold;
}

.imageeeeee{
    width: 100%;
    max-height: 800px;
}

.course-card-head{
  font-weight: bold;
}

.course-dec-data{
  justify-self: justify;
}

@media (max-width: 768px) {

  .outer-container{
    width: 95%;
    padding: 30px 15px;
  }
  .container{
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .course-name{
    text-align: center;
  }

  .upper-data{
    align-item: center;
    justify-content: center;
  }

  .course-prices{
    justify-content: center;
  }

  .course-image{
    justify-content: center;
  }

  .course_sec_two, .course-cards, .course-insturctor{
    flex-direction: column;
  }

  .ul-list{
    font-size:17px;
  }

  .listing{
    padding: 15px 10px;
    width: 100%;
  }

}


    </style>

    <div class="outer-container">
        <div class="container">
            <div class="course-name">
                <div class="course-status">
                <div class="upper-data">
                    <div class="upper_one">
                        <i style="color: gold;" class="fa-solid fa-chart-simple"></i> 
                        Beginning
                    </div>
                    <div class="upper_two">
                        <i style="color: gold;" class="fa-solid fa-clock"></i>
                        ${course.courseDuration}
                    </div>
                </div>
                <div class="course-title">
                    <h1 class="title-heading">${course.title}</h1>
                </div>
            </div>
                <div class="course-prices">
                    <h2 class="prices">
                     ${course.price}
                    </h2>
                    <a class="button-custum" href="#">ENROLL</a>
                </div>
            </div>

            <div class="course-image">
                <img class="imageee" src="${course.image}" alt="Course Image">
            </div>
            
        </div>

        <div class="course_sec_two">
            <div class="course-cards">
                <div class="course-card-one">
                    <i style="color: gold; font-size:30px;" class="fa-solid fa-school"></i>
                    <h4 class="course-card-head">
                        What you will learn
                    </h4>
                   ${course.importantInfo.map(topic => `<span class="course-card-spans">${topic}</li>`).join("")}
                </div>
                <div class="course-card-one">
                    <i style="color: gold; font-size:30px;" class="fa-solid fa-people-group"></i>
                    <h4 class="course-card-head">
                        Target Audience of course
                    </h4>
                    <span class="course-card-spans">${course.targetAudience}</span>
                </div>
            </div>
            <div class="course-dec">
                <h3 class="course-dec-head">
                    Course Description
                </h3>
                <span class="course-dec-data">
                    ${course.description}
                </span>
            </div>
            </div>

            <div class="course-content">
                <div class="course-content-heading">
                    <h3>Course Content</h3>
                </div>
                <div class="course-content-data">
                    <div class="course-content-details">
                        <ul class="ul-list">
                        ${Object.entries(course.outline).map(([week, topic]) => 
                          `<li class="listing"><span style="color: gold; font-weight: 500; ">${week.charAt(0).toUpperCase() + week.slice(1)}:</span> ${topic}</li>`
                      ).join("")}
                                    </ul>
                    </div>

                    <!-- <div class="course-content-image">
                        <img src="https://static.vecteezy.com/system/resources/previews/006/800/441/non_2x/react-native-mobile-app-illustration-exclusive-design-vector.jpg" alt="Course Image">
                    </div> -->
                </div>
            </div>

            <div class="course-insturctor">
                <div class="course-insturctor-image">
                    <img class="imageeeeee" src="./assets/teacher.png" alt="Course Image">
                </div>
                <div class="course-insturctor-detail">
                    <h3 class="course-insturctor-heading">
                        Course Insturctor
                    </h3>
                    <h4 class="course-insturctor-name">
                        Tapan Kumar
                    </h4>
                    <h5 class="course-insturctor-role">
                        Full Stack Developer/Coorporate Instructor
                    </h5>
                    <div class="small-data">
                        <span class="experience">
                            Experience: 20 Years
                        </span>
                        <br>
                        <span class="instructor-reviews">
                            Reviews: ⭐⭐⭐⭐⭐
                        </span>
                    </div>
                    <div class="course-insturctor-desc">
                        Tapan is a software engineer with 20+ years of experience in React, Node.js, MongoDB, and other technologies. He is passionate about learning new technologies and sharing his knowledge with others. He has a strong background in computer science and a love for teaching.
                    </div>
                </div>
            </div>

            <div class="course-ques" style="padding: 40px 0px;">
            <h3>Frequently Asked Questions</h3>
            <div class="accordion" id="accordionExample">
                ${faqContent}
            </div>
            </div>

    </div>
  `;

  document.getElementById("courseContent").innerHTML = content;
}

window.onload = loadCourseContent;
