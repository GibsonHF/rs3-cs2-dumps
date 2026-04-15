//
function script13281(int0: struct): int {
    if ((int0 == -1 as struct)) {
        script12478("[cheevo_get_progress] - Achievement struct is NULL! Should never be null");
        return -1;
    };
    var int1 = 0;
    var int2 = -1;
    var int3 = 0;
    var int4 = -1;
    var int5 = struct_getparam(int0, 6798);
    switch (int5) {
        case 1: {
            switch (script14503(int0)) {
                case 0:
                case 1: {
                    return 0;
                }
                case 2: {
                    return 1;
                }
            };
            break;
        }
        case 2: {
            switch (script14516(int0)) {
                case 0:
                case 1: {
                    return 0;
                }
                case 2: {
                    return 1;
                }
            };
            break;
        }
    };
    var int6 = 0;
    var int7 = 0;
    var int8 = struct_getparam(int0, 6413);
    var string0 = "";
    switch (int8) {
        case 349:
        case 4089:
        case 4090:
        case 4091:
        case 4092: {
            script12478(`[cheevo_get_progress] - Magic number ${inttostring(int8, 10)}`);
            return -1;
        }
        case 0: {
            return varbitplayer_15818;
        }
        case 1: {
            return varbitplayer_15819;
        }
        case 2: {
            return varbitplayer_15820;
        }
        case 3: {
            return varbitplayer_15821;
        }
        case 4: {
            return varbitplayer_15822;
        }
        case 5: {
            return varbitplayer_15823;
        }
        case 6: {
            return varbitplayer_15824;
        }
        case 7: {
            return varbitplayer_15825;
        }
        case 8: {
            return varbitplayer_15826;
        }
        case 9: {
            return varbitplayer_15827;
        }
        case 10: {
            return varbitplayer_15828;
        }
        case 11: {
            return varbitplayer_15829;
        }
        case 12: {
            return varbitplayer_15830;
        }
        case 13: {
            return varbitplayer_15831;
        }
        case 14: {
            return varbitplayer_15832;
        }
        case 15: {
            return varbitplayer_15833;
        }
        case 16: {
            return varbitplayer_15834;
        }
        case 17: {
            return varbitplayer_15835;
        }
        case 18: {
            return varbitplayer_15836;
        }
        case 19: {
            return varbitplayer_15837;
        }
        case 20: {
            return varbitplayer_15838;
        }
        case 21: {
            return varbitplayer_15839;
        }
        case 22: {
            return varbitplayer_15840;
        }
        case 23: {
            return varbitplayer_15842;
        }
        case 24: {
            return varbitplayer_15843;
        }
        case 25: {
            return varbitplayer_15844;
        }
        case 26: {
            return varbitplayer_15845;
        }
        case 27: {
            return varbitplayer_15846;
        }
        case 28: {
            return varbitplayer_15847;
        }
        case 29: {
            return varbitplayer_15848;
        }
        case 30: {
            return varbitplayer_15849;
        }
        case 31: {
            return varbitplayer_15850;
        }
        case 32: {
            return varbitplayer_15851;
        }
        case 33: {
            return varbitplayer_15852;
        }
        case 34: {
            return varbitplayer_15853;
        }
        case 35: {
            return varbitplayer_15854;
        }
        case 36: {
            return varbitplayer_15855;
        }
        case 37: {
            return varbitplayer_15856;
        }
        case 38: {
            return varbitplayer_15857;
        }
        case 39: {
            return varbitplayer_15859;
        }
        case 40: {
            return varbitplayer_15860;
        }
        case 41: {
            return varbitplayer_15861;
        }
        case 42: {
            return varbitplayer_15862;
        }
        case 43: {
            return varbitplayer_15863;
        }
        case 44: {
            return varbitplayer_15864;
        }
        case 45: {
            return varbitplayer_15865;
        }
        case 46: {
            return varbitplayer_15866;
        }
        case 47: {
            return varbitplayer_15867;
        }
        case 48: {
            return varbitplayer_15868;
        }
        case 49: {
            return varbitplayer_15869;
        }
        case 50: {
            return varbitplayer_15870;
        }
        case 51: {
            return varbitplayer_15871;
        }
        case 52: {
            return varbitplayer_15872;
        }
        case 53: {
            return varbitplayer_15873;
        }
        case 54: {
            return varbitplayer_15874;
        }
        case 55: {
            return varbitplayer_15875;
        }
        case 56: {
            return varbitplayer_15878;
        }
        case 57: {
            return varbitplayer_15879;
        }
        case 58: {
            return varbitplayer_15880;
        }
        case 59: {
            return varbitplayer_15881;
        }
        case 60: {
            return varbitplayer_15882;
        }
        case 429: {
            return varbitplayer_3312;
        }
        case 430: {
            return varbitplayer_3313;
        }
        case 431: {
            return varbitplayer_3314;
        }
        case 432: {
            return varbitplayer_3315;
        }
        case 1078: {
            return varbitplayer_17748;
        }
        case 1079: {
            return varbitplayer_17749;
        }
        case 1080: {
            return varbitplayer_17750;
        }
        case 1081: {
            return varbitplayer_17751;
        }
        case 1082: {
            return varbitplayer_17752;
        }
        case 1083: {
            return varbitplayer_17753;
        }
        case 1084: {
            return varbitplayer_17754;
        }
        case 1085: {
            return varbitplayer_17755;
        }
        case 1086: {
            return varbitplayer_17756;
        }
        case 1087: {
            return varbitplayer_17757;
        }
        case 1088: {
            return varbitplayer_17758;
        }
        case 1089: {
            return varbitplayer_17759;
        }
        case 1090: {
            return varbitplayer_17760;
        }
        case 1091: {
            return varbitplayer_17761;
        }
        case 1092: {
            return varbitplayer_17762;
        }
        case 1093: {
            return varbitplayer_17763;
        }
        case 1094: {
            return varbitplayer_17764;
        }
        case 1095: {
            return varbitplayer_17765;
        }
        case 1096: {
            return varbitplayer_17766;
        }
        case 1097: {
            return varbitplayer_17767;
        }
        case 1098: {
            return varbitplayer_17768;
        }
        case 1099: {
            return varbitplayer_17769;
        }
        case 1100: {
            return varbitplayer_17770;
        }
        case 1101: {
            return varbitplayer_17771;
        }
        case 1102: {
            return varbitplayer_17772;
        }
        case 1103: {
            return varbitplayer_17773;
        }
        case 1104: {
            return varbitplayer_17774;
        }
        case 1105: {
            return varbitplayer_17775;
        }
        case 1106: {
            return varbitplayer_17776;
        }
        case 1107: {
            return varbitplayer_17777;
        }
        case 1108: {
            return varbitplayer_17778;
        }
        case 1109: {
            return varbitplayer_17779;
        }
        case 1110: {
            return varbitplayer_17780;
        }
        case 1111: {
            return varbitplayer_17782;
        }
        case 1112: {
            return varbitplayer_17781;
        }
        case 1113: {
            return varbitplayer_17783;
        }
        case 1114: {
            return varbitplayer_17784;
        }
        case 1115: {
            return varbitplayer_17785;
        }
        case 1116: {
            return varbitplayer_17786;
        }
        case 1117: {
            return varbitplayer_17787;
        }
        case 1118: {
            return varbitplayer_17788;
        }
        case 1119: {
            return varbitplayer_17789;
        }
        case 1120: {
            return varbitplayer_17790;
        }
        case 1146: {
            return varbitplayer_20482;
        }
        case 1147: {
            return varbitplayer_20483;
        }
        case 1148: {
            return varbitplayer_20484;
        }
        case 1149: {
            return varbitplayer_20485;
        }
        case 1150: {
            return varbitplayer_20486;
        }
        case 1151: {
            return varbitplayer_20487;
        }
        case 1152: {
            return varbitplayer_20488;
        }
        case 1153: {
            return varbitplayer_20489;
        }
        case 1154: {
            return varbitplayer_20490;
        }
        case 1155: {
            return varbitplayer_20491;
        }
        case 1156: {
            return varbitplayer_20492;
        }
        case 1157: {
            return varbitplayer_20493;
        }
        case 1158: {
            return varbitplayer_20494;
        }
        case 1159: {
            return varbitplayer_20495;
        }
        case 1160: {
            return varbitplayer_20496;
        }
        case 1161: {
            return varbitplayer_20497;
        }
        case 1162: {
            return varbitplayer_20498;
        }
        case 1163: {
            return varbitplayer_20499;
        }
        case 1164: {
            return varbitplayer_20500;
        }
        case 1165: {
            return varbitplayer_20501;
        }
        case 1166: {
            return varbitplayer_20502;
        }
        case 1167: {
            return varbitplayer_20503;
        }
        case 1168: {
            return varbitplayer_20504;
        }
        case 1169: {
            return varbitplayer_20505;
        }
        case 1170: {
            return varbitplayer_20506;
        }
        case 1171: {
            return varbitplayer_20507;
        }
        case 1172: {
            return varbitplayer_20508;
        }
        case 1173: {
            return varbitplayer_20509;
        }
        case 1174: {
            return varbitplayer_20510;
        }
        case 1175: {
            return varbitplayer_20511;
        }
        case 1176: {
            return varbitplayer_20512;
        }
        case 1177: {
            return varbitplayer_20513;
        }
        case 1178: {
            return varbitplayer_20514;
        }
        case 1179: {
            return varbitplayer_20515;
        }
        case 1180: {
            return varbitplayer_20516;
        }
        case 1181: {
            return varbitplayer_20517;
        }
        case 1182: {
            return varbitplayer_20518;
        }
        case 1183: {
            return varbitplayer_20519;
        }
        case 1184: {
            return varbitplayer_20520;
        }
        case 1185: {
            return varbitplayer_20521;
        }
        case 1186: {
            return varbitplayer_20522;
        }
        case 1187: {
            return varbitplayer_20523;
        }
        case 1188: {
            return varbitplayer_20524;
        }
        case 1189: {
            return varbitplayer_20525;
        }
        case 1190: {
            return varbitplayer_20526;
        }
        case 1191: {
            return varbitplayer_20527;
        }
        case 1192: {
            return varbitplayer_20528;
        }
        case 115: {
            return varbitplayer_15765;
        }
        case 116: {
            return varbitplayer_15766;
        }
        case 117: {
            return varbitplayer_15767;
        }
        case 118: {
            return varbitplayer_15768;
        }
        case 119: {
            return varbitplayer_15769;
        }
        case 120: {
            return varbitplayer_15770;
        }
        case 121: {
            return varbitplayer_15771;
        }
        case 122: {
            return varbitplayer_15772;
        }
        case 123: {
            return varbitplayer_15773;
        }
        case 124: {
            return varbitplayer_15774;
        }
        case 125: {
            return varbitplayer_15775;
        }
        case 126: {
            return varbitplayer_15776;
        }
        case 1011: {
            return varbitplayer_15780;
        }
        case 127: {
            return varbitplayer_15777;
        }
        case 128: {
            return varbitplayer_15778;
        }
        case 129: {
            if ((TESTBIT(varbitplayer_15779, 1) == 1)) {
                int7 = SETBIT(int7, 0);
            };
            if ((TESTBIT(varbitplayer_15779, 0) == 1)) {
                int7 = SETBIT(int7, 1);
            };
            return int7;
        }
        case 130: {
            return varbitplayer_15781;
        }
        case 131: {
            return varbitplayer_15782;
        }
        case 132: {
            return varbitplayer_15798;
        }
        case 133: {
            return varbitplayer_15784;
        }
        case 134: {
            return varbitplayer_15785;
        }
        case 135: {
            return varbitplayer_15786;
        }
        case 136: {
            return varbitplayer_15787;
        }
        case 137: {
            return varbitplayer_15788;
        }
        case 138: {
            return varbitplayer_15789;
        }
        case 139: {
            return varbitplayer_15790;
        }
        case 140: {
            return varbitplayer_15791;
        }
        case 141: {
            return varbitplayer_15792;
        }
        case 142: {
            return varbitplayer_15793;
        }
        case 143: {
            return varbitplayer_15794;
        }
        case 144: {
            return varbitplayer_15795;
        }
        case 145: {
            return varbitplayer_15796;
        }
        case 146: {
            return varbitplayer_15797;
        }
        case 147: {
            return varbitplayer_15783;
        }
        case 148: {
            return varbitplayer_15799;
        }
        case 149: {
            return varbitplayer_15800;
        }
        case 150: {
            return varbitplayer_15801;
        }
        case 151: {
            return varbitplayer_15802;
        }
        case 309: {
            return varbitplayer_15810;
        }
        case 310: {
            return varbitplayer_15811;
        }
        case 311: {
            return varbitplayer_15812;
        }
        case 312: {
            return varbitplayer_15813;
        }
        case 313: {
            return varbitplayer_15814;
        }
        case 314: {
            return varbitplayer_15815;
        }
        case 315: {
            return varbitplayer_15816;
        }
        case 152: {
            return varbitplayer_15711;
        }
        case 153: {
            return varbitplayer_15712;
        }
        case 154: {
            return varbitplayer_15713;
        }
        case 155: {
            return varbitplayer_15714;
        }
        case 156: {
            return varbitplayer_15715;
        }
        case 157: {
            return varbitplayer_15716;
        }
        case 158: {
            return varbitplayer_15717;
        }
        case 159: {
            return varbitplayer_15718;
        }
        case 160: {
            return varbitplayer_15719;
        }
        case 161: {
            return varbitplayer_15720;
        }
        case 162: {
            return varbitplayer_15721;
        }
        case 163: {
            return varbitplayer_15722;
        }
        case 164: {
            return varbitplayer_15723;
        }
        case 165: {
            return varbitplayer_15724;
        }
        case 166: {
            return varbitplayer_15725;
        }
        case 167: {
            return varbitplayer_15726;
        }
        case 168: {
            return varbitplayer_15727;
        }
        case 169: {
            return varbitplayer_15728;
        }
        case 170: {
            return varbitplayer_15729;
        }
        case 171: {
            return varbitplayer_15730;
        }
        case 172: {
            return varbitplayer_15731;
        }
        case 173: {
            return varbitplayer_15732;
        }
        case 174: {
            return varbitplayer_15733;
        }
        case 175: {
            return varbitplayer_15734;
        }
        case 176: {
            return varbitplayer_15735;
        }
        case 177: {
            return varbitplayer_15736;
        }
        case 178: {
            return varbitplayer_15737;
        }
        case 179: {
            return varbitplayer_15738;
        }
        case 180: {
            return varbitplayer_15739;
        }
        case 181: {
            return varbitplayer_15740;
        }
        case 316: {
            return varbitplayer_15751;
        }
        case 317: {
            return varbitplayer_15752;
        }
        case 318: {
            return varbitplayer_15753;
        }
        case 319: {
            return varbitplayer_15754;
        }
        case 320: {
            return varbitplayer_15755;
        }
        case 321: {
            return varbitplayer_15756;
        }
        case 322: {
            return varbitplayer_15757;
        }
        case 323: {
            return varbitplayer_15758;
        }
        case 417: {
            return varbitplayer_15759;
        }
        case 182: {
            return varbitplayer_15962;
        }
        case 183: {
            return varbitplayer_15963;
        }
        case 184: {
            return varbitplayer_15964;
        }
        case 185: {
            return varbitplayer_15965;
        }
        case 186: {
            return varbitplayer_15966;
        }
        case 187: {
            return varbitplayer_15967;
        }
        case 188: {
            return varbitplayer_15968;
        }
        case 189: {
            return varbitplayer_15969;
        }
        case 190: {
            return varbitplayer_15970;
        }
        case 191: {
            return varbitplayer_15971;
        }
        case 192: {
            return varbitplayer_15989;
        }
        case 193: {
            return varbitplayer_15990;
        }
        case 194: {
            return varbitplayer_15991;
        }
        case 195: {
            return varbitplayer_15992;
        }
        case 196: {
            return varbitplayer_15993;
        }
        case 197: {
            return varbitplayer_15994;
        }
        case 198: {
            return varbitplayer_42993;
        }
        case 199: {
            return varbitplayer_15996;
        }
        case 200: {
            return varbitplayer_15997;
        }
        case 201: {
            return varbitplayer_15998;
        }
        case 202: {
            return varbitplayer_15999;
        }
        case 203: {
            return varbitplayer_16000;
        }
        case 204: {
            return varbitplayer_16001;
        }
        case 205: {
            return varbitplayer_16002;
        }
        case 206: {
            return varbitplayer_16003;
        }
        case 207: {
            return varbitplayer_16004;
        }
        case 208: {
            return varbitplayer_16005;
        }
        case 209: {
            return varbitplayer_16006;
        }
        case 210: {
            return varbitplayer_16007;
        }
        case 211: {
            return varbitplayer_16010;
        }
        case 212: {
            return varbitplayer_16011;
        }
        case 213: {
            return varbitplayer_16012;
        }
        case 214: {
            return varbitplayer_16013;
        }
        case 215: {
            return varbitplayer_16014;
        }
        case 216: {
            return varbitplayer_16015;
        }
        case 217: {
            return varbitplayer_16016;
        }
        case 218: {
            return varbitplayer_16017;
        }
        case 219: {
            return varbitplayer_16018;
        }
        case 220: {
            return varbitplayer_16019;
        }
        case 324: {
            return varbitplayer_15972;
        }
        case 325: {
            return varbitplayer_15973;
        }
        case 326: {
            return varbitplayer_15974;
        }
        case 327: {
            if ((varbitplayer_15982 == 1)) {
                int7 = SETBIT(int7, 0);
            };
            if ((varbitplayer_15975 == 1)) {
                int7 = SETBIT(int7, 1);
            };
            return int7;
        }
        case 328: {
            return varbitplayer_15976;
        }
        case 329: {
            return varbitplayer_15977;
        }
        case 330: {
            return varbitplayer_15978;
        }
        case 331: {
            return varbitplayer_15979;
        }
        case 995: {
            return varbitplayer_28;
        }
        case 996: {
            return varbitplayer_29;
        }
        case 997: {
            return varbitplayer_30;
        }
        case 1127: {
            return varbitplayer_18523;
        }
        case 998: {
            return varbitplayer_31;
        }
        case 999: {
            return varbitplayer_32;
        }
        case 1128: {
            return varbitplayer_18524;
        }
        case 1000: {
            return varbitplayer_33;
        }
        case 1001: {
            return varbitplayer_34;
        }
        case 1129: {
            return varbitplayer_18525;
        }
        case 1130: {
            return varbitplayer_18526;
        }
        case 1002: {
            return varbitplayer_35;
        }
        case 1297: {
            return varbitplayer_10236;
        }
        case 1131: {
            return varbitplayer_18527;
        }
        case 1003: {
            return varbitplayer_36;
        }
        case 1004: {
            return varbitplayer_37;
        }
        case 1005: {
            return varbitplayer_38;
        }
        case 1132: {
            return varbitplayer_18528;
        }
        case 1006: {
            return varbitplayer_39;
        }
        case 1133: {
            return varbitplayer_18529;
        }
        case 1007: {
            return varbitplayer_40;
        }
        case 421: {
            return varbitplayer_22430;
        }
        case 422: {
            return varbitplayer_24967;
        }
        case 1298: {
            return varbitplayer_9482;
        }
        case 1296: {
            return varbitplayer_36173;
        }
        case 3813: {
            return varbitplayer_44270;
        }
        case 61: {
            return varbitplayer_15435;
        }
        case 62: {
            return varbitplayer_15436;
        }
        case 63: {
            return varbitplayer_15437;
        }
        case 64: {
            return varbitplayer_15438;
        }
        case 65: {
            return varbitplayer_15439;
        }
        case 66: {
            return varbitplayer_15440;
        }
        case 67: {
            return varbitplayer_15441;
        }
        case 68: {
            return varbitplayer_15442;
        }
        case 69: {
            return varbitplayer_15443;
        }
        case 70: {
            return varbitplayer_15444;
        }
        case 71: {
            return varbitplayer_15445;
        }
        case 72: {
            return varbitplayer_15446;
        }
        case 73: {
            return varbitplayer_15447;
        }
        case 74: {
            return varbitplayer_15448;
        }
        case 75: {
            return varbitplayer_15449;
        }
        case 76: {
            return varbitplayer_15450;
        }
        case 77: {
            return varbitplayer_15451;
        }
        case 78: {
            return varbitplayer_15452;
        }
        case 1123: {
            return varbitplayer_54443;
        }
        case 79: {
            return varbitplayer_15453;
        }
        case 80: {
            return varbitplayer_15454;
        }
        case 81: {
            return varbitplayer_15455;
        }
        case 82: {
            return varbitplayer_15456;
        }
        case 83: {
            return varbitplayer_15457;
        }
        case 84: {
            return varbitplayer_15459;
        }
        case 85: {
            return varbitplayer_15460;
        }
        case 86: {
            return varbitplayer_15461;
        }
        case 87: {
            return varbitplayer_15462;
        }
        case 88: {
            return varbitplayer_15463;
        }
        case 89: {
            return varbitplayer_15464;
        }
        case 90: {
            return varbitplayer_15465;
        }
        case 91: {
            return varbitplayer_15466;
        }
        case 92: {
            return varbitplayer_15467;
        }
        case 93: {
            return varbitplayer_15468;
        }
        case 94: {
            return varbitplayer_15469;
        }
        case 95: {
            return varbitplayer_15470;
        }
        case 96: {
            return varbitplayer_15471;
        }
        case 97: {
            return varbitplayer_15472;
        }
        case 98: {
            return varbitplayer_15473;
        }
        case 99: {
            return varbitplayer_15474;
        }
        case 100: {
            return varbitplayer_15475;
        }
        case 101: {
            return varbitplayer_15476;
        }
        case 102: {
            return varbitplayer_15478;
        }
        case 103: {
            return varbitplayer_15479;
        }
        case 104: {
            return varbitplayer_15480;
        }
        case 105: {
            return varbitplayer_15481;
        }
        case 106: {
            return varbitplayer_15482;
        }
        case 107: {
            return varbitplayer_15483;
        }
        case 108: {
            return varbitplayer_15484;
        }
        case 109: {
            return varbitplayer_15485;
        }
        case 110: {
            return varbitplayer_15486;
        }
        case 111: {
            return varbitplayer_15487;
        }
        case 112: {
            return varbitplayer_15488;
        }
        case 113: {
            return varbitplayer_15489;
        }
        case 114: {
            return varbitplayer_15490;
        }
        case 351: {
            return varbitplayer_15493;
        }
        case 352: {
            if ((varbitplayer_15495 == 1)) {
                int7 = SETBIT(int7, 0);
            };
            if ((varbitplayer_15496 == 1)) {
                int7 = SETBIT(int7, 1);
            };
            if ((varbitplayer_15497 == 1)) {
                int7 = SETBIT(int7, 2);
            };
            if ((varbitplayer_15498 == 1)) {
                int7 = SETBIT(int7, 3);
            };
            if ((varbitplayer_15499 == 1)) {
                int7 = SETBIT(int7, 4);
            };
            if ((varbitplayer_15500 == 1)) {
                int7 = SETBIT(int7, 5);
            };
            if ((varbitplayer_15494 == 1)) {
                int7 = SETBIT(int7, 6);
            };
            return int7;
        }
        case 353: {
            if ((varbitplayer_15503 == 1)) {
                int7 = SETBIT(int7, 0);
            };
            if ((varbitplayer_15502 == 1)) {
                int7 = SETBIT(int7, 1);
            };
            if ((varbitplayer_15501 == 1)) {
                int7 = SETBIT(int7, 2);
            };
            return int7;
        }
        case 354: {
            return varbitplayer_15504;
        }
        case 355: {
            return varbitplayer_15505;
        }
        case 356: {
            return varbitplayer_15506;
        }
        case 357: {
            return varbitplayer_15507;
        }
        case 944: {
            return varbitplayer_15632;
        }
        case 945: {
            return varbitplayer_15633;
        }
        case 946: {
            return varbitplayer_15634;
        }
        case 947: {
            return varbitplayer_15635;
        }
        case 948: {
            return varbitplayer_15636;
        }
        case 949: {
            return varbitplayer_15637;
        }
        case 950: {
            return varbitplayer_15638;
        }
        case 951: {
            return varbitplayer_15639;
        }
        case 952: {
            return varbitplayer_15640;
        }
        case 953: {
            return varbitplayer_15641;
        }
        case 954: {
            return varbitplayer_15642;
        }
        case 955: {
            return varbitplayer_15643;
        }
        case 956: {
            return varbitplayer_15644;
        }
        case 957: {
            return varbitplayer_15645;
        }
        case 958: {
            return varbitplayer_15646;
        }
        case 959: {
            return varbitplayer_15647;
        }
        case 960: {
            return varbitplayer_15648;
        }
        case 961: {
            return varbitplayer_15649;
        }
        case 962: {
            return varbitplayer_15650;
        }
        case 963: {
            return varbitplayer_15651;
        }
        case 964: {
            return varbitplayer_15652;
        }
        case 965: {
            return varbitplayer_15653;
        }
        case 966: {
            return varbitplayer_15654;
        }
        case 967: {
            return varbitplayer_15655;
        }
        case 968: {
            return varbitplayer_15656;
        }
        case 969: {
            return varbitplayer_15657;
        }
        case 970: {
            return varbitplayer_15658;
        }
        case 971: {
            return varbitplayer_15659;
        }
        case 972: {
            return varbitplayer_15660;
        }
        case 973: {
            return varbitplayer_15661;
        }
        case 974: {
            return varbitplayer_15662;
        }
        case 975: {
            return varbitplayer_15663;
        }
        case 976: {
            return varbitplayer_15664;
        }
        case 977: {
            return varbitplayer_15665;
        }
        case 978: {
            return varbitplayer_15666;
        }
        case 979: {
            return varbitplayer_15667;
        }
        case 980: {
            return varbitplayer_15668;
        }
        case 981: {
            return varbitplayer_15669;
        }
        case 982: {
            return varbitplayer_15670;
        }
        case 983: {
            return varbitplayer_15671;
        }
        case 984: {
            return varbitplayer_15672;
        }
        case 985: {
            return varbitplayer_15673;
        }
        case 986: {
            return varbitplayer_15680;
        }
        case 987: {
            return varbitplayer_15675;
        }
        case 988: {
            return varbitplayer_15676;
        }
        case 989: {
            return varbitplayer_15702;
        }
        case 990: {
            return varbitplayer_15677;
        }
        case 991: {
            return varbitplayer_15678;
        }
        case 992: {
            return varbitplayer_15679;
        }
        case 993: {
            return varbitplayer_15697;
        }
        case 994: {
            return varbitplayer_15674;
        }
        case 221: {
            return varbitplayer_15897;
        }
        case 222: {
            return varbitplayer_15898;
        }
        case 224: {
            return varbitplayer_15900;
        }
        case 225: {
            return varbitplayer_15901;
        }
        case 226: {
            return varbitplayer_15902;
        }
        case 227: {
            return varbitplayer_15903;
        }
        case 228: {
            return varbitplayer_15904;
        }
        case 223: {
            return varbitplayer_15899;
        }
        case 229: {
            return varbitplayer_15905;
        }
        case 230: {
            return varbitplayer_15906;
        }
        case 231: {
            return varbitplayer_15907;
        }
        case 232: {
            return varbitplayer_15908;
        }
        case 233: {
            return varbitplayer_15909;
        }
        case 234: {
            return varbitplayer_15910;
        }
        case 235: {
            return varbitplayer_15911;
        }
        case 240: {
            return varbitplayer_15916;
        }
        case 236: {
            return varbitplayer_15912;
        }
        case 237: {
            return varbitplayer_15913;
        }
        case 244: {
            return varbitplayer_15920;
        }
        case 238: {
            return varbitplayer_15914;
        }
        case 239: {
            return varbitplayer_15915;
        }
        case 241: {
            return varbitplayer_15917;
        }
        case 242: {
            return varbitplayer_15918;
        }
        case 243: {
            return varbitplayer_15919;
        }
        case 245: {
            return varbitplayer_15921;
        }
        case 246: {
            return varbitplayer_15922;
        }
        case 247: {
            return varbitplayer_15923;
        }
        case 248: {
            return varbitplayer_15924;
        }
        case 249: {
            return varbitplayer_15925;
        }
        case 250: {
            return varbitplayer_15926;
        }
        case 251: {
            return varbitplayer_15927;
        }
        case 253: {
            return varbitplayer_15929;
        }
        case 254: {
            return varbitplayer_15930;
        }
        case 255: {
            return varbitplayer_15931;
        }
        case 252: {
            return varbitplayer_15928;
        }
        case 332: {
            if ((varbitplayer_15940 == 1)) {
                int7 = SETBIT(int7, 0);
            };
            if ((varbitplayer_15941 == 1)) {
                int7 = SETBIT(int7, 1);
            };
            if ((varbitplayer_15942 == 1)) {
                int7 = SETBIT(int7, 2);
            };
            if ((varbitplayer_15943 == 1)) {
                int7 = SETBIT(int7, 3);
            };
            if ((varbitplayer_15944 == 1)) {
                int7 = SETBIT(int7, 4);
            };
            if ((varbitplayer_15945 == 1)) {
                int7 = SETBIT(int7, 5);
            };
            if ((varbitplayer_15939 == 1)) {
                int7 = SETBIT(int7, 6);
            };
            return int7;
        }
        case 333: {
            if ((varbitplayer_15947 == 1)) {
                int7 = SETBIT(int7, 0);
            };
            if ((varbitplayer_15948 == 1)) {
                int7 = SETBIT(int7, 1);
            };
            if ((varbitplayer_15949 == 1)) {
                int7 = SETBIT(int7, 2);
            };
            if ((varbitplayer_15950 == 1)) {
                int7 = SETBIT(int7, 3);
            };
            if ((varbitplayer_15946 == 1)) {
                int7 = SETBIT(int7, 4);
            };
            return int7;
        }
        case 334: {
            if ((varbitplayer_15953 == 1)) {
                int7 = SETBIT(int7, 0);
            };
            if ((varbitplayer_15954 == 1)) {
                int7 = SETBIT(int7, 1);
            };
            if ((varbitplayer_15952 == 1)) {
                int7 = SETBIT(int7, 2);
            };
            if ((varbitplayer_15951 == 1)) {
                int7 = SETBIT(int7, 3);
            };
            return int7;
        }
        case 335: {
            if ((varbitplayer_15956 == 1)) {
                int7 = SETBIT(int7, 0);
            };
            if ((varbitplayer_15957 == 1)) {
                int7 = SETBIT(int7, 1);
            };
            if ((varbitplayer_15955 == 1)) {
                int7 = SETBIT(int7, 2);
            };
            return int7;
        }
        case 336: {
            return varbitplayer_15958;
        }
        case 1205: {
            return varbitplayer_26536;
        }
        case 1206: {
            return varbitplayer_26537;
        }
        case 1207: {
            return varbitplayer_26538;
        }
        case 1208: {
            return varbitplayer_26539;
        }
        case 1209: {
            return varbitplayer_26540;
        }
        case 1210: {
            return varbitplayer_26541;
        }
        case 1211: {
            return varbitplayer_26542;
        }
        case 1212: {
            return varbitplayer_26543;
        }
        case 1213: {
            return varbitplayer_26544;
        }
        case 1214: {
            return varbitplayer_26545;
        }
        case 1215: {
            return varbitplayer_26546;
        }
        case 1216: {
            return varbitplayer_26547;
        }
        case 1217: {
            return varbitplayer_26548;
        }
        case 1218: {
            return varbitplayer_26549;
        }
        case 1219: {
            return varbitplayer_26550;
        }
        case 1220: {
            return varbitplayer_26551;
        }
        case 1221: {
            return varbitplayer_26552;
        }
        case 1222: {
            return varbitplayer_26553;
        }
        case 1223: {
            return varbitplayer_26554;
        }
        case 1224: {
            return varbitplayer_26555;
        }
        case 1225: {
            return varbitplayer_26556;
        }
        case 1226: {
            return varbitplayer_26557;
        }
        case 1227: {
            return varbitplayer_26558;
        }
        case 1228: {
            return varbitplayer_26559;
        }
        case 1229: {
            return varbitplayer_26560;
        }
        case 1230: {
            return varbitplayer_26561;
        }
        case 1231: {
            return varbitplayer_26562;
        }
        case 1232: {
            return varbitplayer_26563;
        }
        case 1233: {
            return varbitplayer_26564;
        }
        case 1234: {
            return varbitplayer_26565;
        }
        case 1235: {
            return varbitplayer_26566;
        }
        case 1236: {
            return varbitplayer_26567;
        }
        case 1237: {
            return varbitplayer_26568;
        }
        case 1238: {
            return varbitplayer_26569;
        }
        case 1239: {
            return varbitplayer_26570;
        }
        case 1240: {
            return varbitplayer_26571;
        }
        case 1241: {
            return varbitplayer_26572;
        }
        case 1242: {
            return varbitplayer_26573;
        }
        case 1243: {
            return varbitplayer_26574;
        }
        case 1244: {
            if ((varbitplayer_25455 == 1)) {
                int7 = SETBIT(int7, 0);
            };
            if ((varbitplayer_25456 == 1)) {
                int7 = SETBIT(int7, 1);
            };
            if ((varbitplayer_25457 == 1)) {
                int7 = SETBIT(int7, 2);
            };
            if ((varbitplayer_25458 == 1)) {
                int7 = SETBIT(int7, 3);
            };
            if ((varbitplayer_25459 == 1)) {
                int7 = SETBIT(int7, 4);
            };
            if ((varbitplayer_25460 == 1)) {
                int7 = SETBIT(int7, 5);
            };
            if ((varbitplayer_25461 == 1)) {
                int7 = SETBIT(int7, 6);
            };
            if ((varbitplayer_25462 == 1)) {
                int7 = SETBIT(int7, 7);
            };
            if ((varbitplayer_25463 == 1)) {
                int7 = SETBIT(int7, 8);
            };
            if ((varbitplayer_25464 == 1)) {
                int7 = SETBIT(int7, 9);
            };
            if ((varbitplayer_25465 == 1)) {
                int7 = SETBIT(int7, 10);
            };
            if ((varbitplayer_25467 == 1)) {
                int7 = SETBIT(int7, 11);
            };
            if ((varbitplayer_25468 == 1)) {
                int7 = SETBIT(int7, 12);
            };
            if ((varbitplayer_25466 == 1)) {
                int7 = SETBIT(int7, 13);
            };
            if ((varbitplayer_25469 == 1)) {
                int7 = SETBIT(int7, 14);
            };
            if ((varbitplayer_25470 == 1)) {
                int7 = SETBIT(int7, 15);
            };
            if ((varbitplayer_25473 == 1)) {
                int7 = SETBIT(int7, 16);
            };
            if ((varbitplayer_26575 == 1)) {
                int7 = SETBIT(int7, 17);
            };
            if (((GETBIT_RANGE(int7, 0, 16) >= 10) && (varbitplayer_26575 == 1))) {
                int7 = SETBIT(int7, 18);
            };
            return int7;
        }
        case 1245: {
            return varbitplayer_26576;
        }
        case 1246: {
            return varbitplayer_26577;
        }
        case 1247: {
            return varbitplayer_26578;
        }
        case 1248: {
            return varbitplayer_26579;
        }
        case 1249: {
            return varbitplayer_26580;
        }
        case 1250: {
            return varbitplayer_26581;
        }
        case 1251: {
            return varbitplayer_26582;
        }
        case 1252: {
            return varbitplayer_26583;
        }
        case 1253: {
            return varbitplayer_26584;
        }
        case 1254: {
            return varbitplayer_26585;
        }
        case 1255: {
            return varbitplayer_26586;
        }
        case 1256: {
            return varbitplayer_26587;
        }
        case 1258: {
            return varbitplayer_26589;
        }
        case 256: {
            return varbitplayer_15562;
        }
        case 257: {
            return varbitplayer_15563;
        }
        case 258: {
            return varbitplayer_15564;
        }
        case 259: {
            return varbitplayer_15565;
        }
        case 260: {
            return varbitplayer_15566;
        }
        case 261: {
            return varbitplayer_15567;
        }
        case 262: {
            return varbitplayer_15568;
        }
        case 263: {
            return varbitplayer_15569;
        }
        case 264: {
            return varbitplayer_15570;
        }
        case 265: {
            if ((varbitplayer_15582 == 1)) {
                int7 = (int7 + 1);
            };
            if ((varbitplayer_15571 == 1)) {
                int7 = (int7 + 1);
            };
            return int7;
        }
        case 266: {
            return varbitplayer_15572;
        }
        case 267: {
            return varbitplayer_15573;
        }
        case 268: {
            return varbitplayer_15574;
        }
        case 269: {
            return varbitplayer_15575;
        }
        case 270: {
            return varbitplayer_15576;
        }
        case 271: {
            return varbitplayer_15577;
        }
        case 272: {
            return varbitplayer_15578;
        }
        case 273: {
            return varbitplayer_15580;
        }
        case 274: {
            return varbitplayer_15581;
        }
        case 275: {
            return varbitplayer_15579;
        }
        case 276: {
            return varbitplayer_15583;
        }
        case 277: {
            return varbitplayer_15584;
        }
        case 278: {
            return varbitplayer_15585;
        }
        case 279: {
            return varbitplayer_15586;
        }
        case 280: {
            return varbitplayer_15587;
        }
        case 281: {
            return varbitplayer_35381;
        }
        case 282: {
            return varbitplayer_15589;
        }
        case 283: {
            return varbitplayer_15590;
        }
        case 284: {
            return varbitplayer_15591;
        }
        case 285: {
            return varbitplayer_15592;
        }
        case 286: {
            return varbitplayer_15593;
        }
        case 287: {
            return varbitplayer_15594;
        }
        case 288: {
            return varbitplayer_15595;
        }
        case 289: {
            return varbitplayer_15596;
        }
        case 290: {
            return varbitplayer_15597;
        }
        case 291: {
            return varbitplayer_15598;
        }
        case 292: {
            return varbitplayer_15599;
        }
        case 293: {
            return varbitplayer_15600;
        }
        case 294: {
            return varbitplayer_15601;
        }
        case 295: {
            return varbitplayer_15602;
        }
        case 296: {
            return varbitplayer_15603;
        }
        case 297: {
            return varbitplayer_15604;
        }
        case 298: {
            return varbitplayer_15605;
        }
        case 299: {
            return varbitplayer_15606;
        }
        case 300: {
            return varbitplayer_15607;
        }
        case 301: {
            return varbitplayer_15608;
        }
        case 302: {
            return varbitplayer_15609;
        }
        case 303: {
            return varbitplayer_15610;
        }
        case 304: {
            return varbitplayer_15611;
        }
        case 305: {
            return varbitplayer_15612;
        }
        case 306: {
            return varbitplayer_15613;
        }
        case 307: {
            return varbitplayer_15614;
        }
        case 308: {
            return varbitplayer_15615;
        }
        case 337: {
            return varbitplayer_15616;
        }
        case 338: {
            return varbitplayer_15617;
        }
        case 339: {
            return varbitplayer_15618;
        }
        case 340: {
            return varbitplayer_15619;
        }
        case 341: {
            return varbitplayer_15620;
        }
        case 342: {
            return varbitplayer_35382;
        }
        case 343: {
            return varbitplayer_15625;
        }
        case 344: {
            return varbitplayer_15626;
        }
        case 345: {
            return varbitplayer_15628;
        }
        case 1263: {
            return varbitplayer_33388;
        }
        case 1264: {
            return varbitplayer_33389;
        }
        case 1265: {
            return varbitplayer_33391;
        }
        case 1266: {
            return varbitplayer_33393;
        }
        case 1267: {
            return varbitplayer_33394;
        }
        case 1269: {
            return varbitplayer_33401;
        }
        case 1270: {
            return varbitplayer_33402;
        }
        case 1271: {
            return varbitplayer_33403;
        }
        case 1272: {
            return varbitplayer_33396;
        }
        case 1273: {
            return varbitplayer_33404;
        }
        case 1274: {
            return varbitplayer_33405;
        }
        case 1275: {
            return varbitplayer_33439;
        }
        case 1276: {
            return varbitplayer_33406;
        }
        case 1277: {
            return varbitplayer_33407;
        }
        case 1278: {
            return varbitplayer_33408;
        }
        case 1279: {
            return varbitplayer_33409;
        }
        case 1280: {
            return varbitplayer_33410;
        }
        case 1281: {
            return varbitplayer_33441;
        }
        case 1282: {
            return varbitplayer_33392;
        }
        case 1283: {
            return varbitplayer_33411;
        }
        case 1284: {
            return varbitplayer_33395;
        }
        case 1285: {
            return varbitplayer_33412;
        }
        case 1286: {
            return varbitplayer_33413;
        }
        case 1287: {
            return varbitplayer_33390;
        }
        case 1288: {
            return varbitplayer_33414;
        }
        case 1289: {
            return varbitplayer_33415;
        }
        case 1290: {
            return varbitplayer_33397;
        }
        case 1291: {
            return varbitplayer_33398;
        }
        case 1292: {
            if ((varbitplayer_33419 == 1)) {
                int7 = SETBIT(int7, 0);
            };
            if ((varbitplayer_33420 == 1)) {
                int7 = SETBIT(int7, 1);
            };
            if ((varbitplayer_33421 == 1)) {
                int7 = SETBIT(int7, 2);
            };
            if ((varbitplayer_33422 == 1)) {
                int7 = SETBIT(int7, 3);
            };
            if ((varbitplayer_33423 == 1)) {
                int7 = SETBIT(int7, 4);
            };
            if ((varbitplayer_33424 == 1)) {
                int7 = SETBIT(int7, 5);
            };
            if ((varbitplayer_33425 == 1)) {
                int7 = SETBIT(int7, 6);
            };
            if ((varbitplayer_33426 == 1)) {
                int7 = SETBIT(int7, 7);
            };
            if ((varbitplayer_33427 == 1)) {
                int7 = SETBIT(int7, 8);
            };
            if ((varbitplayer_33428 == 1)) {
                int7 = SETBIT(int7, 9);
            };
            if ((varbitplayer_33430 == 1)) {
                int7 = SETBIT(int7, 10);
            };
            if ((varbitplayer_33429 == 1)) {
                int7 = SETBIT(int7, 11);
            };
            if ((varbitplayer_33431 == 1)) {
                int7 = SETBIT(int7, 12);
            };
            if ((varbitplayer_33432 == 1)) {
                int7 = SETBIT(int7, 13);
            };
            return int7;
        }
        case 1293: {
            return varbitplayer_33418;
        }
        case 1294: {
            return varbitplayer_33417;
        }
        case 1295: {
            return varbitplayer_33399;
        }
        case 3269: {
            return varbitplayer_27311;
        }
        case 3270: {
            return varbitplayer_27312;
        }
        case 3271: {
            return varbitplayer_27313;
        }
        case 3272: {
            return varbitplayer_27314;
        }
        case 3273: {
            return varbitplayer_27315;
        }
        case 3275: {
            return varbitplayer_27317;
        }
        case 3276: {
            return varbitplayer_27318;
        }
        case 3277: {
            return varbitplayer_27319;
        }
        case 3278: {
            return varbitplayer_27320;
        }
        case 3279: {
            return varbitplayer_27321;
        }
        case 3280: {
            return varbitplayer_27322;
        }
        case 3281: {
            return varbitplayer_27323;
        }
        case 3283: {
            if ((varbitplayer_27325 == 2)) {
                return 1;
            };
            return 0;
        }
        case 3284: {
            return varbitplayer_27326;
        }
        case 3285: {
            return varbitplayer_27327;
        }
        case 3286: {
            return varbitplayer_27328;
        }
        case 3287: {
            return varbitplayer_27329;
        }
        case 3288: {
            return varbitplayer_27330;
        }
        case 3274: {
            if (((varbitplayer_27331 >= 1) || (varbitplayer_27316 == 1))) {
                int7 = SETBIT(int7, 0);
            };
            if (((varbitplayer_27332 >= 1) || (varbitplayer_27316 == 1))) {
                int7 = SETBIT(int7, 1);
            };
            if (((varbitplayer_27333 >= 1) || (varbitplayer_27316 == 1))) {
                int7 = SETBIT(int7, 2);
            };
            if (((varbitplayer_27334 >= 1) || (varbitplayer_27316 == 1))) {
                int7 = SETBIT(int7, 3);
            };
            return int7;
        }
        case 3282: {
            if (((varbitplayer_27340 == 1) || (varbitplayer_27324 == 1))) {
                int7 = SETBIT(int7, 0);
            };
            if (((varbitplayer_27341 == 1) || (varbitplayer_27324 == 1))) {
                int7 = SETBIT(int7, 1);
            };
            return int7;
        }
        case 3300: {
            if ((script12821(2, 1, 0) == 1)) {
                int7 = SETBIT(int7, 0);
            };
            if ((script12821(2, 1, 1) == 1)) {
                int7 = SETBIT(int7, 1);
            };
            if ((script12821(2, 1, 2) == 1)) {
                int7 = SETBIT(int7, 2);
            };
            if ((script12821(2, 1, 3) == 1)) {
                int7 = SETBIT(int7, 3);
            };
            if ((script12821(2, 1, 4) == 1)) {
                int7 = SETBIT(int7, 4);
            };
            if ((script12821(2, 1, 5) == 1)) {
                int7 = SETBIT(int7, 5);
            };
            if ((script12821(2, 1, 6) == 1)) {
                int7 = SETBIT(int7, 6);
            };
            if ((script12821(2, 1, 7) == 1)) {
                int7 = SETBIT(int7, 7);
            };
            if ((script12821(2, 1, 8) == 1)) {
                int7 = SETBIT(int7, 8);
            };
            if ((script12821(2, 1, 9) == 1)) {
                int7 = SETBIT(int7, 9);
            };
            if ((script12821(2, 1, 10) == 1)) {
                int7 = SETBIT(int7, 10);
            };
            if ((script12821(2, 1, 11) == 1)) {
                int7 = SETBIT(int7, 11);
            };
            if ((script12821(2, 1, 12) == 1)) {
                int7 = SETBIT(int7, 12);
            };
            if ((script12821(2, 1, 13) == 1)) {
                int7 = SETBIT(int7, 13);
            };
            if ((script12821(2, 1, 14) == 1)) {
                int7 = SETBIT(int7, 14);
            };
            if ((script12821(2, 1, 15) == 1)) {
                int7 = SETBIT(int7, 15);
            };
            return int7;
        }
        case 3301: {
            if ((script12821(2, 2, 0) == 1)) {
                int7 = SETBIT(int7, 0);
            };
            if ((script12821(2, 2, 1) == 1)) {
                int7 = SETBIT(int7, 1);
            };
            if ((script12821(2, 2, 2) == 1)) {
                int7 = SETBIT(int7, 2);
            };
            if ((script12821(2, 2, 3) == 1)) {
                int7 = SETBIT(int7, 3);
            };
            if ((script12821(2, 2, 4) == 1)) {
                int7 = SETBIT(int7, 4);
            };
            if ((script12821(2, 2, 5) == 1)) {
                int7 = SETBIT(int7, 5);
            };
            if ((script12821(2, 2, 6) == 1)) {
                int7 = SETBIT(int7, 6);
            };
            if ((script12821(2, 2, 7) == 1)) {
                int7 = SETBIT(int7, 7);
            };
            if ((script12821(2, 2, 8) == 1)) {
                int7 = SETBIT(int7, 8);
            };
            if ((script12821(2, 2, 9) == 1)) {
                int7 = SETBIT(int7, 9);
            };
            if ((script12821(2, 2, 10) == 1)) {
                int7 = SETBIT(int7, 10);
            };
            if ((script12821(2, 2, 11) == 1)) {
                int7 = SETBIT(int7, 11);
            };
            if ((script12821(2, 2, 12) == 1)) {
                int7 = SETBIT(int7, 12);
            };
            if ((script12821(2, 2, 13) == 1)) {
                int7 = SETBIT(int7, 13);
            };
            if ((script12821(2, 2, 14) == 1)) {
                int7 = SETBIT(int7, 14);
            };
            if ((script12821(2, 2, 15) == 1)) {
                int7 = SETBIT(int7, 15);
            };
            return int7;
        }
        case 3302: {
            if ((script12821(2, 3, 0) == 1)) {
                int7 = SETBIT(int7, 0);
            };
            if ((script12821(2, 3, 1) == 1)) {
                int7 = SETBIT(int7, 1);
            };
            if ((script12821(2, 3, 2) == 1)) {
                int7 = SETBIT(int7, 2);
            };
            if ((script12821(2, 3, 3) == 1)) {
                int7 = SETBIT(int7, 3);
            };
            if ((script12821(2, 3, 4) == 1)) {
                int7 = SETBIT(int7, 4);
            };
            if ((script12821(2, 3, 5) == 1)) {
                int7 = SETBIT(int7, 5);
            };
            if ((script12821(2, 3, 6) == 1)) {
                int7 = SETBIT(int7, 6);
            };
            if ((script12821(2, 3, 7) == 1)) {
                int7 = SETBIT(int7, 7);
            };
            if ((script12821(2, 3, 8) == 1)) {
                int7 = SETBIT(int7, 8);
            };
            if ((script12821(2, 3, 9) == 1)) {
                int7 = SETBIT(int7, 9);
            };
            if ((script12821(2, 3, 10) == 1)) {
                int7 = SETBIT(int7, 10);
            };
            if ((script12821(2, 3, 11) == 1)) {
                int7 = SETBIT(int7, 11);
            };
            if ((script12821(2, 3, 12) == 1)) {
                int7 = SETBIT(int7, 12);
            };
            if ((script12821(2, 3, 13) == 1)) {
                int7 = SETBIT(int7, 13);
            };
            if ((script12821(2, 3, 14) == 1)) {
                int7 = SETBIT(int7, 14);
            };
            if ((script12821(2, 3, 15) == 1)) {
                int7 = SETBIT(int7, 15);
            };
            return int7;
        }
        case 3303: {
            if ((script12821(2, 4, 0) == 1)) {
                int7 = SETBIT(int7, 0);
            };
            if ((script12821(2, 4, 1) == 1)) {
                int7 = SETBIT(int7, 1);
            };
            if ((script12821(2, 4, 2) == 1)) {
                int7 = SETBIT(int7, 2);
            };
            if ((script12821(2, 4, 3) == 1)) {
                int7 = SETBIT(int7, 3);
            };
            if ((script12821(2, 4, 4) == 1)) {
                int7 = SETBIT(int7, 4);
            };
            if ((script12821(2, 4, 5) == 1)) {
                int7 = SETBIT(int7, 5);
            };
            if ((script12821(2, 4, 6) == 1)) {
                int7 = SETBIT(int7, 6);
            };
            if ((script12821(2, 4, 7) == 1)) {
                int7 = SETBIT(int7, 7);
            };
            if ((script12821(2, 4, 8) == 1)) {
                int7 = SETBIT(int7, 8);
            };
            if ((script12821(2, 4, 9) == 1)) {
                int7 = SETBIT(int7, 9);
            };
            if ((script12821(2, 4, 10) == 1)) {
                int7 = SETBIT(int7, 10);
            };
            if ((script12821(2, 4, 11) == 1)) {
                int7 = SETBIT(int7, 11);
            };
            if ((script12821(2, 4, 12) == 1)) {
                int7 = SETBIT(int7, 12);
            };
            if ((script12821(2, 4, 13) == 1)) {
                int7 = SETBIT(int7, 13);
            };
            if ((script12821(2, 4, 14) == 1)) {
                int7 = SETBIT(int7, 14);
            };
            if ((script12821(2, 4, 15) == 1)) {
                int7 = SETBIT(int7, 15);
            };
            return int7;
        }
        case 3304: {
            if ((script12821(2, 5, 0) == 1)) {
                int7 = SETBIT(int7, 0);
            };
            if ((script12821(2, 5, 1) == 1)) {
                int7 = SETBIT(int7, 1);
            };
            if ((script12821(2, 5, 2) == 1)) {
                int7 = SETBIT(int7, 2);
            };
            if ((script12821(2, 5, 3) == 1)) {
                int7 = SETBIT(int7, 3);
            };
            if ((script12821(2, 5, 4) == 1)) {
                int7 = SETBIT(int7, 4);
            };
            if ((script12821(2, 5, 5) == 1)) {
                int7 = SETBIT(int7, 5);
            };
            if ((script12821(2, 5, 6) == 1)) {
                int7 = SETBIT(int7, 6);
            };
            if ((script12821(2, 5, 7) == 1)) {
                int7 = SETBIT(int7, 7);
            };
            if ((script12821(2, 5, 8) == 1)) {
                int7 = SETBIT(int7, 8);
            };
            if ((script12821(2, 5, 9) == 1)) {
                int7 = SETBIT(int7, 9);
            };
            return int7;
        }
        case 3305: {
            if ((varbitplayer_33861 == 1)) {
                int7 = SETBIT(int7, 0);
            };
            if ((varbitplayer_34248 == 1)) {
                int7 = SETBIT(int7, 1);
            };
            if ((varbitplayer_33904 == 1)) {
                int7 = SETBIT(int7, 2);
            };
            return int7;
        }
        case 3306: {
            if ((varbitplayer_33146 >= (ENUM_GETOUTPUTCOUNT(11423 as cs2enum) - 1))) {
                int7 = SETBIT(int7, 0);
            };
            if ((varbitplayer_33143 >= (ENUM_GETOUTPUTCOUNT(11420 as cs2enum) - 1))) {
                int7 = SETBIT(int7, 1);
            };
            if ((varbitplayer_33185 >= (ENUM_GETOUTPUTCOUNT(11424 as cs2enum) - 1))) {
                int7 = SETBIT(int7, 2);
            };
            if ((varbitplayer_33144 >= (ENUM_GETOUTPUTCOUNT(11421 as cs2enum) - 1))) {
                int7 = SETBIT(int7, 3);
            };
            if ((varbitplayer_33145 >= (ENUM_GETOUTPUTCOUNT(11422 as cs2enum) - 1))) {
                int7 = SETBIT(int7, 4);
            };
            return int7;
        }
        case 3307: {
            if ((varbitplayer_33875 == 1)) {
                int7 = SETBIT(int7, 0);
            };
            if ((varbitplayer_33877 == 1)) {
                int7 = SETBIT(int7, 1);
            };
            if ((varbitplayer_33879 == 1)) {
                int7 = SETBIT(int7, 2);
            };
            if ((varbitplayer_33881 == 1)) {
                int7 = SETBIT(int7, 3);
            };
            if ((varbitplayer_33142 == 1)) {
                int7 = SETBIT(int7, 4);
            };
            if ((varbitplayer_33870 == 1)) {
                int7 = SETBIT(int7, 5);
            };
            if ((varbitplayer_33151 == 1)) {
                int7 = SETBIT(int7, 6);
            };
            if ((varbitplayer_34249 == 1)) {
                int7 = SETBIT(int7, 7);
            };
            if ((varbitplayer_33906 == 1)) {
                int7 = SETBIT(int7, 8);
            };
            if ((((((varbitplayer_33916 == 1) && (varbitplayer_33917 == 1)) && (varbitplayer_33918 == 1)) && (varbitplayer_33919 == 1)) && (varbitplayer_33920 == 1))) {
                int7 = SETBIT(int7, 9);
            };
            if ((((((varbitplayer_33717 == 1) && (varbitplayer_33718 == 1)) && (varbitplayer_33719 == 1)) && (varbitplayer_33720 == 1)) && (varbitplayer_33721 == 1))) {
                int7 = SETBIT(int7, 10);
            };
            if ((varbitplayer_33722 == 1)) {
                int7 = SETBIT(int7, 11);
            };
            if ((varbitplayer_33724 == 1)) {
                int7 = SETBIT(int7, 12);
            };
            if ((varbitplayer_33723 == 1)) {
                int7 = SETBIT(int7, 13);
            };
            return int7;
        }
        case 3308: {
            if ((varbitplayer_33139 > 0)) {
                return 1;
            };
            return 0;
        }
        case 1299: {
            return varbitplayer_28762;
        }
        case 1300: {
            return varbitplayer_28763;
        }
        case 1301: {
            return varbitplayer_28764;
        }
        case 1302: {
            return varbitplayer_28765;
        }
        case 1303: {
            return varbitplayer_28766;
        }
        case 1304: {
            return varbitplayer_28767;
        }
        case 1305: {
            return varbitplayer_28768;
        }
        case 1306: {
            return varbitplayer_28769;
        }
        case 1307: {
            return varbitplayer_28770;
        }
        case 1308: {
            return varbitplayer_28771;
        }
        case 1359:
        case 1360:
        case 1361:
        case 1362:
        case 1363:
        case 1364:
        case 1365:
        case 1366:
        case 1367:
        case 1368:
        case 1369:
        case 1370: {
            return STAT_BASE_ACTUAL(16 as stat);
        }
        case 4142:
        case 4143:
        case 4144:
        case 4145:
        case 4146:
        case 4147:
        case 4148:
        case 4149:
        case 4150:
        case 4151:
        case 4152:
        case 4153:
        case 4154:
        case 4155: {
            return STAT_BASE_ACTUAL(27 as stat);
        }
        case 1371:
        case 1372:
        case 1373:
        case 1374:
        case 1375:
        case 1376:
        case 1377:
        case 1378:
        case 1379:
        case 1380:
        case 1381:
        case 1382: {
            return STAT_BASE_ACTUAL(0 as stat);
        }
        case 1383:
        case 1384:
        case 1385:
        case 1386:
        case 1387:
        case 1388:
        case 1389:
        case 1390:
        case 1391:
        case 1392:
        case 1393: {
            return STAT_BASE_ACTUAL(3 as stat);
        }
        case 1394:
        case 1395:
        case 1396:
        case 1397:
        case 1398:
        case 1399:
        case 1400:
        case 1401:
        case 1402:
        case 1403:
        case 1404:
        case 1405: {
            return STAT_BASE_ACTUAL(22 as stat);
        }
        case 1406:
        case 1407:
        case 1408:
        case 1409:
        case 1410:
        case 1411:
        case 1412:
        case 1413:
        case 1414:
        case 1415:
        case 1416:
        case 1417: {
            return STAT_BASE_ACTUAL(7 as stat);
        }
        case 1418:
        case 1419:
        case 1420:
        case 1421:
        case 1422:
        case 1423:
        case 1424:
        case 1425:
        case 1426:
        case 1427:
        case 1428:
        case 1429: {
            return STAT_BASE_ACTUAL(12 as stat);
        }
        case 1430:
        case 1431:
        case 1432:
        case 1433:
        case 1434:
        case 1435:
        case 1436:
        case 1437:
        case 1438:
        case 1439:
        case 1440:
        case 1441: {
            return STAT_BASE_ACTUAL(1 as stat);
        }
        case 1442:
        case 1443:
        case 1444:
        case 1445:
        case 1446:
        case 1447:
        case 1448:
        case 1449:
        case 1450:
        case 1451:
        case 1452:
        case 1453: {
            return STAT_BASE_ACTUAL(25 as stat);
        }
        case 1454:
        case 1455:
        case 1456:
        case 1457:
        case 1458:
        case 1459:
        case 1460:
        case 1461:
        case 1462:
        case 1463:
        case 1464:
        case 1465:
        case 1466:
        case 1467: {
            return STAT_BASE_ACTUAL(24 as stat);
        }
        case 1468:
        case 1469:
        case 1470:
        case 1471:
        case 1472:
        case 1473:
        case 1474:
        case 1475:
        case 1476:
        case 1477:
        case 1478:
        case 1479:
        case 4127:
        case 4128:
        case 4129: {
            return STAT_BASE_ACTUAL(19 as stat);
        }
        case 1480:
        case 1481:
        case 1482:
        case 1483:
        case 1484:
        case 1485:
        case 1486:
        case 1487:
        case 1488:
        case 1489:
        case 1490:
        case 1491: {
            return STAT_BASE_ACTUAL(11 as stat);
        }
        case 1492:
        case 1493:
        case 1494:
        case 1495:
        case 1496:
        case 1497:
        case 1498:
        case 1499:
        case 1500:
        case 1501:
        case 1502:
        case 1503: {
            return STAT_BASE_ACTUAL(10 as stat);
        }
        case 1504:
        case 1505:
        case 1506:
        case 1507:
        case 1508:
        case 1509:
        case 1510:
        case 1511:
        case 1512:
        case 1513:
        case 1514:
        case 1515: {
            return STAT_BASE_ACTUAL(9 as stat);
        }
        case 1516:
        case 1517:
        case 1518:
        case 1519:
        case 1520:
        case 1521:
        case 1522:
        case 1523:
        case 1524:
        case 1525:
        case 1526:
        case 1527:
        case 4130:
        case 4131:
        case 4132: {
            return STAT_BASE_ACTUAL(15 as stat);
        }
        case 1528:
        case 1529:
        case 1530:
        case 1531:
        case 1532:
        case 1533:
        case 1534:
        case 1535:
        case 1536:
        case 1537:
        case 1538:
        case 1539: {
            return STAT_BASE_ACTUAL(21 as stat);
        }
        case 1540:
        case 1541:
        case 1542:
        case 1543:
        case 1544:
        case 1545:
        case 1546:
        case 1547:
        case 1548:
        case 1550:
        case 1551:
        case 1552:
        case 1553:
        case 1554: {
            return STAT_BASE_ACTUAL(26 as stat);
        }
        case 1555:
        case 1556:
        case 1557:
        case 1558:
        case 1559:
        case 1560:
        case 1561:
        case 1562:
        case 1563:
        case 1564:
        case 1565:
        case 1566: {
            return STAT_BASE_ACTUAL(6 as stat);
        }
        case 1567:
        case 1568:
        case 1569:
        case 1570:
        case 1571:
        case 1572:
        case 1573:
        case 1574:
        case 1575:
        case 1576:
        case 1577:
        case 1578: {
            return STAT_BASE_ACTUAL(14 as stat);
        }
        case 1579:
        case 1580:
        case 1581:
        case 1582:
        case 1583:
        case 1584:
        case 1585:
        case 1586:
        case 1587:
        case 1588:
        case 1589:
        case 1590: {
            return STAT_BASE_ACTUAL(5 as stat);
        }
        case 1591:
        case 1592:
        case 1593:
        case 1594:
        case 1595:
        case 1596:
        case 1597:
        case 1598:
        case 1599:
        case 1601:
        case 1602:
        case 1603: {
            return STAT_BASE_ACTUAL(4 as stat);
        }
        case 1604:
        case 1605:
        case 1606:
        case 1607:
        case 1608:
        case 1609:
        case 1610:
        case 1611:
        case 1612:
        case 1613:
        case 1614:
        case 1615: {
            return STAT_BASE_ACTUAL(20 as stat);
        }
        case 1616:
        case 1617:
        case 1618:
        case 1619:
        case 1620:
        case 1621:
        case 1622:
        case 1623:
        case 1624:
        case 1625:
        case 1626:
        case 1627:
        case 4373:
        case 2799: {
            return STAT_BASE_ACTUAL(18 as stat);
        }
        case 1628:
        case 1629:
        case 1630:
        case 1631:
        case 1632:
        case 1633:
        case 1634:
        case 1635:
        case 1636:
        case 1637:
        case 1638:
        case 1639: {
            return STAT_BASE_ACTUAL(13 as stat);
        }
        case 1640:
        case 1641:
        case 1642:
        case 1643:
        case 1644:
        case 1645:
        case 1646:
        case 1647:
        case 1648:
        case 1649:
        case 1650:
        case 1651: {
            return STAT_BASE_ACTUAL(2 as stat);
        }
        case 1652:
        case 1653:
        case 1654:
        case 1655:
        case 1656:
        case 1657:
        case 1658:
        case 1659:
        case 1660:
        case 1661:
        case 1662:
        case 1663: {
            return STAT_BASE_ACTUAL(23 as stat);
        }
        case 1664:
        case 1665:
        case 1666:
        case 1667:
        case 1668:
        case 1669:
        case 1670:
        case 1671:
        case 1672:
        case 1673:
        case 1674:
        case 1675: {
            return STAT_BASE_ACTUAL(17 as stat);
        }
        case 1676:
        case 1677:
        case 1678:
        case 1679:
        case 1680:
        case 1681:
        case 1682:
        case 1683:
        case 1684:
        case 1685:
        case 1686:
        case 1687: {
            return STAT_BASE_ACTUAL(8 as stat);
        }
        case 2651: {
            if (((varbitplayer_3559 == 1) || (varbitplayer_35414 == 1))) {
                return 1;
            };
            return 0;
        }
        case 2650: {
            if (((varbitplayer_3559 == 1) || (varbitplayer_35415 == 1))) {
                return 1;
            };
            return 0;
        }
        case 1015: {
            return varbitplayer_3559;
        }
        case 2652: {
            if ((varbitplayer_11105 == 90)) {
                return 1;
            };
            return 0;
        }
        case 1358: {
            return script13568();
        }
        case 1701: {
            return varplayer_1297;
        }
        case 1703: {
            return varbitplayer_3901;
        }
        case 1704: {
            return varbitplayer_11646;
        }
        case 1705: {
            return varbitplayer_16374;
        }
        case 1706: {
            return varbitplayer_6;
        }
        case 1707: {
            return varbitplayer_11319;
        }
        case 1708: {
            return varbitplayer_2369;
        }
        case 1709: {
            return varbitplayer_16307;
        }
        case 1710: {
            return script13278();
        }
        case 1714: {
            return varbitplayer_3911;
        }
        case 1717: {
            return varbitplayer_16428;
        }
        case 1718: {
            return varbitplayer_35377;
        }
        case 1719: {
            if ((varbitplayer_4775 == 1)) {
                int7 = SETBIT(int7, 0);
            };
            if ((varbitplayer_4777 == 1)) {
                int7 = SETBIT(int7, 1);
            };
            if ((varbitplayer_4779 == 1)) {
                int7 = SETBIT(int7, 2);
            };
            if ((varbitplayer_4781 == 1)) {
                int7 = SETBIT(int7, 3);
            };
            if ((varbitplayer_4783 == 1)) {
                int7 = SETBIT(int7, 4);
            };
            return int7;
        }
        case 1720: {
            return varbitplayer_9216;
        }
        case 1721: {
            return varbitplayer_16240;
        }
        case 1722: {
            return varbitplayer_12989;
        }
        case 1723: {
            return varbitplayer_4880;
        }
        case 1724: {
            if ((ACHIEVEMENT_REQSTATE(11 as achievement) == -2)) {
                int7 = SETBIT(int7, 0);
            };
            if ((ACHIEVEMENT_REQSTATE(278 as achievement) == -2)) {
                int7 = SETBIT(int7, 1);
            };
            if ((ACHIEVEMENT_REQSTATE(279 as achievement) == -2)) {
                int7 = SETBIT(int7, 2);
            };
            if ((ACHIEVEMENT_REQSTATE(280 as achievement) == -2)) {
                int7 = SETBIT(int7, 3);
            };
            if ((ACHIEVEMENT_REQSTATE(281 as achievement) == -2)) {
                int7 = SETBIT(int7, 4);
            };
            if ((ACHIEVEMENT_REQSTATE(282 as achievement) == -2)) {
                int7 = SETBIT(int7, 5);
            };
            if ((ACHIEVEMENT_REQSTATE(283 as achievement) == -2)) {
                int7 = SETBIT(int7, 6);
            };
            if ((ACHIEVEMENT_REQSTATE(284 as achievement) == -2)) {
                int7 = SETBIT(int7, 7);
            };
            if ((ACHIEVEMENT_REQSTATE(285 as achievement) == -2)) {
                int7 = SETBIT(int7, 8);
            };
            if ((ACHIEVEMENT_REQSTATE(286 as achievement) == -2)) {
                int7 = SETBIT(int7, 9);
            };
            if ((ACHIEVEMENT_REQSTATE(287 as achievement) == -2)) {
                int7 = SETBIT(int7, 10);
            };
            if ((ACHIEVEMENT_REQSTATE(288 as achievement) == -2)) {
                int7 = SETBIT(int7, 11);
            };
            return int7;
        }
        case 1725: {
            return varbitplayer_21892;
        }
        case 1726: {
            if ((varbitplayer_21856 == 1)) {
                int7 = SETBIT(int7, 0);
            };
            if ((varbitplayer_21857 == 1)) {
                int7 = SETBIT(int7, 1);
            };
            if ((varbitplayer_21858 == 1)) {
                int7 = SETBIT(int7, 2);
            };
            if ((varbitplayer_21859 == 1)) {
                int7 = SETBIT(int7, 3);
            };
            if ((varbitplayer_21860 == 1)) {
                int7 = SETBIT(int7, 4);
            };
            if ((varbitplayer_21861 == 1)) {
                int7 = SETBIT(int7, 5);
            };
            if ((varbitplayer_21862 == 1)) {
                int7 = SETBIT(int7, 6);
            };
            if ((varbitplayer_21863 == 1)) {
                int7 = SETBIT(int7, 7);
            };
            if ((varbitplayer_21864 == 1)) {
                int7 = SETBIT(int7, 8);
            };
            if ((varbitplayer_21865 == 1)) {
                int7 = SETBIT(int7, 9);
            };
            if ((varbitplayer_21866 == 1)) {
                int7 = SETBIT(int7, 10);
            };
            if ((varbitplayer_21867 == 1)) {
                int7 = SETBIT(int7, 11);
            };
            if ((varbitplayer_21847 == 1)) {
                int7 = SETBIT(int7, 12);
            };
            return int7;
        }
        case 1738: {
            if ((varbitplayer_26005 >= 15)) {
                int7 = SETBIT(int7, 0);
            };
            if ((varbitplayer_26006 >= 15)) {
                int7 = SETBIT(int7, 1);
            };
            if ((varbitplayer_26007 >= 15)) {
                int7 = SETBIT(int7, 2);
            };
            if ((varbitplayer_25912 >= 1)) {
                int7 = SETBIT(int7, 3);
            };
            return int7;
        }
        case 1727: {
            if ((varbitplayer_21868 == 1)) {
                int7 = SETBIT(int7, 0);
            };
            if ((varbitplayer_21869 == 1)) {
                int7 = SETBIT(int7, 1);
            };
            if ((varbitplayer_21870 == 1)) {
                int7 = SETBIT(int7, 2);
            };
            if ((varbitplayer_21871 == 1)) {
                int7 = SETBIT(int7, 3);
            };
            if ((varbitplayer_21848 == 1)) {
                int7 = SETBIT(int7, 4);
            };
            return int7;
        }
        case 1728: {
            return varbitplayer_17495;
        }
        case 1729: {
            return varbitplayer_18338;
        }
        case 1730: {
            return varbitplayer_21004;
        }
        case 1731: {
            if ((varbitplayer_17019 >= 3)) {
                int7 = SETBIT(int7, 0);
            };
            if ((varbitplayer_17006 >= 3)) {
                int7 = SETBIT(int7, 1);
            };
            if ((varbitplayer_21318 >= 3)) {
                int7 = SETBIT(int7, 2);
            };
            if ((varbitplayer_26847 >= 3)) {
                int7 = SETBIT(int7, 3);
            };
            return int7;
        }
        case 1988: {
            if ((varbitplayer_17019 >= 3)) {
                return 1;
            };
            if ((varbitplayer_17006 >= 3)) {
                return 1;
            };
            if ((varbitplayer_21318 >= 3)) {
                return 1;
            };
            if ((varbitplayer_26847 >= 3)) {
                return 1;
            };
            return 0;
        }
        case 1732: {
            return varbitplayer_21320;
        }
        case 1734: {
            if ((varbitplayer_4314 == 1)) {
                int7 = SETBIT(int7, 0);
            };
            if ((varbitplayer_4315 == 1)) {
                int7 = SETBIT(int7, 1);
            };
            if ((varbitplayer_4316 == 1)) {
                int7 = SETBIT(int7, 2);
            };
            if ((varbitplayer_21606 == 1)) {
                int7 = SETBIT(int7, 3);
            };
            if ((varbitplayer_21607 == 1)) {
                int7 = SETBIT(int7, 4);
            };
            if ((varbitplayer_21608 == 1)) {
                int7 = SETBIT(int7, 5);
            };
            if ((varbitplayer_21609 == 1)) {
                int7 = SETBIT(int7, 6);
            };
            if ((varbitplayer_21610 == 1)) {
                int7 = SETBIT(int7, 7);
            };
            if ((varbitplayer_22657 == 1)) {
                int7 = SETBIT(int7, 8);
            };
            if ((varbitplayer_22658 == 1)) {
                int7 = SETBIT(int7, 9);
            };
            if ((varbitplayer_22659 == 1)) {
                int7 = SETBIT(int7, 10);
            };
            if ((varbitplayer_22660 == 1)) {
                int7 = SETBIT(int7, 11);
            };
            if ((varbitplayer_22661 == 1)) {
                int7 = SETBIT(int7, 12);
            };
            if ((varbitplayer_22662 == 1)) {
                int7 = SETBIT(int7, 13);
            };
            return int7;
        }
        case 1735:         if ((int6 < ENUM_GETOUTPUTCOUNT(15554 as cs2enum))) {
            [int1, int2] = script13304(enum_getvalue(0, 73, 15554 as cs2enum, int6));
            [int3, int4] = script4610(enum_getvalue(0, 73, 15554 as cs2enum, int6));
            if (((((int1 > 0) || (int2 > 0)) || (int3 > 0)) || (int4 > 0))) {
                int7 = SETBIT(int7, int6);
            };
            int6 = (int6 + 1);
        };

        case 1736: {
            return varbitplayer_35402;
        }
        case 1737: {
            return varbitplayer_35405;
        }
        case 1739: {
            return varbitplayer_25152;
        }
        case 1740: {
            return varbitplayer_25910;
        }
        case 1741: {
            return varbitplayer_25911;
        }
        case 1742: {
            return varbitplayer_25154;
        }
        case 1743: {
            return varbitplayer_25153;
        }
        case 1744: {
            return varbitplayer_25107;
        }
        case 1745: {
            return varbitplayer_25053;
        }
        case 1746: {
            if ((varbitplayer_25019 == 0)) {
                if ((varbitplayer_24981 == 1)) {
                    int7 = SETBIT(int7, 0);
                };
                if ((varbitplayer_24970 == 1)) {
                    int7 = SETBIT(int7, 1);
                };
                if ((varbitplayer_24972 == 1)) {
                    int7 = SETBIT(int7, 2);
                };
                if ((varbitplayer_24973 == 1)) {
                    int7 = SETBIT(int7, 3);
                };
                if ((varbitplayer_24974 == 1)) {
                    int7 = SETBIT(int7, 4);
                };
                if ((varbitplayer_24976 == 1)) {
                    int7 = SETBIT(int7, 5);
                };
                if ((varbitplayer_24979 == 1)) {
                    int7 = SETBIT(int7, 6);
                };
                if ((varbitplayer_24977 == 1)) {
                    int7 = SETBIT(int7, 7);
                };
                if ((varbitplayer_24980 == 1)) {
                    int7 = SETBIT(int7, 8);
                };
                if ((varbitplayer_24978 == 1)) {
                    int7 = SETBIT(int7, 9);
                };
                if ((varbitplayer_24971 == 1)) {
                    int7 = SETBIT(int7, 10);
                };
                if ((varbitplayer_24975 == 1)) {
                    int7 = SETBIT(int7, 11);
                };
            } else {
                int7 = unk11171(int7, 0, 11);
            };
            return int7;
        }
        case 1747: {
            if ((varbitplayer_25455 == 1)) {
                int7 = SETBIT(int7, 0);
            };
            if ((varbitplayer_25456 == 1)) {
                int7 = SETBIT(int7, 1);
            };
            if ((varbitplayer_25457 == 1)) {
                int7 = SETBIT(int7, 2);
            };
            if ((varbitplayer_25458 == 1)) {
                int7 = SETBIT(int7, 3);
            };
            if ((varbitplayer_25459 == 1)) {
                int7 = SETBIT(int7, 4);
            };
            if ((varbitplayer_25460 == 1)) {
                int7 = SETBIT(int7, 5);
            };
            if ((varbitplayer_25461 == 1)) {
                int7 = SETBIT(int7, 6);
            };
            if ((varbitplayer_25462 == 1)) {
                int7 = SETBIT(int7, 7);
            };
            if ((varbitplayer_25463 == 1)) {
                int7 = SETBIT(int7, 8);
            };
            if ((varbitplayer_25464 == 1)) {
                int7 = SETBIT(int7, 9);
            };
            if ((varbitplayer_25465 == 1)) {
                int7 = SETBIT(int7, 10);
            };
            if ((varbitplayer_25466 == 1)) {
                int7 = SETBIT(int7, 11);
            };
            if ((varbitplayer_25467 == 1)) {
                int7 = SETBIT(int7, 12);
            };
            if ((varbitplayer_25468 == 1)) {
                int7 = SETBIT(int7, 13);
            };
            if ((varbitplayer_25469 == 1)) {
                int7 = SETBIT(int7, 14);
            };
            if ((varbitplayer_25470 == 1)) {
                int7 = SETBIT(int7, 15);
            };
            return int7;
        }
        case 1748: {
            if ((varbitplayer_25954 == 1)) {
                int7 = SETBIT(int7, 0);
            };
            if ((varbitplayer_25955 == 1)) {
                int7 = SETBIT(int7, 1);
            };
            if ((varbitplayer_25956 == 1)) {
                int7 = SETBIT(int7, 2);
            };
            if ((varbitplayer_25957 == 1)) {
                int7 = SETBIT(int7, 3);
            };
            if ((varbitplayer_25958 == 1)) {
                int7 = SETBIT(int7, 4);
            };
            if ((varbitplayer_25959 == 1)) {
                int7 = SETBIT(int7, 5);
            };
            if ((varbitplayer_25960 == 1)) {
                int7 = SETBIT(int7, 6);
            };
            if ((varbitplayer_25961 == 1)) {
                int7 = SETBIT(int7, 7);
            };
            if ((varbitplayer_25962 == 1)) {
                int7 = SETBIT(int7, 8);
            };
            if ((varbitplayer_25963 == 1)) {
                int7 = SETBIT(int7, 9);
            };
            if ((varbitplayer_25964 == 1)) {
                int7 = SETBIT(int7, 10);
            };
            if ((varbitplayer_25965 == 1)) {
                int7 = SETBIT(int7, 11);
            };
            if ((varbitplayer_25966 == 1)) {
                int7 = SETBIT(int7, 12);
            };
            if ((varbitplayer_25967 == 1)) {
                int7 = SETBIT(int7, 13);
            };
            if ((varbitplayer_25968 == 1)) {
                int7 = SETBIT(int7, 14);
            };
            if ((varbitplayer_25969 == 1)) {
                int7 = SETBIT(int7, 15);
            };
            if ((varbitplayer_25970 == 1)) {
                int7 = SETBIT(int7, 16);
            };
            if ((varbitplayer_25971 == 1)) {
                int7 = SETBIT(int7, 17);
            };
            if ((varbitplayer_25972 == 1)) {
                int7 = SETBIT(int7, 18);
            };
            if ((varbitplayer_25973 == 1)) {
                int7 = SETBIT(int7, 19);
            };
            if ((varbitplayer_25978 == 1)) {
                int7 = SETBIT(int7, 20);
            };
            if ((varbitplayer_25979 == 1)) {
                int7 = SETBIT(int7, 21);
            };
            if ((varbitplayer_25974 == 1)) {
                int7 = SETBIT(int7, 22);
            };
            if ((varbitplayer_25975 == 1)) {
                int7 = SETBIT(int7, 23);
            };
            if ((varbitplayer_25976 == 1)) {
                int7 = SETBIT(int7, 24);
            };
            if ((varbitplayer_25977 == 1)) {
                int7 = SETBIT(int7, 25);
            };
            if ((varbitplayer_44557 == 1)) {
                int7 = SETBIT(int7, 26);
            };
            return int7;
        }
        case 4126: {
            if ((varbitplayer_45365 == 1)) {
                int7 = SETBIT(int7, 0);
            };
            if ((varbitplayer_45366 == 1)) {
                int7 = SETBIT(int7, 1);
            };
            if ((varbitplayer_45367 == 1)) {
                int7 = SETBIT(int7, 2);
            };
            return int7;
        }
        case 1749: {
            return varbitplayer_35403;
        }
        case 1751: {
            return script11544();
        }
        case 1753: {
            return varbitplayer_31205;
        }
        case 1754: {
            return script12519();
        }
        case 1759: {
            if ((varbitplayer_33148 == 1)) {
                int7 = SETBIT(int7, 0);
            };
            if ((varbitplayer_33149 == 1)) {
                int7 = SETBIT(int7, 1);
            };
            if ((varbitplayer_33150 == 1)) {
                int7 = SETBIT(int7, 2);
            };
            if ((varbitplayer_34297 == 1)) {
                int7 = SETBIT(int7, 3);
            };
            if ((varbitplayer_33876 == 1)) {
                int7 = SETBIT(int7, 4);
            };
            return int7;
        }
        case 1760: {
            if ((varbitplayer_33146 > 0)) {
                int7 = SETBIT(int7, 0);
            };
            if ((varbitplayer_33143 > 0)) {
                int7 = SETBIT(int7, 1);
            };
            if ((varbitplayer_33185 > 0)) {
                int7 = SETBIT(int7, 2);
            };
            if ((varbitplayer_33144 > 0)) {
                int7 = SETBIT(int7, 3);
            };
            if ((varbitplayer_33145 > 0)) {
                int7 = SETBIT(int7, 4);
            };
            return int7;
        }
        case 1771: {
            return varbitplayer_33874;
        }
        case 1774: {
            if ((varbitplayer_34786 > 0)) {
                int7 = SETBIT(int7, 0);
            };
            if ((varbitplayer_34787 > 0)) {
                int7 = SETBIT(int7, 1);
            };
            if ((varbitplayer_34788 > 0)) {
                int7 = SETBIT(int7, 2);
            };
            if ((varbitplayer_34789 > 0)) {
                int7 = SETBIT(int7, 3);
            };
            if ((varbitplayer_34790 > 0)) {
                int7 = SETBIT(int7, 4);
            };
            if ((varbitplayer_34791 > 0)) {
                int7 = SETBIT(int7, 5);
            };
            if ((varbitplayer_34792 > 0)) {
                int7 = SETBIT(int7, 6);
            };
            if ((varbitplayer_34793 > 0)) {
                int7 = SETBIT(int7, 7);
            };
            if ((varbitplayer_34794 > 0)) {
                int7 = SETBIT(int7, 8);
            };
            if ((varbitplayer_34795 > 0)) {
                int7 = SETBIT(int7, 9);
            };
            if ((varbitplayer_34796 > 0)) {
                int7 = SETBIT(int7, 10);
            };
            if ((varbitplayer_34797 > 0)) {
                int7 = SETBIT(int7, 11);
            };
            return int7;
        }
        case 1776: {
            return varplayer_2773;
        }
        case 1778: {
            return varbitplayer_9471;
        }
        case 1779: {
            if ((varbitplayer_12529 > 199)) {
                int7 = SETBIT(int7, 0);
            };
            if ((varbitplayer_12529 > 90)) {
                int7 = SETBIT(int7, 1);
            };
            if ((varbitplayer_12534 == 1)) {
                int7 = SETBIT(int7, 2);
            };
            if ((varbitplayer_12535 == 1)) {
                int7 = SETBIT(int7, 3);
            };
            if ((varbitplayer_12532 == 1)) {
                int7 = SETBIT(int7, 4);
            };
            if ((varbitplayer_12533 == 1)) {
                int7 = SETBIT(int7, 5);
            };
            return int7;
        }
        case 1780: {
            if ((varbitplayer_9065 > 0)) {
                int7 = SETBIT(int7, 0);
            };
            if ((varbitplayer_9066 > 0)) {
                int7 = SETBIT(int7, 1);
            };
            if ((varbitplayer_9067 > 0)) {
                int7 = SETBIT(int7, 2);
            };
            if ((varbitplayer_9085 > 0)) {
                int7 = SETBIT(int7, 3);
            };
            if ((varbitplayer_21387 > 0)) {
                int7 = SETBIT(int7, 4);
            };
            return int7;
        }
        case 1781: {
            return varbitplayer_25046;
        }
        case 1782: {
            return (varbitplayer_15092 + varbitplayer_15088);
        }
        case 1783: {
            if ((varbitplayer_9848 == 1)) {
                int7 = SETBIT(int7, 0);
            };
            if ((varbitplayer_9849 == 1)) {
                int7 = SETBIT(int7, 1);
            };
            if ((varbitplayer_9850 == 1)) {
                int7 = SETBIT(int7, 2);
            };
            if ((varbitplayer_9851 == 1)) {
                int7 = SETBIT(int7, 3);
            };
            if ((varbitplayer_9852 == 1)) {
                int7 = SETBIT(int7, 4);
            };
            return int7;
        }
        case 1786: {
            return varbitplayer_13729;
        }
        case 1787: {
            return varbitplayer_31406;
        }
        case 1788: {
            return varbitplayer_16269;
        }
        case 1789: {
            return varbitplayer_14000;
        }
        case 1790: {
            return varbitplayer_44124;
        }
        case 1791: {
            return varplayer_1627;
        }
        case 1792: {
            return varbitplayer_35383;
        }
        case 1793: {
            if ((varbitplayer_4513 == 5)) {
                int7 = SETBIT(int7, 0);
            };
            if ((varbitplayer_4515 == 5)) {
                int7 = SETBIT(int7, 1);
            };
            if ((varbitplayer_4516 == 5)) {
                int7 = SETBIT(int7, 2);
            };
            if ((varbitplayer_4517 == 5)) {
                int7 = SETBIT(int7, 3);
            };
            return int7;
        }
        case 1794: {
            if ((varbitplayer_1616 == 3)) {
                int7 = SETBIT(int7, 0);
            };
            if ((varbitplayer_1617 == 3)) {
                int7 = SETBIT(int7, 1);
            };
            if ((varbitplayer_1618 == 3)) {
                int7 = SETBIT(int7, 2);
            };
            if ((varbitplayer_1620 == 3)) {
                int7 = SETBIT(int7, 3);
            };
            if ((varbitplayer_1621 == 3)) {
                int7 = SETBIT(int7, 4);
            };
            if ((varbitplayer_1622 == 3)) {
                int7 = SETBIT(int7, 5);
            };
            if ((varbitplayer_1623 == 3)) {
                int7 = SETBIT(int7, 6);
            };
            return int7;
        }
        case 1795: {
            return varbitplayer_35401;
        }
        case 1796: {
            if ((varbitplayer_328 == 1)) {
                int7 = SETBIT(int7, 0);
            };
            if ((varbitplayer_327 == 1)) {
                int7 = SETBIT(int7, 1);
            };
            if ((varbitplayer_43051 >= 1)) {
                int7 = SETBIT(int7, 2);
            };
            if ((varbitplayer_43051 >= 2)) {
                int7 = SETBIT(int7, 3);
            };
            if ((varbitplayer_43051 >= 3)) {
                int7 = SETBIT(int7, 4);
            };
            if ((varbitplayer_43051 >= 4)) {
                int7 = SETBIT(int7, 5);
            };
            if ((varbitplayer_43051 >= 5)) {
                int7 = SETBIT(int7, 6);
            };
            if ((varbitplayer_334 == 1)) {
                int7 = SETBIT(int7, 7);
            };
            if ((varbitplayer_335 == 1)) {
                int7 = SETBIT(int7, 8);
            };
            if ((varbitplayer_336 == 1)) {
                int7 = SETBIT(int7, 9);
            };
            if ((varbitplayer_337 == 1)) {
                int7 = SETBIT(int7, 10);
            };
            if ((varbitplayer_338 == 1)) {
                int7 = SETBIT(int7, 11);
            };
            if ((varbitplayer_332 == 1)) {
                int7 = SETBIT(int7, 12);
            };
            if ((varbitplayer_333 == 1)) {
                int7 = SETBIT(int7, 13);
            };
            if ((varbitplayer_28413 == 1)) {
                int7 = SETBIT(int7, 14);
            };
            if ((varbitplayer_28414 == 1)) {
                int7 = SETBIT(int7, 15);
            };
            return int7;
        }
        case 3812: {
            if (((((((((((((varbitplayer_328 == 1) && (varbitplayer_327 == 1)) && (varbitplayer_43051 >= 5)) && (varbitplayer_334 == 1)) && (varbitplayer_335 == 1)) && (varbitplayer_336 == 1)) && (varbitplayer_337 == 1)) && (varbitplayer_338 == 1)) && (varbitplayer_332 == 1)) && (varbitplayer_333 == 1)) && (varbitplayer_28413 == 1)) && (varbitplayer_28414 == 1))) {
                int7 = SETBIT(int7, 0);
            };
            if ((script10881(43588 as struct) == 1)) {
                int7 = SETBIT(int7, 1);
            };
            if ((script10881(43606 as struct) == 1)) {
                int7 = SETBIT(int7, 2);
            };
            if ((script10881(43624 as struct) == 1)) {
                int7 = SETBIT(int7, 3);
            };
            return int7;
        }
        case 1797: {
            if ((varbitplayer_5491 >= 1)) {
                int7 = SETBIT(int7, 0);
            };
            if ((varbitplayer_5491 >= 2)) {
                int7 = SETBIT(int7, 1);
            };
            if ((varbitplayer_5491 >= 3)) {
                int7 = SETBIT(int7, 2);
            };
            if ((varbitplayer_5491 >= 4)) {
                int7 = SETBIT(int7, 3);
            };
            if ((varbitplayer_5491 >= 5)) {
                int7 = SETBIT(int7, 4);
            };
            if ((varbitplayer_5490 >= 1)) {
                int7 = SETBIT(int7, 5);
            };
            if ((varbitplayer_5490 >= 2)) {
                int7 = SETBIT(int7, 6);
            };
            if ((varbitplayer_5490 >= 3)) {
                int7 = SETBIT(int7, 7);
            };
            if ((varbitplayer_5490 >= 4)) {
                int7 = SETBIT(int7, 8);
            };
            if ((varbitplayer_5490 >= 5)) {
                int7 = SETBIT(int7, 9);
            };
            if ((varbitplayer_5492 >= 1)) {
                int7 = SETBIT(int7, 10);
            };
            if ((varbitplayer_5492 >= 2)) {
                int7 = SETBIT(int7, 11);
            };
            if ((varbitplayer_5492 >= 3)) {
                int7 = SETBIT(int7, 12);
            };
            if ((varbitplayer_5492 >= 4)) {
                int7 = SETBIT(int7, 13);
            };
            if ((varbitplayer_5493 >= 1)) {
                int7 = SETBIT(int7, 14);
            };
            if ((varbitplayer_5493 >= 2)) {
                int7 = SETBIT(int7, 15);
            };
            if ((varbitplayer_5493 >= 3)) {
                int7 = SETBIT(int7, 16);
            };
            if ((varbitplayer_5493 >= 4)) {
                int7 = SETBIT(int7, 17);
            };
            if ((varbitplayer_5493 >= 5)) {
                int7 = SETBIT(int7, 18);
            };
            if ((varbitplayer_5493 >= 6)) {
                int7 = SETBIT(int7, 19);
            };
            if ((varbitplayer_5493 >= 7)) {
                int7 = SETBIT(int7, 20);
            };
            if ((varbitplayer_5493 >= 8)) {
                int7 = SETBIT(int7, 21);
            };
            if ((varbitplayer_5493 >= 9)) {
                int7 = SETBIT(int7, 22);
            };
            if ((varbitplayer_5493 >= 10)) {
                int7 = SETBIT(int7, 23);
            };
            if ((varbitplayer_5493 >= 11)) {
                int7 = SETBIT(int7, 24);
            };
            if ((varbitplayer_5493 >= 12)) {
                int7 = SETBIT(int7, 25);
            };
            if ((varbitplayer_5494 >= 1)) {
                int7 = SETBIT(int7, 26);
            };
            if ((varbitplayer_5494 >= 2)) {
                int7 = SETBIT(int7, 27);
            };
            return int7;
        }
        case 1798: {
            return varbitplayer_15181;
        }
        case 1799: {
            if ((varbitplayer_2371 == 1)) {
                int7 = SETBIT(int7, 0);
            };
            if ((varbitplayer_2451 == 1)) {
                int7 = SETBIT(int7, 1);
            };
            if ((varbitplayer_2453 == 1)) {
                int7 = SETBIT(int7, 2);
            };
            if ((varbitplayer_22570 == 1)) {
                int7 = SETBIT(int7, 3);
            };
            if ((varbitplayer_22571 == 1)) {
                int7 = SETBIT(int7, 4);
            };
            if ((varbitplayer_22572 == 1)) {
                int7 = SETBIT(int7, 5);
            };
            if ((varbitplayer_36969 == 1)) {
                int7 = SETBIT(int7, 6);
            };
            if ((varbitplayer_22592 == 1)) {
                int7 = SETBIT(int7, 7);
            };
            return int7;
        }
        case 1801: {
            return varbitplayer_11703;
        }
        case 1802: {
            return varbitplayer_16529;
        }
        case 1803: {
            return varbitplayer_4673;
        }
        case 1804: {
            if (((varbitplayer_12692 == 1) && (varbitplayer_12693 == 1))) {
                return 1;
            };
            return 0;
        }
        case 1805: {
            if ((varbitplayer_16240 == 1)) {
                int7 = SETBIT(int7, 0);
            };
            if ((varbitplayer_16241 == 1)) {
                int7 = SETBIT(int7, 1);
            };
            if ((varbitplayer_16242 == 1)) {
                int7 = SETBIT(int7, 2);
            };
            if ((varbitplayer_16243 == 1)) {
                int7 = SETBIT(int7, 3);
            };
            return int7;
        }
        case 1806: {
            return varbitplayer_17458;
        }
        case 1807: {
            return varbitplayer_18552;
        }
        case 1808: {
            return varbitplayer_20808;
        }
        case 1809: {
            return script5520();
        }
        case 1810: {
            if ((varbitplayer_22911 == 1)) {
                int7 = SETBIT(int7, 0);
            };
            if ((varbitplayer_22912 == 1)) {
                int7 = SETBIT(int7, 1);
            };
            if ((varbitplayer_22915 == 1)) {
                int7 = SETBIT(int7, 3);
            };
            if ((varbitplayer_34845 == 1)) {
                int7 = SETBIT(int7, 4);
            };
            if ((varbitplayer_34846 == 1)) {
                int7 = SETBIT(int7, 5);
            };
            if ((varbitplayer_34847 == 1)) {
                int7 = SETBIT(int7, 6);
            };
            if ((varbitplayer_34848 == 1)) {
                int7 = SETBIT(int7, 7);
            };
            if ((varbitplayer_34850 == 1)) {
                int7 = SETBIT(int7, 8);
            };
            return int7;
        }
        case 1811: {
            return varbitplayer_22916;
        }
        case 1812: {
            if ((varbitplayer_22573 >= 1)) {
                int7 = SETBIT(int7, 0);
            };
            if ((varbitplayer_22573 >= 2)) {
                int7 = SETBIT(int7, 1);
            };
            if ((varbitplayer_22573 >= 3)) {
                int7 = SETBIT(int7, 2);
            };
            if ((varbitplayer_22573 >= 4)) {
                int7 = SETBIT(int7, 3);
            };
            if ((varbitplayer_22573 == 5)) {
                int7 = SETBIT(int7, 4);
            };
            return int7;
        }
        case 1813: {
            return varbitplayer_25107;
        }
        case 1814: {
            return varbitplayer_25562;
        }
        case 1815: {
            if (((script11544() == 0) || (varbitplayer_27658 < 3))) {
                return 0;
            };
            return 1;
        }
        case 1817: {
            return varbitplayer_33782;
        }
        case 1818: {
            if (((varbitplayer_33911 == 0) || (varbitplayer_33908 == 0))) {
                return 0;
            };
            return 1;
        }
        case 1819: {
            if (((varbitplayer_33909 == 0) || (varbitplayer_33902 == 0))) {
                return 0;
            };
            return 1;
        }
        case 1820: {
            if (((varbitplayer_33910 == 0) || (varbitplayer_33907 == 0))) {
                return 0;
            };
            return 1;
        }
        case 1821: {
            return varbitplayer_33922;
        }
        case 1822: {
            return varbitplayer_33923;
        }
        case 1823: {
            return varbitplayer_33921;
        }
        case 1824: {
            return varbitplayer_34739;
        }
        case 1827: {
            return varbitplayer_22717;
        }
        case 1828: {
            return varbitplayer_35845;
        }
        case 1830: {
            return varbitplayer_5494;
        }
        case 1833: {
            if ((varbitplayer_18027 == 1)) {
                int7 = SETBIT(int7, 0);
            };
            if ((varbitplayer_18029 == 1)) {
                int7 = SETBIT(int7, 1);
            };
            if ((varbitplayer_18028 == 1)) {
                int7 = SETBIT(int7, 2);
            };
            return int7;
        }
        case 1835: {
            if ((varbitplayer_12837 == 6)) {
                int7 = SETBIT(int7, 0);
            };
            if ((varbitplayer_9902 >= 11)) {
                int7 = SETBIT(int7, 1);
            };
            if ((varbitplayer_9902 == 12)) {
                int7 = SETBIT(int7, 2);
            };
            return int7;
        }
        case 1837: {
            if ((varbitplayer_18420 == 7)) {
                int7 = SETBIT(int7, 0);
            };
            if ((varbitplayer_18421 == 6)) {
                int7 = SETBIT(int7, 1);
            };
            if ((varbitplayer_18422 == 6)) {
                int7 = SETBIT(int7, 2);
            };
            if (((varbitplayer_18426 == 1) || (varbitplayer_35386 == 1))) {
                int7 = SETBIT(int7, 3);
            };
            return int7;
        }
        case 1838: {
            if (((varbitplayer_11034 != 100) || (varbitplayer_11026 != 101))) {
                return 0;
            };
            return 1;
        }
        case 1839: {
            return varbitplayer_20582;
        }
        case 1841: {
            if ((varbitplayer_28376 == 3)) {
                int7 = SETBIT(int7, 0);
            };
            if ((varbitplayer_28377 == 3)) {
                int7 = SETBIT(int7, 1);
            };
            return int7;
        }
        case 1842: {
            if ((varbitplayer_22920 == 1)) {
                int7 = SETBIT(int7, 0);
            };
            if ((varbitplayer_22993 == 1)) {
                int7 = SETBIT(int7, 1);
            };
            return int7;
        }
        case 1843: {
            return varbitplayer_35396;
        }
        case 1844: {
            if ((varbitplayer_28540 == 1)) {
                int7 = SETBIT(int7, 0);
            };
            if ((varbitplayer_28541 == 1)) {
                int7 = SETBIT(int7, 1);
            };
            if ((varbitplayer_28542 == 1)) {
                int7 = SETBIT(int7, 2);
            };
            if ((varbitplayer_28543 == 1)) {
                int7 = SETBIT(int7, 3);
            };
            return int7;
        }
        case 1846: {
            if ((varbitplayer_18551 == 3)) {
                return 1;
            };
            return 0;
        }
        case 1848: {
            if ((varbitplayer_21853 == 1)) {
                int7 = SETBIT(int7, 0);
            };
            if ((varbitplayer_21852 == 1)) {
                int7 = SETBIT(int7, 1);
            };
            if ((varbitplayer_21851 == 1)) {
                int7 = SETBIT(int7, 2);
            };
            if ((varbitplayer_21854 == 1)) {
                int7 = SETBIT(int7, 3);
            };
            return int7;
        }
        case 1849: {
            return varbitplayer_28383;
        }
        case 1850: {
            return varbitplayer_1519;
        }
        case 1852: {
            if ((varbitplayer_2168 == 1)) {
                int7 = SETBIT(int7, 0);
            };
            if ((varbitplayer_2169 == 1)) {
                int7 = SETBIT(int7, 1);
            };
            if ((varbitplayer_2170 == 1)) {
                int7 = SETBIT(int7, 2);
            };
            if ((varbitplayer_2171 == 1)) {
                int7 = SETBIT(int7, 3);
            };
            if ((varbitplayer_2172 == 1)) {
                int7 = SETBIT(int7, 4);
            };
            if ((varbitplayer_2173 == 1)) {
                int7 = SETBIT(int7, 5);
            };
            if ((varbitplayer_2174 == 1)) {
                int7 = SETBIT(int7, 6);
            };
            if ((varbitplayer_2175 == 1)) {
                int7 = SETBIT(int7, 7);
            };
            if ((varbitplayer_2176 == 1)) {
                int7 = SETBIT(int7, 8);
            };
            if ((varbitplayer_2177 == 1)) {
                int7 = SETBIT(int7, 9);
            };
            if ((varbitplayer_2178 == 1)) {
                int7 = SETBIT(int7, 10);
            };
            if ((varbitplayer_2179 == 1)) {
                int7 = SETBIT(int7, 11);
            };
            if ((varbitplayer_2180 == 1)) {
                int7 = SETBIT(int7, 12);
            };
            if ((varbitplayer_2181 == 1)) {
                int7 = SETBIT(int7, 13);
            };
            if ((varbitplayer_2182 == 1)) {
                int7 = SETBIT(int7, 14);
            };
            if ((varbitplayer_2183 == 1)) {
                int7 = SETBIT(int7, 15);
            };
            if ((varbitplayer_2184 == 1)) {
                int7 = SETBIT(int7, 16);
            };
            if ((varbitplayer_2185 == 1)) {
                int7 = SETBIT(int7, 17);
            };
            if ((varbitplayer_2186 == 1)) {
                int7 = SETBIT(int7, 18);
            };
            if ((varbitplayer_2187 == 1)) {
                int7 = SETBIT(int7, 19);
            };
            if ((varbitplayer_2188 == 1)) {
                int7 = SETBIT(int7, 20);
            };
            if ((varbitplayer_2189 == 1)) {
                int7 = SETBIT(int7, 21);
            };
            if ((varbitplayer_2190 == 1)) {
                int7 = SETBIT(int7, 22);
            };
            if ((varbitplayer_2191 == 1)) {
                int7 = SETBIT(int7, 23);
            };
            if ((varbitplayer_2192 == 1)) {
                int7 = SETBIT(int7, 24);
            };
            if ((varbitplayer_2193 == 1)) {
                int7 = SETBIT(int7, 25);
            };
            if ((varbitplayer_2194 == 1)) {
                int7 = SETBIT(int7, 26);
            };
            if ((varbitplayer_2195 == 1)) {
                int7 = SETBIT(int7, 27);
            };
            if ((varbitplayer_2196 == 1)) {
                int7 = SETBIT(int7, 28);
            };
            if ((varbitplayer_2197 == 1)) {
                int7 = SETBIT(int7, 29);
            };
            return int7;
        }
        case 1853: {
            if ((varbitplayer_2203 == 1)) {
                int7 = SETBIT(int7, 0);
            };
            if ((varbitplayer_2210 == 1)) {
                int7 = SETBIT(int7, 1);
            };
            if ((varbitplayer_2215 == 1)) {
                int7 = SETBIT(int7, 2);
            };
            if ((varbitplayer_2217 == 1)) {
                int7 = SETBIT(int7, 3);
            };
            if ((varbitplayer_2226 == 1)) {
                int7 = SETBIT(int7, 4);
            };
            return int7;
        }
        case 1854: {
            if ((varbitplayer_2202 == 1)) {
                int7 = SETBIT(int7, 0);
            };
            if ((varbitplayer_2213 == 1)) {
                int7 = SETBIT(int7, 1);
            };
            if ((varbitplayer_2214 == 1)) {
                int7 = SETBIT(int7, 2);
            };
            if ((varbitplayer_2220 == 1)) {
                int7 = SETBIT(int7, 3);
            };
            if ((varbitplayer_2227 == 1)) {
                int7 = SETBIT(int7, 4);
            };
            return int7;
        }
        case 1855: {
            if ((varbitplayer_2200 == 1)) {
                int7 = SETBIT(int7, 0);
            };
            if ((varbitplayer_2206 == 1)) {
                int7 = SETBIT(int7, 1);
            };
            if ((varbitplayer_2209 == 1)) {
                int7 = SETBIT(int7, 2);
            };
            if ((varbitplayer_2221 == 1)) {
                int7 = SETBIT(int7, 3);
            };
            if ((varbitplayer_2225 == 1)) {
                int7 = SETBIT(int7, 4);
            };
            return int7;
        }
        case 1856: {
            if ((varbitplayer_2228 == 1)) {
                int7 = SETBIT(int7, 0);
            };
            if ((varbitplayer_2229 == 1)) {
                int7 = SETBIT(int7, 1);
            };
            if ((varbitplayer_2230 == 1)) {
                int7 = SETBIT(int7, 2);
            };
            if ((varbitplayer_2231 == 1)) {
                int7 = SETBIT(int7, 3);
            };
            if ((varbitplayer_2232 == 1)) {
                int7 = SETBIT(int7, 4);
            };
            if ((varbitplayer_2233 == 1)) {
                int7 = SETBIT(int7, 5);
            };
            if ((varbitplayer_2234 == 1)) {
                int7 = SETBIT(int7, 6);
            };
            if ((varbitplayer_2235 == 1)) {
                int7 = SETBIT(int7, 7);
            };
            if ((varbitplayer_2236 == 1)) {
                int7 = SETBIT(int7, 8);
            };
            if ((varbitplayer_2237 == 1)) {
                int7 = SETBIT(int7, 9);
            };
            return int7;
        }
        case 1857: {
            if ((varbitplayer_2198 == 1)) {
                int7 = SETBIT(int7, 0);
            };
            if ((varbitplayer_2199 == 1)) {
                int7 = SETBIT(int7, 1);
            };
            if ((varbitplayer_2201 == 1)) {
                int7 = SETBIT(int7, 2);
            };
            if ((varbitplayer_2204 == 1)) {
                int7 = SETBIT(int7, 3);
            };
            if ((varbitplayer_2205 == 1)) {
                int7 = SETBIT(int7, 4);
            };
            if ((varbitplayer_2207 == 1)) {
                int7 = SETBIT(int7, 5);
            };
            if ((varbitplayer_2208 == 1)) {
                int7 = SETBIT(int7, 6);
            };
            if ((varbitplayer_2211 == 1)) {
                int7 = SETBIT(int7, 7);
            };
            if ((varbitplayer_2212 == 1)) {
                int7 = SETBIT(int7, 8);
            };
            if ((varbitplayer_2216 == 1)) {
                int7 = SETBIT(int7, 9);
            };
            if ((varbitplayer_2219 == 1)) {
                int7 = SETBIT(int7, 10);
            };
            if ((varbitplayer_2218 == 1)) {
                int7 = SETBIT(int7, 11);
            };
            if ((varbitplayer_2222 == 1)) {
                int7 = SETBIT(int7, 12);
            };
            if ((varbitplayer_2223 == 1)) {
                int7 = SETBIT(int7, 13);
            };
            if ((varbitplayer_2224 == 1)) {
                int7 = SETBIT(int7, 14);
            };
            return int7;
        }
        case 1858: {
            if ((varbitplayer_15155 == 1)) {
                int7 = SETBIT(int7, 0);
            };
            if ((varbitplayer_15157 == 1)) {
                int7 = SETBIT(int7, 1);
            };
            if ((varbitplayer_15169 == 1)) {
                int7 = SETBIT(int7, 2);
            };
            if ((varbitplayer_15170 == 1)) {
                int7 = SETBIT(int7, 3);
            };
            if ((varbitplayer_15156 == 1)) {
                int7 = SETBIT(int7, 4);
            };
            return int7;
        }
        case 1859: {
            return varbitplayer_15161;
        }
        case 1860: {
            return varbitplayer_18482;
        }
        case 1861: {
            if ((varbitplayer_28778 == 1)) {
                int7 = SETBIT(int7, 0);
            };
            if ((varbitplayer_28779 == 1)) {
                int7 = SETBIT(int7, 1);
            };
            if ((varbitplayer_28780 == 1)) {
                int7 = SETBIT(int7, 2);
            };
            if ((varbitplayer_28781 == 1)) {
                int7 = SETBIT(int7, 3);
            };
            if ((varbitplayer_28782 == 1)) {
                int7 = SETBIT(int7, 4);
            };
            return int7;
        }
        case 1862: {
            return varbitplayer_3732;
        }
        case 1863: {
            if ((varbitplayer_1628 == 1)) {
                int7 = SETBIT(int7, 0);
            };
            if ((varbitplayer_1629 == 1)) {
                int7 = SETBIT(int7, 1);
            };
            if ((varbitplayer_1630 == 1)) {
                int7 = SETBIT(int7, 2);
            };
            if ((varbitplayer_1631 == 1)) {
                int7 = SETBIT(int7, 3);
            };
            if ((varbitplayer_1632 == 1)) {
                int7 = SETBIT(int7, 4);
            };
            if ((varbitplayer_1633 == 1)) {
                int7 = SETBIT(int7, 5);
            };
            if ((varbitplayer_1634 == 1)) {
                int7 = SETBIT(int7, 6);
            };
            if ((varbitplayer_1635 == 1)) {
                int7 = SETBIT(int7, 7);
            };
            if ((varbitplayer_1636 == 1)) {
                int7 = SETBIT(int7, 8);
            };
            if ((varbitplayer_1637 == 1)) {
                int7 = SETBIT(int7, 9);
            };
            if ((varbitplayer_1638 == 1)) {
                int7 = SETBIT(int7, 10);
            };
            if ((varbitplayer_1639 == 1)) {
                int7 = SETBIT(int7, 11);
            };
            if ((varbitplayer_1640 == 1)) {
                int7 = SETBIT(int7, 12);
            };
            if ((varbitplayer_1641 == 1)) {
                int7 = SETBIT(int7, 13);
            };
            if ((varbitplayer_1642 == 1)) {
                int7 = SETBIT(int7, 14);
            };
            if ((varbitplayer_1643 == 1)) {
                int7 = SETBIT(int7, 15);
            };
            if ((varbitplayer_1644 == 1)) {
                int7 = SETBIT(int7, 16);
            };
            if ((varbitplayer_1645 == 1)) {
                int7 = SETBIT(int7, 17);
            };
            if ((varbitplayer_1646 == 1)) {
                int7 = SETBIT(int7, 18);
            };
            if ((varbitplayer_1647 == 1)) {
                int7 = SETBIT(int7, 19);
            };
            if ((varbitplayer_1648 == 1)) {
                int7 = SETBIT(int7, 20);
            };
            if ((varbitplayer_1649 == 1)) {
                int7 = SETBIT(int7, 21);
            };
            if ((varbitplayer_1650 == 1)) {
                int7 = SETBIT(int7, 22);
            };
            if ((varbitplayer_1651 == 1)) {
                int7 = SETBIT(int7, 23);
            };
            if ((varbitplayer_1652 == 1)) {
                int7 = SETBIT(int7, 24);
            };
            if ((varbitplayer_1653 == 1)) {
                int7 = SETBIT(int7, 25);
            };
            return int7;
        }
        case 1864: {
            return varbitplayer_21005;
        }
        case 1865: {
            return varbitplayer_17866;
        }
        case 1866: {
            return varbitplayer_11858;
        }
        case 1867: {
            return varbitplayer_10871;
        }
        case 1868: {
            return varplayer_2762;
        }
        case 1870: {
            return varbitplayer_16309;
        }
        case 1871: {
            return varbitplayer_10842;
        }
        case 1872: {
            return varbitplayer_10794;
        }
        case 1874: {
            if ((varbitplayer_27181 == 1)) {
                int7 = SETBIT(int7, 0);
            };
            if ((varbitplayer_4171 == 1)) {
                int7 = SETBIT(int7, 1);
            };
            if ((varbitplayer_27386 == 1)) {
                int7 = SETBIT(int7, 2);
            };
            if ((varbitplayer_27182 == 1)) {
                int7 = SETBIT(int7, 3);
            };
            if ((varbitplayer_27183 == 1)) {
                int7 = SETBIT(int7, 4);
            };
            if ((varbitplayer_27184 == 1)) {
                int7 = SETBIT(int7, 5);
            };
            if ((varbitplayer_27185 == 1)) {
                int7 = SETBIT(int7, 6);
            };
            if ((varbitplayer_27193 == 1)) {
                int7 = SETBIT(int7, 7);
            };
            if ((varbitplayer_27194 == 1)) {
                int7 = SETBIT(int7, 8);
            };
            if ((varbitplayer_27195 == 1)) {
                int7 = SETBIT(int7, 9);
            };
            if ((varbitplayer_27196 == 1)) {
                int7 = SETBIT(int7, 10);
            };
            if ((varbitplayer_27197 == 1)) {
                int7 = SETBIT(int7, 11);
            };
            return int7;
        }
        case 1875: {
            if ((varbitplayer_20011 == 1)) {
                int7 = SETBIT(int7, 0);
            };
            if ((varbitplayer_20012 == 1)) {
                int7 = SETBIT(int7, 1);
            };
            if ((varbitplayer_20013 == 1)) {
                int7 = SETBIT(int7, 2);
            };
            if ((varbitplayer_20014 == 1)) {
                int7 = SETBIT(int7, 3);
            };
            if ((varbitplayer_20015 == 1)) {
                int7 = SETBIT(int7, 4);
            };
            if ((varbitplayer_20412 == 1)) {
                int7 = SETBIT(int7, 5);
            };
            if ((varbitplayer_20413 == 1)) {
                int7 = SETBIT(int7, 6);
            };
            if ((varbitplayer_20414 == 1)) {
                int7 = SETBIT(int7, 7);
            };
            if ((varbitplayer_20415 == 1)) {
                int7 = SETBIT(int7, 8);
            };
            if ((varbitplayer_20416 == 1)) {
                int7 = SETBIT(int7, 9);
            };
            return int7;
        }
        case 1876: {
            if ((varbitplayer_20020 == 1)) {
                int7 = SETBIT(int7, 0);
            };
            if ((varbitplayer_20022 == 1)) {
                int7 = SETBIT(int7, 1);
            };
            if ((varbitplayer_20023 == 1)) {
                int7 = SETBIT(int7, 2);
            };
            if ((varbitplayer_19977 == 1)) {
                int7 = SETBIT(int7, 3);
            };
            return int7;
        }
        case 1877: {
            if ((varbitplayer_9931 == 1)) {
                int7 = SETBIT(int7, 0);
            };
            if ((varbitplayer_9932 == 2)) {
                int7 = SETBIT(int7, 1);
            };
            return int7;
        }
        case 1878: {
            if ((varbitplayer_9956 == 1)) {
                int7 = SETBIT(int7, 0);
            };
            if ((varbitplayer_9948 == 1)) {
                int7 = SETBIT(int7, 1);
            };
            return int7;
        }
        case 1879: {
            return varbitplayer_9955;
        }
        case 1880: {
            return varbitplayer_10411;
        }
        case 1881: {
            return varbitplayer_12488;
        }
        case 1882: {
            return varbitplayer_11017;
        }
        case 1883: {
            return varbitplayer_12209;
        }
        case 1884: {
            return varbitplayer_9739;
        }
        case 1885: {
            return varbitplayer_9583;
        }
        case 1886: {
            return varbitplayer_12311;
        }
        case 1887: {
            return varbitplayer_16452;
        }
        case 1888: {
            if ((varbitplayer_27072 == 2)) {
                int7 = SETBIT(int7, 0);
            };
            if ((varbitplayer_27073 == 2)) {
                int7 = SETBIT(int7, 1);
            };
            if ((varbitplayer_27074 == 2)) {
                int7 = SETBIT(int7, 2);
            };
            return int7;
        }
        case 1889: {
            if ((varbitplayer_27076 == 3)) {
                int7 = SETBIT(int7, 0);
            };
            if ((varbitplayer_27077 == 3)) {
                int7 = SETBIT(int7, 1);
            };
            if ((varbitplayer_27079 == 3)) {
                int7 = SETBIT(int7, 2);
            };
            if ((varbitplayer_27080 == 3)) {
                int7 = SETBIT(int7, 3);
            };
            if ((varbitplayer_27081 == 3)) {
                int7 = SETBIT(int7, 4);
            };
            return int7;
        }
        case 1890: {
            return varbitplayer_10820;
        }
        case 1891: {
            return varbitplayer_26258;
        }
        case 1892: {
            return varbitplayer_26719;
        }
        case 1893: {
            return varbitplayer_5059;
        }
        case 1894: {
            if ((varbitplayer_12598 >= 160)) {
                int7 = SETBIT(int7, 0);
            };
            if ((varbitplayer_12599 == 1)) {
                int7 = SETBIT(int7, 1);
            };
            return int7;
        }
        case 1895: {
            if ((varbitplayer_20674 == 1)) {
                int7 = SETBIT(int7, 0);
            };
            if ((varbitplayer_20675 == 1)) {
                int7 = SETBIT(int7, 1);
            };
            if ((varbitplayer_20676 == 1)) {
                int7 = SETBIT(int7, 2);
            };
            if ((varbitplayer_20660 == 1)) {
                int7 = SETBIT(int7, 3);
            };
            return int7;
        }
        case 1896: {
            if ((varbitplayer_21847 == 1)) {
                int7 = SETBIT(int7, 0);
            };
            if ((varbitplayer_21848 == 1)) {
                int7 = SETBIT(int7, 1);
            };
            return int7;
        }
        case 1897: {
            if ((varbitplayer_21899 == 3)) {
                int7 = SETBIT(int7, 0);
            };
            if ((varbitplayer_21850 == 1)) {
                int7 = SETBIT(int7, 1);
            };
            return int7;
        }
        case 1898: {
            if ((varbitplayer_21849 == 1)) {
                int7 = SETBIT(int7, 0);
            };
            if ((varbitplayer_21846 == 1)) {
                int7 = SETBIT(int7, 1);
            };
            return int7;
        }
        case 1899: {
            return varbitplayer_9441;
        }
        case 1900: {
            return varbitplayer_9439;
        }
        case 1901: {
            if (((varbitplayer_9324 == 315) && (varbitplayer_48272 == 1))) {
                return 1;
            };
            return 0;
        }
        case 1902: {
            return varbitplayer_13860;
        }
        case 1903: {
            if ((varbitplayer_13882 == 1)) {
                int7 = SETBIT(int7, 0);
            };
            if ((varbitplayer_13880 == 1)) {
                int7 = SETBIT(int7, 1);
            };
            if ((varbitplayer_13881 == 1)) {
                int7 = SETBIT(int7, 2);
            };
            if ((varbitplayer_13876 >= 70)) {
                int7 = SETBIT(int7, 3);
            };
            return int7;
        }
        case 1904: {
            return varbitplayer_16837;
        }
        case 1905: {
            if ((varbitplayer_21735 == 1)) {
                int7 = SETBIT(int7, 0);
            };
            if ((varbitplayer_21717 == 40)) {
                int7 = SETBIT(int7, 1);
            };
            return int7;
        }
        case 1913: {
            return varbitplayer_25045;
        }
        case 1914: {
            return varbitplayer_13434;
        }
        case 1915: {
            return varbitplayer_4917;
        }
        case 1917: {
            return varbitplayer_22464;
        }
        case 1918: {
            return varbitplayer_13647;
        }
        case 1919: {
            return varbitplayer_9029;
        }
        case 1920: {
            return varbitplayer_13010;
        }
        case 1921: {
            return varbitplayer_12167;
        }
        case 1922: {
            return varbitplayer_9515;
        }
        case 1923: {
            if (((varbitplayer_11228 == 250) && (varbitplayer_48273 == 1))) {
                int7 = SETBIT(int7, 0);
            };
            return int7;
        }
        case 1924: {
            return varbitplayer_4306;
        }
        case 1926: {
            if ((varbitplayer_10833 == 3)) {
                int7 = SETBIT(int7, 0);
            };
            if ((varbitplayer_10834 == 3)) {
                int7 = SETBIT(int7, 1);
            };
            if ((varbitplayer_10835 == 3)) {
                int7 = SETBIT(int7, 2);
            };
            if ((varbitplayer_10836 == 3)) {
                int7 = SETBIT(int7, 3);
            };
            if ((varbitplayer_10837 == 3)) {
                int7 = SETBIT(int7, 4);
            };
            if ((varbitplayer_10838 == 3)) {
                int7 = SETBIT(int7, 5);
            };
            return int7;
        }
        case 1927: {
            if ((varbitplayer_25783 == 2)) {
                int7 = SETBIT(int7, 0);
            };
            if ((varbitplayer_25784 == 2)) {
                int7 = SETBIT(int7, 1);
            };
            if ((varbitplayer_25785 == 2)) {
                int7 = SETBIT(int7, 2);
            };
            if ((varbitplayer_25786 == 2)) {
                int7 = SETBIT(int7, 3);
            };
            if ((varbitplayer_25787 == 2)) {
                int7 = SETBIT(int7, 4);
            };
            if ((varbitplayer_25788 == 2)) {
                int7 = SETBIT(int7, 5);
            };
            if ((varbitplayer_25789 == 2)) {
                int7 = SETBIT(int7, 6);
            };
            if ((varbitplayer_25790 == 2)) {
                int7 = SETBIT(int7, 7);
            };
            if ((varbitplayer_25791 == 2)) {
                int7 = SETBIT(int7, 8);
            };
            if ((varbitplayer_25562 == 3)) {
                int7 = SETBIT(int7, 9);
            };
            return int7;
        }
        case 1928: {
            return varbitplayer_10857;
        }
        case 1931: {
            return (varbitplayer_12900 + varbitplayer_12899);
        }
        case 1933: {
            return varplayer_2773;
        }
        case 1934: {
            return varbitplayer_9195;
        }
        case 1936: {
            return varplayer_2630;
        }
        case 1937: {
            return varbitplayer_11650;
        }
        case 1938: {
            if ((varbitplayer_9471 >= 5)) {
                int7 = SETBIT(int7, 0);
            };
            if ((varbitplayer_9469 >= 3)) {
                int7 = SETBIT(int7, 1);
            };
            if ((varbitplayer_9470 >= 3)) {
                int7 = SETBIT(int7, 2);
            };
            return int7;
        }
        case 1939: {
            if ((varbitplayer_11764 == 1)) {
                int7 = SETBIT(int7, 0);
            };
            if ((varbitplayer_11765 == 1)) {
                int7 = SETBIT(int7, 1);
            };
            if ((varbitplayer_11766 == 1)) {
                int7 = SETBIT(int7, 2);
            };
            if ((varbitplayer_11767 == 1)) {
                int7 = SETBIT(int7, 3);
            };
            return int7;
        }
        case 1940: {
            return varbitplayer_18580;
        }
        case 1941: {
            return varbitplayer_13193;
        }
        case 1942: {
            if ((varbitplayer_12040 == 1)) {
                int7 = SETBIT(int7, 0);
            };
            if ((varbitplayer_12041 == 1)) {
                int7 = SETBIT(int7, 1);
            };
            if ((varbitplayer_12042 == 1)) {
                int7 = SETBIT(int7, 2);
            };
            if ((varbitplayer_11449 == 1)) {
                int7 = SETBIT(int7, 3);
            };
            if ((varbitplayer_11450 == 1)) {
                int7 = SETBIT(int7, 4);
            };
            if ((varbitplayer_11451 == 1)) {
                int7 = SETBIT(int7, 5);
            };
            if ((varbitplayer_11452 == 1)) {
                int7 = SETBIT(int7, 6);
            };
            if ((varbitplayer_11453 == 1)) {
                int7 = SETBIT(int7, 7);
            };
            return int7;
        }
        case 1943: {
            return varbitplayer_11434;
        }
        case 1944: {
            if ((varbitplayer_11858 >= 910)) {
                int7 = SETBIT(int7, 0);
            };
            if ((varbitplayer_11858 >= 150)) {
                if ((varbitplayer_11781 == 100)) {
                    int7 = SETBIT(int7, 1);
                };
                if ((varbitplayer_11783 == 100)) {
                    int7 = SETBIT(int7, 2);
                };
                if ((varbitplayer_11782 == 100)) {
                    int7 = SETBIT(int7, 3);
                };
                if ((varbitplayer_11784 == 100)) {
                    int7 = SETBIT(int7, 4);
                };
            };
            return int7;
        }
        case 1945: {
            return varbitplayer_10463;
        }
        case 1946: {
            if ((varbitplayer_18100 == 1)) {
                int7 = SETBIT(int7, 0);
            };
            if ((varbitplayer_18101 == 1)) {
                int7 = SETBIT(int7, 1);
            };
            if ((varbitplayer_18102 == 1)) {
                int7 = SETBIT(int7, 2);
            };
            if ((varbitplayer_18103 == 1)) {
                int7 = SETBIT(int7, 3);
            };
            if ((varbitplayer_18104 == 1)) {
                int7 = SETBIT(int7, 4);
            };
            if ((varbitplayer_18086 == 1)) {
                int7 = SETBIT(int7, 5);
            };
            return int7;
        }
        case 1947: {
            return varbitplayer_15275;
        }
        case 1948: {
            return varbitplayer_10542;
        }
        case 1949: {
            return varbitplayer_13964;
        }
        case 1950: {
            if ((varplayer_2528 == 5)) {
                int7 = SETBIT(int7, 0);
            };
            if ((varplayer_2527 == 8)) {
                int7 = SETBIT(int7, 1);
            };
            if ((varplayer_2524 == 7)) {
                int7 = SETBIT(int7, 2);
            };
            return int7;
        }
        case 1951: {
            return varbitplayer_29092;
        }
        case 1952: {
            return varbitplayer_9669;
        }
        case 1953: {
            return varbitplayer_12078;
        }
        case 1954: {
            if ((varbitplayer_10215 == 1)) {
                int7 = SETBIT(int7, 0);
            };
            if ((varbitplayer_13998 == 1)) {
                int7 = SETBIT(int7, 1);
            };
            return int7;
        }
        case 1955: {
            if ((varbitplayer_22277 == 1)) {
                int7 = SETBIT(int7, 0);
            };
            if ((varbitplayer_22278 == 1)) {
                int7 = SETBIT(int7, 1);
            };
            if ((varbitplayer_22279 == 1)) {
                int7 = SETBIT(int7, 2);
            };
            return int7;
        }
        case 1956: {
            return varbitplayer_21763;
        }
        case 1957: {
            return varplayer_2798;
        }
        case 1958: {
            return varbitplayer_22136;
        }
        case 1959: {
            return varbitplayer_12268;
        }
        case 1960: {
            if (((varbitplayer_19966 >= 170) && (varbitplayer_19970 == 0))) {
                int7 = SETBIT(int7, 0);
            };
            return int7;
        }
        case 1961: {
            if ((((((((((((((((((((((((((varbitplayer_13553 == 0) || (varbitplayer_13554 == 0)) || (varbitplayer_13555 == 0)) || (varplayer_2663 < 10)) || (varbitplayer_13556 == 0)) || (varbitplayer_13550 == 0)) || (varbitplayer_13557 == 0)) || (varbitplayer_433 < 2)) || (varbitplayer_13558 == 0)) || (varbitplayer_16026 == 0)) || (varbitplayer_16023 == 0)) || (varbitplayer_16024 == 0)) || (varbitplayer_16025 == 0)) || (varbitplayer_13559 == 0)) || (varplayer_3117 == 0)) || (varbitplayer_13560 == 0)) || (varbitplayer_13551 == 0)) || (varbitplayer_13561 == 0)) || (varbitplayer_11085 < 70)) || (varbitplayer_13562 == 0)) || (varbitplayer_13552 == 0)) || (varbitplayer_13563 == 0)) || (varplayer_2135 < 44)) || (varbitplayer_9987 < 310)) || (varbitplayer_13564 == 0))) {
                return 0;
            };
            return 1;
        }
        case 1962: {
            return varbitplayer_30050;
        }
        case 1964: {
            return varbitplayer_11197;
        }
        case 1965: {
            return varbitplayer_16835;
        }
        case 1966: {
            return TESTBIT(varplayer_2621, 30);
        }
        case 1967: {
            return varbitplayer_29808;
        }
        case 1968: {
            return varbitplayer_29892;
        }
        case 1969: {
            return varbitplayer_30019;
        }
        case 1970: {
            return varbitplayer_30190;
        }
        case 1971: {
            if ((varbitplayer_30693 == 1)) {
                int7 = SETBIT(int7, 0);
            };
            if ((varbitplayer_30692 == 1)) {
                int7 = SETBIT(int7, 1);
            };
            if ((varbitplayer_30691 == 1)) {
                int7 = SETBIT(int7, 2);
            };
            return int7;
        }
        case 1972: {
            if ((varbitplayer_31186 == 1)) {
                int7 = SETBIT(int7, 0);
            };
            if ((varbitplayer_31187 > 0)) {
                int7 = SETBIT(int7, 1);
            };
            return int7;
        }
        case 1973: {
            if ((varbitplayer_32519 == 1)) {
                int7 = SETBIT(int7, 0);
            };
            if ((varbitplayer_32520 == 1)) {
                int7 = SETBIT(int7, 1);
            };
            if ((varbitplayer_32521 == 1)) {
                int7 = SETBIT(int7, 2);
            };
            return int7;
        }
        case 1974: {
            return varbitplayer_33088;
        }
        case 1975: {
            return varbitplayer_34276;
        }
        case 1976: {
            if ((varbitplayer_34400 == 1)) {
                int7 = SETBIT(int7, 0);
            };
            if ((varbitplayer_34401 == 1)) {
                int7 = SETBIT(int7, 1);
            };
            if ((varbitplayer_34402 == 1)) {
                int7 = SETBIT(int7, 2);
            };
            if ((varbitplayer_34403 == 1)) {
                int7 = SETBIT(int7, 3);
            };
            return int7;
        }
        case 1978: {
            if ((varbitplayer_34894 == 1)) {
                int7 = SETBIT(int7, 0);
            };
            if ((varbitplayer_34895 == 1)) {
                int7 = SETBIT(int7, 1);
            };
            return int7;
        }
        case 1979: {
            if ((varbitplayer_5855 == 1)) {
                int7 = SETBIT(int7, 0);
            };
            if ((varbitplayer_5856 == 1)) {
                int7 = SETBIT(int7, 1);
            };
            if ((varbitplayer_5857 == 1)) {
                int7 = SETBIT(int7, 2);
            };
            if ((varbitplayer_5858 == 1)) {
                int7 = SETBIT(int7, 3);
            };
            if ((varbitplayer_5859 == 1)) {
                int7 = SETBIT(int7, 4);
            };
            if ((varbitplayer_5860 == 1)) {
                int7 = SETBIT(int7, 5);
            };
            if ((varbitplayer_5861 == 1)) {
                int7 = SETBIT(int7, 6);
            };
            if ((varbitplayer_5862 == 1)) {
                int7 = SETBIT(int7, 7);
            };
            if ((varbitplayer_5863 == 1)) {
                int7 = SETBIT(int7, 8);
            };
            if ((varbitplayer_5864 == 1)) {
                int7 = SETBIT(int7, 9);
            };
            if ((varbitplayer_5865 == 1)) {
                int7 = SETBIT(int7, 10);
            };
            if ((varbitplayer_5866 == 1)) {
                int7 = SETBIT(int7, 11);
            };
            if ((varbitplayer_5867 == 1)) {
                int7 = SETBIT(int7, 12);
            };
            if ((varbitplayer_5868 == 1)) {
                int7 = SETBIT(int7, 13);
            };
            if ((varbitplayer_5869 == 1)) {
                int7 = SETBIT(int7, 14);
            };
            if ((varbitplayer_5870 == 1)) {
                int7 = SETBIT(int7, 15);
            };
            return int7;
        }
        case 1980: {
            if ((varbitplayer_4126 >= 16000)) {
                int7 = SETBIT(int7, 0);
            };
            if ((varbitplayer_4127 >= 16000)) {
                int7 = SETBIT(int7, 1);
            };
            if ((varbitplayer_4131 >= 16000)) {
                int7 = SETBIT(int7, 2);
            };
            if ((varbitplayer_4132 >= 16000)) {
                int7 = SETBIT(int7, 3);
            };
            if ((varbitplayer_4133 >= 16000)) {
                int7 = SETBIT(int7, 4);
            };
            if ((varbitplayer_4134 >= 16000)) {
                int7 = SETBIT(int7, 5);
            };
            return int7;
        }
        case 1981: {
            if ((varbitplayer_9026 >= 30)) {
                return 1;
            };
            return 0;
        }
        case 1982: {
            return (varbitplayer_22409 / 10);
        }
        case 1983: {
            return varbitplayer_9354;
        }
        case 1985: {
            if ((varbitplayer_13931 >= 40)) {
                int7 = SETBIT(int7, 0);
            };
            if ((varbitplayer_13931 >= 40)) {
                int7 = SETBIT(int7, 1);
            };
            if ((varbitplayer_13952 >= 3)) {
                int7 = SETBIT(int7, 2);
            };
            if ((varbitplayer_13933 == 1)) {
                int7 = SETBIT(int7, 3);
            };
            if ((script2156(321 as quest) == true)) {
                int7 = SETBIT(int7, 4);
            };
            return int7;
        }
        case 2801:
        case 2802:
        case 2803:
        case 2804:
        case 2805: {
            if ((((varbitplayer_36176 > 0) || (varbitplayer_36177 > 0)) || (varbitplayer_36179 > 0))) {
                return ((((((varbitplayer_36176 + varbitplayer_36177) + varbitplayer_36179) * 60000) + varbitplayer_36174) + varbitplayer_36175) + varbitplayer_36178);
            };
            return ((varbitplayer_36174 + varbitplayer_36175) + varbitplayer_36178);
        }
        case 2806:
        case 2807:
        case 2808:
        case 2809:
        case 2810: {
            return varbitplayer_36168;
        }
        case 2811:
        case 2812:
        case 2813:
        case 2814:
        case 2815: {
            return varbitplayer_36037;
        }
        case 2816: {
            if ((varbitplayer_35953 == 1)) {
                int7 = SETBIT(int7, 0);
            };
            if ((varbitplayer_35954 == 1)) {
                int7 = SETBIT(int7, 1);
            };
            if ((varbitplayer_35955 == 1)) {
                int7 = SETBIT(int7, 2);
            };
            if ((varbitplayer_35956 == 1)) {
                int7 = SETBIT(int7, 3);
            };
            if ((varbitplayer_35957 == 1)) {
                int7 = SETBIT(int7, 4);
            };
            if ((varbitplayer_35958 == 1)) {
                int7 = SETBIT(int7, 5);
            };
            if ((varbitplayer_35959 == 1)) {
                int7 = SETBIT(int7, 6);
            };
            if ((varbitplayer_35960 == 1)) {
                int7 = SETBIT(int7, 7);
            };
            if ((varbitplayer_35961 == 1)) {
                int7 = SETBIT(int7, 8);
            };
            if ((varbitplayer_35962 == 1)) {
                int7 = SETBIT(int7, 9);
            };
            if ((varbitplayer_35963 == 1)) {
                int7 = SETBIT(int7, 10);
            };
            if ((varbitplayer_35964 == 1)) {
                int7 = SETBIT(int7, 11);
            };
            if ((varbitplayer_35965 == 1)) {
                int7 = SETBIT(int7, 12);
            };
            if ((varbitplayer_35966 == 1)) {
                int7 = SETBIT(int7, 13);
            };
            if ((varbitplayer_35967 == 1)) {
                int7 = SETBIT(int7, 14);
            };
            if ((varbitplayer_35968 == 1)) {
                int7 = SETBIT(int7, 15);
            };
            return int7;
        }
        case 2817: {
            if ((varbitplayer_35937 == 1)) {
                int7 = SETBIT(int7, 0);
            };
            if ((varbitplayer_35938 == 1)) {
                int7 = SETBIT(int7, 1);
            };
            if ((varbitplayer_35939 == 1)) {
                int7 = SETBIT(int7, 2);
            };
            if ((varbitplayer_35940 == 1)) {
                int7 = SETBIT(int7, 3);
            };
            if ((varbitplayer_35941 == 1)) {
                int7 = SETBIT(int7, 4);
            };
            if ((varbitplayer_35942 == 1)) {
                int7 = SETBIT(int7, 5);
            };
            if ((varbitplayer_35943 == 1)) {
                int7 = SETBIT(int7, 6);
            };
            if ((varbitplayer_35944 == 1)) {
                int7 = SETBIT(int7, 7);
            };
            if ((varbitplayer_35945 == 1)) {
                int7 = SETBIT(int7, 8);
            };
            if ((varbitplayer_35946 == 1)) {
                int7 = SETBIT(int7, 9);
            };
            if ((varbitplayer_35947 == 1)) {
                int7 = SETBIT(int7, 10);
            };
            if ((varbitplayer_35948 == 1)) {
                int7 = SETBIT(int7, 11);
            };
            if ((varbitplayer_35949 == 1)) {
                int7 = SETBIT(int7, 12);
            };
            if ((varbitplayer_35950 == 1)) {
                int7 = SETBIT(int7, 13);
            };
            if ((varbitplayer_35951 == 1)) {
                int7 = SETBIT(int7, 14);
            };
            if ((varbitplayer_35952 == 1)) {
                int7 = SETBIT(int7, 15);
            };
            return int7;
        }
        case 3293: {
            if ((varbitplayer_35921 == 1)) {
                int7 = SETBIT(int7, 0);
            };
            if ((varbitplayer_35922 == 1)) {
                int7 = SETBIT(int7, 1);
            };
            if ((varbitplayer_35923 == 1)) {
                int7 = SETBIT(int7, 2);
            };
            if ((varbitplayer_35924 == 1)) {
                int7 = SETBIT(int7, 3);
            };
            if ((varbitplayer_35925 == 1)) {
                int7 = SETBIT(int7, 4);
            };
            if ((varbitplayer_35926 == 1)) {
                int7 = SETBIT(int7, 5);
            };
            if ((varbitplayer_35927 == 1)) {
                int7 = SETBIT(int7, 6);
            };
            if ((varbitplayer_35928 == 1)) {
                int7 = SETBIT(int7, 7);
            };
            if ((varbitplayer_35929 == 1)) {
                int7 = SETBIT(int7, 8);
            };
            if ((varbitplayer_35930 == 1)) {
                int7 = SETBIT(int7, 9);
            };
            if ((varbitplayer_35931 == 1)) {
                int7 = SETBIT(int7, 10);
            };
            if ((varbitplayer_35932 == 1)) {
                int7 = SETBIT(int7, 11);
            };
            if ((varbitplayer_35933 == 1)) {
                int7 = SETBIT(int7, 12);
            };
            if ((varbitplayer_35934 == 1)) {
                int7 = SETBIT(int7, 13);
            };
            if ((varbitplayer_35935 == 1)) {
                int7 = SETBIT(int7, 14);
            };
            if ((varbitplayer_35936 == 1)) {
                int7 = SETBIT(int7, 15);
            };
            return int7;
        }
        case 2827: {
            return script13432(2);
        }
        case 2829: {
            return script13432(3);
        }
        case 2828: {
            return script13432(4);
        }
        case 2826: {
            return script13432(1);
        }
        case 2830: {
            return script13432(5);
        }
        case 2818: {
            return varbitplayer_35976;
        }
        case 2819: {
            return varbitplayer_35977;
        }
        case 2820: {
            return varbitplayer_35978;
        }
        case 2821: {
            return varbitplayer_35979;
        }
        case 2822: {
            return varbitplayer_35980;
        }
        case 2823: {
            return varbitplayer_36373;
        }
        case 2824: {
            return varbitplayer_35982;
        }
        case 2825: {
            return varbitplayer_35981;
        }
        case 3294:
        case 3295:
        case 3296:
        case 3297:
        case 3298: {
            return varbitplayer_36385;
        }
        case 1136: {
            return varbitplayer_20115;
        }
        case 1137: {
            return varbitplayer_20116;
        }
        case 1138: {
            return varbitplayer_20117;
        }
        case 1139: {
            return varbitplayer_20118;
        }
        case 1140: {
            return varbitplayer_20119;
        }
        case 1141: {
            return varbitplayer_20120;
        }
        case 1142: {
            return varbitplayer_20121;
        }
        case 1143: {
            return varbitplayer_20122;
        }
        case 1144: {
            return varbitplayer_20123;
        }
        case 1145: {
            return varbitplayer_20124;
        }
        case 1989: {
            return varbitplayer_20154;
        }
        case 3041:
        case 3042:
        case 3043:
        case 3044:
        case 3045:
        case 3046: {
            if ((varbitplayer_29871 > 0)) {
                return 60000;
            };
            return (varbitplayer_22960 + varbitplayer_22961);
        }
        case 3047:
        case 3048:
        case 3049:
        case 3050:
        case 3051:
        case 3052: {
            if ((varbitplayer_29869 > 0)) {
                return 60000;
            };
            return (varbitplayer_22958 + varbitplayer_22959);
        }
        case 3053:
        case 3054:
        case 3055:
        case 3056:
        case 3057:
        case 3058: {
            if ((varbitplayer_29873 > 0)) {
                return 60000;
            };
            return (varbitplayer_22962 + varbitplayer_22963);
        }
        case 3059:
        case 3060:
        case 3061:
        case 3062:
        case 3063:
        case 3064: {
            if ((varbitplayer_29867 > 0)) {
                return 60000;
            };
            return (varbitplayer_22956 + varbitplayer_22957);
        }
        case 3065:
        case 3066:
        case 3067:
        case 3068:
        case 3069:
        case 3070: {
            if ((varbitplayer_29864 > 0)) {
                return 60000;
            };
            return varbitplayer_22953;
        }
        case 3071:
        case 3072:
        case 3073:
        case 3074:
        case 3075:
        case 3076: {
            if ((varbitplayer_29859 > 0)) {
                return 60000;
            };
            return varbitplayer_22948;
        }
        case 3077:
        case 3078:
        case 3079:
        case 3080:
        case 3081:
        case 3082: {
            if ((varbitplayer_29866 > 0)) {
                return 60000;
            };
            return varbitplayer_22955;
        }
        case 3083:
        case 3084:
        case 3085:
        case 3086:
        case 3087:
        case 3088: {
            if ((varbitplayer_29857 > 0)) {
                return 60000;
            };
            return (varbitplayer_22946 + varbitplayer_22947);
        }
        case 3089:
        case 3090:
        case 3091:
        case 3092:
        case 3093:
        case 3094: {
            if ((varbitplayer_29877 > 0)) {
                return 60000;
            };
            return varbitplayer_22966;
        }
        case 3095:
        case 3096:
        case 3097:
        case 3098:
        case 3099:
        case 3100: {
            if ((varbitplayer_29880 > 0)) {
                return 60000;
            };
            return varbitplayer_22969;
        }
        case 3101:
        case 3102:
        case 3103:
        case 3104:
        case 3105:
        case 3106: {
            if ((varbitplayer_29865 > 0)) {
                return 60000;
            };
            return varbitplayer_22954;
        }
        case 3107:
        case 3108:
        case 3109:
        case 3110:
        case 3111:
        case 3112: {
            if ((varbitplayer_29862 > 0)) {
                return 60000;
            };
            return varbitplayer_22951;
        }
        case 2832:
        case 2833:
        case 2834:
        case 2835:
        case 2836:
        case 2837: {
            if ((varbitplayer_32625 > 0)) {
                return 60000;
            };
            return varbitplayer_32624;
        }
        case 2838:
        case 2839:
        case 2840:
        case 2841:
        case 2842:
        case 2843: {
            if ((varbitplayer_30848 > 0)) {
                return 60000;
            };
            return (varbitplayer_30840 + varbitplayer_30844);
        }
        case 2844:
        case 2845:
        case 2846:
        case 2847:
        case 2848:
        case 2849: {
            if ((varbitplayer_30850 > 0)) {
                return 60000;
            };
            return (varbitplayer_30842 + varbitplayer_30846);
        }
        case 2850:
        case 2851:
        case 2852:
        case 2853:
        case 2854:
        case 2855: {
            if ((varbitplayer_30849 > 0)) {
                return 60000;
            };
            return (varbitplayer_30841 + varbitplayer_30845);
        }
        case 2856:
        case 2857:
        case 2858:
        case 2859:
        case 2860:
        case 2861: {
            if ((varbitplayer_30851 > 0)) {
                return 60000;
            };
            return (varbitplayer_30843 + varbitplayer_30847);
        }
        case 2862:
        case 2863:
        case 2864:
        case 2865:
        case 2866:
        case 2867: {
            if ((varbitplayer_29861 > 0)) {
                return 60000;
            };
            return varbitplayer_22950;
        }
        case 2868:
        case 2869:
        case 2870:
        case 2871:
        case 2872:
        case 2873: {
            if ((varbitplayer_29863 > 0)) {
                return 60000;
            };
            return varbitplayer_22952;
        }
        case 2874:
        case 2875:
        case 2876:
        case 2877:
        case 2878:
        case 2879: {
            if ((varbitplayer_29875 > 0)) {
                return 60000;
            };
            return varbitplayer_22964;
        }
        case 2880:
        case 2881:
        case 2882:
        case 2883:
        case 2884:
        case 2885: {
            if ((varbitplayer_29860 > 0)) {
                return 60000;
            };
            return varbitplayer_22949;
        }
        case 2886:
        case 2887:
        case 2888:
        case 2889:
        case 2890:
        case 2891: {
            if ((varbitplayer_29879 > 0)) {
                return 60000;
            };
            return varbitplayer_22968;
        }
        case 2892:
        case 2893:
        case 2894:
        case 2895:
        case 2896:
        case 2897: {
            if ((varbitplayer_29876 > 0)) {
                return 60000;
            };
            return varbitplayer_22965;
        }
        case 2898:
        case 2899:
        case 2900:
        case 2901:
        case 2902:
        case 2903: {
            if ((varbitplayer_29881 > 0)) {
                return 60000;
            };
            return (varbitplayer_22970 + varbitplayer_22971);
        }
        case 2904:
        case 2905:
        case 2906:
        case 2907:
        case 2908:
        case 2909: {
            if ((varbitplayer_29878 > 0)) {
                return 60000;
            };
            return varbitplayer_22967;
        }
        case 2910:
        case 2911:
        case 2912:
        case 2913:
        case 2914:
        case 2915: {
            if ((varbitplayer_34870 > 0)) {
                return 60000;
            };
            return varbitplayer_34869;
        }
        case 2916:
        case 2917:
        case 2918:
        case 2919:
        case 2920:
        case 2921: {
            if ((varbitplayer_29883 > 0)) {
                return 60000;
            };
            return varbitplayer_28643;
        }
        case 2922:
        case 2923:
        case 2924:
        case 2925:
        case 2926:
        case 2927: {
            if ((varbitplayer_29884 > 0)) {
                return 60000;
            };
            return varbitplayer_28644;
        }
        case 2928: {
            return varbitplayer_26638;
        }
        case 2972: {
            return varbitplayer_26688;
        }
        case 2929: {
            return varbitplayer_26640;
        }
        case 2930: {
            return varbitplayer_26642;
        }
        case 2931: {
            return varbitplayer_26644;
        }
        case 2932: {
            return varbitplayer_26646;
        }
        case 2933: {
            return varbitplayer_26648;
        }
        case 2934: {
            return varbitplayer_26650;
        }
        case 2935: {
            return varbitplayer_34122;
        }
        case 2936: {
            return varbitplayer_34123;
        }
        case 2937: {
            return varbitplayer_34124;
        }
        case 2938: {
            return varbitplayer_34125;
        }
        case 2939: {
            return varbitplayer_34126;
        }
        case 2940: {
            return varbitplayer_34127;
        }
        case 2941: {
            return varbitplayer_26652;
        }
        case 2942: {
            return varbitplayer_26654;
        }
        case 2943: {
            return varbitplayer_26656;
        }
        case 2944: {
            return varbitplayer_35117;
        }
        case 2945: {
            return varbitplayer_26658;
        }
        case 2946: {
            return varbitplayer_26660;
        }
        case 2947: {
            return varbitplayer_26662;
        }
        case 2948: {
            return varbitplayer_26664;
        }
        case 2949: {
            return varbitplayer_26666;
        }
        case 2950: {
            return varbitplayer_26668;
        }
        case 2951: {
            return varbitplayer_26670;
        }
        case 2952: {
            return varbitplayer_26672;
        }
        case 2953: {
            return varbitplayer_26674;
        }
        case 2954: {
            return varbitplayer_26676;
        }
        case 2955: {
            return varbitplayer_26678;
        }
        case 2956: {
            return varbitplayer_26680;
        }
        case 2957: {
            return varbitplayer_26682;
        }
        case 2958: {
            return varbitplayer_26684;
        }
        case 2959: {
            return varbitplayer_26686;
        }
        case 2960: {
            return varbitplayer_30991;
        }
        case 2961: {
            return varbitplayer_30992;
        }
        case 2962: {
            return varbitplayer_30993;
        }
        case 2963: {
            return varbitplayer_30994;
        }
        case 2964: {
            return varbitplayer_30996;
        }
        case 2965: {
            return varbitplayer_30995;
        }
        case 3136: {
            return varbitplayer_36799;
        }
        case 2966: {
            return varbitplayer_32673;
        }
        case 2967: {
            return varbitplayer_33701;
        }
        case 2968: {
            return varbitplayer_26492;
        }
        case 2969: {
            return varbitplayer_34900;
        }
        case 2970: {
            return varbitplayer_34966;
        }
        case 2971: {
            return varbitplayer_34965;
        }
        case 3309: {
            return varbitplayer_28749;
        }
        case 3310: {
            return varbitplayer_28750;
        }
        case 2973:
        case 2974:
        case 2975:
        case 2976:
        case 2977:
        case 2978: {
            return script13574();
        }
        case 2981:
        case 2982:
        case 2983:
        case 2984:
        case 2985:
        case 2986: {
            if ((varbitplayer_29872 > 0)) {
                return 60000;
            };
            return varbitplayer_22961;
        }
        case 2987:
        case 2988:
        case 2989:
        case 2990:
        case 2991:
        case 2992: {
            if ((varbitplayer_29870 > 0)) {
                return 60000;
            };
            return varbitplayer_22959;
        }
        case 2993:
        case 2994:
        case 2995:
        case 2996:
        case 2997:
        case 2998: {
            if ((varbitplayer_29874 > 0)) {
                return 60000;
            };
            return varbitplayer_22963;
        }
        case 2999:
        case 3000:
        case 3001:
        case 3002:
        case 3003:
        case 3004: {
            if ((varbitplayer_29868 > 0)) {
                return 60000;
            };
            return varbitplayer_22957;
        }
        case 3005:
        case 3006:
        case 3007:
        case 3008:
        case 3009:
        case 3010: {
            if ((varbitplayer_30852 > 0)) {
                return 60000;
            };
            return varbitplayer_30844;
        }
        case 3011:
        case 3012:
        case 3013:
        case 3014:
        case 3015:
        case 3016: {
            if ((varbitplayer_30853 > 0)) {
                return 60000;
            };
            return varbitplayer_30845;
        }
        case 3017:
        case 3018:
        case 3019:
        case 3020:
        case 3021:
        case 3022: {
            if ((varbitplayer_30854 > 0)) {
                return 60000;
            };
            return varbitplayer_30846;
        }
        case 3023:
        case 3024:
        case 3025:
        case 3026:
        case 3027:
        case 3028: {
            if ((varbitplayer_30855 > 0)) {
                return 60000;
            };
            return varbitplayer_30847;
        }
        case 3029:
        case 3030:
        case 3031:
        case 3032:
        case 3033:
        case 3034: {
            if ((varbitplayer_29858 > 0)) {
                return 60000;
            };
            return varbitplayer_22947;
        }
        case 3035:
        case 3036:
        case 3037:
        case 3038:
        case 3039:
        case 3040: {
            if ((varbitplayer_29882 > 0)) {
                return 60000;
            };
            return varbitplayer_22971;
        }
        case 3113:
        case 3114:
        case 3115:
        case 3116:
        case 3117:
        case 3118: {
            return varbitplayer_35716;
        }
        case 3119:
        case 3120:
        case 3121:
        case 3122:
        case 3123:
        case 3124: {
            return varbitplayer_32627;
        }
        case 3373:
        case 3374:
        case 3375:
        case 3376:
        case 3377:
        case 3378: {
            if (((varbitplayer_41056 + varbitplayer_41055) > 0)) {
                return 60000;
            };
            return (varbitplayer_41050 + varbitplayer_41049);
        }
        case 3379:
        case 3380:
        case 3381:
        case 3382:
        case 3383:
        case 3384: {
            if (((varbitplayer_41056 + varbitplayer_41055) > 0)) {
                return 60000;
            };
            return varbitplayer_41049;
        }
        case 3385:
        case 3386:
        case 3387:
        case 3388:
        case 3389:
        case 3390: {
            if (((varbitplayer_41058 + varbitplayer_41057) > 0)) {
                return 60000;
            };
            return (varbitplayer_41052 + varbitplayer_41051);
        }
        case 3391:
        case 3392:
        case 3393:
        case 3394:
        case 3395:
        case 3396: {
            if (((varbitplayer_41058 + varbitplayer_41057) > 0)) {
                return 60000;
            };
            return varbitplayer_41051;
        }
        case 3397:
        case 3398:
        case 3399:
        case 3400:
        case 3401:
        case 3402: {
            if (((varbitplayer_41060 + varbitplayer_41059) > 0)) {
                return 60000;
            };
            return (varbitplayer_41054 + varbitplayer_41053);
        }
        case 3403:
        case 3404:
        case 3405:
        case 3406:
        case 3407:
        case 3408: {
            if (((varbitplayer_41060 + varbitplayer_41059) > 0)) {
                return 60000;
            };
            return varbitplayer_41053;
        }
        case 3409: {
            return varbitplayer_41066;
        }
        case 3437:
        case 3438:
        case 3439:
        case 3440:
        case 3441:
        case 3442: {
            if (((varbitplayer_41457 + varbitplayer_41456) > 0)) {
                return 60000;
            };
            return (varbitplayer_41451 + varbitplayer_41450);
        }
        case 3443:
        case 3444:
        case 3445:
        case 3446:
        case 3447:
        case 3448: {
            if ((varbitplayer_41456 > 0)) {
                return 60000;
            };
            return varbitplayer_41450;
        }
        case 3449:
        case 3450:
        case 3451:
        case 3452:
        case 3453:
        case 3454: {
            if (((varbitplayer_41459 + varbitplayer_41458) > 0)) {
                return 60000;
            };
            return (varbitplayer_41453 + varbitplayer_41452);
        }
        case 3455:
        case 3456:
        case 3457:
        case 3458:
        case 3459:
        case 3460: {
            if ((varbitplayer_41458 > 0)) {
                return 60000;
            };
            return varbitplayer_41452;
        }
        case 3461:
        case 3462:
        case 3463:
        case 3464:
        case 3465:
        case 3466: {
            if (((varbitplayer_41461 + varbitplayer_41460) > 0)) {
                return 60000;
            };
            return (varbitplayer_41455 + varbitplayer_41454);
        }
        case 3467:
        case 3468:
        case 3469:
        case 3470:
        case 3471:
        case 3472: {
            if ((varbitplayer_41460 > 0)) {
                return 60000;
            };
            return varbitplayer_41454;
        }
        case 3726:
        case 3727:
        case 3728:
        case 3729:
        case 3730:
        case 3731: {
            if (((varbitplayer_43422 + varbitplayer_43421) > 0)) {
                return 60000;
            };
            return (varbitplayer_43416 + varbitplayer_43415);
        }
        case 3732:
        case 3733:
        case 3734:
        case 3735:
        case 3736:
        case 3737: {
            if ((varbitplayer_43421 > 0)) {
                return 60000;
            };
            return varbitplayer_43415;
        }
        case 3738:
        case 3739:
        case 3740:
        case 3741:
        case 3742:
        case 3743: {
            if (((varbitplayer_43424 + varbitplayer_43423) > 0)) {
                return 60000;
            };
            return (varbitplayer_43418 + varbitplayer_43417);
        }
        case 3744:
        case 3745:
        case 3746:
        case 3747:
        case 3748:
        case 3749: {
            if ((varbitplayer_43423 > 0)) {
                return 60000;
            };
            return varbitplayer_43417;
        }
        case 3750:
        case 3751:
        case 3752:
        case 3753:
        case 3754:
        case 3755: {
            if (((varbitplayer_43426 + varbitplayer_43425) > 0)) {
                return 60000;
            };
            return (varbitplayer_43420 + varbitplayer_43419);
        }
        case 3756:
        case 3757:
        case 3758:
        case 3759:
        case 3760:
        case 3761: {
            if ((varbitplayer_43425 > 0)) {
                return 60000;
            };
            return varbitplayer_43419;
        }
        case 3781: {
            return varbitplayer_43433;
        }
        case 3782: {
            return varbitplayer_43434;
        }
        case 3126: {
            return varbitplayer_37101;
        }
        case 3127: {
            return varbitplayer_37102;
        }
        case 3128: {
            return varbitplayer_37103;
        }
        case 3129: {
            return varbitplayer_37104;
        }
        case 3130: {
            return varbitplayer_37105;
        }
        case 3131: {
            return varbitplayer_37106;
        }
        case 3132: {
            return varbitplayer_37107;
        }
        case 3133: {
            return varbitplayer_37108;
        }
        case 3134: {
            return varbitplayer_37109;
        }
        case 3135: {
            return varbitplayer_37110;
        }
        case 3138: {
            return varbitplayer_37112;
        }
        case 3137: {
            return varbitplayer_37111;
        }
        case 3139: {
            return varbitplayer_37113;
        }
        case 3140: {
            return varbitplayer_37114;
        }
        case 3141: {
            return varbitplayer_37115;
        }
        case 3142: {
            return varbitplayer_37116;
        }
        case 3144: {
            return varbitplayer_37117;
        }
        case 3145: {
            return varbitplayer_37118;
        }
        case 3146: {
            return varbitplayer_37119;
        }
        case 3147: {
            return varbitplayer_37120;
        }
        case 3148: {
            return varbitplayer_37121;
        }
        case 3149: {
            return varbitplayer_37122;
        }
        case 3150: {
            return varbitplayer_37123;
        }
        case 3151: {
            return varbitplayer_37124;
        }
        case 3152: {
            return varbitplayer_37125;
        }
        case 3153: {
            return varbitplayer_37126;
        }
        case 3154: {
            return varbitplayer_37127;
        }
        case 3155: {
            return varbitplayer_37128;
        }
        case 3156: {
            return varbitplayer_37129;
        }
        case 3157: {
            return varbitplayer_37130;
        }
        case 3158: {
            return varbitplayer_37131;
        }
        case 3159: {
            return varbitplayer_37132;
        }
        case 3161: {
            return varbitplayer_37133;
        }
        case 3162: {
            return varbitplayer_37134;
        }
        case 3163: {
            return varbitplayer_37135;
        }
        case 3164: {
            return varbitplayer_37136;
        }
        case 3165: {
            return varbitplayer_37137;
        }
        case 3166: {
            return varbitplayer_37138;
        }
        case 3167: {
            return varbitplayer_37139;
        }
        case 3168: {
            return varbitplayer_37140;
        }
        case 4435: {
            return varbitplayer_49778;
        }
        case 4436: {
            return varbitplayer_49779;
        }
        case 4437: {
            return varbitplayer_49780;
        }
        case 4438: {
            return varbitplayer_49781;
        }
        case 4457: {
            return varbitplayer_50219;
        }
        case 3169: {
            return varbitplayer_37141;
        }
        case 3170: {
            return varbitplayer_37142;
        }
        case 3171: {
            return varbitplayer_37070;
        }
        case 3172: {
            return varbitplayer_37086;
        }
        case 3173: {
            return varbitplayer_37071;
        }
        case 3174: {
            return varbitplayer_37072;
        }
        case 3175: {
            return varbitplayer_37073;
        }
        case 3176: {
            return varbitplayer_37074;
        }
        case 3177: {
            return varbitplayer_37075;
        }
        case 3178: {
            return varbitplayer_37076;
        }
        case 3179: {
            return varbitplayer_37077;
        }
        case 3180: {
            return varbitplayer_37078;
        }
        case 3181: {
            return varbitplayer_37079;
        }
        case 3182: {
            return varbitplayer_37080;
        }
        case 3183: {
            return varbitplayer_37087;
        }
        case 3184: {
            return varbitplayer_37081;
        }
        case 3185: {
            return varbitplayer_37082;
        }
        case 3186: {
            return varbitplayer_37088;
        }
        case 3187: {
            return varbitplayer_37084;
        }
        case 3188: {
            return varbitplayer_37085;
        }
        case 3189: {
            return varbitplayer_37095;
        }
        case 3190: {
            return varbitplayer_37096;
        }
        case 3191: {
            return varbitplayer_37097;
        }
        case 3192: {
            return varbitplayer_37098;
        }
        case 3193: {
            return varbitplayer_37099;
        }
        case 2979: {
            return script13574();
        }
        case 1990: {
            return varbitplayer_35385;
        }
        case 3223: {
            return script13272(99);
        }
        case 3224: {
            return varbitplayer_9438;
        }
        case 3225: {
            return varbitplayer_9440;
        }
        case 3226: {
            return varbitplayer_36289;
        }
        case 3227:         if ((int6 < varbitplayer_36220)) {
            int7 = SETBIT(int7, int6);
            int6 = (int6 + 1);
        };

        case 3228:
        case 3229:
        case 3230:
        case 3231:
        case 3232:
        case 3233: {
            if ((varbitplayer_36179 > 0)) {
                return 60000;
            };
            return varbitplayer_36178;
        }
        case 3234: {
            return script13638();
        }
        case 3236: {
            return script6806(34089 as struct);
        }
        case 4156: {
            return script6806(36637 as struct);
        }
        case 3237: {
            return script6806(38913 as struct);
        }
        case 3238: {
            return script6806(38919 as struct);
        }
        case 3239: {
            return script6806(34091 as struct);
        }
        case 3240: {
            return script6806(34093 as struct);
        }
        case 3241: {
            return script6806(34095 as struct);
        }
        case 3242: {
            return script6806(38917 as struct);
        }
        case 3243: {
            return script6806(34097 as struct);
        }
        case 3244: {
            return script6806(34099 as struct);
        }
        case 3245: {
            return script6806(34101 as struct);
        }
        case 3246: {
            return script6806(34103 as struct);
        }
        case 3247: {
            return script6806(34105 as struct);
        }
        case 3248: {
            return script6806(34107 as struct);
        }
        case 3249: {
            return script6806(34109 as struct);
        }
        case 3250: {
            return script6806(34111 as struct);
        }
        case 3251: {
            return script6806(34113 as struct);
        }
        case 3252: {
            return script6806(38925 as struct);
        }
        case 3253: {
            return script6806(34115 as struct);
        }
        case 3254: {
            return script6806(38923 as struct);
        }
        case 3255: {
            return script6806(38921 as struct);
        }
        case 3256: {
            return script6806(34117 as struct);
        }
        case 3257: {
            return script6806(34119 as struct);
        }
        case 3258: {
            return script6806(34121 as struct);
        }
        case 3259: {
            return script6806(38915 as struct);
        }
        case 3260: {
            return script6806(38927 as struct);
        }
        case 3261: {
            return script6806(34123 as struct);
        }
        case 3262: {
            return script6806(34125 as struct);
        }
        case 3263:
        case 3264: {
            return script6802();
        }
        case 3265:
        case 3266: {
            return script6804();
        }
        case 3267: {
            return (script6802() + script6804());
        }
        case 3311: {
            return varbitplayer_36971;
        }
        case 3312: {
            return varbitplayer_38911;
        }
        case 3313: {
            return varbitplayer_38912;
        }
        case 1991: {
            return varbitplayer_38940;
        }
        case 3315:
        case 3316:
        case 3317:
        case 3318:
        case 3319:
        case 3320:
        case 3321:
        case 3322:
        case 3323:
        case 3324: {
            return script3865();
        }
        case 3325: {
            return varbitplayer_39447;
        }
        case 3326: {
            return varbitplayer_39476;
        }
        case 3327: {
            return varbitplayer_39459;
        }
        case 3328: {
            return varbitplayer_39832;
        }
        case 3329: {
            return varbitplayer_40077;
        }
        case 3330: {
            return script3863();
        }
        case 3331: {
            return varbitplayer_39471;
        }
        case 3332: {
            return varbitplayer_39472;
        }
        case 3333: {
            return varbitplayer_39473;
        }
        case 3334: {
            return varbitplayer_39474;
        }
        case 3335: {
            return varbitplayer_39475;
        }
        case 3336: {
            return varbitplayer_39870;
        }
        case 3337: {
            return varbitplayer_39871;
        }
        case 3338: {
            return varbitplayer_39872;
        }
        case 3339: {
            return varbitplayer_39873;
        }
        case 3340: {
            return varbitplayer_39874;
        }
        case 3341: {
            if ((varbitplayer_39868 >= 200)) {
                return 1;
            };
            return 0;
        }
        case 3342: {
            return varbitplayer_39875;
        }
        case 1992: {
            if ((varbitplayer_39927 == 1)) {
                int7 = SETBIT(int7, 0);
            };
            if ((varbitplayer_39928 == 1)) {
                int7 = SETBIT(int7, 1);
            };
            if ((varbitplayer_39929 == 1)) {
                int7 = SETBIT(int7, 2);
            };
            if ((varbitplayer_39930 == 1)) {
                int7 = SETBIT(int7, 3);
            };
            if ((varbitplayer_39931 == 1)) {
                int7 = SETBIT(int7, 4);
            };
            return int7;
        }
        case 3343: {
            if ((varbitplayer_40022 == 1)) {
                int7 = SETBIT(int7, 0);
            };
            if ((varbitplayer_40023 == 1)) {
                int7 = SETBIT(int7, 1);
            };
            if ((varbitplayer_40024 == 1)) {
                int7 = SETBIT(int7, 2);
            };
            if ((varbitplayer_40025 == 1)) {
                int7 = SETBIT(int7, 3);
            };
            return int7;
        }
        case 1993: {
            return varbitplayer_39999;
        }
        case 3346: {
            return varbitplayer_40340;
        }
        case 3347: {
            return varbitplayer_40341;
        }
        case 3348: {
            return varbitplayer_40342;
        }
        case 3349: {
            return varbitplayer_40343;
        }
        case 3350: {
            return varbitplayer_40344;
        }
        case 1995: {
            return varbitplayer_40423;
        }
        case 1996: {
            return varbitplayer_40473;
        }
        case 3353:
        case 3354:
        case 3355:
        case 3356:
        case 3357:
        case 3358: {
            if ((varbitplayer_40567 > 0)) {
                return 60000;
            };
            return varbitplayer_40566;
        }
        case 3352: {
            return varbitplayer_40660;
        }
        case 3360: {
            if ((varbitplayer_40686 > 1)) {
                int7 = SETBIT(int7, 0);
            };
            if ((varbitplayer_40686 > 2)) {
                int7 = SETBIT(int7, 1);
            };
            if ((varbitplayer_40686 > 3)) {
                int7 = SETBIT(int7, 2);
            };
            if ((varbitplayer_40686 > 4)) {
                int7 = SETBIT(int7, 3);
            };
            if ((varbitplayer_40686 > 5)) {
                int7 = SETBIT(int7, 4);
            };
            return int7;
        }
        case 3361: {
            return varbitplayer_40687;
        }
        case 3362: {
            return varbitplayer_40691;
        }
        case 1997: {
            if ((varbitplayer_40700 == 1)) {
                int7 = SETBIT(int7, 0);
            };
            if ((varbitplayer_40701 == 1)) {
                int7 = SETBIT(int7, 1);
            };
            return int7;
        }
        case 3411: {
            if ((varbitplayer_41013 == 1)) {
                int7 = SETBIT(int7, 0);
            };
            if ((varbitplayer_41014 == 1)) {
                int7 = SETBIT(int7, 1);
            };
            if ((varbitplayer_41015 == 1)) {
                int7 = SETBIT(int7, 2);
            };
            if ((varbitplayer_41016 == 1)) {
                int7 = SETBIT(int7, 3);
            };
            if ((varbitplayer_41017 == 1)) {
                int7 = SETBIT(int7, 4);
            };
            if ((varbitplayer_41018 == 1)) {
                int7 = SETBIT(int7, 5);
            };
            if ((varbitplayer_41019 == 1)) {
                int7 = SETBIT(int7, 6);
            };
            if ((varbitplayer_41020 == 1)) {
                int7 = SETBIT(int7, 7);
            };
            if ((varbitplayer_41021 == 1)) {
                int7 = SETBIT(int7, 8);
            };
            if ((varbitplayer_41022 == 1)) {
                int7 = SETBIT(int7, 9);
            };
            if ((varbitplayer_41023 == 1)) {
                int7 = SETBIT(int7, 10);
            };
            if ((varbitplayer_41024 == 1)) {
                int7 = SETBIT(int7, 11);
            };
            if ((varbitplayer_41025 == 1)) {
                int7 = SETBIT(int7, 12);
            };
            return int7;
        }
        case 3412: {
            if ((varbitplayer_41011 == 1)) {
                int7 = SETBIT(int7, 0);
            };
            if ((varbitplayer_41012 == 1)) {
                int7 = SETBIT(int7, 1);
            };
            return int7;
        }
        case 3413: {
            return BITCOUNT(varplayer_7956);
        }
        case 3414: {
            return varbitplayer_41026;
        }
        case 3415: {
            return varbitplayer_41027;
        }
        case 3416: {
            return varbitplayer_41028;
        }
        case 3417: {
            return varbitplayer_41029;
        }
        case 3418: {
            return varbitplayer_41030;
        }
        case 3419: {
            return varbitplayer_41031;
        }
        case 3420: {
            return varbitplayer_41032;
        }
        case 3421: {
            return varbitplayer_41033;
        }
        case 3422: {
            return varbitplayer_41034;
        }
        case 3423: {
            return varbitplayer_41035;
        }
        case 3424: {
            return varbitplayer_41037;
        }
        case 3425: {
            return varbitplayer_41038;
        }
        case 3426: {
            return varbitplayer_41036;
        }
        case 3427: {
            return varbitplayer_41039;
        }
        case 1998: {
            return varbitplayer_38658;
        }
        case 1999: {
            return varbitplayer_42837;
        }
        case 2000: {
            return varbitplayer_50590;
        }
        case 3434: {
            if ((varbitplayer_41489 == 1)) {
                int7 = SETBIT(int7, 0);
            };
            if ((varbitplayer_41490 == 1)) {
                int7 = SETBIT(int7, 1);
            };
            if ((varbitplayer_41491 == 1)) {
                int7 = SETBIT(int7, 2);
            };
            if ((varbitplayer_41492 == 1)) {
                int7 = SETBIT(int7, 3);
            };
            if ((varbitplayer_41493 == 1)) {
                int7 = SETBIT(int7, 4);
            };
            if ((varbitplayer_41494 == 1)) {
                int7 = SETBIT(int7, 5);
            };
            if ((varbitplayer_41495 == 1)) {
                int7 = SETBIT(int7, 6);
            };
            if ((varbitplayer_41496 == 1)) {
                int7 = SETBIT(int7, 7);
            };
            if ((varbitplayer_41497 == 1)) {
                int7 = SETBIT(int7, 8);
            };
            if ((varbitplayer_41498 == 1)) {
                int7 = SETBIT(int7, 9);
            };
            if ((varbitplayer_41499 == 1)) {
                int7 = SETBIT(int7, 10);
            };
            if ((varbitplayer_41500 == 1)) {
                int7 = SETBIT(int7, 11);
            };
            if ((varbitplayer_41501 == 1)) {
                int7 = SETBIT(int7, 12);
            };
            return int7;
        }
        case 3433: {
            if ((varbitplayer_41487 == 1)) {
                int7 = SETBIT(int7, 0);
            };
            if ((varbitplayer_41488 == 1)) {
                int7 = SETBIT(int7, 1);
            };
            return int7;
        }
        case 3435: {
            return BITCOUNT(varplayer_7957);
        }
        case 3477: {
            return varbitplayer_41502;
        }
        case 3478: {
            return varbitplayer_41503;
        }
        case 3479: {
            return varbitplayer_41504;
        }
        case 3480: {
            return varbitplayer_41513;
        }
        case 3481: {
            return varbitplayer_41505;
        }
        case 3482: {
            return varbitplayer_41506;
        }
        case 3483: {
            return varbitplayer_41507;
        }
        case 3484: {
            return varbitplayer_41508;
        }
        case 3485: {
            return varbitplayer_41509;
        }
        case 3486: {
            return varbitplayer_41510;
        }
        case 3487: {
            return varbitplayer_41511;
        }
        case 3488: {
            return varbitplayer_41512;
        }
        case 3489: {
            return varbitplayer_41517;
        }
        case 3490: {
            return varbitplayer_41516;
        }
        case 3491: {
            return varbitplayer_41518;
        }
        case 3492: {
            return varbitplayer_41519;
        }
        case 3494: {
            if ((varbitplayer_41840 == 1)) {
                int7 = SETBIT(int7, 0);
            };
            if ((varbitplayer_41842 == 1)) {
                int7 = SETBIT(int7, 1);
            };
            if ((varbitplayer_41841 == 1)) {
                int7 = SETBIT(int7, 2);
            };
            if ((varbitplayer_41843 == 1)) {
                int7 = SETBIT(int7, 3);
            };
            if ((varbitplayer_41844 == 1)) {
                int7 = SETBIT(int7, 4);
            };
            return int7;
        }
        case 3495: {
            if ((varbitplayer_41847 == 1)) {
                int7 = SETBIT(int7, 0);
            };
            if ((varbitplayer_41846 == 1)) {
                int7 = SETBIT(int7, 1);
            };
            if ((varbitplayer_41845 == 1)) {
                int7 = SETBIT(int7, 2);
            };
            if ((varbitplayer_41848 == 1)) {
                int7 = SETBIT(int7, 3);
            };
            return int7;
        }
        case 3496: {
            if ((varbitplayer_41849 == 1)) {
                int7 = SETBIT(int7, 0);
            };
            if ((varbitplayer_41850 == 1)) {
                int7 = SETBIT(int7, 1);
            };
            if ((varbitplayer_41851 == 1)) {
                int7 = SETBIT(int7, 2);
            };
            if ((varbitplayer_41852 == 1)) {
                int7 = SETBIT(int7, 3);
            };
            if ((varbitplayer_41853 == 1)) {
                int7 = SETBIT(int7, 4);
            };
            if ((varbitplayer_41854 == 1)) {
                int7 = SETBIT(int7, 5);
            };
            if ((varbitplayer_41855 == 1)) {
                int7 = SETBIT(int7, 6);
            };
            if ((varbitplayer_41856 == 1)) {
                int7 = SETBIT(int7, 7);
            };
            return int7;
        }
        case 3497: {
            if ((varbitplayer_41857 == 1)) {
                int7 = SETBIT(int7, 0);
            };
            if ((varbitplayer_41858 == 1)) {
                int7 = SETBIT(int7, 1);
            };
            if ((varbitplayer_41859 == 1)) {
                int7 = SETBIT(int7, 2);
            };
            if ((varbitplayer_41860 == 1)) {
                int7 = SETBIT(int7, 3);
            };
            if ((varbitplayer_41861 == 1)) {
                int7 = SETBIT(int7, 4);
            };
            if ((varbitplayer_41862 == 1)) {
                int7 = SETBIT(int7, 5);
            };
            if ((varbitplayer_41863 == 1)) {
                int7 = SETBIT(int7, 6);
            };
            return int7;
        }
        case 3498: {
            if ((varbitplayer_41864 == 1)) {
                int7 = SETBIT(int7, 0);
            };
            if ((varbitplayer_41865 == 1)) {
                int7 = SETBIT(int7, 1);
            };
            if ((varbitplayer_41868 == 1)) {
                int7 = SETBIT(int7, 2);
            };
            if ((varbitplayer_41867 == 1)) {
                int7 = SETBIT(int7, 3);
            };
            if ((varbitplayer_41869 == 1)) {
                int7 = SETBIT(int7, 4);
            };
            if ((varbitplayer_41866 == 1)) {
                int7 = SETBIT(int7, 5);
            };
            if ((varbitplayer_41870 == 1)) {
                int7 = SETBIT(int7, 6);
            };
            return int7;
        }
        case 3499: {
            if ((varbitplayer_41871 == 1)) {
                int7 = SETBIT(int7, 0);
            };
            if ((varbitplayer_41872 == 1)) {
                int7 = SETBIT(int7, 1);
            };
            if ((varbitplayer_41873 == 1)) {
                int7 = SETBIT(int7, 2);
            };
            if ((varbitplayer_41874 == 1)) {
                int7 = SETBIT(int7, 3);
            };
            if ((varbitplayer_41875 == 1)) {
                int7 = SETBIT(int7, 4);
            };
            return int7;
        }
        case 3500: {
            if ((varbitplayer_41876 == 1)) {
                int7 = SETBIT(int7, 0);
            };
            if ((varbitplayer_41877 == 1)) {
                int7 = SETBIT(int7, 1);
            };
            if ((varbitplayer_41878 == 1)) {
                int7 = SETBIT(int7, 2);
            };
            if ((varbitplayer_41879 == 1)) {
                int7 = SETBIT(int7, 3);
            };
            if ((varbitplayer_41880 == 1)) {
                int7 = SETBIT(int7, 4);
            };
            return int7;
        }
        case 3501: {
            if ((varbitplayer_41881 == 1)) {
                int7 = SETBIT(int7, 0);
            };
            if ((varbitplayer_41882 == 1)) {
                int7 = SETBIT(int7, 1);
            };
            if ((varbitplayer_41883 == 1)) {
                int7 = SETBIT(int7, 2);
            };
            return int7;
        }
        case 3502: {
            if ((varbitplayer_41884 == 1)) {
                int7 = SETBIT(int7, 0);
            };
            if ((varbitplayer_41885 == 1)) {
                int7 = SETBIT(int7, 1);
            };
            if ((varbitplayer_41886 == 1)) {
                int7 = SETBIT(int7, 2);
            };
            if ((varbitplayer_41887 == 1)) {
                int7 = SETBIT(int7, 3);
            };
            if ((varbitplayer_41888 == 1)) {
                int7 = SETBIT(int7, 4);
            };
            return int7;
        }
        case 3503:
        case 3504:
        case 3505:
        case 3506: {
            return varbitplayer_41894;
        }
        case 3507: {
            return varbitplayer_41815;
        }
        case 3508: {
            if ((varbitplayer_41820 == 1)) {
                int7 = SETBIT(int7, 0);
            };
            if ((varbitplayer_41616 == 1)) {
                int7 = SETBIT(int7, 1);
            };
            if ((varbitplayer_41617 == 1)) {
                int7 = SETBIT(int7, 2);
            } else if ((varbitplayer_41617 == 2)) {
                int7 = SETBIT(int7, 2);
                int7 = SETBIT(int7, 3);
            };
            if ((varbitplayer_41618 == 1)) {
                int7 = SETBIT(int7, 4);
            } else if ((varbitplayer_41618 == 2)) {
                int7 = SETBIT(int7, 4);
                int7 = SETBIT(int7, 5);
            };
            if ((varbitplayer_41690 == 1)) {
                int7 = SETBIT(int7, 6);
            };
            if ((varbitplayer_34077 == 6)) {
                int7 = SETBIT(int7, 7);
            };
            if ((varbitplayer_41691 == 1)) {
                int7 = SETBIT(int7, 8);
            };
            if ((varbitplayer_41704 == 1)) {
                int7 = SETBIT(int7, 9);
            };
            if ((varbitplayer_41692 == 1)) {
                int7 = SETBIT(int7, 10);
            };
            if ((varbitplayer_41693 == 1)) {
                int7 = SETBIT(int7, 11);
            };
            if ((varbitplayer_41694 == 1)) {
                int7 = SETBIT(int7, 12);
            };
            return int7;
        }
        case 4134: {
            if ((varbitplayer_45338 == 1)) {
                int7 = SETBIT(int7, 0);
            };
            if ((varbitplayer_45337 == 1)) {
                int7 = SETBIT(int7, 1);
            };
            if ((varbitplayer_45336 > 0)) {
                int7 = SETBIT(int7, 2);
            };
            if ((varbitplayer_45336 == 2)) {
                int7 = SETBIT(int7, 3);
            };
            if ((varbitplayer_45339 == 1)) {
                int7 = SETBIT(int7, 4);
            };
            if ((varbitplayer_45363 == 1)) {
                int7 = SETBIT(int7, 5);
            };
            if ((varbitplayer_45362 == 1)) {
                int7 = SETBIT(int7, 6);
            };
            if ((varbitplayer_45361 == 1)) {
                int7 = SETBIT(int7, 7);
            };
            if ((varbitplayer_47446 > 0)) {
                int7 = SETBIT(int7, 8);
            };
            return int7;
        }
        case 3509: {
            return varbitplayer_41895;
        }
        case 3510: {
            if ((varbitplayer_41700 == 1)) {
                int7 = SETBIT(int7, 0);
            };
            if ((varbitplayer_41701 == 1)) {
                int7 = SETBIT(int7, 1);
            };
            if ((varbitplayer_41702 == 1)) {
                int7 = SETBIT(int7, 2);
            };
            if ((varbitplayer_41703 == 1)) {
                int7 = SETBIT(int7, 3);
            };
            return int7;
        }
        case 3511: {
            return varbitplayer_41896;
        }
        case 3512: {
            return varbitplayer_41897;
        }
        case 3513: {
            return varbitplayer_41898;
        }
        case 3514: {
            return varbitplayer_41899;
        }
        case 3515: {
            return varbitplayer_41900;
        }
        case 3516: {
            return varbitplayer_41901;
        }
        case 3517: {
            return varbitplayer_41902;
        }
        case 3518: {
            return varbitplayer_41903;
        }
        case 3519: {
            return varbitplayer_41904;
        }
        case 3520: {
            return varbitplayer_41905;
        }
        case 3521: {
            return varbitplayer_41906;
        }
        case 3522: {
            return varbitplayer_41888;
        }
        case 3523: {
            return varbitplayer_41907;
        }
        case 3524: {
            return varbitplayer_41908;
        }
        case 3525: {
            return varbitplayer_41909;
        }
        case 3526: {
            return varbitplayer_41910;
        }
        case 3527: {
            return varbitplayer_41911;
        }
        case 3528: {
            return varbitplayer_41912;
        }
        case 3529: {
            return varbitplayer_41913;
        }
        case 3530: {
            return varbitplayer_41914;
        }
        case 3531: {
            return varbitplayer_41915;
        }
        case 3532: {
            return varbitplayer_41916;
        }
        case 3533: {
            return varbitplayer_42506;
        }
        case 3534: {
            return varbitplayer_42507;
        }
        case 3535: {
            return varbitplayer_42508;
        }
        case 3536: {
            return varbitplayer_42509;
        }
        case 3537: {
            return varbitplayer_42510;
        }
        case 3538: {
            return varbitplayer_42511;
        }
        case 3539: {
            return varbitplayer_42512;
        }
        case 3540: {
            return varbitplayer_42368;
        }
        case 3541: {
            return varbitplayer_17457;
        }
        case 3542:
        case 3543:
        case 3544:
        case 3545:
        case 3546:
        case 3547:
        case 3548: {
            return varplayer_9610;
        }
        case 3549: {
            return varbitplayer_42495;
        }
        case 3550: {
            return varbitplayer_42496;
        }
        case 3551: {
            if ((varbitplayer_2458 == 1)) {
                int7 = SETBIT(int7, 0);
            };
            if ((varbitplayer_2459 == 1)) {
                int7 = SETBIT(int7, 1);
            };
            if ((varbitplayer_2460 == 1)) {
                int7 = SETBIT(int7, 2);
            };
            if ((varbitplayer_2461 == 1)) {
                int7 = SETBIT(int7, 3);
            };
            if ((varbitplayer_2462 == 1)) {
                int7 = SETBIT(int7, 4);
            };
            if ((varbitplayer_2463 == 1)) {
                int7 = SETBIT(int7, 5);
            };
            if ((varbitplayer_2464 == 1)) {
                int7 = SETBIT(int7, 6);
            };
            if ((varbitplayer_41302 == 1)) {
                int7 = SETBIT(int7, 7);
            };
            if ((varbitplayer_2465 == 1)) {
                int7 = SETBIT(int7, 8);
            };
            if ((varbitplayer_2466 == 1)) {
                int7 = SETBIT(int7, 9);
            };
            if ((varbitplayer_2467 == 1)) {
                int7 = SETBIT(int7, 10);
            };
            if ((varbitplayer_42344 == 1)) {
                int7 = SETBIT(int7, 11);
            };
            if ((varbitplayer_2468 == 1)) {
                int7 = SETBIT(int7, 12);
            };
            if ((varbitplayer_2469 == 1)) {
                int7 = SETBIT(int7, 13);
            };
            if ((varbitplayer_2470 == 1)) {
                int7 = SETBIT(int7, 14);
            };
            if ((varbitplayer_508 == 1)) {
                int7 = SETBIT(int7, 15);
            };
            if ((varbitplayer_2471 == 1)) {
                int7 = SETBIT(int7, 16);
            };
            if ((varbitplayer_22569 == 1)) {
                int7 = SETBIT(int7, 17);
            };
            if ((varbitplayer_25871 == 1)) {
                int7 = SETBIT(int7, 18);
            };
            if ((varbitplayer_25872 == 1)) {
                int7 = SETBIT(int7, 19);
            };
            if ((varbitplayer_43691 == 1)) {
                int7 = SETBIT(int7, 20);
            };
            return int7;
        }
        case 3552: {
            if ((varbitplayer_42497 == 1)) {
                int7 = SETBIT(int7, 0);
            };
            if ((varbitplayer_42498 == 1)) {
                int7 = SETBIT(int7, 1);
            };
            if ((varbitplayer_42499 == 1)) {
                int7 = SETBIT(int7, 2);
            };
            if ((varbitplayer_42500 == 1)) {
                int7 = SETBIT(int7, 3);
            };
            if ((varbitplayer_42490 == 1)) {
                int7 = SETBIT(int7, 4);
            };
            if ((varbitplayer_42491 == 1)) {
                int7 = SETBIT(int7, 5);
            };
            if ((varbitplayer_42492 == 1)) {
                int7 = SETBIT(int7, 6);
            };
            return int7;
        }
        case 3556: {
            return varbitplayer_30864;
        }
        case 3553: {
            return varbitplayer_30865;
        }
        case 3554: {
            return varbitplayer_30870;
        }
        case 3555: {
            return varbitplayer_30871;
        }
        case 3558: {
            if ((varbitplayer_42346 == 1)) {
                int7 = SETBIT(int7, 0);
            };
            if ((varbitplayer_42347 == 1)) {
                int7 = SETBIT(int7, 1);
            };
            if ((varbitplayer_42348 == 1)) {
                int7 = SETBIT(int7, 2);
            };
            if ((varbitplayer_42349 == 1)) {
                int7 = SETBIT(int7, 3);
            };
            if ((varbitplayer_42350 == 1)) {
                int7 = SETBIT(int7, 4);
            };
            if ((varbitplayer_42351 == 1)) {
                int7 = SETBIT(int7, 5);
            };
            if ((varbitplayer_42352 == 1)) {
                int7 = SETBIT(int7, 6);
            };
            return int7;
        }
        case 3559: {
            if ((varbitplayer_42360 == 1)) {
                int7 = SETBIT(int7, 0);
            };
            if ((varbitplayer_42361 == 1)) {
                int7 = SETBIT(int7, 1);
            };
            if ((varbitplayer_42362 == 1)) {
                int7 = SETBIT(int7, 2);
            };
            if ((varbitplayer_42363 == 1)) {
                int7 = SETBIT(int7, 3);
            };
            if ((varbitplayer_42364 == 1)) {
                int7 = SETBIT(int7, 4);
            };
            if ((varbitplayer_42365 == 1)) {
                int7 = SETBIT(int7, 5);
            };
            if ((varbitplayer_42366 == 1)) {
                int7 = SETBIT(int7, 6);
            };
            return int7;
        }
        case 3560: {
            if ((varbitplayer_42353 == 1)) {
                int7 = SETBIT(int7, 0);
            };
            if ((varbitplayer_42354 == 1)) {
                int7 = SETBIT(int7, 1);
            };
            if ((varbitplayer_42355 == 1)) {
                int7 = SETBIT(int7, 2);
            };
            if ((varbitplayer_42356 == 1)) {
                int7 = SETBIT(int7, 3);
            };
            if ((varbitplayer_42357 == 1)) {
                int7 = SETBIT(int7, 4);
            };
            if ((varbitplayer_42358 == 1)) {
                int7 = SETBIT(int7, 5);
            };
            if ((varbitplayer_42359 == 1)) {
                int7 = SETBIT(int7, 6);
            };
            return int7;
        }
        case 3561: {
            if ((((((varbitplayer_31320 + varbitplayer_31321) + varbitplayer_31323) + varbitplayer_31322) + varbitplayer_31324) >= 5)) {
                return 1;
            };
            return 0;
        }
        case 3562: {
            if ((((((varbitplayer_29782 + varbitplayer_29783) + varbitplayer_29785) + varbitplayer_29784) + varbitplayer_29786) >= 5)) {
                return 1;
            };
            return 0;
        }
        case 3563: {
            if ((((((varbitplayer_25439 + varbitplayer_25440) + varbitplayer_25442) + varbitplayer_25441) + varbitplayer_25443) >= 5)) {
                return 1;
            };
            return 0;
        }
        case 3564: {
            if ((((((varbitplayer_22692 + varbitplayer_22693) + varbitplayer_22695) + varbitplayer_22694) + varbitplayer_22696) >= 5)) {
                return 1;
            };
            return 0;
        }
        case 3565: {
            if ((((((varbitplayer_27108 + varbitplayer_27109) + varbitplayer_27111) + varbitplayer_27110) + varbitplayer_27112) >= 5)) {
                return 1;
            };
            return 0;
        }
        case 3566: {
            return varbitplayer_42369;
        }
        case 3567: {
            return varbitplayer_42370;
        }
        case 3568: {
            if ((varbitplayer_42371 == 1)) {
                int7 = SETBIT(int7, 0);
            };
            if ((varbitplayer_42372 == 1)) {
                int7 = SETBIT(int7, 1);
            };
            if ((varbitplayer_42373 == 1)) {
                int7 = SETBIT(int7, 2);
            };
            if ((varbitplayer_42374 == 1)) {
                int7 = SETBIT(int7, 3);
            };
            if ((varbitplayer_42375 == 1)) {
                int7 = SETBIT(int7, 4);
            };
            if ((varbitplayer_42376 == 1)) {
                int7 = SETBIT(int7, 5);
            };
            if ((varbitplayer_42377 == 1)) {
                int7 = SETBIT(int7, 6);
            };
            if ((varbitplayer_42378 == 1)) {
                int7 = SETBIT(int7, 7);
            };
            if ((varbitplayer_42379 == 1)) {
                int7 = SETBIT(int7, 8);
            };
            if ((varbitplayer_42380 == 1)) {
                int7 = SETBIT(int7, 9);
            };
            if ((varbitplayer_42381 == 1)) {
                int7 = SETBIT(int7, 10);
            };
            if ((varbitplayer_42382 == 1)) {
                int7 = SETBIT(int7, 11);
            };
            if ((varbitplayer_42383 == 1)) {
                int7 = SETBIT(int7, 12);
            };
            if ((varbitplayer_42384 == 1)) {
                int7 = SETBIT(int7, 13);
            };
            if ((varbitplayer_42385 == 1)) {
                int7 = SETBIT(int7, 14);
            };
            if ((varbitplayer_42386 == 1)) {
                int7 = SETBIT(int7, 15);
            };
            if ((varbitplayer_42387 == 1)) {
                int7 = SETBIT(int7, 16);
            };
            if ((varbitplayer_42388 == 1)) {
                int7 = SETBIT(int7, 17);
            };
            if ((varbitplayer_42389 == 1)) {
                int7 = SETBIT(int7, 18);
            };
            if ((varbitplayer_42390 == 1)) {
                int7 = SETBIT(int7, 19);
            };
            if ((varbitplayer_42391 == 1)) {
                int7 = SETBIT(int7, 20);
            };
            if ((varbitplayer_53305 == 1)) {
                int7 = SETBIT(int7, 21);
            };
            if ((varbitplayer_53306 == 1)) {
                int7 = SETBIT(int7, 22);
            };
            if ((varbitplayer_53307 == 1)) {
                int7 = SETBIT(int7, 23);
            };
            if ((varbitplayer_53308 == 1)) {
                int7 = SETBIT(int7, 24);
            };
            return int7;
        }
        case 3569: {
            return varbitplayer_42392;
        }
        case 3570: {
            return varbitplayer_42393;
        }
        case 3571: {
            if ((varbitplayer_42394 == 1)) {
                int7 = SETBIT(int7, 0);
            };
            if ((varbitplayer_42395 == 1)) {
                int7 = SETBIT(int7, 1);
            };
            if ((varbitplayer_42396 == 1)) {
                int7 = SETBIT(int7, 2);
            };
            if ((varbitplayer_42397 == 1)) {
                int7 = SETBIT(int7, 3);
            };
            if ((varbitplayer_42398 == 1)) {
                int7 = SETBIT(int7, 4);
            };
            if ((varbitplayer_42399 == 1)) {
                int7 = SETBIT(int7, 5);
            };
            if ((varbitplayer_42400 == 1)) {
                int7 = SETBIT(int7, 6);
            };
            if ((varbitplayer_42401 == 1)) {
                int7 = SETBIT(int7, 7);
            };
            if ((varbitplayer_42402 == 1)) {
                int7 = SETBIT(int7, 8);
            };
            if ((varbitplayer_42403 == 1)) {
                int7 = SETBIT(int7, 9);
            };
            if ((varbitplayer_42404 == 1)) {
                int7 = SETBIT(int7, 10);
            };
            if ((varbitplayer_42405 == 1)) {
                int7 = SETBIT(int7, 11);
            };
            if ((varbitplayer_42406 == 1)) {
                int7 = SETBIT(int7, 12);
            };
            if ((varbitplayer_42407 == 1)) {
                int7 = SETBIT(int7, 13);
            };
            if ((varbitplayer_42408 == 1)) {
                int7 = SETBIT(int7, 14);
            };
            return int7;
        }
        case 3572: {
            return varplayer_12463;
        }
        case 3574: {
            return varbitplayer_42415;
        }
        case 3575: {
            return varbitplayer_42417;
        }
        case 3576: {
            if ((((((varbitplayer_33849 + varbitplayer_33850) + varbitplayer_33851) + varbitplayer_33852) + varbitplayer_33853) >= 5)) {
                return 1;
            };
            return 0;
        }
        case 3577: {
            return varbitplayer_42419;
        }
        case 3578: {
            return varbitplayer_42416;
        }
        case 3579: {
            return varbitplayer_42424;
        }
        case 3580: {
            return varbitplayer_42412;
        }
        case 3581: {
            return varbitplayer_42427;
        }
        case 3582: {
            return varbitplayer_42418;
        }
        case 3583: {
            return varbitplayer_42421;
        }
        case 3584: {
            return varbitplayer_42488;
        }
        case 3585:
        case 3586:
        case 3587:
        case 3588: {
            return varbitplayer_42428;
        }
        case 3589: {
            return varbitplayer_42423;
        }
        case 3590: {
            return varbitplayer_42426;
        }
        case 3591: {
            return varbitplayer_28236;
        }
        case 3592: {
            return varbitplayer_42414;
        }
        case 3593: {
            return varbitplayer_42436;
        }
        case 3594: {
            return varbitplayer_42440;
        }
        case 3595: {
            if ((varbitplayer_42429 == 1)) {
                int7 = SETBIT(int7, 0);
            };
            if ((varbitplayer_42430 == 1)) {
                int7 = SETBIT(int7, 1);
            };
            return int7;
        }
        case 3686:
        case 3687:
        case 3688:
        case 3689: {
            return varbitplayer_42489;
        }
        case 3596: {
            return varbitplayer_42433;
        }
        case 3597: {
            return varbitplayer_35025;
        }
        case 3598: {
            if (((varbitplayer_15028 + varbitplayer_15027) == 2)) {
                return 1;
            };
            return 0;
        }
        case 3600: {
            return varbitplayer_42880;
        }
        case 3601: {
            return varbitplayer_42879;
        }
        case 3602: {
            return varbitplayer_42878;
        }
        case 3603: {
            return varbitplayer_42881;
        }
        case 3604: {
            return varbitplayer_42435;
        }
        case 3605: {
            return varbitplayer_42444;
        }
        case 3606: {
            return varbitplayer_42453;
        }
        case 3607: {
            if ((TESTBIT(varbitplayer_42441, 0) == 1)) {
                int7 = SETBIT(int7, 0);
            };
            if ((TESTBIT(varbitplayer_42441, 1) == 1)) {
                int7 = SETBIT(int7, 1);
            };
            if ((TESTBIT(varbitplayer_42441, 2) == 1)) {
                int7 = SETBIT(int7, 2);
            };
            if ((TESTBIT(varbitplayer_42441, 3) == 1)) {
                int7 = SETBIT(int7, 3);
            };
            if ((TESTBIT(varbitplayer_42441, 4) == 1)) {
                int7 = SETBIT(int7, 4);
            };
            if ((TESTBIT(varbitplayer_42441, 5) == 1)) {
                int7 = SETBIT(int7, 5);
            };
            if ((TESTBIT(varbitplayer_42441, 6) == 1)) {
                int7 = SETBIT(int7, 6);
            };
            if ((TESTBIT(varbitplayer_42441, 7) == 1)) {
                int7 = SETBIT(int7, 7);
            };
            if ((TESTBIT(varbitplayer_42441, 8) == 1)) {
                int7 = SETBIT(int7, 8);
            };
            if ((TESTBIT(varbitplayer_42441, 9) == 1)) {
                int7 = SETBIT(int7, 9);
            };
            if ((varbitplayer_42422 == 1)) {
                int7 = SETBIT(int7, 10);
            };
            if ((varbitplayer_42503 == 1)) {
                int7 = SETBIT(int7, 11);
            };
            if ((varbitplayer_42493 == 1)) {
                int7 = SETBIT(int7, 12);
            };
            return int7;
        }
        case 3608:
        case 3609:
        case 3610:
        case 3611: {
            return varbitplayer_42420;
        }
        case 3612: {
            int7 = varbitplayer_42460;
            if ((TESTBIT(varbitplayer_56964, 0) == 1)) {
                int7 = SETBIT(int7, 18);
            };
            if ((TESTBIT(varbitplayer_56964, 1) == 1)) {
                int7 = SETBIT(int7, 19);
            };
            if ((TESTBIT(varbitplayer_56964, 2) == 1)) {
                int7 = SETBIT(int7, 20);
            };
            if ((TESTBIT(varbitplayer_56964, 3) == 1)) {
                int7 = SETBIT(int7, 21);
            };
            if ((TESTBIT(varbitplayer_56964, 4) == 1)) {
                int7 = SETBIT(int7, 22);
            };
            if ((TESTBIT(varbitplayer_56964, 5) == 1)) {
                int7 = SETBIT(int7, 23);
            };
            return int7;
        }
        case 3613:
        case 3614:
        case 3615:
        case 3616: {
            return varbitplayer_42425;
        }
        case 3617: {
            return varbitplayer_42438;
        }
        case 3618: {
            return varbitplayer_42439;
        }
        case 3619: {
            return varbitplayer_42443;
        }
        case 3620: {
            return varbitplayer_42455;
        }
        case 3621: {
            return varbitplayer_42456;
        }
        case 3622: {
            return varbitplayer_42410;
        }
        case 3623: {
            return varbitplayer_42461;
        }
        case 3624: {
            return varbitplayer_42445;
        }
        case 3625:
        case 3626:
        case 3627:
        case 3628: {
            return varbitplayer_42454;
        }
        case 3629: {
            return varbitplayer_42486;
        }
        case 3630: {
            return varbitplayer_42504;
        }
        case 4374: {
            return varbitplayer_47833;
        }
        case 4375: {
            return varbitplayer_47847;
        }
        case 3631: {
            if ((varbitplayer_28733 >= 5000)) {
                return 1;
            };
            return 0;
        }
        case 3632: {
            return varbitplayer_42431;
        }
        case 3633: {
            return varbitplayer_42447;
        }
        case 3634: {
            return varbitplayer_42485;
        }
        case 3635: {
            return varbitplayer_42448;
        }
        case 3636: {
            return varbitplayer_42449;
        }
        case 3637: {
            return varbitplayer_25029;
        }
        case 3638: {
            if ((script13114() == (24 - 5))) {
                return 1;
            };
            return 0;
        }
        case 3639: {
            return varbitplayer_42450;
        }
        case 3640: {
            return varbitplayer_42451;
        }
        case 3643: {
            return varbitplayer_42452;
        }
        case 3644: {
            return varbitplayer_42457;
        }
        case 3645: {
            return varbitplayer_42458;
        }
        case 3647: {
            return varbitplayer_42442;
        }
        case 3648: {
            return varbitplayer_42446;
        }
        case 3649: {
            return varplayer_8225;
        }
        case 3650: {
            return varbitplayer_42487;
        }
        case 3651: {
            return varbitplayer_42437;
        }
        case 3652: {
            return varbitplayer_42494;
        }
        case 3653: {
            return varbitplayer_42459;
        }
        case 3654: {
            return varbitplayer_42462;
        }
        case 3655: {
            return varbitplayer_42463;
        }
        case 3663: {
            return varbitplayer_16792;
        }
        case 3664: {
            if ((varbitplayer_29636 == 1)) {
                int7 = SETBIT(int7, 0);
            };
            if ((varbitplayer_29635 == 1)) {
                int7 = SETBIT(int7, 1);
            };
            if ((varbitplayer_29634 == 1)) {
                int7 = SETBIT(int7, 2);
            };
            if ((varbitplayer_29637 == 1)) {
                int7 = SETBIT(int7, 3);
            };
            return int7;
        }
        case 3665: {
            return varbitplayer_42470;
        }
        case 3673: {
            return varbitplayer_42472;
        }
        case 3675: {
            return varbitplayer_42474;
        }
        case 3680: {
            return varbitplayer_42484;
        }
        case 3681: {
            if ((varbitplayer_22464 == 1)) {
                int7 = SETBIT(int7, 0);
                int7 = SETBIT(int7, 1);
                int7 = SETBIT(int7, 2);
                int7 = SETBIT(int7, 3);
            };
            if ((varbitplayer_18021 >= 250)) {
                int7 = SETBIT(int7, 4);
                int7 = SETBIT(int7, 5);
                int7 = SETBIT(int7, 6);
                int7 = SETBIT(int7, 7);
                int7 = SETBIT(int7, 8);
            };
            if ((varbitplayer_28166 == 1)) {
                int7 = SETBIT(int7, 9);
            };
            if ((varbitplayer_21068 == 1)) {
                int7 = SETBIT(int7, 10);
            };
            if ((varbitplayer_21067 == 1)) {
                int7 = SETBIT(int7, 11);
            };
            if ((varbitplayer_21069 == 1)) {
                int7 = SETBIT(int7, 12);
            };
            if ((varbitplayer_28747 == 1)) {
                int7 = SETBIT(int7, 13);
                int7 = SETBIT(int7, 14);
            };
            if ((varbitplayer_28754 == 1)) {
                int7 = SETBIT(int7, 15);
            };
            if ((varbitplayer_28742 == 1)) {
                int7 = SETBIT(int7, 16);
            };
            if ((varbitplayer_28743 == 1)) {
                int7 = SETBIT(int7, 17);
            };
            if ((varbitplayer_32628 == 1)) {
                int7 = SETBIT(int7, 18);
            };
            if ((varbitplayer_35816 == 1)) {
                int7 = SETBIT(int7, 19);
                int7 = SETBIT(int7, 20);
            };
            if ((varbitplayer_35826 == 1)) {
                int7 = SETBIT(int7, 21);
            };
            if ((varbitplayer_39926 == 1)) {
                int7 = SETBIT(int7, 22);
                int7 = SETBIT(int7, 23);
                int7 = SETBIT(int7, 24);
                int7 = SETBIT(int7, 25);
            };
            if ((varbitplayer_41437 == 1)) {
                int7 = SETBIT(int7, 26);
            };
            if ((varbitplayer_41436 == 1)) {
                int7 = SETBIT(int7, 27);
            };
            if ((varbitplayer_41438 == 1)) {
                int7 = SETBIT(int7, 28);
            };
            return int7;
        }
        case 3682: {
            return varbitplayer_42480;
        }
        case 3683: {
            return varbitplayer_42481;
        }
        case 3684: {
            return varbitplayer_42482;
        }
        case 3685: {
            return varbitplayer_42483;
        }
        case 3667:
        case 3668:
        case 3669:
        case 3670:
        case 3671:
        case 3672: {
            return varbitplayer_33203;
        }
        case 3692: {
            return (((varbitplayer_42951 + varbitplayer_42952) + varbitplayer_42953) + varbitplayer_42954);
        }
        case 3693: {
            if ((varbitplayer_43189 >= 100)) {
                int7 = SETBIT(int7, 0);
            };
            if ((varbitplayer_43191 >= 100)) {
                int7 = SETBIT(int7, 1);
            };
            if ((varbitplayer_43193 >= 100)) {
                int7 = SETBIT(int7, 2);
            };
            if ((varbitplayer_43195 >= 100)) {
                int7 = SETBIT(int7, 3);
            };
            if ((varbitplayer_43199 >= 100)) {
                int7 = SETBIT(int7, 4);
            };
            if ((varbitplayer_43201 >= 100)) {
                int7 = SETBIT(int7, 5);
            };
            if ((varbitplayer_43203 >= 100)) {
                int7 = SETBIT(int7, 6);
            };
            if ((varbitplayer_43207 >= 100)) {
                int7 = SETBIT(int7, 7);
            };
            if ((varbitplayer_43209 >= 100)) {
                int7 = SETBIT(int7, 8);
            };
            if ((varbitplayer_43211 >= 100)) {
                int7 = SETBIT(int7, 9);
            };
            if ((varbitplayer_43213 >= 100)) {
                int7 = SETBIT(int7, 10);
            };
            if ((varbitplayer_43215 >= 100)) {
                int7 = SETBIT(int7, 11);
            };
            if ((varbitplayer_43217 >= 100)) {
                int7 = SETBIT(int7, 12);
            };
            if ((varbitplayer_43219 >= 100)) {
                int7 = SETBIT(int7, 13);
            };
            if ((varbitplayer_43221 >= 100)) {
                int7 = SETBIT(int7, 14);
            };
            return int7;
        }
        case 3724: {
            if ((varbitplayer_43481 == 1)) {
                int7 = SETBIT(int7, 0);
            };
            if ((varbitplayer_43482 == 1)) {
                int7 = SETBIT(int7, 1);
            };
            if ((varbitplayer_43483 == 1)) {
                int7 = SETBIT(int7, 2);
            };
            if ((varbitplayer_43484 == 1)) {
                int7 = SETBIT(int7, 3);
            };
            if ((varbitplayer_43485 == 1)) {
                int7 = SETBIT(int7, 4);
            };
            if ((varbitplayer_43486 == 1)) {
                int7 = SETBIT(int7, 5);
            };
            if ((varbitplayer_43487 == 1)) {
                int7 = SETBIT(int7, 6);
            };
            if ((varbitplayer_43488 == 1)) {
                int7 = SETBIT(int7, 7);
            };
            if ((varbitplayer_43489 == 1)) {
                int7 = SETBIT(int7, 8);
            };
            if ((varbitplayer_43490 == 1)) {
                int7 = SETBIT(int7, 9);
            };
            if ((varbitplayer_43491 == 1)) {
                int7 = SETBIT(int7, 10);
            };
            if ((varbitplayer_43492 == 1)) {
                int7 = SETBIT(int7, 11);
            };
            if ((varbitplayer_43493 == 1)) {
                int7 = SETBIT(int7, 12);
            };
            if ((varbitplayer_43494 == 1)) {
                int7 = SETBIT(int7, 13);
            };
            if ((varbitplayer_43495 == 1)) {
                int7 = SETBIT(int7, 14);
            };
            if ((varbitplayer_43496 == 1)) {
                int7 = SETBIT(int7, 15);
            };
            return int7;
        }
        case 3694: {
            if ((varbitplayer_3335 == 1)) {
                int7 = SETBIT(int7, 0);
            };
            if (((varbitplayer_43019 == 1) || (varbitplayer_15454 == 1))) {
                int7 = SETBIT(int7, 1);
            };
            if ((varbitplayer_43020 == 1)) {
                int7 = SETBIT(int7, 2);
            };
            if (((varbitplayer_3359 == 1) || (varbitplayer_15735 == 1))) {
                int7 = SETBIT(int7, 3);
            };
            if ((((varbitplayer_43021 == 1) || (varbitplayer_15478 == 1)) || (varbitplayer_15564 == 1))) {
                int7 = SETBIT(int7, 4);
            };
            if (((varbitplayer_15577 == 1) || (varbitplayer_26542 == 1))) {
                int7 = SETBIT(int7, 5);
            };
            if ((((varbitplayer_43022 == 1) || (varbitplayer_15479 == 1)) || (varbitplayer_15856 == 1))) {
                int7 = SETBIT(int7, 6);
            };
            if (((varbitplayer_43023 == 1) || (varbitplayer_15488 == 1))) {
                int7 = SETBIT(int7, 7);
            };
            if (((varbitplayer_43024 == 1) || (varbitplayer_15647 == 1))) {
                int7 = SETBIT(int7, 8);
            };
            if (((varbitplayer_43025 == 1) || (varbitplayer_35977 == 1))) {
                int7 = SETBIT(int7, 9);
            };
            if ((varbitplayer_43026 == 1)) {
                int7 = SETBIT(int7, 10);
            };
            if ((varbitplayer_43027 == 1)) {
                int7 = SETBIT(int7, 11);
            };
            if ((((varbitplayer_43028 == 1) || (varbitplayer_15812 == 1)) || (varbitplayer_15964 == 1))) {
                int7 = SETBIT(int7, 12);
            };
            if (((varbitplayer_43029 == 1) || (varbitplayer_17767 == 1))) {
                int7 = SETBIT(int7, 13);
            };
            if ((varbitplayer_43030 == 1)) {
                int7 = SETBIT(int7, 14);
            };
            if ((varbitplayer_43031 == 1)) {
                int7 = SETBIT(int7, 15);
            };
            if ((varbitplayer_43032 == 1)) {
                int7 = SETBIT(int7, 16);
            };
            if ((varbitplayer_43033 == 1)) {
                int7 = SETBIT(int7, 17);
            };
            if ((varbitplayer_43034 == 1)) {
                int7 = SETBIT(int7, 18);
            };
            if ((varbitplayer_43035 == 1)) {
                int7 = SETBIT(int7, 19);
            };
            if ((varbitplayer_43036 == 1)) {
                int7 = SETBIT(int7, 20);
            };
            if ((varbitplayer_43037 == 1)) {
                int7 = SETBIT(int7, 21);
            };
            return int7;
        }
        case 3436: {
            if ((varbitplayer_43479 == 1)) {
                int7 = SETBIT(int7, 0);
            };
            if ((varbitplayer_43480 == 1)) {
                int7 = SETBIT(int7, 1);
            };
            return int7;
        }
        case 3695: {
            return varbitplayer_43059;
        }
        case 3696: {
            return varbitplayer_43060;
        }
        case 3697: {
            if (((varbitplayer_43061 == 1) || (varbitplayer_6137 > 49))) {
                int7 = SETBIT(int7, 0);
            };
            if (((varbitplayer_43061 == 1) || ((varbitplayer_17804 > 24) && (varbitplayer_17801 == 1)))) {
                int7 = SETBIT(int7, 1);
            };
            if (((varbitplayer_43061 == 1) || (varbitplayer_25870 > 49))) {
                int7 = SETBIT(int7, 2);
            };
            if (((varbitplayer_43061 == 1) || (varbitplayer_26001 > 24))) {
                int7 = SETBIT(int7, 3);
            };
            return int7;
        }
        case 3698: {
            return varbitplayer_43062;
        }
        case 3699: {
            return varbitplayer_43063;
        }
        case 3700: {
            return varbitplayer_43064;
        }
        case 3701: {
            return varbitplayer_43065;
        }
        case 3702: {
            return varbitplayer_43066;
        }
        case 3703: {
            if ((varbitplayer_43067 == 1)) {
                int7 = SETBIT(int7, 0);
            };
            if ((varbitplayer_43068 == 1)) {
                int7 = SETBIT(int7, 1);
            };
            if ((varbitplayer_43069 == 1)) {
                int7 = SETBIT(int7, 2);
            };
            if ((varbitplayer_43070 == 1)) {
                int7 = SETBIT(int7, 3);
            };
            if ((varbitplayer_43071 == 1)) {
                int7 = SETBIT(int7, 4);
            };
            return int7;
        }
        case 3704: {
            return varbitplayer_43072;
        }
        case 3705: {
            return varbitplayer_43073;
        }
        case 3706: {
            return varbitplayer_43074;
        }
        case 3707: {
            return varbitplayer_43075;
        }
        case 3708: {
            return varbitplayer_43076;
        }
        case 3709: {
            return varbitplayer_43077;
        }
        case 3721: {
            if ((varbitplayer_43339 == 1)) {
                int7 = SETBIT(int7, 0);
            };
            if ((varbitplayer_43343 == 1)) {
                int7 = SETBIT(int7, 1);
            };
            if ((varbitplayer_43344 == 1)) {
                int7 = SETBIT(int7, 2);
            };
            if ((varbitplayer_43345 == 1)) {
                int7 = SETBIT(int7, 3);
            };
            if ((varbitplayer_43346 == 1)) {
                int7 = SETBIT(int7, 4);
            };
            if ((varbitplayer_43347 == 1)) {
                int7 = SETBIT(int7, 5);
            };
            return int7;
        }
        case 3372: {
            return BITCOUNT(varplayer_8378);
        }
        case 3763: {
            return varbitplayer_43500;
        }
        case 3764: {
            return varbitplayer_43501;
        }
        case 3765: {
            return varbitplayer_43498;
        }
        case 3766: {
            return varbitplayer_43499;
        }
        case 3767: {
            return varbitplayer_43502;
        }
        case 3768: {
            return varbitplayer_43503;
        }
        case 3769: {
            return varbitplayer_43504;
        }
        case 3770: {
            return varbitplayer_43505;
        }
        case 3771: {
            return varbitplayer_43506;
        }
        case 3772: {
            return varbitplayer_43507;
        }
        case 3773: {
            return varbitplayer_43508;
        }
        case 3774: {
            return varbitplayer_43509;
        }
        case 3775: {
            return varbitplayer_43510;
        }
        case 3776: {
            return varbitplayer_43511;
        }
        case 3777: {
            return varbitplayer_43512;
        }
        case 3778: {
            return varbitplayer_43513;
        }
        case 3779: {
            return varbitplayer_43514;
        }
        case 3780: {
            return varbitplayer_43515;
        }
        case 3784: {
            return varbitplayer_43445;
        }
        case 3783: {
            return varbitplayer_43518;
        }
        case 3785: {
            return varbitplayer_43517;
        }
        case 3806: {
            return varbitplayer_43924;
        }
        case 3809: {
            return varbitplayer_35984;
        }
        case 3810: {
            if (((varbitplayer_36281 + varbitplayer_36280) == 2)) {
                return 1;
            };
            return 0;
        }
        case 3811: {
            if (((((varbitplayer_35388 == 1) && (varbitplayer_35389 == 1)) && (varbitplayer_35390 == 1)) && (varbitplayer_35391 == 1))) {
                return 1;
            };
            return 0;
        }
        case 3815: {
            if ((script6061(1) == script6527(1732 as dbrow))) {
                int7 = SETBIT(int7, 0);
            };
            if ((script6061(2) == script6527(1733 as dbrow))) {
                int7 = SETBIT(int7, 1);
            };
            if ((script6061(3) == script6527(1734 as dbrow))) {
                int7 = SETBIT(int7, 2);
            };
            if ((script6061(4) == script6527(1735 as dbrow))) {
                int7 = SETBIT(int7, 3);
            };
            if ((script6061(5) == script6527(1736 as dbrow))) {
                int7 = SETBIT(int7, 4);
            };
            if ((script6061(6) == script6527(1737 as dbrow))) {
                int7 = SETBIT(int7, 5);
            };
            if ((script6061(7) == script6527(1738 as dbrow))) {
                int7 = SETBIT(int7, 6);
            };
            if ((script6061(8) == script6527(1739 as dbrow))) {
                int7 = SETBIT(int7, 7);
            };
            if ((script6061(9) == script6527(1740 as dbrow))) {
                int7 = SETBIT(int7, 8);
            };
            return int7;
        }
        case 3816: {
            if ((script6681(48105 as obj) == 1)) {
                int7 = SETBIT(int7, 0);
            };
            if ((script6681(48109 as obj) == 1)) {
                int7 = SETBIT(int7, 1);
            };
            if ((script6681(48113 as obj) == 1)) {
                int7 = SETBIT(int7, 2);
            };
            if ((script6681(48117 as obj) == 1)) {
                int7 = SETBIT(int7, 3);
            };
            if ((script6681(48129 as obj) == 1)) {
                int7 = SETBIT(int7, 4);
            };
            if ((script6681(48121 as obj) == 1)) {
                int7 = SETBIT(int7, 5);
            };
            if ((script6681(48125 as obj) == 1)) {
                int7 = SETBIT(int7, 6);
            };
            return int7;
        }
        case 3817: {
            return varbitplayer_44262;
        }
        case 4372: {
            return varbitplayer_47593;
        }
        case 3818: {
            return (varbitplayer_44358 + varbitplayer_44359);
        }
        case 3819: {
            if ((varbitplayer_44337 > 0)) {
                int7 = SETBIT(int7, 0);
            };
            if ((varbitplayer_44338 > 0)) {
                int7 = SETBIT(int7, 1);
            };
            if ((varbitplayer_44339 > 0)) {
                int7 = SETBIT(int7, 2);
            };
            if ((varbitplayer_44340 > 0)) {
                int7 = SETBIT(int7, 3);
            };
            if ((varbitplayer_44341 > 0)) {
                int7 = SETBIT(int7, 4);
            };
            if ((varbitplayer_44342 > 0)) {
                int7 = SETBIT(int7, 5);
            };
            if ((varbitplayer_44343 > 0)) {
                int7 = SETBIT(int7, 6);
            };
            if ((varbitplayer_44344 > 0)) {
                int7 = SETBIT(int7, 7);
            };
            if ((varbitplayer_44345 > 0)) {
                int7 = SETBIT(int7, 8);
            };
            return int7;
        }
        case 3820: {
            return varbitplayer_44492;
        }
        case 3821: {
            return ((((varbitplayer_44363 + varbitplayer_44364) + varbitplayer_44365) + varbitplayer_44366) + varbitplayer_44367);
        }
        case 3898:
        case 3899:
        case 3900:
        case 3901:
        case 3902:
        case 3903:
        case 3904:
        case 3905:
        case 3906:
        case 3907:
        case 3908:
        case 3909:
        case 3910:
        case 3911:
        case 3912:
        case 3918:
        case 3919:
        case 3920:
        case 3921:
        case 3922:
        case 3923:
        case 3924:
        case 3925:
        case 3929:
        case 3931:
        case 3932:
        case 3933:
        case 3934:
        case 3935:
        case 3937:
        case 3938:
        case 3939:
        case 3940:
        case 3941:
        case 3942:
        case 3943:
        case 3944:
        case 3945:
        case 3946:
        case 3947:
        case 3948:
        case 3949: {
            return varbitplayer_39917;
        }
        case 3913:
        case 3914:
        case 3915:
        case 3916:
        case 3917: {
            if ((varbitplayer_39917 >= 36)) {
                return 6;
            };
            return script8262();
        }
        case 3927: {
            if ((varbitplayer_39917 > 50)) {
                return struct_getparam(int0, 6423);
            };
            return varbitplayer_44769;
        }
        case 3926: {
            if ((varbitplayer_39917 > 50)) {
                return struct_getparam(int0, 6423);
            };
            return varbitplayer_44768;
        }
        case 3928: {
            if ((varbitplayer_39917 > 50)) {
                return 1;
            };
            return 0;
        }
        case 3930: {
            if ((varbitplayer_39917 > 54)) {
                return struct_getparam(int0, 6423);
            };
            return varbitplayer_44770;
        }
        case 3936: {
            if (((varbitplayer_39917 == 66) && (INV_GETOBJ(94 as inv, 3) != -1 as obj))) {
                return 1;
            };
            if ((varbitplayer_39917 > 66)) {
                return 1;
            };
            return 0;
        }
        case 3950: {
            return varbitplayer_60098;
        }
        case 3951:
        case 3953:
        case 3969:
        case 3970:
        case 3971:
        case 3972:
        case 3974:
        case 3975:
        case 3976:
        case 3977:
        case 3978:
        case 3991:
        case 3992:
        case 3998:
        case 3999:
        case 4000:
        case 4001:
        case 4003:
        case 4018:
        case 4022:
        case 4023:
        case 4024:
        case 4025:
        case 4026:
        case 4027:
        case 4028:
        case 4029:
        case 4031:
        case 4032:
        case 4033:
        case 4034:
        case 4035: {
            if (((script3550() == false) && (varbitplayer_44763 < 175))) {
                return 175;
            };
            return varbitplayer_44763;
        }
        case 3952: {
            if ((script3550() == false)) {
                return struct_getparam(int0, 6423);
            };
            if ((varbitplayer_44763 > 5)) {
                return struct_getparam(int0, 6423);
            };
            if ((varbitplayer_44763 == 5)) {
                return varbitplayer_44764;
            };
            return 0;
        }
        case 3954: {
            if ((script3550() == false)) {
                return struct_getparam(int0, 6423);
            };
            if ((varbitplayer_44798 >= struct_getparam(43970 as struct, 6423))) {
                return struct_getparam(int0, 6423);
            };
            if ((varbitplayer_44763 > 15)) {
                return struct_getparam(int0, 6423);
            };
            if ((varbitplayer_44763 == 15)) {
                return varbitplayer_44766;
            };
            return 0;
        }
        case 3955: {
            if ((script3550() == false)) {
                return struct_getparam(int0, 6423);
            };
            if ((varbitplayer_44798 >= struct_getparam(43970 as struct, 6423))) {
                return struct_getparam(int0, 6423);
            };
            if ((varbitplayer_44763 > 15)) {
                return struct_getparam(int0, 6423);
            };
            if ((varbitplayer_44763 == 15)) {
                return varbitplayer_44765;
            };
            return 0;
        }
        case 3956: {
            if ((script3550() == false)) {
                return struct_getparam(int0, 6423);
            };
            if ((varbitplayer_44798 >= struct_getparam(43970 as struct, 6423))) {
                return struct_getparam(int0, 6423);
            };
            if ((varbitplayer_44763 > 15)) {
                return struct_getparam(int0, 6423);
            };
            if ((varbitplayer_44763 == 15)) {
                return varbitplayer_44767;
            };
            return 0;
        }
        case 3957:
        case 3958: {
            if ((script3550() == false)) {
                return struct_getparam(int0, 6423);
            };
            if ((varbitplayer_44763 > 15)) {
                return struct_getparam(int0, 6423);
            };
            if ((varbitplayer_44763 == 15)) {
                return varbitplayer_44798;
            };
            return 0;
        }
        case 3959: {
            if ((script3550() == false)) {
                return struct_getparam(int0, 6423);
            };
            if (((varbitplayer_44763 > 20) || (varbitplayer_44771 == 1))) {
                return struct_getparam(int0, 6423);
            };
            if ((varbitplayer_44763 == 20)) {
                return varbitplayer_44769;
            };
            return 0;
        }
        case 3960: {
            if ((script3550() == false)) {
                return struct_getparam(int0, 6423);
            };
            if (((varbitplayer_44763 > 20) || (varbitplayer_44771 == 1))) {
                return struct_getparam(int0, 6423);
            };
            if ((varbitplayer_44763 == 20)) {
                return varbitplayer_44768;
            };
            return 0;
        }
        case 3961: {
            if ((script3550() == false)) {
                return struct_getparam(int0, 6423);
            };
            if (((varbitplayer_44763 > 20) || (varbitplayer_44771 == 1))) {
                return struct_getparam(int0, 6423);
            };
            if ((varbitplayer_44763 == 20)) {
                return varbitplayer_44770;
            };
            return 0;
        }
        case 3962: {
            if ((script3550() == false)) {
                return struct_getparam(int0, 6423);
            };
            if ((varbitplayer_44763 > 20)) {
                return struct_getparam(int0, 6423);
            };
            if ((varbitplayer_44763 == 20)) {
                return varbitplayer_44771;
            };
            return 0;
        }
        case 3963: {
            if ((script3550() == false)) {
                return struct_getparam(int0, 6423);
            };
            return varbitplayer_44772;
        }
        case 3964: {
            if ((script3550() == false)) {
                return struct_getparam(int0, 6423);
            };
            return varbitplayer_44774;
        }
        case 3965: {
            if ((script3550() == false)) {
                return struct_getparam(int0, 6423);
            };
            if ((varbitplayer_44773 >= struct_getparam(43981 as struct, 6423))) {
                return struct_getparam(43978 as struct, 6423);
            };
            return varbitplayer_44769;
        }
        case 3966: {
            if ((script3550() == false)) {
                return struct_getparam(int0, 6423);
            };
            if ((varbitplayer_44773 >= struct_getparam(43981 as struct, 6423))) {
                return struct_getparam(43979 as struct, 6423);
            };
            return varbitplayer_44768;
        }
        case 3967: {
            if ((script3550() == false)) {
                return struct_getparam(int0, 6423);
            };
            if ((varbitplayer_44773 >= struct_getparam(43981 as struct, 6423))) {
                return struct_getparam(43980 as struct, 6423);
            };
            return varbitplayer_44770;
        }
        case 3968: {
            if ((script3550() == false)) {
                return struct_getparam(int0, 6423);
            };
            return varbitplayer_44773;
        }
        case 3973: {
            if ((script3550() == false)) {
                return struct_getparam(int0, 6423);
            };
            if ((varbitplayer_44763 > 40)) {
                return struct_getparam(int0, 6423);
            };
            if ((varbitplayer_44763 == 40)) {
                return varbitplayer_44764;
            };
            return 0;
        }
        case 3979: {
            if ((script3550() == false)) {
                return struct_getparam(int0, 6423);
            };
            if (((varbitplayer_44763 > 65) || (varbitplayer_44779 >= 15))) {
                return struct_getparam(int0, 6423);
            };
            if ((varbitplayer_44763 == 65)) {
                return varbitplayer_44764;
            };
            return 0;
        }
        case 3980: {
            if ((script3550() == false)) {
                return struct_getparam(int0, 6423);
            };
            if (((varbitplayer_44763 > 65) || (varbitplayer_44779 >= 15))) {
                return struct_getparam(int0, 6423);
            };
            return 0;
        }
        case 3981: {
            if ((script3550() == false)) {
                return struct_getparam(int0, 6423);
            };
            if (((varbitplayer_44763 > 65) || (varbitplayer_44779 >= 15))) {
                return struct_getparam(int0, 6423);
            };
            if ((varbitplayer_44763 == 65)) {
                return varbitplayer_44766;
            };
            return 0;
        }
        case 3982: {
            if ((script3550() == false)) {
                return struct_getparam(int0, 6423);
            };
            if (((varbitplayer_44763 > 65) || (varbitplayer_44779 >= 15))) {
                return struct_getparam(int0, 6423);
            };
            if ((varbitplayer_44763 == 65)) {
                return varbitplayer_44775;
            };
            return 0;
        }
        case 3983: {
            if ((script3550() == false)) {
                return struct_getparam(int0, 6423);
            };
            if (((varbitplayer_44763 > 65) || (varbitplayer_44779 >= 15))) {
                return struct_getparam(int0, 6423);
            };
            if ((varbitplayer_44763 == 65)) {
                return varbitplayer_44776;
            };
            return 0;
        }
        case 3984: {
            if ((script3550() == false)) {
                return struct_getparam(int0, 6423);
            };
            if (((varbitplayer_44763 > 65) || (varbitplayer_44779 >= 15))) {
                return struct_getparam(int0, 6423);
            };
            if ((varbitplayer_44763 == 65)) {
                return varbitplayer_44777;
            };
            return 0;
        }
        case 3985: {
            if ((script3550() == false)) {
                return struct_getparam(int0, 6423);
            };
            if (((varbitplayer_44763 > 65) || (varbitplayer_44779 >= 15))) {
                return struct_getparam(int0, 6423);
            };
            if ((varbitplayer_44763 == 65)) {
                return varbitplayer_44769;
            };
            return 0;
        }
        case 3986: {
            if ((script3550() == false)) {
                return struct_getparam(int0, 6423);
            };
            if (((varbitplayer_44763 > 65) || (varbitplayer_44779 >= 15))) {
                return struct_getparam(int0, 6423);
            };
            if ((varbitplayer_44763 == 65)) {
                return varbitplayer_44768;
            };
            return 0;
        }
        case 3987: {
            if ((script3550() == false)) {
                return struct_getparam(int0, 6423);
            };
            if (((varbitplayer_44763 > 65) || (varbitplayer_44779 >= 15))) {
                return struct_getparam(int0, 6423);
            };
            if ((varbitplayer_44763 == 65)) {
                return varbitplayer_44770;
            };
            return 0;
        }
        case 3988: {
            if ((script3550() == false)) {
                return struct_getparam(int0, 6423);
            };
            if (((varbitplayer_44763 > 65) || (varbitplayer_44779 >= 15))) {
                return struct_getparam(int0, 6423);
            };
            if ((varbitplayer_44763 == 65)) {
                return varbitplayer_44778;
            };
            return 0;
        }
        case 3989:
        case 3990: {
            if ((script3550() == false)) {
                return struct_getparam(int0, 6423);
            };
            if (((varbitplayer_44763 > 65) || (varbitplayer_44779 >= 15))) {
                return struct_getparam(int0, 6423);
            };
            if ((varbitplayer_44763 == 65)) {
                return varbitplayer_44779;
            };
            return 0;
        }
        case 3993: {
            if ((script3550() == false)) {
                return struct_getparam(int0, 6423);
            };
            if ((varbitplayer_44763 > 75)) {
                return struct_getparam(int0, 6423);
            };
            if ((varbitplayer_44763 == 75)) {
                return varbitplayer_44780;
            };
            return 0;
        }
        case 3994: {
            if ((script3550() == false)) {
                return struct_getparam(int0, 6423);
            };
            if ((varbitplayer_44763 > 75)) {
                return struct_getparam(int0, 6423);
            };
            if ((varbitplayer_44763 == 75)) {
                return varbitplayer_44781;
            };
            return 0;
        }
        case 3995: {
            if ((script3550() == false)) {
                return struct_getparam(int0, 6423);
            };
            if ((varbitplayer_44763 > 75)) {
                return struct_getparam(int0, 6423);
            };
            if ((varbitplayer_44763 == 75)) {
                return varbitplayer_44766;
            };
            return 0;
        }
        case 3996: {
            if ((script3550() == false)) {
                return struct_getparam(int0, 6423);
            };
            if ((varbitplayer_44763 > 75)) {
                return struct_getparam(int0, 6423);
            };
            if ((varbitplayer_44763 == 75)) {
                return varbitplayer_44782;
            };
            return 0;
        }
        case 3997: {
            if ((script3550() == false)) {
                return struct_getparam(int0, 6423);
            };
            if ((varbitplayer_44763 > 75)) {
                return struct_getparam(int0, 6423);
            };
            if ((varbitplayer_44763 == 75)) {
                return varbitplayer_44783;
            };
            return 0;
        }
        case 4002: {
            if ((script3550() == false)) {
                return struct_getparam(int0, 6423);
            };
            if ((varbitplayer_44763 > 95)) {
                return struct_getparam(int0, 6423);
            };
            if ((varbitplayer_44763 == 95)) {
                return varbitplayer_44764;
            };
            return 0;
        }
        case 4004: {
            if ((script3550() == false)) {
                return struct_getparam(int0, 6423);
            };
            if (((varbitplayer_44763 > 105) || (varbitplayer_44789 >= 30))) {
                return struct_getparam(int0, 6423);
            };
            if ((varbitplayer_44763 == 105)) {
                return varbitplayer_44764;
            };
            return 0;
        }
        case 4005: {
            if ((script3550() == false)) {
                return struct_getparam(int0, 6423);
            };
            if (((varbitplayer_44763 > 105) || (varbitplayer_44789 >= 30))) {
                return struct_getparam(int0, 6423);
            };
            if ((varbitplayer_44763 == 105)) {
                return varbitplayer_44789;
            };
            return 0;
        }
        case 4006: {
            if ((script3550() == false)) {
                return struct_getparam(int0, 6423);
            };
            if ((varbitplayer_44786 == 1)) {
                return struct_getparam(int0, 6423);
            };
            if ((varbitplayer_44763 < 95)) {
                return 0;
            };
            return varbitplayer_44784;
        }
        case 4007: {
            if ((script3550() == false)) {
                return struct_getparam(int0, 6423);
            };
            if ((varbitplayer_44786 == 1)) {
                return struct_getparam(int0, 6423);
            };
            if ((varbitplayer_44763 < 95)) {
                return 0;
            };
            return varbitplayer_44785;
        }
        case 4008: {
            if ((script3550() == false)) {
                return struct_getparam(int0, 6423);
            };
            if ((varbitplayer_44763 < 95)) {
                return 0;
            };
            return varbitplayer_44786;
        }
        case 4009: {
            if ((script3550() == false)) {
                return struct_getparam(int0, 6423);
            };
            if ((varbitplayer_44786 == 0)) {
                return 0;
            };
            return varbitplayer_44787;
        }
        case 4010: {
            if ((script3550() == false)) {
                return struct_getparam(int0, 6423);
            };
            if ((varbitplayer_44786 == 0)) {
                return 0;
            };
            return varbitplayer_44788;
        }
        case 4011: {
            if ((script3550() == false)) {
                return struct_getparam(int0, 6423);
            };
            if (((varbitplayer_44763 > 105) || (varbitplayer_44789 >= 30))) {
                return struct_getparam(int0, 6423);
            };
            if ((varbitplayer_44763 == 105)) {
                return varbitplayer_44789;
            };
            return 0;
        }
        case 4012: {
            if ((script3550() == false)) {
                return struct_getparam(int0, 6423);
            };
            if ((varbitplayer_44763 > 105)) {
                return struct_getparam(int0, 6423);
            };
            if ((varbitplayer_44763 == 105)) {
                return varbitplayer_44766;
            };
            return 0;
        }
        case 4013: {
            if ((script3550() == false)) {
                return struct_getparam(int0, 6423);
            };
            if ((varbitplayer_44763 > 105)) {
                return struct_getparam(int0, 6423);
            };
            if ((varbitplayer_44763 == 105)) {
                return varbitplayer_44790;
            };
            return 0;
        }
        case 4014: {
            if ((script3550() == false)) {
                return struct_getparam(int0, 6423);
            };
            if ((varbitplayer_44763 > 105)) {
                return struct_getparam(int0, 6423);
            };
            if ((varbitplayer_44763 == 105)) {
                return varbitplayer_44791;
            };
            return 0;
        }
        case 4015: {
            if ((script3550() == false)) {
                return struct_getparam(int0, 6423);
            };
            if ((varbitplayer_44763 > 105)) {
                return struct_getparam(int0, 6423);
            };
            if ((varbitplayer_44763 == 105)) {
                return varbitplayer_44792;
            };
            return 0;
        }
        case 4016: {
            if ((script3550() == false)) {
                return struct_getparam(int0, 6423);
            };
            if ((varbitplayer_44763 > 105)) {
                return struct_getparam(int0, 6423);
            };
            if ((varbitplayer_44763 == 105)) {
                return varbitplayer_44793;
            };
            return 0;
        }
        case 4017: {
            if ((script3550() == false)) {
                return struct_getparam(int0, 6423);
            };
            if ((varbitplayer_44763 > 105)) {
                return struct_getparam(int0, 6423);
            };
            if ((varbitplayer_44763 == 105)) {
                return varbitplayer_44794;
            };
            return 0;
        }
        case 4019: {
            if ((script3550() == false)) {
                return struct_getparam(int0, 6423);
            };
            if ((varbitplayer_44763 < 105)) {
                return 0;
            };
            return varbitplayer_44795;
        }
        case 4020: {
            if ((script3550() == false)) {
                return struct_getparam(int0, 6423);
            };
            if ((varbitplayer_44795 == 0)) {
                return 0;
            };
            return varbitplayer_44796;
        }
        case 4021: {
            if ((script3550() == false)) {
                return struct_getparam(int0, 6423);
            };
            if ((varbitplayer_44795 == 0)) {
                return 0;
            };
            return varbitplayer_44797;
        }
        case 4030: {
            if ((script3550() == false)) {
                return struct_getparam(int0, 6423);
            };
            if ((varbitplayer_44763 > 150)) {
                return struct_getparam(int0, 6423);
            };
            if (((varbitplayer_44763 == 150) && (varplayer_185 == 111))) {
                return (struct_getparam(int0, 6423) - varplayer_183);
            };
            return 0;
        }
        case 4036: {
            if ((script3550() == false)) {
                return struct_getparam(int0, 6423);
            };
            return varbitplayer_44799;
        }
        case 4037: {
            if ((script3550() == false)) {
                return struct_getparam(int0, 6423);
            };
            return varbitplayer_20939;
        }
        case 4038: {
            if ((script3550() == false)) {
                return struct_getparam(int0, 6423);
            };
            return varbitplayer_44802;
        }
        case 4039: {
            if ((script3550() == false)) {
                return struct_getparam(int0, 6423);
            };
            return varbitplayer_44803;
        }
        case 4040: {
            if ((script3550() == false)) {
                return struct_getparam(int0, 6423);
            };
            return varbitplayer_44804;
        }
        case 4041:
        case 4042:
        case 4043:
        case 4044:
        case 4045:
        case 4046:
        case 4047: {
            if ((script3550() == false)) {
                return struct_getparam(int0, 6423);
            };
            return varbitplayer_44824;
        }
        case 4051: {
            if ((script3550() == false)) {
                return struct_getparam(int0, 6423);
            };
            return varbitplayer_44827;
        }
        case 4052: {
            if ((script3550() == false)) {
                return struct_getparam(int0, 6423);
            };
            return varbitplayer_44828;
        }
        case 4053: {
            if ((script3550() == false)) {
                return struct_getparam(int0, 6423);
            };
            return varbitplayer_44829;
        }
        case 4054: {
            if ((script3550() == false)) {
                return struct_getparam(int0, 6423);
            };
            return varbitplayer_44805;
        }
        case 4055: {
            if ((script3550() == false)) {
                return struct_getparam(int0, 6423);
            };
            return varbitplayer_44806;
        }
        case 4056: {
            if ((script3550() == false)) {
                return struct_getparam(int0, 6423);
            };
            return varbitplayer_44807;
        }
        case 4057: {
            if ((script3550() == false)) {
                return struct_getparam(int0, 6423);
            };
            return varbitplayer_44808;
        }
        case 4058: {
            if ((script3550() == false)) {
                return struct_getparam(int0, 6423);
            };
            return varbitplayer_44809;
        }
        case 4059: {
            if ((script3550() == false)) {
                return struct_getparam(int0, 6423);
            };
            return varbitplayer_44811;
        }
        case 4060: {
            if ((script3550() == false)) {
                return struct_getparam(int0, 6423);
            };
            return varbitplayer_44812;
        }
        case 4061: {
            if ((script3550() == false)) {
                return struct_getparam(int0, 6423);
            };
            return varbitplayer_44810;
        }
        case 4062: {
            if ((script3550() == false)) {
                return struct_getparam(int0, 6423);
            };
            return varbitplayer_44813;
        }
        case 4063: {
            if ((script3550() == false)) {
                return struct_getparam(int0, 6423);
            };
            return varbitplayer_44814;
        }
        case 4064: {
            if ((script3550() == false)) {
                return struct_getparam(int0, 6423);
            };
            return varbitplayer_44815;
        }
        case 4065: {
            if ((script3550() == false)) {
                return struct_getparam(int0, 6423);
            };
            return varbitplayer_44816;
        }
        case 4066: {
            if ((script3550() == false)) {
                return struct_getparam(int0, 6423);
            };
            return varbitplayer_44817;
        }
        case 4067: {
            if ((script3550() == false)) {
                return struct_getparam(int0, 6423);
            };
            return varbitplayer_44818;
        }
        case 4068: {
            if ((script3550() == false)) {
                return struct_getparam(int0, 6423);
            };
            return varbitplayer_44819;
        }
        case 4069: {
            if ((script3550() == false)) {
                return struct_getparam(int0, 6423);
            };
            return varbitplayer_44820;
        }
        case 4070: {
            if ((script3550() == false)) {
                return struct_getparam(int0, 6423);
            };
            return varbitplayer_44821;
        }
        case 4071: {
            if ((script3550() == false)) {
                return struct_getparam(int0, 6423);
            };
            return varbitplayer_44822;
        }
        case 377: {
            return varbitplayer_3355;
        }
        case 378: {
            return varbitplayer_3356;
        }
        case 549: {
            return varbitplayer_3411;
        }
        case 376: {
            return varbitplayer_3354;
        }
        case 371: {
            return varbitplayer_3349;
        }
        case 2602: {
            return varbitplayer_22442;
        }
        case 577: {
            return varbitplayer_3428;
        }
        case 578: {
            return varbitplayer_3429;
        }
        case 579: {
            return varbitplayer_3430;
        }
        case 580: {
            return varbitplayer_3431;
        }
        case 3428: {
            return varbitplayer_41388;
        }
        case 3429: {
            return varbitplayer_41389;
        }
        case 582: {
            return varbitplayer_3433;
        }
        case 3430: {
            return varbitplayer_41390;
        }
        case 3431: {
            return varbitplayer_41391;
        }
        case 3432: {
            return varbitplayer_41392;
        }
        case 581: {
            return varbitplayer_3432;
        }
        case 362: {
            return varbitplayer_3339;
        }
        case 4080: {
            return varbitplayer_44825;
        }
        case 427: {
            return varbitplayer_3334;
        }
        case 4081: {
            return varbitplayer_3347;
        }
        case 420: {
            return varbitplayer_3317;
        }
        case 419: {
            return varbitplayer_3326;
        }
        case 384: {
            return varbitplayer_3362;
        }
        case 396: {
            return varbitplayer_3374;
        }
        case 408: {
            return varbitplayer_3387;
        }
        case 939: {
            return varbitplayer_3466;
        }
        case 426: {
            return varbitplayer_3327;
        }
        case 395: {
            return varbitplayer_3373;
        }
        case 397: {
            return varbitplayer_3375;
        }
        case 403: {
            return varbitplayer_3382;
        }
        case 405: {
            return varbitplayer_3384;
        }
        case 401: {
            return varbitplayer_3380;
        }
        case 402: {
            return varbitplayer_3381;
        }
        case 404: {
            return varbitplayer_3383;
        }
        case 394: {
            return varbitplayer_3372;
        }
        case 388: {
            return varbitplayer_3366;
        }
        case 389: {
            return varbitplayer_3367;
        }
        case 407: {
            return varbitplayer_3386;
        }
        case 392: {
            return varbitplayer_3370;
        }
        case 393: {
            return varbitplayer_3371;
        }
        case 406: {
            return varbitplayer_3385;
        }
        case 709: {
            return varbitplayer_3550;
        }
        case 583: {
            if ((varbitplayer_3407 == 1)) {
                return 1;
            };
            return 0;
        }
        case 576: {
            if ((varbitplayer_3426 == 1)) {
                return 1;
            };
            return 0;
        }
        case 571: {
            if ((varbitplayer_3416 == 1)) {
                return 1;
            };
            return 0;
        }
        case 570: {
            if ((varbitplayer_3465 == 1)) {
                return 1;
            };
            return 0;
        }
        case 1014: {
            if ((varbitplayer_3558 == 1)) {
                return 1;
            };
            return 0;
        }
        case 4079: {
            return varbitplayer_44762;
        }
        case 2600: {
            if ((script7269() > 0)) {
                return 1;
            };
            return varbitplayer_22443;
        }
        case 4072: {
            return varbitplayer_15198;
        }
        case 4073: {
            return varbitplayer_15199;
        }
        case 4074: {
            return varbitplayer_15200;
        }
        case 4075: {
            return varbitplayer_15201;
        }
        case 4076: {
            return varbitplayer_15202;
        }
        case 4077: {
            return varbitplayer_15203;
        }
        case 4078: {
            return varbitplayer_15204;
        }
        case 2601: {
            return varbitplayer_22436;
        }
        case 4083:
        case 4084:
        case 4085:
        case 4086:
        case 4087: {
            if ((((varbitplayer_44761 == 1) || (varbitplayer_1398 > 0)) || (script10881(44220 as struct) == 1))) {
                return 1;
            };
            switch (struct_getparam(int0, 6413)) {
                case 4083: {
                    return varbitplayer_44756;
                }
                case 4084: {
                    return varbitplayer_44757;
                }
                case 4085: {
                    return varbitplayer_44758;
                }
                case 4086: {
                    return varbitplayer_44759;
                }
                case 4087: {
                    return varbitplayer_44760;
                }
            };
            break;
        }
        case 4082: {
            if ((((varbitplayer_44761 == 1) || (varbitplayer_1398 > 0)) || (script10881(44220 as struct) == 1))) {
                int7 = SETBIT(int7, 0);
                int7 = SETBIT(int7, 1);
                int7 = SETBIT(int7, 2);
                int7 = SETBIT(int7, 3);
                int7 = SETBIT(int7, 4);
                int7 = SETBIT(int7, 5);
            } else {
                if ((varbitplayer_44756 == 1)) {
                    int7 = SETBIT(int7, 0);
                };
                if ((varbitplayer_44757 == 1)) {
                    int7 = SETBIT(int7, 1);
                };
                if ((varbitplayer_44758 == 1)) {
                    int7 = SETBIT(int7, 2);
                };
                if ((varbitplayer_44759 == 1)) {
                    int7 = SETBIT(int7, 3);
                };
                if ((varbitplayer_44760 == 1)) {
                    int7 = SETBIT(int7, 4);
                };
            };
            return int7;
        }
        case 4088: {
            if ((varbitplayer_10833 >= 2)) {
                return 1;
            };
            return 0;
        }
        case 4093: {
            if ((varbitplayer_10834 >= 2)) {
                return 1;
            };
            return 0;
        }
        case 4094: {
            if ((varbitplayer_10835 >= 2)) {
                return 1;
            };
            return 0;
        }
        case 4095: {
            if ((varbitplayer_10836 >= 2)) {
                return 1;
            };
            return 0;
        }
        case 4096: {
            if ((varbitplayer_10837 >= 2)) {
                return 1;
            };
            return 0;
        }
        case 4097: {
            if ((varbitplayer_10838 >= 2)) {
                return 1;
            };
            return 0;
        }
        case 3822: {
            return varbitplayer_44451;
        }
        case 3823: {
            return varbitplayer_44452;
        }
        case 3824: {
            return (varbitplayer_44245 + varbitplayer_44244);
        }
        case 3825: {
            return varbitplayer_44454;
        }
        case 3826: {
            return varbitplayer_44455;
        }
        case 3827: {
            return (varbitplayer_44456 + varbitplayer_44457);
        }
        case 3828: {
            return (((varbitplayer_44458 + varbitplayer_44459) + varbitplayer_44460) + varbitplayer_44461);
        }
        case 3830: {
            return varbitplayer_44463;
        }
        case 3832: {
            return varbitplayer_44464;
        }
        case 3831: {
            return varbitplayer_44466;
        }
        case 3834: {
            return varbitplayer_44468;
        }
        case 3835: {
            if ((varbitplayer_44585 == 1)) {
                int7 = SETBIT(int7, 0);
            };
            if ((varbitplayer_44586 == 1)) {
                int7 = SETBIT(int7, 1);
            };
            if ((varbitplayer_44587 == 1)) {
                int7 = SETBIT(int7, 2);
            };
            if ((varbitplayer_44588 == 1)) {
                int7 = SETBIT(int7, 3);
            };
            if ((varbitplayer_44589 == 1)) {
                int7 = SETBIT(int7, 4);
            };
            if ((varbitplayer_44590 == 1)) {
                int7 = SETBIT(int7, 5);
            };
            if ((varbitplayer_44591 == 1)) {
                int7 = SETBIT(int7, 6);
            };
            if ((varbitplayer_44592 == 1)) {
                int7 = SETBIT(int7, 7);
            };
            if ((varbitplayer_44593 == 1)) {
                int7 = SETBIT(int7, 8);
            };
            return int7;
        }
        case 3836: {
            return varbitplayer_21449;
        }
        case 3837: {
            return varbitplayer_21451;
        }
        case 3838: {
            if ((varbitplayer_44387 >= 1)) {
                return 1;
            };
            return 0;
        }
        case 3839: {
            if ((varbitplayer_44388 >= 1)) {
                return 1;
            };
            return 0;
        }
        case 3840: {
            if ((varbitplayer_44389 >= 1)) {
                return 1;
            };
            return 0;
        }
        case 3841: {
            if ((varbitplayer_44390 >= 1)) {
                return 1;
            };
            return 0;
        }
        case 3842: {
            if ((varbitplayer_44391 >= 1)) {
                return 1;
            };
            return 0;
        }
        case 3843: {
            if ((varbitplayer_44392 >= 1)) {
                return 1;
            };
            return 0;
        }
        case 3844: {
            if ((varbitplayer_44393 >= 1)) {
                return 1;
            };
            return 0;
        }
        case 3845: {
            if ((varbitplayer_44394 >= 1)) {
                return 1;
            };
            return 0;
        }
        case 3846: {
            if ((varbitplayer_44395 >= 1)) {
                return 1;
            };
            return 0;
        }
        case 3847: {
            if ((varbitplayer_44396 >= 1)) {
                return 1;
            };
            return 0;
        }
        case 3848: {
            if ((varbitplayer_44397 >= 1)) {
                return 1;
            };
            return 0;
        }
        case 3849: {
            if ((varbitplayer_44398 >= 1)) {
                return 1;
            };
            return 0;
        }
        case 3850: {
            if ((varbitplayer_44399 >= 1)) {
                return 1;
            };
            return 0;
        }
        case 3851: {
            if ((varbitplayer_44400 >= 1)) {
                return 1;
            };
            return 0;
        }
        case 3852: {
            if ((varbitplayer_44401 >= 1)) {
                return 1;
            };
            return 0;
        }
        case 3853: {
            if ((varbitplayer_44402 >= 1)) {
                return 1;
            };
            return 0;
        }
        case 3854: {
            if ((varbitplayer_44403 >= 1)) {
                return 1;
            };
            return 0;
        }
        case 3855: {
            if ((varbitplayer_44404 >= 1)) {
                return 1;
            };
            return 0;
        }
        case 3856: {
            if ((varbitplayer_44405 >= 1)) {
                return 1;
            };
            return 0;
        }
        case 3857: {
            if ((varbitplayer_44406 >= 1)) {
                return 1;
            };
            return 0;
        }
        case 3858: {
            if ((varbitplayer_44407 >= 1)) {
                return 1;
            };
            return 0;
        }
        case 3859: {
            if ((varbitplayer_44408 >= 1)) {
                return 1;
            };
            return 0;
        }
        case 3860: {
            if ((varbitplayer_44409 >= 1)) {
                return 1;
            };
            return 0;
        }
        case 3861: {
            if ((varbitplayer_44410 >= 1)) {
                return 1;
            };
            return 0;
        }
        case 3862: {
            if ((varbitplayer_44411 >= 1)) {
                return 1;
            };
            return 0;
        }
        case 3863: {
            if ((varbitplayer_44412 >= 1)) {
                return 1;
            };
            return 0;
        }
        case 3864: {
            if ((varbitplayer_44413 >= 1)) {
                return 1;
            };
            return 0;
        }
        case 3865: {
            if ((varbitplayer_44414 >= 1)) {
                return 1;
            };
            return 0;
        }
        case 3866: {
            if ((varbitplayer_44415 >= 1)) {
                return 1;
            };
            return 0;
        }
        case 3867: {
            if ((varbitplayer_44416 >= 1)) {
                return 1;
            };
            return 0;
        }
        case 3868: {
            if ((varbitplayer_44417 >= 1)) {
                return 1;
            };
            return 0;
        }
        case 3869: {
            if ((varbitplayer_44418 >= 1)) {
                return 1;
            };
            return 0;
        }
        case 3870: {
            if ((varbitplayer_44419 >= 1)) {
                return 1;
            };
            return 0;
        }
        case 3871: {
            if ((varbitplayer_44420 >= 1)) {
                return 1;
            };
            return 0;
        }
        case 3872: {
            if ((varbitplayer_44421 >= 1)) {
                return 1;
            };
            return 0;
        }
        case 3873: {
            if ((varbitplayer_44422 >= 1)) {
                return 1;
            };
            return 0;
        }
        case 3874: {
            if ((varbitplayer_44423 >= 1)) {
                return 1;
            };
            return 0;
        }
        case 3875: {
            if ((varbitplayer_44424 >= 1)) {
                return 1;
            };
            return 0;
        }
        case 3876: {
            if ((varbitplayer_44425 >= 1)) {
                return 1;
            };
            return 0;
        }
        case 3877: {
            if ((varbitplayer_44426 >= 1)) {
                return 1;
            };
            return 0;
        }
        case 3878: {
            if ((varbitplayer_44427 >= 1)) {
                return 1;
            };
            return 0;
        }
        case 3879: {
            if ((varbitplayer_44428 >= 1)) {
                return 1;
            };
            return 0;
        }
        case 3880: {
            if ((varbitplayer_44429 >= 1)) {
                return 1;
            };
            return 0;
        }
        case 3881: {
            if ((varbitplayer_44430 >= 1)) {
                return 1;
            };
            return 0;
        }
        case 3882: {
            if ((varbitplayer_44431 >= 1)) {
                return 1;
            };
            return 0;
        }
        case 3883: {
            if ((varbitplayer_44432 >= 1)) {
                return 1;
            };
            return 0;
        }
        case 3884: {
            if ((varbitplayer_44433 >= 1)) {
                return 1;
            };
            return 0;
        }
        case 3885: {
            if ((varbitplayer_44434 >= 1)) {
                return 1;
            };
            return 0;
        }
        case 3886: {
            if ((varbitplayer_44435 >= 1)) {
                return 1;
            };
            return 0;
        }
        case 3887: {
            if ((varbitplayer_44436 >= 1)) {
                return 1;
            };
            return 0;
        }
        case 3888: {
            if ((varbitplayer_44437 >= 1)) {
                return 1;
            };
            return 0;
        }
        case 3889: {
            if ((varbitplayer_44438 >= 1)) {
                return 1;
            };
            return 0;
        }
        case 3890: {
            if ((varbitplayer_44439 >= 1)) {
                return 1;
            };
            return 0;
        }
        case 3891: {
            if ((varbitplayer_44440 >= 1)) {
                return 1;
            };
            return 0;
        }
        case 3892: {
            if ((varbitplayer_44441 >= 1)) {
                return 1;
            };
            return 0;
        }
        case 3893: {
            if ((varbitplayer_44442 >= 1)) {
                return 1;
            };
            return 0;
        }
        case 3894: {
            if ((varbitplayer_44443 >= 1)) {
                return 1;
            };
            return 0;
        }
        case 3895: {
            if ((varbitplayer_44444 >= 1)) {
                return 1;
            };
            return 0;
        }
        case 3896: {
            if ((varbitplayer_44445 >= 1)) {
                return 1;
            };
            return 0;
        }
        case 3897: {
            if ((varbitplayer_44446 >= 1)) {
                return 1;
            };
            return 0;
        }
        case 4112: {
            if ((varbitplayer_45425 == 1)) {
                int7 = SETBIT(int7, 0);
            };
            if ((varbitplayer_45424 == 1)) {
                int7 = SETBIT(int7, 1);
            };
            if ((varbitplayer_45430 == 1)) {
                int7 = SETBIT(int7, 2);
            };
            if ((varbitplayer_45423 == 1)) {
                int7 = SETBIT(int7, 3);
            };
            if ((varbitplayer_45426 == 1)) {
                int7 = SETBIT(int7, 4);
            };
            if ((varbitplayer_45421 == 1)) {
                int7 = SETBIT(int7, 5);
            };
            if ((varbitplayer_45429 == 1)) {
                int7 = SETBIT(int7, 6);
            };
            if ((varbitplayer_45427 == 1)) {
                int7 = SETBIT(int7, 7);
            };
            if ((varbitplayer_45422 == 1)) {
                int7 = SETBIT(int7, 8);
            };
            if ((varbitplayer_45428 == 1)) {
                int7 = SETBIT(int7, 9);
            };
            if ((varbitplayer_45431 == 1)) {
                int7 = SETBIT(int7, 10);
            };
            return int7;
        }
        case 4113: {
            if ((varbitplayer_45432 == 1)) {
                int7 = SETBIT(int7, 0);
            };
            if ((varbitplayer_45433 == 1)) {
                int7 = SETBIT(int7, 1);
            };
            if ((varbitplayer_45434 == 1)) {
                int7 = SETBIT(int7, 2);
            };
            if ((varbitplayer_45435 == 1)) {
                int7 = SETBIT(int7, 3);
            };
            return int7;
        }
        case 4114: {
            if ((varbitplayer_45436 == 1)) {
                int7 = SETBIT(int7, 0);
            };
            if ((varbitplayer_45437 == 1)) {
                int7 = SETBIT(int7, 1);
            };
            if ((varbitplayer_45438 == 1)) {
                int7 = SETBIT(int7, 2);
            };
            if ((varbitplayer_45439 == 1)) {
                int7 = SETBIT(int7, 3);
            };
            return int7;
        }
        case 4115: {
            if ((varbitplayer_45440 == 1)) {
                int7 = SETBIT(int7, 0);
            };
            if ((varbitplayer_45441 == 1)) {
                int7 = SETBIT(int7, 1);
            };
            if ((varbitplayer_45442 == 1)) {
                int7 = SETBIT(int7, 2);
            };
            if ((varbitplayer_45443 == 1)) {
                int7 = SETBIT(int7, 3);
            };
            return int7;
        }
        case 4116: {
            if ((varbitplayer_45444 == 1)) {
                int7 = SETBIT(int7, 0);
            };
            if ((varbitplayer_45445 == 1)) {
                int7 = SETBIT(int7, 1);
            };
            if ((varbitplayer_45446 == 1)) {
                int7 = SETBIT(int7, 2);
            };
            if ((varbitplayer_45447 == 1)) {
                int7 = SETBIT(int7, 3);
            };
            return int7;
        }
        case 4117: {
            if ((varbitplayer_45448 == 1)) {
                int7 = SETBIT(int7, 0);
            };
            if ((varbitplayer_45449 == 1)) {
                int7 = SETBIT(int7, 1);
            };
            if ((varbitplayer_45450 == 1)) {
                int7 = SETBIT(int7, 2);
            };
            if ((varbitplayer_45451 == 1)) {
                int7 = SETBIT(int7, 3);
            };
            return int7;
        }
        case 4118: {
            if ((varbitplayer_45452 == 1)) {
                int7 = SETBIT(int7, 0);
            };
            if ((varbitplayer_45453 == 1)) {
                int7 = SETBIT(int7, 1);
            };
            if ((varbitplayer_45454 == 1)) {
                int7 = SETBIT(int7, 2);
            };
            if ((varbitplayer_45455 == 1)) {
                int7 = SETBIT(int7, 3);
            };
            return int7;
        }
        case 4119: {
            if ((varbitplayer_45456 == 1)) {
                int7 = SETBIT(int7, 0);
            };
            if ((varbitplayer_45457 == 1)) {
                int7 = SETBIT(int7, 1);
            };
            if ((varbitplayer_45458 == 1)) {
                int7 = SETBIT(int7, 2);
            };
            if ((varbitplayer_45459 == 1)) {
                int7 = SETBIT(int7, 3);
            };
            return int7;
        }
        case 4120: {
            if ((varbitplayer_45460 == 1)) {
                int7 = SETBIT(int7, 0);
            };
            if ((varbitplayer_45461 == 1)) {
                int7 = SETBIT(int7, 1);
            };
            if ((varbitplayer_45462 == 1)) {
                int7 = SETBIT(int7, 2);
            };
            if ((varbitplayer_45463 == 1)) {
                int7 = SETBIT(int7, 3);
            };
            return int7;
        }
        case 4121: {
            if ((varbitplayer_45464 == 1)) {
                int7 = SETBIT(int7, 0);
            };
            if ((varbitplayer_45465 == 1)) {
                int7 = SETBIT(int7, 1);
            };
            if ((varbitplayer_45466 == 1)) {
                int7 = SETBIT(int7, 2);
            };
            if ((varbitplayer_45467 == 1)) {
                int7 = SETBIT(int7, 3);
            };
            return int7;
        }
        case 4122: {
            if ((varbitplayer_45468 == 1)) {
                int7 = SETBIT(int7, 0);
            };
            if ((varbitplayer_45469 == 1)) {
                int7 = SETBIT(int7, 1);
            };
            if ((varbitplayer_45470 == 1)) {
                int7 = SETBIT(int7, 2);
            };
            if ((varbitplayer_45471 == 1)) {
                int7 = SETBIT(int7, 3);
            };
            return int7;
        }
        case 4123: {
            if ((varbitplayer_45472 == 1)) {
                int7 = SETBIT(int7, 0);
            };
            if ((varbitplayer_45473 == 1)) {
                int7 = SETBIT(int7, 1);
            };
            if ((varbitplayer_45474 == 1)) {
                int7 = SETBIT(int7, 2);
            };
            if ((varbitplayer_45475 == 1)) {
                int7 = SETBIT(int7, 3);
            };
            return int7;
        }
        case 4124: {
            if ((varbitplayer_45476 == 1)) {
                int7 = SETBIT(int7, 0);
            };
            if ((varbitplayer_45477 == 1)) {
                int7 = SETBIT(int7, 1);
            };
            if ((varbitplayer_45478 == 1)) {
                int7 = SETBIT(int7, 2);
            };
            if ((varbitplayer_45479 == 1)) {
                int7 = SETBIT(int7, 3);
            };
            if ((varbitplayer_45480 == 1)) {
                int7 = SETBIT(int7, 4);
            };
            return int7;
        }
        case 4125: {
            if ((varbitplayer_45481 == 1)) {
                int7 = SETBIT(int7, 0);
            };
            if ((varbitplayer_45482 == 1)) {
                int7 = SETBIT(int7, 1);
            };
            if ((varbitplayer_45483 == 1)) {
                int7 = SETBIT(int7, 2);
            };
            if ((varbitplayer_45484 == 1)) {
                int7 = SETBIT(int7, 3);
            };
            if ((varbitplayer_45485 == 1)) {
                int7 = SETBIT(int7, 4);
            };
            return int7;
        }
        case 4136: {
            return COMLEVEL_ACTIVE();
        }
        case 4365: {
            return varbitplayer_45680;
        }
        case 4366: {
            return varbitplayer_45681;
        }
        case 4367: {
            return varbitplayer_45682;
        }
        case 4368: {
            return varbitplayer_45683;
        }
        case 4369: {
            return varbitplayer_47577;
        }
        case 4420: {
            return varbitplayer_49128;
        }
        case 4139: {
            if ((varbitplayer_45684 > 0)) {
                int7 = SETBIT(int7, 0);
            };
            if ((varbitplayer_45684 > 1)) {
                int7 = SETBIT(int7, 1);
            };
            if ((varbitplayer_45684 > 2)) {
                int7 = SETBIT(int7, 2);
            };
            if ((varbitplayer_45684 > 3)) {
                int7 = SETBIT(int7, 3);
            };
            if ((varbitplayer_45684 > 4)) {
                int7 = SETBIT(int7, 4);
            };
            if ((varbitplayer_45684 > 5)) {
                int7 = SETBIT(int7, 5);
            };
            return int7;
        }
        case 4140: {
            if ((varbitplayer_20309 == 1)) {
                int7 = SETBIT(int7, 0);
            };
            if ((varbitplayer_20314 == 1)) {
                int7 = SETBIT(int7, 1);
            };
            if ((varbitplayer_20315 == 1)) {
                int7 = SETBIT(int7, 2);
            };
            if ((varbitplayer_29566 == 1)) {
                int7 = SETBIT(int7, 3);
            };
            if ((varbitplayer_29567 == 1)) {
                int7 = SETBIT(int7, 4);
            };
            return int7;
        }
        case 4157: {
            if ((varbitplayer_46468 >= 1)) {
                return 1;
            };
            return 0;
        }
        case 4158: {
            if ((varbitplayer_46468 >= 2)) {
                return 1;
            };
            return 0;
        }
        case 4159: {
            if ((varbitplayer_46468 >= 3)) {
                return 1;
            };
            return 0;
        }
        case 4160: {
            if ((varbitplayer_46468 >= 4)) {
                return 1;
            };
            return 0;
        }
        case 4161: {
            if ((varbitplayer_46468 >= 5)) {
                return 1;
            };
            return 0;
        }
        case 4162:
        case 4163:
        case 4164:
        case 4165:
        case 4166:
        case 4167:
        case 4296:
        case 4297:
        case 4298:
        case 4299: {
            return varbitplayer_46471;
        }
        case 4168:
        case 4169:
        case 4170:
        case 4171:
        case 4172:
        case 4173:
        case 4300:
        case 4301:
        case 4302:
        case 4303: {
            return varbitplayer_46472;
        }
        case 4174:
        case 4175:
        case 4176:
        case 4177:
        case 4178:
        case 4304:
        case 4305:
        case 4306: {
            return varbitplayer_46473;
        }
        case 4179:
        case 4180:
        case 4181:
        case 4182:
        case 4183: {
            return varbitplayer_46474;
        }
        case 4235:
        case 4236:
        case 4237:
        case 4238:
        case 4239:
        case 4240:
        case 4293: {
            return (varplayer_9278 / 6000);
        }
        case 4241:
        case 4242:
        case 4243:
        case 4244:
        case 4245:
        case 4246:
        case 4294:
        case 4295: {
            return script14493();
        }
        case 4327:
        case 4328:
        case 4329:
        case 4330:
        case 4331:
        case 4332:
        case 4333:
        case 4334:
        case 4356: {
            return script14494();
        }
        case 4247: {
            if ((((((varbitplayer_47016 + varbitplayer_47019) + varbitplayer_47018) + varbitplayer_47015) + varbitplayer_47017) >= 5)) {
                return 1;
            };
            return 0;
        }
        case 4289: {
            if ((varbitplayer_47255 == 1)) {
                int7 = SETBIT(int7, 0);
            };
            if ((varbitplayer_47256 == 1)) {
                int7 = SETBIT(int7, 1);
            };
            if ((varbitplayer_47257 == 1)) {
                int7 = SETBIT(int7, 2);
            };
            if ((varbitplayer_47258 == 1)) {
                int7 = SETBIT(int7, 3);
            };
            return int7;
        }
        case 4292: {
            if ((script14703(3421 as dbrow) == 1)) {
                int7 = SETBIT(int7, 0);
            };
            if ((script14703(3422 as dbrow) == 1)) {
                int7 = SETBIT(int7, 1);
            };
            if ((script14703(3423 as dbrow) == 1)) {
                int7 = SETBIT(int7, 2);
            };
            return int7;
        }
        case 4358:
        case 4312:
        case 4313:
        case 4314:
        case 4315:
        case 4316:
        case 4393: {
            int7 = script14495(int0);
            return int7;
        }
        case 4317: {
            return varbitplayer_46660;
        }
        case 4318: {
            return (((((((varbitplayer_47191 + varbitplayer_47192) + varbitplayer_47193) + varbitplayer_47194) + varbitplayer_47195) + varbitplayer_47196) + varbitplayer_47197) + varbitplayer_47198);
        }
        case 4319: {
            return varbitplayer_46661;
        }
        case 4321: {
            return varbitplayer_46662;
        }
        case 4320: {
            return varbitplayer_46663;
        }
        case 4324: {
            return varbitplayer_46664;
        }
        case 4323: {
            return varbitplayer_46665;
        }
        case 4322: {
            return varbitplayer_46666;
        }
        case 4325: {
            return varbitplayer_46667;
        }
        case 4326: {
            return varbitplayer_46668;
        }
        case 4359: {
            if ((varbitplayer_47062 == 3)) {
                int7 = SETBIT(int7, 0);
            };
            if ((varbitplayer_47059 == 3)) {
                int7 = SETBIT(int7, 1);
            };
            if ((varbitplayer_47060 == 3)) {
                int7 = SETBIT(int7, 2);
            };
            if ((varbitplayer_47061 == 3)) {
                int7 = SETBIT(int7, 3);
            };
            return int7;
        }
        case 4339: {
            return varbitplayer_46673;
        }
        case 4340: {
            return script14600(16);
        }
        case 4341: {
            return varbitplayer_46674;
        }
        case 4342: {
            return varbitplayer_46675;
        }
        case 4343: {
            return varbitplayer_46676;
        }
        case 4361: {
            return varbitplayer_46688;
        }
        case 4364: {
            return varbitplayer_46691;
        }
        case 4344: {
            return varbitplayer_46677;
        }
        case 4345: {
            return varbitplayer_46678;
        }
        case 4346: {
            return varbitplayer_46679;
        }
        case 4347: {
            return varbitplayer_46680;
        }
        case 4348: {
            return varbitplayer_46681;
        }
        case 4360: {
            return varbitplayer_46689;
        }
        case 4363: {
            return varbitplayer_46690;
        }
        case 4349: {
            return (((((varbitplayer_47143 + varbitplayer_47144) + varbitplayer_47147) + varbitplayer_47148) + varbitplayer_47149) + varbitplayer_47150);
        }
        case 4350: {
            return varbitplayer_46682;
        }
        case 4351: {
            return varbitplayer_46683;
        }
        case 4352: {
            return varbitplayer_46684;
        }
        case 4353: {
            return varbitplayer_46685;
        }
        case 4354: {
            return varbitplayer_46686;
        }
        case 4362: {
            return varbitplayer_47129;
        }
        case 4335: {
            return varbitplayer_46669;
        }
        case 4336: {
            return varbitplayer_46670;
        }
        case 4337: {
            return varbitplayer_46671;
        }
        case 4338: {
            return varbitplayer_46672;
        }
        case 4355: {
            if ((varbitplayer_47021 == 3)) {
                int7 = SETBIT(int7, 0);
            };
            if ((varbitplayer_47022 == 3)) {
                int7 = SETBIT(int7, 1);
            };
            if ((varbitplayer_47023 == 4)) {
                int7 = SETBIT(int7, 2);
            };
            if ((script14703(3420 as dbrow) == 1)) {
                int7 = SETBIT(int7, 3);
            };
            if ((((((varbitplayer_47010 + varbitplayer_47011) + varbitplayer_47012) + varbitplayer_47014) + varbitplayer_47013) >= 5)) {
                int7 = SETBIT(int7, 4);
            };
            if ((((((varbitplayer_47015 + varbitplayer_47016) + varbitplayer_47017) + varbitplayer_47019) + varbitplayer_47018) >= 5)) {
                int7 = SETBIT(int7, 5);
            };
            return int7;
        }
        case 4410: {
            if ((varbitplayer_48170 == 1)) {
                int7 = SETBIT(int7, 0);
            };
            if ((varbitplayer_48167 == 1)) {
                int7 = SETBIT(int7, 1);
            };
            if ((varbitplayer_48171 == 1)) {
                int7 = SETBIT(int7, 2);
            };
            if ((varbitplayer_48169 == 1)) {
                int7 = SETBIT(int7, 3);
            };
            if ((varbitplayer_48168 == 1)) {
                int7 = SETBIT(int7, 4);
            };
            return int7;
        }
        case 4377: {
            return varbitplayer_47811;
        }
        case 4378: {
            if ((varbitplayer_47812 == 15)) {
                return 1;
            };
            return 0;
        }
        case 4379: {
            if ((varbitplayer_47813 >= 1000)) {
                return 1;
            };
            return 0;
        }
        case 4380: {
            return varbitplayer_47814;
        }
        case 4381: {
            return varbitplayer_47944;
        }
        case 4411: {
            return varbitplayer_48239;
        }
        case 4434: {
            return varbitplayer_49751;
        }
        case 4440: {
            return varbitplayer_49752;
        }
        case 4441: {
            return varbitplayer_49753;
        }
        case 4442: {
            return varbitplayer_49754;
        }
        case 4443: {
            return varbitplayer_49755;
        }
        case 4444: {
            return varbitplayer_49756;
        }
        case 4445: {
            return varbitplayer_49757;
        }
        default: {
            string0 = script13284(int0);
            if ((struct_getparam(int0, 1346) > 0)) {
                [int1, int2] = script13304(int0);
                [int3, int4] = script4610(int0);
                if (((((int1 > 0) || (int2 > 0)) || (int3 > 0)) || (int4 > 0))) {
                    return 1;
                };
                return 0;
            };
            if ((struct_getparam(int0, 6576) != -1 as dbrow)) {
                switch (DB_GETROWTABLE(struct_getparam(int0, 6576))) {
                    case 92: {
                        if ((script14588(struct_getparam(int0, 6576)) == 1)) {
                            return 1;
                        };
                        return 0;
                    }
                };
            } else {
                script12478(`<col=FF0000>cheevo_get_progress - Achievement #${inttostring(struct_getparam(int0, 6413), 10)} '${string0}' does not have a case.`);
                return -1;
            };
            break;
        }
    };
    script12478(`<col=FF0000>cheevo_get_progress - Achievement #${inttostring(struct_getparam(int0, 6413), 10)} '${string0}' has case but no return.`);
    return -1;
}