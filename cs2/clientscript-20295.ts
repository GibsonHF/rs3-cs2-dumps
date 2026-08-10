//
function script20295(int0: number, int1: number): number {
    var int2 = dbrow_findnext();
    var int3 = -1;
    var int4 = 0;
    while ((int2 != -1)) {
        int3 = (199 + dbrow_getfield(int2, 1368176, 0));
        if ((CC_FINDBYCATEGORY(int0, int3, 0) == 1)) {
            script15937(0, dbrow_getfield(int2, 1368064, 0), 0, 0, 2, 0, 0, 40, 1, 0);
            stack(20296);
            stack(int0);
            stack(int2);
            stack(int3);
            stack(int1);
            unk11040("iiii");
            CC_CALLONRESIZE();
            int4 = (int4 + 1);
        };
        int2 = dbrow_findnext();
    };
    return int4;
}