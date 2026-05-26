//
function script6859(): void {
    var int0 = -1 as graphic;
    var int1 = -1 as graphic;
    var int2 = -1 as graphic;
    var int3 = -1 as graphic;
    switch (MAP_LANG()) {
        case 0: {
            int0 = 13736 as graphic;
            int1 = 13737 as graphic;
            int2 = 13738 as graphic;
            int3 = 13739 as graphic;
            break;
        }
        case 2: {
            int0 = 13748 as graphic;
            int1 = 13749 as graphic;
            int2 = 13750 as graphic;
            int3 = 13751 as graphic;
            break;
        }
        case 1: {
            int0 = 13744 as graphic;
            int1 = 13745 as graphic;
            int2 = 13746 as graphic;
            int3 = 13747 as graphic;
            break;
        }
        case 3: {
            int0 = 13740 as graphic;
            int1 = 13741 as graphic;
            int2 = 13742 as graphic;
            int3 = 13743 as graphic;
            break;
        }
    };
    IF_SETGRAPHIC(int0, comp(1358, 26));
    IF_SETGRAPHIC(int1, comp(1358, 17));
    IF_SETGRAPHIC(int2, comp(1358, 19));
    IF_SETGRAPHIC(int3, comp(1358, 15));
    return;
}