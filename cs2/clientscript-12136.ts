//
function script12136(int0: number, int1: number, int2: number): number {
    var int3 = -1 as graphic;
    switch (int0) {
        case 1: {
            int3 = IF_GETGRAPHIC(comp(1708, 43));  // invent_discovery:part_icon_0
            break;
        }
        case 2: {
            int3 = IF_GETGRAPHIC(comp(1708, 44));  // invent_discovery:part_icon_1
            break;
        }
        case 3: {
            int3 = IF_GETGRAPHIC(comp(1708, 45));  // invent_discovery:part_icon_2
            break;
        }
        case 4: {
            int3 = IF_GETGRAPHIC(comp(1708, 46));  // invent_discovery:part_icon_3
            break;
        }
        case 5: {
            int3 = IF_GETGRAPHIC(comp(1708, 47));  // invent_discovery:part_icon_4
            break;
        }
        case 6: {
            int3 = IF_GETGRAPHIC(comp(1708, 48));  // invent_discovery:part_icon_5
            break;
        }
        case 7: {
            int3 = IF_GETGRAPHIC(comp(1708, 49));  // invent_discovery:part_icon_6
            break;
        }
        case 8: {
            int3 = IF_GETGRAPHIC(comp(1708, 50));  // invent_discovery:part_icon_7
            break;
        }
        case 9: {
            int3 = IF_GETGRAPHIC(comp(1708, 51));  // invent_discovery:part_icon_8
            break;
        }
        case 10: {
            int3 = IF_GETGRAPHIC(comp(1708, 52));  // invent_discovery:part_icon_9
            break;
        }
    };
    if ((int3 != -1 as graphic)) {
        IF_SETGRAPHIC(int3, int1);
        IF_SETHIDE(false, int1);
        IF_SETHIDE(false, int2);
        IF_SETGRAPHIC(24231 as graphic, int2);
        return 1;
    };
    IF_SETHIDE(true, int1);
    IF_SETGRAPHIC(24230 as graphic, int2);
    if ((varbitplayer_30250 == 2)) {
        IF_SETHIDE(true, int2);
    } else {
        IF_SETHIDE(false, int2);
    };
    return 0;
}