//
function script11343(int0: number, int1: number): [number, string] {
    switch (int0) {
        case 1: {
            switch (int1) {
                case 0: {
                    return [14873, "Melee Abilities"];
                }
            };
            break;
        }
        case 2: {
            switch (int1) {
                case 0: {
                    return [14875, "Ranged Abilities"];
                }
            };
            break;
        }
        case 3: {
            if ((varbitplayer_27168 == 1)) {
                switch (int1) {
                    case 0: {
                        return [14367, "Magic Spells (Combat)"];
                    }
                    case 1: {
                        return [14333, "Magic Spells (Teleport)"];
                    }
                    case 2: {
                        return [14379, "Magic Spells (Skilling)"];
                    }
                };
            } else {
                switch (int1) {
                    case 0: {
                        return [14876, "Magic Abilities"];
                    }
                    case 1: {
                        return [14367, "Magic Spells (Combat)"];
                    }
                    case 2: {
                        return [14333, "Magic Spells (Teleport)"];
                    }
                    case 3: {
                        return [14379, "Magic Spells (Skilling)"];
                    }
                };
            };
            break;
        }
        case 8: {
            if ((int1 == 0)) {
                return [14876, "Magic Abilities"];
            };
            break;
        }
        case 9: {
            if ((int1 == 0)) {
                return [14367, "Magic Spells (Combat)"];
            };
            break;
        }
        case 10: {
            if ((int1 == 0)) {
                return [14333, "Magic Spells (Teleport)"];
            };
            break;
        }
        case 11: {
            if ((int1 == 0)) {
                return [14379, "Magic Spells (Skilling)"];
            };
            break;
        }
        case 4: {
            switch (int1) {
                case 0: {
                    return [31895, "Necromancy Abilities"];
                }
                case 1: {
                    return [31896, "Necromancy Incantations"];
                }
            };
            break;
        }
        case 14: {
            if ((int1 == 0)) {
                return [31895, "Necromancy Abilities"];
            };
            break;
        }
        case 15: {
            if ((int1 == 0)) {
                return [31896, "Necromancy Incantations"];
            };
            break;
        }
        case 5: {
            switch (int1) {
                case 0: {
                    return [14877, "Defence Abilities"];
                }
                case 1: {
                    return [14878, "Constitution Abilities"];
                }
            };
            break;
        }
        case 12: {
            if ((int1 == 0)) {
                return [14877, "Defence Abilities"];
            };
            break;
        }
        case 13: {
            if ((int1 == 0)) {
                return [14878, "Constitution Abilities"];
            };
            break;
        }
    };
    return [-1, ""];
}