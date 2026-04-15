//
function script2154(int0: quest): unknown_int {
    var int1 = -1;
    var int2 = 1;
    while ((int2 <= 12)) {
        int1 = script2111(int0, int2);
        if ((int1 == -1)) {
            return 1;
        };
        if ((script1524(int1) == 0)) {
            return 0;
        };
        int2 = (int2 + 1);
    };
    return 1;
}