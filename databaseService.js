 
const staticData = require('./staticData/staticData') 

const fs = require('fs');

const spread_sheet = require('spread_sheet');

const filePath = './data.xlsx';
const sheetName = "data";

const reader = require('xlsx')


function fetchData() {
    return staticData;
    // if (!fs.existsSync(filePath)) return {};  

    // let data = []

// const file = reader.readFile(filePath)
    // const sheets = file.SheetNames
    // if (sheets.indexOf(sheetName) == -1) return {};
    // const temp = reader.utils.sheet_to_json(file.Sheets[sheetName])
    // temp.forEach((res) => {
    //     data.push(res)
    // })
    // return data;
}

// function addUser(user) {
//     const users = fetchUsers();
//     const isValidModel = validators.isFieldsNotValid(users, user);
//     if (isValidModel !== null) return isValidModel;

//     spread_sheet.addRow(
//         [[
//             user.username,
//             user.firstName,
//             user.lastName,
//             user.profileImage
//         ]],
//         filePath, sheetName, function (err, result) {
//             console.log(err, result)
//         })
//     // users.push({
//     //     username: user.username,
//     //     firstName: user.firstName,
//     //     lastName: user.lastName,
//     //     profileImage: user.profileImage,
//     // });
//     return 'user been added';
// }



function restData() {

    if (!fs.existsSync(filePath)) {

        fs.writeFile(filePath, '', function (err) {
            console.log('Saved!');
        });
    }


    const reader = reader.readFile(filePath)
    const ws = reader.utils.json_to_sheet(staticData)

    reader.utils.book_append_sheet(file, ws, sheetName)
    // Writing to our file 
    reader.writeFile(file, filePath)
    return fetchData();
}


module.exports = { fetchData, restData };