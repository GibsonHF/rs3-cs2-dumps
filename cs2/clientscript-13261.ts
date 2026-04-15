//
function script13261(int0: component): void {
    if (((IF_FIND(int0) == 1) && ((cc_getparam(5945) + 50) > CLIENTCLOCK()))) {
        return;
    };
    var int1 = -1;
    var int2 = -1 as obj;
    var int3 = -1;
    var int4 = 35731;
    var int5 = struct_getparam(int4, 6397);
    if (((int5 != comp(-1, 65535)) && (IF_FIND(int5) == 1))) {
        int1 = cc_getparam(6361);
        int2 = cc_getparam(4680);
        if (((int1 == -1) || (int2 == -1 as obj))) {
            return;
        };
        if (((int1 != cc_getparam(6360)) && ((cc_getparam(5945) + 50) <= CLIENTCLOCK()))) {
            CC_DELETEALL(int0);
            CC_CREATE(int0, 5, 0);
            CC_SETOBJECT(int2, 1);
            CC_SETONOP(callback(script13263, 10));
            CC_TRIGGEROP(1);
            if ((IF_FIND(int0) == 1)) {
                cc_setparam(5945, CLIENTCLOCK());
            };
        };
    };
    return;
}