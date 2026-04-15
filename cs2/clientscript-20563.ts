//
function script20563(): void {
    if ((varplayer_12583 < 1)) {
        script1296("Please select a skill.");
        return;
    };
    var int0 = enum_getvalue(0, 17, 681 as cs2enum, varplayer_12583);
    var int1 = script20456(int0);
    varplayer_12584 = int1;
    script20576();
    return;
}