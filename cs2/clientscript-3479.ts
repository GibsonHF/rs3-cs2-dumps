//
function script3479(int0: number, int1: number, int2: number, int3: number): void {
    IF_SETHIDE(true, int1);
    IF_SETHIDE(true, int2);
    SOUND_SYNTH(31262, 1, 0);
    IF_SETONTIMER(callback(script3480, int0, int1, int2, int3, CLIENTCLOCK()), int0);
    return;
}