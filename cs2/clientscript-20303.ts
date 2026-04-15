//
function script20303(int0: unknown_int, int1: achievement, int2: unknown_int): void {
    if ((int2 != 1)) {
        if ((script8292(0, 4) == 1)) {
            return;
        };
        script8287(0, 4);
        return;
    };
    var int3 = script20302(int1);
    if ((int3 == -1 as quest)) {
        return;
    };
    var int4 = quest_getparam(int3, 1345);
    if ((int4 == -1)) {
        return;
    };
    var int5 = comp(1361, 1);
    if ((int0 == 96927763)) {
        int5 = comp(1479, 1);
    };
    CC_CREATE(int5, 0, int4);
    CC_SETSIZE(1, 1, 0, 0);
    CC_SETOP(1, "Goto");
    CC_TRIGGEROP(1);
    script8287(3, 2);
    return;
}