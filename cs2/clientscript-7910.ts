//
function script7910(int0: number, int1: number, int2: number): void {
    if ((CLIENTCLOCK() < int0)) {
        return;
    };
    switch (int1) {
        case 0: {
            IF_SETGRAPHIC(19215 as graphic, int2);
            break;
        }
        case 1: {
            IF_SETGRAPHIC(19216 as graphic, int2);
            break;
        }
        case 2: {
            IF_SETGRAPHIC(19217 as graphic, int2);
            break;
        }
        case 3: {
            IF_SETGRAPHIC(19218 as graphic, int2);
            break;
        }
        case 4: {
            IF_SETGRAPHIC(19219 as graphic, int2);
            break;
        }
        case 5: {
            IF_SETGRAPHIC(19220 as graphic, int2);
            break;
        }
        case 6: {
            IF_SETGRAPHIC(19221 as graphic, int2);
            break;
        }
        case 7: {
            IF_SETGRAPHIC(19222 as graphic, int2);
            break;
        }
    };
    if ((++int1 == 8)) {
        var int1 = 0;
    };
    IF_SETONTIMER(callback(script7910, (CLIENTCLOCK() + 10), int1, int2), int2);
    return;
}