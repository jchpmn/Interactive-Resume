// Contains the biographical information of the person
var bio = {
	"name": "Joseph Chapman",
	"role": "Web Developer",
	"contacts": {
		"mobile": "314-583-5727",
		"email": "josephchapman@hotmail.com",
		"linkedin": "jchpmn",
		"github": "jchpmn",
		"location": "O'Fallon, MO"
	},
	"welcomeMessage" : "Welcome To My Resume Page!",
	"skills": ["Fast Learner", "Embraces Challenges", "Excellent Communication Skills", "Passionate About Solving Problems"],
	"biopic": "images/me.jpg"
};

// Function takes the biographical information and appends it to be displayed in the header section
bio.display = function() {

		// Biographical information to be displayed
		var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
		$("#header").prepend(formattedRole);
		var formattedName = HTMLheaderName.replace("%data%", bio.name);
		$("#header").prepend(formattedName);
		var formattedBiopic = HTMLbioPic.replace("%data%", bio.biopic);
		$("#header").append(formattedBiopic);
		var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
		$("#header").append(formattedWelcomeMsg);

		// Contact information is appended to the webpage in the header and footer sections
		var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
        $("#topContacts, #footerContacts").append(formattedMobile);
        var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
        $("#topContacts, #footerContacts").append(formattedEmail);
        var formattedLinkedIn = HTMLtwitter.replace("%data%", bio.contacts.linkedin);
        $("#topContacts, #footerContacts").append(formattedLinkedIn);
        var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
        $("#topContacts, #footerContacts").append(formattedGithub);
        var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
        $("#topContacts, #footerContacts").append(formattedLocation);

    	$("#header").append(HTMLskillsStart);

		// Iterates through the skills array
		for (s = 0; s < bio.skills.length; s++) {

    		// Skills information is appended to the webpage
    		var formattedSkill = HTMLskills.replace("%data%", bio.skills[s]);
    		$("#skills").append(formattedSkill);
    	}
};

bio.display();

// Contains the educational history of the person
var education = {

	// Schools attended information
	"schools": [
		{
			"name": "St. Louis University",
			"location": "St. Louis, MO",
			"degree": "Bachelors",
			"majors": ["Computer Science"],
			"dates": "2002",
			"url": "https://www.slu.edu/"
		},
		{
			"name": "Georgia Military College",
			"location": "Milledgeville, GA",
			"degree": "Associates",
			"majors": ["Nuclear Science Technology"],
			"dates": "1996",
			"url": "http://www.gmc.edu/"
		}
	],
	// Online courses taken information
	"onlineCourses": [
		{
			"title": "Intro to Programming",
			"school": "Udacity",
			"dates": "2016",
			"url": "https://www.udacity.com/"
		}
	]
};

// Function takes the education information and appends it to be displayed in the body
education.display = function() {

	// Iterates through each school's information
	for (i = 0; i < education.schools.length; i++) {

		// Create new div for education
		$("#education").append(HTMLschoolStart);

		// School information is appended to the webpage
		var formattedName = HTMLschoolName.replace("%data%", education.schools[i].name);
		$(".education-entry:last").append(formattedName);
		var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
		$(".education-entry:last").append(formattedLocation);
		var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
		$(".education-entry:last").append(formattedDegree);
		var formattedMajors = HTMLschoolMajor.replace("%data%", education.schools[i].majors);
		$(".education-entry:last").append(formattedMajors);
		var formattedDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
		$(".education-entry:last").append(formattedDates);
		var formattedUrl = HTMLschoolURL.replace("%data%", education.schools[i].url);
		$(".education-entry:last").append(formattedUrl);
	}

	$("#education").append(HTMLonlineClasses);

	// Iterates through the online course information
	for (c = 0; c < education.onlineCourses.length; c++) {

		// Online course information is appended to the webpage
		var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[c].title);
		$("#education").append(formattedOnlineTitle);
		var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[c].school);
		$("#education").append(formattedOnlineSchool);
		var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[c].dates);
		$("#education").append(formattedOnlineDates);
		var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[c].url);
		$("#education").append(formattedOnlineURL);
	}
};

