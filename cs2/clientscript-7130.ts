//
function script7130(int0: obj, int1: int, int2: int, int3: component): [int, int] {
    var int4 = 2;
    var int5 = 0;
    var int6 = item_getparam(int0, 2650);
    var int7 = item_getparam(int0, 2990);
    var string0 = "";
    var int8 = 1;
    var int9 = 0;
    var int10 = 0;
    while ((int8 <= 3)) {
        if ((int7 != -1 as struct)) {
            int9 = script7114(int7);
            if ((int9 == 0)) {
                int10 = 0;
            } else {
                int10 = 1;
            };
            var int2 = (int2 + int4);
            var [int1, int2] = script7131(int0, 3, int2, 1, 2, struct_getparam(int7, 2655), -1 as struct, 0, 1, int10, int9, int3, int1);
            int2 = (int2 + int4);
        } else if (((int6 != -1 as obj) && (script7090(int6) == 0))) {
            int9 = script7089(int6);
            if ((int9 == 0)) {
                int10 = 0;
            } else {
                int10 = 1;
            };
            int2 = (int2 + int4);
            [int1, int2] = script7131(int0, 3, int2, 1, 2, int6, -1 as struct, 0, 1, int10, int9, int3, int1);
            int2 = (int2 + int4);
        };
        switch (++int8) {
            case 2: {
                int6 = item_getparam(int0, 2651);
                int7 = item_getparam(int0, 2991);
                break;
            }
            case 3: {
                int6 = item_getparam(int0, 2652);
                int7 = item_getparam(int0, 2992);
                break;
            }
        };
    };
    return [int2, int1];
}