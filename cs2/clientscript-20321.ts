//
function script20321(): void {
    var int0 = script20117(varplayer_12314);
    if ((int0 == -1 as dbrow)) {
        return;
    };
    var int1 = dbrow_getfield(int0, 1335472, 0);
    var int2 = -1;
    var int3 = -1;
    var int4 = 20;
    var int5 = 0;
    if ((CC_FIND(comp(1479, 14), 0) == 0)) {
        int5 = 1;
        script2995(comp(1479, 14), 0, 0, 0, 0, 0, 0, 16, 1, 0, 2196 as dbrow, "Filters");
    };
    int4 = script20322(0, int4, "Tier", dbrow_getfield(int1, 1372161, 0), dbrow_getfield(int1, 1372162, 0));
    if ((DB_GETFIELDCOUNT(int1, 1372176) > 0)) {
        int4 = script20322(1, int4, "Type", dbrow_getfield(int1, 1372176, 0));
    };
    if ((DB_GETFIELDCOUNT(int1, 1372192) > 0)) {
        int4 = script20322(2, int4, "Locality", dbrow_getfield(int1, 1372192, 0));
    };
    if ((DB_GETFIELDCOUNT(int1, 1372208) > 0)) {
        int4 = script20322(3, int4, "Progress", dbrow_getfield(int1, 1372208, 0));
    };
    if ((DB_GETFIELDCOUNT(int1, 1372224) > 0)) {
        int4 = script20322(4, int4, "Requirements", dbrow_getfield(int1, 1372224, 0));
    };
    if ((DB_GETFIELDCOUNT(int1, 1372240) > 0)) {
        if ((int5 == 1)) {
            script2995(comp(1479, 14), IF_GETNEXTSUBID(comp(1479, 14)), 0, (int4 + 4), 0, 0, 0, 16, 1, 0, 2196 as dbrow, "Group by");
            int4 = (int4 + 24);
        };
        int4 = script20322(5, int4, "", dbrow_getfield(int1, 1372240, 0));
    };
    if ((int4 != -1)) {
        script19620(comp(1479, 15), comp(1479, 14), int4, comp(-1, 65535), -1, 0, 0, 0);
    };
    return;
}