//
function script11343(int0: int, int1: int): [graphic, string] {
    switch (int0) {
        case 1: {
            switch (int1) {
                case 0: {
                    return [14873 as graphic, "Melee Abilities"];
                }
            };
            break;
        }
        case 2: {
            switch (int1) {
                case 0: {
                    return [14875 as graphic, "Ranged Abilities"];
                }
            };
            break;
        }
        case 3: {
            if ((varbitplayer_27168 == 1)) {
                switch (int1) {
                    case 0: {
                        return [14367 as graphic, "Magic Spells (Combat)"];
                    }
                    case 1: {
                        return [14333 as graphic, "Magic Spells (Teleport)"];
                    }
                    case 2: {
                        return [14379 as graphic, "Magic Spells (Skilling)"];
                    }
                };
            } else {
                switch (int1) {
                    case 0: {
                        return [14876 as graphic, "Magic Abilities"];
                    }
                    case 1: {
                        return [14367 as graphic, "Magic Spells (Combat)"];
                    }
                    case 2: {
                        return [14333 as graphic, "Magic Spells (Teleport)"];
                    }
                    case 3: {
                        return [14379 as graphic, "Magic Spells (Skilling)"];
                    }
                };
            };
            break;
        }
        case 8: {
            if ((int1 == 0)) {
                return [14876 as graphic, "Magic Abilities"];
            };
            break;
        }
        case 9: {
            if ((int1 == 0)) {
                return [14367 as graphic, "Magic Spells (Combat)"];
            };
            break;
        }
        case 10: {
            if ((int1 == 0)) {
                return [14333 as graphic, "Magic Spells (Teleport)"];
            };
            break;
        }
        case 11: {
            if ((int1 == 0)) {
                return [14379 as graphic, "Magic Spells (Skilling)"];
            };
            break;
        }
        case 4: {
            switch (int1) {
                case 0: {
                    return [31895 as graphic, "Necromancy Abilities"];
                }
                case 1: {
                    return [31896 as graphic, "Necromancy Incantations"];
                }
            };
            break;
        }
        case 14: {
            if ((int1 == 0)) {
                return [31895 as graphic, "Necromancy Abilities"];
            };
            break;
        }
        case 15: {
            if ((int1 == 0)) {
                return [31896 as graphic, "Necromancy Incantations"];
            };
            break;
        }
        case 5: {
            switch (int1) {
                case 0: {
                    return [14877 as graphic, "Defence Abilities"];
                }
                case 1: {
                    return [14878 as graphic, "Constitution Abilities"];
                }
            };
            break;
        }
        case 12: {
            if ((int1 == 0)) {
                return [14877 as graphic, "Defence Abilities"];
            };
            break;
        }
        case 13: {
            if ((int1 == 0)) {
                return [14878 as graphic, "Constitution Abilities"];
            };
            break;
        }
    };
    return [-1 as graphic, ""];
}