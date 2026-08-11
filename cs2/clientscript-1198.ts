//
function script1198(): void {
    if ((((INV_TOTAL(93 as inv, 15249 as obj) > 0) || (INV_TOTAL(95 as inv, 15249 as obj) > 0)) || (varbitplayer_10544 >= 44))) {
        IF_SETHIDE(true, comp(887, 5));  // ra3_package:handled_rod
    } else {
        IF_SETHIDE(false, comp(887, 5));  // ra3_package:handled_rod
    };
    if (((INV_TOTAL(93 as inv, 15253 as obj) > 0) || (INV_TOTAL(95 as inv, 15253 as obj) > 0))) {
        IF_SETHIDE(true, comp(887, 6));  // ra3_package:turn_screw
    } else {
        IF_SETHIDE(false, comp(887, 6));  // ra3_package:turn_screw
    };
    if ((((INV_TOTAL(93 as inv, 15248 as obj) > 0) || (INV_TOTAL(95 as inv, 15248 as obj) > 0)) || (varbitplayer_10544 == 42))) {
        IF_SETHIDE(true, comp(887, 2));  // ra3_package:bowl
    } else {
        IF_SETHIDE(false, comp(887, 2));  // ra3_package:bowl
    };
    if (((INV_TOTAL(93 as inv, 15247 as obj) > 0) || (INV_TOTAL(95 as inv, 15247 as obj) > 0))) {
        IF_SETHIDE(true, comp(887, 4));  // ra3_package:boot
    } else {
        IF_SETHIDE(false, comp(887, 4));  // ra3_package:boot
    };
    if (((((INV_TOTAL(93 as inv, 15251 as obj) > 0) || (INV_TOTAL(95 as inv, 15251 as obj) > 0)) || (varbitplayer_10544 >= 52)) || (varbitplayer_10554 == 1))) {
        IF_SETHIDE(true, comp(887, 8));  // ra3_package:green_stone
    } else {
        IF_SETHIDE(false, comp(887, 8));  // ra3_package:green_stone
    };
    if (((((INV_TOTAL(93 as inv, 15250 as obj) > 0) || (INV_TOTAL(95 as inv, 15250 as obj) > 0)) || (varbitplayer_10544 >= 52)) || (varbitplayer_10554 == 2))) {
        IF_SETHIDE(true, comp(887, 7));  // ra3_package:yellow_stone
    } else {
        IF_SETHIDE(false, comp(887, 7));  // ra3_package:yellow_stone
    };
    if (((INV_TOTAL(93 as inv, 15252 as obj) > 0) || (INV_TOTAL(95 as inv, 15252 as obj) > 0))) {
        IF_SETHIDE(true, comp(887, 3));  // ra3_package:sheet
    } else {
        IF_SETHIDE(false, comp(887, 3));  // ra3_package:sheet
    };
    return;
}