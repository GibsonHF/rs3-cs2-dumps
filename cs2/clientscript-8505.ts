//
function script8505(int0: int, int1: int, int2: unknown_int, int3: chatphrase, string0: string, string1: string, string2: string, string3: string): void {
    CC_SETCOLOUR(16777215);
    var string3 = script11298(string3);
    switch (int0) {
        case 0:
        case 4:
        case 27:
        case 28:
        case 29:
        case 11:
        case 43:
        case 46:
        case 103:
        case 119:
        case 104:
        case 109:
        case 110:
        case 26:
        case 30:
        case 31:
        case 120:
        case 122:
        case 123:
        case 124:
        case 126:
        case 128:
        case 129:
        case 130:
        case 133:
        case 134:
        case 142:
        case 144: {
            CC_SETTEXT(`${string3}${string0}`);
            break;
        }
        case 1:
        case 2: {
            CC_SETTEXT(`${string3}<col=ffffff>${string1}:</col> ${enum_getvalue(0, 36, 10293 as cs2enum, varbitplayer_30165)}${string0}</col>`);
            break;
        }
        case 3: {
            CC_SETCOLOUR(enum_getvalue(0, 0, 3056 as cs2enum, varplayer_457));
            CC_SETTEXT(`${string3}<col=ffffff>From ${string1}:</col> ${string0}`);
            break;
        }
        case 100: {
            CC_SETTEXT(`${string3}<col=ff78d9>${string1} ${string0}`);
            break;
        }
        case 5: {
            CC_SETTEXT(`${string3}<col=ff5256>${string0}`);
            break;
        }
        case 6: {
            CC_SETCOLOUR(enum_getvalue(0, 0, 3056 as cs2enum, varplayer_457));
            CC_SETTEXT(`${string3}<col=ffffff>To ${string1}:</col> ${string0}`);
            break;
        }
        case 7: {
            CC_SETCOLOUR(enum_getvalue(0, 0, 3056 as cs2enum, varplayer_457));
            CC_SETTEXT(`${string3}<col=ffffff>From ${string1}:</col> ${string0}`);
            break;
        }
        case 101:
        case 105:
        case 106:
        case 107:
        case 118:
        case 108:
        case 111:
        case 112:
        case 113:
        case 114:
        case 132: {
            CC_SETCOLOUR(8270336);
            CC_SETTEXT(`${string3}${string1} ${string0}`);
            break;
        }
        case 117: {
            CC_SETCOLOUR(123379);
            CC_SETTEXT(`${string3}${string1} ${string0}`);
            break;
        }
        case 41: {
            switch (int2) {
                case 0: {
                    CC_SETCOLOUR(enum_getvalue(0, 0, 3724 as cs2enum, varbitplayer_1188));
                    switch (varbitplayer_30172) {
                        case 1: {
                            CC_SETTEXT(`${string3}<col=ffffff>[</col><col=7fa9ff>CC</col><col=ffffff>] ${string1}: </col>${string0}`);
                            break;
                        }
                        case 2: {
                            CC_SETTEXT(`${string3}<col=ffffff>${string1}: </col>${string0}`);
                            break;
                        }
                        default: {
                            CC_SETTEXT(`${string3}<col=ffffff>[</col><col=7fa9ff>${string2}</col><col=ffffff>] ${string1}: </col>${string0}`);
                            break;
                        }
                    };
                    break;
                }
                case 1: {
                    if (((varbitplayer_22875 == 1) && (varbitplayer_56249 == 0))) {
                        CC_SETCOLOUR(16777060);
                    } else {
                        CC_SETCOLOUR(enum_getvalue(0, 0, 6054 as cs2enum, varbitplayer_56249));
                    };
                    switch (varbitplayer_30172) {
                        case 1: {
                            CC_SETTEXT(`${string3}<col=ffffff>[</col><col=7fa9ff>GIM</col><col=ffffff>] ${string1}: </col>${string0}`);
                            break;
                        }
                        case 2: {
                            CC_SETTEXT(`${string3}<col=ffffff>${string1}: </col>${string0}`);
                            break;
                        }
                        default: {
                            CC_SETTEXT(`${string3}<col=ffffff>[</col><col=7fa9ff>${string2}</col><col=ffffff>] ${string1}: </col>${string0}`);
                            break;
                        }
                    };
                    break;
                }
                default: {
                    CC_SETTEXT(`${string3}${string1} ${string0}`);
                    break;
                }
            };
            break;
        }
        case 9: {
            CC_SETCOLOUR(enum_getvalue(0, 0, 3723 as cs2enum, varbitplayer_1190));
            switch (varbitplayer_30172) {
                case 1: {
                    CC_SETTEXT(`${string3}<col=ffffff>[</col><col=7fa9ff>FC</col><col=ffffff>] ${string1}: </col>${string0}`);
                    break;
                }
                case 2: {
                    CC_SETTEXT(`${string3}<col=ffffff>${string1}: </col>${string0}`);
                    break;
                }
                default: {
                    CC_SETTEXT(`${string3}<col=ffffff>[</col><col=7fa9ff>${string2}</col><col=ffffff>] ${string1}: </col>${string0}`);
                    break;
                }
            };
            break;
        }
        case 44: {
            CC_SETCOLOUR(enum_getvalue(0, 0, 3726 as cs2enum, varbitplayer_1191));
            switch (varbitplayer_30172) {
                case 1: {
                    CC_SETTEXT(`${string3}<col=ffffff>[</col><col=7fa9ff>GC</col><col=ffffff>] ${string1}: </col>${string0}`);
                    break;
                }
                case 2: {
                    CC_SETTEXT(`${string3}<col=ffffff>${string1}: </col>${string0}`);
                    break;
                }
                default: {
                    CC_SETTEXT(`${string3}<col=ffffff>[</col><col=7fa9ff>${string2}</col><col=ffffff>] ${string1}: </col>${string0}`);
                    break;
                }
            };
            break;
        }
        case 24: {
            CC_SETCOLOUR(enum_getvalue(0, 0, 9177 as cs2enum, varbitplayer_24560));
            CC_SETTEXT(`${string3}<col=ffffff>[</col><col=7fa9ff>Group</col><col=ffffff>] ${string1}: </col>${string0}`);
            break;
        }
        case 22: {
            CC_SETCOLOUR(enum_getvalue(0, 0, 9178 as cs2enum, varbitplayer_24561));
            CC_SETTEXT(`${string3}<col=ffffff>[</col><col=7fa9ff>Group (Team)</col><col=ffffff>] ${string1}: </col>${string0}`);
            break;
        }
        case 102: {
            CC_SETCOLOUR(9686004);
            CC_SETTEXT(`${string3}${string1} ${string0}`);
            break;
        }
        case 17: {
            if (((strcmp(REMOVETAGS(CHAT_PLAYERNAME()), REMOVETAGS(string1)) != 0) && (CHATPHRASE_GETAUTORESPONSECOUNT(int3) > 0))) {
                CC_SETTEXT(`${string3}<col=ffffff>${string1}<img=3>:</col> ${enum_getvalue(0, 36, 10293 as cs2enum, varbitplayer_30165)}${string0}</col>`);
            } else {
                CC_SETTEXT(`${string3}<col=ffffff>${string1}:</col> ${enum_getvalue(0, 36, 10293 as cs2enum, varbitplayer_30165)}${string0}</col>`);
            };
            break;
        }
        case 18: {
            CC_SETCOLOUR(enum_getvalue(0, 0, 3056 as cs2enum, varplayer_457));
            if (((strcmp(REMOVETAGS(CHAT_PLAYERNAME()), REMOVETAGS(string1)) != 0) && (CHATPHRASE_GETAUTORESPONSECOUNT(int3) > 0))) {
                CC_SETTEXT(`${string3}<col=ffffff>From ${string1}<img=3>:</col> ${string0}`);
            } else {
                CC_SETTEXT(`${string3}<col=ffffff>From ${string1}:</col> ${string0}`);
            };
            break;
        }
        case 19: {
            CC_SETCOLOUR(enum_getvalue(0, 0, 3056 as cs2enum, varplayer_457));
            CC_SETTEXT(`${string3}<col=ffffff>To ${string1}:</col> ${string0}`);
            break;
        }
        case 42: {
            switch (int2) {
                case 0: {
                    CC_SETCOLOUR(enum_getvalue(0, 0, 3724 as cs2enum, varbitplayer_1188));
                    if (((strcmp(REMOVETAGS(CHAT_PLAYERNAME()), REMOVETAGS(string1)) != 0) && (CHATPHRASE_GETAUTORESPONSECOUNT(int3) > 0))) {
                        switch (varbitplayer_30172) {
                            case 1: {
                                CC_SETTEXT(`${string3}<col=ffffff>[</col><col=7fa9ff>CC</col><col=ffffff>] ${string1}<img=3>: </col>${string0}`);
                                break;
                            }
                            case 2: {
                                CC_SETTEXT(`${string3}<col=ffffff>${string1}<img=3>: </col>${string0}`);
                                break;
                            }
                            default: {
                                CC_SETTEXT(`${string3}<col=ffffff>[</col><col=7fa9ff>${string2}</col><col=ffffff>] ${string1}<img=3>: </col>${string0}`);
                                break;
                            }
                        };
                    } else {
                        switch (varbitplayer_30172) {
                            case 1: {
                                CC_SETTEXT(`${string3}<col=ffffff>[</col><col=7fa9ff>CC</col><col=ffffff>] ${string1}: </col>${string0}`);
                                break;
                            }
                            case 2: {
                                CC_SETTEXT(`${string3}<col=ffffff>${string1}: </col>${string0}`);
                                break;
                            }
                            default: {
                                CC_SETTEXT(`${string3}<col=ffffff>[</col><col=7fa9ff>${string2}</col><col=ffffff>] ${string1}: </col>${string0}`);
                                break;
                            }
                        };
                    };
                    break;
                }
                case 1: {
                    if (((varbitplayer_22875 == 1) && (varbitplayer_56249 == 0))) {
                        CC_SETCOLOUR(16777060);
                    } else {
                        CC_SETCOLOUR(enum_getvalue(0, 0, 6054 as cs2enum, varbitplayer_56249));
                    };
                    if (((strcmp(REMOVETAGS(CHAT_PLAYERNAME()), REMOVETAGS(string1)) != 0) && (CHATPHRASE_GETAUTORESPONSECOUNT(int3) > 0))) {
                        switch (varbitplayer_30172) {
                            case 1: {
                                CC_SETTEXT(`${string3}<col=ffffff>[</col><col=7fa9ff>GIM</col><col=ffffff>] ${string1}<img=3>: </col>${string0}`);
                                break;
                            }
                            case 2: {
                                CC_SETTEXT(`${string3}<col=ffffff>${string1}<img=3>: </col>${string0}`);
                                break;
                            }
                            default: {
                                CC_SETTEXT(`${string3}<col=ffffff>[</col><col=7fa9ff>${string2}</col><col=ffffff>] ${string1}<img=3>: </col>${string0}`);
                                break;
                            }
                        };
                    } else {
                        switch (varbitplayer_30172) {
                            case 1: {
                                CC_SETTEXT(`${string3}<col=ffffff>[</col><col=7fa9ff>GIM</col><col=ffffff>] ${string1}: </col>${string0}`);
                                break;
                            }
                            case 2: {
                                CC_SETTEXT(`${string3}<col=ffffff>${string1}: </col>${string0}`);
                                break;
                            }
                            default: {
                                CC_SETTEXT(`${string3}<col=ffffff>[</col><col=7fa9ff>${string2}</col><col=ffffff>] ${string1}: </col>${string0}`);
                                break;
                            }
                        };
                    };
                    break;
                }
                default: {
                    CC_SETTEXT(`${string3}${string1} ${string0}`);
                    break;
                }
            };
            break;
        }
        case 45: {
            CC_SETCOLOUR(enum_getvalue(0, 0, 3726 as cs2enum, varbitplayer_1191));
            if (((strcmp(REMOVETAGS(CHAT_PLAYERNAME()), REMOVETAGS(string1)) != 0) && (CHATPHRASE_GETAUTORESPONSECOUNT(int3) > 0))) {
                switch (varbitplayer_30172) {
                    case 1: {
                        CC_SETTEXT(`${string3}<col=ffffff>[</col><col=7fa9ff>GC</col><col=ffffff>] ${string1}<img=3>: </col>${string0}`);
                        break;
                    }
                    case 2: {
                        CC_SETTEXT(`${string3}<col=ffffff>${string1}<img=3>: </col>${string0}`);
                        break;
                    }
                    default: {
                        CC_SETTEXT(`${string3}<col=ffffff>[</col><col=7fa9ff>${string2}</col><col=ffffff>] ${string1}<img=3>: </col>${string0}`);
                        break;
                    }
                };
            } else {
                switch (varbitplayer_30172) {
                    case 1: {
                        CC_SETTEXT(`${string3}<col=ffffff>[</col><col=7fa9ff>GC</col><col=ffffff>] ${string1}: </col>${string0}`);
                        break;
                    }
                    case 2: {
                        CC_SETTEXT(`${string3}<col=ffffff>${string1}: </col>${string0}`);
                        break;
                    }
                    default: {
                        CC_SETTEXT(`${string3}<col=ffffff>[</col><col=7fa9ff>${string2}</col><col=ffffff>] ${string1}: </col>${string0}`);
                        break;
                    }
                };
            };
            break;
        }
        case 20: {
            CC_SETCOLOUR(enum_getvalue(0, 0, 3723 as cs2enum, varbitplayer_1190));
            if (((strcmp(REMOVETAGS(CHAT_PLAYERNAME()), REMOVETAGS(string1)) != 0) && (CHATPHRASE_GETAUTORESPONSECOUNT(int3) > 0))) {
                switch (varbitplayer_30172) {
                    case 1: {
                        CC_SETTEXT(`${string3}<col=ffffff>[</col><col=7fa9ff>FC</col><col=ffffff>] ${string1}<img=3>: </col>${string0}`);
                        break;
                    }
                    case 2: {
                        CC_SETTEXT(`${string3}<col=ffffff>${string1}<img=3>: </col>${string0}`);
                        break;
                    }
                    default: {
                        CC_SETTEXT(`${string3}<col=ffffff>[</col><col=7fa9ff>${string2}</col><col=ffffff>] ${string1}<img=3>: </col>${string0}`);
                        break;
                    }
                };
            } else {
                switch (varbitplayer_30172) {
                    case 1: {
                        CC_SETTEXT(`${string3}<col=ffffff>[</col><col=7fa9ff>FC</col><col=ffffff>] ${string1}: </col>${string0}`);
                        break;
                    }
                    case 2: {
                        CC_SETTEXT(`${string3}<col=ffffff>${string1}: </col>${string0}`);
                        break;
                    }
                    default: {
                        CC_SETTEXT(`${string3}<col=ffffff>[</col><col=7fa9ff>${string2}</col><col=ffffff>] ${string1}: </col>${string0}`);
                        break;
                    }
                };
            };
            break;
        }
        case 25: {
            CC_SETCOLOUR(enum_getvalue(0, 0, 9177 as cs2enum, varbitplayer_24560));
            CC_SETTEXT(`${string3}<col=ffffff>[</col><col=7fa9ff>Group</col><col=ffffff>] ${string1}<img=3>: </col>${string0}`);
            break;
        }
        case 23: {
            CC_SETCOLOUR(enum_getvalue(0, 0, 9178 as cs2enum, varbitplayer_24561));
            CC_SETTEXT(`${string3}<col=ffffff>[</col><col=7fa9ff>Group (Team)</col><col=ffffff>] ${string1}<img=3>: </col>${string0}`);
            break;
        }
        case 115:
        case 125:
        case 136: {
            CC_SETCOLOUR(16711680);
            if ((STRING_LENGTH(enum_getvalue(0, 36, 15193 as cs2enum, int1)) > 0)) {
                CC_SETTEXT(`${string3}<img=14>${string0}`);
            } else {
                CC_SETTEXT(`${string3}${string0}`);
            };
            break;
        }
        case 146: {
            if ((STAFFMODLEVEL() >= 2)) {
                CC_SETCOLOUR(16711680);
                if ((STRING_LENGTH(enum_getvalue(0, 36, 15193 as cs2enum, int1)) > 0)) {
                    CC_SETTEXT(`${string3}<img=14>${string0}`);
                } else {
                    CC_SETTEXT(`${string3}${string0}`);
                };
            };
            break;
        }
        case 140:
        case 141:
        case 135:
        case 143: {
            CC_SETCOLOUR(65280);
            CC_SETTEXT(`${string3}<img=14>${string0}`);
            break;
        }
        case 137: {
            CC_SETCOLOUR(enum_getvalue(0, 0, 14607 as cs2enum, varbitplayer_42241));
            CC_SETTEXT(`${string3}${string0}`);
            break;
        }
        case 138: {
            CC_SETCOLOUR(enum_getvalue(0, 0, 14608 as cs2enum, varbitplayer_42242));
            CC_SETTEXT(`${string3}${string0}`);
            break;
        }
        case 139: {
            CC_SETCOLOUR(enum_getvalue(0, 0, 14609 as cs2enum, varbitplayer_42243));
            CC_SETTEXT(`${string3}${string0}`);
            break;
        }
        case 127:
        case 145: {
            CC_SETCOLOUR(65280);
            if ((STRING_LENGTH(enum_getvalue(0, 36, 15193 as cs2enum, int1)) > 0)) {
                CC_SETTEXT(`${string3}<img=14>${string0}`);
            } else {
                CC_SETTEXT(`${string3}${string0}`);
            };
            break;
        }
        case 116: {
            CC_SETTEXT(`${string3}${string0}`);
            break;
        }
        case 32: {
            CC_SETCOLOUR(enum_getvalue(0, 0, 3056 as cs2enum, varbitplayer_21371));
            CC_SETTEXT(`${string3}${REMOVETAGS(string0)}`);
            break;
        }
    };
    return;
}