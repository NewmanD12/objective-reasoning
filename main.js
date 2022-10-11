// ┌─────────────────┐
// │ Your code here! │	
// └─────────────────┘

function isAdmin(user){
    if(user.userRole === 'ADMIN'){
        return true
    }
    return false
}

function getEmail(user){
    return user.firstName.toLowerCase() + '.' + user.lastName.toLowerCase() + '@codeimmersives.com'
}

function getPlaylistLength(playlist){
    return playlist.songs.length
}

function getHardestHomework(homework_list){
    let res = ''
    if(homework_list.length >= 1){
        let lowestScore = homework_list[0].averageScore
        let hardestHomework = homework_list[0].name
        for(let homework of homework_list){
            if(homework.averageScore <= lowestScore){
                console.log(homework.averageScore)
                lowestScore = homework.averageScore
                res = homework.name
            }
        }
    } 
    return res
}

// console.log(getHardestHomework([
//     { name: 'some hw', averageScore: 99 },
//     { name: 'other hw', averageScore: 20 },
//     { name: 'third hw', averageScore: 3 }
// ]))

// console.log(getHardestHomework([]))

function createPhonebook(name_list, number_list){
    phonebook = {}
    for(let i = 0; i < name_list.length; i++){
        phonebook[name_list[i]] = number_list[i]
    }
    return phonebook
}


// ┌─────────────────────────────────────┐
// │ Do not modify code below this line. │
// └─────────────────────────────────────┘

if (typeof isAdmin === 'undefined') {
    isAdmin = undefined;
}
if (typeof getEmail === 'undefined') {
    getEmail = undefined;
}
if (typeof getPlaylistLength === 'undefined') {
    getPlaylistLength = undefined;
}
if (typeof getHardestHomework === 'undefined') {
    getHardestHomework = undefined;
}
if (typeof createPhonebook === 'undefined') {
    createPhonebook = undefined;
}

module.exports = {
    isAdmin,
    getEmail,
    getPlaylistLength,
    getHardestHomework,
    createPhonebook
};