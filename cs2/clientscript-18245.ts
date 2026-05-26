//
function script18245(): void {
    var int0 = script18158(varplayer_3232);
    if ((int0 == -1 as cs2enum)) {
        return;
    };
    CC_DELETEALL(88014867);
    CC_DELETEALL(88014868);
    CC_DELETEALL(88014870);
    CC_DELETEALL(88014869);
    CC_DELETEALL(88014871);
    var int1 = 0;
    var int2 = 0;
    var int3 = ENUM_GETOUTPUTCOUNT(int0);
    var int4 = enum_getvalue(0, 73, int0, 1);
    var int5 = 0;
    while ((int1 < int3)) {
        script18240(int1);
        int1 = (1 + int1);
    };
    int1 = 0;
    var int6 = 0;
    while ((int5 == 0)) {
        int1 = (struct_getparam(int4, 1268) - 1);
        int6 = 0;
        if ((script15771(varplayer_3232, struct_getparam(int4, 1268)) == 1)) {
            int6 = 1;
        };
        if ((int6 == 1)) {
            script18242(int4, int1, int2);
            int2 = (int2 + 1);
        } else {
            if ((CC_FIND(88014867, int1) == 1)) {
                CC_SETHIDE(1);
            };
            if ((CC_FIND(88014868, int1) == 1)) {
                CC_SETHIDE(1);
            };
            if ((CC_FIND(88014869, int1) == 1)) {
                CC_SETHIDE(1);
            };
            if ((CC_FIND(88014870, int1) == 1)) {
                CC_SETHIDE(1);
            };
            if ((CC_FIND(88014871, int1) == 1)) {
                CC_SETHIDE(1);
            };
        };
        if ((struct_getparam(int4, 1269) != 0)) {
            int4 = enum_getvalue(0, 73, int0, struct_getparam(int4, 1269));
        } else {
            int5 = 1;
        };
    };
    return;
}