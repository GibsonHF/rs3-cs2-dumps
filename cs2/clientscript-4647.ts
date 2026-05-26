//
function script4647(): void {
    IF_SETHIDE(true, comp(173, 2));
    IF_SETHIDE(true, comp(173, 3));
    IF_SETHIDE(false, comp(173, 1));
    IF_SETHIDE(false, comp(173, 62));
    IF_SETHIDE(false, comp(173, 63));
    if ((TESTBIT(varplayer_1554, 0) == 1)) {
        IF_SETHIDE(false, comp(173, 64));
    } else {
        IF_SETHIDE(false, comp(173, 64));
        IF_SETGRAPHIC(2808 as graphic, comp(173, 64));
    };
    if ((TESTBIT(varplayer_1554, 1) == 1)) {
        IF_SETHIDE(false, comp(173, 66));
    } else if ((TESTBIT(varplayer_1554, 0) == 1)) {
        IF_SETHIDE(false, comp(173, 66));
        IF_SETGRAPHIC(2808 as graphic, comp(173, 66));
    } else {
        IF_SETHIDE(true, comp(173, 66));
    };
    if ((TESTBIT(varplayer_1554, 2) == 1)) {
        IF_SETHIDE(false, comp(173, 67));
    } else if ((TESTBIT(varplayer_1554, 1) == 1)) {
        IF_SETHIDE(false, comp(173, 67));
        IF_SETGRAPHIC(2807 as graphic, comp(173, 67));
    } else {
        IF_SETHIDE(true, comp(173, 67));
    };
    if ((TESTBIT(varplayer_1554, 3) == 1)) {
        IF_SETHIDE(false, comp(173, 68));
    } else if ((TESTBIT(varplayer_1554, 2) == 1)) {
        IF_SETHIDE(false, comp(173, 68));
        IF_SETGRAPHIC(2807 as graphic, comp(173, 68));
    } else {
        IF_SETHIDE(true, comp(173, 68));
    };
    if ((TESTBIT(varplayer_1554, 4) == 1)) {
        IF_SETHIDE(false, comp(173, 69));
    } else if ((TESTBIT(varplayer_1554, 3) == 1)) {
        IF_SETHIDE(false, comp(173, 69));
        IF_SETGRAPHIC(2806 as graphic, comp(173, 69));
    } else {
        IF_SETHIDE(true, comp(173, 69));
    };
    if ((TESTBIT(varplayer_1554, 5) == 1)) {
        IF_SETHIDE(false, comp(173, 72));
    } else {
        IF_SETGRAPHIC(2807 as graphic, comp(173, 72));
    };
    if ((TESTBIT(varplayer_1554, 6) == 1)) {
        IF_SETHIDE(false, comp(173, 73));
    } else if ((TESTBIT(varplayer_1554, 5) == 1)) {
        IF_SETHIDE(false, comp(173, 73));
        IF_SETGRAPHIC(2808 as graphic, comp(173, 73));
    } else {
        IF_SETHIDE(true, comp(173, 73));
    };
    if ((TESTBIT(varplayer_1554, 7) == 1)) {
        IF_SETHIDE(false, comp(173, 65));
    } else {
        IF_SETGRAPHIC(2806 as graphic, comp(173, 65));
    };
    if ((TESTBIT(varplayer_1554, 8) == 1)) {
        IF_SETHIDE(false, comp(173, 74));
    } else if ((TESTBIT(varplayer_1554, 7) == 1)) {
        IF_SETHIDE(false, comp(173, 74));
        IF_SETGRAPHIC(2807 as graphic, comp(173, 74));
    } else {
        IF_SETHIDE(true, comp(173, 74));
    };
    if ((TESTBIT(varplayer_1554, 9) == 1)) {
        IF_SETHIDE(false, comp(173, 75));
    } else if ((TESTBIT(varplayer_1554, 8) == 1)) {
        IF_SETHIDE(false, comp(173, 75));
        IF_SETGRAPHIC(2807 as graphic, comp(173, 75));
    } else {
        IF_SETHIDE(true, comp(173, 75));
    };
    if ((TESTBIT(varplayer_1554, 10) == 1)) {
        IF_SETHIDE(false, comp(173, 77));
    } else if ((TESTBIT(varplayer_1554, 9) == 1)) {
        IF_SETHIDE(false, comp(173, 77));
        IF_SETGRAPHIC(2807 as graphic, comp(173, 77));
    } else {
        IF_SETHIDE(true, comp(173, 77));
    };
    if ((TESTBIT(varplayer_1554, 11) == 1)) {
        IF_SETHIDE(false, comp(173, 78));
    } else if ((TESTBIT(varplayer_1554, 9) == 1)) {
        IF_SETHIDE(false, comp(173, 78));
        IF_SETGRAPHIC(2808 as graphic, comp(173, 78));
    } else {
        IF_SETHIDE(true, comp(173, 78));
    };
    if ((TESTBIT(varplayer_1554, 12) == 1)) {
        IF_SETHIDE(false, comp(173, 79));
    } else if ((TESTBIT(varplayer_1554, 11) == 1)) {
        IF_SETHIDE(false, comp(173, 79));
        IF_SETGRAPHIC(2807 as graphic, comp(173, 79));
    } else {
        IF_SETHIDE(true, comp(173, 79));
    };
    if ((TESTBIT(varplayer_1554, 13) == 1)) {
        IF_SETHIDE(false, comp(173, 76));
    } else if ((TESTBIT(varplayer_1554, 9) == 1)) {
        IF_SETHIDE(false, comp(173, 76));
        IF_SETGRAPHIC(2806 as graphic, comp(173, 76));
    } else {
        IF_SETHIDE(true, comp(173, 76));
    };
    if ((TESTBIT(varplayer_1554, 14) == 1)) {
        IF_SETHIDE(false, comp(173, 70));
        IF_SETHIDE(false, comp(173, 71));
    } else if ((TESTBIT(varplayer_1554, 7) == 1)) {
        IF_SETHIDE(false, comp(173, 70));
        IF_SETGRAPHIC(2806 as graphic, comp(173, 70));
        IF_SETHIDE(true, comp(173, 71));
    } else {
        IF_SETHIDE(true, comp(173, 70));
        IF_SETHIDE(true, comp(173, 71));
    };
    script4653();
    return;
}