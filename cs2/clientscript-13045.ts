//
function script13045(int0: int): [int, int] {
    var int1 = 0;
    if ((int0 > 59)) {
        int1 = (int0 / 60);
        var int0 = MODULO(int0, 60);
    };
    return [int1, int0];
}