//
function script8362(int0: int, int1: int, int2: int): void {
    var int3 = script10405(int1);
    var int4 = script10405(int0);
    var int5 = script8418(int4, 0);
    var int6 = struct_getparam(int4, 3509);
    if ((int6 == comp(-1, 65535))) {
        return;
    };
    var int7 = script8373(int2);
    CC_CREATE(int6, 5, int7);
    script12591(struct_getparam(int5, 8297), int4);
    CC_SETPOSITION((struct_getparam(int5, 3578) * int2), 0, 0, 0);
    CC_SETSIZE(struct_getparam(int5, 3578), struct_getparam(int5, 3577), 0, 0);
    CC_SETGRAPHIC(struct_getparam(int5, 3613));
    CC_SETPARAM_INT(3536, int1);
    CC_SETONCLICK(callback(script8364, int0, int1));
    if ((varbitplayer_27169 == 0)) {
        if (((script6431() == true) && (strcmp(struct_getparam(int3, 8095), "") != 0))) {
            CC_SETONMOUSEREPEAT(callback(script8799, struct_getparam(int3, 8095), -2147483645, -2147483643));
        } else {
            CC_SETONMOUSEREPEAT(callback(script8799, struct_getparam(int3, 3493), -2147483645, -2147483643));
        };
    } else if ((strcmp(struct_getparam(int3, 4471), "") == 0)) {
        CC_SETONMOUSEREPEAT(callback(script8799, struct_getparam(int3, 3493), -2147483645, -2147483643));
    } else {
        CC_SETONMOUSEREPEAT(callback(script8799, struct_getparam(int3, 4471), -2147483645, -2147483643));
    };
    CC_SETONMOUSELEAVE(callback(script8805));
    CC_SETOPBASE("Open struct_param($from_window_data,toplevel_v2_window_name)");
    int7 = (int7 + 1);
    var int8 = ((CC_GETX() + (CC_GETWIDTH() / 2)) + struct_getparam(int5, 5203));
    CC_CREATE(int6, 5, int7);
    script12591(0, int4);
    CC_SETSIZE(struct_getparam(int5, 3569), struct_getparam(int5, 3570), 0, 0);
    CC_SETPOSITION((int8 - (CC_GETWIDTH() / 2)), 0, 0, 1);
    CC_SETGRAPHIC(script13858(int3, 1, 0, 4, 1));
    var int9 = (MIN(CC_GETWIDTH(), CC_GETHEIGHT()) / 2);
    var int10 = (CC_GETX() + int9);
    var int11 = (CC_GETY() + (CC_GETHEIGHT() / 2));
    script14933(int6, ++int7, int10, int11, int9, int9, 10999);
    var int12 = -1;
    var int13 = 0;
    var int14 = 0;
    if ((int0 == int1)) {
        int14 = true;
    } else {
        stack(409632);
        stack(int1);
        DB_FIND(0);
        dbrow_findnext();
        int12 = stack();
        int13 = script17032(int12);
        if ((int13 <= 0)) {
            int14 = true;
        };
    };
    CC_SETHIDE(int14);
    script14934(int6, ++int7, int13, int10, int11, int9, int9);
    CC_SETHIDE(int14);
    return;
}