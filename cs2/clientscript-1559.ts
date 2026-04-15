//
function script1559(int0: int): void {
    if ((MINIMENUOPEN(struct_getparam(script10405(int0), 3505), -1) == 1)) {
        return;
    };
    IF_SETONTIMER(callback(), struct_getparam(script10405(int0), 3505));
    script84(int0);
    return;
}