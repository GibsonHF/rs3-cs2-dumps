//
function script2872(int0: unknown_int, int1: component, int2: component, int3: component, int4: component, int5: unknown_int, int6: unknown_int, int7: unknown_int, int8: unknown_int, int9: component, int10: component, int11: component, int12: component, int13: unknown_int, int14: unknown_int, int15: unknown_int): void {
    if ((varclient_1077 == true)) {
        stack(16939);
        stack(int0);
        IF_SETGRAPHIC();
        script2878(int5, int9, int6, int8, int15, int11);
        IF_SETHIDE(1, int1);
        IF_SETHIDE(1, int2);
        IF_SETHIDE(1, int3);
        IF_SETHIDE(1, int4);
        IF_SETHIDE(1, int12);
        IF_SETHIDE(1, int13);
        IF_SETHIDE(1, int14);
        IF_SETHIDE(0, int5);
        IF_SETHIDE(0, int6);
        IF_SETHIDE(0, int7);
        IF_SETHIDE(0, int8);
        IF_SETHIDE(0, int15);
        script3683(int3, int4, int10, int1, int2, int11, int12);
        if ((varbitplayer_190 == 32767)) {
            IF_SETHIDE(false, int9);
        };
    } else {
        stack(16937);
        stack(int0);
        IF_SETGRAPHIC();
        IF_SETHIDE(1, int5);
        IF_SETHIDE(1, int6);
        IF_SETHIDE(1, int7);
        IF_SETHIDE(1, int8);
        IF_SETHIDE(1, int9);
        IF_SETHIDE(1, int4);
        IF_SETHIDE(1, int15);
        IF_SETHIDE(0, int1);
        IF_SETHIDE(0, int2);
        IF_SETHIDE(0, int3);
        IF_SETHIDE(0, int12);
        IF_SETHIDE(0, int13);
        IF_SETHIDE(0, int14);
        script72(int2, int1, IF_GETSCROLLY(int1));
        script3680(int3, int4, int10, int1, int2, int11, int12);
    };
    varclient_2 = 0;
    return;
}