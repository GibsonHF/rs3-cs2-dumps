//
function script19337(int0: number): number {
    var int1 = 0;
    var int2 = DB_GETFIELDCOUNT(int0, 1253440);
    var int3 = -1;
    while ((int1 < int2)) {
        int3 = script19338(int0, int1, varbitplayer_56614);
        if (((int3 != -1) && (script10881(int3) == 0))) {
            return 0;
        };
        int1 = (int1 + 1);
    };
    int1 = 0;
    int2 = DB_GETFIELDCOUNT(int0, 1253424);
    var int4 = -1;
    var int5 = -1;
    while ((int1 < int2)) {
        int4 = script19339(int0, int1, varbitplayer_56614);
        if (((int4 != -1) && (script19384(int4) == 0))) {
            return 0;
        };
        int1 = (int1 + 1);
    };
    return 1;
}