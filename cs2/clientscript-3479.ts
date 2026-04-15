//
function script3479(int0: unknown_int, int1: component, int2: component, int3: unknown_int): void {
    IF_SETHIDE(true, int1);
    IF_SETHIDE(true, int2);
    SOUND_SYNTH(31262, 1, 0);
    IF_SETONTIMER(callback(script3480, int0, int1, int2, int3, CLIENTCLOCK()), int0);
    return;
}