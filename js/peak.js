var whatIsText = '<div class="introTextBody"><p class="card-text">Each year the USPS sees a significant increase in our daily volume of packages and letters and flats during what the USPS calls our “Peak Season”</p><p class="card-text">The USPS traditionally measures Peak Season as starting the day after Thanksgiving (retailers refer to this as day as “Black Friday”) and completing on December 31st.</p><p class="card-text">USPS leadership leverages all the managerial and analytical resources available to accommodate and minimize as much as possible the considerable impact that this increase in volume puts on our resources – most of all our people  - in order to provide the best service possible to our customers</p><p class="card-text">Annually, the Enterprise Analytics team (from the CTO group), hosts an event called the “Peak Data Jam” to forecast (or predict) the volume of packages and other mail pieces for the next Peak Season and to identify the needs of the USPS across the enterprise for these forecasts</p><p class="card-text">The “Peak Data Jam” team includes representatives from across the Enterprise (examples: Finance, Logistics, Sales, Retail and Delivery, the field, etc.)</p><p class="card-text">This team works with Enterprise Analytics to create the best possible forecasts for the next peak season using the latest statistical, machine learning and AI techniques on historical trend data of piece count volumes.</p><p class="card-text">The forecast team creates peak season forecasts for various mail class products, mailers (such as UPS and Walmart), and does so at the three digit ZIP level</p><p class="card-text">This year, the Peak Data Jam event is being held earlier than ever in order to inform USPS leadership how to make investments (including hiring) in a timely way</p<p class="card-text">The forecasting team continues to analyze trends and update forecasts up until peak season in order to ensure the best accuracy possible in predicting volume and the forecasts are placed alongside actual volume reports during the peak season</p></div>';
var helpMeText = '<div class="introTextBody"><p class="card-text">Teams across USPS are using Peak volume forecasts to plan ahead, make decisions, and keep a pulse on the most up-to-date trends in mail and package volume.</p><p class="card-text">Example use cases include: make complement hiring decisions, determine where to establish annexes, identify the number of cardboard Gaylords required at each plant, anticipate the need to off-load volume from one plant to another, and many others.</p><p class="card-text">The first forecasts will be released during the first week in July. These will be refreshed with the most up-to-date insights each week thereafter through the Peak season. The forecasts include volume projections at different levels of granularity, including ZIP3, plant-level, and mail class.</p><p class="card-text">Results are presented in an interactive SAS Viya dashboard with multiple filters so that users can find the information that they need.</p><p class="card-text">There are many different ways to present volume forecasts. To make results easy to interpret, Advanced Analytics presents the results in a simple metric: difference compared to the Same Period Last Year (SPLY). So if the metric reads, “-4% SPLY,” for a particular day of the week in a particular ZIP3, it means that the volume will be 4 percent less than the actual volume observed last year.</p> </div>';
var learnMoreText = '<div class="introTextBody"><p class="card-text">Visit the <a href="https://sasviya.usps.gov/links/resources/report?uri=%2Freports%2Freports%2F44448840-8d4a-4d2e-9006-679ca472a2f0&page=vi2694" target="blank">SAS Viya</a> dashboard and start exploring!</p> <p class="card-text">If you would like to be involved in the Peak Data Jam working group, please contact:<br /><a href="mailto: John.M.Greaves@usps.gov">John Greaves</a>, <a href="mailto: Kimberley.L.Cannon@usps.gov">Kim Cannon</a> or <a href="mailto: Brian.R.Twidt@usps.gov">Brian Twidt</a>.</p><br /><br /><br /><p class="card-text">The purpose of this group is to: </p><p class="card-text"><ol><li>review and discuss the most recent version of the volume forecasts;</li><li>share intelligence from their organizations that might impact forecasts or underlying assumptions; and</li><li>bring insights and intelligence back to their organizations to encourage further adoption</li></ol></p></div>';
var tabID = '';
var textID = '';
$('.introTab').on('click', function() {
    $('.introTab').removeClass('active');
    $(this).addClass('active');
    tabID = $(this).attr('id') + 'Text';

    $('.introText').attr('id', tabID);

    switch (tabID) {
        case 'whatIsText':
            $('.introText').html(whatIsText);
            break;
        case 'helpMeText':
            $('.introText').html(helpMeText);
            break;
        case 'learnMoreText':
            $('.introText').html(learnMoreText);
            break;
        default:
            $('.introText').html(whatIsText);
    };

    //textID = $('.introText').attr('id');
    //textID = tabID;
    // $('.introText').html(whatIsText);
    console.log(tabID, textID);
});

function switchTabs() {
    $.each(powerPoint, function(i, el) {
        var keywordContent = "";
        //console.log(el.keywords[0]);
        $.each(el.keywords, function(key, value) {
            keywordContent += '<li class="keyword-link">' + value + '</li>';
            allKeywords.push(value);
        });
        var thisDate = el.date;
        var thisYear = thisDate.slice(0, 4);
        var thisMonth = thisDate.slice(4, 6);
        var thisDay = thisDate.slice(6);
        if (thisDay.startsWith(0)) {
            thisDay = thisDay.slice(1, 2)
        }
        if (thisMonth.startsWith(0)) {
            thisMonth = thisMonth.slice(1, 2)
        }


        $('#pageContent').append('<div class="listing-tile col-12 col-md-6" id="' + el.filename + '"><div class="thumbpic"><a class="clear" href="docs/' + el.filename + '.pptx"><img src="thumbnails/' + el.thumbfilename + '" /></a></div><div class="blurb"><h5><a href="docs/' + el.filename + '.pptx">' + el.title + '</a></h5><p>' + el.desc + '</p><ul class="keyword-links">' + keywordContent + '</ul><p class="download"><a href="docs/' + el.filename + '.pptx"><img src="../../../images/download-icon.svg" width="17" /></a></p><p class="date">' + thisMonth + '/' + thisDay + '/' + thisYear + '</p></div>')
    });
};

/*$('.introTab').on('click', function() {
    switchTabs();
    console.log(tmp);
})*/