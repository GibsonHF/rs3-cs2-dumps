//
function script9466(): [cs2enum, cs2enum] {
    var int0 = -1 as cs2enum;
    var int1 = -1 as cs2enum;
    if ((MAP_MEMBERS() == 1)) {
        switch (script14327()) {
            case 2: {
                int0 = 2989 as cs2enum;
                int1 = 2990 as cs2enum;
                break;
            }
            case 3: {
                int0 = 2991 as cs2enum;
                int1 = 2992 as cs2enum;
                break;
            }
            case 4: {
                int0 = 2993 as cs2enum;
                int1 = 2994 as cs2enum;
                break;
            }
            default: {
                int0 = 2987 as cs2enum;
                int1 = 2988 as cs2enum;
                break;
            }
        };
    } else {
        switch (script14327()) {
            case 2: {
                int0 = 2997 as cs2enum;
                int1 = 2998 as cs2enum;
                break;
            }
            case 3: {
                int0 = 2999 as cs2enum;
                int1 = 3000 as cs2enum;
                break;
            }
            case 4: {
                int0 = 3001 as cs2enum;
                int1 = 3002 as cs2enum;
                break;
            }
            default: {
                int0 = 2995 as cs2enum;
                int1 = 2996 as cs2enum;
                break;
            }
        };
    };
    return [int0, int1];
}