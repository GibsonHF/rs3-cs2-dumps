//
function script9576(int0: component): unknown_int {
    var int1 = 0;
    var int2 = 0;
    var int3 = 0;
    var int4 = 0;
    if ((IF_FIND(int0) == 1)) {
        int3 = script9544(CC_GETX(), CC_GETWIDTH(), IF_GETWIDTH(CC_GETPARENTLAYER()), cc_getparam(5928));
        int4 = script9544(CC_GETY(), CC_GETHEIGHT(), IF_GETHEIGHT(CC_GETPARENTLAYER()), cc_getparam(5929));
        if ((cc_getparam(8058) == 1)) {
            int1 = (cc_getparam(5926) - int3);
            int2 = (cc_getparam(5927) - int4);
        } else {
            int1 = (cc_getparam(8054) - int3);
            int2 = (cc_getparam(8056) - int4);
        };
        if ((int1 > 0)) {
            int1 = MIN(cc_getparam(5829), int1);
        } else {
            int1 = MAX((0 - cc_getparam(5829)), int1);
        };
        if ((int2 > 0)) {
            int2 = MIN(cc_getparam(5830), int2);
        } else {
            int2 = MAX((0 - cc_getparam(5830)), int2);
        };
        CC_SETPOSITION((int3 + int1), (int4 + int2), cc_getparam(5928), cc_getparam(5929));
        if (((int1 == 0) && (int2 == 0))) {
            return 0;
        };
        return 1;
    };
    return 0;
}