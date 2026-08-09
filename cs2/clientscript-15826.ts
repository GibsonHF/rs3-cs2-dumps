//
function script15826(): void {
    CC_DELETEALL(comp(1253, 556));
    var int0 = -1;
    int0 = (int0 + 1);
    while ((int0 < 7)) {
        CC_CREATE(comp(1253, 556), 5, int0);
    };
    script15827();
    IF_SETSIZE(200, 190, 0, 0, comp(1253, 32));
    IF_SETPOSITION(100, 0, 0, 0, comp(1253, 32));
    var int1 = struct_getparam(3451, 5409);
    if ((int1 != -1 as obj)) {
        script16663(4899, int1, 2);
        script16503(31785046, 31785045, 31785047, 7535, 0, -1, 3451);
    };
    return;
}