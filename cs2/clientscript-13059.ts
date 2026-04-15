//
function script13059(int0: component, int1: component, int2: component): void {
    CC_DELETEALL(int0);
    if (((enum_getvalue(0, 17, 681 as cs2enum, varclient_1796) == -1 as stat) && (enum_getvalue(0, 17, 681 as cs2enum, varclient_5924) == -1 as stat))) {
        IF_SETHIDE(false, int1);
        script6046("Choose a skill...", int2, 50);
        return;
    };
    if ((enum_getvalue(0, 17, 681 as cs2enum, varclient_5924) == -1 as stat)) {
        IF_SETHIDE(false, int1);
        script6046("Choose a second skill...", int2, 50);
        return;
    };
    if ((enum_getvalue(0, 17, 681 as cs2enum, varclient_1796) == -1 as stat)) {
        IF_SETHIDE(false, int1);
        script6046("Choose a second skill...", int2, 50);
        return;
    };
    IF_SETHIDE(true, int1);
    var int3 = 0;
    while ((int3 < varclient_1796)) {
        CC_CREATE(int0, 3, int3);
        CC_SETHIDE(true);
        int3 = (int3 + 1);
    };
    CC_CREATE(int0, 3, int3);
    CC_SETSIZE(0, 0, 1, 1);
    CC_SETPOSITION(0, 0, 1, 1);
    CC_SETTRANS(255);
    CC_SETPAUSETEXT(`Confirm: ${enum_getvalue(0, 36, 108 as cs2enum, varclient_1796)} & ${enum_getvalue(0, 36, 108 as cs2enum, varclient_5924)}`);
    var string0 = script13050(enum_getvalue(0, 17, 681 as cs2enum, varclient_1796), enum_getvalue(0, 17, 681 as cs2enum, varclient_5924));
    script6046(string0, int2, 50);
    return;
}