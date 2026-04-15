//
function script3968(int0: obj, int1: int, int2: int, int3: inv, int4: int): void {
    var int5 = varplayer_160;
    var int6 = -1 as obj;
    if (((int3 == 94 as inv) || (OC_CERT(int0) == int0))) {
        int5 = 0;
    };
    if ((script16797(int0) == 0)) {
        return;
    };
    if (((OC_STACKABLE(int0) == 1) && (script14343(int3, int0, 0) != -1))) {
        script6794(int0, int1, int2, int3, -1, int1, 0);
    } else if (((int5 == 1) && (script14343(int3, OC_CERT(int0), 0) != -1))) {
        script6794(int0, int1, int2, int3, -1, int1, 0);
    } else {
        if (((int4 != -1) && (script14347(int3, int4) > 0))) {
            int6 = script14346(int3, int4);
            if ((((int6 == int0) && (OC_STACKABLE(int6) == 1)) || ((int6 == OC_CERT(int0)) && (int5 == 1)))) {
                script6794(int0, 1, int2, int3, -1, int1, 0);
            } else if ((int3 == 94 as inv)) {
                script6794(int0, 1, int2, int3, int4, int1, 0);
            } else if ((script5786(int2, int3, int4, int4, 0) == 1)) {
                script14154();
            };
            return;
        };
        if (((OC_STACKABLE(int0) == 1) || (int5 == 1))) {
            script6794(int0, int1, int2, int3, int4, int1, 0);
        } else {
            script6794(int0, 1, int2, int3, int4, int1, 0);
        };
    };
    return;
}