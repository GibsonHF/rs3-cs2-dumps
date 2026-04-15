//
function script15891(int0: int, int1: fontmetrics, int2: int, string0: string): int {
    var int3 = PARAHEIGHT(string0, int0, int1);
    if ((int2 <= 0)) {
        var int2 = script11432(int1);
    };
    return (int3 * int2);
}