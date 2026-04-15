//
function script18242(int0: struct, int1: int, int2: int): void {
    var int3 = int0;
    var int4 = 0;
    if ((int3 != -1 as struct)) {
        if (((script16319(1) == int0) && (int2 == 0))) {
            if (((varbitplayer_16576 >= struct_getparam(int0, 2235)) && (script18262(1) == 1))) {
                int4 = 2;
            } else {
                int4 = 1;
            };
        } else if (((script16319(2) == int0) && (int2 == 1))) {
            if (((varbitplayer_16580 >= struct_getparam(int0, 2235)) && (script18262(2) == 1))) {
                int4 = 2;
            } else {
                int4 = 1;
            };
        } else if (((script16319(3) == int0) && (int2 == 2))) {
            if (((varbitplayer_16584 >= struct_getparam(int0, 2235)) && (script18262(3) == 1))) {
                int4 = 2;
            } else {
                int4 = 1;
            };
        } else if (((script16319(4) == int0) && (int2 == 3))) {
            if (((varbitplayer_16588 >= struct_getparam(int0, 2235)) && (script18262(4) == 1))) {
                int4 = 2;
            } else {
                int4 = 1;
            };
        } else if (((script16319(5) == int0) && (int2 == 4))) {
            if (((varbitplayer_16592 >= struct_getparam(int0, 2235)) && (script18262(5) == 1))) {
                int4 = 2;
            } else {
                int4 = 1;
            };
        };
    };
    var int5 = 28556;
    var int6 = 0;
    var int7 = 0;
    var int8 = 0;
    var int9 = 50;
    var int10 = 50;
    var int11 = -1 as graphic;
    var int12 = 1;
    var int13 = 0;
    var int14 = false;
    var int15 = 0;
    var string0 = "";
    if ((int3 == -1 as struct)) {
        int14 = true;
        int15 = script17176();
        string0 = script17177(int15);
    };
    var int16 = false;
    var int17 = varplayer_3233;
    if (((int17 - 1) == int1)) {
        int16 = true;
    };
    var int18 = 168 as fontmetrics;
    if ((int3 == -1 as struct)) {
        int18 = 207 as fontmetrics;
    } else {
        string0 = script17040(int3);
    };
    if ((CC_FIND(comp(1343, 19), int1) == 1)) {
        int13 = (0 + ((49 + 10) * int2));
        script7858(int1, 0, int12, int13, 0, 0, (254 - 3), 49, 0, 0, 4476 as dbrow, string0);
        script7872(script12585(int14), 1, true, int16);
        CC_SETTEXTFONT(int18);
        CC_SETTEXTSHADOW(false);
        CC_SETHIDE(false);
    };
    var int19 = 0;
    var int20 = 0;
    var int21 = 0;
    var int22 = 0;
    if ((CC_FIND(comp(1343, 20), int1) == 1)) {
        int11 = struct_getparam(int0, 1271);
        if (((int3 == -1 as struct) && (int15 != -2))) {
            int11 = 13161 as graphic;
        };
        CC_SETHIDE(false);
        CC_SETGRAPHIC(int11);
        if ((int11 != -1 as graphic)) {
            int7 = (35 - int9);
            int8 = (35 - int10);
        } else {
            int7 = 0;
            int8 = 0;
            int9 = 35;
            int10 = 35;
        };
        if (((int9 >= 35) || (int10 >= 35))) {
            CC_SETSIZE(35, 35, 0, 0);
            CC_SETPOSITION(4, (7 + ((49 + 10) * int2)), 0, 0);
        } else {
            CC_SETSIZE(int9, int10, 0, 0);
            CC_SETPOSITION((4 + (int7 / 2)), (((int8 / 2) + 7) + ((49 + 10) * int2)), 0, 0);
        };
        int19 = CC_GETX();
        int20 = CC_GETY();
        int21 = CC_GETWIDTH();
        int22 = CC_GETHEIGHT();
    };
    var int23 = -1 as graphic;
    if ((CC_FIND(comp(1343, 22), int1) == 1)) {
        switch (int4) {
            case 2: {
                int23 = script3561(-2);
                break;
            }
        };
        if ((int23 == -1 as graphic)) {
            CC_SETHIDE(true);
        } else {
            CC_SETHIDE(false);
            CC_SETGRAPHIC(int23);
            CC_SETSIZE(int21, int22, 0, 0);
            CC_SETPOSITION(int19, int20, 0, 0);
        };
    };
    if (((int3 != -1 as struct) && (CC_FIND(comp(1343, 23), int1) == 1))) {
        CC_SETHIDE(false);
        CC_SETSIZE(254, 49, 0, 0);
        CC_SETPOSITION(1, (0 + ((49 + 10) * int2)), 0, 0);
        CC_SETTRANS(255);
        CC_SETOP(1, "Select");
        CC_SETONOP(callback(script18246, 88014867, 88014869, -2147483643));
    };
    return;
}