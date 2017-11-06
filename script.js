$(document).ready(function()
{
    function displayTime()
    {
        var meridiem = 'AM';
        /*current local time*/
        var currentTime = new Date();
        var currentHour = currentTime.getHours();
        var currentMinute = currentTime.getMinutes();
        var currentSecond = currentTime.getSeconds();
        if(currentSecond < 10)
        {
            currentSecond = '0' + currentSecond;
        }
        if(currentMinute < 10)
        {
            currentMinute = '0' + currentMinute;
        }
        if(currentHour < 10)
        {
            currentHour = '0' + currentHour;
        }
        if(currentHour > 12)
        {
            currentHour = currentHour - 12;
             meridiem = 'PM';
        }
        if(currentHour == 0)
        {
            currentHour = 12;
        }
        var clock = currentHour + ':'+ currentMinute + ':'+  currentSecond + ' ' + meridiem;
        document.getElementById('crntLctn').innerHTML = clock;

        /*eastern offset*/
        meridiem = 'AM';
        var a = new Date();
        var utc_offset = a.getTimezoneOffset();
        a.setMinutes(a.getMinutes() + utc_offset);
        var easternOffset = 5 * 60;
        a.setMinutes(a.getMinutes() - easternOffset);
        var easternHour = a.getHours();
        var easternMinute = a.getMinutes();
        var easternSecond = a.getSeconds();
        if(easternHour < 10)
        {
            easternHour = '0' + easternHour;
        }
        if(easternMinute < 10)
        {
            easternMinute = '0' + easternMinute;
        }
        if(easternSecond < 10)
        {
            easternSecond = '0' + easternSecond;
        }
        if(easternHour > 12)
        {
            easternHour = easternHour - 12;
            meridiem = 'PM';
        }
        if(easternHour == 0)
        {
            easternHour = 12;
        }
        var a = easternHour + ':'+ easternMinute + ':'+  easternSecond + ' ' + meridiem;
        document.getElementById('easternLctn').innerHTML = a;

        /*Sydney offset*/
        meridiem = 'AM';
        var b = new Date();
        var utc_offset = b.getTimezoneOffset();
        b.setMinutes(b.getMinutes() + utc_offset);
        var sydneyOffset = 11 * 60;
        b.setMinutes(b.getMinutes() + sydneyOffset);
        var AETHour = b.getHours();
        var AETMinute = b.getMinutes();
        var AETSecond = b.getSeconds();
        if(AETHour < 10)
        {
            AETHour = '0' + AETHour;
        }
        if(AETMinute < 10)
        {
            AETMinute = '0' + AETMinute;
        }
        if(AETSecond < 10)
        {
            AETSecond = '0' + AETSecond;
        }
        if(AETHour > 12)
        {
            AETHour = AETHour - 12;
            meridiem = 'PM';
        }
        if(AETHour == 0)
        {
            AETHour = 12;
        }
        var b = AETHour + ':'+ AETMinute + ':'+  AETSecond + ' ' + meridiem;
        document.getElementById('sydneyLctn').innerHTML = b;

        /*Greenwich*/
        meridiem = 'AM';
        var greenwichHour = currentTime.getUTCHours();
        var greenwichMinute = currentTime.getUTCMinutes();
        var greenwichSecond = currentTime.getUTCSeconds();
        if(greenwichSecond < 10)
        {
            greenwichSecond = '0' + greenwichSecond;
        }
        if(greenwichMinute < 10)
        {
            greenwichMinute = '0' + greenwichMinute;
        }
        if(greenwichHour < 10)
        {
            greenwichHour = '0' + greenwichHour;
        }
        if(greenwichHour > 12)
        {
            greenwichHour = greenwichHour - 12;
            meridiem = 'PM';
        }
        if(greenwichHour == 0)
        {
            greenwichHour = 12;
        }
        var c = greenwichHour + ':'+ greenwichMinute + ':'+  greenwichSecond + ' ' + meridiem;
        document.getElementById('londonLctn').innerHTML = c;

        /*Dubai offset*/
        meridiem = 'AM';
        var d = new Date();
        var utc_offset = d.getTimezoneOffset();
        d.setMinutes(d.getMinutes() + utc_offset);
        var dubaiOffset = 4 * 60;
        d.setMinutes(d.getMinutes() + dubaiOffset);
        var GTHour = d.getHours();
        var GTMinute = d.getMinutes();
        var GTSecond = d.getSeconds();
        if(GTHour < 10)
        {
            GTHour = '0' + GTHour;
        }
        if(GTMinute < 10)
        {
            GTMinute = '0' + GTMinute;
        }
        if(GTSecond < 10)
        {
            GTSecond = '0' + GTSecond;
        }
        if(GTHour > 12)
        {
            GTHour = GTHour - 12;
            meridiem = 'PM';
        }
        if(GTHour == 0)
        {
            GTHour = 12;
        }
        var d = GTHour + ':'+ GTMinute + ':'+  GTSecond + ' ' + meridiem;
        document.getElementById('dubaiLctn').innerHTML = d;

        /*Tokyo offset*/
        meridiem = 'AM';
        var e = new Date();
        var utc_offset = e.getTimezoneOffset();
        e.setMinutes(e.getMinutes() + utc_offset);
        var tokyoOffset = 9 * 60;
        e.setMinutes(e.getMinutes() + tokyoOffset);
        var JTHour = e.getHours();
        var JTMinute = e.getMinutes();
        var JTSecond = e.getSeconds();
        if(JTHour < 10)
        {
            JTHour = '0' + JTHour;
        }
        if(JTMinute < 10)
        {
            JTMinute = '0' + JTMinute;
        }
        if(JTSecond < 10)
        {
            JTSecond = '0' + JTSecond;
        }
        if(JTHour > 12)
        {
            JTHour = JTHour - 12;
            meridiem = 'PM';
        }
        if(JTHour == 0)
        {
            JTHour = 12;
        }
        var e = JTHour + ':'+ JTMinute + ':'+  JTSecond + ' ' + meridiem;
        document.getElementById('tokyoLctn').innerHTML = e;

        /*Mumbai offset*/
        meridiem = 'AM';
        var f = new Date();
        var utc_offset = f.getTimezoneOffset();
        f.setMinutes(f.getMinutes() + utc_offset);
        var mumbaiOffset = 5.5 * 60;
        f.setMinutes(f.getMinutes() + mumbaiOffset);
        var ISTHour = f.getHours();
        var ISTMinute = f.getMinutes();
        var ISTSecond = f.getSeconds();
        if(ISTHour < 10)
        {
            ISTHour = '0' + ISTHour;
        }
        if(ISTMinute < 10)
        {
            ISTMinute = '0' + ISTMinute;
        }
        if(ISTSecond < 10)
        {
            ISTSecond = '0' + ISTSecond;
        }
        if(ISTHour > 12)
        {
            ISTHour = ISTHour - 12;
            meridiem = 'PM';
        }
        if(ISTHour == 0)
        {
            ISTHour = 12;
        }
        var f = ISTHour + ':'+ ISTMinute + ':'+  ISTSecond + ' ' + meridiem;
        document.getElementById('mumbaiLctn').innerHTML = f;

        /*Berlin offset*/
        meridiem = 'AM';
        var g = new Date();
        var utc_offset = g.getTimezoneOffset();
        g.setMinutes(g.getMinutes() + utc_offset);
        var berlinOffset = 1 * 60;
        g.setMinutes(g.getMinutes() + berlinOffset);
        var CETHour = g.getHours();
        var CETMinute = g.getMinutes();
        var CETSecond = g.getSeconds();
        if(CETHour < 10)
        {
            CETHour = '0' + CETHour;
        }
        if(CETMinute < 10)
        {
            CETMinute = '0' + CETMinute;
        }
        if(CETSecond < 10)
        {
            CETSecond = '0' + CETSecond;
        }
        if(CETHour > 12)
        {
            CETHour = CETHour - 12;
            meridiem = 'PM';
        }
        if(CETHour == 0)
        {
            CETHour = 12;
        }
        var g = CETHour + ':'+ CETMinute + ':'+  CETSecond + ' ' + meridiem;
        document.getElementById('berlinLctn').innerHTML = g;

        /*Los Angeles offset*/
        meridiem = 'AM';
        var h = new Date();
        var utc_offset = h.getTimezoneOffset();
        h.setMinutes(h.getMinutes() + utc_offset);
        var LAOffset = 8 * 60;
        h.setMinutes(h.getMinutes() - LAOffset);
        var PSTHour = h.getHours();
        var PSTMinute = h.getMinutes();
        var PSTSecond = h.getSeconds();
        if(PSTHour < 10)
        {
            PSTHour = '0' + PSTHour;
        }
        if(PSTMinute < 10)
        {
            PSTMinute = '0' + PSTMinute;
        }
        if(PSTSecond < 10)
        {
            PSTSecond = '0' + PSTSecond;
        }
        if(PSTHour > 12)
        {
            PSTHour = PSTHour - 12;
            meridiem = 'PM';
        }
        if(PSTHour == 0)
        {
            PSTHour = 12;
        }
        var h = PSTHour + ':'+ PSTMinute + ':'+  PSTSecond + ' ' + meridiem;
        document.getElementById('LALctn').innerHTML = h;
    }
   setInterval(displayTime,1000);
});