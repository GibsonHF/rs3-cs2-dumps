//
function script6334(int0: component): void {
    var int1 = INV_SIZE(93 as inv);
    var int2 = ((IF_GETWIDTH(int0) - (4 * 36)) / 3);
    var int3 = ((IF_GETHEIGHT(int0) - (7 * 32)) / 6);
    var int4 = 0;
    while ((int4 < int1)) {
        CC_CREATE(int0, 5, int4);
        CC_SETSIZE(36, 32, 0, 0);
        CC_SETPOSITION((MODULO(int4, 4) * (36 + int2)), ((int4 / 4) * (32 + int3)), 0, 0);
        CC_SETOUTLINE(1);
        int4 = (int4 + 1);
    };
    IF_SETONINVTRANSMIT(callback(script6335, -2147483645, int1, 93, 1), int0);
    script6336(int0, int1);
    return;
}