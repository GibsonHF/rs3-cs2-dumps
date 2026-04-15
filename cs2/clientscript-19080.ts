//
function script19080(): void {
    CC_DELETEALL(comp(1253, 556));
    var int0 = -1;
    while ((++int0 < 10)) {
        CC_CREATE(comp(1253, 556), 5, int0);
    };
    script9525(comp(1147, 81), 3, -1);
    var int1 = -1 as obj;
    var int2 = 1;
    var int3 = script19070(struct_getparam(50195, 9127));
    if ((varbitplayer_55929 == 0)) {
        [int1, int2] = dbrow_getfield(int3, 1187888, 0);
        if ((item_getparam(int1, 5405) == -1 as struct)) {
            script16663(13887 as dbrow, int1, 1);
        };
    };
    return;
}