//
function script3069(int0: component, int1: int, int2: struct): void {
    var int3 = comp(-1, 65535);
    var int4 = comp(-1, 65535);
    var int5 = comp(-1, 65535);
    switch (int0) {
        case 23920658: {
            int3 = comp(365, 5);
            int4 = comp(365, 0);
            int5 = comp(365, 11);
            break;
        }
        default: {
            return;
        }
    };
    CC_DELETEALL(int4);
    CC_DELETEALL(int5);
    var int6 = script10402(script2790(int2));
    var int7 = script18947(int2);
    if ((int6 == -1 as cs2enum)) {
        return;
    };
    var int8 = 0;
    var int9 = ENUM_GETOUTPUTCOUNT(int6);
    var int10 = 8;
    var int11 = 8;
    var int12 = (((1 + ((int9 - 1) / 5)) * 35) + 11);
    var int13 = 0;
    var string0 = "";
    var int14 = 0;
    var int15 = 1;
    if (((CC_FIND(int0, int1) == 1) && (IF_FIND[1](int3) == 1))) {
        CC_SETSIZE[1](186, int12, 0, 0);
        int14 = script3764();
        if ((CC_GETWIDTH() > 186)) {
            int14 = (int14 + ((CC_GETWIDTH() - 186) / 2));
        };
        if ((((CC_GETY() + CC_GETHEIGHT()) + 300) > IF_GETHEIGHT(int0))) {
            CC_SETPOSITION[1](int14, (script3765() - int12), 0, 0);
        } else {
            CC_SETPOSITION[1](int14, (script3765() + CC_GETHEIGHT()), 0, 0);
        };
        CC_SETHIDE[1](false);
        CC_SETONTIMER[1](callback(script3083, -2147483645));
    };
    script13990(int4, comp(-1, 65535), 2830 as struct);
    while ((int8 < int9)) {
        int13 = enum_getvalue(0, 0, int6, int8);
        if ((int7 != -1 as cs2enum)) {
            string0 = enum_getvalue(0, 36, int7, int8);
        };
        if ((int13 == -1)) {
            int13 = 0;
            int15 = 0;
        } else {
            int15 = 1;
        };
        script10066(int5, int8, 30, 30, int10, int11, int13, int15, 0);
        CC_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -2147483643));
        CC_SETOP(1, "Select");
        CC_SETONOP(callback(script3082, int3, int0, int1, int13));
        int8 = (int8 + 1);
        if (((++int10 + 35) > 186)) {
            int10 = 8;
            int11 = (int11 + 35);
        };
    };
    return;
}