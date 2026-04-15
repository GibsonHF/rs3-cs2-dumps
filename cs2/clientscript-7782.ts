//
function script7782(int0: int, int1: int, int2: int, int3: obj, int4: int, int5: inv, int6: unknown_int, int7: int, int8: unknown_int): [int, int, int] {
    var int9 = int4;
    var int10 = int3;
    var int11 = -1 as obj;
    var int12 = int4;
    var int13 = 0;
    var int14 = 0;
    switch (int3) {
        case 44551: {
            int9 = MIN(int9, script7783(39822 as obj, int4, 1, int6, int7, int8));
            if ((int9 < int4)) {
                int14 = 1;
            };
            int9 = MIN(int9, script7785(106, int4, 10));
            int9 = MIN(int9, script7785(120, int4, 50));
            int9 = MIN(int9, script7785(21, int4, 750));
            if (((int14 == 0) && (int9 < int4))) {
                int14 = 2;
            };
            if ((int9 > 0)) {
                int10 = 39822 as obj;
                int12 = script12422(int9, 1, 1);
                script7811(106, script12422(int9, 1, 10), 0);
                script7811(120, script12422(int9, 1, 50), 0);
                script7811(21, script12422(int9, 1, 750), 0);
            };
            break;
        }
        case 47515: {
            int9 = MIN(int9, script7783(6573 as obj, int4, 1, int6, int7, int8));
            int9 = MIN(int9, script7783(47506 as obj, int4, 50, int6, int7, int8));
            if ((int9 < int4)) {
                int14 = 1;
            };
            int9 = MIN(int9, script7785(136, int4, 30));
            if (((int14 == 0) && (int9 < int4))) {
                int14 = 2;
            };
            if ((int9 > 0)) {
                int10 = 6573 as obj;
                int12 = script12422(int9, 1, 1);
                int11 = 47506 as obj;
                int13 = script12422(int9, 1, 50);
                script7811(136, script12422(int9, 1, 30), 0);
            };
            break;
        }
        case 47511: {
            int9 = MIN(int9, script7783(6573 as obj, int4, 1, int6, int7, int8));
            int9 = MIN(int9, script7783(47506 as obj, int4, 50, int6, int7, int8));
            if ((int9 < int4)) {
                int14 = 1;
            };
            int9 = MIN(int9, script7785(135, int4, 30));
            if (((int14 == 0) && (int9 < int4))) {
                int14 = 2;
            };
            if ((int9 > 0)) {
                int10 = 6573 as obj;
                int12 = script12422(int9, 1, 1);
                int11 = 47506 as obj;
                int13 = script12422(int9, 1, 50);
                script7811(135, script12422(int9, 1, 30), 0);
            };
            break;
        }
        case 47507: {
            int9 = MIN(int9, script7783(6573 as obj, int4, 1, int6, int7, int8));
            int9 = MIN(int9, script7783(47506 as obj, int4, 50, int6, int7, int8));
            if ((int9 < int4)) {
                int14 = 1;
            };
            int9 = MIN(int9, script7785(134, int4, 30));
            if (((int14 == 0) && (int9 < int4))) {
                int14 = 2;
            };
            if ((int9 > 0)) {
                int10 = 6573 as obj;
                int12 = script12422(int9, 1, 1);
                int11 = 47506 as obj;
                int13 = script12422(int9, 1, 50);
                script7811(134, script12422(int9, 1, 30), 0);
            };
            break;
        }
    };
    if ((int9 > 0)) {
        script7786("This item is no longer available. Please accept a refund instead.");
    };
    if ((int6 == 1)) {
        if ((int9 > 0)) {
            script7788(int5, int3, int9);
            if ((int10 != -1 as obj)) {
                script14149(int10, int12);
                if ((int11 != -1 as obj)) {
                    script14149(int11, int13);
                };
            };
        };
        if ((int0 == 0)) {
            if (((int14 == 1) || (int9 < int4))) {
                script7786("You have ran out of bank space. Please make more room.");
                script7787(10046, 1, 0, 100, 256);
                var int0 = 1;
            } else {
                script7787(44027, 1, 0, 50, 256);
            };
        };
    } else {
        if ((int9 > 0)) {
            script7788(int5, int3, int9);
            if ((int10 != -1 as obj)) {
                if ((int8 == 1)) {
                    int10 = OC_CERT(int10);
                };
                script7792(93 as inv, OC_CERT(int10), int12);
                if ((int11 != -1 as obj)) {
                    if ((int8 == 1)) {
                        int11 = OC_CERT(int11);
                    };
                    script7792(93 as inv, OC_CERT(int11), int13);
                };
            };
        };
        if ((int0 == 0)) {
            script7787(9704, 1, 0, 50, 256);
            if (((int14 == 1) || ((int14 == 0) && (int9 < int4)))) {
                script7787(10046, 1, 0, 100, 256);
                script7786("You do not have enough room to store any more items. Please make more room.");
                int0 = 1;
            };
        };
    };
    if (((int0 == 0) && (int14 == 2))) {
        script7787(10046, 1, 0, 100, 256);
        script7786("You do not have enough room in your invention pouch to hold all the components you were due to be refunded. Please make more room.");
        var int2 = 1;
    } else if (((int1 == 0) && (int14 == 3))) {
        script7787(10046, 1, 0, 100, 256);
        script7786("You do not have enough room in your currency pouch or inventory to hold the coins you were due to be refunded. Please make more room.");
        var int1 = 1;
    };
    return [int0, int1, int2];
}