//
function script4318(): void {
    var int0 = comp(1096, 20);
    var int1 = comp(1096, 21);
    var int2 = 23;
    var int3 = MAX(IF_GETHEIGHT(int1), (((varclient_1517 / 2) + 1) * int2));
    var int4 = IF_GETSCROLLY(int1);
    if ((int3 > IF_GETHEIGHT(comp(1096, 21)))) {
        IF_SETSCROLLSIZE(IF_GETWIDTH(int1), int3, int1);
        IF_SETSCROLLPOS(0, int4, int1);
        IF_SETHIDE(false, int0);
        script31(int0, int1, 5666 as graphic, 5663 as graphic, 5664 as graphic, 5665 as graphic, 5686 as graphic, 5685 as graphic);
    } else {
        IF_SETSCROLLSIZE(IF_GETWIDTH(int1), IF_GETHEIGHT(int1), int1);
        IF_SETSCROLLPOS(0, 0, int1);
        script31(int0, int1, 5666 as graphic, 5663 as graphic, 5664 as graphic, 5665 as graphic, 5686 as graphic, 5685 as graphic);
    };
    return;
}