module.exports = function (plugin) {


    // meta information
    plugin["name"] = "Demo/Test Plugin"; // user friendly name
    plugin["author"] = "Marc Stirner"; // plugin author
    plugin["version"] = "1.0.0"; // plugin version
    plugin["license"] = "MIT"; // plugin license
    plugin["target"] = ["http", "dhcp", "tftp", "autodiscover"]; // service target

    // plugin config
    plugin.disabled = true;


    // init function
    plugin.init = function init(log, service) {

        // log.fatal only for highlighting in terminal
        log.fatal("Plugin '%s' initalized", plugin["name"]);

        //
        // this is our entry point for the plugin
        // <log> is a bunyan logger instance
        // <service> is a event emitter,
        // intercepted by a middleware design pattern
        // process.argv[2] = service name
        // 
        // Documentation:
        // kickstart: https://github.com/THE-CODE-FACTORY/kickstart
        // magicboot: https://github.com/THE-CODE-FACTORY/MagicBoot-Server
        //

        /*
        service.on("startup", function (config, next) {

            console.log("in plugin");
            next();

        });
        */
    }


}