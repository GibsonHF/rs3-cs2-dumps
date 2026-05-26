//
function script17173(): void {
    var int0 = 0;
    var int1 = 0;
    var int2 = 0;
    IF_SETGRAPHIC(27373 as graphic, comp(1253, 5));
    IF_SETSIZE(800, 600, 0, 0, comp(1253, 5));
    CC_DELETEALL(comp(1253, 3));
    int1 = int0++;
    int2 = 0;
    script15938(82116611, int1, int2++, 0, -45, 1, 1, 800, 600, 0, 0);
    script7919(int1, int2++, 0, 0, 1, 1, IF_GETWIDTH(comp(1253, 3)), 0, 0, 1, 27375, 1, 0, 1, 32);
    if ((CC_FINDBYCATEGORY(comp(1253, 3), int1, (int2 - 1)) == 1)) {
        CC_SETONTIMER(callback(script17174, -2147483645, -2147483643, 6));
    };
    int1 = int0++;
    int2 = 0;
    script15938(82116611, int1, int2++, 0, -45, 1, 1, 800, 600, 0, 0);
    script7919(int1, int2++, 0, 0, 1, 1, 0, 0, 1, 1, 27374, 0, 0, 0, 0);
    return;
}