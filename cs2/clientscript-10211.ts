//
function script10211(): void {
    var int0 = 0;
    var int1 = 0;
    var int2 = 0;
    var int3 = 0;
    var int4 = 0;
    var int5 = IF_GETPARENTLAYER(comp(1375, 0));
    var int6 = 0;
    var int7 = 0;
    var int8 = 0;
    var int9 = 0;
    var int10 = 0;
    if ((IF_FIND(comp(1375, 0)) == 1)) {
        CC_SETSIZE(66, 6, 0, 0);
    };
    [int0, int1, int2] = GET_ENTITY_SCREEN_POSITION(GET_ENTITY_OVERLAY_HEIGHT());
    [int6, int7, int8, int9, int10] = GET_ENTITY_BOUNDING_BOX();
    if ((int5 != comp(-1, 65535))) {
        int3 = IF_GETWIDTH(int5);
        int4 = IF_GETHEIGHT(int5);
    };
    if ((IF_FIND(comp(1375, 0)) == 1)) {
        int0 = (int0 - (CC_GETWIDTH() / 2));
        int1 = ((int1 - (CC_GETHEIGHT() / 2)) - 15);
        if ((int0 < 0)) {
            int0 = 0;
        };
        if (((int3 - int0) < CC_GETWIDTH())) {
            int0 = (int3 - CC_GETWIDTH());
        };
        if ((int1 < 0)) {
            int1 = 0;
        };
        if (((int4 - int1) < CC_GETHEIGHT())) {
            int1 = (int4 - CC_GETHEIGHT());
        };
        CC_SETPOSITION(int0, int1, 0, 0);
    };
    return;
}