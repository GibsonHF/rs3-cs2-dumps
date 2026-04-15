//
function script6898(int0: component, int1: component): void {
    CC_DELETEALL(int0);
    CC_DELETEALL(int1);
    var int2 = (script7593(`${varclient_2442}${varclient_6796}`, IF_GETWIDTH(int0), 27 as fontmetrics, 12) + 5);
    CC_CREATE(int0, 4, 0);
    CC_SETPOSITION(0, 0, 1, 0);
    CC_SETSIZE(0, int2, 1, 0);
    CC_SETTEXTFONT(27 as fontmetrics);
    CC_SETTEXTALIGN(1, 0, 0);
    CC_SETCOLOUR(16777215);
    CC_SETTEXT(`${varclient_2442}${varclient_6796}`);
    if ((int2 > IF_GETHEIGHT(int0))) {
        IF_SETPOSITION(0, 0, 0, 1, int0);
        IF_SETSCROLLSIZE(0, int2, int0);
        IF_SETSCROLLPOS(0, 0, int0);
        IF_SETHIDE(false, int1);
        script7791(int1, int0);
    } else {
        IF_SETPOSITION(0, 0, 1, 1, int0);
        IF_SETSCROLLSIZE(0, 0, int0);
        IF_SETSCROLLPOS(0, 0, int0);
        IF_SETHIDE(true, int1);
    };
    return;
}