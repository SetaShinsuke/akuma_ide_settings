var FindProxyForURL = function(init, profiles) {
    return function(url, host) {
        "use strict";
        var result = init, scheme = url.substr(0, url.indexOf(":"));
        do {
            if (!profiles[result]) return result;
            result = profiles[result];
            if (typeof result === "function") result = result(url, host, scheme);
        } while (typeof result !== "string" || result.charCodeAt(0) === 43);
        return result;
    };
}("+clash", {
    "+clash": function(url, host, scheme) {
        "use strict";
        if (/^127\.0\.0\.1$/.test(host) || /^::1$/.test(host) || /^192\.168\./.test(host) || /^localhost$/.test(host) || /\.vicp\.fun$/.test(host) || /\.imwork\.net$/.test(host) || /\.myqnapcloud\.com$/.test(host) || /\.qnap\.com\.cn$/.test(host) || /\.lenovo\.com\.cn$/.test(host) || /\.bilibili\.com$/.test(host) || /\.hdslb\.com$/.test(host) || /\.qq\.com$/.test(host) || /\.sharepoint\.com$/.test(host) || /\.asus\.com$/.test(host) || /\.weibo\.com$/.test(host) || /\.qnap\.com$/.test(host) || /\.myqnapcloud$/.test(host) || /\.capcut\.cn$/.test(host) || /\.douyin\.com$/.test(host) || /\.deepseek\.com$/.test(host) || /\.taobao\.com$/.test(host) || /\.mmstat\.com$/.test(host) || /\.baidu\.com$/.test(host) || /\.udongman\.cn$/.test(host) || /\.epicgames\.com$/.test(host) || /\.163\.com$/.test(host) || /\.douban\.com$/.test(host) || /\.kongfz\.com$/.test(host)) return "DIRECT";
        return "PROXY 127.0.0.1:7890";
    }
});