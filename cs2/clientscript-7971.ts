//
function script7971(int0: component, int1: int, int2: component, int3: unknown_int, int4: int): void {
    var int5 = -1 as graphic;
    if ((int1 != -1)) {
        if ((CC_FIND(int0, int1) == 1)) {
            if ((CC_GETINVOBJECT() != -1 as obj)) {
                IF_SETOBJECT(CC_GETINVOBJECT(), -1, int2);
                IF_SETSIZE(36, 32, 0, 0, int2);
                IF_SETPOSITION(3, 0, 1, 1, int2);
            } else {
                if ((CC_GETGRAPHIC() == struct_getparam(14874, 2802))) {
                    return;
                };
                stack(CC_GETGRAPHIC());
                stack(int2);
                IF_SETGRAPHIC();
                IF_SETSIZE(30, 30, 0, 0, int2);
                IF_SETPOSITION(0, 0, 1, 1, int2);
            };
        };
    } else {
        switch (int0) {
            case 93716497: {
                int5 = struct_getparam(14539, 2802);
                stack(int5);
                stack(int2);
                IF_SETGRAPHIC();
                IF_SETSIZE(20, 20, 0, 0, int2);
                IF_SETPOSITION(0, 0, 1, 1, int2);
                break;
            }
            case 96010258: {
                if ((varplayer_463 == 0)) {
                    int5 = 18819 as graphic;
                } else {
                    int5 = 18818 as graphic;
                };
                stack(int5);
                stack(int2);
                IF_SETGRAPHIC();
                IF_SETSIZE(22, 28, 0, 0, int2);
                IF_SETPOSITION(0, 0, 1, 1, int2);
                break;
            }
            case 93716491: {
                int5 = struct_getparam(14723, 2802);
                stack(int5);
                stack(int2);
                IF_SETGRAPHIC();
                IF_SETSIZE(20, 20, 0, 0, int2);
                IF_SETPOSITION(0, 0, 1, 1, int2);
                break;
            }
        };
    };
    return;
}