//
function script15925(int0: number, int1: number): void {
    var string0 = "";
    var string1 = "";
    var int2 = 0;
    var int3 = -1;
    var int4 = (30 + 4);
    [string1, string0, int2] = script9784(int0);
    script10410(33882229, 33882231, 28228, int1, int4, 30, 30, int0, int2, string1);
    if ((CC_FIND(33882231, int0) == 1)) {
        if ((int0 == 0)) {
            CC_SETOP(1, "Open settings");
            int3 = 10844;
        } else if ((int0 == 100)) {
            CC_SETOP(1, "Next page");
            int3 = 10842;
        };
        CC_SETONOP(callback(script13941, -2147483643, -2147483644));
        CC_SETONMOUSEREPEAT(callback(script8780, -2147483645, int0));
    };
    script4512(33882229, 24, 24, (int1 + 3), (int4 + 3), int3);
    return;
}