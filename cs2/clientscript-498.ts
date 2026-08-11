//
function script498(int0: number, int1: number, int2: number, int3: number, int4: number, int5: number): void {
    var int6 = 0;
    var int7 = 0;
    var int8 = 0;
    var int9 = 0;
    var int10 = 0;
    var int11 = 0;
    var int12 = 0;
    var int13 = -1;
    if (((((((int0 == varclient_1372) && (int1 == varclient_1373)) && (int2 == varclient_1374)) && (int3 == varclient_1375)) && (int4 == varclient_1376)) && (int5 == varclient_1377))) {
        return;
    };
    IF_SETONVARCTRANSMIT(callback(script498, varclient_1372, varclient_1373, varclient_1374, varclient_1375, varclient_1376, varclient_1377, 1372, 1373, 1374, 1375, 1376, 1377, 6), comp(1012, 3));  // conq_side_unit_details:content_layer
    var int14 = comp(1012, 14);  // conq_side_unit_details:buff_icon_1
    var int15 = comp(1012, 15);  // conq_side_unit_details:buff_icon_2
    var int16 = comp(1012, 16);  // conq_side_unit_details:buff_icon_3
    var int17 = comp(1012, 17);  // conq_side_unit_details:buff_icon_4
    var int18 = comp(1012, 18);  // conq_side_unit_details:buff_icon_5
    if ((varclient_1367 != -1 as npc)) {
        int6 = (((((varclient_1372 + varclient_1373) + varclient_1374) + varclient_1375) + varclient_1376) + varclient_1377);
        if ((int6 == 0)) {
            IF_SETHIDE(true, comp(1012, 13));  // conq_side_unit_details:buffs_layer
            IF_SETHIDE(false, comp(1012, 12));  // conq_side_unit_details:no_command_abilities_text
        } else {
            IF_SETHIDE(false, comp(1012, 13));  // conq_side_unit_details:buffs_layer
            IF_SETHIDE(true, comp(1012, 12));  // conq_side_unit_details:no_command_abilities_text
        };
        if ((int6 == 1)) {
            IF_SETHIDE(false, int14);
            IF_SETPOSITION(82, IF_GETY(int14), 0, 0, int14);
            if ((varclient_1372 == 1)) {
                int13 = 293;
            } else if ((varclient_1373 == 1)) {
                int13 = 299;
            } else if ((varclient_1374 == 1)) {
                int13 = 305;
            } else if ((varclient_1375 == 1)) {
                int13 = 1044;
            } else if ((varclient_1376 == 1)) {
                int13 = 1045;
            } else {
                int13 = 1046;
            };
            IF_SETGRAPHIC(struct_getparam(int13, 1153), int14);
            IF_SETONMOUSEREPEAT(callback(script499, int13, int14), int14);
            IF_SETHIDE(true, int15);
            IF_SETHIDE(true, int16);
            IF_SETHIDE(true, int17);
            IF_SETHIDE(true, int18);
        } else if ((int6 == 2)) {
            IF_SETHIDE(false, int14);
            IF_SETPOSITION(50, IF_GETY(int14), 0, 0, int14);
            if ((varclient_1372 == 1)) {
                int13 = 293;
            } else if ((varclient_1373 == 1)) {
                int13 = 299;
                int8 = 1;
            } else if ((varclient_1374 == 1)) {
                int13 = 305;
                int9 = 1;
            } else if ((varclient_1375 == 1)) {
                int13 = 1044;
                int10 = 1;
            } else {
                int13 = 1045;
                int11 = 1;
            };
            IF_SETGRAPHIC(struct_getparam(int13, 1153), int14);
            IF_SETONMOUSEREPEAT(callback(script499, int13, int14), int14);
            IF_SETHIDE(false, int15);
            IF_SETPOSITION(115, IF_GETY(int15), 0, 0, int15);
            if ((varclient_1373 == 1)) {
                if ((int8 == 0)) {
                    int13 = 299;
                } else if ((varclient_1374 == 1)) {
                    if ((int9 == 0)) {
                        int13 = 305;
                    } else if ((varclient_1375 == 1)) {
                        if ((int10 == 0)) {
                            int13 = 1044;
                        } else if ((varclient_1376 == 1)) {
                            if ((int11 == 0)) {
                                int13 = 1045;
                            } else {
                                int13 = 1046;
                            };
                        } else {
                            int13 = 1046;
                        };
                    } else if ((varclient_1376 == 1)) {
                        if ((int11 == 0)) {
                            int13 = 1045;
                        } else {
                            int13 = 1046;
                        };
                    } else {
                        int13 = 1046;
                    };
                } else if ((varclient_1375 == 1)) {
                    if ((int10 == 0)) {
                        int13 = 1044;
                    } else if ((varclient_1376 == 1)) {
                        if ((int11 == 0)) {
                            int13 = 1045;
                        } else {
                            int13 = 1046;
                        };
                    } else {
                        int13 = 1046;
                    };
                } else if ((varclient_1376 == 1)) {
                    if ((int11 == 0)) {
                        int13 = 1045;
                    } else {
                        int13 = 1046;
                    };
                } else {
                    int13 = 1046;
                };
            } else if ((varclient_1374 == 1)) {
                if ((int9 == 0)) {
                    int13 = 305;
                } else if ((varclient_1375 == 1)) {
                    if ((int10 == 0)) {
                        int13 = 1044;
                    } else if ((varclient_1376 == 1)) {
                        if ((int11 == 0)) {
                            int13 = 1045;
                        } else {
                            int13 = 1046;
                        };
                    } else {
                        int13 = 1046;
                    };
                } else if ((varclient_1376 == 1)) {
                    if ((int11 == 0)) {
                        int13 = 1045;
                    } else {
                        int13 = 1046;
                    };
                } else {
                    int13 = 1046;
                };
            } else if ((varclient_1375 == 1)) {
                if ((int10 == 0)) {
                    int13 = 1044;
                } else if ((varclient_1376 == 1)) {
                    if ((int11 == 0)) {
                        int13 = 1045;
                    } else {
                        int13 = 1046;
                    };
                } else {
                    int13 = 1046;
                };
            } else if ((varclient_1376 == 1)) {
                if ((int11 == 0)) {
                    int13 = 1045;
                } else {
                    int13 = 1046;
                };
            } else {
                int13 = 1046;
            };
            IF_SETGRAPHIC(struct_getparam(int13, 1153), int15);
            IF_SETONMOUSEREPEAT(callback(script499, int13, int15), int15);
            IF_SETHIDE(true, int16);
            IF_SETHIDE(true, int17);
            IF_SETHIDE(true, int18);
        } else if ((int6 == 3)) {
            IF_SETHIDE(false, int14);
            IF_SETPOSITION(30, IF_GETY(int14), 0, 0, int14);
            if ((varclient_1372 == 1)) {
                int13 = 293;
            } else if ((varclient_1373 == 1)) {
                int13 = 299;
                int8 = 1;
            } else if ((varclient_1374 == 1)) {
                int13 = 305;
                int9 = 1;
            } else {
                int13 = 1044;
                int10 = 1;
            };
            IF_SETGRAPHIC(struct_getparam(int13, 1153), int14);
            IF_SETONMOUSEREPEAT(callback(script499, int13, int14), int14);
            IF_SETHIDE(false, int15);
            IF_SETPOSITION(80, IF_GETY(int15), 0, 0, int15);
            if ((varclient_1373 == 1)) {
                if ((int8 == 0)) {
                    int13 = 299;
                } else if ((varclient_1374 == 1)) {
                    if ((int9 == 0)) {
                        int13 = 305;
                        int9 = 1;
                    } else if ((varclient_1375 == 1)) {
                        if ((int10 == 0)) {
                            int13 = 1044;
                            int10 = 1;
                        } else {
                            int13 = 1045;
                            int11 = 1;
                        };
                    } else {
                        int13 = 1045;
                        int11 = 1;
                    };
                } else if ((varclient_1375 == 1)) {
                    if ((int10 == 0)) {
                        int13 = 1044;
                        int10 = 1;
                    } else {
                        int13 = 1045;
                        int11 = 1;
                    };
                } else {
                    int13 = 1045;
                    int11 = 1;
                };
            } else if ((varclient_1374 == 1)) {
                if ((int9 == 0)) {
                    int13 = 305;
                    int9 = 1;
                } else if ((varclient_1375 == 1)) {
                    if ((int10 == 0)) {
                        int13 = 1044;
                        int10 = 1;
                    } else {
                        int13 = 1045;
                        int11 = 1;
                    };
                } else {
                    int13 = 1045;
                    int11 = 1;
                };
            } else if ((varclient_1375 == 1)) {
                if ((int10 == 0)) {
                    int13 = 1044;
                    int10 = 1;
                } else {
                    int13 = 1045;
                    int11 = 1;
                };
            } else {
                int13 = 1045;
                int11 = 1;
            };
            IF_SETGRAPHIC(struct_getparam(int13, 1153), int15);
            IF_SETONMOUSEREPEAT(callback(script499, int13, int15), int15);
            IF_SETHIDE(false, int16);
            IF_SETPOSITION(130, IF_GETY(int16), 0, 0, int16);
            if ((varclient_1374 == 1)) {
                if ((int9 == 0)) {
                    int13 = 305;
                } else if ((varclient_1375 == 1)) {
                    if ((int10 == 0)) {
                        int13 = 1044;
                    } else if ((varclient_1376 == 1)) {
                        if ((int11 == 0)) {
                            int13 = 1045;
                        } else {
                            int13 = 1046;
                        };
                    } else {
                        int13 = 1046;
                    };
                } else if ((varclient_1376 == 1)) {
                    if ((int11 == 0)) {
                        int13 = 1045;
                    } else {
                        int13 = 1046;
                    };
                } else {
                    int13 = 1046;
                };
            } else if ((varclient_1375 == 1)) {
                if ((int10 == 0)) {
                    int13 = 1044;
                } else if ((varclient_1376 == 1)) {
                    if ((int11 == 0)) {
                        int13 = 1045;
                    } else {
                        int13 = 1046;
                    };
                } else {
                    int13 = 1046;
                };
            } else if ((varclient_1376 == 1)) {
                if ((int11 == 0)) {
                    int13 = 1045;
                } else {
                    int13 = 1046;
                };
            } else {
                int13 = 1046;
            };
            IF_SETGRAPHIC(struct_getparam(int13, 1153), int16);
            IF_SETONMOUSEREPEAT(callback(script499, int13, int16), int16);
            IF_SETHIDE(true, int17);
            IF_SETHIDE(true, int18);
        } else if ((int6 == 4)) {
            IF_SETHIDE(false, int14);
            IF_SETPOSITION(18, IF_GETY(int14), 0, 0, int14);
            if ((varclient_1372 == 1)) {
                int13 = 293;
            } else if ((varclient_1373 == 1)) {
                int13 = 299;
                int8 = 1;
            } else {
                int13 = 305;
                int9 = 1;
            };
            IF_SETGRAPHIC(struct_getparam(int13, 1153), int14);
            IF_SETONMOUSEREPEAT(callback(script499, int13, int14), int14);
            IF_SETHIDE(false, int15);
            IF_SETPOSITION(61, IF_GETY(int15), 0, 0, int15);
            if ((varclient_1373 == 1)) {
                if ((int8 == 0)) {
                    int13 = 299;
                } else if ((varclient_1374 == 1)) {
                    if ((int9 == 0)) {
                        int13 = 305;
                        int9 = 1;
                    } else {
                        int13 = 1044;
                        int10 = 1;
                    };
                } else {
                    int13 = 1044;
                    int10 = 1;
                };
            } else if ((varclient_1374 == 1)) {
                if ((int9 == 0)) {
                    int13 = 305;
                    int9 = 1;
                } else {
                    int13 = 1044;
                    int10 = 1;
                };
            } else {
                int13 = 1044;
                int10 = 1;
            };
            IF_SETGRAPHIC(struct_getparam(int13, 1153), int15);
            IF_SETONMOUSEREPEAT(callback(script499, int13, int15), int15);
            IF_SETHIDE(false, int16);
            IF_SETPOSITION(104, IF_GETY(int16), 0, 0, int16);
            if ((varclient_1374 == 1)) {
                if ((int9 == 0)) {
                    int13 = 305;
                } else if ((varclient_1375 == 1)) {
                    if ((int10 == 0)) {
                        int13 = 1044;
                        int10 = 1;
                    } else {
                        int13 = 1045;
                        int11 = 1;
                    };
                } else {
                    int13 = 1045;
                    int11 = 1;
                };
            } else if ((varclient_1375 == 1)) {
                if ((int10 == 0)) {
                    int13 = 1044;
                    int10 = 1;
                } else {
                    int13 = 1045;
                    int11 = 1;
                };
            } else {
                int13 = 1045;
                int11 = 1;
            };
            IF_SETGRAPHIC(struct_getparam(int13, 1153), int16);
            IF_SETONMOUSEREPEAT(callback(script499, int13, int16), int16);
            IF_SETHIDE(false, int17);
            IF_SETPOSITION(147, IF_GETY(int17), 0, 0, int17);
            if ((varclient_1375 == 1)) {
                if ((int10 == 0)) {
                    int13 = 1044;
                } else if ((varclient_1376 == 1)) {
                    if ((int11 == 0)) {
                        int13 = 1045;
                    } else {
                        int13 = 1046;
                    };
                } else {
                    int13 = 1046;
                };
            } else if ((varclient_1376 == 1)) {
                if ((int11 == 0)) {
                    int13 = 1045;
                } else {
                    int13 = 1046;
                };
            } else {
                int13 = 1046;
            };
            IF_SETGRAPHIC(struct_getparam(int13, 1153), int17);
            IF_SETONMOUSEREPEAT(callback(script499, int13, int17), int17);
            IF_SETHIDE(true, int18);
        } else {
            IF_SETHIDE(false, int14);
            IF_SETPOSITION(11, IF_GETY(int14), 0, 0, int14);
            if ((varclient_1372 == 1)) {
                int13 = 293;
            } else {
                int13 = 299;
                int8 = 1;
            };
            IF_SETGRAPHIC(struct_getparam(int13, 1153), int14);
            IF_SETONMOUSEREPEAT(callback(script499, int13, int14), int14);
            IF_SETHIDE(false, int15);
            IF_SETPOSITION(47, IF_GETY(int15), 0, 0, int15);
            if ((varclient_1373 == 1)) {
                if ((int8 == 0)) {
                    int13 = 299;
                } else {
                    int13 = 305;
                    int9 = 1;
                };
            } else {
                int13 = 305;
                int9 = 1;
            };
            IF_SETGRAPHIC(struct_getparam(int13, 1153), int15);
            IF_SETONMOUSEREPEAT(callback(script499, int13, int15), int15);
            IF_SETHIDE(false, int16);
            IF_SETPOSITION(83, IF_GETY(int16), 0, 0, int16);
            if ((varclient_1374 == 1)) {
                if ((int9 == 0)) {
                    int13 = 305;
                } else {
                    int13 = 1044;
                    int10 = 1;
                };
            } else {
                int13 = 1044;
                int10 = 1;
            };
            IF_SETGRAPHIC(struct_getparam(int13, 1153), int16);
            IF_SETONMOUSEREPEAT(callback(script499, int13, int16), int16);
            IF_SETHIDE(false, int17);
            IF_SETPOSITION(119, IF_GETY(int17), 0, 0, int17);
            if ((varclient_1375 == 1)) {
                if ((int10 == 0)) {
                    int13 = 1044;
                } else {
                    int13 = 1045;
                    int11 = 1;
                };
            } else {
                int13 = 1045;
                int11 = 1;
            };
            IF_SETGRAPHIC(struct_getparam(int13, 1153), int17);
            IF_SETONMOUSEREPEAT(callback(script499, int13, int17), int17);
            IF_SETHIDE(false, int18);
            IF_SETPOSITION(155, IF_GETY(int18), 0, 0, int18);
            if ((varclient_1376 == 1)) {
                if ((int11 == 0)) {
                    int13 = 1045;
                } else {
                    int13 = 1046;
                };
            } else {
                int13 = 1046;
            };
            IF_SETGRAPHIC(struct_getparam(int13, 1153), int18);
            IF_SETONMOUSEREPEAT(callback(script499, int13, int18), int18);
        };
    };
    return;
}