//
function script3904(): void {
    if (((IF_GETHIDE(82117055) == 0) || (IF_GETHIDE(82117067) == 0))) {
        IF_SETHIDE(1, 82116643);
        return;
    };
    IF_SETHIDE(0, 82116643);
    CC_DELETEALL(82116611);
    if ((script15513() == 38726)) {
        IF_SETHIDE(0, 82117124);
        IF_SETHIDE(0, 82116697);
    };
    if ((script18808() == 0)) {
        IF_SETHIDE(1, 82117124);
    };
    var int0 = script16161();
    if ((struct_getparam(int0, 8207) == 0)) {
        if ((script18373() == 1)) {
            IF_SETHIDE(1, 82116646);
            IF_SETHIDE(0, 82116647);
        };
        IF_SETSIZE(40, 248, 1, 1, 82117123);
        IF_SETSIZE(758, 356, 0, 0, 82116643);
        IF_SETPOSITION(0, 100, 1, 0, 82116643);
    } else {
        IF_SETGRAPHIC(12567 as graphic, 82116646);
        IF_SETSIZE(40, 223, 1, 1, 82117123);
        IF_SETSIZE(758, 375, 0, 0, 82116643);
        IF_SETPOSITION(0, 105, 1, 0, 82116643);
    };
    script4751();
    script7780();
    if ((int0 != -1)) {
        IF_SETGRAPHIC(struct_getparam(int0, 8206), 82116613);
        if ((struct_getparam(int0, 8712) == true)) {
            IF_SETHIDE(1, 82116779);
        };
    };
    switch (varclient_1928) {
        case 43: {
            IF_SETGRAPHIC(15372 as graphic, 82116613);
            break;
        }
        case 37: {
            IF_SETGRAPHIC(11658 as graphic, 82116613);
            if ((script830() == 0)) {
                if ((IF_GETHIDE(82116699) == 1)) {
                    IF_SETHIDE(0, 82116779);
                };
            } else {
                IF_SETHIDE(1, 82116779);
            };
            break;
        }
        case 7:
        case 9: {
            IF_SETGRAPHIC(380 as graphic, 82116613);
            IF_SETMODELANIM(22645, 106168335);
            IF_SETMODELANIM(22645, 106168360);
            IF_SETMODELANIM(22645, 106168362);
            IF_SETHIDE(1, 82116697);
            break;
        }
        case 8: {
            script11671();
            IF_SETHIDE(1, 82116779);
            IF_SETGRAPHIC(7404 as graphic, 82116613);
            break;
        }
        case 11: {
            if ((IF_GETHIDE(82117055) == 0)) {
                IF_SETGRAPHIC(21204 as graphic, 82116613);
            } else {
                IF_SETGRAPHIC(33403 as graphic, 82116613);
            };
            IF_SETMODEL(69044, 82116639);
            IF_SETMODEL(69044, 82116629);
            IF_SETMODEL(69044, 82116634);
            IF_SETMODEL(69044, 82116624);
            IF_SETMODEL(69044, 82116619);
            break;
        }
        case 39: {
            IF_SETGRAPHIC(143 as graphic, 82116613);
            break;
        }
        case 13: {
            IF_SETGRAPHIC(3825 as graphic, 82116613);
            IF_SETHIDE(1, 82116697);
            break;
        }
        case 14: {
            IF_SETHIDE(1, 82116697);
            break;
        }
        case 15: {
            if ((varbitplayer_4323 > 0)) {
                IF_SETHIDE(1, 82116643);
            } else {
                IF_SETHIDE(0, 82116643);
            };
            if ((script11747(42706) == 1)) {
                if ((IF_GETHIDE(82117055) == 0)) {
                    IF_SETGRAPHIC(21204 as graphic, 82116613);
                } else {
                    IF_SETGRAPHIC(33403 as graphic, 82116613);
                };
                IF_SETMODEL(69044, 82116639);
                IF_SETMODEL(69044, 82116629);
                IF_SETMODEL(69044, 82116634);
                IF_SETMODEL(69044, 82116624);
                IF_SETMODEL(69044, 82116619);
            };
            break;
        }
        case 18: {
            IF_SETHIDE(1, 82116779);
            script3595();
            break;
        }
        case 19: {
            IF_SETHIDE(1, 82116697);
            break;
        }
        case 20:
        case 29:
        case 41:
        case 57:
        case 84: {
            script19019(int0);
            break;
        }
        case 23: {
            IF_SETHIDE(0, 82116643);
            break;
        }
        case 24: {
            IF_SETGRAPHIC(7663 as graphic, 82116613);
            break;
        }
        case 22: {
            break;
        }
        case 35: {
            IF_SETGRAPHIC(12554 as graphic, 82116613);
            break;
        }
        case 28: {
            IF_SETHIDE(0, 82116643);
            IF_SETGRAPHIC(142 as graphic, 82116613);
            break;
        }
        case 32: {
            IF_SETGRAPHIC(11000 as graphic, 82116613);
            IF_SETHIDE(1, 82116697);
            IF_SETHIDE(1, 82116779);
            break;
        }
        case 30: {
            IF_SETGRAPHIC(31685 as graphic, 82116613);
            IF_SETHIDE(1, 82116697);
            IF_SETHIDE(1, 82116779);
            break;
        }
        case 33: {
            IF_SETGRAPHIC(33384 as graphic, 82116613);
            break;
        }
        case 34: {
            script2497();
            IF_SETMODELANIM(32517, 2293787);
            IF_SETMODELANIM(32517, 2293772);
            IF_SETMODELANIM(32517, 2293789);
            IF_SETMODELANIM(32517, 2293770);
            break;
        }
        case 36: {
            IF_SETMODELANIM(22645, 1245186);
            IF_SETMODELANIM(22645, 1245191);
            IF_SETMODELANIM(22645, 1245193);
            IF_SETGRAPHIC(11665 as graphic, 82116613);
            IF_SETHIDE(1, 82116697);
            break;
        }
        case 38: {
            IF_SETHIDE(0, 82116643);
            script11536();
            break;
        }
        case 40: {
            IF_SETGRAPHIC(152 as graphic, 82116613);
            break;
        }
        case 42: {
            IF_SETGRAPHIC(456 as graphic, 82116613);
            break;
        }
        case 44: {
            IF_SETGRAPHIC(1136 as graphic, 82116613);
            break;
        }
        case 45: {
            IF_SETGRAPHIC(1204 as graphic, 82116613);
            break;
        }
        case 46: {
            script4427();
            break;
        }
        case 48: {
            IF_SETHIDE(1, 82116697);
            IF_SETHIDE(1, 82116779);
            IF_SETHIDE(1, 82116638);
            IF_SETGRAPHIC(10941 as graphic, 82116613);
            IF_SETPOSITION(-5, 5, 0, 0, 82116617);
            break;
        }
        case 47: {
            IF_SETHIDE(1, 82116697);
            IF_SETHIDE(1, 82116779);
            IF_SETPOSITION(0, -18, 0, 0, 82116617);
            script4579(varbitplayer_28986);
            break;
        }
        case 49: {
            IF_SETPOSITION(-5, 5, 0, 0, 82116617);
            break;
        }
        case 51: {
            IF_SETHIDE(1, 82116779);
            IF_SETGRAPHIC(9296 as graphic, 82116613);
            break;
        }
        case 52: {
            IF_SETHIDE(1, 82116779);
            IF_SETGRAPHIC(9729 as graphic, 82116613);
            break;
        }
        case 53: {
            script19063(script734(script19061()));
            break;
        }
        case 54: {
            varbitplayer_47441 = 0;
            IF_SETHIDE(1, 82116697);
            IF_SETHIDE(1, 82116779);
            IF_SETGRAPHIC(1507 as graphic, 82116613);
            break;
        }
        case 55: {
            IF_SETHIDE(1, 82116779);
            IF_SETGRAPHIC(11008 as graphic, 82116613);
            break;
        }
        case 56: {
            IF_SETHIDE(1, 82116779);
            IF_SETGRAPHIC(10347 as graphic, 82116613);
            break;
        }
        case 59: {
            IF_SETHIDE(1, 82116779);
            break;
        }
        case 60: {
            IF_SETHIDE(1, 82116779);
            IF_SETGRAPHIC(18212 as graphic, 82116613);
            break;
        }
        case 61: {
            IF_SETHIDE(1, 82116779);
            script11757();
            break;
        }
        case 62: {
            IF_SETHIDE(1, 82116779);
            script16355();
            break;
        }
        case 63: {
            IF_SETGRAPHIC(33532 as graphic, 82116613);
            IF_SETHIDE(1, 82116779);
            break;
        }
        case 64: {
            IF_SETHIDE(1, 82116779);
            script16485();
            script16495();
            break;
        }
        case 65: {
            IF_SETONVARTRANSMIT(callback(script16624, 10445, 1), 82116611);
            script16614();
            break;
        }
        case 66: {
            IF_SETHIDE(1, 82116779);
            script16521();
            break;
        }
        case 67: {
            IF_SETHIDE(1, 82116779);
            break;
        }
        case 68: {
            IF_SETHIDE(1, 82116779);
            script19172(32986);
            break;
        }
        case 69: {
            IF_SETHIDE(1, 82116779);
            script16712();
            break;
        }
        case 71: {
            IF_SETHIDE(1, 82116779);
            IF_SETPOSITION(121, 40, 0, 0, 82116640);
            IF_SETSIZE(165, 145, 0, 0, 82116640);
            script16667();
            break;
        }
        case 72: {
            IF_SETHIDE(1, 82116779);
            IF_SETHIDE(0, 82116697);
            break;
        }
        case 73: {
            IF_SETHIDE(1, 82116779);
            break;
        }
        case 75: {
            script19026();
            break;
        }
        case 76: {
            script17715();
            IF_SETHIDE(1, 82116697);
            IF_SETHIDE(1, 82116779);
            IF_SETHIDE(0, 82116697);
            break;
        }
        case 78: {
            IF_SETHIDE(1, 82116779);
            break;
        }
        case 79: {
            IF_SETHIDE(1, 82116779);
            script13003();
            script17412();
            break;
        }
        case 82: {
            IF_SETGRAPHIC(32447 as graphic, 82116613);
            IF_SETHIDE(1, 82116779);
            break;
        }
        case 83: {
            script18829();
            break;
        }
        case 87: {
            IF_SETSIZE(760, 356, 0, 0, 82116643);
            script19267();
            break;
        }
        case 88: {
            IF_SETHIDE(1, 82116779);
            script19172(50263);
            break;
        }
        case 89: {
            script19730();
            IF_SETHIDE(1, 82116697);
            IF_SETHIDE(1, 82116779);
            IF_SETHIDE(0, 82116697);
            break;
        }
        case 90: {
            IF_SETHIDE(1, 82116779);
            script19800();
            break;
        }
        case 91: {
            IF_SETHIDE(1, 82116779);
            script19172(2951);
            break;
        }
        case 92: {
            IF_SETGRAPHIC(26441 as graphic, 82116613);
            IF_SETHIDE(1, 82116779);
            break;
        }
        case 93: {
            IF_SETHIDE(1, 82116779);
            script20041();
            break;
        }
        default: {
            IF_SETHIDE(0, 82116697);
            break;
        }
    };
    return;
}