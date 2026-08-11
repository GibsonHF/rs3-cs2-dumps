//
function script5768(int0: number): void {
    var int1 = comp(-1, 65535);
    var string0 = "";
    var int2 = 0;
    var int3 = 0;
    var int4 = 0;
    switch (int0) {
        case 21: {
            int1 = comp(116, 139);  // rand_bound_interface:setupa_6_blocked
            int3 = 1;
            break;
        }
        case 27: {
            int1 = comp(116, 88);  // rand_bound_interface:setupb_6_blocked
            int3 = 1;
            break;
        }
        case 33: {
            int1 = comp(116, 105);  // rand_bound_interface:setupc_6_blocked
            int3 = 1;
            break;
        }
        case 39: {
            int1 = comp(116, 134);  // rand_bound_interface:setupd_6_blocked
            int3 = 1;
            break;
        }
        case 17: {
            int1 = comp(116, 135);  // rand_bound_interface:setupa_2_blocked
            int2 = 20;
            break;
        }
        case 18: {
            int1 = comp(116, 136);  // rand_bound_interface:setupa_3_blocked
            int2 = 50;
            break;
        }
        case 19: {
            int1 = comp(116, 137);  // rand_bound_interface:setupa_4_blocked
            int2 = 90;
            break;
        }
        case 20: {
            int1 = comp(116, 138);  // rand_bound_interface:setupa_5_blocked
            int2 = 120;
            break;
        }
        case 23: {
            int1 = comp(116, 84);  // rand_bound_interface:setupb_2_blocked
            int2 = 20;
            break;
        }
        case 24: {
            int1 = comp(116, 85);  // rand_bound_interface:setupb_3_blocked
            int2 = 50;
            break;
        }
        case 25: {
            int1 = comp(116, 86);  // rand_bound_interface:setupb_4_blocked
            int2 = 90;
            break;
        }
        case 26: {
            int1 = comp(116, 87);  // rand_bound_interface:setupb_5_blocked
            int2 = 120;
            break;
        }
        case 29: {
            int1 = comp(116, 101);  // rand_bound_interface:setupc_2_blocked
            int2 = 20;
            break;
        }
        case 30: {
            int1 = comp(116, 102);  // rand_bound_interface:setupc_3_blocked
            int2 = 50;
            break;
        }
        case 31: {
            int1 = comp(116, 103);  // rand_bound_interface:setupc_4_blocked
            int2 = 90;
            break;
        }
        case 32: {
            int1 = comp(116, 104);  // rand_bound_interface:setupc_5_blocked
            int2 = 120;
            break;
        }
        case 35: {
            int1 = comp(116, 130);  // rand_bound_interface:setupd_2_blocked
            int2 = 20;
            break;
        }
        case 36: {
            int1 = comp(116, 131);  // rand_bound_interface:setupd_3_blocked
            int2 = 50;
            break;
        }
        case 37: {
            int1 = comp(116, 132);  // rand_bound_interface:setupd_4_blocked
            int2 = 90;
            break;
        }
        case 38: {
            int1 = comp(116, 133);  // rand_bound_interface:setupd_5_blocked
            int2 = 120;
            break;
        }
    };
    if ((int1 != comp(-1, 65535))) {
        if (((int3 == 1) && (script6712(int0) == 0))) {
            string0 = "This slot is only available when a loadout includes a one-handed weapon.";
            int4 = 1;
        };
        if (((int2 > 0) && (STAT_BASE(24 as stat) < int2))) {
            string0 = `This slot is unlocked at level ${inttostring(int2, 10)} Dungeoneering.`;
            int4 = 1;
        };
        if ((int4 == 1)) {
            IF_SETHIDE(false, int1);
            IF_SETONMOUSEREPEAT(callback(script8799, string0, int1, -1), int1);
        };
    };
    return;
}