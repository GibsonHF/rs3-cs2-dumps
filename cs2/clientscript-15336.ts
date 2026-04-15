//
function script15336(int0: component, int1: int): void {
    var int2 = 0;
    while ((int2 < int1)) {
        CC_CREATE(int0, 3, (int2 * 11));
        CC_CREATE(int0, 5, ((int2 * 11) + 1));
        CC_CREATE(int0, 3, ((int2 * 11) + 2));
        CC_CREATE(int0, 5, ((int2 * 11) + 3));
        CC_CREATE(int0, 5, ((int2 * 11) + 4));
        CC_CREATE(int0, 4, ((int2 * 11) + 5));
        CC_CREATE(int0, 4, ((int2 * 11) + 6));
        CC_CREATE(int0, 5, ((int2 * 11) + 7));
        CC_CREATE(int0, 5, ((int2 * 11) + 8));
        CC_CREATE(int0, 3, ((int2 * 11) + 9));
        CC_CREATE(int0, 4, ((int2 * 11) + 10));
        int2 = (int2 + 1);
    };
    return;
}