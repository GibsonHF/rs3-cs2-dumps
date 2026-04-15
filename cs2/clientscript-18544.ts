//
function script18544(): int {
    var int0 = INV_GETOBJ(94 as inv, 3);
    if ((item_getparam(int0, 2826) == 1)) {
        return MIN(10, MAX(3, (item_getparam(int0, 13) - 1)));
    };
    return 7;
}