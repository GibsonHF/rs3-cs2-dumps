//
function script12211(): void {
    var int0 = 0;
    IF_SETTEXT(`Prestige Level - ${inttostring(varbitplayer_30445, 10)}`, comp(1716, 9));
    while ((int0 <= varbitplayer_30446)) {
        script12212(int0);
        int0 = (int0 + 1);
    };
    switch (varbitplayer_30445) {
        case 1: {
            if ((varbitplayer_30445 == varbitplayer_30446)) {
                IF_SETHIDE(false, comp(1716, 203));
            };
            IF_SETHIDE(true, comp(1716, 206));
            IF_SETHIDE(false, comp(1716, 83));
            IF_SETHIDE(false, comp(1716, 74));
            IF_SETHIDE(false, comp(1716, 6));
            IF_SETHIDE(false, comp(1716, 92));
            break;
        }
        case 2: {
            IF_SETHIDE(true, comp(1716, 206));
            IF_SETHIDE(false, comp(1716, 203));
            if ((varbitplayer_30445 == varbitplayer_30446)) {
                IF_SETHIDE(false, comp(1716, 80));
            };
            IF_SETHIDE(true, comp(1716, 83));
            IF_SETHIDE(false, comp(1716, 74));
            IF_SETHIDE(false, comp(1716, 6));
            IF_SETHIDE(false, comp(1716, 92));
            break;
        }
        case 3: {
            IF_SETHIDE(false, comp(1716, 203));
            IF_SETHIDE(true, comp(1716, 206));
            IF_SETHIDE(false, comp(1716, 80));
            IF_SETHIDE(true, comp(1716, 83));
            if ((varbitplayer_30445 == varbitplayer_30446)) {
                IF_SETHIDE(false, comp(1716, 71));
            };
            IF_SETHIDE(true, comp(1716, 74));
            IF_SETHIDE(false, comp(1716, 6));
            IF_SETHIDE(false, comp(1716, 92));
            break;
        }
        case 4: {
            IF_SETHIDE(false, comp(1716, 203));
            IF_SETHIDE(true, comp(1716, 206));
            IF_SETHIDE(false, comp(1716, 80));
            IF_SETHIDE(true, comp(1716, 83));
            IF_SETHIDE(false, comp(1716, 71));
            IF_SETHIDE(true, comp(1716, 74));
            if ((varbitplayer_30445 == varbitplayer_30446)) {
                IF_SETHIDE(false, comp(1716, 3));
            };
            IF_SETHIDE(true, comp(1716, 6));
            IF_SETHIDE(false, comp(1716, 92));
            break;
        }
        case 5: {
            IF_SETHIDE(false, comp(1716, 203));
            IF_SETHIDE(true, comp(1716, 206));
            IF_SETHIDE(false, comp(1716, 80));
            IF_SETHIDE(true, comp(1716, 83));
            IF_SETHIDE(false, comp(1716, 71));
            IF_SETHIDE(true, comp(1716, 74));
            IF_SETHIDE(false, comp(1716, 3));
            IF_SETHIDE(true, comp(1716, 6));
            if ((varbitplayer_30445 == varbitplayer_30446)) {
                IF_SETHIDE(false, comp(1716, 87));
            };
            IF_SETHIDE(true, comp(1716, 92));
            break;
        }
    };
    if ((varbitplayer_30445 > varbitplayer_30446)) {
        IF_SETHIDE(false, comp(1716, 59));
        IF_SETHIDE(false, comp(1716, 191));
    } else {
        IF_SETHIDE(true, comp(1716, 59));
    };
    return;
}