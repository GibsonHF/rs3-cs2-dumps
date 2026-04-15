//
function script2141(int0: int, int1: unknown_int, int2: component, int3: unknown_int, int4: int): void {
    IF_SETONRESIZE(callback(), int2);
    if (((IF_GETWIDTH(int2) != int3) || (IF_GETHEIGHT(int2) != int4))) {
        return;
    };
    switch (int0) {
        case 2: {
            script8680(comp(1473, 0));
            break;
        }
        case 3: {
            script8471(comp(1464, 0), 94 as inv);
            break;
        }
        case 1024: {
            script10773();
            break;
        }
        case 4: {
            if ((int1 == 0)) {
                script7819(comp(1458, 40));
            } else {
                script7819(comp(1457, 16));
            };
            break;
        }
        case 0: {
            script8489(96075776, 96075790, comp(1466, 1), comp(1466, 8), comp(1466, 2), 96075779, comp(1466, 4), comp(1466, 5), comp(1466, 6), comp(1466, 7), comp(1466, 11));
            script1522(96075776, comp(1466, 9), comp(1466, 11), comp(1466, 12), comp(1466, 13));
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
                        script4716(comp(590, 11), comp(590, 10), varclient_2822, varclient_2823);
                        break;
                    }
                    case 1: {
                        script6255(comp(590, 1), comp(590, 10), varclient_6540);
                        break;
                    }
                    case 2: {
                        script5863(comp(590, 12));
                        break;
                    }
                };
            } else {
                switch (varbitplayer_54611) {
                    case 0: {
                        script4716(comp(1438, 12), comp(1438, 11), varclient_2822, varclient_2823);
                        break;
                    }
                    case 1: {
                        script6255(comp(1438, 10), comp(1438, 11), varclient_6540);
                        break;
                    }
                    case 2: {
                        script5863(comp(1438, 13));
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
                script8426(comp(1460, 5), comp(1460, 6), comp(1460, 7), comp(1460, 1), comp(1460, 2), comp(1460, 4), comp(1460, 0), 1, varbitplayer_18787);
            } else {
                script8426(comp(1450, 0), comp(1450, 1), comp(1450, 7), comp(1450, 3), comp(1450, 4), comp(1450, 6), comp(1450, 2), 1, varbitplayer_18786);
            };
            break;
        }
        case 7: {
            if ((int1 == 0)) {
                varbitclient_52489 = int0;
                script8426(comp(1452, 7), comp(1452, 8), comp(1452, 11), comp(1452, 1), comp(1452, 2), comp(1452, 10), comp(1452, 0), 2, varbitplayer_18789);
            } else {
                script8426(comp(1456, 7), comp(1456, 8), comp(1456, 11), comp(1456, 1), comp(1456, 2), comp(1456, 10), comp(1456, 0), 2, varbitplayer_18788);
            };
            break;
        }
        case 5: {
            if ((int1 == 0)) {
                varbitclient_52489 = int0;
                script8426(comp(1461, 7), comp(1461, 8), comp(1461, 11), comp(1461, 1), comp(1461, 2), comp(1461, 10), comp(1461, 0), 3, varbitplayer_18791);
            } else {
                script8426(comp(1459, 7), comp(1459, 8), comp(1459, 11), comp(1459, 1), comp(1459, 2), comp(1459, 10), comp(1459, 0), 3, varbitplayer_18790);
            };
            break;
        }
        case 33: {
            if ((int1 == 0)) {
                varbitclient_52489 = int0;
                script8426(comp(1884, 7), comp(1884, 8), comp(1884, 11), comp(1884, 1), comp(1884, 2), comp(1884, 10), comp(1884, 0), 8, 0);
            } else {
                script8426(comp(1459, 7), comp(1459, 8), comp(1459, 11), comp(1459, 1), comp(1459, 2), comp(1459, 10), comp(1459, 0), 3, varbitplayer_18790);
            };
            break;
        }
        case 34: {
            if ((int1 == 0)) {
                varbitclient_52490 = int0;
                script8426(comp(1885, 7), comp(1885, 8), comp(1885, 11), comp(1885, 1), comp(1885, 2), comp(1885, 10), comp(1885, 0), 9, 0);
            } else {
                script8426(comp(1459, 7), comp(1459, 8), comp(1459, 11), comp(1459, 1), comp(1459, 2), comp(1459, 10), comp(1459, 0), 3, varbitplayer_18790);
            };
            break;
        }
        case 35: {
            if ((int1 == 0)) {
                varbitclient_52490 = int0;
                script8426(comp(1887, 7), comp(1887, 8), comp(1887, 11), comp(1887, 1), comp(1887, 2), comp(1887, 10), comp(1887, 0), 10, 0);
            } else {
                script8426(comp(1459, 7), comp(1459, 8), comp(1459, 11), comp(1459, 1), comp(1459, 2), comp(1459, 10), comp(1459, 0), 3, varbitplayer_18790);
            };
            break;
        }
        case 36: {
            if ((int1 == 0)) {
                varbitclient_52490 = int0;
                script8426(comp(1886, 7), comp(1886, 8), comp(1886, 11), comp(1886, 1), comp(1886, 2), comp(1886, 10), comp(1886, 0), 11, 0);
            } else {
                script8426(comp(1459, 7), comp(1459, 8), comp(1459, 11), comp(1459, 1), comp(1459, 2), comp(1459, 10), comp(1459, 0), 3, varbitplayer_18790);
            };
            break;
        }
        case 42: {
            if ((int1 == 0)) {
                script8426(comp(1219, 7), comp(1219, 8), comp(1219, 11), comp(1219, 1), comp(1219, 2), comp(1219, 10), comp(1219, 0), 4, varbitplayer_53124);
            } else {
                script8426(comp(1207, 7), comp(1207, 8), comp(1207, 11), comp(1207, 1), comp(1207, 2), comp(1207, 10), comp(1207, 0), 4, varbitplayer_53123);
            };
            break;
        }
        case 43: {
            if ((int1 == 0)) {
                varbitclient_52489 = int0;
                script8426(comp(1220, 7), comp(1220, 8), comp(1220, 11), comp(1220, 1), comp(1220, 2), comp(1220, 10), comp(1220, 0), 14, 0);
            } else {
                script8426(comp(1207, 7), comp(1207, 8), comp(1207, 11), comp(1207, 1), comp(1207, 2), comp(1207, 10), comp(1207, 0), 4, varbitplayer_53123);
            };
            break;
        }
        case 44: {
            if ((int1 == 0)) {
                varbitclient_52490 = int0;
                script8426(comp(1221, 7), comp(1221, 8), comp(1221, 11), comp(1221, 1), comp(1221, 2), comp(1221, 10), comp(1221, 0), 15, 0);
            } else {
                script8426(comp(1207, 7), comp(1207, 8), comp(1207, 11), comp(1207, 1), comp(1207, 2), comp(1207, 10), comp(1207, 0), 4, varbitplayer_53123);
            };
            break;
        }
        case 8: {
            if ((int1 == 0)) {
                varbitclient_52489 = int0;
                script8426(comp(1883, 7), comp(1883, 8), comp(1883, 11), comp(1883, 1), comp(1883, 2), comp(1883, 10), comp(1883, 0), 5, varbitplayer_36454);
            } else {
                script8426(comp(1880, 7), comp(1880, 8), comp(1880, 11), comp(1880, 1), comp(1880, 2), comp(1880, 10), comp(1880, 0), 5, varbitplayer_36453);
            };
            break;
        }
        case 39: {
            if ((int1 == 0)) {
                script8426(comp(1449, 7), comp(1449, 8), comp(1449, 11), comp(1449, 1), comp(1449, 2), comp(1449, 10), comp(1449, 0), 12, 0);
            } else {
                script8426(comp(1880, 7), comp(1880, 8), comp(1880, 11), comp(1880, 1), comp(1880, 2), comp(1880, 10), comp(1880, 0), 5, varbitplayer_36453);
            };
            break;
        }
        case 40: {
            if ((int1 == 0)) {
                script8426(comp(1882, 7), comp(1882, 8), comp(1882, 11), comp(1882, 1), comp(1882, 2), comp(1882, 10), comp(1882, 0), 13, 0);
            } else {
                script8426(comp(1880, 7), comp(1880, 8), comp(1880, 11), comp(1880, 1), comp(1880, 2), comp(1880, 10), comp(1880, 0), 5, varbitplayer_36453);
            };
            break;
        }
        case 14: {
            if ((int1 == 0)) {
                script2963(comp(550, 2), comp(550, 49), varclient_1036);
            } else {
                script2963(comp(1441, 4), comp(1441, 43), varclient_1036);
            };
            break;
        }
        case 27: {
            if ((int1 == 0)) {
                script10319(comp(1519, 11));
            } else {
                script10319(comp(1528, 6));
            };
            break;
        }
        case 16: {
            script392(40795 as struct);
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
                script2872(92798991, comp(1416, 3), comp(1416, 4), comp(1416, 19), comp(1416, 23), 92798987, 92798989, 92798990, 92798992, comp(1416, 18), comp(1416, 6), comp(1416, 7), comp(1416, 20), 92798997, 92798998, 92798988);
            } else {
                script2872(12255248, comp(187, 4), comp(187, 5), comp(187, 19), comp(187, 24), 12255244, 12255246, 12255247, 12255249, comp(187, 18), comp(187, 7), comp(187, 8), comp(187, 20), 12255253, 12255254, 12255245);
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
            script11409(comp(1622, 6));
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
            script10822(comp(284, 18));
            break;
        }
        case 1038: {
            script10822(comp(291, 1));
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