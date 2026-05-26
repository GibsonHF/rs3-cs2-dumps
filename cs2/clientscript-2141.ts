//
function script2141(int0: number, int1: number, int2: number, int3: number, int4: number): void {
    IF_SETONRESIZE(callback(), int2);
    if (((IF_GETWIDTH(int2) != int3) || (IF_GETHEIGHT(int2) != int4))) {
        return;
    };
    switch (int0) {
        case 2: {
            script8680(96534528);
            break;
        }
        case 3: {
            script8471(95944704, 94);
            break;
        }
        case 1024: {
            script10773();
            break;
        }
        case 4: {
            if ((int1 == 0)) {
                script7819(95551528);
            } else {
                script7819(95485968);
            };
            break;
        }
        case 0: {
            script8489(96075776, 96075790, 96075777, 96075784, 96075778, 96075779, 96075780, 96075781, 96075782, 96075783, 96075787);
            script1522(96075776, 96075785, 96075787, 96075788, 96075789);
            break;
        }
        case 1004: {
            script9903();
            break;
        }
        case 18:
        case 19:
        case 20:
        case 21:
        case 22:
        case 23:
        case 1019:
        case 24:
        case 25:
        case 46: {
            script1650(int0);
            break;
        }
        case 9: {
            if ((int1 == 0)) {
                switch (varbitplayer_54611) {
                    case 0: {
                        script4716(38666251, 38666250, varclient_2822, varclient_2823);
                        break;
                    }
                    case 1: {
                        script6255(38666241, 38666250, varclient_6540);
                        break;
                    }
                    case 2: {
                        script5863(38666252);
                        break;
                    }
                };
            } else {
                switch (varbitplayer_54611) {
                    case 0: {
                        script4716(94240780, 94240779, varclient_2822, varclient_2823);
                        break;
                    }
                    case 1: {
                        script6255(94240778, 94240779, varclient_6540);
                        break;
                    }
                    case 2: {
                        script5863(94240781);
                        break;
                    }
                };
            };
            break;
        }
        case 6: {
            if ((IF_HASSUBOVERLAY(int2, 1503 as overlayinterface) == 1)) {
                script11348();
            } else if ((int1 == 0)) {
                varbitclient_52489 = int0;
                script8426(95682565, 95682566, 95682567, 95682561, 95682562, 95682564, 95682560, 1, varbitplayer_18787);
            } else {
                script8426(95027200, 95027201, 95027207, 95027203, 95027204, 95027206, 95027202, 1, varbitplayer_18786);
            };
            break;
        }
        case 7: {
            if ((int1 == 0)) {
                varbitclient_52489 = int0;
                script8426(95158279, 95158280, 95158283, 95158273, 95158274, 95158282, 95158272, 2, varbitplayer_18789);
            } else {
                script8426(95420423, 95420424, 95420427, 95420417, 95420418, 95420426, 95420416, 2, varbitplayer_18788);
            };
            break;
        }
        case 5: {
            if ((int1 == 0)) {
                varbitclient_52489 = int0;
                script8426(95748103, 95748104, 95748107, 95748097, 95748098, 95748106, 95748096, 3, varbitplayer_18791);
            } else {
                script8426(95617031, 95617032, 95617035, 95617025, 95617026, 95617034, 95617024, 3, varbitplayer_18790);
            };
            break;
        }
        case 33: {
            if ((int1 == 0)) {
                varbitclient_52489 = int0;
                script8426(123469831, 123469832, 123469835, 123469825, 123469826, 123469834, 123469824, 8, 0);
            } else {
                script8426(95617031, 95617032, 95617035, 95617025, 95617026, 95617034, 95617024, 3, varbitplayer_18790);
            };
            break;
        }
        case 34: {
            if ((int1 == 0)) {
                varbitclient_52490 = int0;
                script8426(123535367, 123535368, 123535371, 123535361, 123535362, 123535370, 123535360, 9, 0);
            } else {
                script8426(95617031, 95617032, 95617035, 95617025, 95617026, 95617034, 95617024, 3, varbitplayer_18790);
            };
            break;
        }
        case 35: {
            if ((int1 == 0)) {
                varbitclient_52490 = int0;
                script8426(123666439, 123666440, 123666443, 123666433, 123666434, 123666442, 123666432, 10, 0);
            } else {
                script8426(95617031, 95617032, 95617035, 95617025, 95617026, 95617034, 95617024, 3, varbitplayer_18790);
            };
            break;
        }
        case 36: {
            if ((int1 == 0)) {
                varbitclient_52490 = int0;
                script8426(123600903, 123600904, 123600907, 123600897, 123600898, 123600906, 123600896, 11, 0);
            } else {
                script8426(95617031, 95617032, 95617035, 95617025, 95617026, 95617034, 95617024, 3, varbitplayer_18790);
            };
            break;
        }
        case 42: {
            if ((int1 == 0)) {
                script8426(79888391, 79888392, 79888395, 79888385, 79888386, 79888394, 79888384, 4, varbitplayer_53124);
            } else {
                script8426(79101959, 79101960, 79101963, 79101953, 79101954, 79101962, 79101952, 4, varbitplayer_53123);
            };
            break;
        }
        case 43: {
            if ((int1 == 0)) {
                varbitclient_52489 = int0;
                script8426(79953927, 79953928, 79953931, 79953921, 79953922, 79953930, 79953920, 14, 0);
            } else {
                script8426(79101959, 79101960, 79101963, 79101953, 79101954, 79101962, 79101952, 4, varbitplayer_53123);
            };
            break;
        }
        case 44: {
            if ((int1 == 0)) {
                varbitclient_52490 = int0;
                script8426(80019463, 80019464, 80019467, 80019457, 80019458, 80019466, 80019456, 15, 0);
            } else {
                script8426(79101959, 79101960, 79101963, 79101953, 79101954, 79101962, 79101952, 4, varbitplayer_53123);
            };
            break;
        }
        case 8: {
            if ((int1 == 0)) {
                varbitclient_52489 = int0;
                script8426(123404295, 123404296, 123404299, 123404289, 123404290, 123404298, 123404288, 5, varbitplayer_36454);
            } else {
                script8426(123207687, 123207688, 123207691, 123207681, 123207682, 123207690, 123207680, 5, varbitplayer_36453);
            };
            break;
        }
        case 39: {
            if ((int1 == 0)) {
                script8426(94961671, 94961672, 94961675, 94961665, 94961666, 94961674, 94961664, 12, 0);
            } else {
                script8426(123207687, 123207688, 123207691, 123207681, 123207682, 123207690, 123207680, 5, varbitplayer_36453);
            };
            break;
        }
        case 40: {
            if ((int1 == 0)) {
                script8426(123338759, 123338760, 123338763, 123338753, 123338754, 123338762, 123338752, 13, 0);
            } else {
                script8426(123207687, 123207688, 123207691, 123207681, 123207682, 123207690, 123207680, 5, varbitplayer_36453);
            };
            break;
        }
        case 14: {
            if ((int1 == 0)) {
                script2963(36044802, 36044849, varclient_1036);
            } else {
                script2963(94437380, 94437419, varclient_1036);
            };
            break;
        }
        case 27: {
            if ((int1 == 0)) {
                script10319(99549195);
            } else {
                script10319(100139014);
            };
            break;
        }
        case 16: {
            script392(40795);
            break;
        }
        case 15: {
            script518(1427);
            break;
        }
        case 1003:
        case 1032:
        case 1033:
        case 1034:
        case 1035: {
            script8110(int0);
            break;
        }
        case 1002: {
            if ((script15532(0) == 1)) {
                varplayer_9773 = -1 as dbrow;
            };
            script8144();
            break;
        }
        case 1000: {
            script8000();
            script7136();
            break;
        }
        case 11: {
            if ((int1 == 0)) {
                script16543(1417);
            };
            break;
        }
        case 10: {
            if ((int1 == 0)) {
                script2872(92798991, 92798979, 92798980, 92798995, 92798999, 92798987, 92798989, 92798990, 92798992, 92798994, 92798982, 92798983, 92798996, 92798997, 92798998, 92798988);
            } else {
                script2872(12255248, 12255236, 12255237, 12255251, 12255256, 12255244, 12255246, 12255247, 12255249, 12255250, 12255239, 12255240, 12255252, 12255253, 12255254, 12255245);
            };
            break;
        }
        case 17: {
            if ((IF_HASSUBOVERLAY(int2, 1429 as overlayinterface) == 1)) {
                script8092();
            } else if ((IF_HASSUBOVERLAY(int2, 1117 as overlayinterface) == 1)) {
                script3511(int2);
            } else if ((IF_HASSUBOVERLAY(int2, 936 as overlayinterface) == 1)) {
                script1387();
            } else if ((IF_HASSUBOVERLAY(int2, 953 as overlayinterface) == 1)) {
                script1649();
            } else if ((IF_HASSUBOVERLAY(int2, 946 as overlayinterface) == 1)) {
                script1651();
            } else if ((IF_HASSUBOVERLAY(int2, 1759 as overlayinterface) == 1)) {
                script12489();
            } else if ((IF_HASSUBOVERLAY(int2, 783 as overlayinterface) == 1)) {
                script953();
            } else if ((IF_HASSUBOVERLAY(int2, 223 as overlayinterface) == 1)) {
                script5920();
            } else if ((IF_HASSUBOVERLAY(int2, 1247 as overlayinterface) == 1)) {
                script2480();
            } else if ((IF_HASSUBOVERLAY(int2, 522 as overlayinterface) == 1)) {
                script6542(34209806);
            } else if ((IF_HASSUBOVERLAY(int2, 78 as overlayinterface) == 1)) {
                script6098();
            } else if ((IF_HASSUBOVERLAY(int2, 65 as overlayinterface) == 1)) {
                script6156();
            } else if ((IF_HASSUBOVERLAY(int2, 47 as overlayinterface) == 1)) {
                script6250();
            } else if ((IF_HASSUBOVERLAY(int2, 1223 as overlayinterface) == 1)) {
                script17767();
            };
            break;
        }
        case 1017: {
            script9316();
            break;
        }
        case 26: {
            script10126();
            break;
        }
        case 1028: {
            script11409(106299398);
            break;
        }
        case 12: {
            script11688();
            break;
        }
        case 28: {
            if ((int1 == 0)) {
                script11497(1);
            } else {
                script11497(2);
            };
            break;
        }
        case 29: {
            if ((script12344(int0, int1) == 1)) {
                script9886(int1);
            };
            break;
        }
        case 30: {
            if ((script12344(int0, int1) == 1)) {
                script12318(script3387(int1));
            };
            break;
        }
        case 31: {
            script12684(int2);
            break;
        }
        case 41: {
            if ((int1 == 0)) {
                script13587();
            };
            break;
        }
        case 1031: {
            if ((varbitplayer_27169 == 0)) {
                script13689();
            };
            break;
        }
        case 1009: {
            script10822(18612242);
            break;
        }
        case 1038: {
            script10822(19070977);
            break;
        }
        case 32: {
            if ((varplayer_12314 > 0)) {
                script20304();
            } else {
                script9058(int1);
            };
            break;
        }
        case 45: {
            script19402();
            break;
        }
    };
    return;
}