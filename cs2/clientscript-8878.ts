//
function script8878(): [number, number, number] {
    if ((script15532(0) == 1)) {
        return [-1, 0, 0];
    };
    var int0 = 0;
    var int1 = 0;
    var int2 = 0;
    var int3 = 0;
    [int0, int1, int3, int2, int3] = GET_ENTITY_BOUNDING_BOX();
    if ((int0 == 0)) {
        return [-1, 0, 0];
    };
    var int4 = 0;
    var int5 = 0;
    var int6 = 0;
    [int3, int4, int3] = GET_ENTITY_SCREEN_POSITION(0);
    [int6, int5, int3] = GET_ENTITY_SCREEN_POSITION(GET_ENTITY_OVERLAY_HEIGHT());
    int5 = (int5 - 62);
    var int7 = (int4 - int5);
    IF_SETPARAM_INT(3433, 5, comp(1488, 3));  // toplevel_v2_targeting:hover_info
    if ((IF_HASSUB(comp(1488, 3)) == 0)) {  // toplevel_v2_targeting:hover_info
        IF_OPENSUBCLIENT(comp(1488, 3), 1489);  // toplevel_v2_targeting:hover_info
        if (((IF_FIND(comp(1489, 7)) == 1) && (cc_getparam(5032) != 1))) {  // toplevel_v2_hover_target:contents
            CC_SETPARAM_INT(5032, 1);
            CC_SETONVARTRANSMIT(callback(script957, 3814, 1));
            script8411(2006, 0);
            script7794(97583104, 21361);
            script7794(97583121, 21361);
        };
        IF_SETONMOUSEREPEAT(callback(script8879), comp(1488, 3));  // toplevel_v2_targeting:hover_info
        IF_SETHIDE(true, comp(1489, 3));  // toplevel_v2_hover_target:universe
        IF_SETONTIMER(callback(script9165), comp(1488, 3));  // toplevel_v2_targeting:hover_info
    };
    return [int6, int7, int5];
}