const db = require('../models');
const Users = db.users;

const Analytics = db.analytics;

const Courses = db.courses;

const DiscussionBoards = db.discussion_boards;

const Enrollments = db.enrollments;

const Instructors = db.instructors;

const Students = db.students;

const AnalyticsData = [
  {
    // type code here for "relation_one" field

    student_engagement: 85,

    completion_rate: 90,

    instructor_performance: 88,
  },

  {
    // type code here for "relation_one" field

    student_engagement: 78,

    completion_rate: 80,

    instructor_performance: 82,
  },

  {
    // type code here for "relation_one" field

    student_engagement: 92,

    completion_rate: 95,

    instructor_performance: 90,
  },

  {
    // type code here for "relation_one" field

    student_engagement: 70,

    completion_rate: 75,

    instructor_performance: 78,
  },

  {
    // type code here for "relation_one" field

    student_engagement: 88,

    completion_rate: 85,

    instructor_performance: 87,
  },
];

const CoursesData = [
  {
    title: 'Introduction to Programming',

    description: 'Learn the basics of programming with Python.',

    // type code here for "relation_many" field

    // type code here for "relation_many" field
  },

  {
    title: 'Advanced Mathematics',

    description: 'Explore complex mathematical concepts and theories.',

    // type code here for "relation_many" field

    // type code here for "relation_many" field
  },

  {
    title: 'History of Art',

    description:
      'A comprehensive study of art history from ancient to modern times.',

    // type code here for "relation_many" field

    // type code here for "relation_many" field
  },

  {
    title: 'Business Management',

    description:
      'Understand the fundamentals of managing a business effectively.',

    // type code here for "relation_many" field

    // type code here for "relation_many" field
  },

  {
    title: 'Environmental Science',

    description: 'Study the impact of human activities on the environment.',

    // type code here for "relation_many" field

    // type code here for "relation_many" field
  },
];

const DiscussionBoardsData = [
  {
    // type code here for "relation_one" field

    topic: 'Introduction to Python',

    // type code here for "relation_many" field
  },

  {
    // type code here for "relation_one" field

    topic: 'Mathematical Theories',

    // type code here for "relation_many" field
  },

  {
    // type code here for "relation_one" field

    topic: 'Art Movements',

    // type code here for "relation_many" field
  },

  {
    // type code here for "relation_one" field

    topic: 'Business Strategies',

    // type code here for "relation_many" field
  },

  {
    // type code here for "relation_one" field

    topic: 'Environmental Impact',

    // type code here for "relation_many" field
  },
];

const EnrollmentsData = [
  {
    // type code here for "relation_one" field

    // type code here for "relation_one" field

    payment_status: 'Failed',
  },

  {
    // type code here for "relation_one" field

    // type code here for "relation_one" field

    payment_status: 'Failed',
  },

  {
    // type code here for "relation_one" field

    // type code here for "relation_one" field

    payment_status: 'Failed',
  },

  {
    // type code here for "relation_one" field

    // type code here for "relation_one" field

    payment_status: 'Pending',
  },

  {
    // type code here for "relation_one" field

    // type code here for "relation_one" field

    payment_status: 'Completed',
  },
];

const InstructorsData = [
  {
    first_name: 'John',

    last_name: 'Doe',

    // type code here for "relation_many" field
  },

  {
    first_name: 'Jane',

    last_name: 'Roe',

    // type code here for "relation_many" field
  },

  {
    first_name: 'Emily',

    last_name: 'Clark',

    // type code here for "relation_many" field
  },

  {
    first_name: 'Michael',

    last_name: 'Johnson',

    // type code here for "relation_many" field
  },

  {
    first_name: 'Sarah',

    last_name: 'Lee',

    // type code here for "relation_many" field
  },
];

const StudentsData = [
  {
    first_name: 'Alice',

    last_name: 'Johnson',

    // type code here for "relation_many" field
  },

  {
    first_name: 'Bob',

    last_name: 'Smith',

    // type code here for "relation_many" field
  },

  {
    first_name: 'Charlie',

    last_name: 'Brown',

    // type code here for "relation_many" field
  },

  {
    first_name: 'David',

    last_name: 'Williams',

    // type code here for "relation_many" field
  },

  {
    first_name: 'Eve',

    last_name: 'Davis',

    // type code here for "relation_many" field
  },
];

