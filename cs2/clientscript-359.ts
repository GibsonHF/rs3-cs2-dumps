//
function script359(int0: unknown_int, int1: inv, int2: int, int3: unknown_int, int4: int, int5: int, int6: int, int7: int, int8: struct, int9: struct, int10: struct, int11: npc, int12: int, int13: bas, int14: unknown_int, int15: int, int16: int, int17: int, string0: string, string1: string, string2: string, string3: string, string4: string, string5: string, string6: string, string7: string, string8: string): void {
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
    IF_SETSIZE(int27, int26, 0, 0, comp(90, 0));
    script15450(int6, int5, int15, int16, int17);
    switch (int14) {
        case 0: {
            IF_SETHIDE(true, comp(90, 4));
            IF_SETHIDE(false, comp(90, 69));
            IF_SETHIDE(true, comp(90, 3));
            script13972(comp(90, 67), comp(90, 68), 28595 as struct, "Check Animals", 1);
            script13969(comp(90, 64), comp(90, 65), 28595 as struct, "Add/Remove Animals");
            script13969(comp(90, 149), comp(90, 150), 28595 as struct, "Farmhands");
            if (((int28 != -1 as obj) || (OC_HASVAROBJ(int28) == 1))) {
                if ((INV_GETVAR(int1, int2, 48837) == 1)) {
                    stack(15217);
                    stack(5898321);
                    IF_SETGRAPHIC();
                } else {
                    stack(15218);
                    stack(5898321);
                    IF_SETGRAPHIC();
                };
            };
            if ((script13749() == false)) {
                IF_CLEAROPS(comp(90, 107));
                IF_CLEAROPS(comp(90, 99));
            };
            varclient_6489 = 0;
            varclient_6490 = 0;
            varclient_6491 = 0;
            script3695(int1);
            if ((int0 == 1)) {
                IF_SETHIDE(true, comp(90, 61));
                IF_SETPOSITION(0, 0, 0, 0, comp(90, 69));
                int26 = (int26 - 23);
            };
            if ((int25 != -1 as dbrow)) {
                script3692(comp(90, 72), comp(90, 73), "Cure Disease", script915(int4));
                script3692(comp(90, 78), comp(90, 79), "Gather Produce", script915(int7));
            } else if ((int1 == 93 as inv)) {
                IF_SETHIDE(true, comp(90, 70));
                int26 = (int26 - 42);
            } else if ((int1 == 859 as inv)) {
                IF_SETHIDE(true, comp(90, 72));
                IF_SETHIDE(true, comp(90, 73));
                IF_SETHIDE(true, comp(90, 78));
                IF_SETHIDE(true, comp(90, 79));
            };
            IF_SETSIZE(int27, int26, 0, 0, comp(90, 0));
            if ((int8 == -1 as struct)) {
                script13994(comp(90, 142), comp(-1, 65535), 28556 as struct, "", true);
            } else {
                script13993(comp(90, 142), comp(-1, 65535), 28556 as struct, "");
            };
            if ((int9 == -1 as struct)) {
                script13994(comp(90, 138), comp(-1, 65535), 28556 as struct, "", true);
            } else {
                script13993(comp(90, 138), comp(-1, 65535), 28556 as struct, "");
            };
            if ((int10 == -1 as struct)) {
                script13994(comp(90, 145), comp(-1, 65535), 28556 as struct, "", true);
            } else {
                script13993(comp(90, 145), comp(-1, 65535), 28556 as struct, "");
            };
            IF_SETSIZE(int18, IF_GETHEIGHT(comp(90, 104)), 0, 0, comp(90, 104));
            IF_SETTEXT(`${inttostring(int5, 10)}%`, comp(90, 105));
            IF_SETSIZE(int19, IF_GETHEIGHT(comp(90, 112)), 0, 0, comp(90, 112));
            IF_SETTEXT(`${inttostring(int6, 10)}%`, comp(90, 113));
            IF_SETTEXT(string1, comp(90, 131));
            IF_SETTEXT(string2, comp(90, 106));
            IF_SETTEXT(string3, comp(90, 129));
            IF_SETTEXT(string4, comp(90, 130));
            IF_SETTEXT(string5, comp(90, 128));
            IF_SETTEXT(string7, comp(90, 116));
            IF_SETTEXT(string0, comp(90, 117));
            IF_SETTEXT(string6, comp(90, 98));
            IF_SETTEXT(string8, comp(90, 132));
            if ((int8 == -1 as struct)) {
                IF_SETHIDE(true, comp(90, 141));
                IF_SETHIDE(false, comp(90, 136));
            } else {
                IF_SETHIDE(false, comp(90, 137));
                IF_SETHIDE(false, comp(90, 144));
                IF_SETHIDE(true, comp(90, 136));
                IF_SETHIDE(false, comp(90, 141));
                IF_SETTEXT(struct_getparam(int8, 7456), comp(90, 143));
                if ((int9 != -1 as struct)) {
                    IF_SETTEXT(struct_getparam(int9, 7456), comp(90, 139));
                } else {
                    IF_SETTEXT("No Trait", comp(90, 139));
                };
                if ((int10 != -1 as struct)) {
                    IF_SETTEXT(struct_getparam(int10, 7456), comp(90, 146));
                } else {
                    IF_SETTEXT("No Trait", comp(90, 146));
                };
            };
            IF_SETNPCMODEL(int11, comp(90, 94));
            IF_SETMODELANIM(BAS_GETANIM_READY(int13), comp(90, 94));
            IF_SETMODELANGLE(0, 0, npc_getparam(int11, 3864), npc_getparam(int11, 3865), 0, int12, comp(90, 94));
            if ((int11 == 14886 as npc)) {
                IF_SETPOSITION(39, 18, 0, 0, comp(90, 94));
            };
            if ((int12 > 200)) {
                IF_SETMODELZOOM(int12, comp(90, 94));
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
                IF_SETHIDE(true, comp(90, 4));
                IF_SETHIDE(true, comp(90, 69));
                IF_SETHIDE(false, comp(90, 3));
                script13969(comp(90, 67), comp(90, 68), 28595 as struct, "Check Animals");
                script13969(comp(90, 64), comp(90, 65), 28595 as struct, "Add/Remove Animals");
                script13972(comp(90, 149), comp(90, 150), 28595 as struct, "Farmhands", 1);
                script4197(int25);
            };
            break;
        }
    };
    if ((dbrow_getfield(int25, 159760, 0) == 2)) {
        IF_SETHIDE(true, comp(90, 62));
    } else {
        IF_SETHIDE(false, comp(90, 62));
    };
    return;
}