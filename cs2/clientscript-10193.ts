//
function script10193(int0: number, int1: number, int2: number): void {
    switch (int0) {
        case 9:
        case 10: {
            if ((varbitplayer_23193 == 0)) {
                IF_SETHIDE(true, int1);
                IF_SETHIDE(false, int2);
            } else {
                IF_SETHIDE(false, int1);
                IF_SETHIDE(true, int2);
            };
            break;
        }
    };
    return;
}