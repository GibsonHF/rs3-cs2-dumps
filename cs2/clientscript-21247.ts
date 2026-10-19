//
function script21247(): void {
    var int6 = IF_GETNEXTSUBID(int0);
    script7852(int0, int6, int1, int2, 0, 0, 24, 24, 0, 0, 14908, "");
    if ((CC_FIND(int0, int6) == 1)) {
        CC_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -2147483643));
        CC_SETOP(1, string0);
        stack(21248);
        stack(int5);
        CC_SETONOP("i");
        CC_SETNOCLICKTHROUGH(true);
        int6 = IF_GETNEXTSUBID(int0);
        script2994(int0, int6, (int1 + 6), (int2 + 6), 0, 0, 11, 11, 0, 0, 21244);
        if ((CC_FIND(int0, int6) == 1)) {
            if ((int4 == 1)) {
                if ((int3 != 0)) {
                    CC_SET2DANGLE(16384);
                } else {
                    CC_SETHFLIP(true);
                };
            } else if ((int3 != 0)) {
                CC_SET2DANGLE(49152);
            };
        };
    };
    return;
}