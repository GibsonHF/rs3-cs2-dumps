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
        stack(12567);
        stack(82116646);
        IF_SETGRAPHIC();
        IF_SETSIZE(40, 223, 1, 1, 82117123);
        IF_SETSIZE(758, 375, 0, 0, 82116643);
        IF_SETPOSITION(0, 105, 1, 0, 82116643);
    };
    script4751();
    script7780();
    if ((int0 != -1)) {
        stack(struct_getparam(int0, 8206));
        stack(82116613);
        IF_SETGRAPHIC();
        stack(int0);
        stack(8712);
        struct_getparam();
        if ((stack() == 1)) {
            IF_SETHIDE(1, 82116779);
        };
    };
    switch (varclient_1928) {
        case 43: {
            stack(15372);
            stack(82116613);
            IF_SETGRAPHIC();
            break;
        }
        case 37: {
            stack(11658);
            stack(82116613);
            IF_SETGRAPHIC();
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
            stack(380);
            stack(82116613);
            IF_SETGRAPHIC();
            IF_SETMODELANIM(22645, 106168335);
            IF_SETMODELANIM(22645, 106168360);
            IF_SETMODELANIM(22645, 106168362);
            IF_SETHIDE(1, 82116697);
            break;
        }
        case 8: {
            script11671();
            IF_SETHIDE(1, 82116779);
            stack(7404);
            stack(82116613);
            IF_SETGRAPHIC();
            break;
        }
        case 11: {
            if ((IF_GETHIDE(82117055) == 0)) {
                stack(21204);
                stack(82116613);
                IF_SETGRAPHIC();
            } else {
                stack(33403);
                stack(82116613);
                IF_SETGRAPHIC();
            };
            IF_SETMODEL(69044, 82116639);
            IF_SETMODEL(69044, 82116629);
            IF_SETMODEL(69044, 82116634);
            IF_SETMODEL(69044, 82116624);
            IF_SETMODEL(69044, 82116619);
            break;
        }
        case 39: {
            stack(143);
            stack(82116613);
            IF_SETGRAPHIC();
            break;
        }
        case 13: {
            stack(3825);
            stack(82116613);
            IF_SETGRAPHIC();
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
                    stack(21204);
                    stack(82116613);
                    IF_SETGRAPHIC();
                } else {
                    stack(33403);
                    stack(82116613);
                    IF_SETGRAPHIC();
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
            stack(7663);
            stack(82116613);
            IF_SETGRAPHIC();
            break;
        }
        case 22: {
            break;
        }
        case 35: {
            stack(12554);
            stack(82116613);
            IF_SETGRAPHIC();
            break;
        }
        case 28: {
            IF_SETHIDE(0, 82116643);
            stack(142);
            stack(82116613);
            IF_SETGRAPHIC();
            break;
        }
        case 32: {
            stack(11000);
            stack(82116613);
            IF_SETGRAPHIC();
            IF_SETHIDE(1, 82116697);
            IF_SETHIDE(1, 82116779);
            break;
        }
        case 30: {
            stack(31685);
            stack(82116613);
            IF_SETGRAPHIC();
            IF_SETHIDE(1, 82116697);
            IF_SETHIDE(1, 82116779);
            break;
        }
        case 33: {
            stack(33384);
            stack(82116613);
            IF_SETGRAPHIC();
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
            stack(11665);
            stack(82116613);
            IF_SETGRAPHIC();
            IF_SETHIDE(1, 82116697);
            break;
        }
        case 38: {
            IF_SETHIDE(0, 82116643);
            script11536();
            break;
        }
        case 40: {
            stack(152);
            stack(82116613);
            IF_SETGRAPHIC();
            break;
        }
        case 42: {
            stack(456);
            stack(82116613);
            IF_SETGRAPHIC();
            break;
        }
        case 44: {
            stack(1136);
            stack(82116613);
            IF_SETGRAPHIC();
            break;
        }
        case 45: {
            stack(1204);
            stack(82116613);
            IF_SETGRAPHIC();
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
            stack(10941);
            stack(82116613);
            IF_SETGRAPHIC();
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
            stack(9296);
            stack(82116613);
            IF_SETGRAPHIC();
            break;
        }
        case 52: {
            IF_SETHIDE(1, 82116779);
            stack(9729);
            stack(82116613);
            IF_SETGRAPHIC();
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
            stack(1507);
            stack(82116613);
            IF_SETGRAPHIC();
            break;
        }
        case 55: {
            IF_SETHIDE(1, 82116779);
            stack(11008);
            stack(82116613);
            IF_SETGRAPHIC();
            break;
        }
        case 56: {
            IF_SETHIDE(1, 82116779);
            stack(10347);
            stack(82116613);
            IF_SETGRAPHIC();
            break;
        }
        case 59: {
            IF_SETHIDE(1, 82116779);
            break;
        }
        case 60: {
            IF_SETHIDE(1, 82116779);
            stack(18212);
            stack(82116613);
            IF_SETGRAPHIC();
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
            stack(33532);
            stack(82116613);
            IF_SETGRAPHIC();
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
            stack(32447);
            stack(82116613);
            IF_SETGRAPHIC();
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
            stack(26441);
            stack(82116613);
            IF_SETGRAPHIC();
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