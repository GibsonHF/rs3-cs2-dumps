//
function script16912(int0: int): int {
    var int1 = 0;
    while ((int1 < 4)) {
        if ((int0 == 0)) {
            var int0 = (4 - 1);
        } else {
            int0 = (int0 - 1);
        };
        if ((script16906(int0) == 1)) {
            return int0;
        };
        int1 = (int1 + 1);
    };
    return 0;
}