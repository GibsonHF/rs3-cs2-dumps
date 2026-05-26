//
function script5847(): void {
    varplayer_4377 = MIN(varplayer_4377, varplayer_4376);
    var string0 = inttostring(varplayer_4377, 10);
    var int0 = -1 as struct;
    var int1 = -1;
    var int2 = 0;
    var int3 = comp(1043, 10);
    switch (varplayer_4378) {
        case 0: {
            if ((varclient_4149 == -1)) {
                return;
            };
            switch (varplayer_4379) {
                case 0: {
                    IF_SETTEXT(`Exchanging ${TOSTRING_LOCALISED((varplayer_4380 * varplayer_4377), 1)} renown for ${TOSTRING_LOCALISED(((varplayer_4377 * varclient_4149) / 10), 1)} x Bonus Farming XP`, int3);
                    break;
                }
                case 1: {
                    IF_SETTEXT(`Exchanging ${TOSTRING_LOCALISED((varplayer_4380 * varplayer_4377), 1)} renown for ${TOSTRING_LOCALISED(((varplayer_4377 * varclient_4149) / 10), 1)} x Bonus Mining XP`, int3);
                    break;
                }
                case 2: {
                    IF_SETTEXT(`Exchanging ${TOSTRING_LOCALISED((varplayer_4380 * varplayer_4377), 1)} renown for ${TOSTRING_LOCALISED(((varplayer_4377 * varclient_4149) / 10), 1)} x Bonus Slayer XP`, int3);
                    break;
                }
                default: {
                    IF_SETTEXT(`Exchanging ${TOSTRING_LOCALISED((varplayer_4380 * varplayer_4377), 1)} renown for an unknown reward.`, int3);
                    break;
                }
            };
            break;
        }
        case 1: {
            switch (varplayer_4379) {
                case 0: {
                    IF_SETTEXT(`Exchanging ${TOSTRING_LOCALISED((varplayer_4380 * varplayer_4377), 1)} renown for ${TOSTRING_LOCALISED(varplayer_4377, 1)} x Seedicide`, int3);
                    break;
                }
                case 1: {
                    IF_SETTEXT(`Exchanging ${TOSTRING_LOCALISED((varplayer_4380 * varplayer_4377), 1)} renown for ${TOSTRING_LOCALISED(varplayer_4377, 1)} x Slayer token`, int3);
                    break;
                }
                case 2: {
                    IF_SETTEXT(`Exchanging ${TOSTRING_LOCALISED((varplayer_4380 * varplayer_4377), 1)} renown for ${TOSTRING_LOCALISED(varplayer_4377, 1)} x Farming token`, int3);
                    break;
                }
                case 3: {
                    IF_SETTEXT(`Exchanging ${TOSTRING_LOCALISED((varplayer_4380 * varplayer_4377), 1)} renown for ${TOSTRING_LOCALISED(varplayer_4377, 1)} x Farmer's outfit piece`, int3);
                    break;
                }
                default: {
                    IF_SETTEXT(`Exchanging ${TOSTRING_LOCALISED((varplayer_4380 * varplayer_4377), 1)} renown for an unknown reward.`, int3);
                    break;
                }
            };
            break;
        }
        case 2: {
            int0 = enum_getvalue(0, 73, 8677 as cs2enum, varplayer_4379);
            if ((int0 == -1 as struct)) {
                IF_SETTEXT(`Exchanging ${TOSTRING_LOCALISED((varplayer_4380 * varplayer_4377), 1)} renown for an unknown reward.`, int3);
            } else {
                IF_SETTEXT(`Exchanging ${TOSTRING_LOCALISED((varplayer_4380 * varplayer_4377), 1)} renown for the ability: ${struct_getparam(int0, 4206)}`, int3);
            };
            break;
        }
        default: {
            IF_SETTEXT(`Exchanging ${TOSTRING_LOCALISED((varplayer_4380 * varplayer_4377), 1)} renown for an unknown reward.`, int3);
            break;
        }
    };
    return;
}