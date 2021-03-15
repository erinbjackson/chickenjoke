const msg = () => {
    const person = ['pope', 'developer', 'chicken', 'monkey', 'college student', 'child'];
    const thingToCross = ['road', 'isle', 'office', 'branch', 'campus', 'the yard'];
    const punchLine = ['To add an extra semi colon', 'To go to KFC', 'To get get away from allegations', 'To get the banana', 'Because it sounded fun', 'He was bored during quarantine'];

    let randomPerson = person[Math.floor(Math.random() * person.length)];
    let randomThings = thingToCross[Math.floor(Math.random() * thingToCross.length)];
    let randomPunchLine = punchLine[Math.floor(Math.random() * punchLine.length)];
 return `Why did the ${randomPerson} cross the ${randomThings}? ${randomPunchLine}.`;   
}
console.log(msg());