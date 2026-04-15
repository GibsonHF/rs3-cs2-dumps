//
function script8369(int0: int, int1: int, int2: int, int3: unknown_int): void {
    if ((script8874() == 0)) {
        script8306();
        return;
    };
    varclient_3467 = int0;
    varclient_4106 = -1;
    script8808();
    var int4 = script10405(int0);
    var int5 = script8418(int4, 0);
    var int6 = struct_getparam(int4, 3503);
    var int7 = struct_getparam(int4, 3506);
    var int8 = struct_getparam(int4, 3509);
    var int9 = script8372(int8, int0);
    var int10 = -1;
    var int11 = -1;
    var int12 = -1 as struct;
    var int13 = comp(-1, 65535);
    var int14 = comp(-1, 65535);
    var int15 = -1;
    var int16 = 0;
    var int17 = 0;
    var int18 = GET_MOUSEX();
    var int19 = GET_MOUSEY();
    var int20 = 0;
    var int21 = 0;
    if ((CC_FIND(int8, script8373(int9)) == 1)) {
        if (((int18 < (int1 - 5)) || (int18 > (int1 + 5)))) {
            int20 = 1;
        };
        if (((int19 < (int2 - 5)) || (int19 > (int2 + 5)))) {
            int21 = 1;
        };
        if (((int20 + int21) > 0)) {
            varclient_4107 = (script6355() - int1);
            script8368(int0, int7, 0, int3);
            int10 = script8371(int8, (int9 + 1));
            int11 = int10;
            if ((int10 == -1)) {
                int10 = script8371(int8, (int9 - 1));
            };
            if ((int10 != -1)) {
                int12 = script10405(int10);
                int13 = struct_getparam(int12, 3503);
                int14 = struct_getparam(int12, 3509);
                script8387(IF_GETX(int6), IF_GETY(int6), IF_GETWIDTH(int6), IF_GETHEIGHT(int6), int10);
                IF_SETHIDE(false, int13);
                script8355(int0, int10);
                script8358(int10, int9);
                script8705(int10);
                script8390(int10);
                if ((int11 == -1)) {
                    script8370(int10, (int9 - 1));
                    script8359(int10, script8374(int14), (int9 - 1));
                } else {
                    script8370(int10, int9);
                    script8359(int10, script8374(int14), int9);
                };
                varclient_3466 = int10;
                varclient_4106 = int10;
            };
            script8361(int0);
            if ((script8309(int0) == 1)) {
                script8378(0, int0);
            } else {
                script8390(int0);
            };
            IF_SENDTOFRONT(int6);
            script8157(int0);
        };
    } else {
        script8361(int0);
    };
    return;
}