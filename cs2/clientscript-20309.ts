//
function script20309(int0: component, int1: component, int2: component): void {
    var int3 = 200;
    var int4 = (200 + 35);
    var int5 = 0;
    var int6 = 0;
    var int7 = 0;
    var int8 = 0;
    var int9 = 0;
    while ((int3 < int4)) {
        if ((CC_FINDBYCATEGORY(int0, int3, 0) == 1)) {
            int6 = cc_getparam(9336);
            int7 = cc_getparam(9337);
            if ((int6 <= 0)) {
                CC_DELETE();
            } else {
                int5 = (int5 + CC_GETHEIGHT());
                int5 = operator("+", unk11080(int5));
                int8 = (int8 + int6);
                int9 = (int9 + int7);
                if ((CC_FINDBYCATEGORY(int0, int3, 7) == 1)) {
                    CC_SETTEXT(inttostring(int6, 10));
                };
            };
        };
        int3 = (int3 + 1);
    };
    var int10 = IF_GETSCROLLY(int1);
    if (((IF_FIND(int0) == 1) && (cc_getparam(9340) > 0))) {
        int10 = cc_getparam(9340);
        cc_setparam(9340, 0);
    };
    IF_SETSCROLLSIZE(0, int5, int1);
    script72(int2, int1, int10);
    if ((int5 == 0)) {
        script20323(int1, int0);
    } else if ((script20310(int0, int8, int9) == 1)) {
        varplayer_12329 = (varplayer_12329 + 1);
        IF_SETONRESIZE(callback(script20285), comp(1361, 5));
        IF_CALLONRESIZE(89194501);
    } else {
        IF_SETPARAM_INT(9338, int8, int0);
    };
    return;
}