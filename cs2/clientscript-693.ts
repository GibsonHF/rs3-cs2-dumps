//[proc,rgb_to_hex]
function script693(int0: int, int1: int, int2: int): int {
    if ((int0 > 255)) {
        var int0 = 255;
    } else if ((int0 < 0)) {
        int0 = 0;
    };
    if ((int1 > 255)) {
        var int1 = 255;
    } else if ((int1 < 0)) {
        int1 = 0;
    };
    if ((int2 > 255)) {
        var int2 = 255;
    } else if ((int2 < 0)) {
        int2 = 0;
    };
    return OR(OR((int0 * 65536), (int1 * 256)), int2);
}