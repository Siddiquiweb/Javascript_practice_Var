 // Profile Data
 const profile = {
    first_name: "Abdulrehman",
    last_name: "siddiqui",
    age: 20,
    contact: "+92 104587003",
    bio: "I am a student of Smit",
    education: "BS in Computer Science",
    skills: ["React.js", "Next.js", "javascript"],
    project_name: "Smit Dashboard ",
    project_detail: "This is a project on reactjs "
  };


  const profileHTML = `
    <h1>My Profile</h1>
    <div class="profile-detail"><span class="profile-label">Name:</span> ${profile.first_name} ${profile.last_name}</div>
    <div class="profile-detail"><span class="profile-label">Age:</span> ${profile.age}</div>
    <div class="profile-detail"><span class="profile-label">Contact:</span> ${profile.contact}</div>
    <div class="profile-detail"><span class="profile-label">Bio:</span> ${profile.bio}</div>
    <div class="profile-detail"><span class="profile-label">Education:</span> ${profile.education}</div>
    <div class="profile-detail">
      <span class="profile-label">Skills:</span> 
      <div class="skills">${profile.skills.map(skill => `<span>${skill}</span>`).join("")}</div>
    </div>
    <div class="profile-detail"><span class="profile-label">Project Name:</span> ${profile.project_name}</div>
    <div class="profile-detail"><span class="profile-label">Project Detail:</span> ${profile.project_detail}</div>
  `;

  // Inject into DOM
  document.getElementById("profile").innerHTML = profileHTML;