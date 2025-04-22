// reconizeAgent.js
/* 
 * This script is used to recognize what is the agent of the user.
 */

// Function to detect the user's agent
// reconizeAgent.js
/* 
 * This script is used to recognize what is the agent of the user.
 */

// Function to detect the user's agent
function detectAgent() {
    const userAgent = navigator.userAgent;

    return {
        userAgentString: userAgent,
        browser: detectBrowser(userAgent),
        os: detectOS(userAgent),
        device: detectDevice(userAgent),
        isMobile: detectMobile(userAgent)
    };
}

// Function to detect the browser
function detectBrowser(userAgent) {
    // Edge
    if (userAgent.indexOf("Edg") !== -1) {
        return "Microsoft Edge";
    }
    // Chrome
    else if (userAgent.indexOf("Chrome") !== -1) {
        return "Google Chrome";
    }
    // Firefox
    else if (userAgent.indexOf("Firefox") !== -1) {
        return "Mozilla Firefox";
    }
    // Safari
    else if (userAgent.indexOf("Safari") !== -1) {
        return "Apple Safari";
    }
    // Opera
    else if (userAgent.indexOf("OPR") !== -1 || userAgent.indexOf("Opera") !== -1) {
        return "Opera";
    }
    // IE
    else if (userAgent.indexOf("MSIE") !== -1 || userAgent.indexOf("Trident/") !== -1) {
        return "Internet Explorer";
    }
    // Vivaldi
    else if (userAgent.indexOf("Vivaldi") !== -1) {
        return "Vivaldi";
    }
    // Brave
    else if (userAgent.indexOf("Brave") !== -1) {
        return "Brave";
    }

    return "Unknown Browser";
}

// Function to detect the operating system
function detectOS(userAgent) {
    if (userAgent.indexOf("Windows") !== -1) {
        return "Windows";
    } else if (userAgent.indexOf("Mac") !== -1) {
        return "macOS";
    } else if (userAgent.indexOf("Android") !== -1) {
        return "Android";
    } else if (userAgent.indexOf("iOS") !== -1 || userAgent.indexOf("iPhone") !== -1 || userAgent.indexOf("iPad") !== -1) {
        return "iOS";
    } else if (userAgent.indexOf("Linux") !== -1) {
        return "Linux";
    }

    return "Unknown OS";
}

// Function to detect the device type
function detectDevice(userAgent) {
    if (userAgent.indexOf("iPhone") !== -1) {
        return "iPhone";
    } else if (userAgent.indexOf("iPad") !== -1) {
        return "iPad";
    } else if (userAgent.indexOf("Android") !== -1 && userAgent.indexOf("Mobile") !== -1) {
        return "Android Phone";
    } else if (userAgent.indexOf("Android") !== -1) {
        return "Android Device";
    }

    return "Desktop";
}

// Function to detect if the device is mobile
function detectMobile(userAgent) {
    const mobileKeywords = ["Android", "iPhone", "iPad", "Mobile", "BlackBerry", "IEMobile"];
    return mobileKeywords.some(keyword => userAgent.indexOf(keyword) !== -1);
}

// Function to update the footer with agent information
document.addEventListener('DOMContentLoaded', function () {
    // Detect the agent information
    const agentInfo = detectAgent();

    // Select the footer element where you want to display the information
    // Assuming you have a footer element with the class 'footer-content'
    const accessElement = document.querySelector('.footer-content p.small-text.gray');

    // Update the footer with the agent information
    // Still assuming you have a footer element with the class 'footer-content'
    if (accessElement) {
        accessElement.innerHTML = `Access from: ${agentInfo.browser} on ${agentInfo.os} (${agentInfo.device})`;
    }
});
