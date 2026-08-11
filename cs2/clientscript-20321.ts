//
function script20321(): void {
    var int0 = script20117(varplayer_12314);
    if ((int0 == -1)) {
        return;
    };
    var int1 = dbrow_getfield(int0, 1335504, 0);
    var int2 = -1;
    var int3 = -1;
    var int4 = 20;
    var int5 = 0;
    if ((CC_FIND(comp(1479, 15), 0) == 0)) {  // league_parent_tasks:filter_scrollbar
        int5 = 1;
        script2995(96927759, 0, 0, 0, 0, 0, 0, 16, 1, 0, 2196, "Filters");
    };
    int4 = script20322(0, int4, "Tier", dbrow_getfield(int1, 1372161, 0), dbrow_getfield(int1, 1372162, 0));
    if ((DB_GETFIELDCOUNT(int1, 1372176) > 0)) {
        int4 = script20322(1, int4, "Type", dbrow_getfield(int1, 1372176, 0));
    };
    if ((DB_GETFIELDCOUNT(int1, 1372192) > 0)) {
        int4 = script20322(2, int4, "Region", dbrow_getfield(int1, 1372192, 0));
    };
    if ((DB_GETFIELDCOUNT(int1, 1372208) > 0)) {
        int4 = script20322(3, int4, "Progress", dbrow_getfield(int1, 1372208, 0));
    };
    if ((DB_GETFIELDCOUNT(int1, 1372224) > 0)) {
        int4 = script20322(4, int4, "Requirements", dbrow_getfield(int1, 1372224, 0));
    };
    if ((DB_GETFIELDCOUNT(int1, 1372240) > 0)) {
        if ((int5 == 1)) {
            script2995(96927759, IF_GETNEXTSUBID(comp(1479, 15)), 0, (int4 + 4), 0, 0, 0, 16, 1, 0, 2196, "Group by");  // league_parent_tasks:filter_scrollbar
            int4 = (int4 + 24);
        };
        int4 = script20322(5, int4, "", dbrow_getfield(int1, 1372240, 0));
    };
    if ((int4 != -1)) {
        script19620(96927760, 96927759, int4, -1, -1, 0, 0, 0);
    };
    return;
}