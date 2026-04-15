//[clientscript,hauntedmine_controls_load]
function script1294(): void {
    if ((TESTBIT(varplayer_2202, 1) == 1)) {
        IF_SETMODEL(4912 as model, comp(144, 121));
    };
    if ((TESTBIT(varplayer_2202, 2) == 1)) {
        IF_SETMODEL(4912 as model, comp(144, 122));
    };
    if ((TESTBIT(varplayer_2202, 3) == 1)) {
        IF_SETMODEL(4913 as model, comp(144, 123));
    };
    if ((TESTBIT(varplayer_2202, 4) == 1)) {
        IF_SETMODEL(4912 as model, comp(144, 124));
    };
    if ((TESTBIT(varplayer_2202, 5) == 1)) {
        IF_SETMODEL(4912 as model, comp(144, 125));
    };
    if ((TESTBIT(varplayer_2202, 6) == 1)) {
        IF_SETMODEL(4913 as model, comp(144, 126));
    };
    if ((TESTBIT(varplayer_2202, 7) == 1)) {
        IF_SETMODEL(4913 as model, comp(144, 127));
    };
    if ((TESTBIT(varplayer_2202, 8) == 1)) {
        IF_SETMODEL(4912 as model, comp(144, 128));
    };
    if ((varplayer_2202 > 8191)) {
        IF_SETHIDE(true, comp(144, 173));
        stack(296);
        stack(9437317);
        IF_SETGRAPHIC();
    };
    if ((TESTBIT(varplayer_2202, 14) == 1)) {
        IF_SETMODEL(4910 as model, comp(144, 161));
        IF_SETMODELANIM(1456 as seq, comp(144, 161));
    };
    if ((TESTBIT(varplayer_2202, 15) == 1)) {
        IF_SETMODEL(4910 as model, comp(144, 159));
        IF_SETMODELANIM(1456 as seq, comp(144, 159));
    };
    if ((TESTBIT(varplayer_2202, 16) == 1)) {
        IF_SETMODEL(4910 as model, comp(144, 163));
        IF_SETMODELANIM(1456 as seq, comp(144, 163));
    };
    if ((TESTBIT(varplayer_2202, 17) == 1)) {
        IF_SETMODEL(4910 as model, comp(144, 165));
        IF_SETMODELANIM(1455 as seq, comp(144, 165));
    };
    if ((TESTBIT(varplayer_2202, 18) == 1)) {
        IF_SETMODEL(4910 as model, comp(144, 167));
        IF_SETMODELANIM(1455 as seq, comp(144, 167));
    };
    if ((TESTBIT(varplayer_2202, 19) == 1)) {
        IF_SETMODEL(4910 as model, comp(144, 170));
        IF_SETMODELANIM(1453 as seq, comp(144, 170));
    };
    if ((TESTBIT(varplayer_2202, 20) == 1)) {
        IF_SETMODEL(4910 as model, comp(144, 172));
        IF_SETMODELANIM(1453 as seq, comp(144, 172));
    };
    return;
}