//
function script3284(int0: number): void {
    var int1 = (61 + (10 * (int0 - 1)));
    IF_SETPOSITION(0, int1, 0, 0, comp(947, 707));  // rand_floor_select:floor_tooltip
    IF_SETTEXT(inttostring(int0, 10), comp(947, 711));  // rand_floor_select:floor_tooltip_floor
    switch (enum_getvalue(0, 0, 1264 as cs2enum, int0)) {
        case 1: {
            IF_SETTEXT("Frozen", comp(947, 712));  // rand_floor_select:floor_tooltip_theme
            break;
        }
        case 2:
        case 6: {
            IF_SETTEXT("Abandoned", comp(947, 712));  // rand_floor_select:floor_tooltip_theme
            break;
        }
        case 3: {
            IF_SETTEXT("Furnished", comp(947, 712));  // rand_floor_select:floor_tooltip_theme
            break;
        }
        case 4: {
            IF_SETTEXT("Occult", comp(947, 712));  // rand_floor_select:floor_tooltip_theme
            break;
        }
        case 5: {
            IF_SETTEXT("Warped", comp(947, 712));  // rand_floor_select:floor_tooltip_theme
            break;
        }
        default: {
            IF_SETTEXT("Dungeon", comp(947, 712));  // rand_floor_select:floor_tooltip_theme
            break;
        }
    };
    return;
}