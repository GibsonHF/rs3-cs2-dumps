//
function script2707(): void {
    CC_DELETEALL(comp(324, 43));
    CC_DELETEALL(comp(324, 42));
    IF_SETHIDE(false, comp(324, 45));
    IF_SETHIDE(true, comp(324, 16));
    IF_SETHIDE(true, comp(324, 15));
    var int0 = comp(324, 7);
    script6204(int0, IF_GETWIDTH(int0), IF_GETHEIGHT(int0), 0, 0, 1, 28680 as struct);
    int0 = comp(324, 18);
    script6204(int0, IF_GETWIDTH(int0), IF_GETHEIGHT(int0), 0, 0, 1, 28680 as struct);
    var int1 = 0;
    var int2 = 0;
    if ((AUTOSETUP_GETLEVEL() == 2)) {
        int1 = 1;
    } else if (((varclient_6503 == 0) && (AUTOSETUP_GETLEVEL() == 0))) {
        int2 = 1;
    };
    script13972(comp(324, 43), comp(-1, 65535), 41838 as struct, "POWER SAVE", int1);
    script13972(comp(324, 42), comp(-1, 65535), 41838 as struct, "BALANCED", varclient_6503);
    if ((int1 == 0)) {
        IF_SETTRANS(128, comp(324, 34));
        IF_SETTRANS(128, comp(324, 35));
    } else {
        IF_SETTRANS(0, comp(324, 34));
        IF_SETTRANS(0, comp(324, 35));
    };
    if ((varclient_6503 == 0)) {
        IF_SETTRANS(128, comp(324, 38));
        IF_SETTRANS(128, comp(324, 39));
    } else {
        IF_SETTRANS(0, comp(324, 38));
        IF_SETTRANS(0, comp(324, 39));
    };
    if ((int2 == 0)) {
        IF_SETTEXT("Your settings have not been customised", comp(324, 41));
    } else {
        IF_SETTEXT("Your settings have been customised", comp(324, 41));
    };
    script1191(comp(324, 12), int2, true);
    return;
}