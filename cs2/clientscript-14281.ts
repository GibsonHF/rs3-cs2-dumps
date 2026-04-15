//
function script14281(int0: struct): [boolean, graphic, string] {
    var int1 = -1 as graphic;
    var int2 = -1 as stat;
    switch (struct_getparam(int0, 7277)) {
        case 1:
        case 4: {
            int2 = struct_getparam(int0, 5998);
            int1 = enum_getvalue(17, 23, 14110 as cs2enum, int2);
            if ((STAT_BASE(int2) < 25)) {
                return [true, int1, `<col=BA2D14>Level 25 ${enum_getvalue(17, 36, 680 as cs2enum, int2)} required.`];
            };
            break;
        }
        case 2: {
            if ((script14283() == 0)) {
                return [true, -1 as graphic, "<col=BA2D14>Level requirements not met."];
            };
            break;
        }
        case 3: {
            if ((script14283() == 0)) {
                return [true, -1 as graphic, "<col=BA2D14>Level requirements not met."];
            };
            if ((varbitplayer_13118 < 40)) {
                return [true, -1 as graphic, "<col=BA2D14>Quest requirements not met."];
            };
            break;
        }
    };
    if (((struct_getparam(int0, 5086) == 1) && (script4148() == true))) {
        return [true, int1, "<col=BA2D14>Not available in Ironman Mode."];
    };
    var int3 = struct_getparam(int0, 4850);
    if ((varbitplayer_4861 < int3)) {
        return [true, int1, `<col=BA2D14>Cost: ${inttostring(int3, 10)}`];
    };
    return [false, int1, `Cost: <col=ffffff>${inttostring(int3, 10)}`];
}