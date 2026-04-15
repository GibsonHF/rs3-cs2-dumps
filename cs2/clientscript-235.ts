//
function script235(int0: graphic, int1: graphic, int2: graphic, int3: graphic): graphic {
    switch (MAP_LANG()) {
        case 0: {
            return int0;
        }
        case 1: {
            return int1;
        }
        case 2: {
            return int2;
        }
        case 3: {
            return int3;
        }
    };
    return int0;
}