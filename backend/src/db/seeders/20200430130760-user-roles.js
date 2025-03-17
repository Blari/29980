const { v4: uuid } = require('uuid');

module.exports = {
  /**
   * @param{import("sequelize").QueryInterface} queryInterface
   * @return {Promise<void>}
   */
  async up(queryInterface) {
    const createdAt = new Date();
    const updatedAt = new Date();

    /** @type {Map<string, string>} */
    const idMap = new Map();

    /**
     * @param {string} key
     * @return {string}
     */
    function getId(key) {
      if (idMap.has(key)) {
        return idMap.get(key);
      }
      const id = uuid();
      idMap.set(key, id);
      return id;
    }

    await queryInterface.bulkInsert('roles', [
      {
        id: getId('Administrator'),
        name: 'Administrator',
        createdAt,
        updatedAt,
      },

      {
        id: getId('PlatformManager'),
        name: 'Platform Manager',
        createdAt,
        updatedAt,
      },

      {
        id: getId('CourseCoordinator'),
        name: 'Course Coordinator',
        createdAt,
        updatedAt,
      },

      {
        id: getId('EducationSpecialist'),
        name: 'Education Specialist',
        createdAt,
        updatedAt,
      },

      {
        id: getId('StudentAdvisor'),
        name: 'Student Advisor',
        createdAt,
        updatedAt,
      },

      {
        id: getId('LearningAssistant'),
        name: 'Learning Assistant',
        createdAt,
        updatedAt,
      },
    ]);

    /**
     * @param {string} name
     */
    function createPermissions(name) {
      return [
        {
          id: getId(`CREATE_${name.toUpperCase()}`),
          createdAt,
          updatedAt,
          name: `CREATE_${name.toUpperCase()}`,
        },
        {
          id: getId(`READ_${name.toUpperCase()}`),
          createdAt,
          updatedAt,
          name: `READ_${name.toUpperCase()}`,
        },
        {
          id: getId(`UPDATE_${name.toUpperCase()}`),
          createdAt,
          updatedAt,
          name: `UPDATE_${name.toUpperCase()}`,
        },
        {
          id: getId(`DELETE_${name.toUpperCase()}`),
          createdAt,
          updatedAt,
          name: `DELETE_${name.toUpperCase()}`,
        },
      ];
    }

    const entities = [
      'users',
      'analytics',
      'courses',
      'discussion_boards',
      'enrollments',
      'instructors',
      'students',
      'roles',
      'permissions',
      ,
    ];
    await queryInterface.bulkInsert(
      'permissions',
      entities.flatMap(createPermissions),
    );
    await queryInterface.bulkInsert('permissions', [
      {
        id: getId(`READ_API_DOCS`),
        createdAt,
        updatedAt,
        name: `READ_API_DOCS`,
      },
    ]);
    await queryInterface.bulkInsert('permissions', [
      {
        id: getId(`CREATE_SEARCH`),
        createdAt,
        updatedAt,
        name: `CREATE_SEARCH`,
      },
    ]);

    await queryInterface.sequelize
      .query(`create table "rolesPermissionsPermissions"
(
"createdAt"           timestamp with time zone not null,
"updatedAt"           timestamp with time zone not null,
"roles_permissionsId" uuid                     not null,
"permissionId"        uuid                     not null,
primary key ("roles_permissionsId", "permissionId")
);`);

    await queryInterface.bulkInsert('rolesPermissionsPermissions', [
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('PlatformManager'),
        permissionId: getId('CREATE_ANALYTICS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('PlatformManager'),
        permissionId: getId('READ_ANALYTICS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('PlatformManager'),
        permissionId: getId('UPDATE_ANALYTICS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('PlatformManager'),
        permissionId: getId('DELETE_ANALYTICS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('CourseCoordinator'),
        permissionId: getId('CREATE_ANALYTICS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('CourseCoordinator'),
        permissionId: getId('READ_ANALYTICS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('EducationSpecialist'),
        permissionId: getId('CREATE_ANALYTICS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('EducationSpecialist'),
        permissionId: getId('READ_ANALYTICS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('StudentAdvisor'),
        permissionId: getId('CREATE_ANALYTICS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('StudentAdvisor'),
        permissionId: getId('READ_ANALYTICS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('LearningAssistant'),
        permissionId: getId('CREATE_ANALYTICS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('LearningAssistant'),
        permissionId: getId('READ_ANALYTICS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('PlatformManager'),
        permissionId: getId('CREATE_COURSES'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('PlatformManager'),
        permissionId: getId('READ_COURSES'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('PlatformManager'),
        permissionId: getId('UPDATE_COURSES'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('PlatformManager'),
        permissionId: getId('DELETE_COURSES'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('CourseCoordinator'),
        permissionId: getId('CREATE_COURSES'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('CourseCoordinator'),
        permissionId: getId('READ_COURSES'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('CourseCoordinator'),
        permissionId: getId('UPDATE_COURSES'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('EducationSpecialist'),
        permissionId: getId('CREATE_COURSES'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('EducationSpecialist'),
        permissionId: getId('READ_COURSES'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('StudentAdvisor'),
        permissionId: getId('CREATE_COURSES'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('StudentAdvisor'),
        permissionId: getId('READ_COURSES'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('LearningAssistant'),
        permissionId: getId('CREATE_COURSES'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('LearningAssistant'),
        permissionId: getId('READ_COURSES'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('PlatformManager'),
        permissionId: getId('CREATE_DISCUSSION_BOARDS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('PlatformManager'),
        permissionId: getId('READ_DISCUSSION_BOARDS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('PlatformManager'),
        permissionId: getId('UPDATE_DISCUSSION_BOARDS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('PlatformManager'),
        permissionId: getId('DELETE_DISCUSSION_BOARDS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('CourseCoordinator'),
        permissionId: getId('CREATE_DISCUSSION_BOARDS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('CourseCoordinator'),
        permissionId: getId('READ_DISCUSSION_BOARDS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('CourseCoordinator'),
        permissionId: getId('UPDATE_DISCUSSION_BOARDS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('EducationSpecialist'),
        permissionId: getId('CREATE_DISCUSSION_BOARDS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('EducationSpecialist'),
        permissionId: getId('READ_DISCUSSION_BOARDS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('StudentAdvisor'),
        permissionId: getId('CREATE_DISCUSSION_BOARDS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('StudentAdvisor'),
        permissionId: getId('READ_DISCUSSION_BOARDS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('LearningAssistant'),
        permissionId: getId('CREATE_DISCUSSION_BOARDS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('LearningAssistant'),
        permissionId: getId('READ_DISCUSSION_BOARDS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('PlatformManager'),
        permissionId: getId('CREATE_ENROLLMENTS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('PlatformManager'),
        permissionId: getId('READ_ENROLLMENTS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('PlatformManager'),
        permissionId: getId('UPDATE_ENROLLMENTS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('PlatformManager'),
        permissionId: getId('DELETE_ENROLLMENTS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('CourseCoordinator'),
        permissionId: getId('CREATE_ENROLLMENTS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('CourseCoordinator'),
        permissionId: getId('READ_ENROLLMENTS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('EducationSpecialist'),
        permissionId: getId('CREATE_ENROLLMENTS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('EducationSpecialist'),
        permissionId: getId('READ_ENROLLMENTS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('StudentAdvisor'),
        permissionId: getId('CREATE_ENROLLMENTS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('StudentAdvisor'),
        permissionId: getId('READ_ENROLLMENTS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('StudentAdvisor'),
        permissionId: getId('UPDATE_ENROLLMENTS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('LearningAssistant'),
        permissionId: getId('CREATE_ENROLLMENTS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('LearningAssistant'),
        permissionId: getId('READ_ENROLLMENTS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('PlatformManager'),
        permissionId: getId('CREATE_INSTRUCTORS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('PlatformManager'),
        permissionId: getId('READ_INSTRUCTORS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('PlatformManager'),
        permissionId: getId('UPDATE_INSTRUCTORS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('PlatformManager'),
        permissionId: getId('DELETE_INSTRUCTORS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('CourseCoordinator'),
        permissionId: getId('CREATE_INSTRUCTORS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('CourseCoordinator'),
        permissionId: getId('READ_INSTRUCTORS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('CourseCoordinator'),
        permissionId: getId('UPDATE_INSTRUCTORS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('EducationSpecialist'),
        permissionId: getId('CREATE_INSTRUCTORS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('EducationSpecialist'),
        permissionId: getId('READ_INSTRUCTORS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('StudentAdvisor'),
        permissionId: getId('CREATE_INSTRUCTORS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('StudentAdvisor'),
        permissionId: getId('READ_INSTRUCTORS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('LearningAssistant'),
        permissionId: getId('CREATE_INSTRUCTORS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('LearningAssistant'),
        permissionId: getId('READ_INSTRUCTORS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('PlatformManager'),
        permissionId: getId('CREATE_STUDENTS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('PlatformManager'),
        permissionId: getId('READ_STUDENTS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('PlatformManager'),
        permissionId: getId('UPDATE_STUDENTS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('PlatformManager'),
        permissionId: getId('DELETE_STUDENTS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('CourseCoordinator'),
        permissionId: getId('CREATE_STUDENTS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('CourseCoordinator'),
        permissionId: getId('READ_STUDENTS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('EducationSpecialist'),
        permissionId: getId('CREATE_STUDENTS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('EducationSpecialist'),
        permissionId: getId('READ_STUDENTS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('StudentAdvisor'),
        permissionId: getId('CREATE_STUDENTS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('StudentAdvisor'),
        permissionId: getId('READ_STUDENTS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('StudentAdvisor'),
        permissionId: getId('UPDATE_STUDENTS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('LearningAssistant'),
        permissionId: getId('CREATE_STUDENTS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('LearningAssistant'),
        permissionId: getId('READ_STUDENTS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('PlatformManager'),
        permissionId: getId('CREATE_SEARCH'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('CourseCoordinator'),
        permissionId: getId('CREATE_SEARCH'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('EducationSpecialist'),
        permissionId: getId('CREATE_SEARCH'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('StudentAdvisor'),
        permissionId: getId('CREATE_SEARCH'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('LearningAssistant'),
        permissionId: getId('CREATE_SEARCH'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('Administrator'),
        permissionId: getId('CREATE_USERS'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('Administrator'),
        permissionId: getId('READ_USERS'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('Administrator'),
        permissionId: getId('UPDATE_USERS'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('Administrator'),
        permissionId: getId('DELETE_USERS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('Administrator'),
        permissionId: getId('CREATE_ANALYTICS'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('Administrator'),
        permissionId: getId('READ_ANALYTICS'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('Administrator'),
        permissionId: getId('UPDATE_ANALYTICS'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('Administrator'),
        permissionId: getId('DELETE_ANALYTICS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('Administrator'),
        permissionId: getId('CREATE_COURSES'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('Administrator'),
        permissionId: getId('READ_COURSES'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('Administrator'),
        permissionId: getId('UPDATE_COURSES'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('Administrator'),
        permissionId: getId('DELETE_COURSES'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('Administrator'),
        permissionId: getId('CREATE_DISCUSSION_BOARDS'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('Administrator'),
        permissionId: getId('READ_DISCUSSION_BOARDS'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('Administrator'),
        permissionId: getId('UPDATE_DISCUSSION_BOARDS'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('Administrator'),
        permissionId: getId('DELETE_DISCUSSION_BOARDS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('Administrator'),
        permissionId: getId('CREATE_ENROLLMENTS'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('Administrator'),
        permissionId: getId('READ_ENROLLMENTS'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('Administrator'),
        permissionId: getId('UPDATE_ENROLLMENTS'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('Administrator'),
        permissionId: getId('DELETE_ENROLLMENTS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('Administrator'),
        permissionId: getId('CREATE_INSTRUCTORS'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('Administrator'),
        permissionId: getId('READ_INSTRUCTORS'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('Administrator'),
        permissionId: getId('UPDATE_INSTRUCTORS'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('Administrator'),
        permissionId: getId('DELETE_INSTRUCTORS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('Administrator'),
        permissionId: getId('CREATE_STUDENTS'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('Administrator'),
        permissionId: getId('READ_STUDENTS'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('Administrator'),
        permissionId: getId('UPDATE_STUDENTS'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('Administrator'),
        permissionId: getId('DELETE_STUDENTS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('Administrator'),
        permissionId: getId('CREATE_ROLES'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('Administrator'),
        permissionId: getId('READ_ROLES'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('Administrator'),
        permissionId: getId('UPDATE_ROLES'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('Administrator'),
        permissionId: getId('DELETE_ROLES'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('Administrator'),
        permissionId: getId('CREATE_PERMISSIONS'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('Administrator'),
        permissionId: getId('READ_PERMISSIONS'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('Administrator'),
        permissionId: getId('UPDATE_PERMISSIONS'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('Administrator'),
        permissionId: getId('DELETE_PERMISSIONS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('Administrator'),
        permissionId: getId('READ_API_DOCS'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('Administrator'),
        permissionId: getId('CREATE_SEARCH'),
      },
    ]);

    await queryInterface.sequelize.query(
      `UPDATE "users" SET "app_roleId"='${getId(
        'SuperAdmin',
      )}' WHERE "email"='super_admin@flatlogic.com'`,
    );
    await queryInterface.sequelize.query(
      `UPDATE "users" SET "app_roleId"='${getId(
        'Administrator',
      )}' WHERE "email"='admin@flatlogic.com'`,
    );

    await queryInterface.sequelize.query(
      `UPDATE "users" SET "app_roleId"='${getId(
        'PlatformManager',
      )}' WHERE "email"='client@hello.com'`,
    );
    await queryInterface.sequelize.query(
      `UPDATE "users" SET "app_roleId"='${getId(
        'CourseCoordinator',
      )}' WHERE "email"='john@doe.com'`,
    );
  },
};
