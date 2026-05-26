//
function script3901(int0: number, int1: number, int2: number, int3: number, int4: number, int5: number, int6: number): void {
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