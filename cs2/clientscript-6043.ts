//
function script6043(int0: component, int1: component, int2: component): void {
    CC_DELETEALL(int0);
    if ((enum_getvalue(0, 17, 681 as cs2enum, varclient_1796) == -1 as stat)) {
        IF_SETHIDE(false, int1);
        script6046("Choose a skill...", int2, 50);
        return;
    };
    if (((IF_GETHIDE(comp(1263, 5)) == false) && (varbitplayer_43349 == 2))) {
        IF_SETHIDE(false, int1);
        script6046("Choose an xp type...", int2, 50);
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
    CC_SETPAUSETEXT(`Confirm: ${enum_getvalue(0, 36, 108 as cs2enum, varclient_1796)}`);
    script6046(script6036(enum_getvalue(0, 17, 681 as cs2enum, varclient_1796), varclient_1797, varclient_1799), int2, 50);
    if ((varclient_1799 == 54603 as obj)) {
        if ((script17262(varclient_1796) == 0)) {
            IF_SETTEXT("Block XP", comp(1263, 81));
        } else {
            IF_SETTEXT("Give XP", comp(1263, 81));
        };
    };
    return;
}