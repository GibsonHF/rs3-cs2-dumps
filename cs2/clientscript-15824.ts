//
function script15824(int0: struct, int1: component, int2: graphic, int3: obj, int4: int, int5: int, int6: int): int {
    script16144(int0, int2, int3, int4, int5, int6);
    var int7 = -1 as obj;
    var int8 = -1 as inv;
    var [int3, int7, int8] = script13265(int3);
    switch (int0) {
        case 47781: {
            CC_SETONMOUSEREPEAT(callback(script18171, int5, int6, int3, int7, int1, CC_GETID()));
            break;
        }
        default: {
            CC_SETONMOUSEREPEAT(callback(script12893, int0, int5, int6, int3, int7, int1, CC_GETID()));
            break;
        }
    };
    return IF_GETNEXTSUBID(int1);
}