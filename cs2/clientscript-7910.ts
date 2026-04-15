//
function script7910(int0: int, int1: int, int2: unknown_int): void {
    if ((CLIENTCLOCK() < int0)) {
        return;
    };
    switch (int1) {
        case 0: {
            stack(19215);
            stack(int2);
            IF_SETGRAPHIC();
            break;
        }
        case 1: {
            stack(19216);
            stack(int2);
            IF_SETGRAPHIC();
            break;
        }
        case 2: {
            stack(19217);
            stack(int2);
            IF_SETGRAPHIC();
            break;
        }
        case 3: {
            stack(19218);
            stack(int2);
            IF_SETGRAPHIC();
            break;
        }
        case 4: {
            stack(19219);
            stack(int2);
            IF_SETGRAPHIC();
            break;
        }
        case 5: {
            stack(19220);
            stack(int2);
            IF_SETGRAPHIC();
            break;
        }
        case 6: {
            stack(19221);
            stack(int2);
            IF_SETGRAPHIC();
            break;
        }
        case 7: {
            stack(19222);
            stack(int2);
            IF_SETGRAPHIC();
            break;
        }
    };
    if ((++int1 == 8)) {
        var int1 = 0;
    };
    IF_SETONTIMER(callback(script7910, (CLIENTCLOCK() + 10), int1, int2), int2);
    return;
}