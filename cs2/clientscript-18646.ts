//
function script18646(): void {
    if ((varbitclient_21706 == 1)) {
        return;
    };
    var int0 = 7710 as cs2enum;
    var int1 = (ENUM_GETOUTPUTCOUNT(int0) - 1);
    var int2 = 0;
    var int3 = 7717 as cs2enum;
    var int4 = (ENUM_GETOUTPUTCOUNT(int3) - 1);
    var int5 = 0;
    var int6 = -1 as struct;
    var int7 = 0;
    var int8 = 0;
    var int9 = 0;
    var int10 = 0;
    var int11 = 0;
    var int12 = 0;
    var int13 = 0;
    var int14 = 0;
    var int15 = 0;
    var int16 = 0;
    var int17 = 0;
    var int18 = 0;
    var int19 = 0;
    var int20 = 0;
    var int21 = 0;
    var int22 = 0;
    var int23 = 0;
    var int24 = 0;
    var int25 = 0;
    var int26 = 0;
    int2 = enum_getvalue(0, 0, int0, int1);
    var int27 = 0;
    while ((int2 > -1)) {
        int4 = (ENUM_GETOUTPUTCOUNT(int3) - 1);
        while ((int4 > -1)) {
            int5 = enum_getvalue(0, 0, int3, int4);
            int6 = script10405(int5);
            if ((struct_getparam(int6, 3521) == true)) {
                [int7, int8, int15, int15, int9, int10, int11, int12, int13, int14, int15] = script8701(int2, int5);
                if ((int12 == 37)) {
                } else if ((int12 == 38)) {
                    while (((int12 == 37) || (int12 == 38))) {
                        [int22, int23, int24] = script18679(int2, int12);
                        if (((int13 == 0) && (int24 == 1))) {
                            int13 = int24;
                        };
                        int12 = int23;
                        script8709(int2, int5, int7, int8, int9, int10, int11, int12, int13, int14);
                        if ((int12 != -1)) {
                            [int16, int17, int15, int15, int20, int21, int22, int23, int24, int25, int15] = script8701(int2, int12);
                            int22 = int5;
                            script8709(int2, int12, int16, int17, int20, int21, int22, int23, int24, int25);
                        };
                    };
                } else if ((int11 == 37)) {
                } else if ((int11 == 38)) {
                    while (((int11 == 37) || (int11 == 38))) {
                        [int22, int23, int24] = script18679(int2, int11);
                        if (((int13 == 0) && (int24 == 1))) {
                            int13 = int24;
                        };
                        int11 = int22;
                        script8709(int2, int5, int7, int8, int9, int10, int11, int12, int13, int14);
                        if ((int11 != -1)) {
                            [int16, int17, int15, int15, int20, int21, int22, int23, int24, int25, int15] = script8701(int2, int11);
                            int22 = int5;
                            script8709(int2, int11, int16, int17, int20, int21, int22, int23, int24, int25);
                        };
                    };
                };
            };
            int4 = (int4 - 1);
        };
        int1 = (int1 - 1);
        int2 = enum_getvalue(0, 0, int0, int1);
        if ((int1 == -1)) {
            if ((int27 == 0)) {
                int2 = 8;
            } else if ((int27 == 1)) {
                int2 = 9;
            };
            int27 = (int27 + 1);
        };
    };
    varbitclient_36539 = 0;
    varbitclient_36540 = 0;
    varbitclient_36535 = 0;
    varbitclient_36536 = 0;
    varbitclient_36537 = 0;
    varbitclient_36538 = 0;
    varbitclient_36541 = 0;
    varbitclient_36542 = 0;
    varbitclient_36603 = 0;
    varbitclient_36604 = 0;
    varbitclient_36599 = 0;
    varbitclient_36600 = 0;
    varbitclient_36601 = 0;
    varbitclient_36602 = 0;
    varbitclient_36605 = 0;
    varbitclient_36606 = 0;
    varbitclient_36667 = 0;
    varbitclient_36668 = 0;
    varbitclient_36663 = 0;
    varbitclient_36664 = 0;
    varbitclient_36665 = 0;
    varbitclient_36666 = 0;
    varbitclient_36669 = 0;
    varbitclient_36670 = 0;
    varbitclient_36731 = 0;
    varbitclient_36732 = 0;
    varbitclient_36727 = 0;
    varbitclient_36728 = 0;
    varbitclient_36729 = 0;
    varbitclient_36730 = 0;
    varbitclient_36733 = 0;
    varbitclient_36734 = 0;
    varbitclient_36475 = 0;
    varbitclient_36476 = 0;
    varbitclient_36471 = 0;
    varbitclient_36472 = 0;
    varbitclient_36473 = 0;
    varbitclient_36474 = 0;
    varbitclient_36477 = 0;
    varbitclient_36478 = 0;
    varclient_6124 = 0;
    varclient_6125 = 0;
    varclient_6120 = 0;
    varclient_6121 = 0;
    varclient_6122 = 0;
    varclient_6123 = 0;
    varclient_6126 = 0;
    varclient_6127 = 0;
    varbitclient_36547 = 0;
    varbitclient_36548 = 0;
    varbitclient_36543 = 0;
    varbitclient_36544 = 0;
    varbitclient_36545 = 0;
    varbitclient_36549 = 0;
    varbitclient_36546 = 0;
    varbitclient_36550 = 0;
    varbitclient_36611 = 0;
    varbitclient_36612 = 0;
    varbitclient_36607 = 0;
    varbitclient_36608 = 0;
    varbitclient_36609 = 0;
    varbitclient_36613 = 0;
    varbitclient_36610 = 0;
    varbitclient_36614 = 0;
    varbitclient_36675 = 0;
    varbitclient_36676 = 0;
    varbitclient_36671 = 0;
    varbitclient_36672 = 0;
    varbitclient_36673 = 0;
    varbitclient_36677 = 0;
    varbitclient_36674 = 0;
    varbitclient_36678 = 0;
    varbitclient_36739 = 0;
    varbitclient_36740 = 0;
    varbitclient_36735 = 0;
    varbitclient_36736 = 0;
    varbitclient_36737 = 0;
    varbitclient_36741 = 0;
    varbitclient_36738 = 0;
    varbitclient_36742 = 0;
    varbitclient_36483 = 0;
    varbitclient_36484 = 0;
    varbitclient_36479 = 0;
    varbitclient_36480 = 0;
    varbitclient_36481 = 0;
    varbitclient_36482 = 0;
    varbitclient_36485 = 0;
    varbitclient_36486 = 0;
    varclient_6132 = 0;
    varclient_6133 = 0;
    varclient_6128 = 0;
    varclient_6129 = 0;
    varclient_6130 = 0;
    varclient_6131 = 0;
    varclient_6134 = 0;
    varclient_6135 = 0;
    varbitclient_21706 = 1;
    return;
}