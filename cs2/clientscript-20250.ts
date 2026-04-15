//
function script20250(): void {
    CC_DELETEALL(comp(1442, 11));
    var int0 = script20117(-1);
    if ((int0 == -1 as dbrow)) {
        return;
    };
    var int1 = dbrow_getfield(int0, 1335456, 0);
    var int2 = 0;
    var int3 = DB_GETFIELDCOUNT(int1, 1363968);
    var int4 = IF_GETHEIGHT(comp(1442, 11));
    var int5 = ((int4 - (4 * (int3 - 1))) / int3);
    var int6 = SCALE(36, 32, int5);
    var int7 = WORLDMAP_GETDISPLAYCOORD(dbrow_getfield(int0, 1335648, 0));
    var int8 = 0;
    var int9 = 4128 as dbrow;
    var int10 = 2100 as dbrow;
    var int11 = -1 as obj;
    var int12 = -1;
    var string0 = "";
    var int13 = -1;
    var string1 = "";
    while ((int2 < int3)) {
        stack(dbrow_getfield(int1, 1363968, int2));
        [int8, int11, string1] = stack();
        if ((int7 >= int8)) {
            int9 = 4368 as dbrow;
            int10 = 2196 as dbrow;
            int12 = int2;
        } else {
            int9 = 7571 as dbrow;
            int10 = 2100 as dbrow;
        };
        script15938(comp(1442, 11), int2, 0, 0, 0, 0, 0, 0, int5, 1, 0);
        script10033(int2, 1, 0, 0, 0, 0, 0, 0, 1, 1, int9);
        script17950(int2, 2, 0, 0, 0, 1, int6, int5, 0, 0, int11, 1);
        script10485(int2, 3, int6, 0, 0, 1, (200 - int6), int5, 0, 0, int10, string1);
        CC_SETTEXTALIGN(0, 1, 0);
        script10485(int2, 4, 204, 0, 0, 1, 204, int5, 1, 0, int10, TOSTRING_LOCALISED(int8, 1));
        CC_SETTEXTALIGN(1, 1, 0);
        int2 = (int2 + 1);
    };
    stack(dbrow_getfield(int1, 1363968, script12377((int12 + 1), 0, (int3 - 1))));
    [int8, int11, string1] = stack();
    if ((int12 == (int3 - 1))) {
        string0 = "You have unlocked all trophies!";
    } else {
        string0 = `${TOSTRING_LOCALISED((int8 - int7), 1)} more points needed to unlock the next trophy.`;
    };
    IF_SETTEXT(string0, comp(1442, 6));
    IF_SETOBJECT_HIGHRES(int11, comp(1442, 7));
    IF_SETTEXT("Trophies will be available as rewards in the main game once the League ends.", comp(1442, 8));
    return;
}