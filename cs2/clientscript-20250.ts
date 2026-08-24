//
function script20250(): void {
    CC_DELETEALL(comp(1442, 17));
    var int0 = script20117(2);
    if ((int0 == -1)) {
        return;
    };
    var int1 = dbrow_getfield(int0, 1335488, 0);
    var int2 = 0;
    var int3 = DB_GETFIELDCOUNT(int1, 1363968);
    var int4 = IF_GETHEIGHT(comp(1442, 17));
    var int5 = ((int4 - (4 * (int3 - 1))) / int3);
    var int6 = 0;
    var int7 = SCALE(32, 36, (int5 - 4));
    var int8 = WORLDMAP_GETDISPLAYCOORD(dbrow_getfield(int0, 1335744, 0));
    var int9 = 0;
    var int10 = 4128;
    var int11 = 2099;
    var int12 = 63625;
    var int13 = 0;
    var string0 = "";
    var int14 = -1;
    var string1 = "";
    script1854(int1, int8);
    while ((int2 < int3)) {
        [int9, int12, string1] = dbrow_getfield(int1, 1363968, int2);
        if ((int2 == (varbitplayer_59849 - 1))) {
            int11 = 2196;
            int13 = int2;
        } else {
            int11 = 2099;
        };
        script15938(94502929, int2, 0, 0, 0, 0, 0, 0, int5, 1, 0);
        int6 = CC_GETWIDTH();
        script16109(int2, 1, 0, 0, 0, 0, 0, 0, 1, 1, int2, 0);
        script17950(int2, 2, 4, 4, 0, 0, int7, 8, 0, 1, int12, 1);
        script10485(int2, 3, (int7 + 4), 0, 0, 1, ((int6 / 2) - (int7 + 4)), int5, 0, 0, int11, string1);
        CC_SETTEXTALIGN(1, 1, 0);
        script10485(int2, 4, 0, 0, 2, 1, (int6 / 2), int5, 0, 0, int11, TOSTRING_LOCALISED(int9, 1));
        CC_SETTEXTALIGN(1, 1, 0);
        if ((int2 == (varbitplayer_59849 - 1))) {
            script10033(int2, 5, 0, 0, 0, 0, 0, 0, 1, 1, 14486);
        };
        int2 = (int2 + 1);
    };
    if ((CC_FIND(comp(1442, 1), 0) == 1)) {  // league_parent_ranks:progress_bar
        int12 = dbrow_getfield(int1, 1363970, int13);
        CC_SETOBJECT_HIGHRES(int12);
    };
    var int15 = 0;
    if ((int8 >= dbrow_getfield(int1, 1363969, 0))) {
        int15 = script12377((int13 + 1), 0, (int3 - 1));
    };
    [int9, int12, string1] = dbrow_getfield(int1, 1363968, int15);
    if ((int13 == (int3 - 1))) {
        string0 = "All trophies unlocked!";
    } else {
        string0 = `Earn ${TOSTRING_LOCALISED((int9 - int8), 1)} points to unlock the next trophy`;
    };
    IF_SETTEXT(string0, comp(1442, 13));  // league_parent_ranks:divider_tier
    var int16 = -1;
    var int17 = -1;
    var int18 = -1;
    var int19 = -1;
    var int20 = -1;
    var int21 = -1;
    var int22 = -1;
    var int23 = -1;
    var int24 = -1;
    var int25 = -1;
    stack(int12);
    script21087();
    [int16, int17, int18, int19, int20, int21, int22, int23, int24, int25] = [];
    IF_SETMODEL(int16, comp(1442, 14));  // league_parent_ranks:title_tier
    IF_SETMODELZOOM(int17, comp(1442, 14));  // league_parent_ranks:title_tier
    if (((int18 != -1) && (int19 != -1))) {
        IF_SETRETEX(1, int18, int19, comp(1442, 14));  // league_parent_ranks:title_tier
    };
    if (((int20 != -1) && (int21 != -1))) {
        IF_SETRECOL(1, int20, int21, comp(1442, 14));  // league_parent_ranks:title_tier
        if (((int22 != -1) && (int23 != -1))) {
            IF_SETRECOL(2, int22, int23, comp(1442, 14));  // league_parent_ranks:title_tier
        };
    };
    IF_SETPOSITION(int24, int25, 1, 1, comp(1442, 14));  // league_parent_ranks:title_tier
    IF_SETTEXT("Trophies are available once the League ends.", comp(1442, 15));  // league_parent_ranks:title_points
    var string2 = "You have already set your nominated account for this league, you cannot change it again.";
    if ((varplayer_13541 == 2)) {
        IF_SETENABLED(false, comp(1442, 10));  // league_parent_ranks:bg_table
        IF_SETONOP(callback(script15194, string2, -2147483645), comp(1442, 10));  // league_parent_ranks:bg_table
    } else {
        IF_SETENABLED(true, comp(1442, 10));  // league_parent_ranks:bg_table
    };
    return;
}