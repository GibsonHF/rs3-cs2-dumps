//
function script7910(int0: number, int1: number, int2: number): void {
    if ((CLIENTCLOCK() < int0)) {
        return;
    };
    switch (int1) {
        case 0: {
            IF_SETGRAPHIC(36235 as graphic, int2);
            break;
        }
        case 1: {
            IF_SETGRAPHIC(36236 as graphic, int2);
            break;
        }
        case 2: {
            IF_SETGRAPHIC(36237 as graphic, int2);
            break;
        }
        case 3: {
            IF_SETGRAPHIC(36238 as graphic, int2);
            break;
        }
        case 4: {
            IF_SETGRAPHIC(36239 as graphic, int2);
            break;
        }
        case 5: {
            IF_SETGRAPHIC(36240 as graphic, int2);
            break;
        }
        case 6: {
            IF_SETGRAPHIC(36241 as graphic, int2);
            break;
        }
        case 7: {
            IF_SETGRAPHIC(36242 as graphic, int2);
            break;
        }
    };
    if ((++int1 == 8)) {
        var int1 = 0;
    };
    IF_SETONTIMER(callback(script7910, (CLIENTCLOCK() + 10), int1, int2), int2);
    return;
}