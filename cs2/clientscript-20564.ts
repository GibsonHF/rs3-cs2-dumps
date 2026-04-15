//
function script20564(int0: int): void {
    if ((varplayer_12583 < 1)) {
        script1296("Please select a skill.");
        return;
    };
    var int1 = enum_getvalue(0, 17, 681 as cs2enum, varplayer_12583);
    var int2 = script20456(int1);
    if ((int0 >= int2)) {
        varplayer_12584 = int2;
    } else {
        varplayer_12584 = int0;
    };
    script20576();
    return;
}