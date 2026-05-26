//
function script14109(int0: number, int1: number, int2: number, int3: number): [number, number] {
    var int4 = script9952(3548);
    var int5 = struct_getparam(int4, 4398);
    var int6 = struct_getparam(int4, 4399);
    var int7 = struct_getparam(int5, 3808);
    var int1 = (int1 - 1);
    var int8 = (int7 * int1);
    CC_CREATE(127401995, 5, IF_GETNEXTSUBID(127401995));
    CC_SETPOSITION(((int0 * int7) - (int8 / 2)), 0, 1, 1);
    CC_SETSIZE(struct_getparam(int5, 3808), struct_getparam(int5, 3807), 0, 0);
    CC_CREATE[1](127401995, 5, IF_GETNEXTSUBID(127401995));
    CC_SETPOSITION[1](((int0 * int7) - (int8 / 2)), 0, 1, 1);
    CC_SETSIZE[1](struct_getparam(int3, 6977), struct_getparam(int3, 6978), 0, 0);
    script14106(127401995, CC_GETID(), CC_GETID[1](), int3, int5);
    CC_SETONMOUSEOVER(callback(script14104, 127401995, CC_GETID(), CC_GETID[1](), int3, int6));
    CC_SETONMOUSELEAVE(callback(script14105, 127401995, CC_GETID(), CC_GETID[1](), int3, int5));
    CC_SETONMOUSEREPEAT(callback(script8799, struct_getparam(int3, 6974), -2147483645, -2147483643));
    CC_SETONVARTRANSMIT(callback(script14107, 127401995, CC_GETID(), CC_GETID[1](), int3, 3814, 1));
    CC_SETOP(1, `Show ${struct_getparam(int3, 6974)}`);
    CC_SETONOP(callback(script14108, int2));
    var int2 = (int2 + 14);
    CC_CREATE(127401990, 4, IF_GETNEXTSUBID(127401990));
    CC_SETPOSITION(5, int2, 0, 0);
    CC_SETSIZE(500, 30, 0, 0);
    CC_SETTEXTFONT(28);
    CC_SETTEXTSHADOW(1);
    script11024(1);
    return [int2, CC_GETID()];
}