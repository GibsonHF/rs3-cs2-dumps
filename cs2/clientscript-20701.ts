//
function script20701(): string {
    var int0 = script20699();
    var int1 = script20700();
    var string0 = `Spirit Plane Connection:<br><br>+${inttostring(int1, 10)}% Summoning XP at obelisks that have a strong connection to the spirit plane.`;
    var string1 = `${inttostring(int0, 10)}% chance to save materials when infusing pouches at these obelisks.`;
    if ((int0 > 0)) {
        string0 = `${string0}<br><br>${string1}`;
    };
    return string0;
}