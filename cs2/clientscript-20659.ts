//
function script20659(int0: number, int1: number, int2: number, int3: number, int4: number, int5: number, int6: number, int7: number): void {
    var int8 = struct_getparam(int0, 2536);
    var int9 = struct_getparam(int0, 2537);
    var int10 = struct_getparam(int0, 8677);
    var int11 = struct_getparam(int0, 8678);
    var int12 = struct_getparam(int0, 1073);
    var int13 = struct_getparam(int0, 1074);
    var int14 = struct_getparam(int0, 1075);
    var int15 = struct_getparam(int0, 1076);
    var int16 = struct_getparam(int0, 2538);
    var int17 = struct_getparam(int0, 2539);
    var int18 = struct_getparam(int0, 4295);
    var int19 = struct_getparam(int0, 4296);
    var int20 = struct_getparam(int0, 3363);
    var int21 = struct_getparam(int0, 4267);
    var int22 = struct_getparam(int0, 9251);
    var int23 = struct_getparam(int0, 5166);
    var int24 = struct_getparam(int0, 5167);
    var int25 = 0;
    CC_DELETEALL(int2);
    IF_SETHIDE(0, int2);
    if (((int23 != -1 as cs2enum) && (int24 != -1 as seq))) {
        int25 = script18121(int23, int24, int25, int2, int7);
    } else {
        if (((int20 == 0) && (int22 == 0))) {
            int25 = script11616(int0, int25, int2);
        };
        if (((int8 != -1 as seq) && (int9 != -1 as model))) {
            int25 = script11617(int8, int9, int25, int2, int10, int11, int12, int13, int14, int15);
        };
        if (((int16 != -1 as seq) && (int17 != -1 as model))) {
            int25 = script11617(int16, int17, int25, int2, -1 as material, -1 as material, -1, -1, -1, -1);
        };
        if (((int18 != -1 as seq) && (int19 != -1 as model))) {
            int25 = script11617(int18, int19, int25, int2, -1 as material, -1 as material, -1, -1, -1, -1);
        };
        if (((int20 == 1) && (int22 == 0))) {
            int25 = script11616(int0, int25, int2);
        };
    };
    if ((int1 != -1)) {
        if ((int21 == 0)) {
            IF_SETDRAGGABLE(IF_GETLAYER(int1), -1, int1);
            IF_SETONDRAG(callback(script9319, int1, int2, 0, int25), int1);
            IF_SETONDRAGCOMPLETE(callback(script9620, int1, int2, 0, int25), int1);
            IF_SETMOUSEOVERCURSOR(189, int1);
        } else {
            script11620(int1);
        };
    };
    IF_SETONTIMER(callback(script11621, int0, 4, int5, int25, int3, int2, int4, int6), int3);
    return;
}