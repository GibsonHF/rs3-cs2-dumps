//
function script2326(int0: number): void {
    var int1 = CLIENTCLOCK();
    switch (int0) {
        case 32826:
        case 32828:
        case 32820: {
            varclient_767 = 0;
            IF_SETHIDE(false, comp(306, 25));  // easter09_nuts:result
            IF_SETTEXT("Incorrect", comp(306, 26));  // easter09_nuts:result_text
            SOUND_SYNTH(28942, 1, 0);
            IF_SETCOLOUR(16711680, comp(306, 26));  // easter09_nuts:result_text
            IF_SETONTIMER(callback(script2327, int1), comp(306, 25));  // easter09_nuts:result
            break;
        }
        default: {
            varclient_767 = (varclient_767 + 1);
            if ((varclient_767 == 10)) {
                IF_SETHIDE(false, comp(306, 27));  // easter09_nuts:end_layer
                IF_SETOP(1, "Train", comp(306, 29));  // easter09_nuts:end
                IF_SETONCLICK(callback(), comp(306, 24));  // easter09_nuts:reject
            } else {
                IF_SETHIDE(false, comp(306, 25));  // easter09_nuts:result
                IF_SETTEXT("Correct", comp(306, 26));  // easter09_nuts:result_text
                SOUND_SYNTH(30615, 1, 0);
                IF_SETCOLOUR(65280, comp(306, 26));  // easter09_nuts:result_text
                IF_SETONTIMER(callback(script2327, int1), comp(306, 25));  // easter09_nuts:result
            };
            break;
        }
    };
    IF_SETTEXT(`Correct: ${inttostring(varclient_767, 10)}/${inttostring(10, 10)}`, comp(306, 4));  // easter09_nuts:correct_count
    SOUND_SYNTH(30615, 1, 0);
    return;
}