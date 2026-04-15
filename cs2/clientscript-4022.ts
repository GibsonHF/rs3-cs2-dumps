//
function script4022(int0: component, int1: component): void {
    var string0 = varclient_2554;
    var int2 = IF_GETLAYER(int0);
    var int3 = IF_GETFONTMETRICS(int0);
    var int4 = IF_GETWIDTH(IF_GETLAYER(int2));
    var int5 = IF_GETHEIGHT(IF_GETLAYER(int2));
    var int6 = (PARAHEIGHT(string0, int4, int3) * 15);
    if ((int6 <= int5)) {
        IF_SETSIZE(0, int6, 1, 0, int2);
        IF_SETPOSITION(0, 0, 1, 1, int2);
        IF_SETSIZE(0, 0, 1, 1, int0);
        IF_SETHIDE(true, int1);
        CC_DELETEALL(int1);
    } else {
        int6 = (PARAHEIGHT(string0, (int4 - 16), int3) * 15);
        IF_SETSIZE(16, 0, 1, 1, int2);
        IF_SETPOSITION(0, 0, 0, 0, int2);
        IF_SETSIZE(0, int6, 1, 0, int0);
        IF_SETSCROLLSIZE(0, int6, int2);
        IF_SETSCROLLPOS(0, 0, int2);
        IF_SETHIDE(false, int1);
        CC_DELETEALL(int1);
        script31(int1, int2, 5666 as graphic, 5663 as graphic, 5664 as graphic, 5665 as graphic, 5686 as graphic, 5685 as graphic);
    };
    IF_SETTEXT(string0, int0);
    return;
}