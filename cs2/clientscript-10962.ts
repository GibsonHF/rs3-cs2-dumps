//
function script10962(): void {
    var string0 = "Unlocked!";
    if ((script4148() == 1)) {
        string0 = "Passed";
    };
    var int0 = IF_GETHEIGHT(103743497);
    if ((int0 >= 35)) {
        IF_SETTEXT(string0, 103743523);
        IF_SETHIDE(0, 103743542);
    };
    if ((int0 >= 105)) {
        IF_SETTEXT(string0, 103743521);
        IF_SETHIDE(0, 103743541);
    };
    if ((int0 >= 225)) {
        IF_SETTEXT("Unlocked!", 103743519);
        IF_SETHIDE(0, 103743540);
    };
    if ((int0 >= 325)) {
        IF_SETTEXT("Unlocked!", 103743518);
        IF_SETHIDE(0, 103743539);
    };
    if ((int0 >= 398)) {
        IF_SETHIDE(0, 103743556);
    };
    if (((int0 >= 398) && (IF_GETHEIGHT(103743496) >= 398))) {
        IF_SETTEXT("Unlocked!", 103743516);
        IF_SETHIDE(0, 103743538);
    };
    return;
}