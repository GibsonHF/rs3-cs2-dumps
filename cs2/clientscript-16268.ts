//
function script16268(int0: number, int1: number, int2: number, int3: number, int4: number, int5: number, int6: number, int7: number, int8: number): [number, number] {
    var int9 = script12098(int4, int5);
    var int10 = script2553(int4, int5);
    var int11 = script14715(int4, int5);
    var string0 = script12095(int4, int5);
    var int12 = 36;
    if ((((((int11 != -1 as obj) && (item_getparam(int11, 2640) > 0)) && (item_getparam(int11, 2640) != 62)) && (item_getparam(int11, 2641) == 0)) && (item_getparam(int11, 2640) == varclient_1753))) {
        int9 = item_getparam(int11, 2645);
        if ((((((item_getparam(int11, 2639) == true) || (OC_MEMBERS(item_getparam(int11, 2655)) == 1)) || (OC_MEMBERS(item_getparam(int11, 2656)) == 1)) || (OC_MEMBERS(item_getparam(int11, 2650)) == 1)) || (OC_MEMBERS(int11) == 1))) {
            int10 = 1;
        };
    };
    if (((int10 == 1) && (int8 == 1))) {
        int12 = 0;
    };
    if (((int9 > int6) && (int9 <= int7))) {
        CC_CREATE(comp(1218, 246), 5, int0);  // skillguide:content_layer
        CC_SETSIZE(590, int12, 0, 0);
        CC_SETPOSITION(0, 0, 0, 0);
        CC_SETONCLICK(callback(script5697, -2147483643, int4, int5));
        CC_SETONTIMER(callback(script5692, -2147483643, int2, int4, int5));
        CC_SETPARAM_STRING(5441, string0);
        cc_setparam(8872, ((int9 * int1) + int0));
        cc_setparam(8877, int4);
        cc_setparam(6569, int5);
        if ((int10 == 1)) {
            CC_SETGRAPHIC(9310 as graphic);
        };
        CC_CREATE(comp(1218, 245), 5, IF_GETNEXTSUBID(comp(1218, 245)));  // skillguide:background_layer
        CC_SETSIZE(590, int12, 0, 0);
        CC_SETPOSITION(0, int2, 0, 0);
        var int2 = (int2 + 41);
        switch (varbitplayer_22875) {
            case 2: {
                if ((int3 == 1)) {
                    CC_SETGRAPHIC(6399 as graphic);
                } else {
                    CC_SETGRAPHIC(6398 as graphic);
                };
                break;
            }
            default: {
                if ((int3 == 1)) {
                    CC_SETGRAPHIC(9309 as graphic);
                } else {
                    CC_SETGRAPHIC(9308 as graphic);
                };
                break;
            }
        };
        if ((int12 > 0)) {
            var int3 = script12585(int3);
        };
    };
    return [int2, int3];
}