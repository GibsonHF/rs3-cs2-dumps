//
function script6350(): void {
    IF_SETGRAPHIC(539 as graphic, comp(237, 14));
    IF_SETGRAPHIC(539 as graphic, comp(237, 15));
    IF_SETGRAPHIC(539 as graphic, comp(237, 16));
    IF_SETGRAPHIC(539 as graphic, comp(237, 17));
    IF_SETGRAPHIC(539 as graphic, comp(237, 18));
    IF_SETGRAPHIC(539 as graphic, comp(237, 19));
    IF_SETGRAPHIC(539 as graphic, comp(237, 20));
    IF_SETGRAPHIC(539 as graphic, comp(237, 21));
    switch (varbitplayer_20646) {
        case 1: {
            IF_SETGRAPHIC(541 as graphic, comp(237, 14));
            IF_SETTEXT("Shadow", comp(237, 1));
            break;
        }
        case 2: {
            IF_SETGRAPHIC(541 as graphic, comp(237, 15));
            IF_SETTEXT("Sand", comp(237, 1));
            break;
        }
        case 3: {
            IF_SETGRAPHIC(541 as graphic, comp(237, 16));
            IF_SETTEXT("Fire", comp(237, 1));
            break;
        }
        case 4: {
            IF_SETGRAPHIC(541 as graphic, comp(237, 17));
            IF_SETTEXT("Time", comp(237, 1));
            break;
        }
        case 5: {
            IF_SETGRAPHIC(541 as graphic, comp(237, 18));
            IF_SETTEXT("Water", comp(237, 1));
            break;
        }
        case 6: {
            IF_SETGRAPHIC(541 as graphic, comp(237, 19));
            IF_SETTEXT("Life", comp(237, 1));
            break;
        }
        case 7: {
            IF_SETGRAPHIC(541 as graphic, comp(237, 20));
            IF_SETTEXT("Death", comp(237, 1));
            break;
        }
        case 8: {
            IF_SETGRAPHIC(541 as graphic, comp(237, 21));
            IF_SETTEXT("Light", comp(237, 1));
            break;
        }
    };
    return;
}