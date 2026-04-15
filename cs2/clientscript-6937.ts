//
function script6937(): void {
    IF_SETSCROLLSIZE(IF_GETHEIGHT(comp(636, 7)), IF_GETWIDTH(comp(636, 7)), comp(636, 7));
    CC_DELETEALL(comp(636, 0));
    CC_DELETEALL(comp(636, 8));
    CC_DELETEALL(comp(636, 9));
    var int0 = 0;
    var int1 = 0;
    var int2 = -1 as obj;
    var int3 = 0;
    var int4 = 0;
    var int5 = 0;
    var int6 = 0;
    var int7 = 0;
    while ((int0 < 47)) {
        int2 = INV_GETOBJ(676 as inv, int0);
        int3 = INV_GETNUM(676 as inv, int0);
        CC_CREATE(comp(636, 8), 5, int0);
        if (((int2 != -1 as obj) && (int3 > 0))) {
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
                CC_CREATE(comp(636, 0), 3, int0);
                CC_SETSIZE(36, 32, 0, 0);
                CC_SETPOSITION(int6, int7, 0, 0);
                CC_SETFILL(0);
                script11024(1);
            };
            int1 = (int1 + 1);
        } else {
            CC_SETHIDE(true);
        };
        int0 = (int0 + 1);
    };
    var int8 = (((int1 / 4) + 1) * 40);
    if ((int8 < IF_GETHEIGHT(comp(636, 7)))) {
        int8 = IF_GETHEIGHT(comp(636, 7));
    };
    IF_SETSCROLLSIZE(0, int8, comp(636, 7));
    IF_SETSCROLLPOS(0, 0, comp(636, 7));
    script31(comp(636, 9), comp(636, 7), 4343 as graphic, 4340 as graphic, 4341 as graphic, 4342 as graphic, 4337 as graphic, 4336 as graphic);
    return;
}