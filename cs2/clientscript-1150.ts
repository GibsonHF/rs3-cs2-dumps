//
function script1150(): void {
    var int0 = -1;
    var int1 = -1;
    CC_DELETEALL(comp(1253, 556));
    while ((++int0 < 8)) {
        script1155(int0);
        CC_CREATE(comp(1253, 556), 5, int0);
    };
    CC_CREATE(comp(1253, 556), 5, int0);
    IF_SETONOP(callback(script1116, int0), comp(215, 26));
    IF_SETONVARTRANSMIT(callback(script1151, 8101, 8102, 2), 14090269);
    switch (MAP_LANG()) {
        case 0: {
            stack(33749);
            stack(14090265);
            IF_SETGRAPHIC();
            break;
        }
        case 1: {
            stack(33750);
            stack(14090265);
            IF_SETGRAPHIC();
            break;
        }
        case 2: {
            stack(33751);
            stack(14090265);
            IF_SETGRAPHIC();
            break;
        }
        case 3: {
            stack(33752);
            stack(14090265);
            IF_SETGRAPHIC();
            break;
        }
    };
    return;
}