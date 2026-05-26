//
function script20622(): void {
    CC_DELETEALL(comp(1491, 3));
    var int0 = -1;
    var int1 = script20470();
    while ((++int0 < int1)) {
        CC_CREATE(comp(1491, 3), 5, int0);
    };
    int0 = -1;
    int1 = script20471();
    while ((++int0 < int1)) {
        CC_CREATE(comp(1491, 2), 5, int0);
    };
    return;
}