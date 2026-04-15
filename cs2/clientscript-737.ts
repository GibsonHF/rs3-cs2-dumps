//
function script737(int0: int): void {
    var int1 = -1 as model;
    if ((varclient_99 == 0)) {
        varclient_99 = int0;
        return;
    };
    if ((varclient_100 == 0)) {
        varclient_100 = int0;
        return;
    };
    if ((varclient_101 == 0)) {
        varclient_101 = int0;
        if (((script739(varclient_99) == script739(varclient_100)) && (script739(varclient_99) == script739(varclient_101)))) {
            int1 = enum_getvalue(0, 31, 1152 as cs2enum, script739(varclient_99));
            IF_SETMODEL(int1, enum_getvalue(0, 9, 1153 as cs2enum, varclient_99));
            IF_SETMODEL(int1, enum_getvalue(0, 9, 1153 as cs2enum, varclient_100));
            IF_SETMODEL(int1, enum_getvalue(0, 9, 1153 as cs2enum, varclient_101));
            varclient_104 = SETBIT(varclient_104, script739(varclient_99));
            varclient_99 = 0;
            varclient_100 = 0;
            varclient_101 = 0;
            varclient_102 = (varclient_102 + 1);
            varclient_105 = (varclient_105 - 1);
            script738();
        };
        return;
    };
    IF_SETMODEL(31025 as model, enum_getvalue(0, 9, 1153 as cs2enum, varclient_99));
    IF_SETMODEL(31025 as model, enum_getvalue(0, 9, 1153 as cs2enum, varclient_100));
    IF_SETMODEL(31025 as model, enum_getvalue(0, 9, 1153 as cs2enum, varclient_101));
    varclient_99 = int0;
    varclient_100 = 0;
    varclient_101 = 0;
    varclient_105 = (varclient_105 - 1);
    script738();
    return;
}