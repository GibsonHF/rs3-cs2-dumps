//[proc,quickchat_menu_scroll]
function script1064(int0: int, int1: int): void {
    var int2 = enum_getvalue(0, 9, script8602(int1), int0);
    var int3 = IF_GETLAYER(int2);
    if ((IF_GETSCROLLWIDTH(int3) == 0)) {
        IF_SETSCROLLSIZE(IF_GETWIDTH(int3), 0, int3);
    };
    var int4 = IF_GETWIDTH(int2);
    var int5 = IF_GETX(int2);
    while ((int0 > 0)) {
        var int0 = (int0 - 1);
        int2 = enum_getvalue(0, 9, script8602(int1), int0);
        if (((IF_GETHIDE(int2) == false) && ((int4 + IF_GETWIDTH(int2)) <= IF_GETWIDTH(int3)))) {
            int4 = (int4 + IF_GETWIDTH(int2));
            int5 = IF_GETX(int2);
        } else {
            int0 = -1;
        };
    };
    if ((IF_GETSCROLLX(int3) == int5)) {
        IF_SETONTIMER(callback(), int3);
    } else {
        IF_SETONTIMER(callback(script1065, int3, int5), int3);
    };
    return;
}