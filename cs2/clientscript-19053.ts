//
function script19053(int0: int, int1: unknown_int, int2: component): void {
    if ((CLIENTCLOCK() < int0)) {
        return;
    };
    if ((varbitplayer_52330 == 0)) {
        IF_SETONTIMER(callback(script16715, CLIENTCLOCK(), int1, int2, 0), int2);
        IF_SETMODEL(126627, int2);
        IF_SETMODELANIM(34955, int2);
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
                IF_SETHIDE(1, 66453566);
                IF_SETHIDE(1, 66453570);
                IF_SETHIDE(1, 66453569);
                stack(20315);
                stack(66453568);
                IF_SETGRAPHIC();
            } else {
                IF_SETMODELANIM(34955 as seq, int2);
                IF_SETONTIMER(callback(script16715, CLIENTCLOCK(), int1, int2, 0), int2);
                stack(20218);
                stack(66453568);
                IF_SETGRAPHIC();
            };
            break;
        }
        case 2: {
            if ((varbitplayer_55836 == 1)) {
                IF_SETMODELANIM(22645 as seq, int2);
                IF_SETONTIMER(callback(), int2);
                IF_SETHIDE(1, 66453572);
                IF_SETHIDE(1, 66453576);
                IF_SETHIDE(1, 66453575);
                stack(20315);
                stack(66453574);
                IF_SETGRAPHIC();
            } else {
                IF_SETMODELANIM(34955 as seq, int2);
                IF_SETONTIMER(callback(script16715, CLIENTCLOCK(), int1, int2, 0), int2);
                stack(20218);
                stack(66453574);
                IF_SETGRAPHIC();
            };
            break;
        }
        case 3: {
            if ((varbitplayer_55837 == 1)) {
                IF_SETMODELANIM(22645 as seq, int2);
                IF_SETONTIMER(callback(), int2);
                IF_SETHIDE(1, 66453578);
                IF_SETHIDE(1, 66453582);
                IF_SETHIDE(1, 66453581);
                stack(20315);
                stack(66453580);
                IF_SETGRAPHIC();
            } else {
                IF_SETMODELANIM(34955 as seq, int2);
                IF_SETONTIMER(callback(script16715, CLIENTCLOCK(), int1, int2, 0), int2);
                stack(20218);
                stack(66453580);
                IF_SETGRAPHIC();
            };
            break;
        }
    };
    IF_SETONTIMER(callback(), int2);
    return;
}