//
function script9845(): void {
    var string0 = "You can change your character name for free in:";
    var string1 = "Don't want to wait? Redeem a Bond to change your name now.";
    var string2 = "";
    var string3 = "";
    if ((varbitplayer_22833 == 0)) {
        string2 = "Redeeming a Bond will consume it.";
        string3 = "Redeem bond";
        IF_SETHIDE(0, 98369545);
        IF_SETHIDE(0, 98369541);
    } else if ((varbitplayer_22833 == 1)) {
        string1 = `You have purchased the ability to change your name early.<br>You have ${inttostring(varbitplayer_22834, 10)} early name ${script4583(varbitplayer_22834, "change", "changes")} remaining.`;
        string3 = "Change name";
        IF_SETHIDE(1, 98369545);
        IF_SETHIDE(0, 98369541);
    } else if ((varbitplayer_22833 == 2)) {
        string2 = "You don't have any Bonds to redeem.";
        string3 = "Buy Bonds";
        IF_SETHIDE(0, 98369545);
        IF_SETHIDE(0, 98369541);
    };
    IF_SETTEXT(varclient_4201, 98369543);
    IF_SETTEXT(string0, 98369540);
    IF_SETTEXT(string1, 98369544);
    IF_SETTEXT(string2, 98369548);
    if ((varplayer_9781 < 1)) {
        IF_SETHIDE(1, 98369556);
        IF_SETHIDE(0, 98369552);
    } else {
        IF_SETHIDE(0, 98369556);
        IF_SETHIDE(1, 98369552);
    };
    return;
}