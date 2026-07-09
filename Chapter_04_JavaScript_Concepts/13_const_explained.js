const BASE_URL = "https://app.thetestingacademy.com";
//const BASE_URL = "https://app.thetestingacademy.com"; //redeclaration not allowed in const
//BASE_URL = "https:/ / staging.thetestingacademy.com"; //reassignment not allowed in const
//TypeError: Assignment to constant variable.


let name = "pending";
name = "done";
{
    let name = "Dutta";
}

function say() {
    let name = "Dutta";
}
say();
say();