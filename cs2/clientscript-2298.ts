//
function script2298(int0: unknown_int, int1: unknown_int, int2: int): void {
    var int3 = script8599(int2);
    var int4 = script8589(int2);
    var int5 = -1 as chatphrase;
    if ((IF_FIND(int4) == 1)) {
        int5 = cc_getparam(3648);
    };
    var int6 = STRING_LENGTH(inttostring(script8621(int2), 10));
    var int7 = STRING_INDEXOF_CHAR("0123456789", int1, 0);
    switch (int0) {
        case 13: {
            script1054(int2);
            return;
        }
        case 102: {
            script1050(script8613(int2), script8605(int2), int2);
            return;
        }
        case 84: {
            if ((int6 > 0)) {
                script1074(int3, int5, script8621(int2), int2);
            } else {
                script1054(int2);
            };
            return;
        }
        case 85: {
            if ((int6 > 0)) {
                script8622(int2, (script8621(int2) / 10));
            } else if ((script8615(int2) == false)) {
                script1054(int2);
            } else {
                IF_SETHIDE(true, script8588(int2));
                IF_SETHIDE(true, script8590(int2));
                IF_SETHIDE(true, script8594(int2));
                IF_SETHIDE(false, script8598(int2));
                IF_SETHIDE(false, script8599(int2));
                IF_SETHIDE(true, script8600(int2));
                return;
            };
            break;
        }
        default: {
            if ((((int7 >= 0) && (int6 < 10)) && (((script8621(int2) * 10) + int7) > 0))) {
                script8622(int2, ((script8621(int2) * 10) + int7));
            };
            break;
        }
    };
    if ((script8621(int2) > 0)) {
        IF_SETTEXT(`Please enter a value: ${inttostring(script8621(int2), 10)}*`, int4);
    } else {
        IF_SETTEXT("Please enter a value: *", int4);
    };
    IF_SETTEXTSHADOW(1, int4);
    return;
}