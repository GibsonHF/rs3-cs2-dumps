//
function script19185(int0: struct, int1: int): void {
    var int2 = 0;
    var int3 = -1;
    var int4 = comp(-1, 65535);
    var int5 = -1 as obj;
    var int6 = 0;
    var int7 = -1;
    var int8 = -1 as inv;
    [int2, int3, int4] = script19141(int1, int0);
    if ((int2 > 0)) {
        IF_SETHIDE(false, int4);
        stack(script8948(int2));
        stack(int3);
        IF_SETGRAPHIC();
        int7 = script19150(int0);
        int8 = script19144(int0);
        if ((script19208(int7) > int1)) {
            int5 = INV_GETOBJ(int8, int1);
            int6 = INV_GETNUM(int8, int1);
        };
        if ((int5 != -1 as obj)) {
            if ((int6 > 1)) {
                IF_SETOBJECT_ALWAYSNUM(int5, int6, script19174(int1));
            } else {
                IF_SETOBJECT(int5, int6, script19174(int1));
            };
            script19187(int0, int5, int4);
        } else {
            IF_SETOBJECT(-1 as obj, 1, script19174(int1));
            script19186(int0, int2, int4);
        };
        if ((int1 == 2)) {
            IF_SETPOSITION(0, 0, 2, 1, int4);
            [int2, int3, int4] = script19141(1, int0);
            IF_SETPOSITION(0, 0, 1, 1, int4);
            [int2, int3, int4] = script19141(0, int0);
            IF_SETPOSITION(0, 0, 0, 1, int4);
        };
    } else {
        IF_SETHIDE(true, int4);
        if ((int1 == 2)) {
            IF_SETPOSITION(0, 0, 2, 1, int4);
            [int2, int3, int4] = script19141(1, int0);
            IF_SETPOSITION(45, 0, 1, 1, int4);
            [int2, int3, int4] = script19141(0, int0);
            IF_SETPOSITION(-45, 0, 1, 1, int4);
        };
    };
    return;
}