//
function script19314(int0: int): unknown_string {
    switch (int0) {
        case 0: {
            return "Standard";
        }
        case 1: {
            return "Ironman";
        }
        case 2: {
            return "Hardcore Ironman";
        }
        case 3: {
            return "Group Ironman";
        }
        case 4: {
            return "Hardcore Group Ironman";
        }
    };
    script12478(`Invalid game mode ${inttostring(int0, 10)}`);
    return "";
}