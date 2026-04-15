//
function script19959(): void {
    var int0 = script20008();
    var int1 = ENUM_GETOUTPUTCOUNT(int0);
    var int2 = -1;
    var int3 = comp(1337, 4);
    var int4 = 0;
    var int5 = 0;
    var int6 = 0;
    var int7 = -1 as struct;
    var int8 = -1 as graphic;
    var int9 = MAP_LANG();
    while ((++int2 < int1)) {
        int7 = enum_getvalue(0, 73, int0, int2);
        if ((IF_FIND(comp(1337, 4)) == 1)) {
            if ((MODULO((int2 + 1), 2) == 0)) {
                int5 = 2;
            } else {
                int5 = 0;
            };
            if ((int2 > 1)) {
                int6 = 2;
                if ((MODULO(int1, 2) > 0)) {
                    int5 = 1;
                };
            } else {
                int6 = 0;
            };
            script14391(int3, int2, 0, 0, int5, int6, 270, 129, 0, 0);
            CC_SETOP(1, "Select");
            CC_SETONOP(callback(script19960, int2));
            CC_SETOPCURSOR(1, 46);
            script7920(int3, (int2 + 1), int4, 0, int2, 0, 0, 1, 1, 0, 0, 1, 1, 26442);
            CC_SETONMOUSEOVER(callback(script19964, (int2 + 1), int4));
            CC_SETONMOUSELEAVE(callback(script19965, (int2 + 1), int4));
            int4 = (int4 + 1);
            switch (int9) {
                case 0: {
                    int8 = struct_getparam(int7, 6381);
                    break;
                }
                case 1: {
                    int8 = struct_getparam(int7, 6385);
                    break;
                }
                case 2: {
                    int8 = struct_getparam(int7, 6386);
                    break;
                }
                case 3: {
                    int8 = struct_getparam(int7, 6387);
                    break;
                }
            };
            script7920(int3, (int2 + 1), int4, 0, int2, 0, 0, 1, 1, 259, 117, 0, 0, int8);
            int4 = 0;
        };
    };
    switch (int9) {
        case 0: {
            stack(struct_getparam(51627 as struct, 4640));
            stack(87752707);
            IF_SETGRAPHIC();
            break;
        }
        case 1: {
            stack(struct_getparam(51627 as struct, 4639));
            stack(87752707);
            IF_SETGRAPHIC();
            break;
        }
        case 2: {
            stack(struct_getparam(51627 as struct, 4642));
            stack(87752707);
            IF_SETGRAPHIC();
            break;
        }
        case 3: {
            stack(struct_getparam(51627 as struct, 4643));
            stack(87752707);
            IF_SETGRAPHIC();
            break;
        }
    };
    script19963();
    return;
}