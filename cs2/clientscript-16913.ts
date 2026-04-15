//
function script16913(int0: int): int {
    var int1 = 0;
    while ((int1 < 4)) {
        var int0 = MODULO((int0 + 1), 4);
        if ((script16906(int0) == 1)) {
            return int0;
        };
        int1 = (int1 + 1);
    };
    return 0;
}