//
function script3901(int0: unknown_int, int1: component, int2: int, int3: component, int4: int, int5: obj, int6: inv): void {
    if (((varclient_3822 != int5) || (varclient_3823 != int6))) {
        IF_SETONMOUSEREPEAT(callback(), int1);
        return;
    };
    if ((int4 <= CLIENTCLOCK())) {
        script3900(int0, int1, int2, int3, 1, 1);
        IF_SETONMOUSEREPEAT(callback(), int1);
    };
    return;
}