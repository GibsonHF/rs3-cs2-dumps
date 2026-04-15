//
function script7780(): void {
    var int0 = script16161();
    var int1 = struct_getparam(int0, 8205);
    if (((int1 != 0) && (int1 != varclient_1928))) {
        varclient_1928 = int1;
    };
    var int2 = struct_getparam(int0, 7983);
    if ((int0 != -1 as struct)) {
        switch (int0) {
            case 12006: {
                if ((varbitplayer_28986 == 1)) {
                    int2 = 45615 as struct;
                };
                break;
            }
            case 19622: {
                if ((script16682() == true)) {
                    int2 = 19624 as struct;
                };
                if ((script16651() == 1)) {
                    int2 = 7070 as struct;
                };
                break;
            }
            default: {
                int2 = struct_getparam(int0, 7983);
                break;
            }
        };
    };
    if ((int2 == -1 as struct)) {
        return;
    };
    var int3 = struct_getparam(int2, 7984);
    IF_SETHIDE(true, comp(1253, 30));
    IF_SETHIDE(true, comp(1253, 20));
    IF_SETHIDE(true, comp(1253, 25));
    IF_SETHIDE(true, comp(1253, 15));
    IF_SETHIDE(true, comp(1253, 10));
    if ((int3 < 1)) {
        return;
    };
    var int4 = struct_getparam(int2, 8005);
    var int5 = 0;
    var int6 = 0;
    var int7 = 0;
    var int8 = 0;
    var int9 = 0;
    var int10 = 0;
    var int11 = 0;
    var int12 = 0;
    var int13 = 0;
    var int14 = -1 as material;
    if ((int4 == 1)) {
        int5 = struct_getparam(int2, 8006);
        int6 = struct_getparam(int2, 8007);
        int7 = struct_getparam(int2, 8008);
        int8 = struct_getparam(int2, 8009);
        int9 = struct_getparam(int2, 8010);
        int10 = struct_getparam(int2, 8011);
        int11 = struct_getparam(int2, 8012);
        int12 = struct_getparam(int2, 8013);
        int13 = struct_getparam(int2, 8014);
        int14 = struct_getparam(int2, 8015);
    };
    var int15 = comp(-1, 65535);
    var int16 = comp(-1, 65535);
    var int17 = comp(-1, 65535);
    var int18 = comp(-1, 65535);
    var string0 = "";
    var int19 = -1 as model;
    var int20 = -1;
    var int21 = -1;
    var int22 = -1;
    var int23 = -1;
    var int24 = -1 as material;
    var int25 = -1 as material;
    var int26 = -1;
    var int27 = -1;
    var int28 = 0;
    var int29 = 0;
    var int30 = 0;
    var int31 = 0;
    var int32 = 0;
    while ((++int28 <= int3)) {
        switch (int28) {
            case 1: {
                int15 = comp(1253, 30);
                int16 = comp(1253, 31);
                int17 = comp(1253, 33);
                int18 = comp(1253, 32);
                string0 = struct_getparam(int2, 8575);
                int19 = struct_getparam(int2, 7985);
                int20 = struct_getparam(int2, 8607);
                int21 = struct_getparam(int2, 8608);
                int22 = struct_getparam(int2, 8609);
                int23 = struct_getparam(int2, 8610);
                int24 = struct_getparam(int2, 8576);
                int25 = struct_getparam(int2, 8577);
                int26 = struct_getparam(int2, 7987);
                int27 = struct_getparam(int2, 7988);
                int29 = struct_getparam(int2, 9277);
                int30 = struct_getparam(int2, 9278);
                int31 = struct_getparam(int2, 9279);
                int32 = struct_getparam(int2, 9280);
                break;
            }
            case 2: {
                int15 = comp(1253, 20);
                int16 = comp(1253, 21);
                int17 = comp(1253, 23);
                int18 = comp(1253, 22);
                string0 = struct_getparam(int2, 8578);
                int19 = struct_getparam(int2, 7989);
                int20 = struct_getparam(int2, 8611);
                int21 = struct_getparam(int2, 8612);
                int22 = struct_getparam(int2, 8613);
                int23 = struct_getparam(int2, 8614);
                int24 = struct_getparam(int2, 8579);
                int25 = struct_getparam(int2, 8580);
                int26 = struct_getparam(int2, 7991);
                int27 = struct_getparam(int2, 7992);
                int29 = struct_getparam(int2, 9281);
                int30 = struct_getparam(int2, 9282);
                int31 = struct_getparam(int2, 9283);
                int32 = struct_getparam(int2, 9284);
                break;
            }
            case 3: {
                int15 = comp(1253, 25);
                int16 = comp(1253, 26);
                int17 = comp(1253, 28);
                int18 = comp(1253, 27);
                string0 = struct_getparam(int2, 8581);
                int19 = struct_getparam(int2, 7993);
                int20 = struct_getparam(int2, 8615);
                int21 = struct_getparam(int2, 8616);
                int22 = struct_getparam(int2, 8617);
                int23 = struct_getparam(int2, 8618);
                int24 = struct_getparam(int2, 8582);
                int25 = struct_getparam(int2, 8583);
                int26 = struct_getparam(int2, 7995);
                int27 = struct_getparam(int2, 7996);
                int29 = struct_getparam(int2, 9285);
                int30 = struct_getparam(int2, 9286);
                int31 = struct_getparam(int2, 9287);
                int32 = struct_getparam(int2, 9288);
                break;
            }
            case 4: {
                int15 = comp(1253, 15);
                int16 = comp(1253, 16);
                int17 = comp(1253, 18);
                int18 = comp(1253, 17);
                string0 = struct_getparam(int2, 8584);
                int19 = struct_getparam(int2, 7997);
                int20 = struct_getparam(int2, 8619);
                int21 = struct_getparam(int2, 8620);
                int22 = struct_getparam(int2, 8621);
                int23 = struct_getparam(int2, 8622);
                int24 = struct_getparam(int2, 8585);
                int25 = struct_getparam(int2, 8586);
                int26 = struct_getparam(int2, 7999);
                int27 = struct_getparam(int2, 8000);
                int29 = struct_getparam(int2, 9289);
                int30 = struct_getparam(int2, 9290);
                int31 = struct_getparam(int2, 9291);
                int32 = struct_getparam(int2, 9292);
                break;
            }
            case 5: {
                int15 = comp(1253, 10);
                int16 = comp(1253, 11);
                int17 = comp(1253, 13);
                int18 = comp(1253, 12);
                string0 = struct_getparam(int2, 8587);
                int19 = struct_getparam(int2, 8001);
                int20 = struct_getparam(int2, 8623);
                int21 = struct_getparam(int2, 8624);
                int22 = struct_getparam(int2, 8625);
                int23 = struct_getparam(int2, 8626);
                int24 = struct_getparam(int2, 8588);
                int25 = struct_getparam(int2, 8589);
                int26 = struct_getparam(int2, 8003);
                int27 = struct_getparam(int2, 8004);
                int29 = struct_getparam(int2, 9293);
                int30 = struct_getparam(int2, 9294);
                int31 = struct_getparam(int2, 9295);
                int32 = struct_getparam(int2, 9296);
                break;
            }
        };
        IF_SETHIDE(false, int15);
        if ((int19 != -1 as model)) {
            IF_SETMODEL(int19, int16);
        };
        if (((((int20 != -1) && (int21 != -1)) && (int22 != -1)) && (int23 != -1))) {
            IF_SETMODELANGLE(0, 0, int21, int22, int23, int20, int16);
        } else if ((int20 != -1)) {
            IF_SETMODELZOOM(int20, int16);
        };
        if (((int24 != -1 as material) && (int25 != -1 as material))) {
            IF_SETRETEX(0, int24, int25, int16);
        };
        if (((int26 != -1) && (int27 != -1))) {
            IF_SETPOSITION(int26, int27, 0, 0, int15);
        };
        if ((int4 == 1)) {
            IF_SETMODELLIGHTING(int5, int6, int7, int8, int9, int10, int11, int12, int13, int14, int16);
        };
        IF_SETOP(1, struct_getparam(int2, 7990), int17);
        IF_SETOPBASE(string0, int17);
        IF_SETPOSITION(int29, int30, 0, 0, int18);
        IF_SETSIZE(int31, int32, 0, 0, int18);
    };
    return;
}