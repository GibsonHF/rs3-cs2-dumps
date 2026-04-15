//
function script5674(int0: component, int1: int): void {
    CC_CREATE(int0, 5, IF_GETNEXTSUBID(int0));
    CC_SETSIZE(10, 10, 0, 0);
    CC_SETPOSITION(0, int1, 0, 0);
    CC_SETGRAPHIC(16592 as graphic);
    return;
}