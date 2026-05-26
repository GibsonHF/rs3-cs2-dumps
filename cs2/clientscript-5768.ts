//
function script5768(int0: number): void {
    var int1 = -1;
    var string0 = "";
    var int2 = 0;
    var int3 = 0;
    var int4 = 0;
    switch (int0) {
        case 21: {
            int1 = 7602315;
            int3 = 1;
            break;
        }
        case 27: {
            int1 = 7602264;
            int3 = 1;
            break;
        }
        case 33: {
            int1 = 7602281;
            int3 = 1;
            break;
        }
        case 39: {
            int1 = 7602310;
            int3 = 1;
            break;
        }
        case 17: {
            int1 = 7602311;
            int2 = 20;
            break;
        }
        case 18: {
            int1 = 7602312;
            int2 = 50;
            break;
        }
        case 19: {
            int1 = 7602313;
            int2 = 90;
            break;
        }
        case 20: {
            int1 = 7602314;
            int2 = 120;
            break;
        }
        case 23: {
            int1 = 7602260;
            int2 = 20;
            break;
        }
        case 24: {
            int1 = 7602261;
            int2 = 50;
            break;
        }
        case 25: {
            int1 = 7602262;
            int2 = 90;
            break;
        }
        case 26: {
            int1 = 7602263;
            int2 = 120;
            break;
        }
        case 29: {
            int1 = 7602277;
            int2 = 20;
            break;
        }
        case 30: {
            int1 = 7602278;
            int2 = 50;
            break;
        }
        case 31: {
            int1 = 7602279;
            int2 = 90;
            break;
        }
        case 32: {
            int1 = 7602280;
            int2 = 120;
            break;
        }
        case 35: {
            int1 = 7602306;
            int2 = 20;
            break;
        }
        case 36: {
            int1 = 7602307;
            int2 = 50;
            break;
        }
        case 37: {
            int1 = 7602308;
            int2 = 90;
            break;
        }
        case 38: {
            int1 = 7602309;
            int2 = 120;
            break;
        }
    };
    if ((int1 != -1)) {
        if (((int3 == 1) && (script6712(int0) == 0))) {
            string0 = "This slot is only available when a loadout includes a one-handed weapon.";
            int4 = 1;
        };
        if (((int2 > 0) && (STAT_BASE(24) < int2))) {
            string0 = `This slot is unlocked at level ${inttostring(int2, 10)} Dungeoneering.`;
            int4 = 1;
        };
        if ((int4 == 1)) {
            IF_SETHIDE(0, int1);
            IF_SETONMOUSEREPEAT(callback(script8799, string0, int1, -1), int1);
        };
    };
    return;
}