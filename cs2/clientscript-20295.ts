//
function script20295(int0: component, int1: int): unknown_int {
    dbrow_findnext();
    var int2 = stack();
    var int3 = -1;
    var int4 = 0;
    while ((int2 != -1 as dbrow)) {
        int3 = (199 + dbrow_getfield(int2, 1368160, 0));
        if ((CC_FINDBYCATEGORY(int0, int3, 0) == 1)) {
            script15937(0, dbrow_getfield(int2, 1368064, 0), 0, 0, 2, 0, 6, 40, 1, 0);
            unk11040(callback(script20296, int0, int2, int3, int1));
            CC_CALLONRESIZE();
            int4 = (int4 + 1);
        };
        dbrow_findnext();
        int2 = stack();
    };
    return int4;
}