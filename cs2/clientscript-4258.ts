//
function script4258(int0: component): void {
    if ((IF_FIND(int0) == 1)) {
        CC_SETPOSITION(0, 0, 1, 1);
        CC_SETSIZE(16, 15, 0, 0);
        CC_SETGRAPHIC(5451 as graphic);
        CC_SETONMOUSEOVER(callback(script4209, int0, 0));
        CC_SETONMOUSELEAVE(callback(script4209, int0, 1));
        CC_SETTRANS(255);
    };
    return;
}