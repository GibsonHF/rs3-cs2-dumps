//
function script5755(int0: number): void {
    var int1 = (CLIENTCLOCK() - int0);
    if ((int1 > 225)) {
        script8899(13139);
        script13632();
    } else if ((int1 > 200)) {
        if ((varbitclient_35731 < 9)) {
            script8899(13138);
            if ((IF_FIND(comp(1865, 15)) == 1)) {  // sworld_end:anima_value_label
                if ((varbitplayer_35835 >= 25)) {
                    cc_setparam(6519, 0);
                    CC_SETONTIMER(callback(script5756, 122224655, 0, varbitplayer_35835));
                } else {
                    IF_SETTEXT(inttostring(varbitplayer_35835, 10), comp(1865, 15));  // sworld_end:anima_value_label
                };
            } else {
                IF_SETTEXT(inttostring(varbitplayer_35835, 10), comp(1865, 15));  // sworld_end:anima_value_label
            };
            varbitclient_35731 = 9;
        } else if ((int1 > 175)) {
            if ((varbitclient_35731 < 8)) {
                script8899(13137);
                script4596(13138);
                varbitclient_35731 = 8;
            } else if ((int1 > 150)) {
                if ((varbitclient_35731 < 7)) {
                    script8899(13136);
                    script4596(13137);
                    varbitclient_35731 = 7;
                } else if ((int1 > 125)) {
                    if ((varbitclient_35731 < 6)) {
                        script8899(13135);
                        script4596(13136);
                        varbitclient_35731 = 6;
                    } else if ((int1 > 100)) {
                        if ((varbitclient_35731 < 5)) {
                            script8899(13134);
                            script4596(13135);
                            varbitclient_35731 = 5;
                        } else if ((int1 > 75)) {
                            if ((varbitclient_35731 < 4)) {
                                script8899(13133);
                                script4596(13134);
                                varbitclient_35731 = 4;
                            } else if ((int1 > 50)) {
                                if ((varbitclient_35731 < 3)) {
                                    script8899(13132);
                                    script4596(13133);
                                    varbitclient_35731 = 3;
                                } else if (((int1 > 25) && (varbitclient_35731 < 2))) {
                                    script8899(9059);
                                    script4596(13132);
                                    varbitclient_35731 = 2;
                                };
                            } else if (((int1 > 25) && (varbitclient_35731 < 2))) {
                                script8899(9059);
                                script4596(13132);
                                varbitclient_35731 = 2;
                            };
                        } else if ((int1 > 50)) {
                            if ((varbitclient_35731 < 3)) {
                                script8899(13132);
                                script4596(13133);
                                varbitclient_35731 = 3;
                            } else if (((int1 > 25) && (varbitclient_35731 < 2))) {
                                script8899(9059);
                                script4596(13132);
                                varbitclient_35731 = 2;
                            };
                        } else if (((int1 > 25) && (varbitclient_35731 < 2))) {
                            script8899(9059);
                            script4596(13132);
                            varbitclient_35731 = 2;
                        };
                    } else if ((int1 > 75)) {
                        if ((varbitclient_35731 < 4)) {
                            script8899(13133);
                            script4596(13134);
                            varbitclient_35731 = 4;
                        } else if ((int1 > 50)) {
                            if ((varbitclient_35731 < 3)) {
                                script8899(13132);
                                script4596(13133);
                                varbitclient_35731 = 3;
                            } else if (((int1 > 25) && (varbitclient_35731 < 2))) {
                                script8899(9059);
                                script4596(13132);
                                varbitclient_35731 = 2;
                            };
                        } else if (((int1 > 25) && (varbitclient_35731 < 2))) {
                            script8899(9059);
                            script4596(13132);
                            varbitclient_35731 = 2;
                        };
                    } else if ((int1 > 50)) {
                        if ((varbitclient_35731 < 3)) {
                            script8899(13132);
                            script4596(13133);
                            varbitclient_35731 = 3;
                        } else if (((int1 > 25) && (varbitclient_35731 < 2))) {
                            script8899(9059);
                            script4596(13132);
                            varbitclient_35731 = 2;
                        };
                    } else if (((int1 > 25) && (varbitclient_35731 < 2))) {
                        script8899(9059);
                        script4596(13132);
                        varbitclient_35731 = 2;
                    };
                } else if ((int1 > 100)) {
                    if ((varbitclient_35731 < 5)) {
                        script8899(13134);
                        script4596(13135);
                        varbitclient_35731 = 5;
                    } else if ((int1 > 75)) {
                        if ((varbitclient_35731 < 4)) {
                            script8899(13133);
                            script4596(13134);
                            varbitclient_35731 = 4;
                        } else if ((int1 > 50)) {
                            if ((varbitclient_35731 < 3)) {
                                script8899(13132);
                                script4596(13133);
                                varbitclient_35731 = 3;
                            } else if (((int1 > 25) && (varbitclient_35731 < 2))) {
                                script8899(9059);
                                script4596(13132);
                                varbitclient_35731 = 2;
                            };
                        } else if (((int1 > 25) && (varbitclient_35731 < 2))) {
                            script8899(9059);
                            script4596(13132);
                            varbitclient_35731 = 2;
                        };
                    } else if ((int1 > 50)) {
                        if ((varbitclient_35731 < 3)) {
                            script8899(13132);
                            script4596(13133);
                            varbitclient_35731 = 3;
                        } else if (((int1 > 25) && (varbitclient_35731 < 2))) {
                            script8899(9059);
                            script4596(13132);
                            varbitclient_35731 = 2;
                        };
                    } else if (((int1 > 25) && (varbitclient_35731 < 2))) {
                        script8899(9059);
                        script4596(13132);
                        varbitclient_35731 = 2;
                    };
                } else if ((int1 > 75)) {
                    if ((varbitclient_35731 < 4)) {
                        script8899(13133);
                        script4596(13134);
                        varbitclient_35731 = 4;
                    } else if ((int1 > 50)) {
                        if ((varbitclient_35731 < 3)) {
                            script8899(13132);
                            script4596(13133);
                            varbitclient_35731 = 3;
                        } else if (((int1 > 25) && (varbitclient_35731 < 2))) {
                            script8899(9059);
                            script4596(13132);
                            varbitclient_35731 = 2;
                        };
                    } else if (((int1 > 25) && (varbitclient_35731 < 2))) {
                        script8899(9059);
                        script4596(13132);
                        varbitclient_35731 = 2;
                    };
                } else if ((int1 > 50)) {
                    if ((varbitclient_35731 < 3)) {
                        script8899(13132);
                        script4596(13133);
                        varbitclient_35731 = 3;
                    } else if (((int1 > 25) && (varbitclient_35731 < 2))) {
                        script8899(9059);
                        script4596(13132);
                        varbitclient_35731 = 2;
                    };
                } else if (((int1 > 25) && (varbitclient_35731 < 2))) {
                    script8899(9059);
                    script4596(13132);
                    varbitclient_35731 = 2;
                };
            } else if ((int1 > 125)) {
                if ((varbitclient_35731 < 6)) {
                    script8899(13135);
                    script4596(13136);
                    varbitclient_35731 = 6;
                } else if ((int1 > 100)) {
                    if ((varbitclient_35731 < 5)) {
                        script8899(13134);
                        script4596(13135);
                        varbitclient_35731 = 5;
                    } else if ((int1 > 75)) {
                        if ((varbitclient_35731 < 4)) {
                            script8899(13133);
                            script4596(13134);
                            varbitclient_35731 = 4;
                        } else if ((int1 > 50)) {
                            if ((varbitclient_35731 < 3)) {
                                script8899(13132);
                                script4596(13133);
                                varbitclient_35731 = 3;
                            } else if (((int1 > 25) && (varbitclient_35731 < 2))) {
                                script8899(9059);
                                script4596(13132);
                                varbitclient_35731 = 2;
                            };
                        } else if (((int1 > 25) && (varbitclient_35731 < 2))) {
                            script8899(9059);
                            script4596(13132);
                            varbitclient_35731 = 2;
                        };
                    } else if ((int1 > 50)) {
                        if ((varbitclient_35731 < 3)) {
                            script8899(13132);
                            script4596(13133);
                            varbitclient_35731 = 3;
                        } else if (((int1 > 25) && (varbitclient_35731 < 2))) {
                            script8899(9059);
                            script4596(13132);
                            varbitclient_35731 = 2;
                        };
                    } else if (((int1 > 25) && (varbitclient_35731 < 2))) {
                        script8899(9059);
                        script4596(13132);
                        varbitclient_35731 = 2;
                    };
                } else if ((int1 > 75)) {
                    if ((varbitclient_35731 < 4)) {
                        script8899(13133);
                        script4596(13134);
                        varbitclient_35731 = 4;
                    } else if ((int1 > 50)) {
                        if ((varbitclient_35731 < 3)) {
                            script8899(13132);
                            script4596(13133);
                            varbitclient_35731 = 3;
                        } else if (((int1 > 25) && (varbitclient_35731 < 2))) {
                            script8899(9059);
                            script4596(13132);
                            varbitclient_35731 = 2;
                        };
                    } else if (((int1 > 25) && (varbitclient_35731 < 2))) {
                        script8899(9059);
                        script4596(13132);
                        varbitclient_35731 = 2;
                    };
                } else if ((int1 > 50)) {
                    if ((varbitclient_35731 < 3)) {
                        script8899(13132);
                        script4596(13133);
                        varbitclient_35731 = 3;
                    } else if (((int1 > 25) && (varbitclient_35731 < 2))) {
                        script8899(9059);
                        script4596(13132);
                        varbitclient_35731 = 2;
                    };
                } else if (((int1 > 25) && (varbitclient_35731 < 2))) {
                    script8899(9059);
                    script4596(13132);
                    varbitclient_35731 = 2;
                };
            } else if ((int1 > 100)) {
                if ((varbitclient_35731 < 5)) {
                    script8899(13134);
                    script4596(13135);
                    varbitclient_35731 = 5;
                } else if ((int1 > 75)) {
                    if ((varbitclient_35731 < 4)) {
                        script8899(13133);
                        script4596(13134);
                        varbitclient_35731 = 4;
                    } else if ((int1 > 50)) {
                        if ((varbitclient_35731 < 3)) {
                            script8899(13132);
                            script4596(13133);
                            varbitclient_35731 = 3;
                        } else if (((int1 > 25) && (varbitclient_35731 < 2))) {
                            script8899(9059);
                            script4596(13132);
                            varbitclient_35731 = 2;
                        };
                    } else if (((int1 > 25) && (varbitclient_35731 < 2))) {
                        script8899(9059);
                        script4596(13132);
                        varbitclient_35731 = 2;
                    };
                } else if ((int1 > 50)) {
                    if ((varbitclient_35731 < 3)) {
                        script8899(13132);
                        script4596(13133);
                        varbitclient_35731 = 3;
                    } else if (((int1 > 25) && (varbitclient_35731 < 2))) {
                        script8899(9059);
                        script4596(13132);
                        varbitclient_35731 = 2;
                    };
                } else if (((int1 > 25) && (varbitclient_35731 < 2))) {
                    script8899(9059);
                    script4596(13132);
                    varbitclient_35731 = 2;
                };
            } else if ((int1 > 75)) {
                if ((varbitclient_35731 < 4)) {
                    script8899(13133);
                    script4596(13134);
                    varbitclient_35731 = 4;
                } else if ((int1 > 50)) {
                    if ((varbitclient_35731 < 3)) {
                        script8899(13132);
                        script4596(13133);
                        varbitclient_35731 = 3;
                    } else if (((int1 > 25) && (varbitclient_35731 < 2))) {
                        script8899(9059);
                        script4596(13132);
                        varbitclient_35731 = 2;
                    };
                } else if (((int1 > 25) && (varbitclient_35731 < 2))) {
                    script8899(9059);
                    script4596(13132);
                    varbitclient_35731 = 2;
                };
            } else if ((int1 > 50)) {
                if ((varbitclient_35731 < 3)) {
                    script8899(13132);
                    script4596(13133);
                    varbitclient_35731 = 3;
                } else if (((int1 > 25) && (varbitclient_35731 < 2))) {
                    script8899(9059);
                    script4596(13132);
                    varbitclient_35731 = 2;
                };
            } else if (((int1 > 25) && (varbitclient_35731 < 2))) {
                script8899(9059);
                script4596(13132);
                varbitclient_35731 = 2;
            };
        } else if ((int1 > 150)) {
            if ((varbitclient_35731 < 7)) {
                script8899(13136);
                script4596(13137);
                varbitclient_35731 = 7;
            } else if ((int1 > 125)) {
                if ((varbitclient_35731 < 6)) {
                    script8899(13135);
                    script4596(13136);
                    varbitclient_35731 = 6;
                } else if ((int1 > 100)) {
                    if ((varbitclient_35731 < 5)) {
                        script8899(13134);
                        script4596(13135);
                        varbitclient_35731 = 5;
                    } else if ((int1 > 75)) {
                        if ((varbitclient_35731 < 4)) {
                            script8899(13133);
                            script4596(13134);
                            varbitclient_35731 = 4;
                        } else if ((int1 > 50)) {
                            if ((varbitclient_35731 < 3)) {
                                script8899(13132);
                                script4596(13133);
                                varbitclient_35731 = 3;
                            } else if (((int1 > 25) && (varbitclient_35731 < 2))) {
                                script8899(9059);
                                script4596(13132);
                                varbitclient_35731 = 2;
                            };
                        } else if (((int1 > 25) && (varbitclient_35731 < 2))) {
                            script8899(9059);
                            script4596(13132);
                            varbitclient_35731 = 2;
                        };
                    } else if ((int1 > 50)) {
                        if ((varbitclient_35731 < 3)) {
                            script8899(13132);
                            script4596(13133);
                            varbitclient_35731 = 3;
                        } else if (((int1 > 25) && (varbitclient_35731 < 2))) {
                            script8899(9059);
                            script4596(13132);
                            varbitclient_35731 = 2;
                        };
                    } else if (((int1 > 25) && (varbitclient_35731 < 2))) {
                        script8899(9059);
                        script4596(13132);
                        varbitclient_35731 = 2;
                    };
                } else if ((int1 > 75)) {
                    if ((varbitclient_35731 < 4)) {
                        script8899(13133);
                        script4596(13134);
                        varbitclient_35731 = 4;
                    } else if ((int1 > 50)) {
                        if ((varbitclient_35731 < 3)) {
                            script8899(13132);
                            script4596(13133);
                            varbitclient_35731 = 3;
                        } else if (((int1 > 25) && (varbitclient_35731 < 2))) {
                            script8899(9059);
                            script4596(13132);
                            varbitclient_35731 = 2;
                        };
                    } else if (((int1 > 25) && (varbitclient_35731 < 2))) {
                        script8899(9059);
                        script4596(13132);
                        varbitclient_35731 = 2;
                    };
                } else if ((int1 > 50)) {
                    if ((varbitclient_35731 < 3)) {
                        script8899(13132);
                        script4596(13133);
                        varbitclient_35731 = 3;
                    } else if (((int1 > 25) && (varbitclient_35731 < 2))) {
                        script8899(9059);
                        script4596(13132);
                        varbitclient_35731 = 2;
                    };
                } else if (((int1 > 25) && (varbitclient_35731 < 2))) {
                    script8899(9059);
                    script4596(13132);
                    varbitclient_35731 = 2;
                };
            } else if ((int1 > 100)) {
                if ((varbitclient_35731 < 5)) {
                    script8899(13134);
                    script4596(13135);
                    varbitclient_35731 = 5;
                } else if ((int1 > 75)) {
                    if ((varbitclient_35731 < 4)) {
                        script8899(13133);
                        script4596(13134);
                        varbitclient_35731 = 4;
                    } else if ((int1 > 50)) {
                        if ((varbitclient_35731 < 3)) {
                            script8899(13132);
                            script4596(13133);
                            varbitclient_35731 = 3;
                        } else if (((int1 > 25) && (varbitclient_35731 < 2))) {
                            script8899(9059);
                            script4596(13132);
                            varbitclient_35731 = 2;
                        };
                    } else if (((int1 > 25) && (varbitclient_35731 < 2))) {
                        script8899(9059);
                        script4596(13132);
                        varbitclient_35731 = 2;
                    };
                } else if ((int1 > 50)) {
                    if ((varbitclient_35731 < 3)) {
                        script8899(13132);
                        script4596(13133);
                        varbitclient_35731 = 3;
                    } else if (((int1 > 25) && (varbitclient_35731 < 2))) {
                        script8899(9059);
                        script4596(13132);
                        varbitclient_35731 = 2;
                    };
                } else if (((int1 > 25) && (varbitclient_35731 < 2))) {
                    script8899(9059);
                    script4596(13132);
                    varbitclient_35731 = 2;
                };
            } else if ((int1 > 75)) {
                if ((varbitclient_35731 < 4)) {
                    script8899(13133);
                    script4596(13134);
                    varbitclient_35731 = 4;
                } else if ((int1 > 50)) {
                    if ((varbitclient_35731 < 3)) {
                        script8899(13132);
                        script4596(13133);
                        varbitclient_35731 = 3;
                    } else if (((int1 > 25) && (varbitclient_35731 < 2))) {
                        script8899(9059);
                        script4596(13132);
                        varbitclient_35731 = 2;
                    };
                } else if (((int1 > 25) && (varbitclient_35731 < 2))) {
                    script8899(9059);
                    script4596(13132);
                    varbitclient_35731 = 2;
                };
            } else if ((int1 > 50)) {
                if ((varbitclient_35731 < 3)) {
                    script8899(13132);
                    script4596(13133);
                    varbitclient_35731 = 3;
                } else if (((int1 > 25) && (varbitclient_35731 < 2))) {
                    script8899(9059);
                    script4596(13132);
                    varbitclient_35731 = 2;
                };
            } else if (((int1 > 25) && (varbitclient_35731 < 2))) {
                script8899(9059);
                script4596(13132);
                varbitclient_35731 = 2;
            };
        } else if ((int1 > 125)) {
            if ((varbitclient_35731 < 6)) {
                script8899(13135);
                script4596(13136);
                varbitclient_35731 = 6;
            } else if ((int1 > 100)) {
                if ((varbitclient_35731 < 5)) {
                    script8899(13134);
                    script4596(13135);
                    varbitclient_35731 = 5;
                } else if ((int1 > 75)) {
                    if ((varbitclient_35731 < 4)) {
                        script8899(13133);
                        script4596(13134);
                        varbitclient_35731 = 4;
                    } else if ((int1 > 50)) {
                        if ((varbitclient_35731 < 3)) {
                            script8899(13132);
                            script4596(13133);
                            varbitclient_35731 = 3;
                        } else if (((int1 > 25) && (varbitclient_35731 < 2))) {
                            script8899(9059);
                            script4596(13132);
                            varbitclient_35731 = 2;
                        };
                    } else if (((int1 > 25) && (varbitclient_35731 < 2))) {
                        script8899(9059);
                        script4596(13132);
                        varbitclient_35731 = 2;
                    };
                } else if ((int1 > 50)) {
                    if ((varbitclient_35731 < 3)) {
                        script8899(13132);
                        script4596(13133);
                        varbitclient_35731 = 3;
                    } else if (((int1 > 25) && (varbitclient_35731 < 2))) {
                        script8899(9059);
                        script4596(13132);
                        varbitclient_35731 = 2;
                    };
                } else if (((int1 > 25) && (varbitclient_35731 < 2))) {
                    script8899(9059);
                    script4596(13132);
                    varbitclient_35731 = 2;
                };
            } else if ((int1 > 75)) {
                if ((varbitclient_35731 < 4)) {
                    script8899(13133);
                    script4596(13134);
                    varbitclient_35731 = 4;
                } else if ((int1 > 50)) {
                    if ((varbitclient_35731 < 3)) {
                        script8899(13132);
                        script4596(13133);
                        varbitclient_35731 = 3;
                    } else if (((int1 > 25) && (varbitclient_35731 < 2))) {
                        script8899(9059);
                        script4596(13132);
                        varbitclient_35731 = 2;
                    };
                } else if (((int1 > 25) && (varbitclient_35731 < 2))) {
                    script8899(9059);
                    script4596(13132);
                    varbitclient_35731 = 2;
                };
            } else if ((int1 > 50)) {
                if ((varbitclient_35731 < 3)) {
                    script8899(13132);
                    script4596(13133);
                    varbitclient_35731 = 3;
                } else if (((int1 > 25) && (varbitclient_35731 < 2))) {
                    script8899(9059);
                    script4596(13132);
                    varbitclient_35731 = 2;
                };
            } else if (((int1 > 25) && (varbitclient_35731 < 2))) {
                script8899(9059);
                script4596(13132);
                varbitclient_35731 = 2;
            };
        } else if ((int1 > 100)) {
            if ((varbitclient_35731 < 5)) {
                script8899(13134);
                script4596(13135);
                varbitclient_35731 = 5;
            } else if ((int1 > 75)) {
                if ((varbitclient_35731 < 4)) {
                    script8899(13133);
                    script4596(13134);
                    varbitclient_35731 = 4;
                } else if ((int1 > 50)) {
                    if ((varbitclient_35731 < 3)) {
                        script8899(13132);
                        script4596(13133);
                        varbitclient_35731 = 3;
                    } else if (((int1 > 25) && (varbitclient_35731 < 2))) {
                        script8899(9059);
                        script4596(13132);
                        varbitclient_35731 = 2;
                    };
                } else if (((int1 > 25) && (varbitclient_35731 < 2))) {
                    script8899(9059);
                    script4596(13132);
                    varbitclient_35731 = 2;
                };
            } else if ((int1 > 50)) {
                if ((varbitclient_35731 < 3)) {
                    script8899(13132);
                    script4596(13133);
                    varbitclient_35731 = 3;
                } else if (((int1 > 25) && (varbitclient_35731 < 2))) {
                    script8899(9059);
                    script4596(13132);
                    varbitclient_35731 = 2;
                };
            } else if (((int1 > 25) && (varbitclient_35731 < 2))) {
                script8899(9059);
                script4596(13132);
                varbitclient_35731 = 2;
            };
        } else if ((int1 > 75)) {
            if ((varbitclient_35731 < 4)) {
                script8899(13133);
                script4596(13134);
                varbitclient_35731 = 4;
            } else if ((int1 > 50)) {
                if ((varbitclient_35731 < 3)) {
                    script8899(13132);
                    script4596(13133);
                    varbitclient_35731 = 3;
                } else if (((int1 > 25) && (varbitclient_35731 < 2))) {
                    script8899(9059);
                    script4596(13132);
                    varbitclient_35731 = 2;
                };
            } else if (((int1 > 25) && (varbitclient_35731 < 2))) {
                script8899(9059);
                script4596(13132);
                varbitclient_35731 = 2;
            };
        } else if ((int1 > 50)) {
            if ((varbitclient_35731 < 3)) {
                script8899(13132);
                script4596(13133);
                varbitclient_35731 = 3;
            } else if (((int1 > 25) && (varbitclient_35731 < 2))) {
                script8899(9059);
                script4596(13132);
                varbitclient_35731 = 2;
            };
        } else if (((int1 > 25) && (varbitclient_35731 < 2))) {
            script8899(9059);
            script4596(13132);
            varbitclient_35731 = 2;
        };
    } else if ((int1 > 175)) {
        if ((varbitclient_35731 < 8)) {
            script8899(13137);
            script4596(13138);
            varbitclient_35731 = 8;
        } else if ((int1 > 150)) {
            if ((varbitclient_35731 < 7)) {
                script8899(13136);
                script4596(13137);
                varbitclient_35731 = 7;
            } else if ((int1 > 125)) {
                if ((varbitclient_35731 < 6)) {
                    script8899(13135);
                    script4596(13136);
                    varbitclient_35731 = 6;
                } else if ((int1 > 100)) {
                    if ((varbitclient_35731 < 5)) {
                        script8899(13134);
                        script4596(13135);
                        varbitclient_35731 = 5;
                    } else if ((int1 > 75)) {
                        if ((varbitclient_35731 < 4)) {
                            script8899(13133);
                            script4596(13134);
                            varbitclient_35731 = 4;
                        } else if ((int1 > 50)) {
                            if ((varbitclient_35731 < 3)) {
                                script8899(13132);
                                script4596(13133);
                                varbitclient_35731 = 3;
                            } else if (((int1 > 25) && (varbitclient_35731 < 2))) {
                                script8899(9059);
                                script4596(13132);
                                varbitclient_35731 = 2;
                            };
                        } else if (((int1 > 25) && (varbitclient_35731 < 2))) {
                            script8899(9059);
                            script4596(13132);
                            varbitclient_35731 = 2;
                        };
                    } else if ((int1 > 50)) {
                        if ((varbitclient_35731 < 3)) {
                            script8899(13132);
                            script4596(13133);
                            varbitclient_35731 = 3;
                        } else if (((int1 > 25) && (varbitclient_35731 < 2))) {
                            script8899(9059);
                            script4596(13132);
                            varbitclient_35731 = 2;
                        };
                    } else if (((int1 > 25) && (varbitclient_35731 < 2))) {
                        script8899(9059);
                        script4596(13132);
                        varbitclient_35731 = 2;
                    };
                } else if ((int1 > 75)) {
                    if ((varbitclient_35731 < 4)) {
                        script8899(13133);
                        script4596(13134);
                        varbitclient_35731 = 4;
                    } else if ((int1 > 50)) {
                        if ((varbitclient_35731 < 3)) {
                            script8899(13132);
                            script4596(13133);
                            varbitclient_35731 = 3;
                        } else if (((int1 > 25) && (varbitclient_35731 < 2))) {
                            script8899(9059);
                            script4596(13132);
                            varbitclient_35731 = 2;
                        };
                    } else if (((int1 > 25) && (varbitclient_35731 < 2))) {
                        script8899(9059);
                        script4596(13132);
                        varbitclient_35731 = 2;
                    };
                } else if ((int1 > 50)) {
                    if ((varbitclient_35731 < 3)) {
                        script8899(13132);
                        script4596(13133);
                        varbitclient_35731 = 3;
                    } else if (((int1 > 25) && (varbitclient_35731 < 2))) {
                        script8899(9059);
                        script4596(13132);
                        varbitclient_35731 = 2;
                    };
                } else if (((int1 > 25) && (varbitclient_35731 < 2))) {
                    script8899(9059);
                    script4596(13132);
                    varbitclient_35731 = 2;
                };
            } else if ((int1 > 100)) {
                if ((varbitclient_35731 < 5)) {
                    script8899(13134);
                    script4596(13135);
                    varbitclient_35731 = 5;
                } else if ((int1 > 75)) {
                    if ((varbitclient_35731 < 4)) {
                        script8899(13133);
                        script4596(13134);
                        varbitclient_35731 = 4;
                    } else if ((int1 > 50)) {
                        if ((varbitclient_35731 < 3)) {
                            script8899(13132);
                            script4596(13133);
                            varbitclient_35731 = 3;
                        } else if (((int1 > 25) && (varbitclient_35731 < 2))) {
                            script8899(9059);
                            script4596(13132);
                            varbitclient_35731 = 2;
                        };
                    } else if (((int1 > 25) && (varbitclient_35731 < 2))) {
                        script8899(9059);
                        script4596(13132);
                        varbitclient_35731 = 2;
                    };
                } else if ((int1 > 50)) {
                    if ((varbitclient_35731 < 3)) {
                        script8899(13132);
                        script4596(13133);
                        varbitclient_35731 = 3;
                    } else if (((int1 > 25) && (varbitclient_35731 < 2))) {
                        script8899(9059);
                        script4596(13132);
                        varbitclient_35731 = 2;
                    };
                } else if (((int1 > 25) && (varbitclient_35731 < 2))) {
                    script8899(9059);
                    script4596(13132);
                    varbitclient_35731 = 2;
                };
            } else if ((int1 > 75)) {
                if ((varbitclient_35731 < 4)) {
                    script8899(13133);
                    script4596(13134);
                    varbitclient_35731 = 4;
                } else if ((int1 > 50)) {
                    if ((varbitclient_35731 < 3)) {
                        script8899(13132);
                        script4596(13133);
                        varbitclient_35731 = 3;
                    } else if (((int1 > 25) && (varbitclient_35731 < 2))) {
                        script8899(9059);
                        script4596(13132);
                        varbitclient_35731 = 2;
                    };
                } else if (((int1 > 25) && (varbitclient_35731 < 2))) {
                    script8899(9059);
                    script4596(13132);
                    varbitclient_35731 = 2;
                };
            } else if ((int1 > 50)) {
                if ((varbitclient_35731 < 3)) {
                    script8899(13132);
                    script4596(13133);
                    varbitclient_35731 = 3;
                } else if (((int1 > 25) && (varbitclient_35731 < 2))) {
                    script8899(9059);
                    script4596(13132);
                    varbitclient_35731 = 2;
                };
            } else if (((int1 > 25) && (varbitclient_35731 < 2))) {
                script8899(9059);
                script4596(13132);
                varbitclient_35731 = 2;
            };
        } else if ((int1 > 125)) {
            if ((varbitclient_35731 < 6)) {
                script8899(13135);
                script4596(13136);
                varbitclient_35731 = 6;
            } else if ((int1 > 100)) {
                if ((varbitclient_35731 < 5)) {
                    script8899(13134);
                    script4596(13135);
                    varbitclient_35731 = 5;
                } else if ((int1 > 75)) {
                    if ((varbitclient_35731 < 4)) {
                        script8899(13133);
                        script4596(13134);
                        varbitclient_35731 = 4;
                    } else if ((int1 > 50)) {
                        if ((varbitclient_35731 < 3)) {
                            script8899(13132);
                            script4596(13133);
                            varbitclient_35731 = 3;
                        } else if (((int1 > 25) && (varbitclient_35731 < 2))) {
                            script8899(9059);
                            script4596(13132);
                            varbitclient_35731 = 2;
                        };
                    } else if (((int1 > 25) && (varbitclient_35731 < 2))) {
                        script8899(9059);
                        script4596(13132);
                        varbitclient_35731 = 2;
                    };
                } else if ((int1 > 50)) {
                    if ((varbitclient_35731 < 3)) {
                        script8899(13132);
                        script4596(13133);
                        varbitclient_35731 = 3;
                    } else if (((int1 > 25) && (varbitclient_35731 < 2))) {
                        script8899(9059);
                        script4596(13132);
                        varbitclient_35731 = 2;
                    };
                } else if (((int1 > 25) && (varbitclient_35731 < 2))) {
                    script8899(9059);
                    script4596(13132);
                    varbitclient_35731 = 2;
                };
            } else if ((int1 > 75)) {
                if ((varbitclient_35731 < 4)) {
                    script8899(13133);
                    script4596(13134);
                    varbitclient_35731 = 4;
                } else if ((int1 > 50)) {
                    if ((varbitclient_35731 < 3)) {
                        script8899(13132);
                        script4596(13133);
                        varbitclient_35731 = 3;
                    } else if (((int1 > 25) && (varbitclient_35731 < 2))) {
                        script8899(9059);
                        script4596(13132);
                        varbitclient_35731 = 2;
                    };
                } else if (((int1 > 25) && (varbitclient_35731 < 2))) {
                    script8899(9059);
                    script4596(13132);
                    varbitclient_35731 = 2;
                };
            } else if ((int1 > 50)) {
                if ((varbitclient_35731 < 3)) {
                    script8899(13132);
                    script4596(13133);
                    varbitclient_35731 = 3;
                } else if (((int1 > 25) && (varbitclient_35731 < 2))) {
                    script8899(9059);
                    script4596(13132);
                    varbitclient_35731 = 2;
                };
            } else if (((int1 > 25) && (varbitclient_35731 < 2))) {
                script8899(9059);
                script4596(13132);
                varbitclient_35731 = 2;
            };
        } else if ((int1 > 100)) {
            if ((varbitclient_35731 < 5)) {
                script8899(13134);
                script4596(13135);
                varbitclient_35731 = 5;
            } else if ((int1 > 75)) {
                if ((varbitclient_35731 < 4)) {
                    script8899(13133);
                    script4596(13134);
                    varbitclient_35731 = 4;
                } else if ((int1 > 50)) {
                    if ((varbitclient_35731 < 3)) {
                        script8899(13132);
                        script4596(13133);
                        varbitclient_35731 = 3;
                    } else if (((int1 > 25) && (varbitclient_35731 < 2))) {
                        script8899(9059);
                        script4596(13132);
                        varbitclient_35731 = 2;
                    };
                } else if (((int1 > 25) && (varbitclient_35731 < 2))) {
                    script8899(9059);
                    script4596(13132);
                    varbitclient_35731 = 2;
                };
            } else if ((int1 > 50)) {
                if ((varbitclient_35731 < 3)) {
                    script8899(13132);
                    script4596(13133);
                    varbitclient_35731 = 3;
                } else if (((int1 > 25) && (varbitclient_35731 < 2))) {
                    script8899(9059);
                    script4596(13132);
                    varbitclient_35731 = 2;
                };
            } else if (((int1 > 25) && (varbitclient_35731 < 2))) {
                script8899(9059);
                script4596(13132);
                varbitclient_35731 = 2;
            };
        } else if ((int1 > 75)) {
            if ((varbitclient_35731 < 4)) {
                script8899(13133);
                script4596(13134);
                varbitclient_35731 = 4;
            } else if ((int1 > 50)) {
                if ((varbitclient_35731 < 3)) {
                    script8899(13132);
                    script4596(13133);
                    varbitclient_35731 = 3;
                } else if (((int1 > 25) && (varbitclient_35731 < 2))) {
                    script8899(9059);
                    script4596(13132);
                    varbitclient_35731 = 2;
                };
            } else if (((int1 > 25) && (varbitclient_35731 < 2))) {
                script8899(9059);
                script4596(13132);
                varbitclient_35731 = 2;
            };
        } else if ((int1 > 50)) {
            if ((varbitclient_35731 < 3)) {
                script8899(13132);
                script4596(13133);
                varbitclient_35731 = 3;
            } else if (((int1 > 25) && (varbitclient_35731 < 2))) {
                script8899(9059);
                script4596(13132);
                varbitclient_35731 = 2;
            };
        } else if (((int1 > 25) && (varbitclient_35731 < 2))) {
            script8899(9059);
            script4596(13132);
            varbitclient_35731 = 2;
        };
    } else if ((int1 > 150)) {
        if ((varbitclient_35731 < 7)) {
            script8899(13136);
            script4596(13137);
            varbitclient_35731 = 7;
        } else if ((int1 > 125)) {
            if ((varbitclient_35731 < 6)) {
                script8899(13135);
                script4596(13136);
                varbitclient_35731 = 6;
            } else if ((int1 > 100)) {
                if ((varbitclient_35731 < 5)) {
                    script8899(13134);
                    script4596(13135);
                    varbitclient_35731 = 5;
                } else if ((int1 > 75)) {
                    if ((varbitclient_35731 < 4)) {
                        script8899(13133);
                        script4596(13134);
                        varbitclient_35731 = 4;
                    } else if ((int1 > 50)) {
                        if ((varbitclient_35731 < 3)) {
                            script8899(13132);
                            script4596(13133);
                            varbitclient_35731 = 3;
                        } else if (((int1 > 25) && (varbitclient_35731 < 2))) {
                            script8899(9059);
                            script4596(13132);
                            varbitclient_35731 = 2;
                        };
                    } else if (((int1 > 25) && (varbitclient_35731 < 2))) {
                        script8899(9059);
                        script4596(13132);
                        varbitclient_35731 = 2;
                    };
                } else if ((int1 > 50)) {
                    if ((varbitclient_35731 < 3)) {
                        script8899(13132);
                        script4596(13133);
                        varbitclient_35731 = 3;
                    } else if (((int1 > 25) && (varbitclient_35731 < 2))) {
                        script8899(9059);
                        script4596(13132);
                        varbitclient_35731 = 2;
                    };
                } else if (((int1 > 25) && (varbitclient_35731 < 2))) {
                    script8899(9059);
                    script4596(13132);
                    varbitclient_35731 = 2;
                };
            } else if ((int1 > 75)) {
                if ((varbitclient_35731 < 4)) {
                    script8899(13133);
                    script4596(13134);
                    varbitclient_35731 = 4;
                } else if ((int1 > 50)) {
                    if ((varbitclient_35731 < 3)) {
                        script8899(13132);
                        script4596(13133);
                        varbitclient_35731 = 3;
                    } else if (((int1 > 25) && (varbitclient_35731 < 2))) {
                        script8899(9059);
                        script4596(13132);
                        varbitclient_35731 = 2;
                    };
                } else if (((int1 > 25) && (varbitclient_35731 < 2))) {
                    script8899(9059);
                    script4596(13132);
                    varbitclient_35731 = 2;
                };
            } else if ((int1 > 50)) {
                if ((varbitclient_35731 < 3)) {
                    script8899(13132);
                    script4596(13133);
                    varbitclient_35731 = 3;
                } else if (((int1 > 25) && (varbitclient_35731 < 2))) {
                    script8899(9059);
                    script4596(13132);
                    varbitclient_35731 = 2;
                };
            } else if (((int1 > 25) && (varbitclient_35731 < 2))) {
                script8899(9059);
                script4596(13132);
                varbitclient_35731 = 2;
            };
        } else if ((int1 > 100)) {
            if ((varbitclient_35731 < 5)) {
                script8899(13134);
                script4596(13135);
                varbitclient_35731 = 5;
            } else if ((int1 > 75)) {
                if ((varbitclient_35731 < 4)) {
                    script8899(13133);
                    script4596(13134);
                    varbitclient_35731 = 4;
                } else if ((int1 > 50)) {
                    if ((varbitclient_35731 < 3)) {
                        script8899(13132);
                        script4596(13133);
                        varbitclient_35731 = 3;
                    } else if (((int1 > 25) && (varbitclient_35731 < 2))) {
                        script8899(9059);
                        script4596(13132);
                        varbitclient_35731 = 2;
                    };
                } else if (((int1 > 25) && (varbitclient_35731 < 2))) {
                    script8899(9059);
                    script4596(13132);
                    varbitclient_35731 = 2;
                };
            } else if ((int1 > 50)) {
                if ((varbitclient_35731 < 3)) {
                    script8899(13132);
                    script4596(13133);
                    varbitclient_35731 = 3;
                } else if (((int1 > 25) && (varbitclient_35731 < 2))) {
                    script8899(9059);
                    script4596(13132);
                    varbitclient_35731 = 2;
                };
            } else if (((int1 > 25) && (varbitclient_35731 < 2))) {
                script8899(9059);
                script4596(13132);
                varbitclient_35731 = 2;
            };
        } else if ((int1 > 75)) {
            if ((varbitclient_35731 < 4)) {
                script8899(13133);
                script4596(13134);
                varbitclient_35731 = 4;
            } else if ((int1 > 50)) {
                if ((varbitclient_35731 < 3)) {
                    script8899(13132);
                    script4596(13133);
                    varbitclient_35731 = 3;
                } else if (((int1 > 25) && (varbitclient_35731 < 2))) {
                    script8899(9059);
                    script4596(13132);
                    varbitclient_35731 = 2;
                };
            } else if (((int1 > 25) && (varbitclient_35731 < 2))) {
                script8899(9059);
                script4596(13132);
                varbitclient_35731 = 2;
            };
        } else if ((int1 > 50)) {
            if ((varbitclient_35731 < 3)) {
                script8899(13132);
                script4596(13133);
                varbitclient_35731 = 3;
            } else if (((int1 > 25) && (varbitclient_35731 < 2))) {
                script8899(9059);
                script4596(13132);
                varbitclient_35731 = 2;
            };
        } else if (((int1 > 25) && (varbitclient_35731 < 2))) {
            script8899(9059);
            script4596(13132);
            varbitclient_35731 = 2;
        };
    } else if ((int1 > 125)) {
        if ((varbitclient_35731 < 6)) {
            script8899(13135);
            script4596(13136);
            varbitclient_35731 = 6;
        } else if ((int1 > 100)) {
            if ((varbitclient_35731 < 5)) {
                script8899(13134);
                script4596(13135);
                varbitclient_35731 = 5;
            } else if ((int1 > 75)) {
                if ((varbitclient_35731 < 4)) {
                    script8899(13133);
                    script4596(13134);
                    varbitclient_35731 = 4;
                } else if ((int1 > 50)) {
                    if ((varbitclient_35731 < 3)) {
                        script8899(13132);
                        script4596(13133);
                        varbitclient_35731 = 3;
                    } else if (((int1 > 25) && (varbitclient_35731 < 2))) {
                        script8899(9059);
                        script4596(13132);
                        varbitclient_35731 = 2;
                    };
                } else if (((int1 > 25) && (varbitclient_35731 < 2))) {
                    script8899(9059);
                    script4596(13132);
                    varbitclient_35731 = 2;
                };
            } else if ((int1 > 50)) {
                if ((varbitclient_35731 < 3)) {
                    script8899(13132);
                    script4596(13133);
                    varbitclient_35731 = 3;
                } else if (((int1 > 25) && (varbitclient_35731 < 2))) {
                    script8899(9059);
                    script4596(13132);
                    varbitclient_35731 = 2;
                };
            } else if (((int1 > 25) && (varbitclient_35731 < 2))) {
                script8899(9059);
                script4596(13132);
                varbitclient_35731 = 2;
            };
        } else if ((int1 > 75)) {
            if ((varbitclient_35731 < 4)) {
                script8899(13133);
                script4596(13134);
                varbitclient_35731 = 4;
            } else if ((int1 > 50)) {
                if ((varbitclient_35731 < 3)) {
                    script8899(13132);
                    script4596(13133);
                    varbitclient_35731 = 3;
                } else if (((int1 > 25) && (varbitclient_35731 < 2))) {
                    script8899(9059);
                    script4596(13132);
                    varbitclient_35731 = 2;
                };
            } else if (((int1 > 25) && (varbitclient_35731 < 2))) {
                script8899(9059);
                script4596(13132);
                varbitclient_35731 = 2;
            };
        } else if ((int1 > 50)) {
            if ((varbitclient_35731 < 3)) {
                script8899(13132);
                script4596(13133);
                varbitclient_35731 = 3;
            } else if (((int1 > 25) && (varbitclient_35731 < 2))) {
                script8899(9059);
                script4596(13132);
                varbitclient_35731 = 2;
            };
        } else if (((int1 > 25) && (varbitclient_35731 < 2))) {
            script8899(9059);
            script4596(13132);
            varbitclient_35731 = 2;
        };
    } else if ((int1 > 100)) {
        if ((varbitclient_35731 < 5)) {
            script8899(13134);
            script4596(13135);
            varbitclient_35731 = 5;
        } else if ((int1 > 75)) {
            if ((varbitclient_35731 < 4)) {
                script8899(13133);
                script4596(13134);
                varbitclient_35731 = 4;
            } else if ((int1 > 50)) {
                if ((varbitclient_35731 < 3)) {
                    script8899(13132);
                    script4596(13133);
                    varbitclient_35731 = 3;
                } else if (((int1 > 25) && (varbitclient_35731 < 2))) {
                    script8899(9059);
                    script4596(13132);
                    varbitclient_35731 = 2;
                };
            } else if (((int1 > 25) && (varbitclient_35731 < 2))) {
                script8899(9059);
                script4596(13132);
                varbitclient_35731 = 2;
            };
        } else if ((int1 > 50)) {
            if ((varbitclient_35731 < 3)) {
                script8899(13132);
                script4596(13133);
                varbitclient_35731 = 3;
            } else if (((int1 > 25) && (varbitclient_35731 < 2))) {
                script8899(9059);
                script4596(13132);
                varbitclient_35731 = 2;
            };
        } else if (((int1 > 25) && (varbitclient_35731 < 2))) {
            script8899(9059);
            script4596(13132);
            varbitclient_35731 = 2;
        };
    } else if ((int1 > 75)) {
        if ((varbitclient_35731 < 4)) {
            script8899(13133);
            script4596(13134);
            varbitclient_35731 = 4;
        } else if ((int1 > 50)) {
            if ((varbitclient_35731 < 3)) {
                script8899(13132);
                script4596(13133);
                varbitclient_35731 = 3;
            } else if (((int1 > 25) && (varbitclient_35731 < 2))) {
                script8899(9059);
                script4596(13132);
                varbitclient_35731 = 2;
            };
        } else if (((int1 > 25) && (varbitclient_35731 < 2))) {
            script8899(9059);
            script4596(13132);
            varbitclient_35731 = 2;
        };
    } else if ((int1 > 50)) {
        if ((varbitclient_35731 < 3)) {
            script8899(13132);
            script4596(13133);
            varbitclient_35731 = 3;
        } else if (((int1 > 25) && (varbitclient_35731 < 2))) {
            script8899(9059);
            script4596(13132);
            varbitclient_35731 = 2;
        };
    } else if (((int1 > 25) && (varbitclient_35731 < 2))) {
        script8899(9059);
        script4596(13132);
        varbitclient_35731 = 2;
    };
    return;
}