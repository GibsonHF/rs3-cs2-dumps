//
function script9439(int0: int): void {
    IF_SETHIDE(true, comp(718, 8));
    IF_SETHIDE(true, comp(718, 13));
    IF_SETHIDE(true, comp(718, 18));
    switch (int0) {
        case 0: {
            break;
        }
        case 1: {
            IF_SETHIDE(false, comp(718, 8));
            break;
        }
        case 2: {
            IF_SETHIDE(false, comp(718, 13));
            break;
        }
        case 3: {
            IF_SETHIDE(false, comp(718, 18));
            break;
        }
    };
    var int1 = 0;
    if ((varclient_3860 >= varclient_3867)) {
        int1 = 1;
    } else if ((varclient_3861 >= varclient_3867)) {
        int1 = 2;
    } else if ((varclient_3862 >= varclient_3867)) {
        int1 = 3;
    };
    if ((int1 != 0)) {
        IF_SETHIDE(false, comp(718, 62));
    } else if (((int0 == 0) || (varplayer_3982 == 0))) {
        IF_SETHIDE(false, comp(718, 62));
    } else {
        IF_SETHIDE(true, comp(718, 62));
    };
    script9441(comp(718, 25));
    script9441(comp(718, 34));
    script9441(comp(718, 43));
    if ((int1 == 1)) {
        script7794(comp(718, 47), 52671 as struct);
    } else {
        script7794(comp(718, 47), 21362 as struct);
    };
    if ((int1 == 2)) {
        script7794(comp(718, 48), 52671 as struct);
    } else {
        script7794(comp(718, 48), 21362 as struct);
    };
    if ((int1 == 3)) {
        script7794(comp(718, 49), 52671 as struct);
    } else {
        script7794(comp(718, 49), 21362 as struct);
    };
    if ((int1 == 1)) {
        IF_SETCOLOUR(16777215, comp(718, 50));
    } else {
        IF_SETCOLOUR(11456736, comp(718, 50));
    };
    if ((int1 == 2)) {
        IF_SETCOLOUR(16777215, comp(718, 51));
    } else {
        IF_SETCOLOUR(11456736, comp(718, 51));
    };
    if ((int1 == 3)) {
        IF_SETCOLOUR(16777215, comp(718, 52));
    } else {
        IF_SETCOLOUR(11456736, comp(718, 52));
    };
    switch (int0) {
        case 0: {
            if ((int1 != 0)) {
                switch (varbitplayer_21071) {
                    case 0: {
                        IF_SETTEXT("Head component complete.", comp(718, 55));
                        switch (int1) {
                            case 1: {
                                IF_SETTEXT("The next golem will have an offensive head.", comp(718, 56));
                                break;
                            }
                            case 2: {
                                IF_SETTEXT("The next golem will have a defensive head.", comp(718, 56));
                                break;
                            }
                            case 3: {
                                IF_SETTEXT("The next golem will have a special head.", comp(718, 56));
                                break;
                            }
                        };
                        break;
                    }
                    case 1: {
                        IF_SETTEXT("Torso component complete.", comp(718, 55));
                        switch (int1) {
                            case 1: {
                                IF_SETTEXT("The next golem will have an offensive torso.", comp(718, 56));
                                break;
                            }
                            case 2: {
                                IF_SETTEXT("The next golem will have a defensive torso.", comp(718, 56));
                                break;
                            }
                            case 3: {
                                IF_SETTEXT("The next golem will have a special torso.", comp(718, 56));
                                break;
                            }
                        };
                        break;
                    }
                    case 2: {
                        IF_SETTEXT("Leg component complete.", comp(718, 55));
                        switch (int1) {
                            case 1: {
                                IF_SETTEXT("The next golem will have offensive legs.", comp(718, 56));
                                break;
                            }
                            case 2: {
                                IF_SETTEXT("The next golem will have defensive legs.", comp(718, 56));
                                break;
                            }
                            case 3: {
                                IF_SETTEXT("The next golem will have special legs.", comp(718, 56));
                                break;
                            }
                        };
                        break;
                    }
                    case 3: {
                        IF_SETTEXT("Arm component complete.", comp(718, 55));
                        switch (int1) {
                            case 1: {
                                IF_SETTEXT("The next golem will have offensive arms.", comp(718, 56));
                                break;
                            }
                            case 2: {
                                IF_SETTEXT("The next golem will have defensive arms.", comp(718, 56));
                                break;
                            }
                            case 3: {
                                IF_SETTEXT("The next golem will have special arms.", comp(718, 56));
                                break;
                            }
                        };
                        break;
                    }
                };
            } else {
                IF_SETTEXT("Select a component:", comp(718, 55));
                IF_SETTEXT("Select one of the three components above for more information.", comp(718, 56));
            };
            break;
        }
        case 1: {
            switch (varbitplayer_21071) {
                case 0: {
                    IF_SETTEXT("Offensive head", comp(718, 55));
                    IF_SETTEXT("This head will give the golem increased attacking power and speed.", comp(718, 56));
                    break;
                }
                case 1: {
                    IF_SETTEXT("Offensive torso", comp(718, 55));
                    IF_SETTEXT("This torso will give the golem increased attacking power and speed.", comp(718, 56));
                    break;
                }
                case 2: {
                    IF_SETTEXT("Offensive legs", comp(718, 55));
                    IF_SETTEXT("These legs will give the golem increased attacking power and speed.", comp(718, 56));
                    break;
                }
                case 3: {
                    IF_SETTEXT("Offensive arms", comp(718, 55));
                    IF_SETTEXT("These arms will give the golem increased attacking power and speed.", comp(718, 56));
                    break;
                }
            };
            break;
        }
        case 2: {
            switch (varbitplayer_21071) {
                case 0: {
                    IF_SETTEXT("Defensive head", comp(718, 55));
                    IF_SETTEXT("This gives the golem increased armour and lifespan.", comp(718, 56));
                    break;
                }
                case 1: {
                    IF_SETTEXT("Defensive torso", comp(718, 55));
                    IF_SETTEXT("This gives the golem increased armour and lifespan.", comp(718, 56));
                    break;
                }
                case 2: {
                    IF_SETTEXT("Defensive legs", comp(718, 55));
                    IF_SETTEXT("This gives the golem increased armour and lifespan.", comp(718, 56));
                    break;
                }
                case 3: {
                    IF_SETTEXT("Defensive arms", comp(718, 55));
                    IF_SETTEXT("This gives the golem increased armour and lifespan.", comp(718, 56));
                    break;
                }
            };
            break;
        }
        case 3: {
            switch (varbitplayer_21071) {
                case 0: {
                    IF_SETTEXT("Special head", comp(718, 55));
                    IF_SETTEXT("A golem with a special head uses a rallying cry special ability, which aids allies in defending and repairing caravans.", comp(718, 56));
                    break;
                }
                case 1: {
                    IF_SETTEXT("Special torso", comp(718, 55));
                    IF_SETTEXT("A golem with a special torso has a healing aura, which heals nearby allies.", comp(718, 56));
                    break;
                }
                case 2: {
                    IF_SETTEXT("Special legs", comp(718, 55));
                    IF_SETTEXT("A golem with special legs may perform a special attack which stuns nearby enemies. It also has increased attack speed.", comp(718, 56));
                    break;
                }
                case 3: {
                    IF_SETTEXT("Special arms", comp(718, 55));
                    IF_SETTEXT("A golem with special arms uses a gather special ability, causing nearby allies to collect resources more quickly.", comp(718, 56));
                    break;
                }
            };
            break;
        }
    };
    return;
}