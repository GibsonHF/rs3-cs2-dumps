//
function script8356(int0: int, int1: int, int2: int, int3: unknown_int, int4: unknown_int): void {
    var int5 = script10405(int0);
    var int6 = script10405(int1);
    var int7 = struct_getparam(int5, 3508);
    var int8 = struct_getparam(int6, 3508);
    var int9 = struct_getparam(int5, 3509);
    var int10 = struct_getparam(int6, 3509);
    var int11 = struct_getparam(int5, 3503);
    var int12 = struct_getparam(int6, 3503);
    var int13 = script8374(int9);
    var int14 = script8374(int10);
    var int15 = (int13 + int14);
    define_array(int15);
    var int16 = 0;
    var int17 = 0;
    var int18 = 0;
    var int2 = MAX(0, MIN(int2, int13));
    var int19 = script8373(0);
    while ((int17 < int2)) {
        if ((CC_FIND(int9, int19) == 1)) {
            pop_array(int16, cc_getparam(3536));
        };
        int19 = (int19 + 4);
        int17 = (int17 + 1);
        int16 = (int16 + 1);
    };
    int19 = script8373(0);
    while ((int18 < int14)) {
        if ((CC_FIND(int10, int19) == 1)) {
            pop_array(int16, cc_getparam(3536));
        };
        int19 = (int19 + 4);
        int18 = (int18 + 1);
        int16 = (int16 + 1);
    };
    int19 = script8373(int17);
    while ((int17 < int13)) {
        if ((CC_FIND(int9, int19) == 1)) {
            pop_array(int16, cc_getparam(3536));
        };
        int19 = (int19 + 4);
        int17 = (int17 + 1);
        int16 = (int16 + 1);
    };
    CC_DELETEALL(int10);
    int16 = 0;
    while ((int16 < int15)) {
        if ((script19633(push_array(int16)) == true)) {
            script8362(int1, push_array(int16), int16);
        };
        int16 = (int16 + 1);
    };
    script8378(0, int0);
    if ((int3 == 1)) {
        IF_SETHIDE(true, int11);
    } else {
        IF_SETHIDE(false, int11);
    };
    script8355(int1, int0);
    var int20 = -1;
    if ((int4 == 1)) {
        script8705(int0);
        if ((int2 > 0)) {
            int20 = push_array((int2 - 1));
            if ((int20 != -1)) {
                script8355(int1, int20);
                script8705(int20);
            };
        };
        int20 = push_array(int2);
        if ((int20 != -1)) {
            script8355(int1, int20);
            script8705(int20);
        };
        if (((int2 + int14) < int15)) {
            int20 = push_array(((int2 + int14) - 1));
            if ((int20 != -1)) {
                script8355(int1, int20);
                script8705(int20);
            };
            int20 = push_array((int2 + int14));
            if ((int20 != -1)) {
                script8355(int1, int20);
                script8705(int20);
            };
        };
    };
    script8378(0, int1);
    if ((int3 == 1)) {
        script117(int0, int1);
        IF_SETHIDE(false, int12);
    } else {
        IF_SETHIDE(true, int12);
    };
    script8387(IF_GETX(int11), IF_GETY(int11), IF_GETWIDTH(int11), IF_GETHEIGHT(int11), int1);
    var int21 = 0;
    if ((int3 == 0)) {
        int21 = script8372(int9, int0);
        script8359(int0, int15, int21);
        script8370(int0, int21);
    } else {
        int21 = script8372(int10, int1);
        IF_SETSCROLLSIZE(IF_GETSCROLLWIDTH(int9), IF_GETSCROLLHEIGHT(int9), int10);
        IF_SETSCROLLPOS(IF_GETSCROLLX(int9), IF_GETSCROLLY(int9), int10);
        script8359(int1, int15, int21);
        script8370(int1, int21);
    };
    script6739(8);
    return;
}