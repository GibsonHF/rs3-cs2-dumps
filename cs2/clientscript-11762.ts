//
function script11762(): void {
    CC_DELETEALL(82117164);
    var int0 = -1;
    while ((++int0 < 6)) {
        CC_CREATE(82117164, 5, int0);
    };
    script17021();
    var int1 = struct_getparam(45877, 5409);
    if (((struct_getparam(45877, 9200) == true) && (PLAYERMEMBER() == 0))) {
        int1 = struct_getparam(45877, 9194);
    };
    if ((item_getparam(int1, 5405) == -1 as struct)) {
        script16663(6916, int1, 1);
    };
    script13310(58064944, 58064945, 50, (8 * 1000));
    return;
}