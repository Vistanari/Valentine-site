// ============================================
// 💝 CUSTOMIZE YOUR VALENTINE'S WEBSITE HERE 💝
// ============================================

const CONFIG = {
    // Your Valentine's name that will appear in the title
    // Example: "Jade", "Sarah", "Mike"
  // Basic Information
valentineName: "Ishi",                    // Your Valentine's name
pageTitle: "I'm So Sorry, My Love 🥺",    // Browser tab title

// Floating Background Elements
floatingEmojis: {
    hearts: ['❤️', '💖', '🥺', '✨', '🌻'],  // Comforting and cute emojis
    bears: ['🧸', '🌸']                       // Bears and flowers
}

// Questions and Buttons
questions: {
    first: {
        text: "Can you forgive me for embarrassing you earlier? 🥺", // Acknowledging the mistake
        yesBtn: "Yes",                             
        noBtn: "No",                               
        secretAnswer: "I never meant to make you feel that way. I'm so sorry! ❤️"  // Hidden message
    },
    second: {
        text: "How much do I actually adore and appreciate you?",    // Second question
        startText: "This much!",                   // Text before percentage
        nextBtn: "Next ❤️"                         // Next button text
    },
    third: {
        text: "Will you let me make it up to you so I can see that gorgeous smile again?", // Final question
        yesBtn: "Yes, I forgive you!",             // Yes button text
        noBtn: "No"                                // No button text
    }
}

// Love Meter Messages
loveMessages: {
    extreme: "I love you past the universe and back!! 🥰🚀💝",  // Shows above 5000%
    high: "More than anything in the world! 🚀💝",              // Shows above 1000%
    normal: "So, so, so much! 🥰"                               // Shows above 100%
}

// Final Celebration
celebration: {
    title: "Thank you, my beautiful girl... ❤️",     // Celebration title
    message: "I am so incredibly sorry for making you feel embarrassed. You are the most amazing, gorgeous girl, and I never want to make you feel anything less than perfect. I am so lucky to have you, Ishi. I love you more than words can even say, and I promise to always protect your heart and treat you like the queen you are! 👑💖",          // Celebration message
    emojis: "🌻💖🤗💝💋❤️✨"                        // Celebration emojis
}

// Website Colors
colors: {
    backgroundStart: "#ffafbd",      // Background gradient start
    backgroundEnd: "#ffc3a0",        // Background gradient end
    buttonBackground: "#ff6b6b",     // Button color
    buttonHover: "#ff8787",          // Button hover color
    textColor: "#ff4757"             // Text color
}

// Animation Settings
animations: {
    floatDuration: "15s",           // How long hearts float (10-20s)
    floatDistance: "50px",          // Sideways movement (30-70px)
    bounceSpeed: "0.5s",            // Bounce animation speed (0.3-0.7s)
    heartExplosionSize: 1.5         // Final heart explosion size (1.2-2.0)
}

// Music Settings
music: {
    enabled: true, // Music feature is enabled
    autoplay: true, // Try to autoplay (note: some browsers may block this)
    musicUrl: "https://music.youtube.com/watch?v=z-SrH7XY1lc&list=OLAK5uy_kCu2KiLRaZG317KOZyeLDCxD0HFpyGyVU", // YouTube Music link added here
    startText: "🎵 Play Our Song", // Button text to start music
    stopText: "🔇 Stop Song", // Button text to stop music
    volume: 0.5 // Volume level (0.0 to 1.0)
}
    music: {
        enabled: true,                     // Music feature is enabled
        autoplay: true,                    // Try to autoplay (note: some browsers may block this)
        musicUrl: https://res.cloudinary.com/dgpbqhmbq/video/upload/v1778512542/ILYSB_o0yrji.mp3, // Music streaming URL
        startText: "🎵 Play Music",        // Button text to start music
        stopText: "🔇 Stop Music",         // Button text to stop music
        volume: 0.5                        // Volume level (0.0 to 1.0)
    }
};

// Don't modify anything below this line unless you know what you're doing
window.VALENTINE_CONFIG = CONFIG; 
