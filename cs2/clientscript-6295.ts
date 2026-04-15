//
function script6295(): void {
    IF_SETHIDE(false, comp(237, 14));
    IF_SETOBJECT(29743 as obj, 1, comp(237, 14));
    IF_SETHIDE(false, comp(237, 15));
    IF_SETOBJECT(29744 as obj, 1, comp(237, 15));
    IF_SETHIDE(false, comp(237, 16));
    IF_SETOBJECT(29745 as obj, 1, comp(237, 16));
    IF_SETHIDE(false, comp(237, 17));
    IF_SETOBJECT(29746 as obj, 1, comp(237, 17));
    IF_SETHIDE(false, comp(237, 18));
    IF_SETOBJECT(29747 as obj, 1, comp(237, 18));
    IF_SETHIDE(false, comp(237, 19));
    IF_SETOBJECT(29748 as obj, 1, comp(237, 19));
    IF_SETHIDE(false, comp(237, 20));
    IF_SETOBJECT(29749 as obj, 1, comp(237, 20));
    IF_SETHIDE(false, comp(237, 21));
    IF_SETOBJECT(29750 as obj, 1, comp(237, 21));
    if ((INV_TOTAL(93 as inv, 29743 as obj) == 0)) {
        IF_SETHIDE(true, comp(237, 14));
    };
    if ((INV_TOTAL(93 as inv, 29744 as obj) == 0)) {
        IF_SETHIDE(true, comp(237, 15));
    };
    if ((INV_TOTAL(93 as inv, 29745 as obj) == 0)) {
        IF_SETHIDE(true, comp(237, 16));
    };
    if ((INV_TOTAL(93 as inv, 29746 as obj) == 0)) {
        IF_SETHIDE(true, comp(237, 17));
    };
    if ((INV_TOTAL(93 as inv, 29747 as obj) == 0)) {
        IF_SETHIDE(true, comp(237, 18));
    };
    if ((INV_TOTAL(93 as inv, 29748 as obj) == 0)) {
        IF_SETHIDE(true, comp(237, 19));
    };
    if ((INV_TOTAL(93 as inv, 29749 as obj) == 0)) {
        IF_SETHIDE(true, comp(237, 20));
    };
    if ((INV_TOTAL(93 as inv, 29750 as obj) == 0)) {
        IF_SETHIDE(true, comp(237, 21));
    };
    return;
}