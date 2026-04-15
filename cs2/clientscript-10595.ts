//
function script10595(int0: int): void {
    var int1 = (30000 - int0);
    var int2 = 0;
    var int3 = 0;
    var string0 = "";
    if ((MODULO(int1, 50) != 0)) {
        return;
    };
    int1 = (int1 / 50);
    int2 = MAX(0, (int1 / 60));
    int3 = MAX(0, MODULO(int1, 60));
    if ((int3 < 10)) {
        string0 = "0";
    };
    IF_SETTEXT(`${inttostring(int2, 10)}:${string0}${inttostring(int3, 10)}`, comp(1535, 10));
    script4542(SCALE(int1, 600, 100), comp(1535, 5), comp(-1, 65535));
    return;
}