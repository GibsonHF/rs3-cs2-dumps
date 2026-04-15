//
function script6786(int0: unknown_int, int1: int): void {
    SOUND_VORBIS_VOLUME(39599 as vorbis, 1, 0, 255);
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
        IF_SETHIDE(false, comp(176, 26));
        IF_SETHIDE(false, comp(176, 55));
        IF_SETHIDE(false, comp(176, 56));
        IF_SETHIDE(false, comp(176, 57));
        IF_SETHIDE(false, comp(176, 23));
        IF_SETHIDE(false, comp(176, 53));
        IF_SETHIDE(false, comp(176, 54));
        int6 = dbrow_getfield(int2, 208960, 0);
        if ((int6 != -1 as dbrow)) {
            int5 = dbrow_getfield(int2, 208976, int3);
            IF_SETTEXT(TOSTRING_LOCALISED(int5, 1), comp(176, 55));
            script7019(int6, comp(176, 55), int5);
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
            IF_SETHIDE(true, comp(176, 23));
            IF_SETHIDE(true, comp(176, 55));
        };
        int6 = dbrow_getfield(int2, 208992, 0);
        if ((int6 != -1 as dbrow)) {
            int5 = dbrow_getfield(int2, 209008, int3);
            IF_SETTEXT(TOSTRING_LOCALISED(int5, 1), comp(176, 56));
            script7019(int6, comp(176, 56), int5);
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
            IF_SETHIDE(true, comp(176, 53));
            IF_SETHIDE(true, comp(176, 56));
        };
        int6 = dbrow_getfield(int2, 209024, 0);
        if ((int6 != -1 as dbrow)) {
            int5 = dbrow_getfield(int2, 209040, int3);
            IF_SETTEXT(TOSTRING_LOCALISED(int5, 1), comp(176, 57));
            script7019(int6, comp(176, 57), int5);
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
            IF_SETHIDE(true, comp(176, 54));
            IF_SETHIDE(true, comp(176, 57));
        };
        int7 = dbrow_getfield(int2, 209072, 0);
        IF_SETTEXT(script7135(int7, int3), comp(176, 58));
        if ((int3 > 0)) {
            string0 = "Upgrade";
        };
        script13969(comp(176, 59), comp(176, 60), 28553 as struct, string0);
    } else {
        IF_SETTEXT("", comp(176, 58));
        IF_SETHIDE(true, comp(176, 26));
        IF_SETHIDE(true, comp(176, 55));
        IF_SETHIDE(true, comp(176, 56));
        IF_SETHIDE(true, comp(176, 57));
        IF_SETHIDE(true, comp(176, 23));
        IF_SETHIDE(true, comp(176, 53));
        IF_SETHIDE(true, comp(176, 54));
        script13971(comp(176, 59), comp(176, 60), 28553 as struct, "Upgrade", true);
    };
    return;
}