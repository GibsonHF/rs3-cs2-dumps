//
function script15648(int0: component): void {
    if ((script13749() == false)) {
        return;
    };
    var int1 = -1;
    var int2 = -1;
    switch (CLIENTTYPE()) {
        case 7: {
            int1 = 5;
            int2 = 626;
            break;
        }
        case 8: {
            int1 = 6;
            int2 = 628;
            break;
        }
        default: {
            return;
        }
    };
    IF_SETONCLICK(callback(script9061, int1), int0);
    var int3 = struct_getparam(int2, 8299);
    switch (MAP_LANG()) {
        case 1: {
            if ((struct_getparam(int2, 8300) != -1 as graphic)) {
                int3 = struct_getparam(int2, 8300);
            };
            break;
        }
        case 2: {
            if ((struct_getparam(int2, 8301) != -1 as graphic)) {
                int3 = struct_getparam(int2, 8301);
            };
            break;
        }
        case 3: {
            if ((struct_getparam(int2, 8302) != -1 as graphic)) {
                int3 = struct_getparam(int2, 8302);
            };
            break;
        }
    };
    stack(int3);
    stack(int0);
    IF_SETGRAPHIC();
    return;
}