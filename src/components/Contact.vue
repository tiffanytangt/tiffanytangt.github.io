<template>
    <div class="container">
        <section class="section">
            <div class="title is-4 match-iframe"><span class="icon"><i class=" fa fa-envelope-o"></i></span> Inquiries</div>
            <div class="subtitle match-iframe">Please fill out the form to contact me.</div>
            <div class="crop-iframe">
                <div class="is-hidden-tablet mobile-spacer"></div>
                <iframe height="1500"
                        width="100%"
                        id="JotFormIFrame-80221477580253"
                        allowtransparency="true"
                        src="https://form.jotform.com/80221477580253"
                        frameborder="0"
                        scrolling="no">
                </iframe>
            </div>
        </section>
    </div>
</template>

<script>

    export default {
        components: {
        },
        methods: {
        },

        mounted() {
            let ifr = document.getElementById("JotFormIFrame-80221477580253");
            if(window.location.href && window.location.href.indexOf("?") > -1) {
                let get = window.location.href.substr(window.location.href.indexOf("?") + 1);
                if(ifr && get.length > 0) {
                    let src = ifr.src;
                    src = src.indexOf("?") > -1 ? src + "&" + get : src  + "?" + get;
                    ifr.src = src;
                }
            }
            window.handleIFrameMessage = function(e) {
                let iframe;
                let args = e.data.split(":");
                if (args.length > 2) {
                    iframe = document.getElementById("JotFormIFrame-" + args[(args.length - 1)]);
                } else {
                    iframe = document.getElementById("JotFormIFrame");
                }

                if (!iframe) { return; }
                switch (args[0]) {
                    case "scrollIntoView":
                        iframe.scrollIntoView();
                        break;
                    case "reloadPage":
                        window.location.reload();
                        break;
                    case "loadScript":
                        let src = args[1];
                        if (args.length > 3) {
                            src = args[1] + ':' + args[2];
                        }
                        let script = document.createElement('script');
                        script.src = src;
                        script.type = 'text/javascript';
                        document.body.appendChild(script);
                        break;
                }
                let isJotForm = (e.origin.indexOf("jotform") > -1) ? true : false;
                if(isJotForm && "contentWindow" in iframe && "postMessage" in iframe.contentWindow) {
                    let urls = {
                        "docurl":encodeURIComponent(document.URL),
                        "referrer":encodeURIComponent(document.referrer)
                    };
                    iframe.contentWindow.postMessage(JSON.stringify({
                        "type":"urls",
                        "value":urls
                    }), "*");
                }
            };
            if (window.addEventListener) {
                window.addEventListener("message", handleIFrameMessage, false);
            } else if (window.attachEvent) {
                window.attachEvent("onmessage", handleIFrameMessage);
            }
        }
    }
</script>

<style lang="scss">
    .match-iframe {
        margin: auto;
        max-width: 628px;
        z-index: 5;
    }
    .crop-iframe {
        height: 800px;
        overflow: hidden;
    }

    .mobile-spacer {
        height: 40px;
    }
    iframe {
        margin-top: -80px;
    }
</style>