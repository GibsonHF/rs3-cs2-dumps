//
function script8864(): void {
    var int0 = -1 as struct;
    var int1 = 0;
    var int2 = 0;
    var int3 = 0;
    var int4 = 0;
    var int5 = 0;
    var int6 = 0;
    var int7 = 0;
    if (((IF_HASSUB(struct_getparam(21300 as struct, 3505)) == 1) || (IF_HASSUB(comp(1477, 739)) == 1))) {
        varclient_3692 = 1;
        script7997();
        if (((varbitplayer_27169 == 0) && (script6431() == false))) {
            [int1, int2, int3, int4, int5, int6] = script8725(1, 1004);
            int0 = script10405(1004);
            IF_SETHIDE(false, struct_getparam(int0, 3503));
            int1 = script8711(int1, int3, int5, IF_GETWIDTH(IF_GETLAYER(struct_getparam(int0, 3503))));
            int2 = script8711(int2, int4, int6, IF_GETHEIGHT(IF_GETLAYER(struct_getparam(int0, 3503))));
            [int1, int2, int5, int6, int7] = script8382(int1, int2, int5, int6, 1004, 0, 0);
            script8387(int1, int2, int5, int6, 1004);
            script8705(1004);
        };
        script1243();
    };
    return;
}