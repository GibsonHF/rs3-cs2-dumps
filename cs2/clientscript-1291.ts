//
function script1291(): void {
    switch (MAP_LANG()) {
        case 1: {
            IF_SETGRAPHIC(20382 as graphic, comp(131, 14));
            IF_SETGRAPHIC(20383 as graphic, comp(131, 17));
            break;
        }
        case 3: {
            IF_SETGRAPHIC(20379 as graphic, comp(131, 14));
            IF_SETGRAPHIC(20380 as graphic, comp(131, 17));
            break;
        }
        case 6: {
            IF_SETGRAPHIC(20373 as graphic, comp(131, 14));
            IF_SETGRAPHIC(20374 as graphic, comp(131, 17));
            break;
        }
        default: {
            IF_SETGRAPHIC(20370 as graphic, comp(131, 14));
            IF_SETGRAPHIC(20371 as graphic, comp(131, 17));
            break;
        }
    };
    return;
}