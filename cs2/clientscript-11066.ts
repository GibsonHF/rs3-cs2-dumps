//
function script11066(int0: component): void {
    var int1 = 6452 as cs2enum;
    var int2 = ENUM_GETOUTPUTCOUNT(int1);
    if ((int2 == 0)) {
        return;
    };
    var int3 = 1;
    var int4 = -1 as struct;
    var int5 = 0;
    var string0 = "";
    var string1 = "";
    var int6 = 0;
    var int7 = 0;
    while ((int3 <= int2)) {
        int4 = enum_getvalue(0, 73, int1, int3);
        [int6, int7] = [0, 0];
        if (((int4 != -1 as struct) && (script9178(struct_getparam(int4, 1268)) == 1))) {
            [int6, int7] = script9132(struct_getparam(int4, 1268));
            switch (int6) {
                case 0: {
                    string0 = strconcat(string0, `<col=FF00>${struct_getparam(int4, 1266)} - Ready<br>`);
                    break;
                }
                case 1: {
                    string0 = strconcat(string0, `<col=FF00>${struct_getparam(int4, 1266)} - ${script9172(int7)}<br>`);
                    break;
                }
                case 2:
                case 3:
                case 5:
                case 7: {
                    string0 = strconcat(string0, `<col=FF0000>${struct_getparam(int4, 1266)} - ${script9172(int7)}<br>`);
                    break;
                }
            };
        };
        int3 = (int3 + 1);
    };
    if ((strcmp(string0, "") != 0)) {
        string0 = strconcat(string0, "-------------------<br>");
    };
    string0 = strconcat(string0, `Daily Reset - ${script9172(script9170())}<br>`);
    string0 = strconcat(string0, `Weekly Reset - ${script9172(script10889())}<br>`);
    string0 = strconcat(string0, `Monthly Reset - ${script9172(script9169())}`);
    script8800(string0, int0, -1);
    return;
}