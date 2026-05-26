//
function script6574(int0: number): void {
    IF_SETOPKEY(1, -1, 0, 82116641);
    IF_SETOPKEY(1, -1, 0, 82116631);
    IF_SETOPKEY(1, -1, 0, 82116636);
    IF_SETOPKEY(1, -1, 0, 82116626);
    IF_SETOPKEY(1, -1, 0, 82116621);
    IF_SETOPKEY(1, -1, 0, 82116884);
    IF_SETOPKEY(1, -1, 0, 82116886);
    IF_SETOPKEY(1, -1, 0, 82116885);
    IF_SETOPKEY(1, -1, 0, 82116890);
    IF_SETOPKEY(1, -1, 0, 82116904);
    IF_SETOPKEY(1, -1, 0, 82116903);
    switch (varclient_1928) {
        case 7: {
            IF_SETOPKEY(1, -1, 0, 106168341);
            break;
        }
        case 12: {
            script12372();
            break;
        }
        case 17: {
            script12747();
            break;
        }
        case 20:
        case 29:
        case 41:
        case 57: {
            IF_SETOPKEY(1, -1, 0, 122552341);
            break;
        }
        case 32: {
            IF_SETOPKEY(1, -1, 0, 32178183);
            break;
        }
        case 30: {
            IF_SETOPKEY(1, -1, 0, 14090266);
            break;
        }
        case 34: {
            IF_SETOPKEY(1, -1, 0, 2293777);
            break;
        }
        case 36: {
            IF_SETOPKEY(1, -1, 0, 1245190);
            break;
        }
        case 51: {
            IF_SETOPKEY(1, -1, 0, 41877531);
            break;
        }
        case 52: {
            IF_SETOPKEY(1, -1, 0, 42205211);
            break;
        }
        case 53: {
            IF_SETOPKEY(1, -1, 0, 42860738);
            break;
        }
        case 54: {
            script6528();
            break;
        }
        case 60: {
            IF_SETOPKEY(1, -1, 0, 35323905);
            break;
        }
        case 62: {
            IF_SETOPKEY(1, -1, 0, 61276177);
            break;
        }
        case 63: {
            IF_SETOPKEY(1, -1, 0, 43843586);
            break;
        }
        case 66: {
            IF_SETOPKEY(1, -1, 0, 63569950);
            break;
        }
        case 68:
        case 88:
        case 91: {
            IF_SETOPKEY(1, -1, 0, 84410374);
            break;
        }
        case 69: {
            IF_SETOPKEY(1, -1, 0, 66453540);
            break;
        }
        case 72: {
            IF_SETOPKEY(1, -1, 0, 67043394);
            break;
        }
        case 74: {
            IF_SETOPKEY(1, -1, 0, 69992472);
            break;
        }
        case 75: {
            IF_SETOPKEY(1, -1, 0, 70909986);
            break;
        }
        case 76: {
            IF_SETOPKEY(1, -1, 0, 73400427);
            break;
        }
        case 77: {
            IF_SETOPKEY(1, -1, 0, 74579968);
            break;
        }
        case 78: {
            IF_SETOPKEY(1, -1, 0, 75497476);
            break;
        }
        case 81: {
            IF_SETOPKEY(1, -1, 0, 83296354);
            break;
        }
        case 82: {
            IF_SETOPKEY(1, -1, 0, 41353219);
            break;
        }
        case 87: {
            script19309();
            break;
        }
        case 89: {
            IF_SETOPKEY(1, -1, 0, 83755078);
            break;
        }
        case 94: {
            IF_SETOPKEY(1, -1, 0, 87818268);
            break;
        }
    };
    script8844(1, 13, 8, 82116609, -1);
    if ((int0 == 0)) {
        return;
    };
    var int1 = 0;
    var int2 = script16161();
    var int3 = 0;
    if (((((IF_GETHIDE(82116616) == 0) || (int2 == 33217)) || (int2 == 34277)) && (IF_GETHIDE(82116873) == 1))) {
        switch (int2) {
            case 31364: {
                script16019(106168341);
                break;
            }
            case 33217: {
                script12372();
                if ((varbitplayer_30804 == 1)) {
                    IF_SETOPKEY(1, 83, 0, script12368());
                };
                break;
            }
            case 34277: {
                script12747();
                if ((varbitplayer_33726 == 1)) {
                    IF_SETOPKEY(1, 83, 0, script12746());
                };
                varclient_1993 = 0;
                break;
            }
            case 1515:
            case 40380:
            case 7229:
            case 44604:
            case 49941: {
                script16019(122552341);
                return;
            }
            case 34810: {
                script16019(32178183);
                return;
            }
            case 40579: {
                script16019(14090266);
                return;
            }
            case 34826: {
                script16019(2293777);
                break;
            }
            case 519: {
                script16019(1245190);
                return;
            }
            case 42690: {
                script16019(41877531);
                break;
            }
            case 11605: {
                script16019(42205211);
                break;
            }
            case 11563: {
                if ((IF_GETHIDE(82116873) == 1)) {
                    script16019(42860738);
                    return;
                };
                break;
            }
            case 1530: {
                script1309();
                break;
            }
            case 44665: {
                script16019(50462733);
                break;
            }
            case 45540: {
                script16019(35323905);
                break;
            }
            case 38119: {
                script16019(61276177);
                break;
            }
            case 39801: {
                script16019(43843586);
                break;
            }
            case 22606: {
                script16019(63569950);
                break;
            }
            case 32986:
            case 50263:
            case 2951: {
                if ((IF_GETHIDE(84410451) == 1)) {
                    script16019(84410374);
                    return;
                };
                break;
            }
            case 3707: {
                script16019(66453540);
                break;
            }
            case 46120: {
                if ((script18817() == 1)) {
                    return;
                };
                script16019(82116641);
                break;
            }
            case 19622: {
                if ((script16681() == 1)) {
                    return;
                };
                script16019(82116641);
                break;
            }
            case 39853: {
                script16019(67043394);
                break;
            }
            case 46482: {
                script16019(69926932);
                return;
            }
            case 46483: {
                script16019(69992472);
                break;
            }
            case 47035: {
                script16019(70909986);
                break;
            }
            case 46398: {
                script16019(73400427);
                return;
            }
            case 6879: {
                script16019(74579968);
                break;
            }
            case 46396: {
                if ((IF_HASSUBMODAL(75497473, 1253) == 1)) {
                    return;
                };
                script16019(75497476);
                break;
            }
            case 49116: {
                script16019(83296354);
                break;
            }
            case 21098: {
                script16019(41353219);
                break;
            }
            case 49719: {
                script16019(84017172);
                break;
            }
            case 50195: {
                script16019(75169794);
                break;
            }
            case 50555: {
                script19308();
                break;
            }
            case 51061: {
                script16019(83755078);
                return;
            }
            case 51131: {
                script16019(86507524);
                break;
            }
            case 51827: {
                script16019(87949316);
                break;
            }
            case 51804: {
                if ((IF_GETHIDE(87818305) == 1)) {
                    script16019(87818268);
                    return;
                };
                break;
            }
            default: {
                int3 = 1;
                break;
            }
        };
        if ((int3 == 0)) {
            return;
        };
        if ((IF_GETHIDE(82117055) == 0)) {
            varclient_1993 = 0;
            return;
        };
        script8844(1, 16, 8, 82116641, -1);
        script8844(1, 17, 8, 82116631, -1);
        script8844(1, 18, 8, 82116636, -1);
        script8844(1, 19, 8, 82116626, -1);
        script8844(1, 20, 8, 82116621, -1);
        if ((varbitplayer_21612 == 1)) {
            int1 = (1 + RANDOM(5));
        } else if ((varbitplayer_21612 == 0)) {
            int1 = MIN(varbitplayer_21614, 5);
        };
        switch (int1) {
            case 1: {
                IF_SETOPKEY(1, 83, 0, 82116641);
                break;
            }
            case 2: {
                IF_SETOPKEY(1, 83, 0, 82116631);
                break;
            }
            case 3: {
                IF_SETOPKEY(1, 83, 0, 82116636);
                break;
            }
            case 4: {
                IF_SETOPKEY(1, 83, 0, 82116626);
                break;
            }
            case 5: {
                IF_SETOPKEY(1, 83, 0, 82116621);
                break;
            }
            default: {
                IF_SETOPKEY(1, 83, 0, 82116641);
                break;
            }
        };
        varclient_1993 = 0;
        return;
    };
    if ((IF_GETHIDE(82116873) == 0)) {
        switch (int2) {
            case 34810: {
                IF_SETOPKEY(1, -1, 0, 32178183);
                break;
            }
            case 40579: {
                IF_SETOPKEY(1, -1, 0, 14090266);
                break;
            }
            case 34826: {
                IF_SETOPKEY(1, -1, 0, 2293777);
                break;
            }
            case 1530: {
                script6528();
                break;
            }
            case 45540: {
                IF_SETOPKEY(1, -1, 0, 35323905);
                break;
            }
            case 38119: {
                IF_SETOPKEY(1, -1, 0, 61276177);
                break;
            }
            case 39801: {
                IF_SETOPKEY(1, -1, 0, 43843586);
                break;
            }
            case 22606: {
                IF_SETOPKEY(1, -1, 0, 63569950);
                break;
            }
            case 3707: {
                IF_SETOPKEY(1, -1, 0, 66453540);
                break;
            }
            case 32986:
            case 50263: {
                IF_SETOPKEY(1, -1, 0, 84410374);
                break;
            }
            case 39853: {
                IF_SETOPKEY(1, -1, 0, 67043394);
                break;
            }
            case 47035: {
                IF_SETOPKEY(1, -1, 0, 70909986);
                break;
            }
            case 46398: {
                IF_SETOPKEY(1, -1, 0, 73400427);
                break;
            }
            case 46396: {
                IF_SETOPKEY(1, -1, 0, 75497476);
                break;
            }
            case 49116: {
                IF_SETOPKEY(1, -1, 0, 83296354);
                break;
            }
            case 21098: {
                IF_SETOPKEY(1, -1, 0, 41353219);
                break;
            }
            case 49719: {
                IF_SETOPKEY(1, -1, 0, 84017172);
                break;
            }
            case 50195: {
                IF_SETOPKEY(1, -1, 0, 75169794);
                break;
            }
            case 50555: {
                IF_SETOPKEY(1, -1, 0, 84541515);
                break;
            }
            case 51061: {
                IF_SETOPKEY(1, -1, 0, 83755078);
                break;
            }
            case 51131: {
                IF_SETOPKEY(1, -1, 0, 86507524);
                break;
            }
            case 51827: {
                IF_SETOPKEY(1, -1, 0, 87949316);
                break;
            }
        };
        if (((script6950() == 0) && (varbitplayer_4323 == 0))) {
            varclient_1993 = 0;
            return;
        };
        if ((IF_GETHIDE(82116898) == 0)) {
            script8844(1, 83, 8, 82116903, -1);
            script8844(1, 50, 8, 82116904, -1);
            varclient_1993 = 0;
            return;
        };
        if ((IF_GETENABLED(82116884) == 1)) {
            script8844(1, 83, 8, 82116884, -1);
        };
        if ((IF_GETENABLED(82116886) == 1)) {
            IF_SETOPKEY(1, 68, 0, 82116886);
        };
        if ((IF_GETENABLED(82116885) == 1)) {
            IF_SETOPKEY(1, 39, 0, 82116885);
        };
        if ((IF_GETENABLED(82116890) == 1)) {
            script8844(1, 50, 8, 82116890, -1);
        };
    };
    varclient_1993 = 0;
    return;
}