education.display();

// Contains the work history of the person
var work = {
	"jobs": [
		{
			"employer": "AT&T",
			"title": "Telecommunications Technician",
			"location": "St. Charles, MO",
			"dates": "2000 - 2016",
			"description": "Maintained and repaired DSL and telephone circuits.",
		},
		{
			"employer": "Verizon - MCI WorldCom",
			"title": "Frame Relay Technician",
			"location": "Weldon Springs, MO",
			"dates": "1998 - 2000",
			"description": "Provisioned and maintained frame relay circuits.",
		},
		{
			"employer": "Continental Commercial Products",
			"title": "Machine Maintenance Technician",
			"location": "St. Louis, MO",
			"dates": "1996 - 1998",
			"description": "Provisioned and maintained frame relay circuits.",
		},
		{
			"employer": "U.S. Navy",
			"title": "Nuclear Electrician",
			"location": "Kings Bay, GA",
			"dates": "1990 - 1996",
			"description": "Maintained and operated a nuclear power plant on a nuclear submarine."
		}
	]
};

// Function takes the work information and appends it to be displayed in the body
work.display = function() {

	// Iterates through each job's information
	for (i = 0; i < work.jobs.length; i++) {

		// Create new div for work experience
		$("#workExperience").append(HTMLworkStart);

		// Concat employer and title
		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		$(".work-entry:last").append(formattedEmployerTitle);

		// Work information is appended to the webpage
		var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
		$(".work-entry:last").append(formattedWorkLocation);
		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
		$(".work-entry:last").append(formattedDates);
		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);
		$(".work-entry:last").append(formattedDescription);
	}
};

work.display();

// Contains the project variables
var projects = {
	"projects": [
		{
			"title": "American Pennies Webpage",
			"dates": "2016",
			"description": "A webpage built using HTML and CSS, this project demonstrates knowledge of basic website design.",
			"images": [
				"images/pennies.jpg",
			]
		},
		{
			"title": "A Python Programming Quiz",
			"dates": "2016",
			"description": "A fill-in-the blanks type quiz to leverage the power of functions in Python and demonstrates the ability to automate repetitive tasks that can be done on a computer.",
			"images": [
				"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQqii0ss01mqBqsslnMPUNpmb05IGFi9BoaEcTMbNHttxcyYV1S",
				"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTyMe080iYGM8iugRfepCoxU4ct3XOy--yy3OXeQiwM-KNHKrWr"
			]
		},
		{
			"title": "Create a Movie Website",
			"dates": "2016",
			"description": "A movie website with images and trailers that demonstrates knowledge of Object Oriented Programming.",
			"images": [
				"images/movies.jpg",
			]
		},
		{
			"title": "Interactive Resume",
			"dates": "2016",
			"description": "An interactive resume application that reads all data from a JSON file and then dynamically modifies the DOM to display the information.",
			"images": [
				"images/resume.jpg",
			]
		}
	]
};

// Function takes the project information and appends it to be displayed in the body
projects.display = function() {

    // Iterates through each project's information
	for (i = 0; i < projects.projects.length; i++) {

        // Create new div for projects
        $("#projects").append(HTMLprojectStart);

        // Work information is appended to the webpage
        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title);
        $(".project-entry:last").append(formattedTitle);
		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
        $(".project-entry:last").append(formattedDates);
		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);
        $(".project-entry:last").append(formattedDescription);

        // Checks for images in projects and appends them to the webpage
        if (projects.projects[i].images.length > 0) {
        	// Iterates through each project's images
            for (x = 0; x < projects.projects[i].images.length; x++) {
                var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[i].images[x]);
                $(".project-entry:last").append(formattedImage);
            }
        }
    }
};

projects.display();

// Appends Google Map to the webpage
$("#mapDiv").append(googleMap);










