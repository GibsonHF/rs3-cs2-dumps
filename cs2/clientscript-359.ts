//
function script359(int0: number, int1: number, int2: number, int3: number, int4: number, int5: number, int6: number, int7: number, int8: number, int9: number, int10: number, int11: number, int12: number, int13: number, int14: number, int15: number, int16: number, int17: number, string0: string, string1: string, string2: string, string3: string, string4: string, string5: string, string6: string, string7: string, string8: string): void {
    var int18 = SCALE(int5, 100, 106);
    var int19 = SCALE(int6, 100, 106);
    var int20 = 0;
    var int21 = 0;
    var int22 = 0;
    var int23 = 0;
    var int24 = 0;
    var int25 = script2646(int1);
    var int26 = 334;
    var int27 = 512;
    var int28 = INV_GETOBJ(int1, int2);
    IF_SETSIZE(int27, int26, 0, 0, 5898240);
    script15450(int6, int5, int15, int16, int17);
    switch (int14) {
        case 0: {
            IF_SETHIDE(1, 5898244);
            IF_SETHIDE(0, 5898309);
            IF_SETHIDE(1, 5898243);
            script13972(5898307, 5898308, 28595, "Check Animals", 1);
            script13969(5898304, 5898305, 28595, "Add/Remove Animals");
            script13969(5898389, 5898390, 28595, "Farmhands");
            if (((int28 != -1) || (OC_HASVAROBJ(int28) == 1))) {
                if ((INV_GETVAR(int1, int2, 48837) == 1)) {
                    IF_SETGRAPHIC(15217, 5898321);
                } else {
                    IF_SETGRAPHIC(15218, 5898321);
                };
            };
            if ((script13749() == 0)) {
                IF_CLEAROPS(5898347);
                IF_CLEAROPS(5898339);
            };
            varclient_6489 = 0;
            varclient_6490 = 0;
            varclient_6491 = 0;
            script3695(int1);
            if ((int0 == 1)) {
                IF_SETHIDE(1, 5898301);
                IF_SETPOSITION(0, 0, 0, 0, 5898309);
                int26 = (int26 - 23);
            };
            if ((int25 != -1 as dbrow)) {
                script3692(5898312, 5898313, "Cure Disease", script915(int4));
                script3692(5898318, 5898319, "Gather Produce", script915(int7));
            } else if ((int1 == 93)) {
                IF_SETHIDE(1, 5898310);
                int26 = (int26 - 42);
            } else if ((int1 == 859)) {
                IF_SETHIDE(1, 5898312);
                IF_SETHIDE(1, 5898313);
                IF_SETHIDE(1, 5898318);
                IF_SETHIDE(1, 5898319);
            };
            IF_SETSIZE(int27, int26, 0, 0, 5898240);
            if ((int8 == -1)) {
                script13994(5898382, -1, 28556, "", 1);
            } else {
                script13993(5898382, -1, 28556, "");
            };
            if ((int9 == -1)) {
                script13994(5898378, -1, 28556, "", 1);
            } else {
                script13993(5898378, -1, 28556, "");
            };
            if ((int10 == -1)) {
                script13994(5898385, -1, 28556, "", 1);
            } else {
                script13993(5898385, -1, 28556, "");
            };
            IF_SETSIZE(int18, IF_GETHEIGHT(5898344), 0, 0, 5898344);
            IF_SETTEXT(`${inttostring(int5, 10)}%`, 5898345);
            IF_SETSIZE(int19, IF_GETHEIGHT(5898352), 0, 0, 5898352);
            IF_SETTEXT(`${inttostring(int6, 10)}%`, 5898353);
            IF_SETTEXT(string1, 5898371);
            IF_SETTEXT(string2, 5898346);
            IF_SETTEXT(string3, 5898369);
            IF_SETTEXT(string4, 5898370);
            IF_SETTEXT(string5, 5898368);
            IF_SETTEXT(string7, 5898356);
            IF_SETTEXT(string0, 5898357);
            IF_SETTEXT(string6, 5898338);
            IF_SETTEXT(string8, 5898372);
            if ((int8 == -1)) {
                IF_SETHIDE(1, 5898381);
                IF_SETHIDE(0, 5898376);
            } else {
                IF_SETHIDE(0, 5898377);
                IF_SETHIDE(0, 5898384);
                IF_SETHIDE(1, 5898376);
                IF_SETHIDE(0, 5898381);
                IF_SETTEXT(struct_getparam(int8, 7456), 5898383);
                if ((int9 != -1)) {
                    IF_SETTEXT(struct_getparam(int9, 7456), 5898379);
                } else {
                    IF_SETTEXT("No Trait", 5898379);
                };
                if ((int10 != -1)) {
                    IF_SETTEXT(struct_getparam(int10, 7456), 5898386);
                } else {
                    IF_SETTEXT("No Trait", 5898386);
                };
            };
            IF_SETNPCMODEL(int11, 5898334);
            IF_SETMODELANIM(BAS_GETANIM_READY(int13), 5898334);
            IF_SETMODELANGLE(0, 0, npc_getparam(int11, 3864), npc_getparam(int11, 3865), 0, int12, 5898334);
            if ((int11 == 14886)) {
                IF_SETPOSITION(39, 18, 0, 0, 5898334);
            };
            if ((int12 > 200)) {
                IF_SETMODELZOOM(int12, 5898334);
            };
            break;
        }
        case 1: {
            if ((int25 != -1 as dbrow)) {
                script3696(int25);
            };
            break;
        }
        case 2: {
            if ((int25 != -1 as dbrow)) {
                IF_SETHIDE(1, 5898244);
                IF_SETHIDE(1, 5898309);
                IF_SETHIDE(0, 5898243);
                script13969(5898307, 5898308, 28595, "Check Animals");
                script13969(5898304, 5898305, 28595, "Add/Remove Animals");
                script13972(5898389, 5898390, 28595, "Farmhands", 1);
                script4197(int25);
            };
            break;
        }
    };
    if ((dbrow_getfield(int25, 159760, 0) == 2)) {
        IF_SETHIDE(1, 5898302);
    } else {
        IF_SETHIDE(0, 5898302);
    };
    return;
}