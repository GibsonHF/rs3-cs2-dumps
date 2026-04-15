//
function script17045(int0: dbrow): void {
    var int1 = dbrow_getfield(int0, 409632, 0);
    if ((int1 == -1)) {
        return;
    };
    var int2 = script8314(int1);
    if ((int2 == int1)) {
        script14938(int2, int1, true);
        return;
    };
    var int3 = 0;
    var int4 = 0;
    [int3, int4] = script17031(int0);
    if (((int3 <= 0) && (script5747(int0) <= 0))) {
        script14938(int2, int1, true);
        return;
    };
    if ((dbrow_getfield(int0, 409664, 0) == true)) {
        if ((int2 != -1)) {
            script14938(int2, int1, false);
            return;
        };
        if ((dbrow_getfield(int0, 409728, 0) == true)) {
            int2 = script8314(18);
            if (((int2 != -1) && (int4 > 0))) {
                script14938(int2, 18, false);
                return;
            };
        };
    };
    var int5 = comp(-1, 65535);
    var int6 = comp(-1, 65535);
    var int7 = -1 as cs2enum;
    if ((dbrow_getfield(int0, 409680, 0) == true)) {
        int5 = dbrow_getfield(int0, 409696, 0);
        int6 = dbrow_getfield(int0, 409744, 0);
        int7 = dbrow_getfield(int0, 409712, 0);
        if ((((int5 != comp(-1, 65535)) && (int6 != comp(-1, 65535))) && (int7 != -1 as cs2enum))) {
            script14935(int5, int6, enum_getreverseindex(0, 0, int7, int1, 0), int0);
        };
    };
    return;
}