//
function script1444(int0: component): void {
    var int1 = -1 as struct;
    var string0 = "-";
    var int2 = 0;
    var int3 = 0;
    switch (int0) {
        case 44302357: {
            [int2, int3] = [varbitplayer_22202, varbitplayer_22238];
            break;
        }
        case 44302364: {
            [int2, int3] = [varbitplayer_22203, varbitplayer_22239];
            break;
        }
    };
    if ((int2 != 0)) {
        int1 = enum_getvalue(0, 73, 8677 as cs2enum, int2);
        if (((int1 != -1 as struct) && (struct_getparam(int1, 4213) != 0))) {
            string0 = inttostring(MAX(0, (struct_getparam(int1, 4213) - int3)), 10);
        };
    };
    IF_SETTEXT(string0, int0);
    return;
}