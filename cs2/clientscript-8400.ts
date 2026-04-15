//
function script8400(int0: component, int1: component): component {
    var int2 = 0;
    var int3 = 0;
    var int4 = 0;
    var int5 = 0;
    var int6 = 0;
    var int7 = 0;
    [int2, int3] = script8405(int0);
    int2 = (int2 + (IF_GETWIDTH(int0) / 2));
    int3 = (int3 + (IF_GETHEIGHT(int0) / 2));
    [int4, int5] = script8405(int1);
    int4 = (int4 + (IF_GETWIDTH(int1) / 2));
    int5 = (int5 + (IF_GETHEIGHT(int1) / 2));
    [int6, int7] = script8405(IF_GETPARENTLAYER(int0));
    int6 = (int6 + (IF_GETWIDTH(IF_GETPARENTLAYER(int0)) / 2));
    int7 = (int7 + (IF_GETHEIGHT(IF_GETPARENTLAYER(int0)) / 2));
    if (((POW((int6 - int2), 2) + POW((int7 - int3), 2)) >= (POW((int6 - int4), 2) + POW((int7 - int5), 2)))) {
        return int0;
    };
    return int1;
}