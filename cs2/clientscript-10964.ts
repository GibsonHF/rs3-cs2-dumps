//
function script10964(): void {
    var string0 = "Unlocked!";
    if ((script4148() == 1)) {
        string0 = "Passed";
    };
    var int0 = IF_GETHEIGHT(103743496);
    if ((int0 >= 35)) {
        IF_SETTEXT(string0, 103743524);
        IF_SETHIDE(0, 103743546);
    };
    if ((int0 >= 105)) {
        IF_SETTEXT(string0, 103743522);
        IF_SETHIDE(0, 103743545);
    };
    if ((int0 >= 225)) {
        IF_SETTEXT("Unlocked!", 103743520);
        IF_SETHIDE(0, 103743544);
    };
    if ((int0 >= 325)) {
        IF_SETTEXT("Unlocked!", 103743517);
        IF_SETHIDE(0, 103743543);
    };
    if ((int0 >= 398)) {
        IF_SETHIDE(0, 103743557);
    };
    if (((int0 >= 398) && (IF_GETHEIGHT(103743497) >= 398))) {
        IF_SETTEXT("Unlocked!", 103743516);
        IF_SETHIDE(0, 103743538);
    };
    return;
}