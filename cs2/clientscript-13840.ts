//
function script13840(int0: cs2enum): void {
    script4002();
    var int1 = 0;
    var int2 = 0;
    var int3 = ENUM_GETOUTPUTCOUNT(int0);
    while ((int1 <= int3)) {
        int2 = enum_getvalue(0, 0, int0, int1);
        if ((int2 >= 0)) {
            script2393(int2, int1);
            script13842(int1);
        };
        int1 = (int1 + 1);
    };
    script8144();
    return;
}