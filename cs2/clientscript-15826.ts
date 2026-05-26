//
function script15826(): void {
    CC_DELETEALL(82117164);
    var int0 = -1;
    while ((++int0 < 7)) {
        CC_CREATE(82117164, 5, int0);
    };
    script15827();
    IF_SETSIZE(200, 190, 0, 0, 82116640);
    IF_SETPOSITION(100, 0, 0, 0, 82116640);
    var int1 = struct_getparam(3451, 5409);
    if ((int1 != -1 as obj)) {
        script16663(4899, int1, 2);
        script16503(31785046, 31785045, 31785047, 7535, 0, -1, 3451);
    };
    return;
}