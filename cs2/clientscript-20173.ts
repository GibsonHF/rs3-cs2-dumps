//
function script20173(int0: int): [int, int] {
    if ((int0 <= 4095)) {
        return [0, int0];
    };
    var int0 = (int0 - 4096);
    return [(1 + (int0 / 256)), MODULO(int0, 256)];
}