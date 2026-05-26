//
function script1919(int0: number, int1: number, int2: number, int3: number, int4: number, int5: number): void {
    var int6 = IF_GETNEXTSUBID(int0);
    var int7 = 0;
    var int8 = struct_getparam(int2, 7508);
    switch (int1) {
        case 0: {
            int7 = (BITCOUNT(varplayer_8160) * 25);
            break;
        }
        case 1: {
            int7 = (BITCOUNT(varplayer_8161) * 25);
            break;
        }
        case 2: {
            int7 = (BITCOUNT(varplayer_8162) * 25);
            break;
        }
    };
    CC_CREATE(int0, 5, int6);
    CC_SETONVARTRANSMIT(callback(script1925, int0, int6++, 0, int1, 0, -1, 8160, 8161, 8162, 8158, 4));
    CC_SETSIZE(42, 42, 0, 0);
    CC_SETPOSITION(int3, (int4 + (int1 * int5)), 0, 0);
    CC_SETGRAPHIC(int8);
    CC_SETONMOUSEREPEAT(callback(script3876, struct_getparam(int2, 7503), -2147483645, -2147483643));
    CC_CREATE(int0, 4, int6);
    CC_SETSIZE(42, (42 / 2), 0, 0);
    CC_SETPOSITION(int3, ((int4 + 42) + (int1 * int5)), 0, 0);
    CC_SETTEXTFONT(26);
    CC_SETTEXTALIGN(1, 1, 0);
    CC_SETTEXT(`${inttostring(int7, 10)} / ${inttostring(struct_getparam(int2, 7502), 10)}`);
    CC_SETCOLOUR(script10495(3));
    return;
}