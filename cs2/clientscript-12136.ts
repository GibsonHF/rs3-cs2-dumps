//
function script12136(int0: int, int1: component, int2: component): int {
    var int3 = -1 as graphic;
    switch (int0) {
        case 1: {
            int3 = IF_GETGRAPHIC(comp(1708, 43));
            break;
        }
        case 2: {
            int3 = IF_GETGRAPHIC(comp(1708, 44));
            break;
        }
        case 3: {
            int3 = IF_GETGRAPHIC(comp(1708, 45));
            break;
        }
        case 4: {
            int3 = IF_GETGRAPHIC(comp(1708, 46));
            break;
        }
        case 5: {
            int3 = IF_GETGRAPHIC(comp(1708, 47));
            break;
        }
        case 6: {
            int3 = IF_GETGRAPHIC(comp(1708, 48));
            break;
        }
        case 7: {
            int3 = IF_GETGRAPHIC(comp(1708, 49));
            break;
        }
        case 8: {
            int3 = IF_GETGRAPHIC(comp(1708, 50));
            break;
        }
        case 9: {
            int3 = IF_GETGRAPHIC(comp(1708, 51));
            break;
        }
        case 10: {
            int3 = IF_GETGRAPHIC(comp(1708, 52));
            break;
        }
    };
    if ((int3 != -1 as graphic)) {
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
    IF_SETHIDE(true, int1);
    stack(24230);
    stack(int2);
    IF_SETGRAPHIC();
    if ((varbitplayer_30250 == 2)) {
        IF_SETHIDE(true, int2);
    } else {
        IF_SETHIDE(false, int2);
    };
    return 0;
}