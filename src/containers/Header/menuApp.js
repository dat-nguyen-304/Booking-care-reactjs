export const adminMenu = [
    { //người dùng
        name: 'menu.admin.manage-user', menus: [
            {
                name: 'menu.admin.crud', link: '/system/manage-user'

                // subMenus: [
                //     { name: 'menu.system.system-administrator.user-manage', },
                //     { name: 'menu.system.system-administrator.user-redux-manage', link: '/system/user-redux-manage' },
                // ]
            },
            {
                name: 'menu.admin.crud-redux', link: '/system/manage-user-redux'
            },
            {
                name: 'menu.admin.manage-doctor', link: '/system/manage-doctor'
            },
            {
                name: 'menu.admin.manage-admin', link: '/system/manage-admin'
            },
        ]
    },
    { //phòng khám
        name: 'menu.admin.clinic', menus: [
            {
                name: 'menu.admin.manage-clinic',
            },
        ]
    },
    { //người dùng
        name: 'menu.admin.specialty', menus: [
            {
                name: 'menu.admin.manage-specialty',
            },
        ]
    },
    { //người dùng
        name: 'menu.admin.handbook', menus: [
            {
                name: 'menu.admin.manage-handbook',
            },
        ]
    },
];

export const doctorMenu = [
    { //người dùng
        name: 'menu.doctor.manage-schedule', menus: [
            {
                name: 'menu.doctor.manage-schedule', link: '/doctor/manage-schedule'
            },
        ]
    },

];