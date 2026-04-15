//
function script1445(int0: unknown_int): void {
    var int1 = -1 as struct;
    switch (int0) {
        case 44302348: {
            int1 = enum_getvalue(0, 73, 8677 as cs2enum, varbitplayer_22201);
            break;
        }
        case 44302355: {
            int1 = enum_getvalue(0, 73, 8677 as cs2enum, varbitplayer_22202);
            break;
        }
        case 44302362: {
            int1 = enum_getvalue(0, 73, 8677 as cs2enum, varbitplayer_22203);
            break;
        }
    };
    if ((int1 != -1 as struct)) {
        stack(struct_getparam(int1, 4208));
        stack(int0);
        IF_SETGRAPHIC();
    } else {
        stack(-1);
        stack(int0);
        IF_SETGRAPHIC();
    };
    return;
}