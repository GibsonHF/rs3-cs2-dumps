//
function script20659(int0: struct, int1: component, int2: component, int3: component, int4: component, int5: unknown_int, int6: dbrow, int7: int): void {
    var int8 = struct_getparam(int0, 2536);
    var int9 = struct_getparam(int0, 2537);
    var int10 = struct_getparam(int0, 2538);
    var int11 = struct_getparam(int0, 2539);
    var int12 = struct_getparam(int0, 4295);
    var int13 = struct_getparam(int0, 4296);
    var int14 = struct_getparam(int0, 3363);
    var int15 = struct_getparam(int0, 4267);
    var int16 = struct_getparam(int0, 9251);
    var int17 = struct_getparam(int0, 5166);
    var int18 = struct_getparam(int0, 5167);
    var int19 = 0;
    CC_DELETEALL(int2);
    IF_SETHIDE(false, int2);
    if (((int17 != -1 as cs2enum) && (int18 != -1 as seq))) {
        int19 = script18121(int17, int18, int19, int2, int7);
    } else {
        if (((int14 == 0) && (int16 == 0))) {
            int19 = script11616(int0, int19, int2);
        };
        if (((int8 != -1 as seq) && (int9 != -1 as model))) {
            int19 = script11617(int8, int9, int19, int2);
        };
        if (((int10 != -1 as seq) && (int11 != -1 as model))) {
            int19 = script11617(int10, int11, int19, int2);
        };
        if (((int12 != -1 as seq) && (int13 != -1 as model))) {
            int19 = script11617(int12, int13, int19, int2);
        };
        if (((int14 == 1) && (int16 == 0))) {
            int19 = script11616(int0, int19, int2);
        };
    };
    if ((int1 != comp(-1, 65535))) {
        if ((int15 == 0)) {
            IF_SETDRAGGABLE(IF_GETLAYER(int1), -1, int1);
            IF_SETONDRAG(callback(script9319, int1, int2, 0, int19), int1);
            IF_SETONDRAGCOMPLETE(callback(script9620, int1, int2, 0, int19), int1);
            IF_SETMOUSEOVERCURSOR(189, int1);
        } else {
            script11620(int1);
        };
    };
    IF_SETONTIMER(callback(script11621, int0, 4, int5, int19, int3, int2, int4, int6), int3);
    return;
}