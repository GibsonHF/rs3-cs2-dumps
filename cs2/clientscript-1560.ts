//[proc,chatdefault_updatechatbox]
function script1560(int0: int, int1: int, int2: int): void {
    if ((MINIMENUOPEN(struct_getparam(script10405(int0), 3505), -1) == 1)) {
        IF_SETONTIMER(callback(script1559, int0), struct_getparam(script10405(int0), 3505));
        return;
    };
    script8502(int0, int1, int2);
    return;
}