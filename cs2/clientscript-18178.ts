//
function script18178(int0: int): void {
    dbrow_findnext();
    var int1 = stack();
    MES_TYPED(99, 0, `Found ${inttostring(int0, 10)} cosmetics.`);
    MES_TYPED(99, 0, `The first ${inttostring(MIN(10, int0), 10)} found are:`);
    var int2 = 10;
    while (((int2-- > 0) && (int1 != -1 as dbrow))) {
        MES_TYPED(99, 0, dbrow_getfield(int1, 667680, 0));
        dbrow_findnext();
        int1 = stack();
    };
    return;
}