// Similar logic for "relation_many"

async function associateAnalyticWithCourse() {
  const relatedCourse0 = await Courses.findOne({
    offset: Math.floor(Math.random() * (await Courses.count())),
  });
  const Analytic0 = await Analytics.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (Analytic0?.setCourse) {
    await Analytic0.setCourse(relatedCourse0);
  }

  const relatedCourse1 = await Courses.findOne({
    offset: Math.floor(Math.random() * (await Courses.count())),
  });
  const Analytic1 = await Analytics.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (Analytic1?.setCourse) {
    await Analytic1.setCourse(relatedCourse1);
  }

  const relatedCourse2 = await Courses.findOne({
    offset: Math.floor(Math.random() * (await Courses.count())),
  });
  const Analytic2 = await Analytics.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (Analytic2?.setCourse) {
    await Analytic2.setCourse(relatedCourse2);
  }

  const relatedCourse3 = await Courses.findOne({
    offset: Math.floor(Math.random() * (await Courses.count())),
  });
  const Analytic3 = await Analytics.findOne({
    order: [['id', 'ASC']],
    offset: 3,
  });
  if (Analytic3?.setCourse) {
    await Analytic3.setCourse(relatedCourse3);
  }

  const relatedCourse4 = await Courses.findOne({
    offset: Math.floor(Math.random() * (await Courses.count())),
  });
  const Analytic4 = await Analytics.findOne({
    order: [['id', 'ASC']],
    offset: 4,
  });
  if (Analytic4?.setCourse) {
    await Analytic4.setCourse(relatedCourse4);
  }
}

// Similar logic for "relation_many"

// Similar logic for "relation_many"

async function associateDiscussionBoardWithCourse() {
  const relatedCourse0 = await Courses.findOne({
    offset: Math.floor(Math.random() * (await Courses.count())),
  });
  const DiscussionBoard0 = await DiscussionBoards.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (DiscussionBoard0?.setCourse) {
    await DiscussionBoard0.setCourse(relatedCourse0);
  }

  const relatedCourse1 = await Courses.findOne({
    offset: Math.floor(Math.random() * (await Courses.count())),
  });
  const DiscussionBoard1 = await DiscussionBoards.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (DiscussionBoard1?.setCourse) {
    await DiscussionBoard1.setCourse(relatedCourse1);
  }

  const relatedCourse2 = await Courses.findOne({
    offset: Math.floor(Math.random() * (await Courses.count())),
  });
  const DiscussionBoard2 = await DiscussionBoards.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (DiscussionBoard2?.setCourse) {
    await DiscussionBoard2.setCourse(relatedCourse2);
  }

  const relatedCourse3 = await Courses.findOne({
    offset: Math.floor(Math.random() * (await Courses.count())),
  });
  const DiscussionBoard3 = await DiscussionBoards.findOne({
    order: [['id', 'ASC']],
    offset: 3,
  });
  if (DiscussionBoard3?.setCourse) {
    await DiscussionBoard3.setCourse(relatedCourse3);
  }

  const relatedCourse4 = await Courses.findOne({
    offset: Math.floor(Math.random() * (await Courses.count())),
  });
  const DiscussionBoard4 = await DiscussionBoards.findOne({
    order: [['id', 'ASC']],
    offset: 4,
  });
  if (DiscussionBoard4?.setCourse) {
    await DiscussionBoard4.setCourse(relatedCourse4);
  }
}

// Similar logic for "relation_many"

