//
function script4530(int0: component): void {
    CC_DELETEALL(int0);
    CC_CREATE(int0, 5, IF_GETNEXTSUBID(int0));
    CC_SETSIZE(8, 8, 1, 1);
    CC_SETPOSITION(0, 0, 1, 1);
    CC_SETGRAPHIC(5470 as graphic);
    CC_SETTILING(true);
    return;
}