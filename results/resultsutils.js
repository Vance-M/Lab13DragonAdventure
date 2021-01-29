export function determineHealth(userResults){
    if (userResults.hp <= 0) {
        const resultDeath = document.createElement('li');
        resultDeath.textContent = `Despite ${userResults.name}s attempts to be the Hero, they have died.`;
        return resultDeath;

    } else if (userResults.hp <= 40) {

        const resultFrail = document.createElement('li');
        resultFrail.textContent = `Although ${userResults.name} did slay the dragon, Mordulech, they did suffer perilous wounds. They lived thier days assisted by aid the wealth they had found was able to provide`;
        return resultFrail;
    } else if (userResults.hp > 40) {

        const resultHealthy = document.createElement('li');
        resultHealthy.textContent = `${userResults.name} the ${userResults.race} ${userResults.job} managed to slay the foul dragon and accrued ${userResults.gold} Gold!`;
        return resultHealthy;
    }
}