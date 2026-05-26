//
function script6143(int0: number, int1: number): void {
    switch (int0) {
        case 1: {
            IF_SETHIDE(1, 83230787);
            break;
        }
        case 2: {
            IF_SETHIDE(1, 83230788);
            break;
        }
        case 3: {
            IF_SETHIDE(1, 83230789);
            break;
        }
    };
    var int2 = 0;
    if ((IF_GETHIDE(83230730) == 0)) {
        int2 = (int2 + 1);
    };
    if ((IF_GETHIDE(83230746) == 0)) {
        int2 = (int2 + 1);
    };
    if ((IF_GETHIDE(83230748) == 0)) {
        int2 = (int2 + 1);
    };
    switch (int2) {
        case 0: {
            IF_SETHIDE(0, 83230730);
            if ((int1 == 1)) {
                IF_SETHIDE(0, 83230759);
                IF_SETHIDE(0, 83230731);
            } else {
                IF_SETHIDE(0, 83230756);
            };
            break;
        }
        case 1: {
            IF_SETHIDE(0, 83230746);
            if ((int1 == 1)) {
                IF_SETHIDE(0, 83230760);
                IF_SETHIDE(0, 83230747);
            } else {
                IF_SETHIDE(0, 83230757);
            };
            break;
        }
        case 2: {
            IF_SETHIDE(0, 83230748);
            if ((int1 == 1)) {
                IF_SETHIDE(0, 83230761);
                IF_SETHIDE(0, 83230749);
            } else {
                IF_SETHIDE(0, 83230758);
            };
            break;
        }
    };
    return;
}