(function ($) {
    'use strict';

    /**
     * All of the code for your admin-specific JavaScript source
     * should reside in this file.
     *
     * Note that this assume you're going to use jQuery, so it prepares
     * the $ function reference to be used within the scope of this
     * function.
     *
     * From here, you're able to define handlers for when the DOM is
     * ready:
     *
     * $(function() {
     *
     * });
     *
     * Or when the window is loaded:
     *
     * $( window ).load(function() {
     *
     * });
     *
     * ...and so on.
     *
     * Remember that ideally, we should not attach any more than a single DOM-ready or window-load handler
     * for any particular page. Though other scripts in WordPress core, other plugins, and other themes may
     * be doing this, we should try to minimize doing that in our own work.
     */

    $(function () {

        /* Apply jquery ui sortable on additional details */
        $(".inspiry-details-wrapper #inspiry-additional-details-container").sortable({
            revert: 100,
            placeholder: "detail-placeholder",
            handle: ".sort-detail",
            cursor: "move"
        });

        $('.add-detail').click(function (event) {
            event.preventDefault();
            let target = event.target;
            target = $(target).closest('.inspiry-details-wrapper');
            let detailTitle = $(target).find('div.inspiry-detail-title input').attr('name');
            let detailValues = $(target).find('div.inspiry-detail-value input').attr('name');
            var newInspiryDetail = '<div class="inspiry-detail inputs">' +
                '<div class="inspiry-detail-control"><span class="sort-detail dashicons dashicons-menu"></span></div>' +
                `<div class="inspiry-detail-title"><input type="text" name="${detailTitle}" value="" /></div>` +
                `<div class="inspiry-detail-value"><input type="text" name="${detailValues}" value="" /></div>` +
                '<div class="inspiry-detail-control"><a class="remove-detail" href="#"><span class="dashicons dashicons-dismiss"></span></a></div>' +
                '</div>';

            $(target).children('#inspiry-additional-details-container').append(newInspiryDetail);
            bindAdditionalDetailsEvents();
        });

        function bindAdditionalDetailsEvents() {

            /* Bind click event to remove detail icon button */
            $('.remove-detail').click(function (event) {
                event.preventDefault();
                var $this = $(this);
                $this.closest('.inspiry-detail').remove();
            });

        }
        bindAdditionalDetailsEvents();

    });

    function additionalSocial() {

        let tempObj = [];

        $(document).find('.inspiry-ere-sn-tr').each(function (i) {

            let that = $(this);
            let tempArray = [$(that).find('.title').val(), $(that).find('.regular-text').val(), $(that).find('.icon').val()];

            tempObj[i] = tempArray;

        });

        $(document).find('.inspiry_additional_social_icons').val(JSON.stringify(tempObj));
    }


    window.addEventListener('DOMContentLoaded', (event) => {

        let additionalSocialIcons = $(document).find('.inspiry_additional_social_icons').val();

        $('.inspiry-ire-page-content form table').append('<tfoot><tr><th scope="row"></th><td><a href="#" id="inspiry-ere-add-sn" class="inspiry-ere-add-sn">+ Add New Social Network</a><p></p></td></tr></tfoot>');

        $('.inspiry-ire-page-content form tbody tr:last-child').css('display', 'none');
        if (undefined !== additionalSocialIcons) {
            let tempArr = jQuery.parseJSON(additionalSocialIcons);

            $.each(tempArr, function (index, obj) {
                if ('' != obj[2]) {
                    $('.inspiry-ire-page-content form tbody').append('<tr class="inspiry-ere-sn-tr"><th scope="row"><label>Title</label><input type="text" name="inspiry_ere_social_networks" class="title" value="' + obj[0] + '"></th><td><div><label><strong>Profile URL</strong></label><input type="text" name="inspiry_ere_social_networks" class="regular-text" value="' + obj[1] + '"></div><div><label for="inspiry-ere-sn-icon-10"><strong>Icon Class</strong> <small>- <em>Example: fas fa-flicker</em></small></label><input type="text" name="inspiry_ere_social_networks" class="icon" value="' + obj[2] + '"><a href="#" class="inspiry-ere-remove-sn inspiry-ere-sn-btn">-</a><div><a href="https://fontawesome.com/icons?d=gallery&amp;m=free" target="_blank">Get icon!</a></div></div></td></tr>');
                }
            });
        }

        $(document).find('#inspiry-ere-add-sn').on('click', function (e) {
            e.preventDefault();
            $('.inspiry-ire-page-content form tbody').append('<tr class="inspiry-ere-sn-tr"><th scope="row"><label>Title</label><input type="text" name="inspiry_ere_social_networks" class="title"></th><td><div><label><strong>Profile URL</strong></label><input type="text" name="inspiry_ere_social_networks" class="regular-text"></div><div><label for="inspiry-ere-sn-icon-10"><strong>Icon Class</strong> <small>- <em>Example: fas fa-flicker</em></small></label><input type="text" name="inspiry_ere_social_networks" class="icon"><a href="#" class="inspiry-ere-remove-sn inspiry-ere-sn-btn">-</a><div><a href="https://fontawesome.com/icons?d=gallery&amp;m=free" target="_blank">Get icon!</a></div></div></td></tr>');
            additionalSocial();
            $(document).find('.inspiry-ere-sn-tr').on('input', 'input', function (e) {
                additionalSocial();
            });
        });

        $(document).on('click', '.inspiry-ere-remove-sn', function (e) {
            e.preventDefault();
            $(this).closest('.inspiry-ere-sn-tr').remove();
            additionalSocial();
        });

        $(document).find('.inspiry-ere-sn-tr').on('input', 'input', function (e) {
            additionalSocial();
        });

    });
})(jQuery);