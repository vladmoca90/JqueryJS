var data = {
    counties: [
        {
            title: 'Berskshire',
            content: 'Berkshire is a county in south east England, west of London and is one of the home counties. It was recognised by the Queen as the Royal County of Berkshire in 1957 because of the presence of Windsor Castle, and letters patent were issued in 1974. Berkshire is a county of historic origin and is a home county',
        },
        {
            title: 'Surrey',
            content: 'Get the latest news from the BBC in Berkshire: Local website with breaking news, sport, weather and travel from the area plus in-depth features, analysis, audio and video coverage; listen to BBC Radio Berkshire live and catch-up with local TV news.',
        },
        {
            title: 'Lincolnshire',
            content: 'With so many places to visit in Berkshire, you can easily forget you are right on London`s doorstep. ... Berkshire is also home to many other picturesque towns and villages such as Newbury, Hungerford, Ascot, Hurley, Cookham, Bray, Littlewick Green, and Waltham St Lawrence',
        }
    ],
}

function addCounties(data) {

    if (data.counties.length == 0) {
        throw new Error('The data is empty');
    }

    for (var i = 0; i < data.counties.length; i++) {
        var heading = $('<p class="counties__heading text-center"></p>');
        var content = $('<p class="counties__text"></p>');

        heading.html(data.counties[i].title);
        content.html(data.counties[i].content);

        $('.counties__container').append(heading);
        $('.counties__container').append(content);
    }
}

addCounties(data);