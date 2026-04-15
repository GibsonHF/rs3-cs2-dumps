//
function script10649(): void {
    if ((script4157() != 5)) {
        IF_SETHIDE(true, comp(662, 90));
        return;
    };
    IF_SETHIDE(false, comp(662, 90));
    var int0 = 1;
    var int1 = -1 as struct;
    var int2 = 43384922;
    var int3 = comp(-1, 65535);
    var int4 = comp(-1, 65535);
    var int5 = comp(-1, 65535);
    var int6 = 0;
    var int7 = 0;
    while ((++int6 <= 3)) {
        int0 = script11356(int6);
        int1 = enum_getvalue(0, 73, 9013 as cs2enum, int0);
        switch (int6) {
            case 1: {
                int3 = comp(662, 100);
                int4 = comp(662, 102);
                int5 = comp(662, 101);
                break;
            }
            case 2: {
                int3 = comp(662, 97);
                int4 = comp(662, 99);
                int5 = comp(662, 98);
                break;
            }
            case 3: {
                int3 = comp(662, 92);
                int4 = comp(662, 94);
                int5 = comp(662, 93);
                break;
            }
        };
        if ((IF_FIND(int3) == 1)) {
            if ((int1 != -1 as struct)) {
                if (((script11359(int1) == 0) || (int1 == 31332 as struct))) {
                    CC_SETGRAPHIC(struct_getparam(int1, 5060));
                } else {
                    CC_SETGRAPHIC(struct_getparam(int1, 5061));
                };
                CC_SETONMOUSEREPEAT(callback(script11363, int1, -2147483645, -1));
                CC_SETONMOUSELEAVE(callback(script8805));
            } else {
                if ((int6 > varclient_4787)) {
                    CC_SETONMOUSEREPEAT(callback(script11362, int2, -1));
                    CC_SETGRAPHIC(24901);
                } else {
                    CC_SETONMOUSEREPEAT(callback(script11363, -1, -2147483645, -1));
                    CC_SETGRAPHIC(18269);
                };
                CC_SETONMOUSELEAVE(callback(script8805));
            };
        };
        script11371(int1, int4, int5);
    };
    return;
}