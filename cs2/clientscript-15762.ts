//
function script15762(int0: int): void {
    var int1 = WORLDMAP_LISTELEMENT_START(668016, int0, 4, 0);
    var int2 = CC_SETPARAM_STRING(int1, 668016, 1, -1, 0);
    MES_TYPED(99, 0, `Found ${inttostring(int2, 10)} cosmetics released on and after runeday ${inttostring(int0, 10)}.`);
    MES_TYPED(99, 0, `The first ${inttostring(MIN(5, int2), 10)} found on and after this date are:`);
    var int3 = 5;
    dbrow_findnext();
    var int4 = stack();
    while (((int3-- > 0) && (int4 != -1 as dbrow))) {
        MES_TYPED(99, 0, dbrow_getfield(int4, 667680, 0));
        dbrow_findnext();
        int4 = stack();
    };
    return;
}