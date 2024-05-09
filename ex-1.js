let isOver18 = true;
let hasCriminalBlacklist = false;

let isAllow;

if (isOver18 && !hasCriminalBlacklist) {
    isAllow = true;
} else {
    isAllow = false;
}

console.log(isAllow);
