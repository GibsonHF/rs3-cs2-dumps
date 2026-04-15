//
function script4676(int0: int): void {
    switch (int0) {
        case 1: {
            if ((varbitplayer_4775 == 1)) {
                IF_SETHIDE(true, comp(102, 41));
            } else if (((((varbitplayer_4758 == 10) && (STAT_BASE(6 as stat) >= 30)) && (STAT_BASE(4 as stat) >= 30)) && (STAT_BASE(0 as stat) >= 30))) {
                IF_SETHIDE(false, comp(102, 43));
                IF_SETHIDE(false, comp(102, 41));
                if ((varbitplayer_4776 == 0)) {
                    IF_SETTEXT("You receive two new books.", comp(102, 43));
                };
            };
            if ((varbitplayer_4776 == 1)) {
                IF_SETHIDE(true, comp(102, 40));
            } else {
                IF_SETHIDE(false, comp(102, 43));
                IF_SETHIDE(false, comp(102, 40));
            };
            break;
        }
        case 2: {
            if ((varbitplayer_4777 == 1)) {
                IF_SETHIDE(true, comp(102, 41));
            } else if ((((varbitplayer_4758 == 10) && (STAT_BASE(16 as stat) >= 55)) && (STAT_BASE(17 as stat) >= 55))) {
                IF_SETHIDE(false, comp(102, 43));
                IF_SETHIDE(false, comp(102, 41));
                if ((varbitplayer_4778 == 0)) {
                    IF_SETTEXT("You receive two new books.", comp(102, 43));
                };
            };
            if ((varbitplayer_4778 == 1)) {
                IF_SETHIDE(true, comp(102, 40));
            } else {
                IF_SETHIDE(false, comp(102, 43));
                IF_SETHIDE(false, comp(102, 40));
            };
            break;
        }
        case 4: {
            if ((varbitplayer_4779 == 1)) {
                IF_SETHIDE(true, comp(102, 41));
            } else if (((varbitplayer_4758 == 10) && (STAT_BASE(2 as stat) >= 70))) {
                IF_SETHIDE(false, comp(102, 43));
                IF_SETHIDE(false, comp(102, 41));
                if ((varbitplayer_4780 == 0)) {
                    IF_SETTEXT("You receive two new books.", comp(102, 43));
                };
            };
            if ((varbitplayer_4780 == 1)) {
                IF_SETHIDE(true, comp(102, 40));
            } else {
                IF_SETHIDE(false, comp(102, 43));
                IF_SETHIDE(false, comp(102, 40));
            };
            break;
        }
        case 3: {
            if ((varbitplayer_4781 == 1)) {
                IF_SETHIDE(true, comp(102, 41));
            } else if (((((varbitplayer_4758 == 10) && (STAT_BASE(0 as stat) >= 60)) && (STAT_BASE(17 as stat) >= 45)) && (STAT_BASE(24 as stat) >= 55))) {
                IF_SETHIDE(false, comp(102, 43));
                IF_SETHIDE(false, comp(102, 41));
                if ((varbitplayer_4782 == 0)) {
                    IF_SETTEXT("You receive two new books.", comp(102, 43));
                };
            };
            if ((varbitplayer_4782 == 1)) {
                IF_SETHIDE(true, comp(102, 40));
            } else {
                IF_SETHIDE(false, comp(102, 43));
                IF_SETHIDE(false, comp(102, 40));
            };
            break;
        }
        case 6: {
            if ((varbitplayer_4783 == 1)) {
                IF_SETHIDE(true, comp(102, 41));
            } else if (((varbitplayer_4758 == 10) && (STAT_BASE(2 as stat) >= 75))) {
                IF_SETHIDE(false, comp(102, 43));
                IF_SETHIDE(false, comp(102, 41));
                if ((varbitplayer_4784 == 0)) {
                    IF_SETTEXT("You receive two new books.", comp(102, 43));
                };
            };
            if ((varbitplayer_4784 == 1)) {
                IF_SETHIDE(true, comp(102, 40));
            } else {
                IF_SETHIDE(false, comp(102, 43));
                IF_SETHIDE(false, comp(102, 40));
            };
            break;
        }
    };
    return;
}