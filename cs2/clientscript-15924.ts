//
function script15924(int0: number, int1: number, int2: number): void {
    var string0 = "";
    var string1 = "";
    var int3 = 0;
    var int4 = int0;
    if ((int0 == 10)) {
        int4 = 19;
    };
    [string1, string0, int3] = script9784(int4);
    script10410(33882229, 33882231, 28228, int1, int2, 30, 30, int0, 0, string1);
    if ((CC_FIND(comp(517, 119), int0) == 1)) {
        CC_SETPOSITION(int1, int2, 0, 0);
        CC_SETSIZE(30, 30, 0, 0);
        CC_SETONMOUSEREPEAT(callback(script8780, -2147483645, int4));
        if ((int3 == 0)) {
            CC_SETOP(1, "Load");
            CC_SETOP(2, "Save");
            CC_SETOP(3, "Settings");
            CC_SETONOP(callback(script13941, int4, -2147483644));
        } else {
            CC_CLEAROPS();
            CC_SETOP(1, "Load");
            CC_SETONOP(callback());
            script2996(33882230, int0, int1, int2, 0, 0, 30, 30, 0, 0, 4352);
        };
    };
    if ((int4 == 19)) {
        script4512(33882229, 24, 24, (int1 + 3), (int2 + 3), script15934(18787, 15083));
    };
    return;
}