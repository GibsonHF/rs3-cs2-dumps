//
function script10962(): void {
    var string0 = "Unlocked!";
    if ((script4148() == true)) {
        string0 = "Passed";
    };
    var int0 = IF_GETHEIGHT(comp(1583, 9));
    if ((int0 >= 35)) {
        IF_SETTEXT(string0, comp(1583, 35));
        IF_SETHIDE(false, comp(1583, 54));
    };
    if ((int0 >= 105)) {
        IF_SETTEXT(string0, comp(1583, 33));
        IF_SETHIDE(false, comp(1583, 53));
    };
    if ((int0 >= 225)) {
        IF_SETTEXT("Unlocked!", comp(1583, 31));
        IF_SETHIDE(false, comp(1583, 52));
    };
    if ((int0 >= 325)) {
        IF_SETTEXT("Unlocked!", comp(1583, 30));
        IF_SETHIDE(false, comp(1583, 51));
    };
    if ((int0 >= 398)) {
        IF_SETHIDE(false, comp(1583, 68));
    };
    if (((int0 >= 398) && (IF_GETHEIGHT(comp(1583, 8)) >= 398))) {
        IF_SETTEXT("Unlocked!", comp(1583, 28));
        IF_SETHIDE(false, comp(1583, 50));
    };
    return;
}