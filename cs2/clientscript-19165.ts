//
function script19165(): void {
    CC_DELETEALL(comp(1253, 556));
    var int0 = 0;
    while ((int0 < 4)) {
        CC_CREATE(comp(1253, 556), 5, int0);
        int0 = (int0 + 1);
    };
    IF_SETOPCURSOR(1, 46 as cursor, comp(1288, 108));
    var int1 = script16161();
    script19167(int1);
    script19166(int1);
    return;
}