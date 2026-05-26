//
function script2707(): void {
    CC_DELETEALL(21233707);
    CC_DELETEALL(21233706);
    IF_SETHIDE(0, 21233709);
    IF_SETHIDE(1, 21233680);
    IF_SETHIDE(1, 21233679);
    var int0 = 21233671;
    script6204(int0, IF_GETWIDTH(int0), IF_GETHEIGHT(int0), 0, 0, 1, 28680);
    int0 = 21233682;
    script6204(int0, IF_GETWIDTH(int0), IF_GETHEIGHT(int0), 0, 0, 1, 28680);
    var int1 = 0;
    var int2 = 0;
    if ((AUTOSETUP_GETLEVEL() == 2)) {
        int1 = 1;
    } else if (((varclient_6503 == 0) && (AUTOSETUP_GETLEVEL() == 0))) {
        int2 = 1;
    };
    script13972(21233707, -1, 41838, "POWER SAVE", int1);
    script13972(21233706, -1, 41838, "BALANCED", varclient_6503);
    if ((int1 == 0)) {
        IF_SETTRANS(128, 21233698);
        IF_SETTRANS(128, 21233699);
    } else {
        IF_SETTRANS(0, 21233698);
        IF_SETTRANS(0, 21233699);
    };
    if ((varclient_6503 == 0)) {
        IF_SETTRANS(128, 21233702);
        IF_SETTRANS(128, 21233703);
    } else {
        IF_SETTRANS(0, 21233702);
        IF_SETTRANS(0, 21233703);
    };
    if ((int2 == 0)) {
        IF_SETTEXT("Your settings have not been customised", 21233705);
    } else {
        IF_SETTEXT("Your settings have been customised", 21233705);
    };
    script1191(21233676, int2, 1);
    return;
}