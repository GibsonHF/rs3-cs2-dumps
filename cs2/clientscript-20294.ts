//
function script20294(int0: component, int1: dbrow, int2: int): unknown_int {
    dbrow_findnext();
    var int3 = stack();
    var int4 = -1;
    var int5 = 0;
    var int6 = 0;
    while ((int3 != -1 as dbrow)) {
        int4 = dbrow_getfield(int3, 1368144, 0);
        if ((int4 >= DB_GETFIELDCOUNT(int1, 1376272))) {
            int5 = 200;
        } else {
            int5 = (200 + dbrow_getfield(int1, 1376273, int4));
        };
        if ((CC_FINDBYCATEGORY(int0, int5, 0) == 1)) {
            script15937(0, dbrow_getfield(int3, 1368064, 0), 0, 0, 2, 0, 6, 40, 1, 0);
            unk11040(callback(script20296, int0, int3, int5, int2));
            CC_CALLONRESIZE();
            int6 = (int6 + 1);
        };
        dbrow_findnext();
        int3 = stack();
    };
    return int6;
}