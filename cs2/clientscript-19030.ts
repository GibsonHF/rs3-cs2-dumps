//
function script19030(): number {
    var int0 = -1;
    var int1 = -1;
    var int2 = -1;
    var int3 = CC_SETPARAM_STRING(IF_SETPLAYERHEAD_SELF(WORLDMAP_LISTELEMENT_START(1200224, STAT_BASE(20 as stat), 2, 0), WORLDMAP_LISTELEMENT_START(1200192, 0, 3, 0)), 1200224, 1, -1, 0);
    var int4 = 0;
    var int5 = RANDOM(int3);
    var int6 = -1;
    var int7 = (((varbitplayer_55992 + 20) - 1) / 20);
    var int8 = 0;
    while ((int8 < int7)) {
        if ((RANDOM(20) < (varbitplayer_55992 - (20 * int8)))) {
            int4 = (int4 + 1);
        };
        int8 = (int8 + 1);
    };
    while ((int4 > 0)) {
        int6 = RANDOM(int3);
        if ((int6 > int5)) {
            int5 = int6;
        };
        int4 = (int4 - 1);
    };
    unk11086(int5);
    int0 = dbrow_findnext();
    while ((int0 != -1)) {
        [int1, int2] = dbrow_getfield(int0, 1200240, 0);
        if ((int1 == -1)) {
            return dbrow_getfield(int0, 1200128, 0);
        };
        if ((WORLDMAP_GETDISPLAYCOORD(int1) >= int2)) {
            return dbrow_getfield(int0, 1200128, 0);
        };
        int3 = CC_SETPARAM_STRING(IF_SETPLAYERHEAD_SELF(WORLDMAP_LISTELEMENT_START(1200224, (dbrow_getfield(int0, 1200224, 0) - 1), 2, 0), WORLDMAP_LISTELEMENT_START(1200192, 0, 3, 0)), 1200128, 1, -1, 0);
        unk11086(RANDOM(int3));
        int0 = dbrow_findnext();
    };
    script12478("No valid altars found. This should be impossible!");
    return 0;
}