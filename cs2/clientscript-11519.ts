//
function script11519(int0: number, int1: number, int2: number, int3: number, int4: number, int5: number, int6: number): void {
    if ((varclient_4888 == int4)) {
        if (((int5 == 0) && (CC_FIND(int0, int1) == 1))) {
            script11517(int2, int3, 28303);
            CC_SETONMOUSEREPEAT(callback());
            CC_SETONMOUSELEAVE(callback());
            CC_SETONVARCTRANSMIT(callback(script11518, int0, int1, int2, int3, int4, 1, int6, 4888, 1));
        };
    } else if (((int5 == 1) && (CC_FIND(int0, int1) == 1))) {
        if ((int6 == 1)) {
            var int3 = (IF_GETNEXTSUBID(int2) - 16);
            script11517(int2, int3, 21363);
            CC_SETONMOUSEREPEAT(callback(script11516, int2, int3, int4, 29006));
            CC_SETONMOUSELEAVE(callback(script11516, int2, int3, int4, 21363));
            CC_SETONVARCTRANSMIT(callback(script11518, int0, int1, int2, int3, int4, 0, int6, 4888, 1));
        } else {
            script11517(int2, int3, 21363);
            CC_SETONMOUSEREPEAT(callback(script11516, int2, int3, int4, 29006));
            CC_SETONMOUSELEAVE(callback(script11516, int2, int3, int4, 21363));
            CC_SETONVARCTRANSMIT(callback(script11518, int0, int1, int2, int3, int4, 0, int6, 4888, 1));
        };
    };
    return;
}