//
function script6337(int0: component): void {
    var int1 = ENUM_GETOUTPUTCOUNT(5918 as cs2enum);
    IF_SETONINVTRANSMIT(callback(script6338, int0, int1, 93, 1), int0);
    IF_SETONVARTRANSMIT(callback(script6338, int0, int1, 2632, 2633, 2), int0);
    CC_DELETEALL(int0);
    var int2 = 0;
    var int3 = -1;
    while ((int2 < int1)) {
        CC_CREATE(int0, 5, int2);
        CC_SETSIZE(36, 32, 0, 0);
        CC_SETONOP(callback(script1620, int0, int2, 100, 0, 8));
        CC_SETOP(1, "Take");
        CC_SETOP(10, "Examine");
        int3 = enum_getvalue(0, 33, 5918, int2);
        CC_SETOPBASE(`${script4033(int3)}${OC_NAME(int3)}`);
        int2 = (int2 + 1);
    };
    script6339(int0, int1);
    return;
}