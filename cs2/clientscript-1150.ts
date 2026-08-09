//
function script1150(): void {
    var int0 = -1;
    var int1 = -1;
    CC_DELETEALL(comp(1253, 556));
    int0 = (int0 + 1);
    while ((int0 < 8)) {
        script1155(int0);
        CC_CREATE(comp(1253, 556), 5, int0);
    };
    CC_CREATE(comp(1253, 556), 5, int0);
    IF_SETONOP(callback(script1116, int0), comp(215, 26));
    IF_SETONVARTRANSMIT(callback(script1151, 8101, 8102, 2), comp(215, 29));
    switch (MAP_LANG()) {
        case 0: {
            IF_SETGRAPHIC(33749 as graphic, comp(215, 25));
            break;
        }
        case 1: {
            IF_SETGRAPHIC(33750 as graphic, comp(215, 25));
            break;
        }
        case 2: {
            IF_SETGRAPHIC(33751 as graphic, comp(215, 25));
            break;
        }
        case 3: {
            IF_SETGRAPHIC(33752 as graphic, comp(215, 25));
            break;
        }
    };
    return;
}