//
function script9898(int0: int): void {
    varclient_6793 = MAX(varclient_6793, 0);
    if ((CC_FIND(comp(634, 21), (varclient_6793 * 11)) == 1)) {
        CC_SETGRAPHIC(11428 as graphic);
    };
    if ((CC_FIND(comp(634, 23), (varclient_6793 * 2)) == 1)) {
        CC_SETGRAPHIC(11435 as graphic);
    };
    if ((CC_FIND(comp(634, 21), (int0 * 11)) == 1)) {
        CC_SETGRAPHIC(11429 as graphic);
    };
    if ((CC_FIND(comp(634, 23), (int0 * 2)) == 1)) {
        CC_SETGRAPHIC(11434 as graphic);
    };
    varclient_6793 = int0;
    return;
}