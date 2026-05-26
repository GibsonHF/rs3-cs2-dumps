//
function script3284(int0: number): void {
    var int1 = (61 + (10 * (int0 - 1)));
    IF_SETPOSITION(0, int1, 0, 0, 62063299);
    IF_SETTEXT(inttostring(int0, 10), 62063303);
    switch (enum_getvalue(0, 0, 1264 as cs2enum, int0)) {
        case 1: {
            IF_SETTEXT("Frozen", 62063304);
            break;
        }
        case 2:
        case 6: {
            IF_SETTEXT("Abandoned", 62063304);
            break;
        }
        case 3: {
            IF_SETTEXT("Furnished", 62063304);
            break;
        }
        case 4: {
            IF_SETTEXT("Occult", 62063304);
            break;
        }
        case 5: {
            IF_SETTEXT("Warped", 62063304);
            break;
        }
        default: {
            IF_SETTEXT("Dungeon", 62063304);
            break;
        }
    };
    return;
}