//
function script21046(): void {
    var int0 = 0;
    var int1 = ENUM_GETOUTPUTCOUNT(9053 as cs2enum);
    var int2 = 0;
    var int3 = -1;
    while ((int0 < int1)) {
        int2 = enum_getvalue(0, 0, 9053 as cs2enum, int0);
        stack(int2);
        script15039();
        int3 = [];
        if (((int3 != -1) && (script20133(int2) == 0))) {
            stack(int2);
            stack(int3);
            script21045();
        };
        int0 = (int0 + 1);
    };
    return;
}