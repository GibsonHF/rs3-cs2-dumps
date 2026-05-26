//
function script2872(int0: number, int1: number, int2: number, int3: number, int4: number, int5: number, int6: number, int7: number, int8: number, int9: number, int10: number, int11: number, int12: number, int13: number, int14: number, int15: number): void {
    if ((varclient_1077 == true)) {
        IF_SETGRAPHIC(16939 as graphic, int0);
        script2878(int5, int9, int6, int8, int15, int11);
        IF_SETHIDE(true, int1);
        IF_SETHIDE(true, int2);
        IF_SETHIDE(true, int3);
        IF_SETHIDE(true, int4);
        IF_SETHIDE(true, int12);
        IF_SETHIDE(true, int13);
        IF_SETHIDE(true, int14);
        IF_SETHIDE(false, int5);
        IF_SETHIDE(false, int6);
        IF_SETHIDE(false, int7);
        IF_SETHIDE(false, int8);
        IF_SETHIDE(false, int15);
        script3683(int3, int4, int10, int1, int2, int11, int12);
        if ((varbitplayer_190 == 32767)) {
            IF_SETHIDE(false, int9);
        };
    } else {
        IF_SETGRAPHIC(16937 as graphic, int0);
        IF_SETHIDE(true, int5);
        IF_SETHIDE(true, int6);
        IF_SETHIDE(true, int7);
        IF_SETHIDE(true, int8);
        IF_SETHIDE(true, int9);
        IF_SETHIDE(true, int4);
        IF_SETHIDE(true, int15);
        IF_SETHIDE(false, int1);
        IF_SETHIDE(false, int2);
        IF_SETHIDE(false, int3);
        IF_SETHIDE(false, int12);
        IF_SETHIDE(false, int13);
        IF_SETHIDE(false, int14);
        script72(int2, int1, IF_GETSCROLLY(int1));
        script3680(int3, int4, int10, int1, int2, int11, int12);
    };
    varclient_2 = 0;
    return;
}