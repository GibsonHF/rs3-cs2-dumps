//
function script6036(int0: stat, int1: int, int2: obj): string {
    SOUND_VORBIS_VOLUME(14378 as vorbis, 1, 0, 150);
    if ((int0 == -1 as stat)) {
        return "N/A";
    };
    var int3 = 0;
    var int4 = 0;
    var int5 = 0;
    if ((item_getparam(int2, 2549) > -1)) {
        if (((((int2 == 32533 as obj) || (int2 == 32534 as obj)) || (int2 == 32535 as obj)) || (int2 == 32536 as obj))) {
            if ((script9121(int0) == 1)) {
                return `${enum_getvalue(17, 36, 680 as cs2enum, int0)} XP <col=00FF00>(+100% Extra Bonus XP)</col>`;
            };
            return `${enum_getvalue(17, 36, 680 as cs2enum, int0)} XP <col=FFFF00>(+33% Extra Bonus XP)</col>`;
        };
        if ((item_getparam(int2, 3779) != -1 as obj)) {
            return `${enum_getvalue(17, 36, 680 as cs2enum, int0)} XP`;
        };
        return `${enum_getvalue(17, 36, 680 as cs2enum, int0)} `;
    };
    if ((item_getparam(int2, 4762) == 1)) {
        int3 = (int1 / 10);
        if ((int3 > 0)) {
            return `${enum_getvalue(17, 36, 680 as cs2enum, int0)}: ${TOSTRING_LOCALISED(int3, 1)} XP`;
        };
        return `${enum_getvalue(17, 36, 680 as cs2enum, int0)} XP`;
    };
    if ((item_getparam(int2, 4881) == 1)) {
        return `${enum_getvalue(17, 36, 680 as cs2enum, int0)} XP`;
    };
    if ((item_getparam(int2, 5208) != -1)) {
        return `${enum_getvalue(17, 36, 680 as cs2enum, int0)} XP`;
    };
    if ((OC_CATEGORY(int2) == 3636 as category)) {
        return `${enum_getvalue(17, 36, 680 as cs2enum, int0)} XP`;
    };
    switch (int2) {
        case 20935:
        case 20936:
        case 23713:
        case 23714:
        case 23715:
        case 23716:
        case 24151:
        case 28743:
        case 28744:
        case 28745:
        case 28746:
        case 28747:
        case 28748:
        case 28749:
        case 28750:
        case 28751:
        case 28752:
        case 28753:
        case 28754:
        case 29933:
        case 29934:
        case 29935:
        case 30324:
        case 30325:
        case 30326:
        case 30327:
        case 30407:
        case 30408:
        case 30637:
        case 30638:
        case 30639:
        case 30640:
        case 25070:
        case 31260:
        case 31371:
        case 32404:
        case 33527:
        case 33528:
        case 33529:
        case 33530:
        case 33616:
        case 33617:
        case 33856:
        case 34768:
        case 34882:
        case 34883:
        case 34884:
        case 34885:
        case 35762:
        case 35763:
        case 35764:
        case 35765:
        case 35914:
        case 36798:
        case 47663:
        case 47664:
        case 47665:
        case 47666: {
            return `${enum_getvalue(17, 36, 680 as cs2enum, int0)} XP`;
        }
        case 28904:
        case 28905:
        case 28906:
        case 28907: {
            return `${enum_getvalue(17, 36, 680 as cs2enum, int0)} XP`;
        }
        case 36073:
        case 36074:
        case 36075:
        case 36076: {
            return `${enum_getvalue(17, 36, 680 as cs2enum, int0)} XP`;
        }
        case 28320: {
            return `${enum_getvalue(17, 36, 680 as cs2enum, int0)} boost`;
        }
        case 2528:
        case 14058:
        case 18767: {
            int3 = (STAT_BASE(int0) * 10);
            break;
        }
        case 11640: {
            int3 = (STAT_BASE(int0) * 15);
            break;
        }
        case 13463: {
            int4 = STAT_BASE(int0);
            if ((int4 <= 18)) {
                int3 = (enum_getvalue(0, 0, 716 as cs2enum, (int4 + 1)) - enum_getvalue(0, 0, 716 as cs2enum, int4));
            } else {
                int3 = (STAT_BASE(int0) * 25);
            };
            break;
        }
        case 18782: {
            int4 = STAT_BASE(int0);
            if ((int4 < 30)) {
                int3 = (enum_getvalue(0, 0, 716 as cs2enum, (int4 + 1)) - enum_getvalue(0, 0, 716 as cs2enum, int4));
            } else {
                int3 = (((int4 * int4) - (2 * int4)) + 100);
                int3 = (int3 * ((int4 * 10000) / 20));
                int3 = (int3 / 10000);
            };
            break;
        }
        case 20708: {
            int4 = STAT_BASE(int0);
            int3 = POW(int4, 2);
            int3 = ((int3 - (2 * int4)) + 100);
            if ((script7766() == 1)) {
                int3 = ADDPERCENT(int3, 40);
            };
            break;
        }
        case 25977: {
            int4 = STAT_BASE(int0);
            int3 = POW(int4, 2);
            int3 = ((int3 - (2 * int4)) + 100);
            break;
        }
        case 34835: {
            int3 = varclient_4884;
            break;
        }
        case 20960: {
            int4 = STAT_BASE(int0);
            int3 = ((POW(int4, 2) - (2 * int4)) + 100);
            int3 = SCALE(3, 2, int3);
            break;
        }
        case 30782: {
            int4 = STAT_BASE(int0);
            int3 = ((POW(int4, 2) - (2 * int4)) + 100);
            int3 = SCALE(4, 2, int3);
            break;
        }
        case 30783: {
            int4 = STAT_BASE(int0);
            int3 = ((POW(int4, 2) - (2 * int4)) + 100);
            int3 = SCALE(5, 2, int3);
            break;
        }
        case 35785: {
            int4 = STAT_BASE(int0);
            int3 = ((POW(int4, 2) - (2 * int4)) + 100);
            int3 = SCALE(6, 2, int3);
            break;
        }
        case 25454: {
            int4 = STAT_BASE(int0);
            int3 = POW(int4, 2);
            int3 = ((int3 - (2 * int4)) + 100);
            int3 = (int3 * 10);
            break;
        }
        case 31822: {
            return `${enum_getvalue(17, 36, 680 as cs2enum, int0)} XP`;
        }
        case 27366:
        case 27367: {
            return `${enum_getvalue(17, 36, 680 as cs2enum, int0)} XP`;
        }
        case 28567:
        case 28568:
        case 28569:
        case 28570:
        case 28571: {
            return `${enum_getvalue(17, 36, 680 as cs2enum, int0)} XP`;
        }
        case 28908:
        case 28909:
        case 28910: {
            return `${enum_getvalue(17, 36, 680 as cs2enum, int0)} XP`;
        }
        case 25200:
        case 25201:
        case 26492: {
            return `${enum_getvalue(17, 36, 680 as cs2enum, int0)} XP`;
        }
        case 30226: {
            int3 = ((int1 * enum_getvalue(17, 0, 8103 as cs2enum, int0)) / 10);
            break;
        }
        case 31294:
        case 33591: {
            return `${enum_getvalue(17, 36, 680 as cs2enum, int0)} XP`;
        }
        case 29293: {
            int3 = ((script1128(int0, 0) * varclient_4173) + (script1128(int0, 1) * varclient_6903));
            int3 = SCALE(75, 100, int3);
            int3 = (int3 / 10);
            break;
        }
        case 31056: {
            int3 = ((script1128(int0, 0) * varclient_4173) + (script1128(int0, 1) * varclient_6903));
            int3 = (int3 / 10);
            break;
        }
        case 31929: {
            return `You will receive ${inttostring(script10267(int0), 10)} ${enum_getvalue(17, 36, 680 as cs2enum, int0)} XP.`;
        }
        case 31931: {
            return enum_getvalue(17, 36, 680 as cs2enum, int0);
        }
        case 32193: {
            switch (varbitplayer_25049) {
                case 0: {
                    int3 = SCALE(int1, 99, STAT_BASE(int0));
                    break;
                }
                case 1: {
                    int3 = SCALE(int1, 95, STAT_BASE(int0));
                    break;
                }
                case 2: {
                    int3 = SCALE(int1, 90, STAT_BASE(int0));
                    break;
                }
                case 3: {
                    int3 = SCALE(int1, 85, STAT_BASE(int0));
                    break;
                }
            };
            int3 = (int3 / 10);
            break;
        }
        case 32307:
        case 43364: {
            int5 = script212(int0, STAT_BASE(int0), 1, 0);
            if ((int5 == 1)) {
                return `Bonus XP in this skill can be traded for ${TOSTRING_LOCALISED(int5, 1)} credit.`;
            };
            return `Bonus XP in this skill can be traded for up to ${TOSTRING_LOCALISED(int5, 1)} credits.`;
        }
        case 32514:
        case 32515:
        case 32516:
        case 32517:
        case 32518:
        case 32519:
        case 32520:
        case 32521:
        case 32522:
        case 33524:
        case 33525:
        case 33526: {
            return `${enum_getvalue(17, 36, 680 as cs2enum, int0)} XP`;
        }
        case 32537:
        case 32538:
        case 32539:
        case 32540: {
            if ((script9121(int0) == 1)) {
                return `${enum_getvalue(17, 36, 680 as cs2enum, int0)} XP <col=00FF00>(+100% Extra XP)</col>`;
            };
            return `${enum_getvalue(17, 36, 680 as cs2enum, int0)} XP <col=FFFF00>(+33% Extra XP)</col>`;
        }
        case 34186: {
            return `${enum_getvalue(17, 36, 680 as cs2enum, int0)}: 1,500 XP`;
        }
        case 36835: {
            return `${enum_getvalue(17, 36, 680 as cs2enum, int0)}: 50,000 XP`;
        }
        case 34187:
        case 34188:
        case 34189: {
            return `${enum_getvalue(17, 36, 680 as cs2enum, int0)} XP`;
        }
        case 35919: {
            if ((STAT_BASE(int0) < 50)) {
                int3 = (((script259(35919 as obj) * 100) + (MIN(500000, script259(35920 as obj)) * 1250)) / 10);
            } else {
                int3 = (((script259(35919 as obj) * 100) + (MIN(50000, script259(35920 as obj)) * 2500)) / 10);
            };
            break;
        }
        case 36921: {
            if ((STAT_BASE(int0) < 50)) {
                int3 = (((script259(36921 as obj) * 100) + (MIN(500000, script259(36922 as obj)) * 1250)) / 10);
            } else {
                int3 = (((script259(36921 as obj) * 100) + (MIN(50000, script259(36922 as obj)) * 2500)) / 10);
            };
            break;
        }
        case 37682: {
            if ((STAT_BASE(int0) < 50)) {
                int3 = (((script259(37682 as obj) * 100) + (MIN(500000, script259(37683 as obj)) * 1250)) / 10);
            } else {
                int3 = (((script259(37682 as obj) * 100) + (MIN(50000, script259(37683 as obj)) * 2500)) / 10);
            };
            break;
        }
        case 39842: {
            if ((STAT_BASE(int0) < 50)) {
                int3 = (((script259(39842 as obj) * 100) + (MIN(500000, script259(39843 as obj)) * 1250)) / 10);
            } else {
                int3 = (((script259(39842 as obj) * 100) + (MIN(50000, script259(39843 as obj)) * 2500)) / 10);
            };
            break;
        }
        case 37192: {
            switch (int0) {
                case 0: {
                    int3 = (varplayer_6169 / 10);
                    break;
                }
                case 1: {
                    int3 = (varplayer_6170 / 10);
                    break;
                }
                case 2: {
                    int3 = (varplayer_6171 / 10);
                    break;
                }
                case 3: {
                    int3 = (varplayer_6172 / 10);
                    break;
                }
                case 4: {
                    int3 = (varplayer_6173 / 10);
                    break;
                }
                case 5: {
                    int3 = (varplayer_6174 / 10);
                    break;
                }
                case 6: {
                    int3 = (varplayer_6175 / 10);
                    break;
                }
                case 7: {
                    int3 = (varplayer_6176 / 10);
                    break;
                }
                case 8: {
                    int3 = (varplayer_6177 / 10);
                    break;
                }
                case 9: {
                    int3 = (varplayer_6178 / 10);
                    break;
                }
                case 10: {
                    int3 = (varplayer_6179 / 10);
                    break;
                }
                case 11: {
                    int3 = (varplayer_6180 / 10);
                    break;
                }
                case 12: {
                    int3 = (varplayer_6181 / 10);
                    break;
                }
                case 13: {
                    int3 = (varplayer_6182 / 10);
                    break;
                }
                case 14: {
                    int3 = (varplayer_6183 / 10);
                    break;
                }
                case 15: {
                    int3 = (varplayer_6184 / 10);
                    break;
                }
                case 16: {
                    int3 = (varplayer_6185 / 10);
                    break;
                }
                case 17: {
                    int3 = (varplayer_6186 / 10);
                    break;
                }
                case 18: {
                    int3 = (varplayer_6187 / 10);
                    break;
                }
                case 19: {
                    int3 = (varplayer_6188 / 10);
                    break;
                }
                case 20: {
                    int3 = (varplayer_6189 / 10);
                    break;
                }
                case 21: {
                    int3 = (varplayer_6190 / 10);
                    break;
                }
                case 22: {
                    int3 = (varplayer_6191 / 10);
                    break;
                }
                case 23: {
                    int3 = (varplayer_6192 / 10);
                    break;
                }
                case 24: {
                    int3 = (varplayer_6193 / 10);
                    break;
                }
                case 25: {
                    int3 = (varplayer_6194 / 10);
                    break;
                }
                case 26: {
                    int3 = (varplayer_6195 / 10);
                    break;
                }
                case 27: {
                    int3 = (varplayer_9208 / 10);
                    break;
                }
                case 28: {
                    int3 = (varplayer_10956 / 10);
                    break;
                }
            };
            break;
        }
        case 39669: {
            if ((script9121(int0) == 1)) {
                return `${enum_getvalue(17, 36, 680 as cs2enum, int0)}: 1,500 bonus XP`;
            };
            break;
        }
        case 39668: {
            if ((script13031(int0) == 1)) {
                return `${enum_getvalue(17, 36, 680 as cs2enum, int0)}: 1,500 bonus XP`;
            };
            break;
        }
        case 21409: {
            return `${TOSTRING_LOCALISED(script5345(int0), 1)} ${enum_getvalue(17, 36, 680 as cs2enum, int0)} XP`;
        }
        case 55178: {
            return `You will exchange ${script7653(script17430(int0), 1, 1, 0, 1)} Bonus XP from ${enum_getvalue(17, 36, 680 as cs2enum, int0)}.`;
        }
        case 55179: {
            var [int1, int3] = script17431(int0, int1);
            return `You will gain ${script7653(int3, 1, 1, 0, 1)} Bonus XP in ${enum_getvalue(17, 36, 680 as cs2enum, int0)}.`;
        }
        case 22340: {
            if ((int0 == 5 as stat)) {
                int3 = SCALE(enum_getvalue(0, 0, 5230 as cs2enum, MIN(99, STAT_BASE(int0))), 1000, int1);
            } else {
                int3 = SCALE(enum_getvalue(0, 0, 17317 as cs2enum, MIN(99, STAT_BASE(int0))), 1000, int1);
            };
            break;
        }
        default: {
            int3 = (int1 / 10);
            break;
        }
    };
    if ((int3 > 0)) {
        return `${enum_getvalue(17, 36, 680 as cs2enum, int0)}: ${TOSTRING_LOCALISED(int3, 1)} XP`;
    };
    return `${enum_getvalue(17, 36, 680 as cs2enum, int0)} XP`;
}