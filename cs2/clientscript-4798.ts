//
function script4798(int0: int): unknown_int {
    var int1 = 604;
    var int2 = 0;
    if ((int0 == 603)) {
        return script4800(602);
    };
    if ((int0 == 602)) {
        return script4800(603);
    };
    if (((int0 >= 604) && (int0 <= 615))) {
        while ((int1 <= 615)) {
            if ((((int1 != int0) && (script4800(int1) == 1)) && (++int2 == 2))) {
                return 1;
            };
            int1 = (int1 + 1);
        };
        return 0;
    };
    return 0;
}