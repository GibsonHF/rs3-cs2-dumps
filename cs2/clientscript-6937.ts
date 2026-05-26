//
function script6937(): void {
    IF_SETSCROLLSIZE(IF_GETHEIGHT(41680903), IF_GETWIDTH(41680903), 41680903);
    CC_DELETEALL(41680896);
    CC_DELETEALL(41680904);
    CC_DELETEALL(41680905);
    var int0 = 0;
    var int1 = 0;
    var int2 = -1;
    var int3 = 0;
    var int4 = 0;
    var int5 = 0;
    var int6 = 0;
    var int7 = 0;
    while ((int0 < 47)) {
        int2 = INV_GETOBJ(676, int0);
        int3 = INV_GETNUM(676, int0);
        CC_CREATE(41680904, 5, int0);
        if (((int2 != -1) && (int3 > 0))) {
            CC_SETSIZE(36, 32, 0, 0);
            CC_SETOBJECT(int2, int3);
            int4 = (int1 / 4);
            int5 = MODULO(int1, 4);
            int6 = ((int5 * 40) + 2);
            int7 = ((int4 * 40) + 4);
            CC_SETPOSITION(int6, int7, 0, 0);
            CC_SETOP(1, "Protect");
            CC_SETOP(2, "Examine");
            CC_SETOPBASE(OC_NAME(int2));
            CC_SETONMOUSEREPEAT(callback(script11555, int2, int0));
            if ((int0 < varbitplayer_28114)) {
                CC_SETOP(1, "Deprotect");
                CC_CREATE(41680896, 3, int0);
                CC_SETSIZE(36, 32, 0, 0);
                CC_SETPOSITION(int6, int7, 0, 0);
                CC_SETFILL(0);
                script11024(1);
            };
            int1 = (int1 + 1);
        } else {
            CC_SETHIDE(1);
        };
        int0 = (int0 + 1);
    };
    var int8 = (((int1 / 4) + 1) * 40);
    if ((int8 < IF_GETHEIGHT(41680903))) {
        int8 = IF_GETHEIGHT(41680903);
    };
    IF_SETSCROLLSIZE(0, int8, 41680903);
    IF_SETSCROLLPOS(0, 0, 41680903);
    script31(41680905, 41680903, 4343, 4340, 4341, 4342, 4337, 4336);
    return;
}