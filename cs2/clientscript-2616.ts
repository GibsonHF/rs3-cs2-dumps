//
function script2616(int0: obj): int {
    if ((item_getparam(int0, 7802) == true)) {
        if ((item_getparam(int0, 7806) != -1 as obj)) {
            var int0 = item_getparam(int0, 7806);
        } else {
            int0 = item_getparam(int0, 2655);
        };
    };
    var int1 = 0;
    var int2 = 0;
    [int1, int2] = script2617(int0);
    return int1;
}