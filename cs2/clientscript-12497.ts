//
function script12497(): int {
    if ((varplayer_3079 < DATE_RUNEDAY_FROMDATE(4, 4, 2016))) {
        return 0;
    };
    if ((varplayer_3079 < DATE_RUNEDAY_FROMDATE(9, 4, 2016))) {
        return 1;
    };
    if ((varplayer_3079 < DATE_RUNEDAY_FROMDATE(16, 4, 2016))) {
        return 2;
    };
    if ((varplayer_3079 < DATE_RUNEDAY_FROMDATE(23, 4, 2016))) {
        return 3;
    };
    if ((varplayer_3079 < DATE_RUNEDAY_FROMDATE(30, 4, 2016))) {
        return 4;
    };
    return -1;
}