//
function script11519(int0: component, int1: int, int2: component, int3: int, int4: int, int5: unknown_int, int6: unknown_int): void {
    if ((varclient_4888 == int4)) {
        if (((int5 == 0) && (CC_FIND(int0, int1) == 1))) {
            script11517(int2, int3, 28303 as struct);
            CC_SETONMOUSEREPEAT(callback());
            CC_SETONMOUSELEAVE(callback());
            CC_SETONVARCTRANSMIT(callback(script11518, int0, int1, int2, int3, int4, 1, int6, 4888, 1));
        };
    } else if (((int5 == 1) && (CC_FIND(int0, int1) == 1))) {
        if ((int6 == 1)) {
            var int3 = (IF_GETNEXTSUBID(int2) - 16);
            script11517(int2, int3, 21363 as struct);
            CC_SETONMOUSEREPEAT(callback(script11516, int2, int3, int4, 29006));
            CC_SETONMOUSELEAVE(callback(script11516, int2, int3, int4, 21363));
            CC_SETONVARCTRANSMIT(callback(script11518, int0, int1, int2, int3, int4, 0, int6, 4888, 1));
        } else {
            script11517(int2, int3, 21363 as struct);
            CC_SETONMOUSEREPEAT(callback(script11516, int2, int3, int4, 29006));
            CC_SETONMOUSELEAVE(callback(script11516, int2, int3, int4, 21363));
            CC_SETONVARCTRANSMIT(callback(script11518, int0, int1, int2, int3, int4, 0, int6, 4888, 1));
        };
    };
    return;
}