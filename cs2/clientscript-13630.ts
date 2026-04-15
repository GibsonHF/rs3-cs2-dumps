//
function script13630(int0: struct, int1: int, int2: int, int3: int): void {
    var int1 = (int1 + 1);
    CC_DELETEALL(comp(1311, 552));
    CC_DELETEALL(comp(1311, 553));
    var int4 = (script13282(int0) + 1);
    var int5 = enum_getvalue(73, 26, 15727 as cs2enum, int0);
    var int6 = -1 as cs2enum;
    var int7 = enum_getvalue(73, 26, 14032 as cs2enum, int0);
    var int8 = enum_getvalue(73, 26, 14033 as cs2enum, int0);
    if ((((int5 == -1 as cs2enum) || (int7 == -1 as cs2enum)) || (int8 == -1 as cs2enum))) {
        return;
    };
    var int9 = 0;
    var int10 = 1;
    var int11 = 1;
    var int12 = 0;
    if ((int1 == varclient_6784)) {
        IF_SETHIDE(true, comp(1311, 541));
        IF_SETHIDE(true, comp(1311, 533));
        varclient_6784 = 0;
        script13325(int0, -1, int3);
    } else {
        varclient_6784 = int1;
        IF_SETHIDE(false, comp(1311, 541));
        IF_SETHIDE(false, comp(1311, 533));
        while ((int11 <= int4)) {
            int6 = enum_getvalue(0, 26, int5, int11);
            if ((int6 == -1 as cs2enum)) {
                return;
            };
            if (((int11 == 1) || ((enum_getvalue(0, 31, int6, int1) != -1 as model) && (enum_getvalue(0, 31, int6, int1) != 88196 as model)))) {
                if (((GETBIT_RANGE(int2, ((int1 - 1) * 4), (((int1 - 1) * 4) + (4 - 1))) + 1) == int11)) {
                    int10 = 4;
                } else {
                    int10 = 1;
                };
                int9 = script11606(comp(1311, 552), comp(1311, 553), 28222 as struct, 4, (5 + ((30 + 4) * int12)), int9, int10, "Select", "Unselect", enum_getvalue(0, 36, int8, (int11 - 1)));
                if ((CC_FIND(comp(1311, 553), int12) == 1)) {
                    CC_SETOPCURSOR(1, 46);
                };
                script4512(comp(1311, 552), (30 - (1 * 2)), (30 - (1 * 2)), 5, ((4 + ((30 + 4) * int12)) + (1 * 2)), enum_getvalue(0, 23, int7, (int11 - 1)));
                if ((script1528(int0, (int11 - 1), int1) == 0)) {
                    script4512(comp(1311, 552), 14, 18, 22, ((5 + ((30 + 4) * int12)) + 15), 10983 as graphic);
                };
                int12 = (int12 + 1);
            };
            int11 = (int11 + 1);
        };
        script13325(int0, int1, int3);
    };
    return;
}