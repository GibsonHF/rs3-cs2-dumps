//
function script15763(int0: number, int1: number): void {
    var int2 = IF_SETPLAYERHEAD_SELF(WORLDMAP_LISTELEMENT_START(668016, int0, 4, 0), WORLDMAP_LISTELEMENT_START(668016, int1, 2, 0));
    var int3 = CC_SETPARAM_STRING(int2, 668016, 1, -1, 0);
    MES_TYPED(99, 0, `Found ${inttostring(int3, 10)} cosmetics released between runeday ${inttostring(int0, 10)} and runeday ${inttostring(int1, 10)}.`);
    MES_TYPED(99, 0, `The first ${inttostring(MIN(5, int3), 10)} found between these dates are:`);
    var int4 = 5;
    var int5 = dbrow_findnext();
    stack(int4);
    int4 = (int4 - 1);
    while (BRANCH_GREATER_THAN(0)) {
        if ((int5 != -1)) {
            MES_TYPED(99, 0, dbrow_getfield(int5, 667680, 0));
            int5 = dbrow_findnext();
        };
        return;
    };
    return;
}