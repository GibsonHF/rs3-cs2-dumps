//
function script18462(): unknown_string {
    if ((varbitplayer_54971 <= 0)) {
        return "https://crmintegration.production.rs.aws.jagex.com/getlatestcampaign/%deviceid%/?userHash=%userhash%";
    };
    if ((varbitplayer_54971 == 1)) {
        return "https://crmintegration.development.rs.aws.jagex.com/getlatestcampaign/%deviceid%/?userHash=%userhash%";
    };
    script12478(`Unknown %crm_braze_endpoint_url_environment: ${inttostring(varbitplayer_54971, 10)} when trying to pull Braze request URL. Returning Live URL.`);
    return "https://crmintegration.production.rs.aws.jagex.com/getlatestcampaign/%deviceid%/?userHash=%userhash%";
}