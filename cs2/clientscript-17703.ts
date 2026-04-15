//
function script17703(int0: int, int1: struct, int2: unknown_int): int {
    if ((struct_getparam(int1, 2806) != 29)) {
        return int0;
    };
    var int3 = 5;
    var int4 = 0;
    var string0 = "";
    var int5 = -1 as obj;
    var string1 = "<col=00ff00>";
    var int6 = -1;
    while ((++int6 < int3)) {
        string0 = "";
        switch (int6) {
            case 0: {
                int4 = script18286(int1);
                if (((int1 == 33965 as struct) && (int4 == 0))) {
                    string0 = "-";
                };
                int5 = 55336 as obj;
                break;
            }
            case 1: {
                int4 = script18436(int1, 55337 as obj);
                int5 = 55337 as obj;
                break;
            }
            case 2: {
                int4 = script18436(int1, 55338 as obj);
                int5 = 55338 as obj;
                break;
            }
            case 3: {
                int4 = script18436(int1, 55339 as obj);
                int5 = 55339 as obj;
                break;
            }
            case 4: {
                int4 = script18436(int1, 55340 as obj);
                int5 = 55340 as obj;
                break;
            }
        };
        if ((int4 > 0)) {
            if ((script11567(int5, 1) < int4)) {
                string1 = "<col=ff0000>";
            } else {
                string1 = "<col=00ff00>";
            };
            var int0 = script7482(`${string1}${TOSTRING_LOCALISED(int4, 1)}</col>`, -1 as graphic, int5, OC_NAME(int5), script7484(int0, int2));
        } else if ((STRING_LENGTH(string0) > 0)) {
            string1 = "<col=ffffff>";
            int0 = script7482(`${string1}${string0}</col>`, -1 as graphic, int5, OC_NAME(int5), script7484(int0, int2));
        };
    };
    return int0;
}