async function associateEnrollmentWithStudent() {
  const relatedStudent0 = await Students.findOne({
    offset: Math.floor(Math.random() * (await Students.count())),
  });
  const Enrollment0 = await Enrollments.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (Enrollment0?.setStudent) {
    await Enrollment0.setStudent(relatedStudent0);
  }

  const relatedStudent1 = await Students.findOne({
    offset: Math.floor(Math.random() * (await Students.count())),
  });
  const Enrollment1 = await Enrollments.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (Enrollment1?.setStudent) {
    await Enrollment1.setStudent(relatedStudent1);
  }

  const relatedStudent2 = await Students.findOne({
    offset: Math.floor(Math.random() * (await Students.count())),
  });
  const Enrollment2 = await Enrollments.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (Enrollment2?.setStudent) {
    await Enrollment2.setStudent(relatedStudent2);
  }

  const relatedStudent3 = await Students.findOne({
    offset: Math.floor(Math.random() * (await Students.count())),
  });
  const Enrollment3 = await Enrollments.findOne({
    order: [['id', 'ASC']],
    offset: 3,
  });
  if (Enrollment3?.setStudent) {
    await Enrollment3.setStudent(relatedStudent3);
  }

  const relatedStudent4 = await Students.findOne({
    offset: Math.floor(Math.random() * (await Students.count())),
  });
  const Enrollment4 = await Enrollments.findOne({
    order: [['id', 'ASC']],
    offset: 4,
  });
  if (Enrollment4?.setStudent) {
    await Enrollment4.setStudent(relatedStudent4);
  }
}

async function associateEnrollmentWithCourse() {
  const relatedCourse0 = await Courses.findOne({
    offset: Math.floor(Math.random() * (await Courses.count())),
  });
  const Enrollment0 = await Enrollments.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (Enrollment0?.setCourse) {
    await Enrollment0.setCourse(relatedCourse0);
  }

  const relatedCourse1 = await Courses.findOne({
    offset: Math.floor(Math.random() * (await Courses.count())),
  });
  const Enrollment1 = await Enrollments.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (Enrollment1?.setCourse) {
    await Enrollment1.setCourse(relatedCourse1);
  }

  const relatedCourse2 = await Courses.findOne({
    offset: Math.floor(Math.random() * (await Courses.count())),
  });
  const Enrollment2 = await Enrollments.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (Enrollment2?.setCourse) {
    await Enrollment2.setCourse(relatedCourse2);
  }

  const relatedCourse3 = await Courses.findOne({
    offset: Math.floor(Math.random() * (await Courses.count())),
  });
  const Enrollment3 = await Enrollments.findOne({
    order: [['id', 'ASC']],
    offset: 3,
  });
  if (Enrollment3?.setCourse) {
    await Enrollment3.setCourse(relatedCourse3);
  }

  const relatedCourse4 = await Courses.findOne({
    offset: Math.floor(Math.random() * (await Courses.count())),
  });
  const Enrollment4 = await Enrollments.findOne({
    order: [['id', 'ASC']],
    offset: 4,
  });
  if (Enrollment4?.setCourse) {
    await Enrollment4.setCourse(relatedCourse4);
  }
}

// Similar logic for "relation_many"

// Similar logic for "relation_many"

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await Analytics.bulkCreate(AnalyticsData);

    await Courses.bulkCreate(CoursesData);

    await DiscussionBoards.bulkCreate(DiscussionBoardsData);

    await Enrollments.bulkCreate(EnrollmentsData);

    await Instructors.bulkCreate(InstructorsData);

    await Students.bulkCreate(StudentsData);

    await Promise.all([
      // Similar logic for "relation_many"

      await associateAnalyticWithCourse(),

      // Similar logic for "relation_many"

      // Similar logic for "relation_many"

      await associateDiscussionBoardWithCourse(),

      // Similar logic for "relation_many"

      await associateEnrollmentWithStudent(),

      await associateEnrollmentWithCourse(),

      // Similar logic for "relation_many"

      // Similar logic for "relation_many"
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('analytics', null, {});

    await queryInterface.bulkDelete('courses', null, {});

    await queryInterface.bulkDelete('discussion_boards', null, {});

    await queryInterface.bulkDelete('enrollments', null, {});

    await queryInterface.bulkDelete('instructors', null, {});

    await queryInterface.bulkDelete('students', null, {});
  },
};
