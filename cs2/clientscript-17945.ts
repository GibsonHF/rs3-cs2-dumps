//
function script17945(int0: int): [int, int] {
    if ((int0 <= 0)) {
        return [0, 0];
    };
    var int1 = (int0 / 3000);
    var int2 = MODULO((int0 / 50), 60);
    return [int1, int2];
}