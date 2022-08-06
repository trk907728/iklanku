//<![CDATA[
    var go_current     	= window.location.href;
    var reff     		= document.referrer;
    

    function rChoice(arr) {
	    return arr[Math.floor(arr.length * Math.random())];
	}

    var direct_link_ads = rChoice([
                            "https://t.co/R40AXmmdh3",	//==> direct link ita
                            "https://t.co/R40AXmmdh3",	//==> direct link ita
                        ]);

    var ars             = rChoice([
                            "#YOUR_ARSAE_SERVER_OR_OTHER_DOMAIN_1",
                            "#YOUR_ARSAE_SERVER_OR_OTHER_DOMAIN_2",
                        ]);


    var dir_type        = "refresh"; //refresh, domain, path, arsae


    if(dir_type == 'refresh')
    {
        //REFRESH
        console.log('refresh..');
    }
    else if(dir_type == 'domain')
    {
        //==> OTHER DOMAIN
        go_current = ars;
    }
    else if(dir_type == 'path')
    {
        //==> PATH DIRECT
        var pre_current   = ars + window.location.pathname;
        go_current        = pre_current.includes("?")?pre_current+"&c=1":pre_current+"?c=1";
    }
    else if(dir_type == 'arsae')
    {
        //==> ARSAE DIRECT
        go_current            = ars + '/?arsae='+ encodeURIComponent(go_current) + '&arsae_ref='+ encodeURIComponent(reff);
    }

//]]>
