//
function script1291(): void {
    switch (MAP_LANG()) {
        case 1: {
            IF_SETGRAPHIC(20382 as graphic, comp(131, 14));  // div_converting:xp_icon
            IF_SETGRAPHIC(20383 as graphic, comp(131, 17));  // div_converting:enhanced_xp_icon
            break;
        }
        case 3: {
            IF_SETGRAPHIC(20379 as graphic, comp(131, 14));  // div_converting:xp_icon
            IF_SETGRAPHIC(20380 as graphic, comp(131, 17));  // div_converting:enhanced_xp_icon
            break;
        }
        case 6: {
            IF_SETGRAPHIC(20373 as graphic, comp(131, 14));  // div_converting:xp_icon
            IF_SETGRAPHIC(20374 as graphic, comp(131, 17));  // div_converting:enhanced_xp_icon
            break;
        }
        default: {
            IF_SETGRAPHIC(20370 as graphic, comp(131, 14));  // div_converting:xp_icon
            IF_SETGRAPHIC(20371 as graphic, comp(131, 17));  // div_converting:enhanced_xp_icon
            break;
        }
    };
    return;
}