//
function script2973(int0: struct): int {
    var int1 = script2526(int0);
    switch (int0) {
        case 44852: {
            return CLIENTOPTION_GET(33);
        }
        case 1451: {
            if (((varclient_6785 == 3) && (CLIENTOPTION_GET(29) == 1))) {
                return 1;
            };
            return 0;
        }
        case 41749: {
            return MAX(100000, int1);
        }
        case 41750: {
            return MAX(30000, int1);
        }
        case 41598: {
            if ((varbitplayer_27168 == 1)) {
                return 0;
            };
            return script9670(varbitplayer_21685, 0);
        }
        case 41599: {
            if ((varbitplayer_27168 == 1)) {
                return 0;
            };
            return script9670(varbitplayer_21685, 1);
        }
        case 41734: {
            if ((varbitplayer_28385 == 0)) {
                return 0;
            };
            return (1 + script3345());
        }
        case 41766: {
            return varclient_2827;
        }
        case 41767: {
            return varclient_2828;
        }
        case 41768: {
            return varclient_2829;
        }
        case 41769: {
            return varclient_2830;
        }
        case 41770: {
            return varclient_6954;
        }
        case 41771: {
            return varclient_6955;
        }
        case 4195: {
            return varclient_6565;
        }
        case 41493: {
            return CLIENTOPTION_GET(5);
        }
        case 830: {
            return CLIENTOPTION_GET(16);
        }
        case 33102: {
            return varclient_3698;
        }
        case 33101: {
            return CLIENTOPTION_GET(8);
        }
        case 38730: {
            if ((enum_hasoutput(0, 14566 as cs2enum, CLIENTOPTION_GET(13)) == 0)) {
                CLIENTOPTION_SET(13, enum_getvalue(0, 0, 14566 as cs2enum, 1));
                return enum_getvalue(0, 0, 14566 as cs2enum, 1);
            };
            return enum_getreverseindex(0, 0, 14566 as cs2enum, CLIENTOPTION_GET(13), 0);
        }
        case 963: {
            if ((CLIENTOPTION_GET(21) == 0)) {
                return 0;
            };
            return 1;
        }
        case 34879: {
            return CLIENTOPTION_GET(1);
        }
        case 33103: {
            return CLIENTOPTION_GET(2);
        }
        case 831: {
            return CLIENTOPTION_GET(10);
        }
        case 843: {
            return CLIENTOPTION_GET(9);
        }
        case 33092: {
            return CLIENTOPTION_GET(19);
        }
        case 33093: {
            return CLIENTOPTION_GET(20);
        }
        case 33097: {
            return CLIENTOPTION_GET(0);
        }
        case 838: {
            if ((CLIENTOPTION_GET(12) > 1)) {
                CLIENTOPTION_SET(12, 1);
                return 1;
            };
            return CLIENTOPTION_GET(12);
        }
        case 33100: {
            return CLIENTOPTION_GET(4);
        }
        case 33096: {
            return CLIENTOPTION_GET(15);
        }
        case 11519: {
            return CLIENTOPTION_GET(7);
        }
        case 11516: {
            return CLIENTOPTION_GET(30);
        }
        case 11518: {
            return CLIENTOPTION_GET(29);
        }
        case 11517: {
            return CLIENTOPTION_GET(31);
        }
        case 40647: {
            return CLIENTOPTION_GET(32);
        }
        case 6810: {
            return CLIENTOPTION_GET(37);
        }
        case 1334: {
            return CLIENTOPTION_GET(36);
        }
        case 52415: {
            return CLIENTOPTION_GET(42);
        }
        case 45811: {
            return script11748(2292 as dbrow);
        }
        case 45812: {
            return script11748(2293 as dbrow);
        }
        case 45813: {
            return script11748(2294 as dbrow);
        }
        case 45814: {
            return script11748(2295 as dbrow);
        }
        case 45815: {
            return script11748(2296 as dbrow);
        }
        case 45816: {
            return script11748(2628 as dbrow);
        }
        case 45817: {
            return script11748(4668 as dbrow);
        }
        case 45819: {
            return script11748(4671 as dbrow);
        }
        case 45820: {
            return script11748(4672 as dbrow);
        }
        case 45821: {
            return script11748(4673 as dbrow);
        }
        case 45822: {
            return script11748(4674 as dbrow);
        }
        case 4299: {
            return CLIENTOPTION_GET(35);
        }
    };
    if (((struct_getparam(int0, 9208) != -1) && (unk10986(struct_getparam(int0, 9208)) == 1))) {
        return script19377(int0);
    };
    return int1;
}