/** This is a hack to get our url */
export function setActionsCacheUrl(): void {
    if (process.env["GITHUB_ACTIONS_CACHE_URL"]) {
        process.env["ACTIONS_CACHE_URL"] =
            process.env["GITHUB_ACTIONS_CACHE_URL"];
        return;
    }
    process.env["ACTIONS_CACHE_URL"] = "https://cache.dev01.devland.is/";
}
