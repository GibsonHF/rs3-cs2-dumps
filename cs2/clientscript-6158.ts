//
function script6158(): void {
    IF_SETTEXT(TOSTRING_LOCALISED(varclient_1909, 1), comp(1274, 5));  // rcsiphonxp_main_overlay:points_amount
    IF_SETTEXT(TOSTRING_LOCALISED(varclient_1916, 1), comp(1274, 2));  // rcsiphonxp_main_overlay:inventory_points_amount
    switch (varclient_1917) {
        case 1: {
            IF_SETGRAPHIC(10708 as graphic, comp(1274, 9));  // rcsiphonxp_main_overlay:floor_icon
            break;
        }
        case 2: {
            IF_SETGRAPHIC(10709 as graphic, comp(1274, 9));  // rcsiphonxp_main_overlay:floor_icon
            break;
        }
        case 3: {
            IF_SETGRAPHIC(10710 as graphic, comp(1274, 9));  // rcsiphonxp_main_overlay:floor_icon
            break;
        }
        default: {
            IF_SETGRAPHIC(1726 as graphic, comp(1274, 9));  // rcsiphonxp_main_overlay:floor_icon
            break;
        }
    };
    var string0 = "Runesphere Active!";
    switch (varclient_1918) {
        case 1: {
            string0 = `Runesphere Active on the Bottom Floor! (${enum_getvalue(0, 36, 11936 as cs2enum, varclient_5910)})`;
            break;
        }
        case 2: {
            string0 = `Runesphere Active on the Middle Floor! (${enum_getvalue(0, 36, 11936, varclient_5910)})`;
            break;
        }
        case 3: {
            string0 = `Runesphere Active on the Top Floor! (${enum_getvalue(0, 36, 11936, varclient_5910)})`;
            break;
        }
    };
    if ((varclient_1918 != 0)) {
        IF_SETHIDE(false, comp(1274, 10));  // rcsiphonxp_main_overlay:runesphere
        IF_SETGRAPHIC(enum_getvalue(0, 23, 11934 as cs2enum, varclient_5910), comp(1274, 14));  // rcsiphonxp_main_overlay:runesphere_type
        if ((varclient_5910 == 0)) {
            IF_SETGRAPHIC(29007 as graphic, comp(1274, 13));  // rcsiphonxp_main_overlay:runesphere_icon
        };
        IF_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -2147483643), comp(1274, 13));  // rcsiphonxp_main_overlay:runesphere_icon
        IF_SETONCLICK(callback(script7774, string0, -2147483645, -2147483643, 0), comp(1274, 13));  // rcsiphonxp_main_overlay:runesphere_icon
        IF_SETPOSITION(100, 158, 2, 0, comp(1274, 11));  // rcsiphonxp_main_overlay:wizard_icon_layer
    } else {
        IF_SETHIDE(true, comp(1274, 10));  // rcsiphonxp_main_overlay:runesphere
        IF_SETGRAPHIC(-1 as graphic, comp(1274, 14));  // rcsiphonxp_main_overlay:runesphere_type
        IF_SETGRAPHIC(10707 as graphic, comp(1274, 14));  // rcsiphonxp_main_overlay:runesphere_type
        IF_SETPOSITION(100, 120, 2, 0, comp(1274, 11));  // rcsiphonxp_main_overlay:wizard_icon_layer
    };
    if ((varclient_5911 == 1)) {
        IF_SETHIDE(false, comp(1274, 11));  // rcsiphonxp_main_overlay:wizard_icon_layer
    } else {
        IF_SETHIDE(true, comp(1274, 11));  // rcsiphonxp_main_overlay:wizard_icon_layer
    };
    return;
}