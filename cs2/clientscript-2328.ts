//
function script2328(int0: number): void {
    if ((varclient_766 == 1)) {
        if ((IF_GETY(int0) > 100)) {
            IF_SETPOSITION(IF_GETX(int0), (IF_GETY(int0) - 2), 0, 0, int0);
            SOUND_SYNTH(35674, 1, 0);
            if ((IF_GETY(int0) < 170)) {
                switch (varclient_765) {
                    case 1: {
                        IF_SETPOSITION(IF_GETX(comp(306, 7)), (IF_GETY(comp(306, 7)) - 2), 0, 0, comp(306, 7));  // easter09_nuts:model1
                        break;
                    }
                    case 2: {
                        IF_SETPOSITION(IF_GETX(comp(306, 8)), (IF_GETY(comp(306, 8)) - 2), 0, 0, comp(306, 8));  // easter09_nuts:model2
                        break;
                    }
                    case 3: {
                        IF_SETPOSITION(IF_GETX(comp(306, 9)), (IF_GETY(comp(306, 9)) - 2), 0, 0, comp(306, 9));  // easter09_nuts:model3
                        break;
                    }
                    case 4: {
                        IF_SETPOSITION(IF_GETX(comp(306, 10)), (IF_GETY(comp(306, 10)) - 2), 0, 0, comp(306, 10));  // easter09_nuts:model4
                        break;
                    }
                };
            };
        } else {
            IF_SETPOSITION(IF_GETX(int0), 100, 0, 0, int0);
            varclient_766 = 2;
            switch (varclient_765) {
                case 1: {
                    script1411();
                    break;
                }
                case 2: {
                    script2056();
                    break;
                }
                case 3: {
                    script2322();
                    break;
                }
                case 4: {
                    script2324();
                    break;
                }
            };
        };
    } else if ((varclient_766 == 2)) {
        if ((IF_GETY(int0) < 200)) {
            IF_SETPOSITION(IF_GETX(int0), (IF_GETY(int0) + 2), 0, 0, int0);
        } else {
            IF_SETPOSITION(IF_GETX(int0), 200, 0, 0, int0);
            varclient_766 = 0;
            varclient_765 = 0;
            IF_SETONTIMER(callback(), int0);
        };
    };
    return;
}