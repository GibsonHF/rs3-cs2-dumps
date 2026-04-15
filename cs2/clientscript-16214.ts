//
function script16214(int0: component, int1: int, int2: unknown_int, int3: int, int4: int, int5: int, int6: int): void {
    if ((MODULO(CLIENTCLOCK(), 8) != 0)) {
        return;
    };
    var int7 = -1;
    var int8 = -1;
    var int9 = -1;
    var int10 = UI_GETCATEGORY(int1);
    if ((CC_FIND(int0, int1) == 1)) {
        int7 = cc_getparam(6408);
        int8 = cc_getparam(6409);
        int9 = cc_getparam(5945);
        if ((int7 < int8)) {
            cc_setparam(6408, (int7 + int4));
            if (((int6 != -1) && (int6 <= 255))) {
                cc_setparam(5945, (int9 + 1));
                CC_SETONTIMER(callback(script16214, -2147483645, -2147483643, int2, int3, int4, int5, (int6 + 1)));
                script7918(int10, int6, 0, 0, 1, 2, 45, 45, 0, 0, int2);
                CC_SETONTIMER(callback(script16215, -2147483645, int10, -2147483643, int3, int4));
                cc_setparam(6408, int7);
            };
        } else if (((int9 == 0) && (CC_FIND[1](int0, int3) == 1))) {
            cc_setparam(6408, int8);
            cc_setparam(6409, int8);
            cc_setparam(5945, 0);
            CC_SETONTIMER(callback());
            CC_DELETEALLNESTED();
            CC_SETTEXT[1](script361(int8, 0));
        } else if ((int5 < 5)) {
            CC_SETONTIMER(callback(script16214, -2147483645, -2147483643, int2, int3, int4, (int5 + 1), int6));
        } else {
            cc_setparam(5945, 0);
        };
    };
    return;
}