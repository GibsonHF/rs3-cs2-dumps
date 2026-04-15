//
function script9394(int0: component, int1: unknown_int, int2: cs2enum): void {
    var string0 = LOWERCASE(IF_GETTEXT(int0));
    var int3 = -1;
    var int4 = ENUM_GETOUTPUTCOUNT(int2);
    var int5 = -1;
    var int6 = 0;
    var int7 = -1;
    var int8 = 0;
    var int9 = -1 as dbrow;
    var int10 = -1 as dbrow;
    var int11 = -1 as struct;
    var string1 = "";
    var string2 = "";
    var string3 = "";
    var string4 = "";
    var string5 = "";
    var string6 = "";
    var int12 = 0;
    var int13 = false;
    var int14 = 0;
    var int15 = IF_GETWIDTH(comp(365, 16));
    var int16 = 0;
    var int17 = 20;
    var int18 = 0;
    while ((++int3 < int4)) {
        int9 = enum_getvalue(0, 74, int2, int3);
        int5 = -1;
        int6 = DB_GETFIELDCOUNT(int9, 127024);
        string3 = dbrow_getfield(int9, 126976, 0);
        if ((script18934(int9) == 1)) {
            while ((++int5 < int6)) {
                int10 = dbrow_getfield(int9, 127024, int5);
                if ((script18934(int10) == 1)) {
                    int7 = -1;
                    int8 = DB_GETFIELDCOUNT(int10, 127008);
                    string4 = dbrow_getfield(int10, 126976, 0);
                    int12 = 0;
                    int14 = enum_getreverseindex(74, 0, 14569 as cs2enum, int10, 0);
                    while ((++int7 < int8)) {
                        int11 = dbrow_getfield(int10, 127008, int7);
                        string1 = LOWERCASE(struct_getparam(int11, 7527));
                        string5 = LOWERCASE(`${string3} ${string4}`);
                        if ((STRING_LENGTH(string1) > 0)) {
                            string2 = LOWERCASE(struct_getparam(int11, 7528));
                            if ((((STRING_INDEXOF_STRING(string1, string0, 0) > -1) || (STRING_INDEXOF_STRING(string2, string0, 0) > -1)) || (STRING_INDEXOF_STRING(string5, string0, 0) > -1))) {
                                int13 = script9395(int11);
                                if (((script16146(int11, int13) == 1) && (CC_FINDBYCATEGORY[1](comp(365, 19), int14, int7) == 0))) {
                                    if ((int12 == 0)) {
                                        string6 = `${string3}<col=ffffff> > </col>${string4}`;
                                        int16 = script20478(string6, int15, 2195 as dbrow, 0);
                                        script2995(comp(365, 17), int14, 0, int17, 0, 0, int15, int16, 0, 0, 2195 as dbrow, string6);
                                        CC_SETOP(10, `Go to ${string6}`);
                                        int17 = (int17 + (int16 + 5));
                                        int12 = 1;
                                    };
                                    int17 = script18933(comp(365, 18), comp(365, 19), comp(365, 20), int11, int14, int7, int18, int17, int15, int13);
                                    int18 = (int18 + 1);
                                };
                            };
                        };
                    };
                };
            };
        };
    };
    varclient_7769 = string0;
    script2681(comp(365, 18), int15, 18, 0, 0, 28 as fontmetrics, `Displaying ${inttostring(int18, 10)} ${script4583(int18, "result", "results")} containing '${string0}'.`, 0);
    script5713(int1, int17);
    return;
}