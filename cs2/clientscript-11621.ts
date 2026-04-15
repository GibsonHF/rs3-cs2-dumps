//
function script11621(int0: struct, int1: unknown_int, int2: int, int3: int, int4: component, int5: component, int6: component, int7: dbrow): void {
    IF_SETONTIMER(callback(), int4);
    if ((int2 != 0)) {
        var int2 = (int2 - 1);
        IF_SETONTIMER(callback(script11621, int0, int1, int2, int3, int4, int5, int6, int7), int4);
        return;
    };
    var int8 = 0;
    var int9 = 0;
    var int10 = 0;
    var int11 = 0;
    var int12 = 0;
    var int13 = 0;
    var int14 = 0;
    [int13, int9, int11, int8] = script16789(int0);
    if ((int7 != -1 as dbrow)) {
        if ((DB_GETROWTABLE(int7) != 254)) {
            script12478("Invalid table in positional data.");
            return;
        };
        int8 = dbrow_getfield(int7, 1040384, 0);
        int9 = dbrow_getfield(int7, 1040400, 0);
        int10 = dbrow_getfield(int7, 1040416, 0);
        int11 = dbrow_getfield(int7, 1040432, 0);
        int12 = dbrow_getfield(int7, 1040448, 0);
        int13 = dbrow_getfield(int7, 1040464, 0);
        int14 = 1;
    };
    var int15 = 0;
    switch (int1) {
        case 2: {
            if ((int7 == -1 as dbrow)) {
                int10 = 0;
                int12 = 0;
            };
            if (((IF_GETLAYER(int5) == comp(1594, 81)) && (int14 == 0))) {
                int13 = 450;
            };
            IF_SETHIDE(false, int5);
            IF_SETMODELANGLE(int8, int9, int10, int11, int12, int13, int5);
            if ((struct_getparam(int0, 7522) == true)) {
                script4533();
            };
            break;
        }
        case 5: {
            if ((int7 == -1 as dbrow)) {
                int8 = struct_getparam(int0, 8667);
                int9 = struct_getparam(int0, 2997);
                int10 = struct_getparam(int0, 8746);
                int11 = struct_getparam(int0, 8747);
                int12 = struct_getparam(int0, 8748);
                int13 = IF_GETMODELZOOM(int5);
            };
            IF_SETHIDE(false, int5);
            IF_SETMODELANGLE(int8, int9, int10, int11, int12, int13, int5);
            break;
        }
        case 4: {
            IF_SETHIDE(false, int5);
            if ((int7 == -1 as dbrow)) {
                int10 = 0;
                int12 = 0;
            };
            if (((IF_GETLAYER(int5) == comp(1594, 81)) && (int14 == 0))) {
                int13 = 600;
            };
            while ((int15 < int3)) {
                if ((CC_FINDBYCATEGORY(int5, 0, int15) == 1)) {
                    CC_SETMODELANGLE(int8, int9, int10, int11, int12, int13);
                };
                int15 = (int15 + 1);
            };
            break;
        }
        default: {
            IF_SETHIDE(false, int5);
            break;
        }
    };
    IF_SETHIDE(true, int6);
    switch (int0) {
        case 48842:
        case 48843:
        case 52364:
        case 50571:
        case 50572:
        case 50573:
        case 50574:
        case 50575:
        case 50576:
        case 50577:
        case 50578:
        case 50579:
        case 50580:
        case 47048:
        case 47046:
        case 47187:
        case 47085:
        case 47049:
        case 47047:
        case 49181:
        case 47184:
        case 2963:
        case 51282:
        case 2961:
        case 2964:
        case 51283:
        case 2962:
        case 51607:
        case 52412:
        case 52414:
        case 52413:
        case 32394:
        case 49609: {
            IF_SETONTIMER(callback(script18277, int0, int1, -1, int5, int4, int6, (SEQLENGTH(struct_getparam(int0, 2535)) + 1), int7), int4);
            break;
        }
        case 47045:
        case 47044:
        case 47185:
        case 47186: {
            IF_SETONTIMER(callback(script18277, int0, int1, -1, int5, int4, int6, 240, int7), int4);
            break;
        }
    };
    return;
}