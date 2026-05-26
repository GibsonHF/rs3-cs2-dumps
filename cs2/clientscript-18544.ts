//
function script18544(): number {
    var int0 = INV_GETOBJ(94, 3);
    if ((item_getparam(int0, 2826) == 1)) {
        return MIN(10, MAX(3, (item_getparam(int0, 13) - 1)));
    };
    return 7;
}