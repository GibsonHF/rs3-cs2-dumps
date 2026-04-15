//
function script11951(): [unknown_int, int] {
    var int0 = 1;
    var int1 = 0;
    while ((int0 <= 6)) {
        if ((script10948(int0) == 1)) {
            int1 = (int1 + 1);
        };
        int0 = (int0 + 1);
    };
    if ((int1 == 6)) {
        return [1, int1];
    };
    return [0, int1];
}