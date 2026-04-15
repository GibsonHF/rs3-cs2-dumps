//
function script7048(int0: int, int1: component, int2: component, int3: unknown_int, string0: string): void {
    var int0 = MIN(1000000, int0);
    int0 = MAX(0, int0);
    if ((int1 == comp(-1, 65535))) {
        return;
    };
    var int4 = SCALE(int0, 1000000, 16384);
    IF_SETSIZE(int4, 0, 2, 1, int1);
    if ((int2 == comp(-1, 65535))) {
        return;
    };
    int0 = (int0 / 10000);
    var string1 = "";
    if ((int3 == 1)) {
        string1 = string0;
    } else {
        string1 = `${inttostring(int0, 10)}%`;
    };
    script4212(int2, string1, 26 as fontmetrics, 16777215, 0);
    return;
}