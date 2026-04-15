//
function script199(int0: component): void {
    var string0 = `To celebrate your return to Gielinor, you ${script1125("could", "can")} now <col=F0BE79>earn unique rewards</col> by completing special returner challenges:`;
    var int1 = script4148();
    var int2 = script10628();
    if (((int1 == true) && (int2 == 0))) {
        string0 = `${string0}<br>  - <col=F0BE79>Free deaths</col> for 35 days<br>  - A cosmetic <col=F0BE79>title</col><br>  - Various <col=F0BE79>consumable items</col>`;
    } else if ((int2 == 1)) {
        string0 = `${string0}<br>  - A cosmetic <col=F0BE79>title</col><br>  - Various <col=F0BE79>consumable items</col>`;
    } else {
        string0 = `${string0}<br>  - <col=F0BE79>Free deaths</col> for 35 days<br>  - 5% chance to <col=F0BE79>double XP</col> for 15 days<br>  - A cosmetic <col=F0BE79>title</col><br>  - Various <col=F0BE79>consumable items</col>`;
    };
    string0 = `${string0}<br>You have ${inttostring(20, 10)} days to complete all ${inttostring(21, 10)} returner challenges.`;
    IF_SETTEXT(string0, int0);
    return;
}