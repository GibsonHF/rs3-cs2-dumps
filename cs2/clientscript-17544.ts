//
function script17544(int0: number, int1: number): void {
    var int2 = script18321(int0, 76742684);
    var int3 = script18321(int0, 76742676);
    var int4 = script18321(int0, 76742677);
    var int5 = script18321(int0, 76742679);
    var int6 = script18321(int0, 76742678);
    var int7 = script18321(int0, 76742673);
    var int8 = script18321(int0, 76742668);
    var int9 = script18321(int0, 76742680);
    var int10 = script18321(int0, 76742665);
    var int11 = script18321(int0, 76742681);
    var int12 = script18321(int0, 76742683);
    var int13 = script18321(int0, 76742682);
    var int14 = script18321(int0, 76742661);
    var int15 = script18321(int0, 76742686);
    var int16 = script18321(int0, 76742670);
    var int17 = script18321(int0, 76742671);
    var int18 = script18321(int0, 76742663);
    var int19 = script18321(int0, 76742664);
    var int20 = script18321(int0, 76742662);
    var int21 = script18321(int0, 76742687);
    var int22 = script18321(int0, 76742674);
    var int23 = 100;
    var int24 = varplayer_10946;
    var string0 = varclient_7157;
    if ((((int24 != -1 as struct) && (struct_getparam(int24, 8990) != -1 as struct)) && (int2 != 76742684))) {
        int24 = struct_getparam(int24, 8990);
        string0 = struct_getparam(int24, 8849);
    };
    var int25 = struct_getparam(int24, 8869);
    var int26 = struct_getparam(int24, 8870);
    var int27 = 10;
    var int28 = 125;
    var int29 = 200;
    var int30 = 300;
    var int31 = 400;
    var int32 = 500;
    if ((int25 == 1)) {
        int29 = 0;
        int30 = 100;
        int31 = 200;
        int32 = 300;
    };
    var int33 = SCALE((CLIENTCLOCK() - int1), int32, int32);
    if (((int25 == 0) && (int33 < int27))) {
        IF_SETHIDE(0, int5);
        IF_SETHIDE(0, int6);
        IF_SETMODELANIM(28171, int5);
        IF_SETMODELANIM(28123, int6);
    } else if (((int25 == 0) && (int33 == int28))) {
        IF_SETHIDE(0, int3);
        IF_SETHIDE(0, int4);
    } else if ((int33 == int29)) {
        if ((int25 == 0)) {
            IF_SETHIDE(1, int5);
            IF_SETHIDE(1, int6);
        };
        if (((int26 == 0) && (int24 != -1 as struct))) {
            IF_SETTEXT(string0, int21);
            IF_SETSIZE(MIN(400, (STRINGWIDTH(IF_GETTEXT(int21), 55) + 60)), 33, 0, 0, int22);
        };
    } else if ((((int26 == 0) && (int33 > int29)) && (int33 <= int30))) {
        int33 = (255 - SCALE(255, 100, (int33 - int29)));
        IF_SETTRANS(int33, int18);
        IF_SETTRANS(int33, int19);
        IF_SETTRANS(int33, int20);
        IF_SETTRANS(int33, int21);
    } else if (((int33 > int30) && (int33 < int31))) {
        int33 = (255 - SCALE(255, 100, (int33 - int30)));
        IF_SETTRANS(int33, int9);
        IF_SETTRANS(int33, int10);
        IF_SETTRANS(int33, int11);
        IF_SETTRANS(int33, int12);
        IF_SETTRANS(int33, int13);
        IF_SETTRANS(int33, int14);
        IF_SETTRANS(int33, int16);
        IF_SETTRANS(int33, int15);
        if ((int24 != -1 as struct)) {
            stack(struct_getparam(int24, 9156));
            stack(int14);
            IF_SETGRAPHIC();
            stack(int24);
            stack(8860);
            struct_getparam();
            IF_SETCOLOUR(stack(), int14);
            stack(int24);
            stack(8860);
            struct_getparam();
            IF_SETCOLOUR(stack(), int13);
            stack(int24);
            stack(8860);
            struct_getparam();
            IF_SETCOLOUR(stack(), int12);
            stack(int24);
            stack(9157);
            struct_getparam();
            if ((stack() != -1)) {
                IF_SETHIDE(0, int16);
                IF_SETCOLOUR(struct_getparam(int24, 9157), int16);
            };
            if ((struct_getparam(int24, 9155) != -1)) {
                int23 = IF_GETWIDTH(int17);
                IF_SETSIZE(struct_getparam(int24, 9155), 33, 0, 0, int17);
            };
        };
    } else if (((int33 > int31) && (int33 < int32))) {
        if ((int26 == 0)) {
            int33 = (int33 - int31);
            IF_SETMODELZOOM((2000 + SCALE(1500, 100, int33)), int3);
            IF_SETMODELZOOM((2000 + SCALE(1500, 100, int33)), int4);
            int33 = (255 - SCALE(255, 100, int33));
            if ((script17757() == 0)) {
                IF_SETTRANS((255 - int33), int18);
                IF_SETTRANS((255 - int33), int19);
                IF_SETTRANS((255 - int33), int20);
                IF_SETTRANS((255 - int33), int21);
            };
        };
        IF_SETHIDE(0, int7);
    } else if ((int33 >= int32)) {
        IF_SETHIDE(1, int3);
        IF_SETHIDE(1, int4);
        IF_SETHIDE(0, int8);
        if ((int24 != -1 as struct)) {
            IF_SETONVARTRANSMIT(callback(script17545, int0, 10937, 10938, 10939, 10940, 10941, 10942, 10943, 11535, 11536, 9), int12);
        };
        IF_SETONTIMER(callback(), int0);
    };
    return;
}