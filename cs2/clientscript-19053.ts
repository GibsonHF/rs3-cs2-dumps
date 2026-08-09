//
function script19053(int0: number, int1: number, int2: number): void {
    if ((CLIENTCLOCK() < int0)) {
        return;
    };
    if ((varbitplayer_52330 == 0)) {
        IF_SETONTIMER(callback(script16715, CLIENTCLOCK(), int1, int2, 0), int2);
        IF_SETMODEL(126627 as model, int2);
        IF_SETMODELANIM(34955 as seq, int2);
        IF_SETONTIMER(callback(), int2);
        script19054(int1);
        return;
    };
    IF_SETMODEL(134024 as model, int2);
    switch (int1) {
        case 1: {
            if ((varbitplayer_55835 == 1)) {
                IF_SETMODELANIM(22645 as seq, int2);
                IF_SETONTIMER(callback(), int2);
                IF_SETHIDE(true, comp(1014, 62));
                IF_SETHIDE(true, comp(1014, 66));
                IF_SETHIDE(true, comp(1014, 65));
                IF_SETGRAPHIC(20315 as graphic, comp(1014, 64));
            } else {
                IF_SETMODELANIM(34955 as seq, int2);
                IF_SETONTIMER(callback(script16715, CLIENTCLOCK(), int1, int2, 0), int2);
                IF_SETGRAPHIC(20218 as graphic, comp(1014, 64));
            };
            break;
        }
        case 2: {
            if ((varbitplayer_55836 == 1)) {
                IF_SETMODELANIM(22645 as seq, int2);
                IF_SETONTIMER(callback(), int2);
                IF_SETHIDE(true, comp(1014, 68));
                IF_SETHIDE(true, comp(1014, 72));
                IF_SETHIDE(true, comp(1014, 71));
                IF_SETGRAPHIC(20315 as graphic, comp(1014, 70));
            } else {
                IF_SETMODELANIM(34955 as seq, int2);
                IF_SETONTIMER(callback(script16715, CLIENTCLOCK(), int1, int2, 0), int2);
                IF_SETGRAPHIC(20218 as graphic, comp(1014, 70));
            };
            break;
        }
        case 3: {
            if ((varbitplayer_55837 == 1)) {
                IF_SETMODELANIM(22645 as seq, int2);
                IF_SETONTIMER(callback(), int2);
                IF_SETHIDE(true, comp(1014, 74));
                IF_SETHIDE(true, comp(1014, 78));
                IF_SETHIDE(true, comp(1014, 77));
                IF_SETGRAPHIC(20315 as graphic, comp(1014, 76));
            } else {
                IF_SETMODELANIM(34955 as seq, int2);
                IF_SETONTIMER(callback(script16715, CLIENTCLOCK(), int1, int2, 0), int2);
                IF_SETGRAPHIC(20218 as graphic, comp(1014, 76));
            };
            break;
        }
    };
    IF_SETONTIMER(callback(), int2);
    return;
}