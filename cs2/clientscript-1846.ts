//
function script1846(int0: int): void {
    var int1 = script10405(int0);
    var int2 = script8418(int1, 0);
    var int3 = struct_getparam(int1, 3509);
    var int4 = struct_getparam(int1, 3510);
    if ((CC_FIND(int4, 0) == 1)) {
        if ((IF_GETSCROLLX(int3) <= 0)) {
            CC_SETGRAPHIC(struct_getparam(int2, 4154));
        } else if ((script2008() == 1)) {
            CC_SETGRAPHIC(struct_getparam(int2, 3618));
        } else {
            CC_SETGRAPHIC(struct_getparam(int2, 3617));
        };
    };
    if ((CC_FIND(int4, 1) == 1)) {
        if ((IF_GETSCROLLX(int3) >= (IF_GETSCROLLWIDTH(int3) - IF_GETWIDTH(int3)))) {
            CC_SETGRAPHIC(struct_getparam(int2, 4154));
        } else if ((script2008() == 1)) {
            CC_SETGRAPHIC(struct_getparam(int2, 3618));
        } else {
            CC_SETGRAPHIC(struct_getparam(int2, 3617));
        };
    };
    return;
}