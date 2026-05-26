//
function script2326(int0: number): void {
    var int1 = CLIENTCLOCK();
    switch (int0) {
        case 32826:
        case 32828:
        case 32820: {
            varclient_767 = 0;
            IF_SETHIDE(0, 20054041);
            IF_SETTEXT("Incorrect", 20054042);
            SOUND_SYNTH(28942, 1, 0);
            IF_SETCOLOUR(16711680, 20054042);
            IF_SETONTIMER(callback(script2327, int1), 20054041);
            break;
        }
        default: {
            varclient_767 = (varclient_767 + 1);
            if ((varclient_767 == 10)) {
                IF_SETHIDE(0, 20054043);
                IF_SETOP(1, "Train", 20054045);
                IF_SETONCLICK(callback(), 20054040);
            } else {
                IF_SETHIDE(0, 20054041);
                IF_SETTEXT("Correct", 20054042);
                SOUND_SYNTH(30615, 1, 0);
                IF_SETCOLOUR(65280, 20054042);
                IF_SETONTIMER(callback(script2327, int1), 20054041);
            };
            break;
        }
    };
    IF_SETTEXT(`Correct: ${inttostring(varclient_767, 10)}/${inttostring(10, 10)}`, 20054020);
    SOUND_SYNTH(30615, 1, 0);
    return;
}