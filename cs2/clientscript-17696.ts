//
function script17696(int0: struct): [string, string] {
    var int1 = struct_getparam(int0, 2806);
    var string0 = enum_getvalue(0, 36, 108 as cs2enum, int1);
    var string1 = "Attack the target.";
    var int2 = INV_GETOBJ(94 as inv, 3);
    var int3 = INV_GETOBJ(94 as inv, 5);
    var int4 = script7436(int2);
    var int5 = 0;
    var int6 = 0;
    var int7 = 1;
    switch (int1) {
        case 29: {
            int5 = 90;
            int6 = 20;
            break;
        }
        case 1: {
            int5 = 110;
            int6 = 20;
            break;
        }
        case 4: {
            int5 = 90;
            int6 = 20;
            break;
        }
        case 3: {
            int5 = 90;
            int6 = 20;
            if (((int2 != -1 as obj) && (item_getparam(int2, 8928) == 52804 as struct))) {
                int5 = 45;
                int6 = 10;
                int7 = 2;
            };
            break;
        }
    };
    int5 = SCALE(int4, 3, int5);
    int6 = SCALE(int4, 3, int6);
    if ((int7 > 1)) {
        string1 = `${string1}<br>- ${script17720(int0, int5, (int5 + int6), 0, 1)} per hit.`;
        string1 = `${string1}<br>- <col=ffffff>${inttostring(int7, 10)}</col> hits.`;
    } else {
        string1 = `${string1}<br>- ${script17720(int0, int5, (int5 + int6), 0, 1)}.`;
    };
    switch (int1) {
        case 1: {
            if ((script7495() == 1)) {
                string1 = `${string1}<br>- ${script15734(1)}`;
            };
            break;
        }
    };
    return [string0, string1];
}