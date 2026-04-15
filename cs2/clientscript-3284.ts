//
function script3284(int0: int): void {
    var int1 = (61 + (10 * (int0 - 1)));
    IF_SETPOSITION(0, int1, 0, 0, comp(947, 707));
    IF_SETTEXT(inttostring(int0, 10), comp(947, 711));
    switch (enum_getvalue(0, 0, 1264 as cs2enum, int0)) {
        case 1: {
            IF_SETTEXT("Frozen", comp(947, 712));
            break;
        }
        case 2: {
            IF_SETTEXT("Abandoned", comp(947, 712));
            break;
        }
        case 3: {
            IF_SETTEXT("Furnished", comp(947, 712));
            break;
        }
        case 4: {
            IF_SETTEXT("Occult", comp(947, 712));
            break;
        }
        case 5: {
            IF_SETTEXT("Warped", comp(947, 712));
            break;
        }
        default: {
            IF_SETTEXT("Dungeon", comp(947, 712));
            break;
        }
    };
    return;
}