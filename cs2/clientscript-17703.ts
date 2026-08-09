//
function script17703(int0: number, int1: number, int2: number): number {
    if ((struct_getparam(int1, 2806) != 29)) {
        return int0;
    };
    var int3 = 5;
    var int4 = 0;
    var string0 = "";
    var int5 = -1 as obj;
    var int6 = -1;
    var int7 = -1;
    var int8 = 0;
    var string1 = "<col=00ff00>";
    var int9 = -1;
    int9 = (int9 + 1);
    while ((int9 < int3)) {
        string0 = "";
        switch (int9) {
            case 0: {
                int4 = script18286(int1);
                if (((int1 == 33965) && (int4 == 0))) {
                    string0 = "-";
                };
                int5 = 55336 as obj;
                int6 = 61367;
                int7 = 61176;
                break;
            }
            case 1: {
                int4 = script18436(int1, 55337);
                int5 = 55337 as obj;
                int6 = 61418;
                int7 = 61199;
                break;
            }
            case 2: {
                int4 = script18436(int1, 55338);
                int5 = 55338 as obj;
                int6 = 61419;
                int7 = 61200;
                break;
            }
            case 3: {
                int4 = script18436(int1, 55339);
                int5 = 55339 as obj;
                int6 = 61420;
                int7 = 61201;
                break;
            }
            case 4: {
                int4 = script18436(int1, 55340);
                int5 = 55340 as obj;
                int6 = 61421;
                int7 = 61202;
                break;
            }
        };
        if ((int4 > 0)) {
            int8 = ((script11567(int5, 1) + script11567(int6, 1)) + script11567(int7, 1));
            if ((int8 < int4)) {
                string1 = "<col=ff0000>";
            } else {
                string1 = "<col=00ff00>";
            };
            var int0 = script7482(`${string1}${TOSTRING_LOCALISED(int4, 1)}</col>`, -1, int5, OC_NAME(int5), script7484(int0, int2));
        } else if ((STRING_LENGTH(string0) > 0)) {
            string1 = "<col=ffffff>";
            int0 = script7482(`${string1}${string0}</col>`, -1, int5, OC_NAME(int5), script7484(int0, int2));
        };
    };
    return int0;
}