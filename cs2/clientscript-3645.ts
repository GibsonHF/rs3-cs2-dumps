//
function script3645(int0: int, int1: int, int2: unknown_int, int3: unknown_int, int4: component, int5: component, int6: component, int7: component, int8: unknown_int, int9: component, int10: unknown_int): void {
    var int11 = varplayer_9062;
    if ((AND(int11, 170) == 0)) {
        int11 = (int11 * 3);
    };
    var int12 = script3609();
    var int13 = 0;
    var int14 = 0;
    var int15 = 0;
    var int16 = 0;
    var int17 = 0;
    var int18 = -1 as obj;
    var int19 = -1 as struct;
    var int20 = 0;
    var int21 = DB_GETFIELDCOUNT(int12, 299328);
    var int22 = -1;
    var string0 = "";
    IF_SETHIDE(true, int5);
    IF_SETTEXT("", int4);
    stack(-1);
    stack(int2);
    IF_SETGRAPHIC();
    IF_SETOBJECT(-1, -1, int3);
    while (((int20 < int21) && (int14 <= int0))) {
        [int14, int15, int18, int19, int17] = dbrow_getfield(int12, 299328, int20);
        if ((int22 != int14)) {
            int16 = script3599(int14);
            int22 = int14;
        };
        if (((int14 == int0) && (((int18 != -1 as obj) && (int18 != 49137 as obj)) || ((int19 != -1 as struct) && (int19 != 40074 as struct))))) {
            if ((AND(int15, varplayer_9062) != 0)) {
                if (((int10 == 0) || (AND(int16, int15) == 0))) {
                    if ((int13 == int1)) {
                        if (((int18 != -1 as obj) && (int18 != 49137 as obj))) {
                            string0 = `${inttostring(int17, 10)} x ${OC_NAME(int18)}`;
                        };
                        if (((int19 != -1 as struct) && (int19 != 40074 as struct))) {
                            string0 = script2290(int19, 1);
                        };
                        IF_SETCOLOUR(16506499, int4);
                        if ((AND(int16, int15) != 0)) {
                            IF_SETCOLOUR(65280, int4);
                            string0 = `${string0} - Claimed`;
                        } else if ((AND(int15, varplayer_9062) == 0)) {
                            IF_SETHIDE(false, int5);
                        };
                        IF_SETTEXT(string0, int4);
                        if ((script3638(int19, int18, 0) == -1 as graphic)) {
                            stack(8933);
                            stack(int2);
                            IF_SETGRAPHIC();
                            IF_SETOBJECT(int18, -1, int3);
                        } else {
                            stack(script3638(int19, int18, 0));
                            stack(int2);
                            IF_SETGRAPHIC();
                        };
                    };
                    int19 = -1 as struct;
                    int18 = -1 as obj;
                    int13 = (int13 + 1);
                };
            } else if ((((int10 == 0) && (AND(int15, int11) != 0)) && ((int10 == 0) || (AND(int16, int15) == 0)))) {
                if ((int13 == int1)) {
                    if (((int18 != -1 as obj) && (int18 != 49137 as obj))) {
                        string0 = `${inttostring(int17, 10)} x ${OC_NAME(int18)}`;
                    };
                    if (((int19 != -1 as struct) && (int19 != 40074 as struct))) {
                        string0 = script2290(int19, 1);
                    };
                    IF_SETCOLOUR(16506499, int4);
                    if ((AND(int16, int15) != 0)) {
                        IF_SETCOLOUR(65280, int4);
                        string0 = `${string0} - Claimed`;
                    } else if ((AND(int15, varplayer_9062) == 0)) {
                        IF_SETHIDE(false, int5);
                    };
                    IF_SETTEXT(string0, int4);
                    if ((script3638(int19, int18, 0) == -1 as graphic)) {
                        stack(8933);
                        stack(int2);
                        IF_SETGRAPHIC();
                        IF_SETOBJECT(int18, -1, int3);
                    } else {
                        stack(script3638(int19, int18, 0));
                        stack(int2);
                        IF_SETGRAPHIC();
                    };
                };
                int19 = -1 as struct;
                int18 = -1 as obj;
                int13 = (int13 + 1);
            };
        };
        int20 = (int20 + 1);
    };
    var int1 = MAX(0, MIN(int1, (int13 - 1)));
    if ((int13 == 0)) {
        IF_SETTEXT("None", int9);
    } else {
        IF_SETTEXT(`${inttostring((int1 + 1), 10)}/${inttostring(int13, 10)}`, int9);
    };
    IF_SETHIDE(false, int6);
    IF_SETHIDE(false, int7);
    if ((int1 == 0)) {
        IF_SETHIDE(true, int6);
    };
    if (((int1 == (int13 - 1)) || (int13 == 0))) {
        IF_SETHIDE(true, int7);
    };
    IF_SETOPCURSOR(1, 46 as cursor, int6);
    IF_SETOPCURSOR(1, 46 as cursor, int7);
    IF_SETONOP(callback(script3625, int0, (int1 - 1), int8), int6);
    IF_SETONOP(callback(script3625, int0, (int1 + 1), int8), int7);
    return;
}