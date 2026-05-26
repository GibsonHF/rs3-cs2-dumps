//
function script15361(): void {
    if ((varclient_6829 == 0)) {
        script15365();
        return;
    };
    var int0 = ENUM_GETOUTPUTCOUNT(16072 as cs2enum);
    var int1 = -1 as category;
    var int2 = -1 as category;
    var int3 = -1 as cs2enum;
    if (((varclient_6829 - 1) == int0)) {
        script15339();
    } else {
        int1 = enum_getvalue(0, 41, 16072 as cs2enum, (varclient_6829 - 1));
        if ((varclient_6830 > 0)) {
            int3 = enum_getvalue(41, 26, 16076 as cs2enum, int1);
            if ((int3 != -1 as cs2enum)) {
                int2 = enum_getvalue(0, 41, int3, (varclient_6830 - 1));
            };
        };
        script15338(int1, int2);
    };
    return;
}