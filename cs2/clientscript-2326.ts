//
function script2326(int0: model): void {
    var int1 = CLIENTCLOCK();
    switch (int0) {
        case 32826:
        case 32828:
        case 32820: {
            varclient_767 = 0;
            IF_SETHIDE(false, comp(306, 25));
            IF_SETTEXT("Incorrect", comp(306, 26));
            SOUND_SYNTH(28942, 1, 0);
            IF_SETCOLOUR(16711680, comp(306, 26));
            IF_SETONTIMER(callback(script2327, int1), comp(306, 25));
            break;
        }
        default: {
            varclient_767 = (varclient_767 + 1);
            if ((varclient_767 == 10)) {
                IF_SETHIDE(false, comp(306, 27));
                IF_SETOP(1, "Train", comp(306, 29));
                IF_SETONCLICK(callback(), comp(306, 24));
            } else {
                IF_SETHIDE(false, comp(306, 25));
                IF_SETTEXT("Correct", comp(306, 26));
                SOUND_SYNTH(30615, 1, 0);
                IF_SETCOLOUR(65280, comp(306, 26));
                IF_SETONTIMER(callback(script2327, int1), comp(306, 25));
            };
            break;
        }
    };
    IF_SETTEXT(`Correct: ${inttostring(varclient_767, 10)}/${inttostring(10, 10)}`, comp(306, 4));
    SOUND_SYNTH(30615, 1, 0);
    return;
}