//
function script16035(): int {
    var int0 = script16024(22);
    var int1 = 0;
    while ((int0 < DATE_RUNEDAY())) {
        if ((script16036(int0) == 0)) {
            int1 = (int1 + 1);
        };
        int0 = (int0 + 1);
    };
    return int1;
}