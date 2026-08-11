//
function script4318(): void {
    var int0 = comp(1096, 20);  // clansettings:list_scrollbar_layer
    var int1 = comp(1096, 21);  // clansettings:list_scrolling_layer
    var int2 = 23;
    var int3 = MAX(IF_GETHEIGHT(int1), (((varclient_1517 / 2) + 1) * int2));
    var int4 = IF_GETSCROLLY(int1);
    if ((int3 > IF_GETHEIGHT(comp(1096, 21)))) {  // clansettings:list_scrolling_layer
        IF_SETSCROLLSIZE(IF_GETWIDTH(int1), int3, int1);
        IF_SETSCROLLPOS(0, int4, int1);
        IF_SETHIDE(false, int0);
        script31(int0, int1, 5666, 5663, 5664, 5665, 5686, 5685);
    } else {
        IF_SETSCROLLSIZE(IF_GETWIDTH(int1), IF_GETHEIGHT(int1), int1);
        IF_SETSCROLLPOS(0, 0, int1);
        script31(int0, int1, 5666, 5663, 5664, 5665, 5686, 5685);
    };
    return;
}