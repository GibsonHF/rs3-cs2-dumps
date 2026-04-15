//
function script5854(int0: unknown_int): void {
    var int1 = -1;
    switch (int0) {
        case 68354204: {
            int1 = varbitplayer_22201;
            break;
        }
        case 68354208: {
            int1 = varbitplayer_22202;
            break;
        }
        case 68354212: {
            int1 = varbitplayer_22203;
            break;
        }
    };
    if ((int1 == -1)) {
        return;
    };
    var int2 = enum_getvalue(0, 73, 8677 as cs2enum, int1);
    if ((int2 == -1 as struct)) {
        stack(14520);
        stack(int0);
        IF_SETGRAPHIC();
        return;
    };
    stack(struct_getparam(int2, 4208));
    stack(int0);
    IF_SETGRAPHIC();
    return;
}