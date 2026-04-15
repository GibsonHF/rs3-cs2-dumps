//
function script1147(int0: component): void {
    if (((PLATFORMTYPE() != 0) && (PLATFORMTYPE() != 5))) {
        return;
    };
    CC_CREATE(int0, 5, IF_GETNEXTSUBID(int0));
    CC_SETGRAPHIC(26766 as graphic);
    CC_SETTRANS(127);
    CC_SETSIZE(16, 16, 0, 0);
    CC_SETPOSITION((CC_GETWIDTH() / 2), (CC_GETWIDTH() / 2), 0, 2);
    return;
}