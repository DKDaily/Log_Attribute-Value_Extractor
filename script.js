document.addEventListener('DOMContentLoaded', function () {
    const inputBox = document.getElementById('inputBox');
    const outputBox = document.getElementById('outputBox');
    const convertBtn = document.getElementById('convertBtn');
    const copyInputIcon = document.getElementById('copyInputIcon');
    const copyOutputIcon = document.getElementById('copyOutputIcon');
    const clearInputBtn = document.getElementById('clearInputBtn');
    const clearBtn = document.getElementById('clearBtn');
    const logType = document.getElementById('logType');

    convertBtn.addEventListener('click', function () {
        const inputText = inputBox.value.trim();
        let output;

        if (logType.value === 'keyvalue') {
            output = parseKeyValueLogs(inputText);
        } else {
            output = parseXMLLogs(inputText);
        }

        outputBox.value = output;
    });

    copyInputIcon.addEventListener('click', function () {
        inputBox.select();
        document.execCommand('copy');
        showFeedback(copyInputIcon, '📋 Copied!');
    });

    copyOutputIcon.addEventListener('click', function () {
        outputBox.select();
        document.execCommand('copy');
        showFeedback(copyOutputIcon, '📋 Copied!');
    });

    clearInputBtn.addEventListener('click', function () {
        inputBox.value = '';
    });

    clearBtn.addEventListener('click', function () {
        outputBox.value = '';
    });

    function parseKeyValueLogs(text) {
        const regex = /([\w-]+)=(.*?)(?=\s+[\w-]+=|$)/g;
        const matches = [];
        let match;

        while ((match = regex.exec(text)) !== null) {
            matches.push(`${match[1]} = ${match[2].trim()}`);
        }

        return matches.join('\n');
    }

    function parseXMLLogs(text) {
        const matches = [];
        const tagValueRegex = /<([a-zA-Z0-9_]+)>([^<>]+)<\/\1>/g;
        let match;
        while ((match = tagValueRegex.exec(text)) !== null) {
            matches.push(`${match[1]} = ${match[2].trim()}`);
        }
        return matches.join('\n');
    }

    function showFeedback(button, message) {
        const originalText = button.textContent;
        button.textContent = message;
        setTimeout(() => {
            button.textContent = originalText;
        }, 1500);
    }
});
