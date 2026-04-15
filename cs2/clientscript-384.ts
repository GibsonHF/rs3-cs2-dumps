//[proc,playerdesign4_getoutfit]
function script384(int0: int, int1: struct, int2: boolean): struct {
    switch (int0) {
        case 0: {
            if ((int2 == true)) {
                return struct_getparam(int1, 1175);
            };
            return struct_getparam(int1, 1169);
        }
        case 1: {
            if ((int2 == true)) {
                return struct_getparam(int1, 1176);
            };
            return struct_getparam(int1, 1170);
        }
        case 2: {
            if ((int2 == true)) {
                return struct_getparam(int1, 1177);
            };
            return struct_getparam(int1, 1171);
        }
        case 3: {
            if ((int2 == true)) {
                return struct_getparam(int1, 1178);
            };
            return struct_getparam(int1, 1172);
        }
        case 4: {
            if ((int2 == true)) {
                return struct_getparam(int1, 1179);
            };
            return struct_getparam(int1, 1173);
        }
        case 5: {
            if ((int2 == true)) {
                return struct_getparam(int1, 1180);
            };
            return struct_getparam(int1, 1174);
        }
    };
    return -1 as struct;
}