//[clientscript,hauntedmine_controls_load]
function script1294(): void {
    if ((TESTBIT(varplayer_2202, 1) == 1)) {
        IF_SETMODEL(4912 as model, comp(144, 121));  // hauntedmine_controls:hauntedmine_points1
    };
    if ((TESTBIT(varplayer_2202, 2) == 1)) {
        IF_SETMODEL(4912 as model, comp(144, 122));  // hauntedmine_controls:hauntedmine_points2
    };
    if ((TESTBIT(varplayer_2202, 3) == 1)) {
        IF_SETMODEL(4913 as model, comp(144, 123));  // hauntedmine_controls:hauntedmine_points3
    };
    if ((TESTBIT(varplayer_2202, 4) == 1)) {
        IF_SETMODEL(4912 as model, comp(144, 124));  // hauntedmine_controls:hauntedmine_points4
    };
    if ((TESTBIT(varplayer_2202, 5) == 1)) {
        IF_SETMODEL(4912 as model, comp(144, 125));  // hauntedmine_controls:hauntedmine_points5
    };
    if ((TESTBIT(varplayer_2202, 6) == 1)) {
        IF_SETMODEL(4913 as model, comp(144, 126));  // hauntedmine_controls:hauntedmine_points6
    };
    if ((TESTBIT(varplayer_2202, 7) == 1)) {
        IF_SETMODEL(4913 as model, comp(144, 127));  // hauntedmine_controls:hauntedmine_points7
    };
    if ((TESTBIT(varplayer_2202, 8) == 1)) {
        IF_SETMODEL(4912 as model, comp(144, 128));  // hauntedmine_controls:hauntedmine_points8
    };
    if ((varplayer_2202 > 8191)) {
        IF_SETHIDE(true, comp(144, 173));  // hauntedmine_controls:hauntedmine_cart0
        IF_SETGRAPHIC(296 as graphic, comp(144, 133));  // hauntedmine_controls:start_button
    };
    if ((TESTBIT(varplayer_2202, 14) == 1)) {
        IF_SETMODEL(4910 as model, comp(144, 161));  // hauntedmine_controls:hauntedmine_cart2
        IF_SETMODELANIM(1456 as seq, comp(144, 161));  // hauntedmine_controls:hauntedmine_cart2
    };
    if ((TESTBIT(varplayer_2202, 15) == 1)) {
        IF_SETMODEL(4910 as model, comp(144, 159));  // hauntedmine_controls:hauntedmine_cart3
        IF_SETMODELANIM(1456 as seq, comp(144, 159));  // hauntedmine_controls:hauntedmine_cart3
    };
    if ((TESTBIT(varplayer_2202, 16) == 1)) {
        IF_SETMODEL(4910 as model, comp(144, 163));  // hauntedmine_controls:hauntedmine_cart4
        IF_SETMODELANIM(1456 as seq, comp(144, 163));  // hauntedmine_controls:hauntedmine_cart4
    };
    if ((TESTBIT(varplayer_2202, 17) == 1)) {
        IF_SETMODEL(4910 as model, comp(144, 165));  // hauntedmine_controls:hauntedmine_cart5
        IF_SETMODELANIM(1455 as seq, comp(144, 165));  // hauntedmine_controls:hauntedmine_cart5
    };
    if ((TESTBIT(varplayer_2202, 18) == 1)) {
        IF_SETMODEL(4910 as model, comp(144, 167));  // hauntedmine_controls:hauntedmine_cart6
        IF_SETMODELANIM(1455 as seq, comp(144, 167));  // hauntedmine_controls:hauntedmine_cart6
    };
    if ((TESTBIT(varplayer_2202, 19) == 1)) {
        IF_SETMODEL(4910 as model, comp(144, 170));  // hauntedmine_controls:hauntedmine_cart7
        IF_SETMODELANIM(1453 as seq, comp(144, 170));  // hauntedmine_controls:hauntedmine_cart7
    };
    if ((TESTBIT(varplayer_2202, 20) == 1)) {
        IF_SETMODEL(4910 as model, comp(144, 172));  // hauntedmine_controls:hauntedmine_cart8
        IF_SETMODELANIM(1453 as seq, comp(144, 172));  // hauntedmine_controls:hauntedmine_cart8
    };
    return;
}