//
function script10517(): void {
    if ((varbitclient_44864 == 1)) {
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
                if ((int12 == 1)) {
                } else if ((int12 == 1011)) {
                    while (((int12 == 1) || (int12 == 1011))) {
                        [int22, int23, int24] = script10530(int2, int12);
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
                } else if ((int11 == 1)) {
                } else if ((int11 == 1011)) {
                    while (((int11 == 1) || (int11 == 1011))) {
                        [int22, int23, int24] = script10530(int2, int11);
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
    varbitclient_18940 = 255;
    varbitclient_18970 = 0;
    varbitclient_19181 = 0;
    varbitclient_19182 = 0;
    varbitclient_19177 = 0;
    varbitclient_19178 = 0;
    varbitclient_19179 = 0;
    varbitclient_19180 = 0;
    varbitclient_19183 = 0;
    varbitclient_32794 = 0;
    varbitclient_19773 = 0;
    varbitclient_19774 = 0;
    varbitclient_19769 = 0;
    varbitclient_19770 = 0;
    varbitclient_19771 = 0;
    varbitclient_19772 = 0;
    varbitclient_19775 = 0;
    varbitclient_32862 = 0;
    varbitclient_31588 = 0;
    varbitclient_31589 = 0;
    varbitclient_31584 = 0;
    varbitclient_31585 = 0;
    varbitclient_31586 = 0;
    varbitclient_31587 = 0;
    varbitclient_31590 = 0;
    varbitclient_32930 = 0;
    varbitclient_32066 = 0;
    varbitclient_32067 = 0;
    varbitclient_32062 = 0;
    varbitclient_32063 = 0;
    varbitclient_32064 = 0;
    varbitclient_32065 = 0;
    varbitclient_32068 = 0;
    varbitclient_32998 = 0;
    varbitclient_19477 = 0;
    varbitclient_19478 = 0;
    varbitclient_19473 = 0;
    varbitclient_19474 = 0;
    varbitclient_19475 = 0;
    varbitclient_19476 = 0;
    varbitclient_19479 = 0;
    varbitclient_32726 = 0;
    varclient_3145 = 0;
    varclient_3146 = 0;
    varclient_3141 = 0;
    varclient_3142 = 0;
    varclient_3143 = 0;
    varclient_3144 = 0;
    varclient_3147 = 0;
    varclient_5517 = 0;
    varbitclient_19265 = 0;
    varbitclient_19266 = 0;
    varbitclient_19261 = 0;
    varbitclient_19262 = 0;
    varbitclient_19263 = 0;
    varbitclient_19267 = 0;
    varbitclient_19264 = 0;
    varbitclient_32806 = 0;
    varbitclient_19857 = 0;
    varbitclient_19858 = 0;
    varbitclient_19853 = 0;
    varbitclient_19854 = 0;
    varbitclient_19855 = 0;
    varbitclient_19859 = 0;
    varbitclient_19856 = 0;
    varbitclient_32874 = 0;
    varbitclient_31672 = 0;
    varbitclient_31673 = 0;
    varbitclient_31668 = 0;
    varbitclient_31669 = 0;
    varbitclient_31670 = 0;
    varbitclient_31674 = 0;
    varbitclient_31671 = 0;
    varbitclient_32942 = 0;
    varbitclient_32150 = 0;
    varbitclient_32151 = 0;
    varbitclient_32146 = 0;
    varbitclient_32147 = 0;
    varbitclient_32148 = 0;
    varbitclient_32152 = 0;
    varbitclient_32149 = 0;
    varbitclient_33010 = 0;
    varbitclient_19561 = 0;
    varbitclient_19562 = 0;
    varbitclient_19557 = 0;
    varbitclient_19558 = 0;
    varbitclient_19559 = 0;
    varbitclient_19560 = 0;
    varbitclient_19563 = 0;
    varbitclient_32738 = 0;
    varclient_5583 = 0;
    varclient_5584 = 0;
    varclient_5579 = 0;
    varclient_5580 = 0;
    varclient_5581 = 0;
    varclient_5582 = 0;
    varclient_5585 = 0;
    varclient_5529 = 0;
    varbitclient_44864 = 1;
    return;
}