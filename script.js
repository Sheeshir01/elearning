// Load course details dynamically
function loadCourse(courseName) {
    const courseContent = document.getElementById('courseContent');
    const completeButton = document.getElementById('markComplete');
  
    let courseDetails = '';
  
    switch (courseName) {
      case 'HTML':
        courseDetails = '<h3>HTML Basics</h3><p>Learn the basics of HTML to structure your web pages.</p>';
        break;
      case 'CSS':
        courseDetails = '<h3>CSS Styling</h3><p>Learn how to style your web pages with CSS.</p>';
        break;
      case 'JavaScript':
        courseDetails = '<h3>JavaScript Fundamentals</h3><p>Understand the core concepts of JavaScript programming.</p>';
        break;
      default:
        courseDetails = '<p>Course not found.</p>';
    }
  
    courseContent.innerHTML = courseDetails;
    completeButton.style.display = 'inline-block';
  
    // Store current course selection in localStorage
    localStorage.setItem('currentCourse', courseName);
  }
  
  // Mark course as complete and track progress
  function completeCourse() {
    const courseName = localStorage.getItem('currentCourse');
    let progress = document.getElementById('progress');
  
    // Save completed course to localStorage
    let completedCourses = JSON.parse(localStorage.getItem('completedCourses')) || [];
    if (!completedCourses.includes(courseName)) {
      completedCourses.push(courseName);
      localStorage.setItem('completedCourses', JSON.stringify(completedCourses));
    }
  
    updateProgress();
  }
  
  // Update the progress tracker
  function updateProgress() {
    let progress = document.getElementById('progress');
    let completedCourses = JSON.parse(localStorage.getItem('completedCourses')) || [];
  
    if (completedCourses.length > 0) {
      progress.innerHTML = `<p>You have completed the following courses:</p><ul>`;
      completedCourses.forEach(course => {
        progress.innerHTML += `<li>${course}</li>`;
      });
      progress.innerHTML += `</ul>`;
    } else {
      progress.innerHTML = 'No courses completed yet.';
    }
  }
  
  // Load progress when the page is loaded
  window.onload = () => {
    updateProgress();
  };
  