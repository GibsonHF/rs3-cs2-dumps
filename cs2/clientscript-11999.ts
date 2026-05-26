//
function script11999(int0: number, int1: number, int2: number, int3: number): void {
    var int4 = IF_GETWIDTH(int0);
    if ((int3 == 1)) {
        IF_SETGRAPHIC(29753, int1);
    } else if ((varbitplayer_45115 == 1)) {
        IF_SETGRAPHIC(29755, int1);
        if ((int4 >= 110)) {
            switch (varbitplayer_16789) {
                case 1: {
                    IF_SETTEXT("Show all Curses", int0);
                    break;
                }
                case 0: {
                    IF_SETTEXT("Show all Prayers", int0);
                    break;
                }
            };
        } else if ((int4 >= (110 / 2))) {
            IF_SETTEXT("Show All", int0);
        } else {
            IF_SETTEXT("", int0);
        };
    } else {
        IF_SETGRAPHIC(29756, int1);
        if ((int4 >= 110)) {
            switch (varbitplayer_16789) {
                case 1: {
                    IF_SETTEXT("Filter Unusable Curses", int0);
                    break;
                }
                case 0: {
                    IF_SETTEXT("Filter Unusable Prayers", int0);
                    break;
                }
            };
        } else if ((int4 >= (110 / 2))) {
            IF_SETTEXT("Filter", int0);
        } else {
            IF_SETTEXT("", int0);
        };
    };
    script12014(int2);
    return;
}