//
function script6758(int0: int, int1: int, int2: int, int3: int, int4: component, int5: unknown_int, int6: unknown_int, int7: unknown_int, int8: unknown_int): void {
    var int9 = -1 as struct;
    var int10 = -1 as quest;
    IF_SETHIDE(false, int4);
    if (((int2 > 0) && (int2 < 60))) {
        stack(enum_getvalue(0, 23, 6155 as cs2enum, int2));
        stack(int7);
        IF_SETGRAPHIC();
        stack(0);
        stack(36);
        stack(108);
        stack(int2);
        enum_getvalue();
        IF_SETTEXT(stack(), int5);
        IF_SETTEXT(inttostring(int3, 10), int6);
        stack(0);
        stack(17);
        stack(681);
        stack(int2);
        enum_getvalue();
        if ((STAT_BASE(stack()) < int3)) {
            stack(13166);
            stack(int8);
            IF_SETGRAPHIC();
            IF_SETCOLOUR(16711680, int6);
            IF_SETCOLOUR(9803157, int5);
            IF_SETONMOUSEOVER(callback(script6759, -2147483645), int5);
            IF_SETONMOUSELEAVE(callback(script6760, -2147483645), int5);
        } else {
            stack(13165);
            stack(int8);
            IF_SETGRAPHIC();
            IF_SETCOLOUR(65280, int6);
            IF_SETCOLOUR(6776679, int5);
        };
    } else if ((int2 == 60)) {
        int9 = script5795(int3);
        if ((int9 != -1 as struct)) {
            stack(4291);
            stack(int7);
            IF_SETGRAPHIC();
            stack(int9);
            stack(1266);
            struct_getparam();
            IF_SETTEXT(stack(), int5);
            IF_SETTEXT("", int6);
            if ((script3227(int3) != 2)) {
                stack(13166);
                stack(int8);
                IF_SETGRAPHIC();
                IF_SETCOLOUR(16711680, int6);
                IF_SETCOLOUR(9803157, int5);
                IF_SETONMOUSEOVER(callback(script6759, -2147483645), int5);
                IF_SETONMOUSELEAVE(callback(script6760, -2147483645), int5);
            } else {
                stack(13165);
                stack(int8);
                IF_SETGRAPHIC();
                IF_SETCOLOUR(65280, int6);
                IF_SETCOLOUR(6776679, int5);
            };
        };
    } else if ((int2 == 61)) {
        int10 = enum_getvalue(0, 3, 2252 as cs2enum, int3);
        stack(13168);
        stack(int7);
        IF_SETGRAPHIC();
        IF_SETTEXT(script2103(int10), int5);
        IF_SETTEXT("", int6);
        if ((script2193(int10) != 2)) {
            stack(13166);
            stack(int8);
            IF_SETGRAPHIC();
            IF_SETCOLOUR(16711680, int6);
            IF_SETCOLOUR(9803157, int5);
            IF_SETONMOUSEOVER(callback(script6759, -2147483645), int5);
            IF_SETONMOUSELEAVE(callback(script6760, -2147483645), int5);
        } else {
            stack(13165);
            stack(int8);
            IF_SETGRAPHIC();
            IF_SETCOLOUR(65280, int6);
            IF_SETCOLOUR(6776679, int5);
        };
    } else if ((int2 == 62)) {
        stack(13152);
        stack(int7);
        IF_SETGRAPHIC();
        IF_SETTEXT(REMOVETAGS(script3223(int0, int1)), int5);
        IF_SETTEXT("", int6);
        if ((script5812(int0, int1) == 0)) {
            stack(13166);
            stack(int8);
            IF_SETGRAPHIC();
            IF_SETCOLOUR(16711680, int6);
            IF_SETCOLOUR(9803157, int5);
        } else {
            stack(13165);
            stack(int8);
            IF_SETGRAPHIC();
            IF_SETCOLOUR(65280, int6);
            IF_SETCOLOUR(6776679, int5);
        };
    };
    return;
}