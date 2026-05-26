//
function script18031(): void {
    var int0 = 80412708;
    var int1 = 80412711;
    var int2 = 80412710;
    var int3 = 80412709;
    var int4 = 80412706;
    var int5 = 0;
    if ((IF_FIND(int1) == 1)) {
        int5 = cc_getparam(8193);
    };
    if ((int5 == 0)) {
        IF_SETSIZE(IF_GETWIDTH(int0), 30, 0, 0, int0);
        IF_SETSIZE(IF_GETWIDTH(int2), 30, 0, 0, int2);
        IF_SETSIZE(IF_GETWIDTH(int3), 30, 0, 0, int3);
        IF_SETSIZE(IF_GETWIDTH(int4), 63, 0, 0, int4);
    } else {
        IF_SETSIZE(IF_GETWIDTH(int0), 130, 0, 0, int0);
        IF_SETSIZE(IF_GETWIDTH(int2), 130, 0, 0, int2);
        IF_SETSIZE(IF_GETWIDTH(int3), 130, 0, 0, int3);
        IF_SETSIZE(IF_GETWIDTH(int4), 163, 0, 0, int4);
    };
    script18032(int1, script734(int5));
    return;
}