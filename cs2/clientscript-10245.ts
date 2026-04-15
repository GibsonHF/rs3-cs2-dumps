//
function script10245(): void {
    var int0 = 0;
    var int1 = 0;
    var int2 = 0;
    var int3 = 0;
    var int4 = 0;
    var int5 = 0;
    var int6 = 0;
    var int7 = 0;
    if ((IF_FIND(comp(673, 0)) == 1)) {
        [int0, int1, int2] = GET_ENTITY_SCREEN_POSITION(GET_ENTITY_OVERLAY_HEIGHT());
        [int3, int4, int5, int6, int7] = GET_ENTITY_BOUNDING_BOX();
        if (((varclient_3844 == 0) && (int3 == 1))) {
            [int3, varclient_3847, varclient_3849, varclient_3848, varclient_3850] = GET_ENTITY_BOUNDING_BOX();
            varclient_3844 = 1;
        };
        if (((varclient_3845 <= 0) || (varclient_3845 >= 300))) {
            varclient_3845 = 100;
        };
        if (((varclient_3846 <= 0) || (varclient_3845 >= 200))) {
            varclient_3846 = 25;
        };
        script770(int3, int0, int1);
    };
    return;
}