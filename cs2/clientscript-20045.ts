//
function script20045(int0: int, int1: unknown_int, int2: component, int3: int): void {
    var int4 = 34955 as seq;
    if (((int0 == -1) || ((CLIENTCLOCK() - int0) >= int3))) {
        IF_SETMODELANIM(int4, int2);
        IF_SETONTIMER(callback(), int2);
    };
    return;
}