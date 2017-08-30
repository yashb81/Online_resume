/** This is the Javascript for my interactive resume.*/
/**
 * It displays for JSONs: bio, work, education and projects
 * Google Map's API
 * An easteregg. Click the spaceship to defend the galaxy!
 */
/////////////////////////////////////////////////////////
/** This section adds the JSONs */
/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////
/**
 * JSON bio
 * @constructor
 */
/////////////////////////////////////////////////////////
var bio = {
    "name": "Yash Bansal",
    "role": "Front-End Web Developer",
    "contacts": {
        "mobile": "+91-9802219059",
        "email": "yashb81@gmail.com",
        "github": "https://github.com/yashb81/",
        "location": "Ambala, Haryana, India"
    },
    "welcomeMessage": "<br> Hey there! Welcome to my interactive resume",
    "skills": ["HTML<br>Javascript<br>CSS<br>C<br>C++<br>Core Java<br>Arduino<br>Python"],
    "biopic": "images/2.jpg",

    /**
     * bio module
     * @module bio/display
     */

    'display': function() {
        var bioName = HTMLheaderName.replace("%data%", bio.name);
        $("#header").prepend(bioName);

        var bioRole = HTMLheaderRole.replace("%data%", bio.role);
        $("#header").prepend(bioRole);

        var biopic = HTMLbioPic.replace("%data%", bio.biopic);
        $("#header").append(biopic);

        var bioMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
        $("#header").append(bioMessage);

        if (bio.skills.length > 0) {
            $("#header").append(HTMLskillsStart);

            for (var i = 0; i < bio.skills.length; i++) {
                $("#skills").append(HTMLskills.replace("%data%", bio.skills[i]));
            }
        }
        var formattedmobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
        $('#topContacts').append(formattedmobile);

        var formattedemail = HTMLemail.replace("%data%", bio.contacts.email);
        $('#topContacts').append(formattedemail);
        var formattedgithub = HTMLgithub.replace("%data%", bio.contacts.github);
        $('#topContacts').append(formattedgithub);
        var formattedlocation = HTMLlocation.replace("%data%", bio.contacts.location);
        $('#topContacts').append(formattedlocation);

        $('#topContacts').children().clone().appendTo('#footerContacts');

    }
};

bio.display();

/////////////////////////////////////////////////////////
/**
 * JSON work
 * @constructor
 */
/////////////////////////////////////////////////////////

var work = {
    "jobs": [{
            "employer": "Udacity",
            "title": "Web Developer",
            "location": "Ambala",
            "dates": "August 2017 - today",
            "description": "Udacity is an organization that enables students to learn how to code."
        },
        {
            "employer": "Article Writer",
            "title": "Freelancer",
            "location": "Ambala",
            "dates": "January 2016 - February 2016",
            "description": "I had worked for a lady from Pakistan as an article writer. It was very interesting and fun job."
        }
    ],

    /**
     * job module
     * @module job/display
     */

    'display': function() {
        var x = work.jobs.length;
        for (var job = 0; job < x; job++) {

            $('#workExperience').append(HTMLworkStart);

            var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
            var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
            var formattedEmployerTitle = formattedEmployer + formattedTitle;
            $(".work-entry:last").append(formattedEmployerTitle);

            var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
            $(".work-entry:last").append(formattedDates);

            var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
            $(".work-entry:last").append(formattedDescription);

            var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
            $(".work-entry:last").append(formattedLocation);

        }
    }
};

work.display();

/////////////////////////////////////////////////////////
/**
 * JSON projects
 * @constructor
 */
/////////////////////////////////////////////////////////

var projects = {
    "projects": [{
            "title": "Lan Speed Tester",
            "dates": "Jan 2016 - April 2016",
            "description": "This project was to identify the speed of data transfer between two computers using a LAN.",
            "images": ["images/cars.png"],
            "url": "http://www.example1.co.in"
        },
        {
            "title": "• Chemical Equation Balancer",
            "dates": "Jan 2015 - April 2015",
            "description": "This project was to balance the coefficients of chemical equation.",
            "images": ["images/galaxy.jpg"],
            "url": "http://www.example2.co.in"
        }
    ],

    /**
     * projects module
     * @module projects/display
     */

    'display': function() {
        var y = projects.projects.length;
        for (var project = 0; project < y; project++) {

            $('#projects').append(HTMLprojectStart);

            var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title).replace("#", projects.projects[project].url);
            $(".project-entry:last").append(formattedTitle);

            var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
            $(".project-entry:last").append(formattedDates);

            var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
            $(".project-entry:last").append(formattedDescription);

            for (var img = 0; img < projects.projects[project].images.length; img++) {
                var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[img]);
                $(".project-entry:last").append(formattedProjectImage);
            }
        }
    }
};

projects.display();


/////////////////////////////////////////////////////////
/**
 * JSON education
 * @constructor
 */
/////////////////////////////////////////////////////////

var education = {
    "schools": [{
        "name": "Chitkara University",
        "location": "Rajpura",
        "degree": "Bachelor of Engg. ",
        "majors": ["C", " C++"],
        "dates": "2018",
        "url": "http://www.chitkara.edu.in"
    }, ],

    "onlineCourses": [{
            "title": "Front-end web developer",
            "school": "Udacity",
            "dates": "2017",
            "url": "http://www.udacity.com"
        },
        {
            "title": "Full stack web developer",
            "school": "Udacity",
            "dates": "2017",
            "url": "http://www.udacity.com"
        }
    ],

    /**
     * education module
     * @module education/display
     */

    'display': function() {

        $("#education").append(HTMLschoolHeader);
        var z = education.schools.length;
        for (var school = 0; school < z; school++) {

            $("#education").append(HTMLschoolStart);


            var formattedschoolName = HTMLschoolName.replace("%data%", education.schools[school].name).replace("#", education.schools[school].url);
            $(".education-entry:last").append(formattedschoolName);

            var formattedschoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
            $(".education-entry:last").append(formattedschoolDates);

            var formattedschoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
            $(".education-entry:last").append(formattedschoolDegree);
            for (var x = 0; x < education.schools[school].majors.length; x++) {
                var formattedschoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors[x]);
                $(".education-entry:last").append(formattedschoolMajor);
            }
            var formattedschoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
            $(".education-entry:last").append(formattedschoolLocation);

            var formattedschoolURL = HTMLschoolURL.replace("%data%", education.schools[school].url).replace("#", education.schools[school].url);
            $(".education-entry:last").append(formattedschoolURL);

        }

        $("#education").append(HTMLonlineClasses);
        var p = education.onlineCourses.length;
        for (var course = 0; course < p; course++) {

            $("#education").append(HTMLschoolStart);


            var formattedonlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
            $(".education-entry:last").append(formattedonlineSchool);

            var formattedonlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title).replace("#", education.onlineCourses[course].url);
            $(".education-entry:last").append(formattedonlineTitle);

            var formattedonlineDate = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);
            $(".education-entry:last").append(formattedonlineDate);

            var formattedonlineschoolURL = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url).replace("#", education.onlineCourses[course].url);
            $(".education-entry:last").append(formattedonlineschoolURL);

        }

    }

};

education.display();



/////////////////////////////////////////////////////////
/**
 * Protection and Google Map API
 * @constructor
 */
/////////////////////////////////////////////////////////

/** Protection module*/

var charEscape = function(_html) {
    var newHTML = _html;
    newHTML = _html.replace(/<|>|script/gi, "");
    return newHTML;
};

/////////////////////////////////////////////////////////

/** Google map module*/

var googleMap = '<div id="map"></div>';
$("#mapDiv").append(googleMap);
