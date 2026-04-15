//
function script2771(int0: component, int1: int): void {
    var int2 = (CLIENTCLOCK() - int1);
    if (((int2 >= 181) || (varclient_1007 != 1))) {
        IF_SETONTIMER(callback(), int0);
        return;
    };
    if ((MODULO(int2, 25) == 0)) {
        switch (RANDOMINC(2)) {
            case 0: {
                SOUND_SYNTH(34529, 1, 0);
                break;
            }
            case 1: {
                SOUND_SYNTH(28132, 1, 0);
                break;
            }
            case 2: {
                SOUND_SYNTH(31092, 1, 0);
                break;
            }
        };
    };
    return;
}