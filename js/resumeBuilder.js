// work contains an array of jobs. Each job object in jobs should contain
// an employer, title, location, dates worked and description.
 var work = [{
     'employer' : 'Widget Builders Inc',
     'title' : 'DevOps Engineer',
     'location' : 'Pittsburgh, PA',
     'dates' : '2012-2015',
     'description' : 'Responsible for daily operations, emergency response, long term planning, and software development'
 },
{
  'employer' : 'Big Company Corp',
  'title' : 'Support Representative',
  'location' : 'Harrisburg, PA',
  'dates' : '2009-2012',
  'descrition' : 'Responsible for first contact support, special projects, and report development'
}];

// projects contains an array of projects. Each project object in projects should contain
// a title, dates worked, description, and an images array with URL strings for project images.
var projects = [{
    'title' : 'Smaller Firm LLC Integration',
    'dates': '2009-2010',
    'description' : 'Big Company Corp IT integration of new acquisition Smaller Firm LLC. Project manager with 5 reports.',
    'images' : ['http://lorempixel.com/400/200/', 'http://lorempixel.com/400/200/', 'http://lorempixel.com/400/200/']
}];

// bio contains a name, role, welcomeMessage, contacts object and skills array. The contacts object should contain
// (but doesn't have to) a mobile number, email address, github username, twitter handle and location.
 var bio = {
    'name' : 'Zoey Green',
    'role' : 'DevOps Engineer',
    'welcomeMessage' : 'Welcome to my Udacity Resume project!',
    'contacts' : {
        'email' : 'zeegreenmachine@gmail.com',
        'github' : 'github.com/zeegreenmachine',
        'location' : 'Pittsburgh, PA'
    },
    'skills' : ['python', 'golang', 'javascript', 'bash', 'ansible', 'terraform'],
 };

//education contains an array of schools. Each school object in schools contains
// a name, location, degree, majors array, dates attended and a url for the school's website.
// education also contains an onlineCourses array. Each onlineCourse object in onlineCourses should contain
// a title, school, dates attended and a url for the course.
 var education = { 'schools' : [
     {
     'name' : 'Penn State',
     'location' : 'Williamsport, PA',
     'degree' : 'Bachelor',
     'majors' : ['Information Technology'],
     'dates' : '2005-2009',
     'url' : 'https://www.pct.edu/'
    }],
    'onlineCourses' : [{
        'title' : 'Full Stack Nanodegree',
        'school': 'Udacity',
        'dates' : '2014-2015',
        'url' : 'https://www.udacity.com/course/full-stack-web-developer-nanodegree--nd004'
    }]};

 //$("#header").prepend(HTMLheaderName.replace("%data%", bio.name));
 //$("#header").append(HTMLheaderRole.replace("%data%", bio.role));
