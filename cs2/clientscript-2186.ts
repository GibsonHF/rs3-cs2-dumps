//
function script2186(): void {
    var int0 = comp(920, 0);
    var int1 = 0;
    var int2 = 0;
    int1 = ((IF_GETWIDTH(int0) - (36 * 4)) / 3);
    int2 = ((IF_GETHEIGHT(int0) - (32 * 7)) / 6);
    CC_DELETEALL(comp(924, 41));
    var int3 = ENUM_GETOUTPUTCOUNT(962 as cs2enum);
    var int4 = 0;
    var int5 = 0;
    var int6 = 0;
    var int7 = 0;
    var int8 = -1 as cs2enum;
    var int9 = -1 as obj;
    while ((int4 < int3)) {
        if ((IF_FIND(enum_getvalue(0, 9, 962 as cs2enum, int4)) == 1)) {
            int5 = (CC_GETX() + 2);
            int6 = CC_GETY();
            int8 = enum_getvalue(0, 26, 963 as cs2enum, int4);
            int7 = script2187(int4);
            CC_CREATE(comp(924, 41), 5, int4);
            CC_SETPOSITION((int5 + 2), (int6 + 4), 0, 0);
            CC_SETSIZE(36, 32, 0, 0);
            CC_SETOUTLINE(1);
            if ((int7 != 0)) {
                int9 = enum_getvalue(0, 33, int8, int7);
                CC_SETOPBASE(OC_NAME(int9));
                if ((int8 == 2119 as cs2enum)) {
                    CC_SETOP(1, "Telebank 1");
                    CC_SETOP(2, "Telebank 5");
                    CC_SETOP(3, "Telebank 10");
                    CC_SETOP(4, "Telebank All");
                    CC_SETOP(5, "Telebank X");
                    CC_SETOBJECT(int9, script2188(int4));
                } else {
                    CC_SETOP(1, "Withdraw 1");
                    if ((((((int9 == 20346 as obj) || (int9 == 20340 as obj)) || (int9 == 20334 as obj)) || (int9 == 20328 as obj)) || (int9 == 20322 as obj))) {
                        CC_SETOP(2, "Withdraw 5");
                        CC_SETOP(3, "Withdraw 10");
                        CC_SETOP(4, "Withdraw All");
                        CC_SETOP(5, "Withdraw X");
                        CC_SETOBJECT(int9, script14059(int4));
                    } else if ((int8 == 958 as cs2enum)) {
                        CC_SETOP(2, "Withdraw 5");
                        CC_SETOP(3, "Withdraw 10");
                        CC_SETOP(4, "Withdraw All");
                        CC_SETOP(5, "Withdraw X");
                        CC_SETOBJECT(int9, script2188(int4));
                    } else {
                        CC_SETOBJECT_NONUM(int9, 1);
                    };
                };
            };
        } else {
            printmessage("Nothing happens, as if something is wrong.");
            return;
        };
        int4 = (int4 + 1);
    };
    if ((varbitplayer_18495 == 1)) {
        IF_SETTEXT(`You have teleported ${inttostring(varbitplayer_18495, 10)}/${inttostring(script7721(), 10)} raw fish to your bank today`, comp(924, 42));
    } else {
        IF_SETTEXT(`You have teleported ${inttostring(varbitplayer_18495, 10)}/${inttostring(script7721(), 10)} raw fish to your bank today`, comp(924, 42));
    };
    if ((varbitplayer_18495 >= script7721())) {
        IF_SETCOLOUR(14803425, comp(924, 42));
    } else {
        IF_SETCOLOUR(16166977, comp(924, 42));
    };
    return;
}