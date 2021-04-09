// Callback Example
function getUser(id, callback){
    setTimeout(() => {
        console.log('Reading a user from a database');
        callback({ id: id, gitHubUsername: 'matt' });
    }, 2000);
}

// ** Simplifying Callback Hell by Referencing Functions **
// Before
console.log('Before');
getUser(1, (user) => {
    getRepositories(user.gitHubUsername, (repos) => {
        getCommits(repo, (commits) => {
            console.log(commits)
        });
    });
});
console.log('After');

// After
console.log('Before');
getUser(1, getRepositories);
console.log('After');

function getUser(id, callback) {
    setTimeout(() => {
        console.log('Reading a user from a database...');
        callback({id: id, gitHubUsername: 'matt'});
        
    }, 2000);
}

function getRepositories(user) {
    getRepositories(user.gitHubUsername, getCommits);
}


function getCommits(repos) {
    getCommits(repo, displayCommits);
}

function displayCommits(commits) {
    console.log(commits);
}

// ** Or you can use Promises **
getUser(1)
    .then(user => getRepositories(user.gitHubUsername))
    .then(repos => getCommits(repos[0]))
    .then(commits => console.log('Commits', commits))
    .catch(err => console.log(err.message))


// Example of creating a settled promise (e.g. for unit testing)

const p = Promise.resolve( {id: 1} )
p.then(result => console.log(result))

const p = Promise.reject(new Error('reason for rejection'))
p.catch(err => console.log(err));


// Running Promises in Parallel
const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("async operation 1...");
        resolve(1);
    }, 2000);
});

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("async operation 2...");
        resolve(2);
    }, 2000);
});

Promise.all([p1, p2])
    .then(result => console.log(result))
    .catch(err => console.log(err.message));


// Kick off as soon as the first promise completes
Promise.race([p1, p2])
    .then(result => console.log(result))
    .catch(err => console.log(err.message));




// Async-Await approach as an alternative to Promise approach; Async-await is build off of Promises
// Wrap inside of a try-catch block
// The whole async function will now run SYNCHRONOUSLY
async function displayCommits() {
    try {
        const user = await getUser(1);
        const repos = await getRepositories(user.gitHubUsername);
        const commits = await getCommits(repos[0]);
        console.log(commits);
    }
    catch(err) {
        console.log('Error', err.message);
    }
}

displayCommits();