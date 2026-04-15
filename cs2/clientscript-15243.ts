//
function script15243(int0: int): [int, int, int] {
    var int1 = 0;
    var int2 = 0;
    if ((int0 >= 60)) {
        int1 = (int0 / 60);
        var int0 = MODULO(int0, 60);
    };
    if ((int1 >= 24)) {
        int2 = (int1 / 24);
        int1 = MODULO(int1, 24);
    };
    return [int2, int1, int0];
}