//
function script11932(int0: unknown_int): void {
    var int1 = ENUM_GETOUTPUTCOUNT(10579 as cs2enum);
    var int2 = 0;
    var int3 = 0;
    var string0 = "";
    var int4 = -1;
    if ((int0 == 1)) {
        script8180(int0, 18);
        while ((++int4 < int1)) {
            [int2, int3, string0] = script13397(int4);
            script8844(2, int2, int3, comp(71, 9), int4);
        };
    } else {
        while ((++int4 < int1)) {
            script8844(2, 0, 0, comp(71, 9), int4);
        };
    };
    return;
}