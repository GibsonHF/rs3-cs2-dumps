//
function script17146(): void {
    var int0 = -1;
    CC_DELETEALL(comp(1253, 556));
    while ((++int0 < 8)) {
        CC_CREATE(comp(1253, 556), 5, int0);
        script17153(int0);
    };
    IF_SETMODELLIGHTING(768, 512, 0, 255, 255, 255, 0, -1, -4, 3224 as material, comp(1120, 95));
    IF_SETMODELLIGHTING(768, 512, 0, 255, 255, 255, 0, -1, -4, 3224 as material, comp(1120, 99));
    return;
}