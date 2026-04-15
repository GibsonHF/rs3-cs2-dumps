//
function script7386(): [cs2enum, cs2enum, cs2enum] {
    switch (MAP_LANG()) {
        case 0: {
            return [1014 as cs2enum, 1015 as cs2enum, 1018 as cs2enum];
        }
        case 2: {
            return [7177 as cs2enum, 7178 as cs2enum, 7181 as cs2enum];
        }
        case 1: {
            return [7172 as cs2enum, 7173 as cs2enum, 7176 as cs2enum];
        }
        case 3: {
            return [7165 as cs2enum, 7166 as cs2enum, 7169 as cs2enum];
        }
        case 6: {
            return [7436 as cs2enum, 7437 as cs2enum, 7440 as cs2enum];
        }
    };
    return [-1 as cs2enum, -1 as cs2enum, -1 as cs2enum];
}