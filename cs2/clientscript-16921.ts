//
function script16921(int0: component, int1: component, int2: struct, int3: int, int4: unknown_int): void {
    var int5 = struct_getparam(int2, 6589);
    if (((int5 != -1 as cs2enum) && (enum_getvalue(0, 73, int5, int3) != -1 as struct))) {
        var int2 = enum_getvalue(0, 73, int5, int3);
    };
    var int6 = 0;
    while ((int6 < 9)) {
        CC_CREATE(int1, 5, int6);
        CC_SETSIZE(5468, 5468, 2, 2);
        switch (int6) {
            case 0: {
                CC_SETGRAPHIC(struct_getparam(int2, 6533));
                break;
            }
            case 1: {
                CC_SETGRAPHIC(struct_getparam(int2, 6534));
                break;
            }
            case 2: {
                CC_SETGRAPHIC(struct_getparam(int2, 6535));
                break;
            }
            case 3: {
                CC_SETGRAPHIC(struct_getparam(int2, 6536));
                break;
            }
            case 4: {
                CC_SETGRAPHIC(struct_getparam(int2, 6537));
                break;
            }
            case 5: {
                CC_SETGRAPHIC(struct_getparam(int2, 6538));
                break;
            }
            case 6: {
                CC_SETGRAPHIC(struct_getparam(int2, 6539));
                break;
            }
            case 7: {
                CC_SETGRAPHIC(struct_getparam(int2, 6540));
                break;
            }
            case 8: {
                CC_SETGRAPHIC(struct_getparam(int2, 6541));
                break;
            }
        };
        int6 = (int6 + 1);
    };
    CC_CREATE(int1, 3, int6);
    CC_SETSIZE(0, 0, 1, 1);
    CC_SETPOSITION(0, 0, 0, 0);
    CC_SETCOLOUR(0);
    CC_SETFILL(1);
    CC_SENDTOBACK();
    script16923(int0, int1);
    if ((int4 == 1)) {
        IF_SETONRESIZE(callback(script16922, int0, int1), int0);
    };
    return;
}