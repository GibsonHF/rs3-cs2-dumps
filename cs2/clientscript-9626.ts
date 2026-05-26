//
function script9626(int0: number): void {
    CC_CREATE(int0, 5, IF_GETNEXTSUBID(int0));
    CC_SETPARAM_INT(4032, 1);
    CC_SETHIDE(1);
    CC_CREATE(int0, 4, IF_GETNEXTSUBID(int0));
    CC_SETHIDE(1);
    CC_CREATE[1](int0, 5, IF_GETNEXTSUBID(int0));
    CC_SETHIDE[1](1);
    CC_CREATE[1](int0, 3, IF_GETNEXTSUBID(int0));
    CC_SETHIDE[1](1);
    CC_CREATE[1](int0, 3, IF_GETNEXTSUBID(int0));
    CC_SETHIDE[1](1);
    return;
}