//
function script1198(): void {
    if ((((INV_TOTAL(93 as inv, 15249 as obj) > 0) || (INV_TOTAL(95 as inv, 15249 as obj) > 0)) || (varbitplayer_10544 >= 44))) {
        IF_SETHIDE(true, comp(887, 5));
    } else {
        IF_SETHIDE(false, comp(887, 5));
    };
    if (((INV_TOTAL(93 as inv, 15253 as obj) > 0) || (INV_TOTAL(95 as inv, 15253 as obj) > 0))) {
        IF_SETHIDE(true, comp(887, 6));
    } else {
        IF_SETHIDE(false, comp(887, 6));
    };
    if ((((INV_TOTAL(93 as inv, 15248 as obj) > 0) || (INV_TOTAL(95 as inv, 15248 as obj) > 0)) || (varbitplayer_10544 == 42))) {
        IF_SETHIDE(true, comp(887, 2));
    } else {
        IF_SETHIDE(false, comp(887, 2));
    };
    if (((INV_TOTAL(93 as inv, 15247 as obj) > 0) || (INV_TOTAL(95 as inv, 15247 as obj) > 0))) {
        IF_SETHIDE(true, comp(887, 4));
    } else {
        IF_SETHIDE(false, comp(887, 4));
    };
    if (((((INV_TOTAL(93 as inv, 15251 as obj) > 0) || (INV_TOTAL(95 as inv, 15251 as obj) > 0)) || (varbitplayer_10544 >= 52)) || (varbitplayer_10554 == 1))) {
        IF_SETHIDE(true, comp(887, 8));
    } else {
        IF_SETHIDE(false, comp(887, 8));
    };
    if (((((INV_TOTAL(93 as inv, 15250 as obj) > 0) || (INV_TOTAL(95 as inv, 15250 as obj) > 0)) || (varbitplayer_10544 >= 52)) || (varbitplayer_10554 == 2))) {
        IF_SETHIDE(true, comp(887, 7));
    } else {
        IF_SETHIDE(false, comp(887, 7));
    };
    if (((INV_TOTAL(93 as inv, 15252 as obj) > 0) || (INV_TOTAL(95 as inv, 15252 as obj) > 0))) {
        IF_SETHIDE(true, comp(887, 3));
    } else {
        IF_SETHIDE(false, comp(887, 3));
    };
    return;
}