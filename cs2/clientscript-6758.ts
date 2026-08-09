//
function script6758(int0: number, int1: number, int2: number, int3: number, int4: number, int5: number, int6: number, int7: number, int8: number): void {
    var int9 = -1;
    var int10 = -1;
    IF_SETHIDE(false, int4);
    if ((int2 > 0)) {
        if ((int2 < 60)) {
            IF_SETGRAPHIC(enum_getvalue(0, 23, 6155 as cs2enum, int2), int7);
            IF_SETTEXT(enum_getvalue(0, 36, 108 as cs2enum, int2), int5);
            IF_SETTEXT(inttostring(int3, 10), int6);
            if ((STAT_BASE(enum_getvalue(0, 17, 681, int2)) < int3)) {
                IF_SETGRAPHIC(13166 as graphic, int8);
                IF_SETCOLOUR(16711680, int6);
                IF_SETCOLOUR(9803157, int5);
                IF_SETONMOUSEOVER(callback(script6759, -2147483645), int5);
                IF_SETONMOUSELEAVE(callback(script6760, -2147483645), int5);
            } else {
                IF_SETGRAPHIC(13165 as graphic, int8);
                IF_SETCOLOUR(65280, int6);
                IF_SETCOLOUR(6776679, int5);
            };
        } else if ((int2 == 60)) {
            int9 = script5795(int3);
            if ((int9 != -1)) {
                IF_SETGRAPHIC(4291 as graphic, int7);
                IF_SETTEXT(struct_getparam(int9, 1266), int5);
                IF_SETTEXT("", int6);
                if ((script3227(int3) != 2)) {
                    IF_SETGRAPHIC(13166 as graphic, int8);
                    IF_SETCOLOUR(16711680, int6);
                    IF_SETCOLOUR(9803157, int5);
                    IF_SETONMOUSEOVER(callback(script6759, -2147483645), int5);
                    IF_SETONMOUSELEAVE(callback(script6760, -2147483645), int5);
                } else {
                    IF_SETGRAPHIC(13165 as graphic, int8);
                    IF_SETCOLOUR(65280, int6);
                    IF_SETCOLOUR(6776679, int5);
                };
            };
        } else if ((int2 == 61)) {
            int10 = enum_getvalue(0, 3, 2252, int3);
            IF_SETGRAPHIC(13168 as graphic, int7);
            IF_SETTEXT(script2103(int10), int5);
            IF_SETTEXT("", int6);
            if ((script2193(int10) != 2)) {
                IF_SETGRAPHIC(13166 as graphic, int8);
                IF_SETCOLOUR(16711680, int6);
                IF_SETCOLOUR(9803157, int5);
                IF_SETONMOUSEOVER(callback(script6759, -2147483645), int5);
                IF_SETONMOUSELEAVE(callback(script6760, -2147483645), int5);
            } else {
                IF_SETGRAPHIC(13165 as graphic, int8);
                IF_SETCOLOUR(65280, int6);
                IF_SETCOLOUR(6776679, int5);
            };
        } else if ((int2 == 62)) {
            IF_SETGRAPHIC(13152 as graphic, int7);
            IF_SETTEXT(REMOVETAGS(script3223(int0, int1)), int5);
            IF_SETTEXT("", int6);
            if ((script5812(int0, int1) == 0)) {
                IF_SETGRAPHIC(13166 as graphic, int8);
                IF_SETCOLOUR(16711680, int6);
                IF_SETCOLOUR(9803157, int5);
            } else {
                IF_SETGRAPHIC(13165 as graphic, int8);
                IF_SETCOLOUR(65280, int6);
                IF_SETCOLOUR(6776679, int5);
            };
        };
    } else if ((int2 == 60)) {
        int9 = script5795(int3);
        if ((int9 != -1)) {
            IF_SETGRAPHIC(4291 as graphic, int7);
            IF_SETTEXT(struct_getparam(int9, 1266), int5);
            IF_SETTEXT("", int6);
            if ((script3227(int3) != 2)) {
                IF_SETGRAPHIC(13166 as graphic, int8);
                IF_SETCOLOUR(16711680, int6);
                IF_SETCOLOUR(9803157, int5);
                IF_SETONMOUSEOVER(callback(script6759, -2147483645), int5);
                IF_SETONMOUSELEAVE(callback(script6760, -2147483645), int5);
            } else {
                IF_SETGRAPHIC(13165 as graphic, int8);
                IF_SETCOLOUR(65280, int6);
                IF_SETCOLOUR(6776679, int5);
            };
        };
    } else if ((int2 == 61)) {
        int10 = enum_getvalue(0, 3, 2252, int3);
        IF_SETGRAPHIC(13168 as graphic, int7);
        IF_SETTEXT(script2103(int10), int5);
        IF_SETTEXT("", int6);
        if ((script2193(int10) != 2)) {
            IF_SETGRAPHIC(13166 as graphic, int8);
            IF_SETCOLOUR(16711680, int6);
            IF_SETCOLOUR(9803157, int5);
            IF_SETONMOUSEOVER(callback(script6759, -2147483645), int5);
            IF_SETONMOUSELEAVE(callback(script6760, -2147483645), int5);
        } else {
            IF_SETGRAPHIC(13165 as graphic, int8);
            IF_SETCOLOUR(65280, int6);
            IF_SETCOLOUR(6776679, int5);
        };
    } else if ((int2 == 62)) {
        IF_SETGRAPHIC(13152 as graphic, int7);
        IF_SETTEXT(REMOVETAGS(script3223(int0, int1)), int5);
        IF_SETTEXT("", int6);
        if ((script5812(int0, int1) == 0)) {
            IF_SETGRAPHIC(13166 as graphic, int8);
            IF_SETCOLOUR(16711680, int6);
            IF_SETCOLOUR(9803157, int5);
        } else {
            IF_SETGRAPHIC(13165 as graphic, int8);
            IF_SETCOLOUR(65280, int6);
            IF_SETCOLOUR(6776679, int5);
        };
    };
    return;
}