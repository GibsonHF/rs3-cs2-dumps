//
function script4589(int0: component): void {
    var int1 = script411(int0);
    var int2 = struct_getparam(int1, 7291);
    var int3 = struct_getparam(int1, 7292);
    var int4 = struct_getparam(int1, 7293);
    var int5 = struct_getparam(int1, 7294);
    var int6 = struct_getparam(int1, 7295);
    var int7 = struct_getparam(int1, 7296);
    var int8 = struct_getparam(int1, 7297);
    var int9 = struct_getparam(int1, 7298);
    var int10 = struct_getparam(int1, 7299);
    var int11 = struct_getparam(int1, 7300);
    var int12 = struct_getparam(int1, 7301);
    var int13 = struct_getparam(int1, 7302);
    var int14 = struct_getparam(int1, 7303);
    var int15 = struct_getparam(int1, 7305);
    var int16 = struct_getparam(int1, 7306);
    var int17 = struct_getparam(int1, 7310);
    var int18 = struct_getparam(int1, 7307);
    var int19 = struct_getparam(int1, 7308);
    var int20 = struct_getparam(int1, 7309);
    var int21 = struct_getparam(int1, 7313);
    var int22 = 0;
    while ((int22 < 600)) {
        if ((CC_FIND(int8, int22) == 1)) {
            CC_SETHIDE(true);
        };
        if ((CC_FIND(int7, int22) == 1)) {
            CC_SETHIDE(true);
        };
        if ((CC_FIND(int9, int22) == 1)) {
            CC_SETHIDE(true);
        };
        if ((CC_FIND(int10, int22) == 1)) {
            CC_SETHIDE(true);
        };
        if ((CC_FIND(int11, int22) == 1)) {
            CC_SETHIDE(true);
        };
        if ((CC_FIND(int12, int22) == 1)) {
            CC_SETHIDE(true);
        };
        int22 = (int22 + 1);
    };
    IF_SETHIDE(true, int2);
    IF_SETHIDE(false, int13);
    IF_SETTEXT(script9465(4), int14);
    IF_SETTEXT("About Clans", int21);
    IF_SETONCLICK(callback(script10183), int21);
    IF_SETHIDE(0, int21);
    IF_SETHIDE(1, int15);
    IF_SETHIDE(0, int3);
    IF_SETHIDE(0, int5);
    if ((unk10993(0) == 1)) {
        script4470(int3, int4);
        script5395(int5, int6);
    } else {
        IF_SETHIDE(false, int4);
        IF_SETHIDE(false, int6);
    };
    stack(6256);
    stack(int16);
    IF_SETGRAPHIC();
    IF_SETHIDE(1, int18);
    var int23 = 19;
    if ((script6431() == 1)) {
        int23 = 27;
    };
    IF_SETSIZE(1, int23, 0, 0, int19);
    varclient_1518 = -1;
    varclient_2353 = "";
    IF_SETTEXT("", int20);
    var string0 = "Join your clan chat channel";
    IF_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -2147483643), int17);
    IF_SETONMOUSELEAVE(callback(script8805), int17);
    IF_SETOP(1, "Join Clan Chat channel", int17);
    return;
}