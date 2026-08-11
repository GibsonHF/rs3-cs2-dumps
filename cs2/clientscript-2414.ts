//
function script2414(): void {
    if ((varbitplayer_13734 == 120)) {
        IF_SETHIDE(false, comp(765, 5));  // peng_rak_engine:fish_tools
        IF_SETHIDE(true, comp(765, 4));  // peng_rak_engine:normal_tools
        if ((INV_TOTAL(93 as inv, 14831 as obj) == 0)) {
            IF_SETHIDE(true, comp(765, 20));  // peng_rak_engine:swordfish
        };
        if (((INV_TOTAL(93 as inv, 14824 as obj) == 0) && (INV_TOTAL(94 as inv, 14824 as obj) == 0))) {
            IF_SETHIDE(true, comp(765, 26));  // peng_rak_engine:octopus
        };
        if ((INV_TOTAL(93 as inv, 14830 as obj) == 0)) {
            IF_SETHIDE(true, comp(765, 24));  // peng_rak_engine:seaweed
        };
        if (((INV_TOTAL(93 as inv, 14823 as obj) == 0) && (INV_TOTAL(94 as inv, 14823 as obj) == 0))) {
            IF_SETHIDE(true, comp(765, 25));  // peng_rak_engine:blowfish
        };
        if ((INV_TOTAL(93 as inv, 14829 as obj) == 0)) {
            IF_SETHIDE(true, comp(765, 23));  // peng_rak_engine:eel
        };
        if ((INV_TOTAL(93 as inv, 14828 as obj) == 0)) {
            IF_SETHIDE(true, comp(765, 22));  // peng_rak_engine:sharktooth
        };
        if ((INV_TOTAL(93 as inv, 14827 as obj) == 0)) {
            IF_SETHIDE(true, comp(765, 21));  // peng_rak_engine:crab
        };
    } else {
        IF_SETHIDE(true, comp(765, 5));  // peng_rak_engine:fish_tools
        IF_SETHIDE(false, comp(765, 4));  // peng_rak_engine:normal_tools
    };
    IF_SETMODELANIM(-1 as seq, comp(765, 11));  // peng_rak_engine:gauge
    IF_SETHIDE(false, comp(765, 12));  // peng_rak_engine:wirebox_cover
    IF_SETMODEL(46967 as model, comp(765, 6));  // peng_rak_engine:wirebox
    IF_SETMODELANIM(11762 as seq, comp(765, 11));  // peng_rak_engine:gauge
    IF_SETHIDE(true, comp(765, 18));  // peng_rak_engine:lever_down
    IF_SETHIDE(false, comp(765, 19));  // peng_rak_engine:lever_up
    IF_SETHIDE(true, comp(765, 7));  // peng_rak_engine:bellows_demo
    IF_SETHIDE(false, comp(765, 17));  // peng_rak_engine:bellows
    IF_SETMODELANIM(-1 as seq, comp(765, 19));  // peng_rak_engine:lever_up
    IF_SETHIDE(true, comp(765, 28));  // peng_rak_engine:lever_up_fish
    IF_SETHIDE(true, comp(765, 27));  // peng_rak_engine:lever_down_fish
    IF_SETHIDE(true, comp(765, 8));  // peng_rak_engine:blowfish_demo
    varclient_805 = 0;
    varclient_806 = 0;
    return;
}