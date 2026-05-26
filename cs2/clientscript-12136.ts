//
function script12136(int0: number, int1: number, int2: number): number {
    var int3 = -1;
    switch (int0) {
        case 1: {
            int3 = IF_GETGRAPHIC(111935531);
            break;
        }
        case 2: {
            int3 = IF_GETGRAPHIC(111935532);
            break;
        }
        case 3: {
            int3 = IF_GETGRAPHIC(111935533);
            break;
        }
        case 4: {
            int3 = IF_GETGRAPHIC(111935534);
            break;
        }
        case 5: {
            int3 = IF_GETGRAPHIC(111935535);
            break;
        }
        case 6: {
            int3 = IF_GETGRAPHIC(111935536);
            break;
        }
        case 7: {
            int3 = IF_GETGRAPHIC(111935537);
            break;
        }
        case 8: {
            int3 = IF_GETGRAPHIC(111935538);
            break;
        }
        case 9: {
            int3 = IF_GETGRAPHIC(111935539);
            break;
        }
        case 10: {
            int3 = IF_GETGRAPHIC(111935540);
            break;
        }
    };
    if ((int3 != -1)) {
        stack(int3);
        stack(int1);
        IF_SETGRAPHIC();
        IF_SETHIDE(0, int1);
        IF_SETHIDE(0, int2);
        stack(24231);
        stack(int2);
        IF_SETGRAPHIC();
        return 1;
    };
    IF_SETHIDE(1, int1);
    stack(24230);
    stack(int2);
    IF_SETGRAPHIC();
    if ((varbitplayer_30250 == 2)) {
        IF_SETHIDE(1, int2);
    } else {
        IF_SETHIDE(0, int2);
    };
    return 0;
}