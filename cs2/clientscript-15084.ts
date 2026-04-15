//
function script15084(int0: int, int1: fontmetrics, string0: string): int {
    var int2 = PARAWIDTH(string0, int0, int1);
    var int3 = (((78 + 64) + 32) - 60);
    if ((int2 > int3)) {
        if ((MODULO(int2, 32) != 0)) {
            return ((int2 - MODULO(int2, 32)) + 32);
        };
        return int2;
    };
    return 64;
}