//
function script4445(int0: component): void {
    var int1 = script411(int0);
    var int2 = struct_getparam(int1, 7317);
    var int3 = struct_getparam(int1, 7318);
    var int4 = struct_getparam(int1, 7319);
    var int5 = struct_getparam(int1, 7320);
    var int6 = struct_getparam(int1, 7321);
    var int7 = struct_getparam(int1, 7322);
    var int8 = struct_getparam(int1, 7323);
    var int9 = struct_getparam(int1, 7327);
    var int10 = struct_getparam(int1, 7328);
    var int11 = struct_getparam(int1, 7329);
    var int12 = 0;
    while ((int12 < 600)) {
        if ((CC_FIND(int4, int12) == 1)) {
            CC_SETHIDE(true);
        };
        if ((CC_FIND(int3, int12) == 1)) {
            CC_SETHIDE(true);
        };
        if ((CC_FIND(int5, int12) == 1)) {
            CC_SETHIDE(true);
        };
        if ((CC_FIND(int6, int12) == 1)) {
            CC_SETHIDE(true);
        };
        if ((CC_FIND(int7, int12) == 1)) {
            CC_SETHIDE(true);
        };
        int12 = (int12 + 1);
    };
    IF_SETOP(1, "Join chat", int11);
    stack(6256);
    stack(int9);
    IF_SETGRAPHIC();
    IF_SETHIDE(1, int2);
    IF_SETHIDE(0, int8);
    IF_SETTEXT("", int10);
    var string0 = "Join another<br>clan's clan chat.";
    IF_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -2147483643), int11);
    IF_SETONMOUSELEAVE(callback(script8805), int11);
    IF_SETOP(1, "Join Clan Chat channel", int11);
    return;
}