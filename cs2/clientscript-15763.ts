//
function script15763(int0: int, int1: int): void {
    var int2 = IF_SETPLAYERHEAD_SELF(WORLDMAP_LISTELEMENT_START(668016, int0, 4, 0), WORLDMAP_LISTELEMENT_START(668016, int1, 2, 0));
    var int3 = CC_SETPARAM_STRING(int2, 668016, 1, -1, 0);
    MES_TYPED(99, 0, `Found ${inttostring(int3, 10)} cosmetics released between runeday ${inttostring(int0, 10)} and runeday ${inttostring(int1, 10)}.`);
    MES_TYPED(99, 0, `The first ${inttostring(MIN(5, int3), 10)} found between these dates are:`);
    var int4 = 5;
    dbrow_findnext();
    var int5 = stack();
    while (((int4-- > 0) && (int5 != -1 as dbrow))) {
        MES_TYPED(99, 0, dbrow_getfield(int5, 667680, 0));
        dbrow_findnext();
        int5 = stack();
    };
    return;
}