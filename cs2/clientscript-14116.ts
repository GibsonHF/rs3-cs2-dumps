//
function script14116(): void {
    var int0 = -1;
    var int1 = 0;
    var int2 = ENUM_GETOUTPUTCOUNT(6511 as cs2enum);
    if ((varbitplayer_41612 == 0)) {
        IF_SETTEXT("Herb collector<col=ff0000> - Purchased at the Ardougne Farmers' Market</col>", comp(1006, 160));
        IF_SETHIDE(true, comp(1006, 159));
    } else {
        IF_SETTEXT("Herb collector", comp(1006, 160));
        IF_SETHIDE(false, comp(1006, 159));
    };
    while ((++int0 < int2)) {
        script10416(enum_getvalue(0, 9, 6511 as cs2enum, int0), enum_getvalue(0, 9, 6512 as cs2enum, int0), "", "", "", TESTBIT(varplayer_1086, int0));
    };
    if ((BITCOUNT(varplayer_1086) == int2)) {
        int1 = 1;
    };
    script10416(comp(1006, 71), comp(1006, 177), "", "", "", int1);
    return;
}