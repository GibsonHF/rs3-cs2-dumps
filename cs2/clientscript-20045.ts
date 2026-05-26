//
function script20045(int0: number, int1: number, int2: number, int3: number): void {
    var int4 = 34955;
    if (((int0 == -1) || ((CLIENTCLOCK() - int0) >= int3))) {
        IF_SETMODELANIM(int4, int2);
        IF_SETONTIMER(callback(), int2);
    };
    return;
}