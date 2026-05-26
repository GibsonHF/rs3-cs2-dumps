//
function script3438(): void {
    switch (MAP_LANG()) {
        case 1: {
            IF_SETGRAPHIC(861 as graphic, comp(329, 10));
            break;
        }
        case 2: {
            IF_SETGRAPHIC(644 as graphic, comp(329, 10));
            break;
        }
        case 3: {
            IF_SETGRAPHIC(866 as graphic, comp(329, 10));
            break;
        }
        case 6: {
            IF_SETGRAPHIC(17045 as graphic, comp(329, 10));
            break;
        }
        default: {
            IF_SETGRAPHIC(532 as graphic, comp(329, 10));
            break;
        }
    };
    return;
}