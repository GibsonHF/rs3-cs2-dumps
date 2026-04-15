//
function script7995(int0: component, int1: inv): void {
    var int2 = 0;
    if ((varclient_5183 == -1 as cs2enum)) {
        return;
    };
    while ((CC_FIND(int0, int2) == 1)) {
        CC_SETGRAPHIC(enum_getvalue(33, 23, varclient_5183, INV_GETOBJ(int1, int2)));
        int2 = (int2 + 1);
    };
    return;
}