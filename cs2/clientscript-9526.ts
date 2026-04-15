//
function script9526(int0: component): void {
    var int1 = 0;
    var int2 = 10;
    var int3 = 0;
    var int4 = 1;
    var int5 = 1;
    var string0 = "";
    if ((CC_FIND(int0, 0) == 1)) {
        CC_SET2DANGLE(((0 - 1872) * MODULO(CLIENTCLOCK(), (65536 / 1872))));
        if ((cc_getparam(3995) != -1)) {
            int3 = MIN((cc_getparam(3995) + int4), cc_getparam(3996));
            cc_setparam(3995, int3);
            string0 = strconcat(inttostring(int3, 10), " %");
            if ((int3 == 100)) {
                cc_setparam(3994, 255);
            };
        };
        int1 = MAX(MIN(cc_getparam(3994), 255), 0);
        if ((int1 != CC_GETTRANS())) {
            if ((int1 < CC_GETTRANS())) {
                int1 = MAX((CC_GETTRANS() - int2), int1);
            } else {
                int1 = MIN((CC_GETTRANS() + int2), int1);
            };
            CC_SETTRANS(int1);
            while ((CC_FIND[1](int0, int5) == 1)) {
                CC_SETTRANS[1](int1);
                if ((int5 > 1)) {
                    CC_SETTEXT[1](string0);
                };
                int5 = (int5 + 1);
            };
        } else if ((int1 == 255)) {
            CC_SET2DANGLE(0);
            IF_SETHIDE(true, int0);
        } else {
            int5 = 2;
            while ((CC_FIND[1](int0, int5) == 1)) {
                CC_SETTEXT[1](string0);
                int5 = (int5 + 1);
            };
        };
    };
    return;
}