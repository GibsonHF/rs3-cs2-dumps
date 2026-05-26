//[proc,userflowflags]
function script3487(int0: number): number {
    if (((int0 < 0) || (int0 > 63))) {
        return 0;
    };
    var int1 = 0;
    var int2 = 0;
    [int2, int1] = USERFLOWFLAGS();
    if ((int0 < 32)) {
        return script734(TESTBIT(int1, int0));
    };
    return script734(TESTBIT(int2, (int0 - 32)));
}