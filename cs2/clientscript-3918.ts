//
function script3918(int0: struct): graphic {
    var int1 = -1 as graphic;
    switch (MAP_LANG()) {
        case 1: {
            int1 = struct_getparam(int0, 5704);
            break;
        }
        case 2: {
            int1 = struct_getparam(int0, 8359);
            break;
        }
        case 3: {
            int1 = struct_getparam(int0, 8360);
            break;
        }
        default: {
            int1 = struct_getparam(int0, 8346);
            break;
        }
    };
    if ((int1 == -1 as graphic)) {
        return struct_getparam(int0, 8346);
    };
    return int1;
}