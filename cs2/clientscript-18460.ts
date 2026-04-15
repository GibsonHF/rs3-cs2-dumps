//
function script18460(int0: component): void {
    var int1 = script18421(-1 as struct);
    var string0 = `Unlock the Fancy Hat by activating ${inttostring(int1, 10)} buffs.<br>Buffs activated:`;
    if (((script18412() == 1) || (script1526() == 1))) {
        string0 = `Unlock the Fancy Hat by logging in on ${inttostring(int1, 10)} days during the event.<br>Days logged-in:`;
    };
    script3536(`${string0} ${inttostring(varbitplayer_54952, 10)} / ${inttostring(int1, 10)}`, int0, -1);
    return;
}