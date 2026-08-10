//
function script20294(int0: number, int1: number, int2: number): number {
    var int3 = dbrow_findnext();
    var int4 = -1;
    var int5 = 0;
    var int6 = 0;
    while ((int3 != -1)) {
        int4 = dbrow_getfield(int3, 1368160, 0);
        if ((int4 >= DB_GETFIELDCOUNT(int1, 1376272))) {
            int5 = 200;
        } else {
            int5 = (200 + dbrow_getfield(int1, 1376273, int4));
        };
        if ((CC_FINDBYCATEGORY(int0, int5, 0) == 1)) {
            script15937(0, dbrow_getfield(int3, 1368064, 0), 0, 0, 2, 0, 0, 40, 1, 0);
            stack(20296);
            stack(int0);
            stack(int3);
            stack(int5);
            stack(int2);
            unk11040("iiii");
            CC_CALLONRESIZE();
            int6 = (int6 + 1);
        };
        int3 = dbrow_findnext();
    };
    return int6;
}