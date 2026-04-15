//
function script16898(int0: struct, int1: obj): void {
    CC_SETOP(1, "Select");
    CC_SETONCLICK(callback(script1365, int0));
    CC_SETMOUSEOVERCURSOR(172);
    var int2 = -1;
    var int3 = -1;
    switch (struct_getparam(int0, 4862)) {
        case 1: {
            script14990(0, struct_getparam(int0, 4858));
            break;
        }
        case 2: {
            var [int1, int2, int3] = script13265(int1);
            if ((int2 != -1 as obj)) {
                script14994(-1 as obj, -1 as inv, -1, int2, int3, 0);
            } else {
                script14994(-1 as obj, -1 as inv, -1, -1 as obj, -1 as inv, 0);
                CC_SETONMOUSEREPEAT(callback());
            };
            break;
        }
        case 3: {
            [int1, int2, int3] = script13265(int1);
            if (((int2 != -1 as obj) && (int2 != int1))) {
                script14994(-1 as obj, -1 as inv, -1, int2, int3, 1);
            } else if (((int2 != -1 as obj) || (int1 != -1 as obj))) {
                script14994(-1 as obj, -1 as inv, -1, int2, int3, 0);
            } else {
                script14994(-1 as obj, -1 as inv, -1, -1 as obj, -1 as inv, 0);
                CC_SETONMOUSEREPEAT(callback());
            };
            break;
        }
        default: {
            script14990(0, "");
            CC_SETONMOUSEREPEAT(callback());
            break;
        }
    };
    return;
}