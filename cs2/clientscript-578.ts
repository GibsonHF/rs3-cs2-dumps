//[proc,objdialog_doscrollbar]
function script578(): void {
    var int0 = IF_GETHEIGHT(25493506);
    var int1 = IF_GETSCROLLHEIGHT(25493506);
    if ((int1 < int0)) {
        IF_SETSCROLLSIZE(0, 0, 25493506);
        IF_SETHIDE(1, 25493509);
    } else {
        IF_SETHIDE(0, 25493509);
    };
    var int2 = (int1 - int0);
    if ((int2 < 0)) {
        int2 = 0;
    };
    var int3 = IF_GETSCROLLY(25493506);
    if ((int3 > int2)) {
        int3 = int2;
    };
    script72(25493509, 25493506, int3);
    return;
}