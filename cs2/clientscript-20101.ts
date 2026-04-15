//
function script20101(): unknown_int {
    if (((DATE_RUNEDAY() >= 8573) && (DATE_RUNEDAY() < 8601))) {
        switch (script11975()) {
            case 1:
            case 2: {
                return 1;
            }
            case 3:
            case 4: {
                return 2;
            }
        };
    };
    return 3;
}