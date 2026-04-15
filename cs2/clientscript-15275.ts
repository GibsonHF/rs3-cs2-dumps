//
function script15275(): void {
    var int0 = ENUM_GETOUTPUTCOUNT(16077 as cs2enum);
    var int1 = 0;
    var int2 = -1 as achievement;
    var int3 = -1;
    while ((int1 < int0)) {
        int2 = enum_getvalue(0, 131, 16077 as cs2enum, int1);
        if ((ACHIEVEMENT_REQSTATE(int2) == -2)) {
            script15281(enum_getvalue(131, 36, 16078 as cs2enum, int2));
        };
        int1 = (int1 + 1);
    };
    script15288();
    return;
}