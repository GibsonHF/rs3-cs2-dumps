//
function script19350(int0: obj, int1: int, int2: int, int3: inv, int4: int): void {
    var int5 = varplayer_160;
    var int6 = -1 as obj;
    if ((script19368(int0) == 0)) {
        return;
    };
    if (((OC_STACKABLE(int0) == 1) && (script19585(int3, int0, 0) != -1))) {
        script19369(int0, int1, int2, int3, -1, int1, 0);
    } else if (((int5 == 1) && (script19585(int3, OC_CERT(int0), 0) != -1))) {
        script19369(int0, int1, int2, int3, -1, int1, 0);
    } else {
        if (((int4 != -1) && (script19589(int3, int4) > 0))) {
            int6 = script19588(int3, int4);
            if ((script19362(OC_UNCERT(int6)) == 1)) {
                return;
            };
            if ((((int6 == int0) && (OC_STACKABLE(int6) == 1)) || ((int6 == OC_CERT(int0)) && (int5 == 1)))) {
                script19369(int0, 1, int2, int3, -1, int1, 0);
            } else if ((script19366(int2, int3, int4, int4, 0) == 1)) {
                script14154();
            };
            return;
        };
        if (((OC_STACKABLE(int0) == 1) || (int5 == 1))) {
            script19369(int0, int1, int2, int3, int4, int1, 0);
        } else {
            script19369(int0, 1, int2, int3, int4, int1, 0);
        };
    };
    return;
}