document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('emailForm').addEventListener('submit', function(event) {
        event.preventDefault();

        var email = document.getElementById('emailInput').value;

        var emails = generateEmailsWithDotTrick(email);

        var emailListDiv = document.getElementById('emailList');
        emailListDiv.innerHTML = '';

        var heading = document.createElement('h3');
        heading.textContent = 'Sucessfully Generated the following Emails :';
        emailListDiv.appendChild(heading);

        var ol = document.createElement('ol');
        ol.style.listStyleType = 'disc';
        emails.forEach(function(email) {
            var li = document.createElement('li');
            li.textContent = email;
            ol.appendChild(li);
        });
        emailListDiv.appendChild(ol);
    });

    function generateEmailsWithDotTrick(email) {
        var parts = email.split('@');
        var username = parts[0];
        var domain = parts[1];

        var emails = [];

        generateVariants(username, '', 0, emails, domain);

        return emails;
    }

    function generateVariants(username, currentEmail, index, emails, domain) {
        if (index === username.length) {
            emails.push(currentEmail + '@' + domain);
            return;
        }

        generateVariants(username, currentEmail + username[index], index + 1, emails, domain);

        generateVariants(username, currentEmail + username[index] + '.', index + 1, emails, domain);
    }
