//
function script4676(int0: number): void {
    switch (int0) {
        case 1: {
            if ((varbitplayer_4775 == 1)) {
                IF_SETHIDE(1, 6684713);
            } else if (((((varbitplayer_4758 == 10) && (STAT_BASE(6) >= 30)) && (STAT_BASE(4) >= 30)) && (STAT_BASE(0) >= 30))) {
                IF_SETHIDE(0, 6684715);
                IF_SETHIDE(0, 6684713);
                if ((varbitplayer_4776 == 0)) {
                    IF_SETTEXT("You receive two new books.", 6684715);
                };
            };
            if ((varbitplayer_4776 == 1)) {
                IF_SETHIDE(1, 6684712);
            } else {
                IF_SETHIDE(0, 6684715);
                IF_SETHIDE(0, 6684712);
            };
            break;
        }
        case 2: {
            if ((varbitplayer_4777 == 1)) {
                IF_SETHIDE(1, 6684713);
            } else if ((((varbitplayer_4758 == 10) && (STAT_BASE(16) >= 55)) && (STAT_BASE(17) >= 55))) {
                IF_SETHIDE(0, 6684715);
                IF_SETHIDE(0, 6684713);
                if ((varbitplayer_4778 == 0)) {
                    IF_SETTEXT("You receive two new books.", 6684715);
                };
            };
            if ((varbitplayer_4778 == 1)) {
                IF_SETHIDE(1, 6684712);
            } else {
                IF_SETHIDE(0, 6684715);
                IF_SETHIDE(0, 6684712);
            };
            break;
        }
        case 4: {
            if ((varbitplayer_4779 == 1)) {
                IF_SETHIDE(1, 6684713);
            } else if (((varbitplayer_4758 == 10) && (STAT_BASE(2) >= 70))) {
                IF_SETHIDE(0, 6684715);
                IF_SETHIDE(0, 6684713);
                if ((varbitplayer_4780 == 0)) {
                    IF_SETTEXT("You receive two new books.", 6684715);
                };
            };
            if ((varbitplayer_4780 == 1)) {
                IF_SETHIDE(1, 6684712);
            } else {
                IF_SETHIDE(0, 6684715);
                IF_SETHIDE(0, 6684712);
            };
            break;
        }
        case 3: {
            if ((varbitplayer_4781 == 1)) {
                IF_SETHIDE(1, 6684713);
            } else if (((((varbitplayer_4758 == 10) && (STAT_BASE(0) >= 60)) && (STAT_BASE(17) >= 45)) && (STAT_BASE(24) >= 55))) {
                IF_SETHIDE(0, 6684715);
                IF_SETHIDE(0, 6684713);
                if ((varbitplayer_4782 == 0)) {
                    IF_SETTEXT("You receive two new books.", 6684715);
                };
            };
            if ((varbitplayer_4782 == 1)) {
                IF_SETHIDE(1, 6684712);
            } else {
                IF_SETHIDE(0, 6684715);
                IF_SETHIDE(0, 6684712);
            };
            break;
        }
        case 6: {
            if ((varbitplayer_4783 == 1)) {
                IF_SETHIDE(1, 6684713);
            } else if (((varbitplayer_4758 == 10) && (STAT_BASE(2) >= 75))) {
                IF_SETHIDE(0, 6684715);
                IF_SETHIDE(0, 6684713);
                if ((varbitplayer_4784 == 0)) {
                    IF_SETTEXT("You receive two new books.", 6684715);
                };
            };
            if ((varbitplayer_4784 == 1)) {
                IF_SETHIDE(1, 6684712);
            } else {
                IF_SETHIDE(0, 6684715);
                IF_SETHIDE(0, 6684712);
            };
            break;
        }
    };
    return;
}