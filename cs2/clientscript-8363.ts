//
function script8363(int0: int): void {
    var int1 = script10405(int0);
    var int2 = script8418(int1, 0);
    var int3 = struct_getparam(int1, 3508);
    if ((int3 == comp(-1, 65535))) {
        return;
    };
    CC_DELETEALL(int3);
    if ((struct_getparam(int2, 8094) == 1)) {
        return;
    };
    CC_CREATE(int3, 5, 0);
    script12591(5, int1);
    CC_SETPOSITION(0, 0, 0, 0);
    CC_SETSIZE(struct_getparam(int2, 3583), struct_getparam(int2, 3586), 0, 1);
    CC_SETGRAPHIC(struct_getparam(int2, 3607));
    CC_CREATE(int3, 5, 1);
    script12591(1, int1);
    CC_SETPOSITION(0, 0, 1, 0);
    CC_SETSIZE((2 * struct_getparam(int2, 3583)), struct_getparam(int2, 3586), 1, 1);
    CC_SETGRAPHIC(struct_getparam(int2, 3608));
    CC_SETTILING(true);
    CC_CREATE(int3, 5, 2);
    script12591(5, int1);
    CC_SETPOSITION(0, 0, 2, 0);
    CC_SETSIZE(struct_getparam(int2, 3583), struct_getparam(int2, 3586), 0, 1);
    CC_SETGRAPHIC(struct_getparam(int2, 3607));
    CC_SETHFLIP(true);
    CC_CREATE(int3, 5, 3);
    script12591(-1, int1);
    CC_SETPOSITION(0, 0, 0, 2);
    CC_SETSIZE(struct_getparam(int2, 3587), struct_getparam(int2, 3586), 0, 0);
    CC_SETGRAPHIC(struct_getparam(int2, 3738));
    CC_CREATE(int3, 5, 4);
    script12591(-1, int1);
    CC_SETPOSITION(0, 0, 2, 2);
    CC_SETSIZE(struct_getparam(int2, 3587), struct_getparam(int2, 3586), 0, 0);
    CC_SETGRAPHIC(struct_getparam(int2, 3738));
    CC_SETHFLIP(true);
    CC_CREATE(int3, 5, 5);
    script12591(3, int1);
    if ((struct_getparam(int2, 8296) == 2)) {
        CC_SETPOSITION(struct_getparam(int2, 3583), 0, 0, 0);
    } else {
        CC_SETPOSITION(struct_getparam(int2, 3583), 0, 0, 2);
    };
    CC_SETSIZE(0, struct_getparam(int2, 3586), 0, 0);
    CC_SETGRAPHIC(struct_getparam(int2, 3737));
    CC_SETTILING(true);
    CC_CREATE(int3, 5, 6);
    script12591(3, int1);
    if ((struct_getparam(int2, 8296) == 2)) {
        CC_SETPOSITION(struct_getparam(int2, 3583), 0, 2, 0);
    } else {
        CC_SETPOSITION(struct_getparam(int2, 3583), 0, 2, 2);
    };
    CC_SETSIZE(0, struct_getparam(int2, 3586), 0, 0);
    CC_SETGRAPHIC(struct_getparam(int2, 3737));
    CC_SETTILING(true);
    return;
}