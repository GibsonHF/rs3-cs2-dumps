//
function script9439(int0: number): void {
    IF_SETHIDE(1, 47054856);
    IF_SETHIDE(1, 47054861);
    IF_SETHIDE(1, 47054866);
    switch (int0) {
        case 0: {
            break;
        }
        case 1: {
            IF_SETHIDE(0, 47054856);
            break;
        }
        case 2: {
            IF_SETHIDE(0, 47054861);
            break;
        }
        case 3: {
            IF_SETHIDE(0, 47054866);
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
        IF_SETHIDE(0, 47054910);
    } else if (((int0 == 0) || (varplayer_3982 == 0))) {
        IF_SETHIDE(0, 47054910);
    } else {
        IF_SETHIDE(1, 47054910);
    };
    script9441(47054873);
    script9441(47054882);
    script9441(47054891);
    if ((int1 == 1)) {
        script7794(47054895, 52671);
    } else {
        script7794(47054895, 21362);
    };
    if ((int1 == 2)) {
        script7794(47054896, 52671);
    } else {
        script7794(47054896, 21362);
    };
    if ((int1 == 3)) {
        script7794(47054897, 52671);
    } else {
        script7794(47054897, 21362);
    };
    if ((int1 == 1)) {
        IF_SETCOLOUR(16777215, 47054898);
    } else {
        IF_SETCOLOUR(11456736, 47054898);
    };
    if ((int1 == 2)) {
        IF_SETCOLOUR(16777215, 47054899);
    } else {
        IF_SETCOLOUR(11456736, 47054899);
    };
    if ((int1 == 3)) {
        IF_SETCOLOUR(16777215, 47054900);
    } else {
        IF_SETCOLOUR(11456736, 47054900);
    };
    switch (int0) {
        case 0: {
            if ((int1 != 0)) {
                switch (varbitplayer_21071) {
                    case 0: {
                        IF_SETTEXT("Head component complete.", 47054903);
                        switch (int1) {
                            case 1: {
                                IF_SETTEXT("The next golem will have an offensive head.", 47054904);
                                break;
                            }
                            case 2: {
                                IF_SETTEXT("The next golem will have a defensive head.", 47054904);
                                break;
                            }
                            case 3: {
                                IF_SETTEXT("The next golem will have a special head.", 47054904);
                                break;
                            }
                        };
                        break;
                    }
                    case 1: {
                        IF_SETTEXT("Torso component complete.", 47054903);
                        switch (int1) {
                            case 1: {
                                IF_SETTEXT("The next golem will have an offensive torso.", 47054904);
                                break;
                            }
                            case 2: {
                                IF_SETTEXT("The next golem will have a defensive torso.", 47054904);
                                break;
                            }
                            case 3: {
                                IF_SETTEXT("The next golem will have a special torso.", 47054904);
                                break;
                            }
                        };
                        break;
                    }
                    case 2: {
                        IF_SETTEXT("Leg component complete.", 47054903);
                        switch (int1) {
                            case 1: {
                                IF_SETTEXT("The next golem will have offensive legs.", 47054904);
                                break;
                            }
                            case 2: {
                                IF_SETTEXT("The next golem will have defensive legs.", 47054904);
                                break;
                            }
                            case 3: {
                                IF_SETTEXT("The next golem will have special legs.", 47054904);
                                break;
                            }
                        };
                        break;
                    }
                    case 3: {
                        IF_SETTEXT("Arm component complete.", 47054903);
                        switch (int1) {
                            case 1: {
                                IF_SETTEXT("The next golem will have offensive arms.", 47054904);
                                break;
                            }
                            case 2: {
                                IF_SETTEXT("The next golem will have defensive arms.", 47054904);
                                break;
                            }
                            case 3: {
                                IF_SETTEXT("The next golem will have special arms.", 47054904);
                                break;
                            }
                        };
                        break;
                    }
                };
            } else {
                IF_SETTEXT("Select a component:", 47054903);
                IF_SETTEXT("Select one of the three components above for more information.", 47054904);
            };
            break;
        }
        case 1: {
            switch (varbitplayer_21071) {
                case 0: {
                    IF_SETTEXT("Offensive head", 47054903);
                    IF_SETTEXT("This head will give the golem increased attacking power and speed.", 47054904);
                    break;
                }
                case 1: {
                    IF_SETTEXT("Offensive torso", 47054903);
                    IF_SETTEXT("This torso will give the golem increased attacking power and speed.", 47054904);
                    break;
                }
                case 2: {
                    IF_SETTEXT("Offensive legs", 47054903);
                    IF_SETTEXT("These legs will give the golem increased attacking power and speed.", 47054904);
                    break;
                }
                case 3: {
                    IF_SETTEXT("Offensive arms", 47054903);
                    IF_SETTEXT("These arms will give the golem increased attacking power and speed.", 47054904);
                    break;
                }
            };
            break;
        }
        case 2: {
            switch (varbitplayer_21071) {
                case 0: {
                    IF_SETTEXT("Defensive head", 47054903);
                    IF_SETTEXT("This gives the golem increased armour and lifespan.", 47054904);
                    break;
                }
                case 1: {
                    IF_SETTEXT("Defensive torso", 47054903);
                    IF_SETTEXT("This gives the golem increased armour and lifespan.", 47054904);
                    break;
                }
                case 2: {
                    IF_SETTEXT("Defensive legs", 47054903);
                    IF_SETTEXT("This gives the golem increased armour and lifespan.", 47054904);
                    break;
                }
                case 3: {
                    IF_SETTEXT("Defensive arms", 47054903);
                    IF_SETTEXT("This gives the golem increased armour and lifespan.", 47054904);
                    break;
                }
            };
            break;
        }
        case 3: {
            switch (varbitplayer_21071) {
                case 0: {
                    IF_SETTEXT("Special head", 47054903);
                    IF_SETTEXT("A golem with a special head uses a rallying cry special ability, which aids allies in defending and repairing caravans.", 47054904);
                    break;
                }
                case 1: {
                    IF_SETTEXT("Special torso", 47054903);
                    IF_SETTEXT("A golem with a special torso has a healing aura, which heals nearby allies.", 47054904);
                    break;
                }
                case 2: {
                    IF_SETTEXT("Special legs", 47054903);
                    IF_SETTEXT("A golem with special legs may perform a special attack which stuns nearby enemies. It also has increased attack speed.", 47054904);
                    break;
                }
                case 3: {
                    IF_SETTEXT("Special arms", 47054903);
                    IF_SETTEXT("A golem with special arms uses a gather special ability, causing nearby allies to collect resources more quickly.", 47054904);
                    break;
                }
            };
            break;
        }
    };
    return;
}