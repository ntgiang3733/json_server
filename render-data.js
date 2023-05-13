const { fakerVI: faker } = require('@faker-js/faker');
const fs = require('fs');
// const randomClassList = (n) => {
//     const classList = [];
//     if (n <= 0) return [];
//     //Loop
//     Array.from(new Array(n)).forEach(() => {
//         const _class = {
//             id: faker.random.uuid(),
//             totalStudent: faker.random.number(40),
//             supervising_Teacher: `${faker.name.lastName()} ${faker.name.firstName()}`,
//             avatar_Teacher: faker.image.avatar(400, 400)
//         }
//         classList.push(_class)
//     })
//     return classList;
// }
// const randomStudentList = (classList, studentOfClass) => {
//     const studentList = [];
//     if (studentOfClass <= 0) return [];
//     for (const e of classList) {
//         Array.from(new Array(studentOfClass)).forEach(() => {
//             const student = {
//                 class_id: e.id,
//                 id: faker.random.uuid(),
//                 name: `${faker.name.lastName()} ${faker.name.firstName()}`,
//                 sex: faker.name.gender(),
//                 medium_score: Number.parseFloat(faker.random.number(10)),
//                 avatar: faker.image.avatar(400, 400)
//             };
//             studentList.push(student)
//         })
//     }
//     return studentList;
// }

const randomUserList = (n) => {
    const userList = [];
    if (n <= 0) return [];
    //Loop
    Array.from(new Array(n)).forEach(() => {
        const _user = {
            userId: faker.datatype.uuid(),
            user_name: faker.internet.userName(),
            email: faker.internet.email(),
            password: faker.internet.password(),
            authority: faker.person.jobType(),
            last_name: faker.person.lastName(),
            first_name: faker.person.firstName(),
            mid_name: faker.person.middleName(),
            gender: faker.person.gender(),
            date_of_birth: faker.date.birthdate(),
            department: faker.commerce.department(),
            duty: faker.person.jobType(),
            delete_flg: faker.datatype.boolean(),
            is_locked: faker.datatype.boolean(),
            is_requested: faker.datatype.boolean(),
            create_date: faker.date.past(),
            update_date: faker.date.past(),
        }
        userList.push(_user)
    })
    return userList;
}
(() => {
    const userList = randomUserList(20)
    // const studentList = randomStudentList(classList, 1)

    const db = {
        user: userList
    };
    //write db obj to db.json
    fs.writeFile('./db.json', JSON.stringify(db), () => {
        console.log('Write successfully')
    });
})()