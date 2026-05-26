//[clientscript,hauntedmine_controls_load]
function script1294(): void {
    if ((TESTBIT(varplayer_2202, 1) == 1)) {
        IF_SETMODEL(4912, 9437305);
    };
    if ((TESTBIT(varplayer_2202, 2) == 1)) {
        IF_SETMODEL(4912, 9437306);
    };
    if ((TESTBIT(varplayer_2202, 3) == 1)) {
        IF_SETMODEL(4913, 9437307);
    };
    if ((TESTBIT(varplayer_2202, 4) == 1)) {
        IF_SETMODEL(4912, 9437308);
    };
    if ((TESTBIT(varplayer_2202, 5) == 1)) {
        IF_SETMODEL(4912, 9437309);
    };
    if ((TESTBIT(varplayer_2202, 6) == 1)) {
        IF_SETMODEL(4913, 9437310);
    };
    if ((TESTBIT(varplayer_2202, 7) == 1)) {
        IF_SETMODEL(4913, 9437311);
    };
    if ((TESTBIT(varplayer_2202, 8) == 1)) {
        IF_SETMODEL(4912, 9437312);
    };
    if ((varplayer_2202 > 8191)) {
        IF_SETHIDE(1, 9437357);
        IF_SETGRAPHIC(296, 9437317);
    };
    if ((TESTBIT(varplayer_2202, 14) == 1)) {
        IF_SETMODEL(4910, 9437345);
        IF_SETMODELANIM(1456, 9437345);
    };
    if ((TESTBIT(varplayer_2202, 15) == 1)) {
        IF_SETMODEL(4910, 9437343);
        IF_SETMODELANIM(1456, 9437343);
    };
    if ((TESTBIT(varplayer_2202, 16) == 1)) {
        IF_SETMODEL(4910, 9437347);
        IF_SETMODELANIM(1456, 9437347);
    };
    if ((TESTBIT(varplayer_2202, 17) == 1)) {
        IF_SETMODEL(4910, 9437349);
        IF_SETMODELANIM(1455, 9437349);
    };
    if ((TESTBIT(varplayer_2202, 18) == 1)) {
        IF_SETMODEL(4910, 9437351);
        IF_SETMODELANIM(1455, 9437351);
    };
    if ((TESTBIT(varplayer_2202, 19) == 1)) {
        IF_SETMODEL(4910, 9437354);
        IF_SETMODELANIM(1453, 9437354);
    };
    if ((TESTBIT(varplayer_2202, 20) == 1)) {
        IF_SETMODEL(4910, 9437356);
        IF_SETMODELANIM(1453, 9437356);
    };
    return;
}