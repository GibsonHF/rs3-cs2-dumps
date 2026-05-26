//
function script6786(int0: number, int1: number): void {
    SOUND_VORBIS_VOLUME(39599, 1, 0, 255);
    stack(208896);
    stack(int1);
    DB_FIND(0);
    dbrow_findnext();
    var int2 = stack();
    if ((int2 == -1)) {
        return;
    };
    var int3 = script6061(int1);
    var int4 = script6062(int1);
    var int5 = 0;
    var int6 = -1 as dbrow;
    var int7 = -1 as dbrow;
    var string0 = "Build";
    stack(dbrow_getfield(int2, 208944, MIN(int3, (int4 - 1))));
    stack(11534361);
    IF_SETGRAPHIC();
    if ((int3 < int4)) {
        IF_SETHIDE(0, 11534362);
        IF_SETHIDE(0, 11534391);
        IF_SETHIDE(0, 11534392);
        IF_SETHIDE(0, 11534393);
        IF_SETHIDE(0, 11534359);
        IF_SETHIDE(0, 11534389);
        IF_SETHIDE(0, 11534390);
        int6 = dbrow_getfield(int2, 208960, 0);
        if ((int6 != -1 as dbrow)) {
            int5 = dbrow_getfield(int2, 208976, int3);
            IF_SETTEXT(TOSTRING_LOCALISED(int5, 1), 11534391);
            script7019(int6, 11534391, int5);
            stack(dbrow_getfield(int6, 204864, 0));
            stack(11534359);
            IF_SETGRAPHIC();
            stack(8799);
            stack(int6);
            stack(204816);
            stack(0);
            dbrow_getfield();
            IF_SETONMOUSEREPEAT(callback(script-1, 11534359, -1), 11534359);
        } else {
            IF_SETHIDE(1, 11534359);
            IF_SETHIDE(1, 11534391);
        };
        int6 = dbrow_getfield(int2, 208992, 0);
        if ((int6 != -1 as dbrow)) {
            int5 = dbrow_getfield(int2, 209008, int3);
            IF_SETTEXT(TOSTRING_LOCALISED(int5, 1), 11534392);
            script7019(int6, 11534392, int5);
            stack(dbrow_getfield(int6, 204864, 0));
            stack(11534389);
            IF_SETGRAPHIC();
            stack(8799);
            stack(int6);
            stack(204816);
            stack(0);
            dbrow_getfield();
            IF_SETONMOUSEREPEAT(callback(script-1, 11534389, -1), 11534389);
        } else {
            IF_SETHIDE(1, 11534389);
            IF_SETHIDE(1, 11534392);
        };
        int6 = dbrow_getfield(int2, 209024, 0);
        if ((int6 != -1 as dbrow)) {
            int5 = dbrow_getfield(int2, 209040, int3);
            IF_SETTEXT(TOSTRING_LOCALISED(int5, 1), 11534393);
            script7019(int6, 11534393, int5);
            stack(dbrow_getfield(int6, 204864, 0));
            stack(11534390);
            IF_SETGRAPHIC();
            stack(8799);
            stack(int6);
            stack(204816);
            stack(0);
            dbrow_getfield();
            IF_SETONMOUSEREPEAT(callback(script-1, 11534390, -1), 11534390);
        } else {
            IF_SETHIDE(1, 11534390);
            IF_SETHIDE(1, 11534393);
        };
        int7 = dbrow_getfield(int2, 209072, 0);
        IF_SETTEXT(script7135(int7, int3), 11534394);
        if ((int3 > 0)) {
            string0 = "Upgrade";
        };
        script13969(11534395, 11534396, 28553, string0);
    } else {
        IF_SETTEXT("", 11534394);
        IF_SETHIDE(1, 11534362);
        IF_SETHIDE(1, 11534391);
        IF_SETHIDE(1, 11534392);
        IF_SETHIDE(1, 11534393);
        IF_SETHIDE(1, 11534359);
        IF_SETHIDE(1, 11534389);
        IF_SETHIDE(1, 11534390);
        script13971(11534395, 11534396, 28553, "Upgrade", 1);
    };
    return;
}