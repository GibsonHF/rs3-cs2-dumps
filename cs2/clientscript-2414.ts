//
function script2414(): void {
    if ((varbitplayer_13734 == 120)) {
        IF_SETHIDE(false, comp(765, 5));
        IF_SETHIDE(true, comp(765, 4));
        if ((INV_TOTAL(93 as inv, 14831 as obj) == 0)) {
            IF_SETHIDE(true, comp(765, 20));
        };
        if (((INV_TOTAL(93 as inv, 14824 as obj) == 0) && (INV_TOTAL(94 as inv, 14824 as obj) == 0))) {
            IF_SETHIDE(true, comp(765, 26));
        };
        if ((INV_TOTAL(93 as inv, 14830 as obj) == 0)) {
            IF_SETHIDE(true, comp(765, 24));
        };
        if (((INV_TOTAL(93 as inv, 14823 as obj) == 0) && (INV_TOTAL(94 as inv, 14823 as obj) == 0))) {
            IF_SETHIDE(true, comp(765, 25));
        };
        if ((INV_TOTAL(93 as inv, 14829 as obj) == 0)) {
            IF_SETHIDE(true, comp(765, 23));
        };
        if ((INV_TOTAL(93 as inv, 14828 as obj) == 0)) {
            IF_SETHIDE(true, comp(765, 22));
        };
        if ((INV_TOTAL(93 as inv, 14827 as obj) == 0)) {
            IF_SETHIDE(true, comp(765, 21));
        };
    } else {
        IF_SETHIDE(true, comp(765, 5));
        IF_SETHIDE(false, comp(765, 4));
    };
    IF_SETMODELANIM(-1 as seq, comp(765, 11));
    IF_SETHIDE(false, comp(765, 12));
    IF_SETMODEL(46967 as model, comp(765, 6));
    IF_SETMODELANIM(11762 as seq, comp(765, 11));
    IF_SETHIDE(true, comp(765, 18));
    IF_SETHIDE(false, comp(765, 19));
    IF_SETHIDE(true, comp(765, 7));
    IF_SETHIDE(false, comp(765, 17));
    IF_SETMODELANIM(-1 as seq, comp(765, 19));
    IF_SETHIDE(true, comp(765, 28));
    IF_SETHIDE(true, comp(765, 27));
    IF_SETHIDE(true, comp(765, 8));
    varclient_805 = 0;
    varclient_806 = 0;
    return;
}