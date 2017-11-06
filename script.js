$(document).ready(function()
{
    function displayTime()
    {
        /*current local time*/
        var currentTime = new Date();
        var currentHour = currentTime.getHours();
        var currentMinute = currentTime.getMinutes();
        var currentSecond = currentTime.getSeconds();
        if(currentSecond < 10)
        {
            currentSecond = '0' + currentSecond;
        }
        var clock = currentHour + ':'+ currentMinute + ':'+  currentSecond;
        document.getElementById('crntLctn').innerHTML = clock;

        /*eastern offset*/
        var a = new Date();
        var utc_offset = a.getTimezoneOffset();
        a.setMinutes(a.getMinutes() + utc_offset);
        var easternOffset = 5 * 60;
        a.setMinutes(a.getMinutes() - easternOffset);
        var easternHour = a.getHours();
        var easternMinute = a.getMinutes();
        var easternSecond = a.getSeconds();
        var a = easternHour + ':'+ easternMinute + ':'+  easternSecond;
        document.getElementById('easternLctn').innerHTML = a;

        /*Sydney offset*/
        var b = new Date();
        var utc_offset = b.getTimezoneOffset();
        b.setMinutes(b.getMinutes() + utc_offset);
        var sydneyOffset = 11 * 60;
        b.setMinutes(b.getMinutes() + sydneyOffset);
        var AETHour = b.getHours();
        var AETMinute = b.getMinutes();
        var AETSecond = b.getSeconds();
        var b = AETHour + ':'+ AETMinute + ':'+  AETSecond;
        document.getElementById('sydneyLctn').innerHTML = b;

        /*Greenwich*/
        var greenwichHour = currentTime.getUTCHours();
        var greenwichMinute = currentTime.getUTCMinutes();
        var greenwichSecond = currentTime.getUTCSeconds();
        var c = greenwichHour + ':'+ greenwichMinute + ':'+  greenwichSecond;
        document.getElementById('londonLctn').innerHTML = c;

        /*Dubai offset*/
        var d = new Date();
        var utc_offset = d.getTimezoneOffset();
        d.setMinutes(d.getMinutes() + utc_offset);
        var dubaiOffset = 4 * 60;
        d.setMinutes(d.getMinutes() + dubaiOffset);
        var GTHour = d.getHours();
        var GTMinute = d.getMinutes();
        var GTSecond = d.getSeconds();
        var d = GTHour + ':'+ GTMinute + ':'+  GTSecond;
        document.getElementById('dubaiLctn').innerHTML = d;

        /*Tokyo offset*/
        var e = new Date();
        var utc_offset = e.getTimezoneOffset();
        e.setMinutes(e.getMinutes() + utc_offset);
        var tokyoOffset = 9 * 60;
        e.setMinutes(e.getMinutes() + tokyoOffset);
        var JTHour = e.getHours();
        var JTMinute = e.getMinutes();
        var JTSecond = e.getSeconds();
        var e = JTHour + ':'+ JTMinute + ':'+  JTSecond;
        document.getElementById('tokyoLctn').innerHTML = e;

        /*Mumbai offset*/
        var f = new Date();
        var utc_offset = f.getTimezoneOffset();
        f.setMinutes(f.getMinutes() + utc_offset);
        var mumbaiOffset = 5.5 * 60;
        f.setMinutes(f.getMinutes() + mumbaiOffset);
        var ISTHour = f.getHours();
        var ISTMinute = f.getMinutes();
        var ISTSecond = f.getSeconds();
        var f = ISTHour + ':'+ ISTMinute + ':'+  ISTSecond;
        document.getElementById('mumbaiLctn').innerHTML = f;

        /*Berlin offset*/
        var g = new Date();
        var utc_offset = g.getTimezoneOffset();
        g.setMinutes(g.getMinutes() + utc_offset);
        var berlinOffset = 1 * 60;
        g.setMinutes(g.getMinutes() + berlinOffset);
        var CETHour = g.getHours();
        var CETMinute = g.getMinutes();
        var CETSecond = g.getSeconds();
        var g = CETHour + ':'+ CETMinute + ':'+  CETSecond;
        document.getElementById('berlinLctn').innerHTML = g;

        /*Los Angeles offset*/
        var h = new Date();
        var utc_offset = h.getTimezoneOffset();
        h.setMinutes(h.getMinutes() + utc_offset);
        var LAOffset = 8 * 60;
        h.setMinutes(h.getMinutes() - LAOffset);
        var PSTHour = h.getHours();
        var PSTMinute = h.getMinutes();
        var PSTSecond = h.getSeconds();
        var h = PSTHour + ':'+ PSTMinute + ':'+  PSTSecond;
        document.getElementById('LALctn').innerHTML = h;
    }
   setInterval(displayTime,1000);
});