//
function script10964(): void {
    var string0 = "Unlocked!";
    if ((script4148() == true)) {
        string0 = "Passed";
    };
    var int0 = IF_GETHEIGHT(comp(1583, 8));
    if ((int0 >= 35)) {
        IF_SETTEXT(string0, comp(1583, 36));
        IF_SETHIDE(false, comp(1583, 58));
    };
    if ((int0 >= 105)) {
        IF_SETTEXT(string0, comp(1583, 34));
        IF_SETHIDE(false, comp(1583, 57));
    };
    if ((int0 >= 225)) {
        IF_SETTEXT("Unlocked!", comp(1583, 32));
        IF_SETHIDE(false, comp(1583, 56));
    };
    if ((int0 >= 325)) {
        IF_SETTEXT("Unlocked!", comp(1583, 29));
        IF_SETHIDE(false, comp(1583, 55));
    };
    if ((int0 >= 398)) {
        IF_SETHIDE(false, comp(1583, 69));
    };
    if (((int0 >= 398) && (IF_GETHEIGHT(comp(1583, 9)) >= 398))) {
        IF_SETTEXT("Unlocked!", comp(1583, 28));
        IF_SETHIDE(false, comp(1583, 50));
    };
    return;
}