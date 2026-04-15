//
function script17897(int0: int): dbrow {
    switch (int0) {
        case 1: {
            return 8011 as dbrow;
        }
        case 2: {
            return 8012 as dbrow;
        }
        case 3: {
            return 8013 as dbrow;
        }
    };
    script12478("Unknown BP3 mission category ID when trying to get category dbrow.");
    return -1 as dbrow;
}