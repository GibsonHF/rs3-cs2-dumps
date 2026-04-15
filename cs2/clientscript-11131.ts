//
function script11131(): void {
    var int0 = (CC_GET2DANGLE() + cc_getparam(4893));
    if ((int0 < 0)) {
        int0 = (int0 + 65536);
    };
    if ((int0 >= 65536)) {
        int0 = (int0 - 65536);
    };
    CC_SET2DANGLE(int0);
    var int1 = (CC_GETX() + cc_getparam(4891));
    var int2 = (CC_GETY() + cc_getparam(4892));
    var int3 = 0;
    var int4 = CC_GETLAYER();
    if ((((cc_getparam(4891) < 0) && (int1 < 0)) || ((cc_getparam(4891) > 0) && (int1 > (IF_GETWIDTH(int4) - CC_GETWIDTH()))))) {
        cc_setparam(4891, (0 - cc_getparam(4891)));
        int1 = (CC_GETX() + cc_getparam(4891));
        int3 = 1;
    };
    if ((((cc_getparam(4892) < 0) && (int2 < 0)) || ((cc_getparam(4892) > 0) && (int2 > (IF_GETHEIGHT(int4) - CC_GETHEIGHT()))))) {
        cc_setparam(4892, (0 - cc_getparam(4892)));
        int2 = (CC_GETY() + cc_getparam(4892));
        int3 = 1;
    };
    if ((int3 == 1)) {
        script11130(CC_GETGRAPHIC());
    };
    CC_SETPOSITION(int1, int2, 0, 0);
    return;
}