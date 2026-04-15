//
function script11658(int0: component): void {
    if ((int0 == comp(-1, 65535))) {
        return;
    };
    CC_DELETEALL(int0);
    CC_CREATE(int0, 5, 0);
    CC_SETGRAPHIC(25768 as graphic);
    CC_SETSIZE(25, 25, 0, 0);
    CC_SETPOSITION(((0 - 16384) / 4), 0, 4, 1);
    CC_CREATE(int0, 5, 1);
    CC_SETGRAPHIC(25770 as graphic);
    CC_SETSIZE(25, 25, 0, 0);
    CC_SETPOSITION(0, 0, 1, 1);
    CC_CREATE(int0, 5, 2);
    CC_SETGRAPHIC(25771 as graphic);
    CC_SETSIZE(25, 25, 0, 0);
    CC_SETPOSITION((16384 / 4), 0, 4, 1);
    return;
}