//
function script13623(int0: component, int1: component, int2: component): void {
    var int3 = -1;
    var int4 = 0;
    switch (int0) {
        case 121700363: {
            int3 = 17;
            int4 = ACHIEVEMENT_REQSTATE(1783 as achievement);
            if ((int4 >= 0)) {
                varclient_6848 = int4;
            } else if (((int4 == -2) || (int4 == -3))) {
                varclient_6848 = 10000;
            } else {
                varclient_6848 = 0;
            };
            varclient_6849 = 10000;
            break;
        }
        case 121700370: {
            int3 = 18;
            int4 = ACHIEVEMENT_REQSTATE(1781 as achievement);
            if ((int4 >= 0)) {
                varclient_6846 = int4;
            } else if (((int4 == -2) || (int4 == -3))) {
                varclient_6846 = 10000;
            } else {
                varclient_6846 = 0;
            };
            varclient_6847 = 10000;
            break;
        }
        case 121700377: {
            int3 = 19;
            int4 = ACHIEVEMENT_REQSTATE(1784 as achievement);
            if ((int4 >= 0)) {
                varclient_6850 = int4;
            } else if (((int4 == -2) || (int4 == -3))) {
                varclient_6850 = 10000;
            } else {
                varclient_6850 = 0;
            };
            varclient_6851 = 10000;
            break;
        }
        case 121700384: {
            int3 = 20;
            int4 = ACHIEVEMENT_REQSTATE(1785 as achievement);
            if ((int4 >= 0)) {
                varclient_6852 = int4;
            } else if (((int4 == -2) || (int4 == -3))) {
                varclient_6852 = 10000;
            } else {
                varclient_6852 = 0;
            };
            varclient_6853 = 10000;
            break;
        }
        case 121700360: {
            int3 = 55;
            int4 = ACHIEVEMENT_REQSTATE(3164 as achievement);
            if ((int4 >= 0)) {
                varclient_7082 = int4;
            } else if (((int4 == -2) || (int4 == -3))) {
                varclient_7082 = 10000;
            } else {
                varclient_7082 = 0;
            };
            varclient_7083 = 10000;
            break;
        }
        case 121700361: {
            int3 = 56;
            int4 = ACHIEVEMENT_REQSTATE(3165 as achievement);
            if ((int4 >= 0)) {
                varclient_7084 = int4;
            } else if (((int4 == -2) || (int4 == -3))) {
                varclient_7084 = 10000;
            } else {
                varclient_7084 = 0;
            };
            varclient_7085 = 10000;
            break;
        }
        case 121700362: {
            int3 = 57;
            int4 = ACHIEVEMENT_REQSTATE(3166 as achievement);
            if ((int4 >= 0)) {
                varclient_7086 = int4;
            } else if (((int4 == -2) || (int4 == -3))) {
                varclient_7086 = 10000;
            } else {
                varclient_7086 = 0;
            };
            varclient_7087 = 10000;
            break;
        }
    };
    if ((int3 != -1)) {
        script13579(int1, int2, int3, (8 * 1000), 1);
    };
    IF_SETOPCURSOR(1, 210 as cursor, int0);
    return;
}