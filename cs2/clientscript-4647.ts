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
        stack(2808);
        stack(11337792);
        IF_SETGRAPHIC();
    };
    if ((TESTBIT(varplayer_1554, 1) == 1)) {
        IF_SETHIDE(false, comp(173, 66));
    } else if ((TESTBIT(varplayer_1554, 0) == 1)) {
        IF_SETHIDE(false, comp(173, 66));
        stack(2808);
        stack(11337794);
        IF_SETGRAPHIC();
    } else {
        IF_SETHIDE(true, comp(173, 66));
    };
    if ((TESTBIT(varplayer_1554, 2) == 1)) {
        IF_SETHIDE(false, comp(173, 67));
    } else if ((TESTBIT(varplayer_1554, 1) == 1)) {
        IF_SETHIDE(false, comp(173, 67));
        stack(2807);
        stack(11337795);
        IF_SETGRAPHIC();
    } else {
        IF_SETHIDE(true, comp(173, 67));
    };
    if ((TESTBIT(varplayer_1554, 3) == 1)) {
        IF_SETHIDE(false, comp(173, 68));
    } else if ((TESTBIT(varplayer_1554, 2) == 1)) {
        IF_SETHIDE(false, comp(173, 68));
        stack(2807);
        stack(11337796);
        IF_SETGRAPHIC();
    } else {
        IF_SETHIDE(true, comp(173, 68));
    };
    if ((TESTBIT(varplayer_1554, 4) == 1)) {
        IF_SETHIDE(false, comp(173, 69));
    } else if ((TESTBIT(varplayer_1554, 3) == 1)) {
        IF_SETHIDE(false, comp(173, 69));
        stack(2806);
        stack(11337797);
        IF_SETGRAPHIC();
    } else {
        IF_SETHIDE(true, comp(173, 69));
    };
    if ((TESTBIT(varplayer_1554, 5) == 1)) {
        IF_SETHIDE(false, comp(173, 72));
    } else {
        stack(2807);
        stack(11337800);
        IF_SETGRAPHIC();
    };
    if ((TESTBIT(varplayer_1554, 6) == 1)) {
        IF_SETHIDE(false, comp(173, 73));
    } else if ((TESTBIT(varplayer_1554, 5) == 1)) {
        IF_SETHIDE(false, comp(173, 73));
        stack(2808);
        stack(11337801);
        IF_SETGRAPHIC();
    } else {
        IF_SETHIDE(true, comp(173, 73));
    };
    if ((TESTBIT(varplayer_1554, 7) == 1)) {
        IF_SETHIDE(false, comp(173, 65));
    } else {
        stack(2806);
        stack(11337793);
        IF_SETGRAPHIC();
    };
    if ((TESTBIT(varplayer_1554, 8) == 1)) {
        IF_SETHIDE(false, comp(173, 74));
    } else if ((TESTBIT(varplayer_1554, 7) == 1)) {
        IF_SETHIDE(false, comp(173, 74));
        stack(2807);
        stack(11337802);
        IF_SETGRAPHIC();
    } else {
        IF_SETHIDE(true, comp(173, 74));
    };
    if ((TESTBIT(varplayer_1554, 9) == 1)) {
        IF_SETHIDE(false, comp(173, 75));
    } else if ((TESTBIT(varplayer_1554, 8) == 1)) {
        IF_SETHIDE(false, comp(173, 75));
        stack(2807);
        stack(11337803);
        IF_SETGRAPHIC();
    } else {
        IF_SETHIDE(true, comp(173, 75));
    };
    if ((TESTBIT(varplayer_1554, 10) == 1)) {
        IF_SETHIDE(false, comp(173, 77));
    } else if ((TESTBIT(varplayer_1554, 9) == 1)) {
        IF_SETHIDE(false, comp(173, 77));
        stack(2807);
        stack(11337805);
        IF_SETGRAPHIC();
    } else {
        IF_SETHIDE(true, comp(173, 77));
    };
    if ((TESTBIT(varplayer_1554, 11) == 1)) {
        IF_SETHIDE(false, comp(173, 78));
    } else if ((TESTBIT(varplayer_1554, 9) == 1)) {
        IF_SETHIDE(false, comp(173, 78));
        stack(2808);
        stack(11337806);
        IF_SETGRAPHIC();
    } else {
        IF_SETHIDE(true, comp(173, 78));
    };
    if ((TESTBIT(varplayer_1554, 12) == 1)) {
        IF_SETHIDE(false, comp(173, 79));
    } else if ((TESTBIT(varplayer_1554, 11) == 1)) {
        IF_SETHIDE(false, comp(173, 79));
        stack(2807);
        stack(11337807);
        IF_SETGRAPHIC();
    } else {
        IF_SETHIDE(true, comp(173, 79));
    };
    if ((TESTBIT(varplayer_1554, 13) == 1)) {
        IF_SETHIDE(false, comp(173, 76));
    } else if ((TESTBIT(varplayer_1554, 9) == 1)) {
        IF_SETHIDE(false, comp(173, 76));
        stack(2806);
        stack(11337804);
        IF_SETGRAPHIC();
    } else {
        IF_SETHIDE(true, comp(173, 76));
    };
    if ((TESTBIT(varplayer_1554, 14) == 1)) {
        IF_SETHIDE(false, comp(173, 70));
        IF_SETHIDE(false, comp(173, 71));
    } else if ((TESTBIT(varplayer_1554, 7) == 1)) {
        IF_SETHIDE(false, comp(173, 70));
        stack(2806);
        stack(11337798);
        IF_SETGRAPHIC();
        IF_SETHIDE(1, 11337799);
    } else {
        IF_SETHIDE(true, comp(173, 70));
        IF_SETHIDE(true, comp(173, 71));
    };
    script4653();
    return;
}