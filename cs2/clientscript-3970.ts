//
function script3970(int0: inv, int1: obj, int2: int, int3: obj, int4: boolean): int {
    if ((((int0 == -1 as inv) || (int1 == -1 as obj)) || (varplayer_1784 == -1 as npc))) {
        return int2;
    };
    if ((script14235() == 1)) {
        return int2;
    };
    if ((script14428() == 0)) {
        return int2;
    };
    if ((script9257(int0, int1, 1) == 1)) {
        return int2;
    };
    if ((script14291(int1, 0) == 1)) {
        return int2;
    };
    var int5 = script11682(varplayer_1784);
    var int6 = 0;
    if (((int3 != -1 as obj) && (((int4 == false) && (int3 != int1)) || ((int4 == true) && (int3 != OC_CERT(int1)))))) {
        int6 = 0;
    } else if (((OC_STACKABLE(int1) == 1) || (int4 == true))) {
        int6 = script14351(530 as inv, OC_CERT(int1), int2, int5);
    } else {
        int6 = script14351(530 as inv, int1, int2, int5);
    };
    if ((int6 == int2)) {
        return int2;
    };
    var int7 = script14292(int1, (int2 - int6), int5);
    if ((int7 == 0)) {
        return int2;
    };
    return (int2 - int7);
}