//
function script10979(int0: int): string {
    switch (int0) {
        case 1: {
            return "<col=FFFFFF>";
        }
        case 2: {
            return "<col=FFFF00>";
        }
        case 3: {
            return "<col=FF6600>";
        }
        case 4: {
            return "<col=FF0000>";
        }
        case 5: {
            return "<col=B32AB6>";
        }
        case 6: {
            return "<col=969696>";
        }
        case 7: {
            return "<col=B065FF>";
        }
    };
    script12478(`Unsupported rarity : ${inttostring(int0, 10)}`);
    return "";
}