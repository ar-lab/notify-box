;(function ($) {

    var notifyBox = $('<div id="notify_box"></div>');

    var messageError = 'error';
    var messageWarning = 'warning';
    var messageSuccess = 'success';
    var messageInfo = 'info';

    $(document).ready(function () {
        $('body').append(notifyBox);
    });

    $(document).bind("notifyError", function(event, message) {
        showNotification(message, messageError)
    });

    $(document).bind("notifyWarning", function(event, message) {
        showNotification(message, messageWarning)
    });

    $(document).bind("notifySuccess", function(event, message) {
        showNotification(message, messageSuccess)
    });

    $(document).bind("notifyInfo", function(event, message) {
        showNotification(message, messageInfo)
    });

    function showNotification(message, type)
    {
        var messageTypes = ['error', 'warning', 'success', 'info'];

        if (type === undefined || messageTypes.indexOf(type) === -1) {
            type = 'error';
        }

        var messageBlock = '<div class="message message-' + type + '">' + message + '</div>';

        notifyBox.append(messageBlock);

        $(".message").on('click', hideNotification);
    }

    function hideNotification()
    {
        $(this).remove();
    }

}(jQuery));