//
function script13655(): void {
    if ((IF_FIND(comp(1899, 23)) == 1)) {
        CC_CREATE(comp(1899, 23), 5, 0);
        CC_SETOBJECT(38872 as obj, -1);
        CC_SETSIZE(0, 0, 1, 1);
        CC_SETPOSITION(1, 0, 1, 1);
        CC_SENDTOFRONT();
    };
    CC_CREATE(comp(1899, 27), 5, 0);
    CC_SETOBJECT(36730 as obj, -1);
    CC_SETSIZE(0, 0, 1, 1);
    CC_SETPOSITION(1, 0, 1, 1);
    CC_SENDTOFRONT();
    script13657();
    return;
}