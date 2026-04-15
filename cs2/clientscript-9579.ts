//
function script9579(int0: component): void {
    if ((int0 == comp(-1, 65535))) {
        return;
    };
    var int1 = 0;
    var int2 = 3;
    var int3 = 0;
    define_array[9](int2);
    var int4 = 0;
    if (((IF_FIND(IF_GETPARENTLAYER(int0)) == 1) && (cc_getparam(4040) != comp(-1, 65535)))) {
        if ((IF_GETHIDE(cc_getparam(4040)) == false)) {
            int1 = 1;
        };
        pop_array(0, cc_getparam(4037));
        pop_array(1, cc_getparam(4038));
        pop_array(2, cc_getparam(4039));
        while ((int3 < int2)) {
            int4 = 0;
            if ((push_array(int3) != -1)) {
                while ((CC_FIND(push_array(int3), int4) == 1)) {
                    if ((int1 == 1)) {
                        CC_SETGRAPHIC(cc_getparam(4055));
                    } else {
                        CC_SETGRAPHIC(cc_getparam(4054));
                    };
                    int4 = (int4 + 1);
                };
            };
            int3 = (int3 + 1);
        };
    };
    return;
}