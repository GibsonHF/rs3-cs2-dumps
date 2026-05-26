//
function script1150(): void {
    var int0 = -1;
    var int1 = -1;
    CC_DELETEALL(82117164);
    while ((++int0 < 8)) {
        script1155(int0);
        CC_CREATE(82117164, 5, int0);
    };
    CC_CREATE(82117164, 5, int0);
    IF_SETONOP(callback(script1116, int0), 14090266);
    IF_SETONVARTRANSMIT(callback(script1151, 8101, 8102, 2), 14090269);
    switch (MAP_LANG()) {
        case 0: {
            IF_SETGRAPHIC(33749, 14090265);
            break;
        }
        case 1: {
            IF_SETGRAPHIC(33750, 14090265);
            break;
        }
        case 2: {
            IF_SETGRAPHIC(33751, 14090265);
            break;
        }
        case 3: {
            IF_SETGRAPHIC(33752, 14090265);
            break;
        }
    };
    return;
}