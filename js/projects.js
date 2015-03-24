---
---

$(document).ready(function () {
    {% for section in site.data.projects %}
        {% assign project = section[1] %}
        var $slide{{project.short_link}} = $('#slide{{project.short_link}}');
        var $menu{{project.short_link}} = $('#menu{{project.short_link}}');

        $menu{{project.short_link}}.click(function(){
            masLoad($slide{{project.short_link}},'.post-box',$menu{{project.short_link}});
        });
        masLoad($slide{{project.short_link}},'.post-box',$menu{{project.short_link}});
    {% endfor %}

    $('#myCarousel').carousel({
        pause: true,
        interval: false
    });

});

function masLoad(slide,box,id) {
    slide.masonry('destroy');
    slide.imagesLoaded(function(){
        slide.masonry({
            itemSelector: box,
            columnWidth: box,
            transitionDuration: 2,
            isAnimated: true,
            isFitWidth: true
        });
    });

    $('.clink').removeClass('active');
    id.addClass('active');
};