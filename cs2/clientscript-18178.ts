//
function script18178(int0: number): void {
    var int1 = dbrow_findnext();
    MES_TYPED(99, 0, `Found ${inttostring(int0, 10)} cosmetics.`);
    MES_TYPED(99, 0, `The first ${inttostring(MIN(10, int0), 10)} found are:`);
    var int2 = 10;
    stack(int2);
    int2 = (int2 - 1);
    while (BRANCH_GREATER_THAN(0)) {
        if ((int1 != -1)) {
            MES_TYPED(99, 0, dbrow_getfield(int1, 667680, 0));
            int1 = dbrow_findnext();
        };
        return;
    };
    return;
}