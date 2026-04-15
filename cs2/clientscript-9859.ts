//
function script9859(int0: int): void {
    if ((enum_hasoutput(0, 7710 as cs2enum, int0) == 0)) {
        var int0 = 2;
    };
    var int1 = -1 as struct;
    var int2 = 0;
    var int3 = 0;
    var int4 = 0;
    var int5 = 0;
    var int6 = 0;
    var int7 = 0;
    var int8 = 0;
    [int2, int3, int4, int5, int6, int7] = script8725(int0, 1000);
    int1 = script10405(1000);
    int2 = script8711(int2, int4, int6, IF_GETWIDTH(IF_GETLAYER(struct_getparam(int1, 3503))));
    int3 = script8711(int3, int5, int7, IF_GETHEIGHT(IF_GETLAYER(struct_getparam(int1, 3503))));
    [int2, int3, int6, int7, int8] = script8382(int2, int3, int6, int7, 1000, 0, 0);
    script8387(int2, int3, int6, int7, 1000);
    [int2, int3, int4, int5, int6, int7] = script8725(int0, 1008);
    int1 = script10405(1008);
    int2 = script8711(int2, int4, int6, IF_GETWIDTH(IF_GETLAYER(struct_getparam(int1, 3503))));
    int3 = script8711(int3, int5, int7, IF_GETHEIGHT(IF_GETLAYER(struct_getparam(int1, 3503))));
    [int2, int3, int6, int7, int8] = script8382(int2, int3, int6, int7, 1008, 0, 0);
    script8387(int2, int3, int6, int7, 1008);
    [int2, int3, int4, int5, int6, int7] = script8725(int0, 1006);
    int1 = script10405(1006);
    int2 = script8711(int2, int4, int6, IF_GETWIDTH(IF_GETLAYER(struct_getparam(int1, 3503))));
    int3 = script8711(int3, int5, int7, IF_GETHEIGHT(IF_GETLAYER(struct_getparam(int1, 3503))));
    [int2, int3, int6, int7, int8] = script8382(int2, int3, int6, int7, 1006, 0, 0);
    script8387(int2, int3, int6, int7, 1006);
    [int2, int3, int4, int5, int6, int7] = script8725(int0, 1005);
    int1 = script10405(1005);
    int2 = script8711(int2, int4, int6, IF_GETWIDTH(IF_GETLAYER(struct_getparam(int1, 3503))));
    int3 = script8711(int3, int5, int7, IF_GETHEIGHT(IF_GETLAYER(struct_getparam(int1, 3503))));
    [int2, int3, int6, int7, int8] = script8382(int2, int3, int6, int7, 1005, 0, 0);
    script8387(int2, int3, int6, int7, 1005);
    if (((varclient_3693 != 1) && (varbitplayer_28881 == 0))) {
        script8868();
    };
    return;
}