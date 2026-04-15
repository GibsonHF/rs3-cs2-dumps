//
function script17498(int0: int): string {
    switch (int0) {
        case 0: {
            return "Tier 1";
        }
        case 1: {
            return "Tier 2";
        }
        case 2: {
        }
        default: {
            script12478(`necro_ritual_site_tier_to_string_get - no site tier found! %necro_ritual_site_tier is ${inttostring(varbitplayer_53833, 10)}.`);
            return "Tier 1";
        }
    };
    return "Tier 3";
}