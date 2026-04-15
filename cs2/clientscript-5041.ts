//
function script5041(int0: struct, int1: int, int2: int, int3: int): void {
    CC_SETOP(6, "Delete");
    CC_SETPARAM_INT(1474, int1);
    CC_SETPARAM_INT(1475, int2);
    var string0 = struct_getparam(int0, 1463);
    CC_SETOPBASE(`<col=ff9040>${string0}`);
    var int4 = -1 as cs2enum;
    switch (struct_getparam(int0, 1466)) {
        case 1: {
            CC_SETPARAM_INT(1476, script5020(int3));
            CC_SETPARAM_INT(1477, script5021(int3));
            int4 = struct_getparam(int0, 1470);
            if ((int4 != -1 as cs2enum)) {
                string0 = strconcat(string0, `<br>${enum_getvalue(0, 36, int4, -1)} ${enum_getvalue(0, 36, int4, script5022(int3))}`);
            };
            break;
        }
        case 2: {
            int4 = struct_getparam(int0, 1470);
            if ((int4 != -1 as cs2enum)) {
                string0 = strconcat(string0, `<br>${enum_getvalue(0, 36, int4, -1)} ${enum_getvalue(0, 36, int4, script5023(int3))}`);
            };
            int4 = struct_getparam(int0, 1471);
            if ((int4 != -1 as cs2enum)) {
                string0 = strconcat(string0, `<br>${enum_getvalue(0, 36, int4, -1)} ${enum_getvalue(0, 36, int4, script5024(int3))}`);
            };
            int4 = struct_getparam(int0, 1472);
            if ((int4 != -1 as cs2enum)) {
                string0 = strconcat(string0, `<br>${enum_getvalue(0, 36, int4, -1)} ${enum_getvalue(0, 36, int4, script5025(int3))}`);
            };
            break;
        }
        case 3: {
            int4 = struct_getparam(int0, 1470);
            if ((int4 != -1 as cs2enum)) {
                string0 = strconcat(string0, `<br>${enum_getvalue(0, 36, int4, -1)} ${enum_getvalue(0, 36, int4, script5026(int3))}`);
            };
            int4 = struct_getparam(int0, 1471);
            if ((int4 != -1 as cs2enum)) {
                string0 = strconcat(string0, `<br>${enum_getvalue(0, 36, int4, -1)} ${enum_getvalue(0, 36, int4, script5027(int3))}`);
            };
            int4 = struct_getparam(int0, 1472);
            if ((int4 != -1 as cs2enum)) {
                string0 = strconcat(string0, `<br>${enum_getvalue(0, 36, int4, -1)} ${enum_getvalue(0, 36, int4, script5028(int3))}`);
            };
            break;
        }
        case 4: {
            int4 = struct_getparam(int0, 1470);
            if ((int4 != -1 as cs2enum)) {
                string0 = strconcat(string0, `<br>${enum_getvalue(0, 36, int4, -1)} ${enum_getvalue(0, 36, int4, script5029(int3))}`);
            };
            int4 = struct_getparam(int0, 1471);
            if ((int4 != -1 as cs2enum)) {
                string0 = strconcat(string0, `<br>${enum_getvalue(0, 36, int4, -1)} ${enum_getvalue(0, 36, int4, script5030(int3))}`);
            };
            break;
        }
        case 5: {
            int4 = struct_getparam(int0, 1470);
            if ((int4 != -1 as cs2enum)) {
                string0 = strconcat(string0, `<br>${enum_getvalue(0, 36, int4, -1)} ${enum_getvalue(0, 36, int4, script5031(int3))}`);
            };
            int4 = struct_getparam(int0, 1471);
            if ((int4 != -1 as cs2enum)) {
                string0 = strconcat(string0, `<br>${enum_getvalue(0, 36, int4, -1)} ${enum_getvalue(0, 36, int4, script5032(int3))}`);
            };
            int4 = struct_getparam(int0, 1472);
            if ((int4 != -1 as cs2enum)) {
                string0 = strconcat(string0, `<br>${enum_getvalue(0, 36, int4, -1)} ${enum_getvalue(0, 36, int4, script5033(int3))}`);
            };
            break;
        }
        case 6: {
            int4 = struct_getparam(int0, 1470);
            if ((int4 != -1 as cs2enum)) {
                string0 = strconcat(string0, `<br>${enum_getvalue(0, 36, int4, -1)} ${enum_getvalue(0, 36, int4, script5034(int3))}`);
            };
            int4 = struct_getparam(int0, 1471);
            if ((int4 != -1 as cs2enum)) {
                string0 = strconcat(string0, `<br>${enum_getvalue(0, 36, int4, -1)} ${enum_getvalue(0, 36, int4, script5035(int3))}`);
            };
            int4 = struct_getparam(int0, 1472);
            if ((int4 != -1 as cs2enum)) {
                string0 = strconcat(string0, `<br>${enum_getvalue(0, 36, int4, -1)} ${enum_getvalue(0, 36, int4, script5036(int3))}`);
            };
            break;
        }
        default: {
            int4 = struct_getparam(int0, 1470);
            if ((int4 != -1 as cs2enum)) {
                string0 = strconcat(string0, `<br>${enum_getvalue(0, 36, int4, -1)} ${enum_getvalue(0, 36, int4, int3)}`);
            };
            break;
        }
    };
    CC_SETONMOUSEREPEAT(callback(script5077, -2147483645, -2147483643, string0, -2147483647, -2147483646));
    return;
}