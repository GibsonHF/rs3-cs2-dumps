//
function script17173(): void {
    var int0 = 0;
    var int1 = 0;
    var int2 = 0;
    stack(27373);
    stack(82116613);
    IF_SETGRAPHIC();
    IF_SETSIZE(800, 600, 0, 0, 82116613);
    CC_DELETEALL(82116611);
    int1 = int0++;
    int2 = 0;
    script15938(82116611, int1, int2++, 0, -45, 1, 1, 800, 600, 0, 0);
    script7919(int1, int2++, 0, 0, 1, 1, IF_GETWIDTH(82116611), 0, 0, 1, 27375, 1, 0, 1, 32);
    if ((CC_FINDBYCATEGORY(82116611, int1, (int2 - 1)) == 1)) {
        CC_SETONTIMER(callback(script17174, -2147483645, -2147483643, 6));
    };
    int1 = int0++;
    int2 = 0;
    script15938(comp(1253, 3), int1, int2++, 0, -45, 1, 1, 800, 600, 0, 0);
    script7919(int1, int2++, 0, 0, 1, 1, 0, 0, 1, 1, 27374 as graphic, false, false, false, 0);
    return;
}